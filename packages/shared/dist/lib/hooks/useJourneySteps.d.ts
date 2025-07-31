import { JourneyStep, CompanyJourneyStep } from '../types/journey-unified.types';
interface UseJourneyStepsProps {
    companyId?: string;
    phaseId?: string;
    refreshInterval?: number;
}
/**
 * React hook for accessing journey steps with optional filtering and auto-refresh
 * @param props Configuration options
 * @returns Journey steps data and management functions
 */
export declare const useJourneySteps: (props?: UseJourneyStepsProps) => {
    steps: JourneyStep[];
    companyProgress: CompanyJourneyStep[];
    loading: boolean;
    error: Error | null;
    refreshSteps: () => Promise<void>;
    updateStepProgress: (stepId: string, data: {
        status?: "not_started" | "in_progress" | "completed" | "skipped";
        notes?: string;
        completion_percentage?: number;
    }) => Promise<boolean>;
    stepsWithProgress: JourneyStep[];
};
export default useJourneySteps;
//# sourceMappingURL=useJourneySteps.d.ts.map