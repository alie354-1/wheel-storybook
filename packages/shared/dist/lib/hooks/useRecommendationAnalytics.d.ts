/**
 * Hook for tracking recommendation analytics
 * Added in Sprint 3 to gather usage data for improving recommendations
 */
export declare const useRecommendationAnalytics: () => {
    trackRecommendationView: (recommendationIds: string[]) => Promise<void>;
    trackRecommendationSelect: (recommendationId: string) => Promise<void>;
    trackRecommendationFilter: (filters: string[], resultCount: number) => Promise<void>;
    trackRelationshipInteraction: (action: string, stepId: string, details?: Record<string, any>) => Promise<void>;
    trackRecommendationClick: (stepId: string) => Promise<void>;
    trackFeatureUsage: (featureName: string, details?: Record<string, any>) => Promise<void>;
};
export default useRecommendationAnalytics;
//# sourceMappingURL=useRecommendationAnalytics.d.ts.map