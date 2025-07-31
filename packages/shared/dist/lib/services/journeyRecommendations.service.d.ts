import { JourneyStep, difficulty_level } from '../types/journey-unified.types';
export interface RecommendationContext {
    companyId: string;
    companyStage?: 'idea' | 'prototype' | 'mvp' | 'launched' | 'scaling';
    industry?: string;
    teamSize?: number;
    currentPhaseId?: string;
    completedStepIds?: string[];
    preferences?: {
        difficulty?: difficulty_level;
        timeAvailable?: 'low' | 'medium' | 'high';
        focusAreas?: string[];
    };
}
export interface StepRecommendation {
    step: JourneyStep;
    score: number;
    reasoning: string[];
    priority: 'low' | 'medium' | 'high' | 'urgent';
    estimatedImpact: string;
    prerequisites: string[];
    suggestedOrder: number;
    communityAdoptionRate?: number;
    expertEndorsement?: boolean;
}
export interface RecommendationSet {
    nextSteps: StepRecommendation[];
    quickWins: StepRecommendation[];
    strategicSteps: StepRecommendation[];
    communityFavorites: StepRecommendation[];
    expertRecommended: StepRecommendation[];
}
export declare const journeyRecommendationsService: {
    /**
     * Get comprehensive step recommendations for a company
     */
    getRecommendations(context: RecommendationContext): Promise<RecommendationSet>;
    /**
     * Score a step recommendation based on multiple factors
     */
    scoreStepRecommendation(step: JourneyStep, context: RecommendationContext, communityData: Record<string, {
        adoptionRate: number;
        successRate: number;
    }>): Promise<StepRecommendation>;
    /**
     * Get community adoption data for steps
     */
    getCommunityAdoptionData(stepIds: string[]): Promise<Record<string, {
        adoptionRate: number;
        successRate: number;
    }>>;
    /**
     * Get next logical steps based on company progress
     */
    getNextSteps(recommendations: StepRecommendation[], context: RecommendationContext): StepRecommendation[];
    /**
     * Get quick win recommendations (low effort, high impact)
     */
    getQuickWins(recommendations: StepRecommendation[]): StepRecommendation[];
    /**
     * Get strategic steps (high impact, longer term)
     */
    getStrategicSteps(recommendations: StepRecommendation[]): StepRecommendation[];
    /**
     * Get community favorite steps
     */
    getCommunityFavorites(recommendations: StepRecommendation[]): StepRecommendation[];
    /**
     * Get expert recommended steps
     */
    getExpertRecommended(recommendations: StepRecommendation[]): StepRecommendation[];
    /**
     * Helper methods
     */
    getTimeScore(estimatedDays: number, timeAvailable: "low" | "medium" | "high"): number;
    getEstimatedImpact(step: JourneyStep, score: number): string;
    getSuggestedOrder(step: JourneyStep, context: RecommendationContext): number;
    /**
     * Get personalized recommendations based on company learning patterns
     */
    getPersonalizedRecommendations(companyId: string): Promise<StepRecommendation[]>;
    /**
     * Get recommendations for new companies
     */
    getNewCompanyRecommendations(): Promise<StepRecommendation[]>;
    getCurrentPhase(completionHistory: any[]): string;
};
//# sourceMappingURL=journeyRecommendations.service.d.ts.map