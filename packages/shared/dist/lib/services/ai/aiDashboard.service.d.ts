export interface AIRecommendation {
    id: string;
    title: string;
    description: string;
    domain: string;
    domainColor?: string;
    phase?: string;
    phaseColor?: string;
    priority: 'High' | 'Medium' | 'Low';
    reason: string;
    peerPercentage: number;
    estimatedTime: string;
    difficulty: string;
    tools: string[];
}
export interface AIPeerInsight {
    id: string;
    content: string;
    authorName: string;
    authorCompany: string;
    authorInitials: string;
    date: string;
    relevantDomain: string;
}
export interface AIBusinessHealth {
    overall: 'Healthy' | 'Needs Attention' | 'Critical';
    domainInsights: {
        domain: string;
        status: string;
        maturityLevel: number;
        strengths: string[];
        focusAreas: string[];
        description: string;
        timeInvested: string;
        stepsEngaged: number;
        isActiveFocus: boolean;
    }[];
}
/**
 * AI Dashboard Service
 * Responsible for generating AI-powered content for the dashboard
 */
export declare class AIDashboardService {
    private contextCollector;
    private persistenceService;
    constructor();
    /**
     * Get recommended next steps for the company journey
     */
    getRecommendedSteps(companyJourneyId: string, limit?: number, forceRefresh?: boolean): Promise<AIRecommendation[]>;
    /**
     * Get peer insights for the company journey
     */
    getPeerInsights(companyJourneyId: string, limit?: number, forceRefresh?: boolean): Promise<AIPeerInsight[]>;
    /**
     * Get business health assessment
     */
    getBusinessHealth(companyJourneyId: string, forceRefresh?: boolean): Promise<AIBusinessHealth>;
}
export declare const aiDashboardService: AIDashboardService;
//# sourceMappingURL=aiDashboard.service.d.ts.map