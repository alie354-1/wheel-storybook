import { step_status } from '../types/journey-unified.types';
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
export declare const companyJourneyService: {
    /**
     * Mark a journey step as complete for a company
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step to mark as complete
     * @returns The updated company progress record
     */
    markStepComplete(companyId: string, stepId: string): Promise<any>;
    /**
     * Check if a step is the company formation step and update company status if needed
     * Note: This is a backup for the database trigger that should handle this automatically
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step to check
     */
    checkAndUpdateCompanyFormationStatus(companyId: string, stepId: string): Promise<void>;
    /**
     * Set a journey step as a focus area for a company
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step to set as a focus area
     * @returns The created company focus area record
     */
    addFocusArea(companyId: string, stepId: string): Promise<any>;
    /**
     * Remove a journey step from a company's focus areas
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step to remove from focus areas
     * @returns True if the focus area was removed, false otherwise
     */
    removeFocusArea(companyId: string, stepId: string): Promise<boolean>;
    /**
     * Get all focus areas for a company
     * @param companyId The ID of the company
     * @returns An array of focus area records
     */
    getFocusAreas(companyId: string): Promise<{
        id: any;
        step_id: any;
        created_at: any;
        journey_steps: {
            id: any;
            name: any;
            description: any;
            phase_id: any;
            order_index: any;
        }[];
    }[]>;
    /**
     * Submit feedback for a journey step
     * @param stepId The ID of the journey step
     * @param userId The ID of the user submitting feedback
     * @param rating Optional rating (1-5)
     * @param comment Optional comment
     * @returns The created feedback record
     */
    submitStepFeedback(stepId: string, userId: string, rating?: number, comment?: string): Promise<any>;
    /**
     * Get feedback for a journey step
     * @param stepId The ID of the journey step
     * @returns An array of feedback records for the step
     */
    getStepFeedback(stepId: string): Promise<{
        id: any;
        user_id: any;
        rating: any;
        comment: any;
        created_at: any;
        users: {
            id: any;
            full_name: any;
            avatar_url: any;
        }[];
    }[]>;
    /**
     * Get notes for a journey step
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step
     * @returns The notes for the step, or null if no notes exist
     */
    getStepNotes(companyId: string, stepId: string): Promise<any>;
    getStepStatus(companyId: string, stepId: string): Promise<{
        status: any;
    } | null>;
    /**
     * Save notes for a journey step
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step
     * @param notes The notes to save
     * @returns The updated company progress record
     */
    saveStepNotes(companyId: string, stepId: string, notes: string): Promise<any>;
    /**
     * Skip a journey step for a company
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step to skip
     * @returns The updated company progress record
     */
    skipStep(companyId: string, stepId: string): Promise<any>;
    /**
     * Get personalized tool recommendations for a step
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step
     * @param limit The maximum number of tools to return (default: 3)
     * @returns An array of recommended tools
     */
    getPersonalizedToolRecommendations(companyId: string, stepId: string, limit?: number): Promise<any>;
    /**
     * Check if a company has sufficient profile data for personalized recommendations
     * @param companyId The ID of the company
     * @returns True if the company has sufficient profile data, false otherwise
     */
    hasSufficientProfileData(companyId: string): Promise<any>;
    /**
     * Get all tools for a journey step
     * @param stepId The ID of the journey step
     * @returns An array of tools for the step
     */
    getStepTools(stepId: string): Promise<any[]>;
    /**
     * Submit a custom tool for a journey step
     * @param companyId The ID of the company
     * @param stepId The ID of the journey step
     * @param userId The ID of the user submitting the tool
     * @param name The name of the tool
     * @param url The URL of the tool
     * @param functionality A description of the tool's functionality
     * @returns The created tool submission record
     */
    submitCustomTool(companyId: string, stepId: string, userId: string, name: string, url: string, functionality: string): Promise<any>;
    /**
     * Update the AI-generated description for a custom tool
     * @param submissionId The ID of the tool submission
     * @param aiReviewStatus The status of the AI review (accepted, edited, rejected)
     * @param userEditedDescription The user-edited description (if applicable)
     * @returns The updated tool submission record
     */
    updateCustomToolDescription(submissionId: string, aiReviewStatus: string, userEditedDescription?: string): Promise<any>;
    /**
     * Add a custom tool to the company's tools
     * @param companyId The ID of the company
     * @param submissionId The ID of the tool submission
     * @param userId The ID of the user adding the tool
     * @returns The created company tool record
     */
    addCustomToolToCompany(companyId: string, submissionId: string, userId: string): Promise<any>;
    cloneGlobalJourneyForCompany(companyId: string): Promise<void>;
    getCompanyJourney(companyId: string): Promise<{
        steps: any[];
        isCustom: boolean;
    }>;
    addCustomStep(companyJourneyMapId: string, stepData: Record<string, any>): Promise<any>;
    /**
     * Activate a consideration as a company-specific step
     * @param companyJourneyMapId The company journey map id
     * @param stepId The id of the step to activate
     * @param domainId The domain to activate the step in
     * @param companyId The company id
     * @returns The created company_journey_step record
     */
    activateConsideration(companyJourneyMapId: string, stepId: string, domainId: string, companyId: string): Promise<any>;
    dismissStep(companyJourneyStepId: string): Promise<any>;
    reorderSteps(companyJourneyMapId: string, orderedStepIds: string[]): Promise<void>;
    addCustomTool(companyJourneyStepId: string, toolData: Record<string, any>): Promise<void>;
    removeCustomTool(companyJourneyStepToolId: string): Promise<void>;
};
//# sourceMappingURL=companyJourney.service.d.ts.map