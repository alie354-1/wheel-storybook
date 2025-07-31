import { IdeaPlaygroundIdea } from '../../../../types/idea-playground.types';
/**
 * Service to handle AI operations specifically for Pathway 1 of the Idea Playground
 * This is a wrapper around the existing ideaPathway1AIService that follows the modular architecture
 */
export declare class Pathway1AIService {
    /**
     * Generate multiple company suggestions based on an initial idea
     */
    generateCompanySuggestions(idea: IdeaPlaygroundIdea, userId: string, count?: number): Promise<any[]>;
    /**
     * Merge multiple suggestions into a coherent idea
     */
    mergeSuggestions(suggestions: any[], userId: string): Promise<any>;
    /**
     * Regenerate a specific suggestion
     */
    regenerateSuggestion(originalSuggestion: any, idea: IdeaPlaygroundIdea, userId: string): Promise<any>;
}
export declare const pathway1AIService: Pathway1AIService;
//# sourceMappingURL=ai.service.d.ts.map