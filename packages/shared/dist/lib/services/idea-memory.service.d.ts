export interface IdeaIteration {
    id: string;
    version: number;
    title: string;
    description: string;
    problem_statement?: string;
    solution_concept?: string;
    target_audience?: string;
    unique_value?: string;
    business_model?: string;
    marketing_strategy?: string;
    revenue_model?: string;
    go_to_market?: string;
    feedback?: any;
    timestamp: string;
}
export interface IdeaMemory {
    id: string;
    user_id: string;
    idea_id: string;
    iterations: IdeaIteration[];
    summary?: string;
    tags?: string[];
    last_updated: string;
    created_at: string;
}
declare class IdeaMemoryService {
    getMemory(userId: string, ideaId: string): Promise<IdeaMemory | null>;
    getAllMemories(userId: string): Promise<IdeaMemory[]>;
    saveMemory(userId: string, ideaId: string, iterations: IdeaIteration[], summary?: string, tags?: string[]): Promise<string | null>;
    addIteration(userId: string, ideaId: string, iteration: Omit<IdeaIteration, 'id' | 'timestamp'>): Promise<boolean>;
    generateSummary(userId: string, ideaId: string): Promise<string>;
    isFeatureEnabled(featureName: string, userId?: string, context?: string): Promise<boolean>;
}
export declare const ideaMemoryService: IdeaMemoryService;
export {};
//# sourceMappingURL=idea-memory.service.d.ts.map