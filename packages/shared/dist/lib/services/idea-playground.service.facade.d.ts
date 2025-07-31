import { IdeaPlaygroundIdea } from '../types/idea-playground.types';
import { LLMOrchestrator } from './idea-playground/llm/orchestrator';
/**
 * Params for generating a new idea
 */
export interface IdeaGenerationParams {
    theme?: string;
    industry?: string;
    userContext?: string;
    constraints?: string[];
    userId: string;
}
/**
 * Facade service that coordinates all idea playground functionality
 */
export declare class IdeaPlaygroundFacade {
    private ideaManagementService;
    private refinementService;
    private llmOrchestrator;
    constructor();
    /**
     * Get an idea by its ID
     */
    getIdea(ideaId: string): Promise<IdeaPlaygroundIdea>;
    /**
     * Get all ideas for a user
     */
    getUserIdeas(userId: string): Promise<IdeaPlaygroundIdea[]>;
    /**
     * Update an existing idea
     */
    updateIdea(idea: IdeaPlaygroundIdea): Promise<IdeaPlaygroundIdea>;
    /**
     * Delete an idea
     */
    deleteIdea(ideaId: string): Promise<void>;
    /**
     * Set the protection level for an idea
     */
    setProtectionLevel(ideaId: string, level: string, userId: string): Promise<void>;
    /**
     * Generate a new idea based on the provided parameters
     */
    generateIdea(params: IdeaGenerationParams): Promise<IdeaPlaygroundIdea>;
    /**
     * Refine an idea based on feedback
     */
    refineIdea(idea: IdeaPlaygroundIdea, feedback: string, userId: string): Promise<IdeaPlaygroundIdea>;
    /**
     * Save feedback without creating a refined idea
     */
    saveFeedback(ideaId: string, feedback: string, userId: string): Promise<void>;
    /**
     * Get history of feedback for an idea
     */
    getFeedbackHistory(ideaId: string): Promise<any[]>;
    /**
     * Get refinement history (derived ideas) for an idea
     */
    getRefinementHistory(ideaId: string): Promise<IdeaPlaygroundIdea[]>;
    /**
     * Initialize the idea playground services
     */
    initialize(): Promise<void>;
    /**
     * Get the underlying LLM orchestrator for direct access if needed
     */
    getLLMOrchestrator(): LLMOrchestrator;
}
export declare const ideaPlaygroundService: IdeaPlaygroundFacade;
//# sourceMappingURL=idea-playground.service.facade.d.ts.map