import { IdeaPlaygroundIdea } from '../../types/idea-playground.types';
/**
 * Adapter for handling Pathway 1 specific operations and AI interactions
 * This provides specialized methods for the idea generation pathway
 */
export declare const pathway1Adapter: {
    /**
     * Helper method to save a merged idea
     */
    saveAsMergedIdea(userId: string, canvasId: string, mergedData: any): Promise<IdeaPlaygroundIdea>;
    /**
     * Generate company and product suggestions based on an idea
     */
    generateCompanySuggestions(idea: IdeaPlaygroundIdea, userId: string, count?: number): Promise<any[]>;
    /**
     * Merge multiple suggestions into a new idea
     */
    mergeSuggestions(suggestions: any[], userId: string): Promise<IdeaPlaygroundIdea>;
};
//# sourceMappingURL=pathway1-adapter.d.ts.map