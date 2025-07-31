export type MetricType = 'time_spent' | 'view_count' | 'completion_rate' | 'difficulty_rating' | 'user_rating' | 'feedback_count';
export type EntityType = 'challenge' | 'phase' | 'journey' | 'step';
export interface AnalyticsMetric {
    value: number;
    unit?: string;
    metadata?: Record<string, any>;
}
export interface JourneyAnalytics {
    companyId: string;
    userId?: string;
    entityType: EntityType;
    entityId: string;
    metricType: MetricType;
    metricValue: AnalyticsMetric;
}
export interface AnalyticsFilter {
    startDate?: Date;
    endDate?: Date;
    entityType?: EntityType;
    entityId?: string;
    metricTypes?: MetricType[];
    userId?: string;
}
export interface AggregationOptions {
    period?: 'day' | 'week' | 'month' | 'quarter' | 'year' | 'all';
    key?: string;
    type?: string;
}
export interface ProgressStats {
    totalSteps: number;
    completedSteps: number;
    inProgressSteps: number;
    notStartedSteps: number;
    blockedSteps: number;
    completionPercentage: number;
    phases: Array<{
        phaseId: string;
        phaseName: string;
        totalSteps: number;
        completedSteps: number;
        completionPercentage: number;
    }>;
}
export interface TeamAssignmentStats {
    totalAssignments: number;
    pendingAssignments: number;
    inProgressAssignments: number;
    completedAssignments: number;
    blockedAssignments: number;
    users: Array<{
        userId: string;
        userName: string;
        totalAssignments: number;
        completedAssignments: number;
        completionPercentage: number;
    }>;
}
/**
 * JourneyAnalyticsService
 *
 * Service for tracking, analyzing, and retrieving analytics data related
 * to journey steps, phases, and overall journey progress.
 * Part of the Sprint 5 Advanced Journey Analytics feature.
 */
export declare class JourneyAnalyticsService {
    /**
     * Track an analytics metric for a journey entity.
     */
    static trackMetric(analytics: JourneyAnalytics): Promise<void>;
    /**
     * Track time spent on a journey entity.
     */
    static trackTimeSpent(companyId: string, entityType: EntityType, entityId: string, timeInSeconds: number, userId?: string): Promise<void>;
    /**
     * Track a view of a journey entity.
     */
    static trackView(companyId: string, entityType: EntityType, entityId: string, userId?: string): Promise<void>;
    /**
     * Track a user rating for a journey entity.
     */
    static trackRating(companyId: string, entityType: EntityType, entityId: string, rating: number, userId?: string): Promise<void>;
    /**
     * Get analytics data with optional filtering.
     */
    static getAnalytics(companyId: string, filter?: AnalyticsFilter): Promise<JourneyAnalytics[]>;
    /**
     * Get aggregated analytics data. (Client-side aggregation)
     */
    static getAggregation(companyId: string, options?: AggregationOptions, filter?: AnalyticsFilter): Promise<any>;
    /**
     * Get journey progress statistics using RPC.
     */
    static getProgressStats(companyId: string, journeyId?: string, // Optional journey filter
    startDate?: Date, endDate?: Date): Promise<ProgressStats | null>;
    /**
     * Get team assignments statistics using RPC.
     */
    static getTeamAssignmentStats(companyId: string, userId?: string): Promise<TeamAssignmentStats | null>;
    /**
     * Get analytics for comparing journey progress with industry benchmarks or similar companies.
     */
    static getComparisonAnalytics(companyId: string): Promise<any | null>;
    /**
     * Placeholder for fetching journey completion forecast.
     */
    static getJourneyCompletionForecast(companyId: string): Promise<{
        estimatedWeeks: number;
        confidence: number;
    } | null>;
    /**
     * Placeholder for predicting potential journey bottlenecks.
     */
    static predictBottlenecks(companyId: string): Promise<{
        stepId: string;
        stepName: string;
        predictedDelayFactor: number;
    }[] | null>;
    /**
     * Placeholder for projecting tool adoption rates.
     */
    static getToolAdoptionProjections(companyId: string, toolId?: string): Promise<{
        toolId: string;
        toolName: string;
        projectedAdoptionRate: number;
    }[] | null>;
    /**
    * Placeholder for suggesting optimized resource allocation.
    */
    static getOptimizedResourceAllocation(companyId: string): Promise<{
        recommendation: string;
        details?: any;
    } | null>;
    /**
     * Placeholder for predicting team velocity.
     */
    static getTeamVelocityPrediction(companyId: string, teamId?: string): Promise<{
        predictedStepsPerWeek: number;
        trend: 'increasing' | 'decreasing' | 'stable';
    } | null>;
}
export default JourneyAnalyticsService;
//# sourceMappingURL=journeyAnalytics.service.d.ts.map