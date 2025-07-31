import { JourneyStepTemplate } from '../types/journey-unified.types';
export interface CommunityStepContribution {
    id: string;
    contributorId: string;
    contributorName: string;
    stepTemplate: JourneyStepTemplate;
    upvotes: number;
    downvotes: number;
    adoptionCount: number;
    successRate: number;
    communityFeedback: CommunityFeedback[];
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
}
export interface CommunityFeedback {
    id: string;
    userId: string;
    userName: string;
    stepId: string;
    rating: number;
    comment: string;
    helpful: boolean;
    createdAt: string;
}
export interface PeerProgress {
    companyId: string;
    companyName: string;
    industry: string;
    currentPhase: string;
    completionRate: number;
    recentMilestones: string[];
    isPublic: boolean;
    anonymized: boolean;
}
export interface ExpertRecommendation {
    id: string;
    expertId: string;
    expertName: string;
    expertCredentials: string;
    stepId: string;
    recommendation: string;
    reasoning: string[];
    endorsementLevel: 'suggested' | 'recommended' | 'essential';
    targetCompanyStage: string[];
    upvotes: number;
    createdAt: string;
}
export interface CommunityInsight {
    stepId: string;
    stepName: string;
    totalAttempts: number;
    successRate: number;
    averageCompletionDays: number;
    commonChallenges: string[];
    bestPractices: string[];
    recommendedTools: string[];
    expertTips: string[];
}
export declare const communityJourneyIntegrationService: {
    /**
     * Submit a community step contribution
     */
    submitStepContribution(contribution: {
        contributorId: string;
        stepTemplate: Omit<JourneyStepTemplate, "id" | "created_at" | "updated_at">;
        description: string;
    }): Promise<CommunityStepContribution>;
    /**
     * Get community step contributions with filtering
     */
    getCommunityContributions(filters?: {
        status?: "pending" | "approved" | "rejected";
        category?: string;
        difficulty?: string;
        minRating?: number;
        limit?: number;
    }): Promise<CommunityStepContribution[]>;
    /**
     * Vote on a community contribution
     */
    voteOnContribution(contributionId: string, userId: string, vote: "up" | "down"): Promise<void>;
    /**
     * Get peer progress for community comparison
     */
    getPeerProgress(companyId: string, filters?: {
        industry?: string;
        companyStage?: string;
        anonymized?: boolean;
        limit?: number;
    }): Promise<PeerProgress[]>;
    /**
     * Get expert recommendations for steps
     */
    getExpertRecommendations(stepId?: string): Promise<ExpertRecommendation[]>;
    /**
     * Submit feedback on a step
     */
    submitStepFeedback(feedback: {
        userId: string;
        stepId: string;
        rating: number;
        comment: string;
        helpful?: boolean;
    }): Promise<CommunityFeedback>;
    /**
     * Get community insights for a step
     */
    getStepCommunityInsights(stepId: string): Promise<CommunityInsight>;
    /**
     * Share company progress with community
     */
    shareProgress(companyId: string, shareData: {
        milestoneTitle: string;
        description: string;
        isPublic: boolean;
        anonymized: boolean;
    }): Promise<void>;
    /**
     * Get community activity feed
     */
    getCommunityActivity(limit?: number): Promise<Array<{
        id: string;
        type: "milestone" | "contribution" | "recommendation";
        title: string;
        description: string;
        author: string;
        createdAt: string;
        upvotes?: number;
    }>>;
    /**
     * Helper method to update vote counts
     */
    updateContributionVoteCounts(contributionId: string): Promise<void>;
};
//# sourceMappingURL=communityJourneyIntegration.service.d.ts.map