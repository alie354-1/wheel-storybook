import { default as React, ReactNode } from 'react';
export interface AnalyticsContextValue {
    trackEvent: (eventName: string, payload?: any) => void;
    trackView: (entityType: string, entityId: string) => void;
    trackTimeSpent: (entityType: string, entityId: string, timeInSeconds: number) => void;
    trackRating: (entityType: string, entityId: string, rating: number) => void;
    getProgressStats: (journeyId?: string, startDate?: Date, endDate?: Date) => Promise<any>;
    getTeamAssignmentStats: (userId?: string) => Promise<any>;
    getComparisonAnalytics: () => Promise<any>;
}
export interface AnalyticsProviderProps {
    children: ReactNode;
}
/**
 * Provider component that wraps the app to provide analytics tracking
 */
export declare const AnalyticsProvider: React.FC<AnalyticsProviderProps>;
/**
 * Hook to use the analytics context
 */
export declare const useAnalyticsContext: () => AnalyticsContextValue;
/**
 * Main hook for using analytics throughout the app.
 * Always use this instead of direct context access.
 */
export declare const useAnalytics: () => AnalyticsContextValue;
/**
 * Higher-order component that tracks component views
 */
export declare const withAnalytics: <P extends object>(Component: React.ComponentType<P>, options: {
    entityType: string;
    getEntityId: (props: P) => string;
}) => React.FC<P>;
//# sourceMappingURL=AnalyticsContext.d.ts.map