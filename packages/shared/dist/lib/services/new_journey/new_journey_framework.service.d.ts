import { NewJourneyPhase, NewJourneyDomain, NewJourneyStep } from '../../types/new_journey.types';
export declare const newJourneyFrameworkService: {
    /**
     * Get all canonical phases for the new journey system.
     */
    getPhases(): Promise<NewJourneyPhase[]>;
    /**
     * Get all canonical domains for the new journey system.
     */
    getDomains(): Promise<NewJourneyDomain[]>;
    /**
     * Get all canonical framework steps for the new journey system.
     * Simplified to just fetch all steps without filtering for now.
     */
    getFrameworkSteps(): Promise<NewJourneyStep[]>;
    /**
     * Get all canonical tasks for a given framework step.
     * This is only called when the step page is opened.
     */
    getCanonicalTasks(frameworkStepId: string): Promise<any[]>;
};
//# sourceMappingURL=new_journey_framework.service.d.ts.map