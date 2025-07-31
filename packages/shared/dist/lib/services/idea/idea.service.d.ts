import { Idea, IdeaFeedback, IdeaGenerationOptions, IdeaService } from './types';
/**
 * Enhanced Idea Service Implementation
 */
export declare class EnhancedIdeaService implements IdeaService {
    /**
     * Generates ideas based on the provided prompt and options
     */
    generateIdeas(prompt: string, options?: IdeaGenerationOptions): Promise<string[]>;
    /**
     * Generates idea titles based on industry or domain
     */
    generateIdeaTitles(industry: string, count?: number): Promise<string[]>;
    /**
     * Evaluates an idea and provides feedback
     */
    evaluateIdea(idea: Idea): Promise<{
        score: number;
        feedback: string;
    }>;
    /**
     * Generates variations of an existing idea
     */
    generateVariations(idea: Idea, count?: number): Promise<string[]>;
    /**
     * Saves an idea to the database
     */
    saveIdea(idea: Idea): Promise<Idea>;
    /**
     * Gets ideas for a company
     */
    getIdeas(companyId: string): Promise<Idea[]>;
    /**
     * Gets a specific idea by ID
     */
    getIdeaById(ideaId: string): Promise<Idea | null>;
    /**
     * Updates an existing idea
     */
    updateIdea(ideaId: string, updates: Partial<Idea>): Promise<Idea>;
    /**
     * Deletes an idea
     */
    deleteIdea(ideaId: string): Promise<void>;
    /**
     * Adds feedback to an idea
     */
    addFeedback(ideaId: string, feedback: Omit<IdeaFeedback, 'ideaId'>): Promise<IdeaFeedback>;
}
export declare const ideaServiceInstance: EnhancedIdeaService;
//# sourceMappingURL=idea.service.d.ts.map