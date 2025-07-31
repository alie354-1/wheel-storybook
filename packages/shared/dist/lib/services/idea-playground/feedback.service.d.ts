/**
 * Types of feedback that can be provided on ideas
 */
export declare enum FeedbackType {
    GENERAL = "general",
    PROBLEM_STATEMENT = "problem_statement",
    SOLUTION = "solution",
    BUSINESS_MODEL = "business_model",
    MARKET_FIT = "market_fit",
    TECHNICAL_FEASIBILITY = "technical_feasibility",
    COMPETITIVE_ANALYSIS = "competitive_analysis"
}
/**
 * Feedback data structure
 */
export interface IdeaFeedback {
    id: string;
    ideaId: string;
    content: string;
    rating?: number;
    type: FeedbackType | string;
    userId?: string;
    createdAt: string;
}
/**
 * Service for handling feedback on business ideas
 */
export declare class FeedbackService {
    private feedbackStore;
    /**
     * Save feedback for an idea
     *
     * @param ideaId The idea ID
     * @param feedback The feedback text
     * @param rating Optional rating (1-5)
     * @param type Type of feedback
     * @param userId Optional user ID of the feedback provider
     * @returns Success status
     */
    saveFeedback(ideaId: string, feedback: string, rating?: number, type?: FeedbackType | string, userId?: string): Promise<boolean>;
    /**
     * Get all feedback for a specific idea
     *
     * @param ideaId The idea ID
     * @returns Array of feedback items
     */
    getFeedbackForIdea(ideaId: string): Promise<IdeaFeedback[]>;
    /**
     * Get all feedback of a specific type for an idea
     *
     * @param ideaId The idea ID
     * @param type The feedback type
     * @returns Array of feedback items of the specified type
     */
    getFeedbackByType(ideaId: string, type: FeedbackType | string): Promise<IdeaFeedback[]>;
    /**
     * Get the average rating for an idea
     *
     * @param ideaId The idea ID
     * @returns Average rating or null if no ratings exist
     */
    getAverageRating(ideaId: string): Promise<number | null>;
    /**
     * Delete a specific feedback item
     *
     * @param feedbackId The feedback ID to delete
     * @returns Success status
     */
    deleteFeedback(feedbackId: string): Promise<boolean>;
    /**
     * Clear all feedback for an idea
     *
     * @param ideaId The idea ID
     * @returns Success status
     */
    clearFeedbackForIdea(ideaId: string): Promise<boolean>;
    /**
     * Generate a unique ID for a feedback item
     *
     * @returns Unique ID
     */
    private generateId;
}
//# sourceMappingURL=feedback.service.d.ts.map