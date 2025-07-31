import { JourneyStepToolRecommendation } from '../../types/new_journey.types';
import { ToolImplementationGuidance } from '../ai/tool-recommendation/orchestrator';
export declare const getToolRecommendationsForStep: (stepId: string) => Promise<JourneyStepToolRecommendation[]>;
export declare const getAIEnhancedToolRecommendations: (stepId: string, companyId: string) => Promise<{
    recommendations: {
        recommendation_type: string;
        use_case_description: string;
        recommendation_reason: string;
        estimated_time_savings: string;
        primary_deliverable: string;
        workflow_position: string;
        implementation_steps: string[];
        best_practices: string[];
        id: string;
        canonical_step_id: string;
        tool_id: string;
        priority_rank: number;
        created_at?: string;
        tool?: import('../../types/new_journey.types').JourneyTool;
    }[];
    reasoning: string;
}>;
export declare const getToolRecommendationReason: (stepId: string, toolId: string, companyId?: string) => Promise<{
    reason: string;
    stepContext: any;
    companyContext: any;
}>;
export declare const getToolById: (toolId: string) => Promise<any>;
export declare const getToolImplementationGuidance: (toolId: string, stepId: string, companyId: string) => Promise<ToolImplementationGuidance>;
//# sourceMappingURL=journey_tool.service.d.ts.map