/**
 * Comment System Types
 *
 * Extended type definitions for the comment system components
 * supporting contextual commenting, real-time synchronization, and approval workflows.
 */

import {
  Annotation,
  Approval,
  Comment,
  Position,
  ReviewItem,
  TextSelection,
  User,
  WorkspaceContext
} from '../types';

// Extended Comment Types for Enhanced Functionality
export interface ExtendedComment extends Comment {
  status: 'active' | 'archived' | 'deleted';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tags?: string[];
  assignee?: User;
  dueDate?: Date;
}

// Extended Review System
export interface ExtendedReviewItem extends Omit<ReviewItem, 'type' | 'status'> {
  type: 'document' | 'design' | 'code' | 'project';
  status: 'pending' | 'approved' | 'rejected' | 'changes_requested';
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tags?: string[];
}

export interface ExtendedApproval extends Omit<Approval, 'status'> {
  status: 'approved' | 'rejected' | 'changes_requested';
}

// Extended Annotation
export interface ExtendedAnnotation extends Annotation {
  createdAt: Date;
  updatedAt: Date;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tags?: string[];
}

// Extended Text Selection
export interface ExtendedTextSelection extends TextSelection {
  elementId?: string;
  xpath?: string;
}

// Supporting Types
export interface DesignType {
  id: string;
  title: string;
  url: string;
  type: 'figma' | 'sketch' | 'adobe_xd' | 'image';
  workspace: string;
  createdBy: User;
  createdAt: Date;
  version?: string;
  layers?: DesignLayer[];
}

export interface DesignLayer {
  id: string;
  name: string;
  type: 'frame' | 'group' | 'component' | 'text' | 'shape';
  visible: boolean;
  locked: boolean;
}

export interface DocumentType {
  id: string;
  title: string;
  content: string;
  type: 'markdown' | 'html' | 'text' | 'pdf';
  workspace: string;
  createdBy: User;
  createdAt: Date;
  version?: string;
  sections?: DocumentSection[];
}

export interface DocumentSection {
  id: string;
  title: string;
  content: string;
  order: number;
  type: 'heading' | 'paragraph' | 'list' | 'code' | 'image';
}

// Enhanced Component Props
export interface CommentThreadProps {
  comments: Comment[];
  parentId: string;
  parentType: 'document' | 'design' | 'project' | 'task';
  currentUser: User;
  context?: WorkspaceContext;
  onCommentAdd?: (comment: Omit<ExtendedComment, 'id' | 'timestamp'>) => void;
  onCommentReply?: (parentId: string, comment: Omit<ExtendedComment, 'id' | 'timestamp'>) => void;
  onCommentResolve?: (commentId: string) => void;
  onCommentEdit?: (commentId: string, content: string) => void;
  onCommentDelete?: (commentId: string) => void;
  onCommentReact?: (commentId: string, emoji: string) => void;
  onCommentAssign?: (commentId: string, assignee: User) => void;
  onCommentPriority?: (commentId: string, priority: 'low' | 'medium' | 'high' | 'urgent') => void;
  onCommentTag?: (commentId: string, tags: string[]) => void;
  allowReplies?: boolean;
  allowResolution?: boolean;
  allowEditing?: boolean;
  allowAssignment?: boolean;
  allowPriority?: boolean;
  allowTags?: boolean;
  permissions?: string[];
  className?: string;
}

export interface InlineCommentProps {
  selection: ExtendedTextSelection;
  document: DocumentType;
  currentUser: User;
  context?: WorkspaceContext;
  onCommentCreate?: (comment: Omit<ExtendedComment, 'id' | 'timestamp'>) => void;
  onSelectionChange?: (selection: ExtendedTextSelection) => void;
  onCancel?: () => void;
  permissions?: string[];
  className?: string;
}

export interface AnnotationCommentProps {
  position: Position;
  design: DesignType;
  currentUser: User;
  context?: WorkspaceContext;
  onAnnotationCreate?: (annotation: Omit<ExtendedAnnotation, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onPositionChange?: (position: Position) => void;
  onCancel?: () => void;
  permissions?: string[];
  className?: string;
}

export interface ReviewCommentProps {
  reviewItem: ExtendedReviewItem;
  currentUser: User;
  context?: WorkspaceContext;
  onApprove?: () => void;
  onReject?: (reason: string) => void;
  onRequestChanges?: (reason: string) => void;
  onCommentAdd?: (comment: Omit<ExtendedComment, 'id' | 'timestamp'>) => void;
  showApprovalActions?: boolean;
  permissions?: string[];
  className?: string;
}

export interface CommentInputProps {
  onSubmit: (content: string, attachments?: File[]) => void;
  onCancel?: () => void;
  currentUser: User;
  context?: WorkspaceContext;
  placeholder?: string;
  maxLength?: number;
  allowAttachments?: boolean;
  allowFormatting?: boolean;
  allowMentions?: boolean;
  allowPriority?: boolean;
  allowTags?: boolean;
  allowAssignment?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
}

// Event Types for Real-time Updates
export interface CommentEvent {
  type: 'comment:created' | 'comment:updated' | 'comment:deleted' | 'comment:resolved' | 'comment:reaction';
  comment: ExtendedComment;
  user: User;
  timestamp: Date;
}

export interface AnnotationEvent {
  type: 'annotation:created' | 'annotation:updated' | 'annotation:deleted';
  annotation: ExtendedAnnotation;
  user: User;
  timestamp: Date;
}

export interface ReviewEvent {
  type: 'review:approved' | 'review:rejected' | 'review:changes_requested';
  reviewItem: ExtendedReviewItem;
  approval: ExtendedApproval;
  user: User;
  timestamp: Date;
}

// Utility Types
export type CommentStatus = 'active' | 'archived' | 'deleted';
export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'changes_requested';
export type AnnotationStatus = 'open' | 'resolved' | 'archived';
export type CommentPriority = 'low' | 'medium' | 'high' | 'urgent';

// Permission Types
export type CommentPermission =
  | 'comment:create'
  | 'comment:edit'
  | 'comment:delete'
  | 'comment:resolve'
  | 'comment:react'
  | 'comment:mention'
  | 'comment:assign'
  | 'comment:priority'
  | 'comment:tag'
  | 'review:approve'
  | 'review:reject'
  | 'review:request_changes'
  | 'annotation:create'
  | 'annotation:edit'
  | 'annotation:delete';

// Context-specific styling
export interface CommentTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export const WORKSPACE_COMMENT_THEMES: Record<string, CommentTheme> = {
  consultant: {
    primary: '#8B5CF6',
    secondary: '#A78BFA',
    accent: '#C4B5FD',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  client: {
    primary: '#3B82F6',
    secondary: '#60A5FA',
    accent: '#93C5FD',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  admin: {
    primary: '#EF4444',
    secondary: '#F87171',
    accent: '#FCA5A5',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  expert: {
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#6EE7B7',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  tool_creator: {
    primary: '#F59E0B',
    secondary: '#FBBF24',
    accent: '#FCD34D',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  founder: {
    primary: '#7C3AED',
    secondary: '#8B5CF6',
    accent: '#A78BFA',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  neutral: {
    primary: '#6B7280',
    secondary: '#9CA3AF',
    accent: '#D1D5DB',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  }
};

// Utility functions for comment system
export const getCommentTheme = (context: WorkspaceContext = 'neutral'): CommentTheme => {
  return WORKSPACE_COMMENT_THEMES[context] || WORKSPACE_COMMENT_THEMES.neutral;
};

export const formatCommentTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return timestamp.toLocaleDateString();
};

export const getCommentPriorityColor = (priority: CommentPriority, theme: CommentTheme): string => {
  switch (priority) {
    case 'urgent':
      return theme.error;
    case 'high':
      return theme.warning;
    case 'medium':
      return theme.primary;
    case 'low':
    default:
      return theme.textSecondary;
  }
};
