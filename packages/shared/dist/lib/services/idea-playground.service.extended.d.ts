export declare class IdeaPlaygroundService {
    constructor();
    createCanvas(userId: string, name: string, description?: string, companyId?: string): Promise<any>;
    getCanvasesForUser(userId: string, includeArchived?: boolean): Promise<any[]>;
    getCanvases(userId: string, includeArchived?: boolean): Promise<any[]>;
    generateIdeas(userId: string, canvasId: string, params: any): Promise<any[]>;
    getIdeasForCanvas(canvasId: string, includeArchived?: boolean): Promise<any[]>;
    refineIdea(userId: string, params: any): Promise<any>;
}
export default IdeaPlaygroundService;
//# sourceMappingURL=idea-playground.service.extended.d.ts.map