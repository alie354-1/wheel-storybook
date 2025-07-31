import { IdeaPlaygroundCanvas, IdeaPlaygroundIdea, IdeaPlaygroundComponent, IdeaGenerationParams } from '../types/idea-playground.types';
export declare class MockIdeaPlaygroundService {
    private mockCanvases;
    private mockIdeas;
    private mockComponents;
    private mockFeedback;
    private idCounter;
    constructor();
    createCanvas(userId: string, name: string, description?: string, companyId?: string): Promise<IdeaPlaygroundCanvas | null>;
    getCanvases: (userId: string, includeArchived?: boolean) => Promise<any[]>;
    updateCanvas: (canvasId: string, updates: Partial<IdeaPlaygroundCanvas>) => Promise<boolean>;
    archiveCanvas: (canvasId: string) => Promise<boolean>;
    generateIdeas(userId: string, canvasId: string, params: IdeaGenerationParams): Promise<IdeaPlaygroundIdea[]>;
    private createFallbackIdeas;
    getIdeasForCanvas: (canvasId: string, includeArchived?: boolean) => Promise<any[]>;
    getIdea: (ideaId: string) => Promise<IdeaPlaygroundIdea | null>;
    updateIdea: (ideaId: string, updates: Partial<IdeaPlaygroundIdea>) => Promise<boolean>;
    archiveIdea: (ideaId: string) => Promise<boolean>;
    createComponent(ideaId: string, componentType: string, content: string): Promise<IdeaPlaygroundComponent | null>;
    private createIdeaRefinementPrompt;
    private createIdeaGenerationPrompt;
    private generateCompanyRelevance;
}
export declare const mockIdeaPlaygroundService: MockIdeaPlaygroundService;
//# sourceMappingURL=mock-idea-playground.service.d.ts.map