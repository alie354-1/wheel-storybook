import { IdeaWorkspace, UnifiedIdea, IdeaGenerationParams } from '../types/unified-idea.types';
export declare class UnifiedIdeaService {
    constructor();
    /**
     * Create a new idea workspace
     */
    createWorkspace(userId: string, title?: string, description?: string): Promise<IdeaWorkspace | null>;
    /**
     * Get all workspaces for a user
     */
    getWorkspaces(userId: string): Promise<IdeaWorkspace[]>;
    /**
     * Get a specific workspace
     */
    getWorkspace(workspaceId: string): Promise<IdeaWorkspace | null>;
    /**
     * Update a workspace
     */
    updateWorkspace(workspaceId: string, updates: Partial<IdeaWorkspace>): Promise<boolean>;
    /**
     * Delete a workspace and all associated ideas
     */
    deleteWorkspace(workspaceId: string): Promise<boolean>;
    /**
     * Generate multiple business ideas based on input parameters
     */
    generateIdeas(workspaceId: string, userId: string, params: IdeaGenerationParams): Promise<UnifiedIdea[]>;
    /**
     * Generate mock ideas based on input parameters
     * This is used when the OpenAI API is not available
     */
    private generateMockIdeas;
    /**
     * Get all ideas in a workspace
     */
    getIdeas(workspaceId: string): Promise<UnifiedIdea[]>;
    /**
     * Get a specific idea
     */
    getIdea(ideaId: string): Promise<UnifiedIdea | null>;
    /**
     * Update an idea
     */
    updateIdea(ideaId: string, updates: Partial<UnifiedIdea>): Promise<boolean>;
    /**
     * Create a prompt for analyzing an idea
     */
    private createIdeaAnalysisPrompt;
    /**
     * Create a prompt for comparing ideas
     */
    private createIdeaComparisonPrompt;
    /**
     * Create a prompt for merging ideas
     */
    private createIdeaMergePrompt;
}
export declare const unifiedIdeaService: UnifiedIdeaService;
//# sourceMappingURL=unified-idea.service.d.ts.map