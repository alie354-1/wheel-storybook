import { IdeaGenerationResult } from './idea-generation.service';
import { RefinementResult } from './refinement.service';
import { IdeaStatus, IdeaManagementService } from './idea-management.service';
import { StoredIdea, IdeaQueryOptions, IdeaPlaygroundIdea } from '../../types/idea-playground.types';
/**
 * Adapter class that wraps the new IdeaManagementService to make it compatible
 * with the facade's expected interface.
 */
export declare class IdeaManagementServiceAdapter {
    private service;
    constructor(service?: IdeaManagementService);
    /**
     * Create a new idea with additional metadata
     */
    createIdea(idea: IdeaGenerationResult, userId?: string, teamId?: string): Promise<StoredIdea>;
    /**
     * Update an existing idea
     */
    updateIdea(ideaId: string, updates: Partial<StoredIdea>): Promise<StoredIdea>;
    /**
     * Apply a refinement to an idea
     */
    applyRefinement(ideaId: string, refinement: RefinementResult): Promise<StoredIdea>;
    /**
     * Get an idea by ID
     */
    getIdea(ideaId: string): Promise<StoredIdea | null>;
    /**
     * Get all ideas with optional filtering
     */
    getIdeas(options?: IdeaQueryOptions): Promise<StoredIdea[]>;
    /**
     * Change the status of an idea
     */
    changeIdeaStatus(ideaId: string, status: IdeaStatus): Promise<StoredIdea>;
    /**
     * Delete an idea
     */
    deleteIdea(ideaId: string): Promise<boolean>;
    /**
     * Add tags to an idea
     */
    addTags(ideaId: string, tags: string[]): Promise<StoredIdea>;
    /**
     * Remove tags from an idea
     */
    removeTags(ideaId: string, tags: string[]): Promise<StoredIdea>;
    /**
     * Convert internal CompleteIdea to the StoredIdea format expected by the facade
     */
    private convertToStoredIdea;
    /**
     * Convert from legacy IdeaPlaygroundIdea to the new CompleteIdea format
     */
    convertFromLegacyIdea(legacyIdea: IdeaPlaygroundIdea): any;
}
//# sourceMappingURL=idea-management.service.adapter.d.ts.map