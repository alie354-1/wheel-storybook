import { UserLearningProfile } from '../types/profile.types';
export declare const getUserLearningProfile: (userId: string) => Promise<UserLearningProfile | null>;
export declare const upsertUserLearningProfile: (userId: string, profileData: Partial<Omit<UserLearningProfile, "user_id" | "created_at" | "updated_at">>) => Promise<UserLearningProfile | null>;
/**
 * Analyzes user interaction data to update their learning profile characteristics.
 * This would likely run periodically or be triggered by specific events.
 *
 * @param userId - The ID of the user to analyze.
 * @returns A promise resolving to the potentially updated learning profile or null.
 */
export declare const analyzeUserBehavior: (userId: string) => Promise<UserLearningProfile | null>;
/**
 * Generates a personalized learning path (sequence of steps) for a user.
 *
 * @param userId - The ID of the user.
 * @param journeyId - The ID of the base journey to personalize.
 * @param goals - Optional user-defined goals or target outcomes.
 * @returns A promise resolving to an ordered list of step IDs or null.
 */
export declare const generatePersonalizedPath: (userId: string, journeyId: string, // Assuming journeyId might be used to filter base steps
goals?: string[]) => Promise<string[] | null>;
/**
 * Identifies skill gaps based on user profile and progress, and recommends relevant steps.
 *
 * @param userId - The ID of the user.
 * @param companyId - The company context for relevant skills.
 * @returns A promise resolving to a list of recommended step IDs or null.
 */
export declare const getSkillGapRecommendations: (userId: string, companyId: string) => Promise<{
    stepId: string;
    reason: string;
}[] | null>;
//# sourceMappingURL=learningProfile.service.d.ts.map