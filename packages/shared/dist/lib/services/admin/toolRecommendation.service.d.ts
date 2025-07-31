import { ToolRecommendation } from '@/lib/types/admin.types';
export declare class ToolRecommendationService {
    static list(): Promise<ToolRecommendation[]>;
    static listByStep(stepId: string): Promise<ToolRecommendation[]>;
    static create(stepId: string, toolId: string, data: Partial<ToolRecommendation>, userId: string): Promise<ToolRecommendation>;
    static update(stepId: string, toolId: string, updates: Partial<ToolRecommendation>, userId: string): Promise<ToolRecommendation>;
    static delete(stepId: string, toolId: string): Promise<boolean>;
}
//# sourceMappingURL=toolRecommendation.service.d.ts.map