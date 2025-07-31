import { AIRecommendation, AIPeerInsight, AIBusinessHealth } from './aiDashboard.service';
/**
 * AI Persistence Service
 * Handles caching and persistence of AI-generated data
 */
export declare class AIPersistenceService {
    private readonly RECOMMENDATIONS_TABLE;
    private readonly INSIGHTS_TABLE;
    private readonly HEALTH_TABLE;
    /**
     * Store recommendations for a company journey
     */
    storeRecommendations(companyJourneyId: string, recommendations: AIRecommendation[]): Promise<void>;
    /**
     * Get cached recommendations for a company journey
     */
    getRecommendations(companyJourneyId: string): Promise<AIRecommendation[]>;
    /**
     * Store peer insights for a company journey
     */
    storePeerInsights(companyJourneyId: string, insights: AIPeerInsight[]): Promise<void>;
    /**
     * Get cached peer insights for a company journey
     */
    getPeerInsights(companyJourneyId: string): Promise<AIPeerInsight[]>;
    /**
     * Store business health assessment for a company journey
     */
    storeBusinessHealth(companyJourneyId: string, health: AIBusinessHealth): Promise<void>;
    /**
     * Get cached business health assessment for a company journey
     */
    getBusinessHealth(companyJourneyId: string): Promise<AIBusinessHealth | null>;
}
//# sourceMappingURL=aiPersistence.service.d.ts.map