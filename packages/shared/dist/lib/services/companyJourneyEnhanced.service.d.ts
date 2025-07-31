import { CompanyJourneyStep, CompanyJourneyPath, CompanyStepArrangement, CompanyCustomTool, step_status } from '../types/journey-unified.types';
export interface CompanyStepFilters {
    phaseId?: string;
    domainId?: string;
    status?: step_status;
    search?: string;
    includeCustom?: boolean;
}
export interface CreateCustomStepData {
    companyId: string;
    name: string;
    description?: string;
    phaseId: string;
    domainId: string;
    orderIndex?: number;
    difficulty?: string;
    timeEstimate?: number;
    contentMarkdown?: string;
    checklist?: any[];
    resources?: any[];
}
export declare const companyJourneyServiceEnhanced: {
    /**
     * Get all company journey steps with filtering
     */
    getCompanySteps(companyId: string, filters?: CompanyStepFilters): Promise<CompanyJourneyStep[]>;
    /**
     * Get a specific company step
     */
    getCompanyStep(companyId: string, stepId: string): Promise<CompanyJourneyStep | null>;
    /**
     * Create a custom step for a company
     */
    createCustomStep(stepData: CreateCustomStepData): Promise<CompanyJourneyStep>;
    /**
     * Update a company step
     */
    updateCompanyStep(companyId: string, stepId: string, updates: Partial<CompanyJourneyStep>): Promise<CompanyJourneyStep>;
    /**
     * Update step progress
     */
    updateStepProgress(companyId: string, stepId: string, progressUpdate: {
        status?: step_status;
        notes?: string;
        completionPercentage?: number;
    }): Promise<CompanyJourneyStep>;
    /**
     * Reorder company steps
     */
    reorderSteps(companyId: string, stepOrderUpdates: Array<{
        stepId: string;
        orderIndex: number;
    }>): Promise<void>;
    /**
     * Delete/deactivate a company step
     */
    deleteCompanyStep(companyId: string, stepId: string): Promise<void>;
    /**
     * Get company journey paths
     */
    getCompanyPaths(companyId: string): Promise<CompanyJourneyPath[]>;
    /**
     * Create a new journey path
     */
    createJourneyPath(companyId: string, pathData: {
        name: string;
        description?: string;
        isDefault?: boolean;
    }): Promise<CompanyJourneyPath>;
    /**
     * Get step arrangements for a path
     */
    getPathStepArrangements(companyId: string, pathId: string): Promise<CompanyStepArrangement[]>;
    /**
     * Add custom tool to a step
     */
    addCustomTool(companyId: string, stepId: string, toolData: {
        name: string;
        url: string;
        description?: string;
        functionality?: string;
    }): Promise<CompanyCustomTool>;
    /**
     * Get custom tools for a step
     */
    getCustomTools(companyId: string, stepId: string): Promise<CompanyCustomTool[]>;
    /**
     * Get company journey analytics
     */
    getJourneyAnalytics(companyId: string): Promise<{
        totalSteps: number;
        completedSteps: number;
        inProgressSteps: number;
        completionRate: number;
        avgTimePerStep: number;
        stepsByPhase: Array<{
            phase: string;
            total: number;
            completed: number;
        }>;
        recentActivity: Array<{
            stepName: string;
            action: string;
            date: string;
        }>;
    }>;
};
//# sourceMappingURL=companyJourneyEnhanced.service.d.ts.map