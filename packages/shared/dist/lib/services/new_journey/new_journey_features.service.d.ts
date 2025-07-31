import { NewAnonymizedOutcome, NewCompanyJourneyStep, NewDomainProgress, NewStepOutcome } from '../../types/new_journey.types';
interface NewAdaptiveSuggestion {
    id: string;
    text: string;
    confidence_score: number;
    related_step_id: string;
}
interface NewPeerInsight {
    id: string;
    text: string;
    type: 'time' | 'tool' | 'blocker' | 'tip';
    percentage?: number;
    source: 'community' | 'expert';
    related_domain_id?: string;
    related_step_id?: string;
}
/**
 * Service for handling journey features like outcome capturing,
 * adaptive suggestions, and community insights.
 */
export declare const newJourneyFeaturesService: {
    /**
     * Capture outcome data for a completed step
     */
    captureOutcome(outcomeData: Omit<NewStepOutcome, "id" | "created_at">): Promise<NewStepOutcome>;
    /**
     * Get adaptive suggestions based on an outcome
     */
    getAdaptiveSuggestions(outcomeId: string): Promise<NewAdaptiveSuggestion[]>;
    /**
     * Contribute anonymized outcome to the community
     */
    contributeToCommmunity(contributionData: Omit<NewAnonymizedOutcome, "id" | "created_at">): Promise<NewAnonymizedOutcome>;
    /**
     * Process standup bot message
     */
    processStandupMessage(message: string, companyStepId: string): Promise<any>;
    /**
     * Get community insights for a specific framework step
     */
    getCommunityInsights(frameworkStepId: string): Promise<any>;
    /**
     * Get recommended next step for a journey
     */
    getRecommendedNextStep(journeyId: string): Promise<NewCompanyJourneyStep | null>;
    /**
     * Get peer insights for a journey
     */
    getPeerInsights(journeyId: string): Promise<NewPeerInsight[]>;
    /**
     * Get progress by domain for a journey using the new maturity-based approach
     */
    getProgressByDomain(journeyId: string): Promise<NewDomainProgress[]>;
};
export {};
//# sourceMappingURL=new_journey_features.service.d.ts.map