import { IAnalyticsService, JourneyAnalytics, AnalyticsFilter, EntityType, AggregationOptions, ProgressStats, TeamAssignmentStats, AggregationParams, AggregationResult, TimeSeriesParams, TimeSeriesDataPoint, DashboardConfig, DashboardData, SavedReport, ExportFormat, JourneyAnalyticsData } from './types';
/**
 * AnalyticsService
 *
 * A consolidated service that provides access to all analytics functionality.
 * It delegates to specialized services for specific operations.
 */
export declare class AnalyticsService implements IAnalyticsService {
    private static instance;
    /**
     * Private constructor to enforce singleton pattern
     */
    private constructor();
    /**
     * Get singleton instance of AnalyticsService
     */
    static getInstance(): AnalyticsService;
    /**
     * Track an analytics event
     */
    trackEvent(event_name: string, userId: string | null, companyId: string | null, payload: any): Promise<void>;
    /**
     * Track an analytics metric for a journey entity
     */
    trackMetric(analytics: JourneyAnalytics): Promise<void>;
    /**
     * Track time spent on a journey entity
     */
    trackTimeSpent(companyId: string, entityType: EntityType, entityId: string, timeInSeconds: number, userId?: string): Promise<void>;
    /**
     * Track a view of a journey entity
     */
    trackView(companyId: string, entityType: EntityType, entityId: string, userId?: string): Promise<void>;
    /**
     * Track a user rating for a journey entity
     */
    trackRating(companyId: string, entityType: EntityType, entityId: string, rating: number, userId?: string): Promise<void>;
    /**
     * Get analytics data with optional filtering
     */
    getAnalytics(companyId: string, filter?: AnalyticsFilter): Promise<JourneyAnalytics[]>;
    /**
     * Get aggregated analytics data
     */
    getAggregation(companyId: string, options?: AggregationOptions, filter?: AnalyticsFilter): Promise<any>;
    /**
     * Get journey progress statistics
     */
    getProgressStats(companyId: string, journeyId?: string, startDate?: Date, endDate?: Date): Promise<ProgressStats | null>;
    /**
     * Get team assignments statistics
     */
    getTeamAssignmentStats(companyId: string, userId?: string): Promise<TeamAssignmentStats | null>;
    /**
     * Get analytics for comparing journey progress with industry benchmarks
     */
    getComparisonAnalytics(companyId: string): Promise<any | null>;
    /**
     * Get journey completion forecast
     */
    getJourneyCompletionForecast(companyId: string): Promise<{
        estimatedWeeks: number;
        confidence: number;
    } | null>;
    /**
     * Predict potential journey bottlenecks
     */
    predictBottlenecks(companyId: string): Promise<{
        stepId: string;
        stepName: string;
        predictedDelayFactor: number;
    }[] | null>;
    /**
     * Get tool adoption projections
     */
    getToolAdoptionProjections(companyId: string, toolId?: string): Promise<{
        toolId: string;
        toolName: string;
        projectedAdoptionRate: number;
    }[] | null>;
    /**
     * Get optimized resource allocation recommendations
     */
    getOptimizedResourceAllocation(companyId: string): Promise<{
        recommendation: string;
        details?: any;
    } | null>;
    /**
     * Get team velocity prediction
     */
    getTeamVelocityPrediction(companyId: string, teamId?: string): Promise<{
        predictedStepsPerWeek: number;
        trend: 'increasing' | 'decreasing' | 'stable';
    } | null>;
    /**
     * Get dashboard analytics data based on configuration
     */
    getDashboardAnalytics(config: DashboardConfig, companyId?: string, dateRange?: {
        start: Date;
        end: Date;
    }): Promise<DashboardData>;
    /**
     * Get dashboard configuration for a user
     */
    getDashboardConfig(ownerId: string): Promise<DashboardConfig | null>;
    /**
     * Save dashboard configuration
     */
    saveDashboardConfig(config: DashboardConfig): Promise<DashboardConfig | null>;
    /**
     * Get saved reports for a user/company
     */
    getSavedReports(ownerId: string, companyId?: string): Promise<SavedReport[] | null>;
    /**
     * Save or update a report
     */
    saveReport(report: Omit<SavedReport, 'id' | 'created_at' | 'updated_at'> & {
        id?: string;
    }): Promise<SavedReport | null>;
    /**
     * Delete a saved report
     */
    deleteReport(reportId: string, ownerId: string): Promise<boolean>;
    /**
     * Export data in specified format
     */
    exportData(data: any[], format: ExportFormat, filename: string): Promise<void>;
    /**
     * Get journey analytics data for recommendations
     */
    getJourneyAnalyticsData(companyId: string): Promise<Partial<JourneyAnalyticsData>>;
    /**
     * Get aggregated metric data
     */
    getAggregatedMetric(params: AggregationParams): Promise<AggregationResult[] | null>;
    /**
     * Get time series data
     */
    getTimeSeriesData(params: TimeSeriesParams): Promise<TimeSeriesDataPoint[] | null>;
}
export declare const analyticsService: AnalyticsService;
//# sourceMappingURL=analytics.service.d.ts.map