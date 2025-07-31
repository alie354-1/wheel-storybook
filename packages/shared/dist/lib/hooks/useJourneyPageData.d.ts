import { StepStatus } from '../../components/company/journey/StepCard/StepCardProps';
import { JourneyPhase, JourneyStep } from '../types/journey-unified.types';
export declare function useJourneyPageData(companyId: string): {
    phases: JourneyPhase[];
    steps: JourneyStep[];
    companySteps: import('../types/journey-unified.types').CompanyJourneyStep[];
    isLoading: boolean;
    error: Error | null;
    updateStepStatus: (stepId: string, status: StepStatus) => Promise<void>;
};
//# sourceMappingURL=useJourneyPageData.d.ts.map