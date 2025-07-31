import { JourneyPhase, JourneyStep, CompanyJourneyStep, Tool, CompanyStepTool, CompanyStepProgressUpdate, JourneyStepComplete } from '../types/journey-unified.types';
interface ToolComparisonResult {
    tool_id: string;
    name: string;
    description?: string;
    pros: string[];
    cons: string[];
    rating_avg?: number;
    usage_count?: number;
    comparison_data: {
        [key: string]: any;
    };
}
interface PhaseCompletionStats {
    phase_id: string;
    phase_name: string;
    total_steps: number;
    completed_steps: number;
    in_progress_steps: number;
    not_started_steps: number;
    skipped_steps: number;
    completion_percentage: number;
}
interface JourneyTimelineEvent {
    id: string;
    company_id: string;
    step_id: string;
    step_name: string;
    phase_id: string;
    phase_name: string;
    event_type: 'status_change' | 'tool_selection' | 'note_added';
    event_data: any;
    created_at: string;
    user_id?: string;
    user_name?: string;
}
/**
 * Service for interacting with the unified journey system
 * Replaces the previously separate JourneyChallengesService and CompanyJourneyService
 */
export declare class JourneyUnifiedService {
    /**
     * Get all journey phases
     */
    static getPhases(): Promise<JourneyPhase[]>;
    /**
     * Get a specific phase by ID
     */
    static getPhaseById(phaseId: string): Promise<JourneyPhase | null>;
    /**
     * Get all journey steps or filter by phase
     */
    static getSteps(options?: {
        phaseId?: string;
    }): Promise<JourneyStep[]>;
    /**
     * Get a specific step by ID
     */
    static getStepById(stepId: string): Promise<JourneyStep | null>;
    /**
     * Get progress for all steps for a company
     */
    static getCompanyProgress(companyId: string): Promise<CompanyJourneyStep[]>;
    /**
     * Get progress for a specific step for a company
     */
    static getStepProgress(companyId: string, stepId: string): Promise<CompanyJourneyStep | null>;
    /**
     * Update progress for a specific step for a company
     */
    static updateStepProgress(companyId: string, stepId: string, updates: CompanyStepProgressUpdate): Promise<CompanyJourneyStep>;
    /**
     * Get all tools for a specific step
     */
    static getToolsForStep(stepId: string): Promise<Tool[]>;
    /**
     * Get company tool evaluations for a specific step
     */
    static getCompanyToolEvaluations(companyId: string, stepId: string): Promise<CompanyStepTool[]>;
    /**
     * Update a tool evaluation for a company
     */
    static updateToolEvaluation(companyId: string, stepId: string, toolId: string, updates: {
        rating?: number;
        notes?: string;
        is_selected?: boolean;
        is_custom?: boolean;
    }): Promise<CompanyStepTool>;
    /**
     * Get recommended tools for a step
     */
    static getRecommendedTools(stepId: string, limit?: number): Promise<Tool[]>;
    /**
     * Get personalized tool recommendations for a company and step
     */
    static getPersonalizedRecommendedTools(companyId: string, stepId: string, limit?: number): Promise<Tool[]>;
    /**
     * Compare multiple tools to help with decision-making
     */
    static compareTool(toolIds: string[]): Promise<ToolComparisonResult[]>;
    /**
     * Alias for compareTool for backward compatibility
     */
    static compareTools(toolIds: string[]): Promise<ToolComparisonResult[]>;
    /**
     * Get a complete step with all associated data
     */
    static getStepComplete(stepId: string, companyId?: string): Promise<JourneyStepComplete>;
    /**
     * Add a custom tool for a specific company
     * Optionally associate with a step and set as selected
     */
    static addCustomTool(companyId: string, toolData: {
        name: string;
        description?: string;
        url?: string;
        type?: string;
        category?: string;
        is_premium?: boolean;
    }, stepId?: string, isSelected?: boolean): Promise<string>;
    /**
     * Get phase completion statistics for a company
     */
    static getPhaseCompletionStats(companyId: string): Promise<PhaseCompletionStats[]>;
    /**
     * Get journey timeline events for a company
     */
    static getJourneyTimelineEvents(companyId: string, limit?: number): Promise<JourneyTimelineEvent[]>;
}
export default JourneyUnifiedService;
//# sourceMappingURL=journey-unified.service.d.ts.map