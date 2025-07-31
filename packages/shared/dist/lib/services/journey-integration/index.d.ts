/**
 * Journey Integration Service
 *
 * Connects journey steps with experts, resources, and community features.
 * This service acts as the integration layer between the journey system and other modules.
 */
export interface JourneyStep {
    id: string;
    title: string;
    description: string;
    phase: string;
    order: number;
    estimatedTime: string;
    status: 'not_started' | 'in_progress' | 'completed';
    resources?: {
        articles?: {
            id: string;
            title: string;
            url: string;
        }[];
        videos?: {
            id: string;
            title: string;
            url: string;
        }[];
        tools?: {
            id: string;
            name: string;
            url: string;
        }[];
    };
}
export interface Journey {
    id: string;
    companyId: string;
    title: string;
    description: string;
    phases: JourneyPhase[];
}
export interface JourneyPhase {
    id: string;
    title: string;
    description: string;
    order: number;
    steps: JourneyStep[];
}
export interface StepProgress {
    stepId: string;
    companyId: string;
    status: 'not_started' | 'in_progress' | 'completed';
    startedAt?: Date;
    completedAt?: Date;
    timeSpent?: number;
    notes?: string;
}
declare class JourneyIntegrationService {
    /**
     * Get a journey step by ID
     */
    getStep(stepId: string): Promise<JourneyStep>;
    /**
     * Get a company's journey
     */
    getJourney(companyId: string): Promise<Journey>;
    /**
     * Update a step's status
     */
    updateStepStatus(stepId: string, companyId: string, status: 'not_started' | 'in_progress' | 'completed', notes?: string): Promise<StepProgress>;
    /**
     * Get step progress for a company
     */
    getStepProgress(stepId: string, companyId: string): Promise<StepProgress>;
    /**
     * Get overall journey progress for a company
     */
    getJourneyProgress(companyId: string): Promise<{
        totalSteps: number;
        completedSteps: number;
        currentPhase: string;
        phaseProgress: {
            phase: string;
            completed: number;
            total: number;
        }[];
    }>;
    /**
     * Connect a journey step with experts
     */
    connectStepWithExperts(stepId: string, expertIds: string[]): Promise<void>;
    /**
     * Connect a journey step with templates
     */
    connectStepWithTemplates(stepId: string, templateIds: string[]): Promise<void>;
    /**
     * Log step completion for analytics
     */
    logStepCompletion(stepId: string, companyId: string, timeSpent: number, outcome?: {
        [key: string]: any;
    }): Promise<void>;
}
export declare const journeyIntegrationService: JourneyIntegrationService;
export {};
//# sourceMappingURL=index.d.ts.map