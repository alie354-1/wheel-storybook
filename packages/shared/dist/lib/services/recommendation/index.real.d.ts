/**
 * Recommendation Service - Real Implementation
 *
 * Provides personalized recommendations for journey steps, including:
 * - Expert recommendations
 * - Template recommendations
 * - Peer insights
 */
export interface ExpertRecommendation {
    expertId: string;
    name?: string;
    specialization?: string[];
    successRate: number;
    relevanceScore: number;
    avgCompletionTime?: string;
    pricePoint?: number;
    availability?: string;
}
export interface TemplateRecommendation {
    templateId: string;
    name?: string;
    description?: string;
    type: 'deck' | 'document' | 'tool';
    relevanceScore: number;
    usageRate: number;
    previewUrl?: string;
}
export interface PeerInsight {
    relevanceScore: number;
    avgTimeToComplete?: string;
    commonBlockers?: string[];
    successStrategies?: string[];
    outcomeMetrics?: any[];
}
export interface StepRecommendations {
    stepId: string;
    companyId: string;
    expertRecommendations: ExpertRecommendation[];
    templateRecommendations: TemplateRecommendation[];
    peerInsights: PeerInsight;
}
declare class RecommendationService {
    /**
     * Get personalized recommendations for a specific journey step
     */
    getStepRecommendations(companyId: string, stepId: string): Promise<StepRecommendations>;
    /**
     * Get recommendations for experts across all journey steps
     */
    getExpertRecommendations(companyId: string): Promise<ExpertRecommendation[]>;
    /**
     * Get recommendations for templates across all journey steps
     */
    getTemplateRecommendations(companyId: string): Promise<TemplateRecommendation[]>;
}
export declare const recommendationService: RecommendationService;
export {};
//# sourceMappingURL=index.real.d.ts.map