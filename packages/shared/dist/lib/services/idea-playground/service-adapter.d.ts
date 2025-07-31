import { IdeaPlaygroundIdea as TypesIdeaPlaygroundIdea } from '../../types/idea-playground.types';
interface LocalIdeaStorage {
    ideas: Record<string, TypesIdeaPlaygroundIdea>;
    lastUpdated: string;
}
/**
 * Adapter that connects the old components to the new modular service layer
 */
export declare const ideaPlaygroundAdapter: {
    /**
     * Get or initialize the local idea storage
     */
    _getLocalStorage(): LocalIdeaStorage;
    /**
     * Save to local idea storage
     */
    _saveLocalStorage(storage: LocalIdeaStorage): void;
    /**
     * Create a new idea in the system
     */
    createIdea(ideaData: Partial<TypesIdeaPlaygroundIdea>, userId: string): Promise<TypesIdeaPlaygroundIdea>;
    /**
     * Update an existing idea
     */
    updateIdea(ideaId: string, ideaData: Partial<TypesIdeaPlaygroundIdea>): Promise<TypesIdeaPlaygroundIdea>;
    /**
     * Get an idea by ID
     */
    getIdea(ideaId: string): Promise<TypesIdeaPlaygroundIdea | null>;
    /**
     * Get all ideas for a user
     */
    getIdeas(userId?: string): Promise<TypesIdeaPlaygroundIdea[]>;
    /**
     * Refine an idea based on feedback
     */
    refineIdea(idea: TypesIdeaPlaygroundIdea, feedback: string): Promise<Partial<TypesIdeaPlaygroundIdea>>;
    /**
     * Generate suggestions for an idea
     */
    generateSuggestions(idea: TypesIdeaPlaygroundIdea, userId: string, count?: number): Promise<any[]>;
    /**
     * Merge selected suggestions
     */
    mergeSuggestions(suggestions: any[], userId: string): Promise<TypesIdeaPlaygroundIdea>;
};
export {};
//# sourceMappingURL=service-adapter.d.ts.map