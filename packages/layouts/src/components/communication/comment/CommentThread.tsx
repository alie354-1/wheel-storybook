/**
 * CommentThread Component
 *
 * A comprehensive comment thread component that displays comments with replies,
 * supports real-time updates, and provides full comment management functionality.
 */

import { Avatar, Badge, Button, Icon } from '@wheel/ui';
import React, { useCallback, useMemo, useState } from 'react';
import { cn } from '../../../lib/utils';
import {
  CommentThreadProps,
  ExtendedComment,
  formatCommentTimestamp,
  getCommentPriorityColor,
  getCommentTheme
} from './types';

// Comment Input Component
interface CommentInputProps {
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

const CommentInput: React.FC<CommentInputProps> = ({
  onSubmit,
  onCancel,
  placeholder = "Write a comment...",
  autoFocus = false,
  className
}) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(content.trim());
      setContent('');
    } finally {
      setIsSubmitting(false);
    }
  }, [content, onSubmit, isSubmitting]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit(e);
    }
    if (e.key === 'Escape' && onCancel) {
      onCancel();
    }
  }, [handleSubmit, onCancel]);

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          Press Cmd+Enter to submit
        </span>
        <div className="flex items-center space-x-2">
          {onCancel && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            size="sm"
            disabled={!content.trim() || isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Comment'}
          </Button>
        </div>
      </div>
    </form>
  );
};

// Comment Item Component
interface CommentItemProps {
  comment: ExtendedComment;
  currentUser: any;
  context?: string;
  depth?: number;
  onReply?: (parentId: string, content: string) => void;
  onResolve?: (commentId: string) => void;
  onEdit?: (commentId: string, content: string) => void;
  onDelete?: (commentId: string) => void;
  onReact?: (commentId: string, emoji: string) => void;
  allowReplies?: boolean;
  allowResolution?: boolean;
  allowEditing?: boolean;
  permissions?: string[];
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  currentUser,
  context = 'neutral',
  depth = 0,
  onReply,
  onResolve,
  onEdit,
  onDelete,
  onReact,
  allowReplies = true,
  allowResolution = true,
  allowEditing = true,
  permissions = []
}) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [showActions, setShowActions] = useState(false);

  const theme = getCommentTheme(context as any);
  const isAuthor = comment.author.id === currentUser?.id;
  const canReply = allowReplies && permissions.includes('comment:reply');
  const canResolve = allowResolution && (permissions.includes('comment:resolve') || isAuthor);
  const canEdit = allowEditing && (permissions.includes('comment:edit') || isAuthor);
  const canDelete = permissions.includes('comment:delete') || isAuthor;

  const handleReply = useCallback((content: string) => {
    if (onReply) {
      onReply(comment.id, content);
      setIsReplying(false);
    }
  }, [comment.id, onReply]);

  const handleEdit = useCallback(() => {
    if (onEdit && editContent.trim() !== comment.content) {
      onEdit(comment.id, editContent.trim());
    }
    setIsEditing(false);
  }, [comment.id, comment.content, editContent, onEdit]);

  const handleReaction = useCallback((emoji: string) => {
    if (onReact) {
      onReact(comment.id, emoji);
    }
  }, [comment.id, onReact]);

  const priorityColor = comment.priority ? getCommentPriorityColor(comment.priority, theme) : undefined;

  return (
    <div
      className={cn(
        "group relative",
        depth > 0 && "ml-8 border-l-2 border-gray-100 pl-4"
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Priority indicator */}
      {comment.priority && comment.priority !== 'low' && (
        <div
          className="absolute -left-1 top-3 w-2 h-2 rounded-full"
          style={{ backgroundColor: priorityColor }}
        />
      )}

      <div className="flex space-x-3">
        <Avatar
          src={comment.author.avatar}
          alt={comment.author.name}
          size="sm"
          className="flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          {/* Comment Header */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm text-gray-900">
              {comment.author.name}
            </span>
            <span className="text-xs text-gray-500">
              {formatCommentTimestamp(comment.timestamp)}
            </span>
            {comment.edited && (
              <span className="text-xs text-gray-400">(edited)</span>
            )}
            {comment.resolved && (
              <Badge variant="success" size="sm">
                Resolved
              </Badge>
            )}
            {comment.priority && comment.priority !== 'low' && (
              <Badge
                variant="secondary"
                size="sm"
                className="border"
              >
                {comment.priority}
              </Badge>
            )}
          </div>

          {/* Comment Content */}
          <div className="mb-2">
            {isEditing ? (
              <div className="space-y-2">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={handleEdit}>
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setIsEditing(false);
                      setEditContent(comment.content);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-700 whitespace-pre-wrap">
                {comment.content}
              </div>
            )}
          </div>

          {/* Tags */}
          {comment.tags && comment.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {comment.tags.map((tag) => (
                <Badge key={tag} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Reactions */}
          {comment.reactions && comment.reactions.length > 0 && (
            <div className="flex items-center space-x-1 mb-2">
              {comment.reactions.map((reaction) => (
                <button
                  key={reaction.emoji}
                  onClick={() => handleReaction(reaction.emoji)}
                  className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-xs"
                >
                  <span>{reaction.emoji}</span>
                  <span>{reaction.users.length}</span>
                </button>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className={cn(
            "flex items-center space-x-3 text-xs text-gray-500 transition-opacity",
            showActions ? "opacity-100" : "opacity-0"
          )}>
            {canReply && !comment.resolved && (
              <button
                onClick={() => setIsReplying(true)}
                className="hover:text-gray-700"
              >
                Reply
              </button>
            )}
            {canEdit && !comment.resolved && (
              <button
                onClick={() => setIsEditing(true)}
                className="hover:text-gray-700"
              >
                Edit
              </button>
            )}
            {canResolve && !comment.resolved && (
              <button
                onClick={() => onResolve?.(comment.id)}
                className="hover:text-gray-700"
              >
                Resolve
              </button>
            )}
            <button
              onClick={() => handleReaction('👍')}
              className="hover:text-gray-700"
            >
              👍
            </button>
            <button
              onClick={() => handleReaction('❤️')}
              className="hover:text-gray-700"
            >
              ❤️
            </button>
            {canDelete && (
              <button
                onClick={() => onDelete?.(comment.id)}
                className="hover:text-red-600"
              >
                Delete
              </button>
            )}
          </div>

          {/* Reply Input */}
          {isReplying && (
            <div className="mt-3">
              <CommentInput
                onSubmit={handleReply}
                onCancel={() => setIsReplying(false)}
                placeholder="Write a reply..."
                autoFocus
              />
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  currentUser={currentUser}
                  context={context}
                  depth={depth + 1}
                  onReply={onReply}
                  onResolve={onResolve}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onReact={onReact}
                  allowReplies={allowReplies}
                  allowResolution={allowResolution}
                  allowEditing={allowEditing}
                  permissions={permissions}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main CommentThread Component
export const CommentThread: React.FC<CommentThreadProps> = ({
  comments: rawComments,
  parentId,
  parentType,
  currentUser,
  context = 'neutral',
  onCommentAdd,
  onCommentReply,
  onCommentResolve,
  onCommentEdit,
  onCommentDelete,
  onCommentReact,
  allowReplies = true,
  allowResolution = true,
  allowEditing = true,
  permissions = [],
  className
}) => {
  const [showNewComment, setShowNewComment] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unresolved' | 'resolved'>('all');

  const theme = getCommentTheme(context);

  // Convert comments to ExtendedComment format
  const comments = useMemo(() => {
    return rawComments.map(comment => ({
      ...comment,
      status: 'active' as const
    }));
  }, [rawComments]);

  // Filter comments based on current filter
  const filteredComments = useMemo(() => {
    return comments.filter(comment => {
      switch (filter) {
        case 'unresolved':
          return !comment.resolved;
        case 'resolved':
          return comment.resolved;
        default:
          return true;
      }
    });
  }, [comments, filter]);

  // Sort comments by timestamp
  const sortedComments = useMemo(() => {
    return [...filteredComments].sort((a, b) =>
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }, [filteredComments]);

  const handleNewComment = useCallback((content: string) => {
    if (onCommentAdd) {
      const newComment: Omit<ExtendedComment, 'id' | 'timestamp'> = {
        content,
        author: currentUser,
        workspaceId: currentUser.workspace || '',
        resolved: false,
        status: 'active'
      };
      onCommentAdd(newComment);
      setShowNewComment(false);
    }
  }, [currentUser, onCommentAdd]);

  const handleReply = useCallback((parentId: string, content: string) => {
    if (onCommentReply) {
      const newReply: Omit<ExtendedComment, 'id' | 'timestamp'> = {
        content,
        author: currentUser,
        parentId,
        workspaceId: currentUser.workspace || '',
        resolved: false,
        status: 'active'
      };
      onCommentReply(parentId, newReply);
    }
  }, [currentUser, onCommentReply]);

  const canAddComment = permissions.includes('comment:create');

  return (
    <div
      className={cn("space-y-4", className)}
      style={{ '--comment-primary': theme.primary } as React.CSSProperties}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-medium text-gray-900">
            Comments ({comments.length})
          </h3>

          {/* Filter buttons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors",
                filter === 'all'
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unresolved')}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors",
                filter === 'unresolved'
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Open
            </button>
            <button
              onClick={() => setFilter('resolved')}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors",
                filter === 'resolved'
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Resolved
            </button>
          </div>
        </div>

        {canAddComment && (
          <Button
            size="sm"
            onClick={() => setShowNewComment(true)}
            disabled={showNewComment}
          >
            <Icon name="Plus" className="w-4 h-4 mr-1" />
            Add Comment
          </Button>
        )}
      </div>

      {/* New Comment Input */}
      {showNewComment && (
        <div className="border border-gray-200 rounded-lg p-4">
          <CommentInput
            onSubmit={handleNewComment}
            onCancel={() => setShowNewComment(false)}
            autoFocus
          />
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {sortedComments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {filter === 'all'
              ? "No comments yet. Be the first to comment!"
              : `No ${filter} comments.`
            }
          </div>
        ) : (
          sortedComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              context={context}
              onReply={handleReply}
              onResolve={onCommentResolve}
              onEdit={onCommentEdit}
              onDelete={onCommentDelete}
              onReact={onCommentReact}
              allowReplies={allowReplies}
              allowResolution={allowResolution}
              allowEditing={allowEditing}
              permissions={permissions}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentThread;
