import { Achievement, ContributionScore, AchievementCategory, AchievementTier, ScoringPeriodType } from '../types/community.types';
/**
 * Achievement Service
 * Handles all achievement-related operations
 */
export declare const achievementService: {
    /**
     * Get all achievements for a user
     */
    getUserAchievements(userId: string): Promise<Achievement[]>;
    /**
     * Get public achievements for a user
     */
    getPublicAchievements(userId: string): Promise<Achievement[]>;
    /**
     * Award an achievement to a user
     */
    awardAchievement(userId: string, achievementType: AchievementCategory, achievementName: string, tier?: AchievementTier, description?: string, isPublic?: boolean, badgeImageUrl?: string): Promise<Achievement>;
    /**
     * Update an achievement's visibility
     */
    updateAchievementVisibility(achievementId: string, isPublic: boolean): Promise<Achievement>;
    /**
     * Get contribution scores for a user
     */
    getUserContributionScores(userId: string, period?: ScoringPeriodType): Promise<ContributionScore[]>;
    /**
     * Get a user's all-time contribution score
     */
    getAllTimeScore(userId: string): Promise<number>;
    /**
     * Update a user's contribution score
     */
    updateContributionScore(userId: string, period: ScoringPeriodType, updates: {
        knowledge_sharing_points?: number;
        introduction_credits?: number;
        mentorship_impact_score?: number;
        community_building_score?: number;
    }): Promise<ContributionScore>;
    /**
     * Update a user's all-time contribution score
     */
    updateAllTimeScore(userId: string): Promise<ContributionScore>;
    /**
     * Get top contributors for a period
     */
    getTopContributors(period?: ScoringPeriodType, limit?: number): Promise<any[]>;
    /**
     * Calculate percentile ranks for all users in a period
     */
    calculatePercentileRanks(period: ScoringPeriodType): Promise<void>;
    /**
     * Helper method to get period start and end dates
     */
    getPeriodDates(period: ScoringPeriodType): {
        start: string;
        end: string;
    };
    /**
     * Check if a user qualifies for any achievements based on their contribution scores
     */
    checkForAchievements(userId: string): Promise<Achievement[]>;
};
//# sourceMappingURL=achievement.service.d.ts.map