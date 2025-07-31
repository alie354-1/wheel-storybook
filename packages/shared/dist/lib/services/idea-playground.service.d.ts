export declare enum IdeaStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVED = "archived",
    DELETED = "deleted"
}
export interface IdeaPlaygroundIdea {
    id: string;
    title: string;
    description: string;
    problem_statement: string;
    solution_concept: string;
    target_audience: string;
    unique_value: string;
    business_model: string;
    status: IdeaStatus;
    createdAt: string;
    updatedAt: string;
    tags: string[];
    isFavorite: boolean;
    userId?: string;
    teamId?: string;
    canvasId?: string;
}
export interface IdeaPlaygroundCanvas {
    id: string;
    name: string;
    type: 'business-model' | 'value-proposition';
    ideaId: string;
    createdAt: string;
    elements: Record<string, any>;
}
export interface IdeaGenerationParams {
    problem_area?: string;
    industry?: string;
    count?: number;
    maxResults?: number;
    useCompanyContext?: boolean;
}
/**
 * Service for idea playground functionality
 * This is a simplified implementation to avoid dependency issues
 */
export declare const ideaPlaygroundService: {
    getCanvases(userId: string): Promise<{
        id: string;
        name: string;
        type: "business-model";
        ideaId: string;
        createdAt: string;
        elements: {};
    }[]>;
    createCanvas(userId: string, name: string, description: string): Promise<{
        id: string;
        name: string;
        description: string;
        userId: string;
        type: "business-model";
        ideaId: string;
        createdAt: string;
        elements: {};
    } | null>;
    getIdeasForCanvas(canvasId: string): Promise<{
        id: string;
        title: string;
        description: string;
        problem_statement: string;
        solution_concept: string;
        target_audience: string;
        unique_value: string;
        business_model: string;
        status: IdeaStatus;
        canvasId: string;
        createdAt: string;
        updatedAt: string;
        tags: string[];
        isFavorite: boolean;
        userId: string;
    }[]>;
    getCanvasesForUser(userId: string): Promise<{
        id: string;
        name: string;
        type: "business-model";
        ideaId: string;
        createdAt: string;
        elements: {};
    }[]>;
    generateIdeas(userId: string, canvasId: string, params: IdeaGenerationParams): Promise<{
        id: string;
        title: string;
        description: string;
        problem_statement: string;
        solution_concept: string;
        target_audience: string;
        unique_value: string;
        business_model: string;
        status: IdeaStatus;
        canvasId: string;
        createdAt: string;
        updatedAt: string;
        tags: never[];
        isFavorite: boolean;
        userId: string;
    }[]>;
    updateIdea(ideaId: string, updatedIdea: Partial<IdeaPlaygroundIdea>): Promise<boolean>;
    updateIdeaStatus(ideaId: string, status: string): Promise<boolean>;
    saveVariationAsIdea(userId: string, canvasId: string, variation: any): Promise<{
        id: string;
        title: any;
        description: any;
        problem_statement: any;
        solution_concept: any;
        target_audience: any;
        unique_value: any;
        business_model: any;
        status: IdeaStatus;
        canvasId: string;
        createdAt: string;
        updatedAt: string;
        tags: never[];
        isFavorite: boolean;
        userId: string;
    } | null>;
    saveMergedIdeaAsIdea(userId: string, canvasId: string, mergedIdea: any): Promise<{
        id: string;
        title: any;
        description: any;
        problem_statement: any;
        solution_concept: any;
        target_audience: any;
        unique_value: any;
        business_model: any;
        status: IdeaStatus;
        canvasId: string;
        createdAt: string;
        updatedAt: string;
        tags: never[];
        isFavorite: boolean;
        userId: string;
    } | null>;
    refineIdea(ideaId: string, feedback: string): Promise<{
        title: string;
        description: string;
        problem_statement: string;
        solution_concept: string;
        unique_value: string;
        target_audience: string;
        business_model: string;
    }>;
    generateVariations(ideaId: string, count?: number): Promise<{
        title: string;
        description: string;
        problem_statement: string;
        solution_concept: string;
        unique_value: string;
        parent_id: string;
    }[]>;
    applyRefinement(ideaId: string, refinement: any): Promise<any>;
    saveIdea(userId: string, ideaId: string): Promise<boolean>;
    unsaveIdea(userId: string, ideaId: string): Promise<boolean>;
    toggleSaveIdea(userId: string, idea: any): Promise<boolean>;
};
//# sourceMappingURL=idea-playground.service.d.ts.map