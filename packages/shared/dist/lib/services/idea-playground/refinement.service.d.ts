import { IdeaPlaygroundIdea } from '../../types/idea-playground.types';
import { LLMOrchestrator } from './llm/orchestrator';
/**
 * Params for idea refinement
 */
export interface RefinementParams {
    ideaId: string;
    feedback: string;
    userId: string;
}
export declare class RefinementService {
    private orchestrator;
    private ideaManagementService;
    constructor(orchestrator: LLMOrchestrator);
    /**
     * Refine an idea based on feedback
     */
    refineIdea(idea: IdeaPlaygroundIdea, feedback: string, userId: string): Promise<IdeaPlaygroundIdea>;
    /**
     * Save feedback for an idea without creating a new one
     */
    saveFeedback(ideaId: string, feedback: string, userId: string): Promise<void>;
    /**
     * Get feedback history for an idea
     */
    getFeedbackHistory(ideaId: string): Promise<any[]>;
    /**
     * Get refinement history for an idea (all derived ideas)
     */
    getRefinementHistory(originalIdeaId: string): Promise<IdeaPlaygroundIdea[]>;
}
//# sourceMappingURL=refinement.service.d.ts.map