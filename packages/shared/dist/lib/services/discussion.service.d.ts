import { DiscussionThread, ThreadReply, ContentReaction, ExpertResponse, CreateDiscussionThreadRequest, CreateThreadReplyRequest, DiscussionThreadFilters, PaginationParams, PaginatedResponse, ContentEntity, ReactionCategory, ResolutionState } from '../types/community.types';
/**
 * Discussion Service
 * Handles all discussion-related operations
 */
export declare const discussionService: {
    /**
     * Get all discussion threads with optional filtering and pagination
     */
    getThreads(filters?: DiscussionThreadFilters, pagination?: PaginationParams): Promise<PaginatedResponse<DiscussionThread>>;
    /**
     * Get a single discussion thread by ID
     */
    getThread(threadId: string): Promise<DiscussionThread | null>;
    /**
     * Create a new discussion thread
     */
    createThread(threadData: CreateDiscussionThreadRequest, authorId: string): Promise<DiscussionThread>;
    /**
     * Update an existing discussion thread
     */
    updateThread(threadId: string, updates: {
        title?: string;
        content?: string;
        thread_type?: string;
        priority_level?: string;
        confidentiality_level?: string;
        tags?: string[];
        is_pinned?: boolean;
        is_locked?: boolean;
    }): Promise<DiscussionThread>;
    /**
     * Update the resolution status of a thread
     */
    updateResolutionStatus(threadId: string, status: ResolutionState, userId: string, note?: string): Promise<void>;
    /**
     * Delete a discussion thread
     */
    deleteThread(threadId: string): Promise<void>;
    /**
     * Get all replies for a thread
     */
    getReplies(threadId: string): Promise<ThreadReply[]>;
    /**
     * Create a new reply to a thread
     */
    createReply(replyData: CreateThreadReplyRequest, authorId: string): Promise<ThreadReply>;
    /**
     * Update an existing reply
     */
    updateReply(replyId: string, updates: {
        content?: string;
        reply_type?: string;
        is_accepted_answer?: boolean;
    }): Promise<ThreadReply>;
    /**
     * Delete a reply
     */
    deleteReply(replyId: string, threadId: string): Promise<void>;
    /**
     * Mark a reply as an accepted answer
     */
    markAsAcceptedAnswer(replyId: string, threadId: string): Promise<void>;
    /**
     * Add a reaction to a content item (thread or reply)
     */
    addReaction(contentType: ContentEntity, contentId: string, userId: string, reactionType: ReactionCategory): Promise<ContentReaction>;
    /**
     * Remove a reaction from a content item
     */
    removeReaction(contentType: ContentEntity, contentId: string, userId: string, reactionType: ReactionCategory): Promise<void>;
    /**
     * Get all reactions for a content item
     */
    getReactions(contentType: ContentEntity, contentId: string): Promise<ContentReaction[]>;
    /**
     * Mark a reply as an expert response
     */
    markAsExpertResponse(replyId: string, expertId: string, expertiseArea: string, confidenceScore: number): Promise<ExpertResponse>;
    /**
     * Verify an expert response
     */
    verifyExpertResponse(expertResponseId: string, verifierId: string): Promise<ExpertResponse>;
    /**
     * Get all expert responses for a thread
     */
    getExpertResponsesForThread(threadId: string): Promise<ExpertResponse[]>;
};
//# sourceMappingURL=discussion.service.d.ts.map