interface PhaseCompletionStats {
}
interface StepCompletionTimeStats {
}
interface CompanyProgressComparison {
}
interface JourneyAnalyticsData {
    phaseStatistics: PhaseCompletionStats[] | null;
    completionTimeStatistics: StepCompletionTimeStats[] | null;
    industryComparison: CompanyProgressComparison[] | null;
}
export declare class AnalyticsRecommendationService {
    /**
     * Get analytics data about company journey progress
     */
    static getJourneyAnalytics(companyId: string): Promise<Partial<JourneyAnalyticsData>>;
}
export {};
//# sourceMappingURL=analytics.service.d.ts.map