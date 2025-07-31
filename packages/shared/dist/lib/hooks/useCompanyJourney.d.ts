import { CompanyJourneyStep, JourneyStep, JourneyPhase, JourneyStepComplete } from '../types/journey-unified.types';
/**
 * Hook for interacting with a company's journey
 * Provides methods for accessing and updating journey data
 */
export declare function useCompanyJourney(companyId: string): {
    phases: JourneyPhase[];
    phaseProgress: PhaseWithProgress[];
    companySteps: CompanyJourneyStep[];
    isLoading: boolean;
    error: Error | null;
    loadJourneyData: () => Promise<void>;
    getStepDetails: (stepId: string) => Promise<JourneyStepComplete>;
    updateStepProgress: (stepId: string, updates: {
        status?: "not_started" | "in_progress" | "completed" | "skipped";
        notes?: string;
        completion_percentage?: number;
        custom_difficulty?: number;
        custom_time_estimate?: number;
    }) => Promise<boolean>;
    getNextRecommendedSteps: (limit?: number) => Promise<JourneyStep[]>;
    completionPercentage: number;
};
//# sourceMappingURL=useCompanyJourney.d.ts.map