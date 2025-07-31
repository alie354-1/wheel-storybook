import { IdeaPlaygroundIdea } from '../../types/idea-playground.types';
/**
 * Service for managing all aspects of ideas in the system
 */
export declare class IdeaManagementService {
    /**
     * Create a new idea in the database
     * @param ideaData The idea data to create
     */
    createIdea(ideaData: Partial<IdeaPlaygroundIdea>): Promise<IdeaPlaygroundIdea>;
    /**
     * Get a single idea by its ID
     * @param ideaId The ID of the idea to retrieve
     */
    getIdea(ideaId: string): Promise<IdeaPlaygroundIdea>;
    /**
     * Get all ideas for a specific user
     * @param userId The user ID to get ideas for
     */
    getIdeasForUser(userId: string): Promise<IdeaPlaygroundIdea[]>;
    /**
     * Update an existing idea
     * @param idea The idea data to update
     */
    updateIdea(idea: IdeaPlaygroundIdea): Promise<IdeaPlaygroundIdea>;
    /**
     * Delete an idea
     * @param ideaId The ID of the idea to delete
     */
    deleteIdea(ideaId: string): Promise<void>;
    /**
     * Set the protection level for an idea
     * @param ideaId The ID of the idea
     * @param level The protection level to set
     * @param userId The ID of the user making the change
     */
    setProtectionLevel(ideaId: string, level: string, userId: string): Promise<void>;
    /**
     * Ensure all required fields have values
     * @param ideaData Partial idea data
     * @returns Complete idea data with default values where needed
     */
    private ensureRequiredFields;
}
//# sourceMappingURL=idea-management.service.d.ts.map