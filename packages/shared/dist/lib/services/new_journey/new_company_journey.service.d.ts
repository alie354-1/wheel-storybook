import { NewCompanyJourney, NewCompanyJourneyStep, NewStepTask, NewStepStatus } from '../../types/new_journey.types';
export declare const newCompanyJourneyService: {
    /**
     * Fetches or creates a journey for a given company.
     * Every company has at least one default journey.
     */
    getOrCreateCompanyJourney(companyId: string): Promise<NewCompanyJourney>;
    /**
     * Adds a step from the canonical framework to a company's journey.
     */
    addStepToJourney(journeyId: string, frameworkStepId: string): Promise<NewCompanyJourneyStep>;
    /**
     * Updates the status of a company's journey step.
     */
    updateStepStatus(companyStepId: string, status: NewStepStatus): Promise<NewCompanyJourneyStep>;
    /**
     * Gets all steps for a given company journey.
     */
    getCompanySteps(journeyId: string): Promise<NewCompanyJourneyStep[]>;
    /**
     * Gets all tasks for a specific company journey step.
     */
    getStepTasks(companyStepId: string): Promise<NewStepTask[]>;
    /**
     * Deletes a company journey step.
     */
    deleteCompanyStep(stepId: string): Promise<void>;
    /**
     * Updates the completion status of a single task.
     */
    updateTaskStatus(taskId: string, isCompleted: boolean): Promise<NewStepTask>;
    /**
     * Adds a canonical task to a company journey step.
     * This creates a copy of the canonical task as a company-specific task.
     */
    addCanonicalTaskToStep(companyStepId: string, canonicalTaskId: string): Promise<NewStepTask>;
    /**
     * Finds an existing company step for a canonical step, or creates it if it doesn't exist.
     * This is the core logic for the `useJourneyStepForModule` hook.
     */
    getOrCreateStepForModule(companyId: string, canonicalStepId: string): Promise<NewCompanyJourneyStep>;
};
//# sourceMappingURL=new_company_journey.service.d.ts.map