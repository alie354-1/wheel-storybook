import { AnalyticsFilter, EntityType, AggregationOptions } from '../services/analytics/types';
/**
 * Hook for accessing analytics functionality in React components
 */
export declare const useAnalytics: () => {
    analyticsService: import('../services/analytics').AnalyticsService;
    trackEvent: (eventName: string, payload?: any) => void;
    trackView: (entityType: EntityType, entityId: string) => void;
    trackTimeSpent: (entityType: EntityType, entityId: string, timeInSeconds: number) => void;
    trackRating: (entityType: EntityType, entityId: string, rating: number) => void;
    getJourneyAnalytics: (filter?: AnalyticsFilter) => Promise<import('../services').JourneyAnalytics[]>;
    getAggregation: (options?: AggregationOptions, filter?: AnalyticsFilter) => Promise<any>;
    getProgressStats: (journeyId?: string, startDate?: Date, endDate?: Date) => Promise<import('../services').ProgressStats | null>;
    getTeamAssignmentStats: (userId?: string) => Promise<import('../services').TeamAssignmentStats | null>;
    getComparisonAnalytics: () => Promise<any>;
};
//# sourceMappingURL=useAnalytics.d.ts.map