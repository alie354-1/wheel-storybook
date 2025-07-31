import { JourneyAnalytics, AnalyticsFilter, EntityType, AggregationOptions, ProgressStats, TeamAssignmentStats } from './types';
/**
 * Track an analytics metric for a journey entity
 *
 * @param analytics The analytics data to track
 */
export declare function trackMetric(analytics: JourneyAnalytics): Promise<void>;
/**
 * Track time spent on a journey entity
 *
 * @param companyId The company ID
 * @param entityType The type of entity (journey, phase, step, challenge)
 * @param entityId The ID of the entity
 * @param timeInSeconds The time spent in seconds
 * @param userId Optional user ID
 */
export declare function trackTimeSpent(companyId: string, entityType: EntityType, entityId: string, timeInSeconds: number, userId?: string): Promise<void>;
/**
 * Track a view of a journey entity
 *
 * @param companyId The company ID
 * @param entityType The type of entity (journey, phase, step, challenge)
 * @param entityId The ID of the entity
 * @param userId Optional user ID
 */
export declare function trackView(companyId: string, entityType: EntityType, entityId: string, userId?: string): Promise<void>;
/**
 * Track a user rating for a journey entity
 *
 * @param companyId The company ID
 * @param entityType The type of entity (journey, phase, step, challenge)
 * @param entityId The ID of the entity
 * @param rating The rating value
 * @param userId Optional user ID
 */
export declare function trackRating(companyId: string, entityType: EntityType, entityId: string, rating: number, userId?: string): Promise<void>;
/**
 * Get analytics data with optional filtering
 *
 * @param companyId The company ID
 * @param filter Optional filter parameters
 * @returns Array of journey analytics data
 */
export declare function getAnalytics(companyId: string, filter?: AnalyticsFilter): Promise<JourneyAnalytics[]>;
/**
 * Get aggregated analytics data (client-side aggregation)
 *
 * @param companyId The company ID
 * @param options Aggregation options (period, etc.)
 * @param filter Optional filter parameters
 * @returns Aggregated analytics data
 */
export declare function getAggregation(companyId: string, options?: AggregationOptions, filter?: AnalyticsFilter): Promise<any>;
/**
 * Get journey progress statistics using RPC
 *
 * @param companyId The company ID
 * @param journeyId Optional journey ID filter
 * @param startDate Optional start date filter
 * @param endDate Optional end date filter
 * @returns Journey progress statistics or null
 */
export declare function getProgressStats(companyId: string, journeyId?: string, startDate?: Date, endDate?: Date): Promise<ProgressStats | null>;
/**
 * Get team assignments statistics using RPC
 *
 * @param companyId The company ID
 * @param userId Optional user ID filter
 * @returns Team assignment statistics or null
 */
export declare function getTeamAssignmentStats(companyId: string, userId?: string): Promise<TeamAssignmentStats | null>;
/**
 * Get analytics for comparing journey progress with industry benchmarks
 *
 * @param companyId The company ID
 * @returns Comparison analytics data or null
 */
export declare function getComparisonAnalytics(companyId: string): Promise<any | null>;
/**
 * Placeholder for fetching journey completion forecast
 *
 * @param companyId The company ID
 * @returns Forecast data or null
 */
export declare function getJourneyCompletionForecast(companyId: string): Promise<{
    estimatedWeeks: number;
    confidence: number;
} | null>;
/**
 * Placeholder for predicting potential journey bottlenecks
 *
 * @param companyId The company ID
 * @returns Bottleneck predictions or null
 */
export declare function predictBottlenecks(companyId: string): Promise<{
    stepId: string;
    stepName: string;
    predictedDelayFactor: number;
}[] | null>;
/**
 * Placeholder for projecting tool adoption rates
 *
 * @param companyId The company ID
 * @param toolId Optional tool ID filter
 * @returns Tool adoption projections or null
 */
export declare function getToolAdoptionProjections(companyId: string, toolId?: string): Promise<{
    toolId: string;
    toolName: string;
    projectedAdoptionRate: number;
}[] | null>;
/**
 * Placeholder for suggesting optimized resource allocation
 *
 * @param companyId The company ID
 * @returns Resource allocation recommendations or null
 */
export declare function getOptimizedResourceAllocation(companyId: string): Promise<{
    recommendation: string;
    details?: any;
} | null>;
/**
 * Placeholder for predicting team velocity
 *
 * @param companyId The company ID
 * @param teamId Optional team ID filter
 * @returns Team velocity prediction or null
 */
export declare function getTeamVelocityPrediction(companyId: string, teamId?: string): Promise<{
    predictedStepsPerWeek: number;
    trend: 'increasing' | 'decreasing' | 'stable';
} | null>;
//# sourceMappingURL=journeyAnalytics.service.d.ts.map