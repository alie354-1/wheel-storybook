import { StepRecommendation } from '@/lib/types/journey-steps.types';
export declare class CoreRecommendationService {
    static getRecommendations(companyId: string, limit?: number, context?: {
        userId?: string;
        learningStyle?: string | null;
        pacePreference?: number | null;
        selectedPhases?: string[];
        focusAreas?: string[];
        timeConstraint?: number;
        companyId?: string;
        companyMaturity?: number;
        recentCompletions?: {
            stepId: string;
            completedAt: string;
        }[];
        teamSize?: number;
        userRole?: string;
        previousSuccessPatterns?: string[];
    }): Promise<StepRecommendation[]>;
    private static trackRecommendationEvent;
    private static scoreSteps;
    private static calculateDifficultyScore;
    private static checkPrerequisitesCompleted;
}
//# sourceMappingURL=core.service.d.ts.map