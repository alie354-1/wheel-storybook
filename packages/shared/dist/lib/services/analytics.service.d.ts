export interface AnalyticsEvent {
    id: string;
    event_name: string;
    user_id: string | null;
    company_id: string | null;
    payload: any;
    created_at: string;
}
export interface AnalyticsAggregate {
    id: string;
    metric_name: string;
    dimensions: any;
    value: any;
    calculated_at: string;
    time_period_start: string | null;
    time_period_end: string | null;
}
export interface AnalyticsReport {
    id: string;
    name: string;
    description: string | null;
    user_id: string;
    company_id: string | null;
    configuration: any;
    created_at: string;
    updated_at: string;
}
export interface AnalyticsDashboard {
    id: string;
    name: string;
    description: string | null;
    user_id: string;
    company_id: string | null;
    layout: any;
    created_at: string;
    updated_at: string;
}
export declare function fetchAnalyticsEvents(companyId: string): Promise<AnalyticsEvent[]>;
export declare function fetchAnalyticsAggregates(companyId: string): Promise<AnalyticsAggregate[]>;
export declare function fetchAnalyticsReports(companyId: string): Promise<AnalyticsReport[]>;
export declare function fetchAnalyticsDashboards(companyId: string): Promise<AnalyticsDashboard[]>;
export declare function trackEvent(event_name: string, user_id: string | null, company_id: string | null, payload: any): Promise<void>;
export declare const analyticsService: {
    fetchAnalyticsEvents: typeof fetchAnalyticsEvents;
    fetchAnalyticsAggregates: typeof fetchAnalyticsAggregates;
    fetchAnalyticsReports: typeof fetchAnalyticsReports;
    fetchAnalyticsDashboards: typeof fetchAnalyticsDashboards;
    trackEvent: typeof trackEvent;
};
//# sourceMappingURL=analytics.service.d.ts.map