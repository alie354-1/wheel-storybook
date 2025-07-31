/**
 * Feedback Service
 *
 * Provides methods for managing user feedback for journey steps and tools.
 */
export declare class FeedbackService {
    /**
     * Submit feedback for a journey step
     */
    submitStepFeedback(stepId: string, companyId: string, userId: string, feedback: {
        ratingClarity?: number;
        ratingDifficulty?: number;
        ratingUsefulness?: number;
        ratingOverall?: number;
        feedbackText?: string;
        improvementSuggestion?: string;
        reportedIssues?: string;
        screenshotUrls?: string[];
    }): Promise<string | null>;
    /**
     * Get feedback for a step
     */
    getStepFeedback(stepId: string, companyId: string, options?: {
        limit?: number;
        offset?: number;
        includeResolutions?: boolean;
        includeCategories?: boolean;
    }): Promise<any[]>;
    /**
     * Get average ratings for a step
     */
    getStepAverageRatings(stepId: string): Promise<{
        avgClarity: number;
        avgDifficulty: number;
        avgUsefulness: number;
        avgOverall: number;
        totalRatings: number;
    } | null>;
    /**
     * Submit tool feedback
     */
    submitToolFeedback(toolId: string, companyId: string, userId: string, feedback: {
        stepId?: string;
        ratingEaseOfUse?: number;
        ratingFunctionality?: number;
        ratingValue?: number;
        ratingOverall?: number;
        pros?: string;
        cons?: string;
        reviewText?: string;
        wouldRecommend?: boolean;
    }): Promise<string | null>;
    /**
     * Get tool feedback
     */
    getToolFeedback(toolId: string, options?: {
        companyId?: string;
        stepId?: string;
        limit?: number;
        offset?: number;
    }): Promise<any[]>;
    /**
     * Get average ratings for a tool
     */
    getToolAverageRatings(toolId: string): Promise<{
        avgEaseOfUse: number;
        avgFunctionality: number;
        avgValue: number;
        avgOverall: number;
        recommendationPercentage: number;
        totalRatings: number;
    } | null>;
    /**
     * Add category to feedback
     */
    addFeedbackCategory(feedbackId: string, categoryId: string, assignedBy?: string, confidenceScore?: number, isAutoAssigned?: boolean): Promise<boolean>;
    /**
     * Remove category from feedback
     */
    removeFeedbackCategory(feedbackId: string, categoryId: string): Promise<boolean>;
    /**
     * Update feedback resolution status
     */
    updateFeedbackResolution(feedbackId: string, status: 'open' | 'in_progress' | 'resolved' | 'wont_fix' | 'duplicate', resolvedBy?: string, resolutionNote?: string): Promise<boolean>;
    /**
     * Get feedback categories
     */
    getFeedbackCategories(): Promise<any[]>;
    /**
     * Get feedback summary for steps in a company
     */
    getFeedbackSummaryByStep(companyId: string): Promise<any[]>;
    /**
     * Get trending feedback issues
     */
    getTrendingFeedbackIssues(companyId: string): Promise<any[]>;
    /**
     * Create a feedback notification
     */
    createFeedbackNotification(feedbackId: string, feedbackType: 'step' | 'tool', userId: string, eventType: string): Promise<boolean>;
    /**
     * Mark feedback notification as read
     */
    markFeedbackNotificationAsRead(notificationId: string): Promise<boolean>;
}
export declare const feedbackService: FeedbackService;
//# sourceMappingURL=feedback.service.d.ts.map