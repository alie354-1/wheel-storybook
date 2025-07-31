import { SupabaseClient } from '@supabase/supabase-js';
export interface Recommendation {
    id: number;
    title: string;
    description: string;
    type: 'step' | 'expert' | 'template';
}
export interface AiRecommendationService {
    getStepRecommendations(userId: string): Promise<Recommendation[]>;
    getExpertRecommendations(userId: string, stepId: number): Promise<Recommendation[]>;
    getTemplateRecommendations(userId: string, stepId: number): Promise<Recommendation[]>;
    recordFeedback(userId: string, recommendationId: number, isHelpful: boolean, feedback?: string): Promise<void>;
}
export declare class RealAiRecommendationService implements AiRecommendationService {
    private supabase;
    private llmService;
    constructor(supabase: SupabaseClient);
    private getRecommendations;
    getStepRecommendations(userId: string): Promise<Recommendation[]>;
    getExpertRecommendations(userId: string, stepId: number): Promise<Recommendation[]>;
    getTemplateRecommendations(userId: string, stepId: number): Promise<Recommendation[]>;
    recordFeedback(userId: string, recommendationId: number, isHelpful: boolean, feedback?: string): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map