import { QueryContext } from './idea-generation.service';
import { IdeaExplorationSession, ExplorationIdea, IdeaAnalysis, IdeaMerge, IdeaComparisonResult, IdeaGenerationParams } from '../types/idea-exploration.types';
export declare class IdeaExplorationService {
    constructor();
    /**
     * Create a new idea exploration session
     */
    createSession(userId: string, title?: string, description?: string, inputParameters?: IdeaGenerationParams): Promise<IdeaExplorationSession | null>;
    /**
     * Get all exploration sessions for a user
     */
    getSessions(userId: string): Promise<IdeaExplorationSession[]>;
    /**
     * Get a specific exploration session
     */
    getSession(sessionId: string): Promise<IdeaExplorationSession | null>;
    /**
     * Update an exploration session
     */
    updateSession(sessionId: string, updates: Partial<IdeaExplorationSession>): Promise<boolean>;
    /**
     * Delete an exploration session and all associated ideas
     */
    deleteSession(sessionId: string): Promise<boolean>;
    /**
     * Generate multiple business ideas based on input parameters
     */
    generateIdeas(sessionId: string, userId: string, params: IdeaGenerationParams, context: QueryContext): Promise<ExplorationIdea[]>;
    /**
     * Get all ideas in a session
     */
    getIdeas(sessionId: string): Promise<ExplorationIdea[]>;
    /**
     * Get a specific idea
     */
    getIdea(ideaId: string): Promise<ExplorationIdea | null>;
    /**
     * Update an idea
     */
    updateIdea(ideaId: string, updates: Partial<ExplorationIdea>): Promise<boolean>;
    /**
     * Delete an idea
     */
    deleteIdea(ideaId: string): Promise<boolean>;
    /**
     * Analyze an idea to get feedback
     */
    analyzeIdea(idea: ExplorationIdea, userId: string, context: QueryContext): Promise<IdeaAnalysis | null>;
    /**
     * Compare multiple ideas to find similarities, differences, and merger potential
     */
    compareIdeas(ideas: ExplorationIdea[], userId: string, sessionId: string, context: QueryContext): Promise<IdeaComparisonResult | null>;
    /**
     * Merge multiple ideas into a new idea
     */
    mergeIdeas(ideas: ExplorationIdea[], userId: string, sessionId: string, context: QueryContext): Promise<ExplorationIdea | null>;
    /**
     * Get the merge history for an idea
     */
    getMergeHistory(ideaId: string): Promise<IdeaMerge[]>;
    private createMultipleIdeasPrompt;
    private createIdeaComparisonPrompt;
    private createIdeaMergePrompt;
}
export declare const ideaExplorationService: IdeaExplorationService;
//# sourceMappingURL=idea-exploration.service.d.ts.map