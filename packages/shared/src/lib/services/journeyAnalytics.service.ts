import { supabase } from '../supabase';
import { loggingService } from './logging.service'; // Import the singleton instance

export type MetricType =
  | 'time_spent'
  | 'view_count'
  | 'completion_rate'
  | 'difficulty_rating'
  | 'user_rating'
  | 'feedback_count';

export type EntityType = 'challenge' | 'phase' | 'journey' | 'step'; // Added 'step' for consistency

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
  key?: string; // Unique key for caching/identifying the aggregation
  type?: string; // Type of aggregation (e.g., 'standard', 'comparison')
}

export interface ProgressStats {
  totalSteps: number;
  completedSteps: number;
  inProgressSteps: number;
  notStartedSteps: number;
  blockedSteps: number; // Assuming 'blocked' might be a status
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
export class JourneyAnalyticsService {
  /**
   * Track an analytics metric for a journey entity.
   */
  static async trackMetric(analytics: JourneyAnalytics): Promise<void> {
    try {
      const { error } = await supabase
        .from('journey_analytics') // Ensure this table exists via migrations
        .insert({
          company_id: analytics.companyId,
          user_id: analytics.userId,
          entity_type: analytics.entityType,
          entity_id: analytics.entityId,
          metric_type: analytics.metricType,
          metric_value: analytics.metricValue,
          // created_at is handled by the database default
        });

      if (error) {
        console.error('Error tracking journey analytics metric:', error);
        // Use loggingService if available and configured
        if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(new Error(error.message), { context: 'trackMetric', analytics });
        }
        // Optionally re-throw or handle differently
        // throw error;
      }
    } catch (error) {
      console.error('Failed to track journey analytics:', error);
       if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'trackMetric', analytics });
        }
      // Optionally re-throw
      // throw error;
    }
  }

  /**
   * Track time spent on a journey entity.
   */
  static async trackTimeSpent(
    companyId: string,
    entityType: EntityType,
    entityId: string,
    timeInSeconds: number,
    userId?: string
  ): Promise<void> {
    await this.trackMetric({
      companyId,
      userId,
      entityType,
      entityId,
      metricType: 'time_spent',
      metricValue: {
        value: timeInSeconds,
        unit: 'seconds',
      },
    });
  }

  /**
   * Track a view of a journey entity.
   */
  static async trackView(
    companyId: string,
    entityType: EntityType,
    entityId: string,
    userId?: string
  ): Promise<void> {
    await this.trackMetric({
      companyId,
      userId,
      entityType,
      entityId,
      metricType: 'view_count',
      metricValue: {
        value: 1,
      },
    });
  }

  /**
   * Track a user rating for a journey entity.
   */
  static async trackRating(
    companyId: string,
    entityType: EntityType,
    entityId: string,
    rating: number,
    userId?: string
  ): Promise<void> {
    await this.trackMetric({
      companyId,
      userId,
      entityType,
      entityId,
      metricType: 'user_rating',
      metricValue: {
        value: rating,
        metadata: {
          timestamp: new Date().toISOString(),
        },
      },
    });
  }

  /**
   * Get analytics data with optional filtering.
   */
  static async getAnalytics(
    companyId: string,
    filter: AnalyticsFilter = {}
  ): Promise<JourneyAnalytics[]> {
    try {
      let query = supabase
        .from('journey_analytics')
        .select('*')
        .eq('company_id', companyId);

      if (filter.entityType) {
        query = query.eq('entity_type', filter.entityType);
      }
      if (filter.entityId) {
        query = query.eq('entity_id', filter.entityId);
      }
      if (filter.metricTypes && filter.metricTypes.length > 0) {
        query = query.in('metric_type', filter.metricTypes);
      }
      if (filter.userId) {
        query = query.eq('user_id', filter.userId);
      }
      if (filter.startDate) {
        query = query.gte('created_at', filter.startDate.toISOString());
      }
      if (filter.endDate) {
        query = query.lte('created_at', filter.endDate.toISOString());
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching journey analytics:', error);
        throw error;
      }

      // Ensure data mapping handles potential nulls and correct types
      return (data || []).map((item: any) => ({
        companyId: item.company_id,
        userId: item.user_id,
        entityType: item.entity_type as EntityType,
        entityId: item.entity_id,
        metricType: item.metric_type as MetricType,
        // Ensure metricValue is parsed correctly if stored as JSONB
        metricValue: (typeof item.metric_value === 'string' ? JSON.parse(item.metric_value) : item.metric_value) as AnalyticsMetric,
        // Include created_at if needed
        // created_at: item.created_at
      }));
    } catch (error) {
      console.error('Failed to get journey analytics:', error);
      if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'getAnalytics', companyId, filter });
      }
      throw error; // Re-throw after logging
    }
  }

  /**
   * Get aggregated analytics data. (Client-side aggregation)
   */
  static async getAggregation(
    companyId: string,
    options: AggregationOptions = {},
    filter: AnalyticsFilter = {}
  ): Promise<any> { // Return type 'any' for now, should be more specific
    try {
      // Caching logic (optional, consider if aggregations are expensive and frequently requested)
      // ... (cache check logic as before, potentially using a more robust key)

      // Fetch raw data
      const analyticsData = await this.getAnalytics(companyId, filter);
      if (!analyticsData) return {}; // Return empty object if fetch failed

      // TODO: Consider moving this aggregation logic to a database function (e.g., RPC) for better performance.
      const result: Record<string, any> = {};
      const groupedByMetric: Record<string, JourneyAnalytics[]> = {};

      analyticsData.forEach(item => {
        if (!groupedByMetric[item.metricType]) {
          groupedByMetric[item.metricType] = [];
        }
        groupedByMetric[item.metricType].push(item);
      });

      Object.entries(groupedByMetric).forEach(([metricType, items]) => {
        const count = items.length;
        if (count === 0) return;

        const numericValues = items
          .map(item => item.metricValue?.value)
          .filter((value): value is number => typeof value === 'number'); // Filter out non-numeric values

        switch (metricType) {
          case 'view_count':
            result.totalViews = numericValues.reduce((sum, value) => sum + value, 0);
            break;
          case 'time_spent':
            const totalTime = numericValues.reduce((sum, value) => sum + value, 0);
            result.totalTimeSpent = totalTime;
            result.averageTimeSpent = numericValues.length > 0 ? totalTime / numericValues.length : 0;
            break;
          case 'user_rating':
            const totalRating = numericValues.reduce((sum, value) => sum + value, 0);
            result.averageRating = numericValues.length > 0 ? totalRating / numericValues.length : 0;
            result.ratingCount = numericValues.length;
            break;
          case 'feedback_count': // Example specific handling
             result.feedbackCount = count;
             break;
          // Add cases for other MetricTypes like completion_rate, difficulty_rating if needed
          default:
            // Generic handling for other potential numeric metrics
            result[`${metricType}_count`] = count;
            if (numericValues.length > 0) {
              const sum = numericValues.reduce((s, v) => s + v, 0);
              result[`${metricType}_sum`] = sum;
              result[`${metricType}_average`] = sum / numericValues.length;
            }
        }
      });

      // Caching logic (optional)
      // ... (cache store logic as before)

      return result;
    } catch (error) {
      console.error('Failed to get aggregated analytics:', error);
       if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'getAggregation', companyId, options, filter });
      }
      throw error; // Re-throw after logging
    }
  }

  /**
   * Get journey progress statistics using RPC.
   */
  static async getProgressStats(
    companyId: string,
    journeyId?: string, // Optional journey filter
    startDate?: Date,
    endDate?: Date
  ): Promise<ProgressStats | null> { // Return null on error
    try {
      const { data, error } = await supabase.rpc(
        'get_journey_progress_stats', // Ensure this function exists in DB
        {
          p_company_id: companyId,
          p_journey_id: journeyId, // Pass journeyId if provided
          p_start_date: startDate?.toISOString(),
          p_end_date: endDate?.toISOString(),
        }
      );

      if (error) {
        console.error('Error fetching journey progress stats via RPC:', error);
         if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(new Error(error.message), { context: 'getProgressStats', companyId, journeyId, dbError: error });
         }
        return null; // Return null on error
      }

      // Assuming the RPC function returns data matching the ProgressStats interface
      return data as ProgressStats;
    } catch (error) {
      console.error('Failed to get journey progress stats:', error);
       if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'getProgressStats', companyId, journeyId });
        }
      return null; // Return null on exception
    }
  }

  /**
   * Get team assignments statistics using RPC.
   */
  static async getTeamAssignmentStats(
    companyId: string,
    userId?: string // Optional user filter
  ): Promise<TeamAssignmentStats | null> { // Return null on error
    try {
      const { data, error } = await supabase.rpc(
        'get_team_assignments_stats', // Ensure this function exists in DB
        {
          p_company_id: companyId,
          p_user_id: userId, // Pass userId if provided
        }
      );

      if (error) {
        console.error('Error fetching team assignment stats via RPC:', error);
         if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(new Error(error.message), { context: 'getTeamAssignmentStats', companyId, userId, dbError: error });
         }
        return null; // Return null on error
      }

      // Assuming the RPC function returns data matching the TeamAssignmentStats interface
      return data as TeamAssignmentStats;
    } catch (error) {
      console.error('Failed to get team assignment stats:', error);
       if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'getTeamAssignmentStats', companyId, userId });
        }
      return null; // Return null on exception
    }
  }

  /**
   * Get analytics for comparing journey progress with industry benchmarks or similar companies.
   */
  static async getComparisonAnalytics(companyId: string): Promise<any | null> { // Return null on error
    try {
      const progressStats = await this.getProgressStats(companyId);
      if (!progressStats) {
         console.warn('Could not fetch progress stats for comparison analytics.');
         return null; // Cannot compare without current progress
      }

      // TODO: Fetch actual benchmark data instead of using hardcoded values.
      // This might involve another RPC call or querying a dedicated benchmarks table.
      const benchmarkData = {
        industry: {
          completionPercentage: 68.5,
          averageTimeToCompletion: 45,
          averageStepsCompleted: 24,
        },
        similarCompanies: {
          completionPercentage: 72.3,
          averageTimeToCompletion: 42,
          averageStepsCompleted: 26,
        },
      };

      const completionDiffIndustry = progressStats.completionPercentage - benchmarkData.industry.completionPercentage;
      const completionDiffSimilar = progressStats.completionPercentage - benchmarkData.similarCompanies.completionPercentage;

      let recommendation = 'Your journey completion is on track with industry standards. Keep up the good work!';
      if (completionDiffIndustry < -10) { // Significantly below industry
         recommendation = 'Your journey completion is significantly below the industry average. Consider focusing on key steps or seeking guidance.';
      } else if (completionDiffIndustry < 0) { // Slightly below industry
         recommendation = 'Your journey completion is slightly below the industry average. Focus on completing upcoming steps to catch up.';
      } else if (completionDiffSimilar > 10) { // Significantly ahead of similar companies
         recommendation = 'You are progressing significantly faster than similar companies. Excellent work!';
      }

      return {
        current: {
          completionPercentage: progressStats.completionPercentage,
          stepsCompleted: progressStats.completedSteps,
          totalSteps: progressStats.totalSteps,
        },
        industry: benchmarkData.industry,
        similarCompanies: benchmarkData.similarCompanies,
        comparisonResults: {
          completionPercentageDiffIndustry: parseFloat(completionDiffIndustry.toFixed(1)),
          completionPercentageDiffSimilar: parseFloat(completionDiffSimilar.toFixed(1)),
          isAheadOfIndustry: completionDiffIndustry > 0,
          isAheadOfSimilarCompanies: completionDiffSimilar > 0,
          recommendation: recommendation
        }
      };
    } catch (error) {
       console.error('Failed to get comparison analytics:', error);
        if (typeof (loggingService as any)?.logError === 'function') {
           (loggingService as any).logError(error instanceof Error ? error : new Error(String(error)), { context: 'getComparisonAnalytics', companyId });
        }
       return null; // Return null on exception
    }
  }

  // --- Placeholder Predictive Functions (Sprint 5) ---

  /**
   * Placeholder for fetching journey completion forecast.
   */
  static async getJourneyCompletionForecast(companyId: string): Promise<{ estimatedWeeks: number; confidence: number } | null> {
    console.warn('getJourneyCompletionForecast: Placeholder implementation. Returning mock data.');
    // TODO: Implement call to actual prediction model/service based on historical data, velocity, etc.
    try {
      const progress = await this.getProgressStats(companyId);
      if (!progress) return null;

      // Simple placeholder: Fewer weeks if already further along. Randomness added.
      const baseWeeks = 12; // Base estimate for a full journey
      const progressFactor = 1 - (progress.completionPercentage / 100); // Factor remaining progress
      const estimatedWeeks = Math.max(1, Math.round(baseWeeks * progressFactor + (Math.random() - 0.5) * 4)); // Add some variance
      const confidence = 0.5 + Math.random() * 0.3; // Placeholder confidence

      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate delay
      return { estimatedWeeks, confidence: parseFloat(confidence.toFixed(2)) };
    } catch (error) {
       console.error("Error in placeholder getJourneyCompletionForecast:", error);
       return null;
    }
  }

  /**
   * Placeholder for predicting potential journey bottlenecks.
   */
  static async predictBottlenecks(companyId: string): Promise<{ stepId: string; stepName: string; predictedDelayFactor: number }[] | null> {
    console.warn('predictBottlenecks: Placeholder implementation. Returning mock data.');
    // TODO: Implement call to actual prediction model/service based on historical data across companies.
     try {
      // Simulate fetching common bottlenecks - In reality, query analytics or a precomputed table
      await new Promise(resolve => setTimeout(resolve, 400)); // Simulate delay
      const commonBottlenecks = [
        { stepId: 'step-market-validation', stepName: 'Market Validation', predictedDelayFactor: 1.3 + (Math.random() * 0.4 - 0.2) }, // Add variance
        { stepId: 'step-initial-funding', stepName: 'Initial Funding Round', predictedDelayFactor: 1.2 + (Math.random() * 0.4 - 0.2) },
        // Add more potential bottlenecks based on analysis
      ];
      // Return top 2 predicted bottlenecks
      return commonBottlenecks.sort((a,b) => b.predictedDelayFactor - a.predictedDelayFactor).slice(0, 2);
     } catch (error) {
        console.error("Error in placeholder predictBottlenecks:", error);
        return null;
     }
  }

  /**
   * Placeholder for projecting tool adoption rates.
   */
  static async getToolAdoptionProjections(companyId: string, toolId?: string): Promise<{ toolId: string; toolName: string; projectedAdoptionRate: number }[] | null> {
    console.warn('getToolAdoptionProjections: Placeholder implementation. Returning mock data.');
     // TODO: Implement call to actual prediction model/service based on tool features, user roles, current adoption.
     try {
        await new Promise(resolve => setTimeout(resolve, 250)); // Simulate delay
        // Simulate fetching projections for a couple of tools
        const projections = [
          { toolId: 'tool-xyz', toolName: 'Tool XYZ', projectedAdoptionRate: 0.55 + (Math.random() * 0.2 - 0.1) },
          { toolId: 'tool-abc', toolName: 'Tool ABC', projectedAdoptionRate: 0.30 + (Math.random() * 0.2 - 0.1) },
        ];
        // Filter by toolId if provided
        const result = toolId ? projections.filter(p => p.toolId === toolId) : projections;
        return result.map(p => ({ ...p, projectedAdoptionRate: parseFloat(p.projectedAdoptionRate.toFixed(2)) }));
     } catch (error) {
        console.error("Error in placeholder getToolAdoptionProjections:", error);
        return null;
     }
  }

   /**
   * Placeholder for suggesting optimized resource allocation.
   */
  static async getOptimizedResourceAllocation(companyId: string): Promise<{ recommendation: string; details?: any } | null> {
    console.warn('getOptimizedResourceAllocation: Placeholder implementation. Returning mock data.');
    // TODO: Implement call to actual optimization model/service considering current progress, bottlenecks, team skills.
    try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        // Simulate a simple recommendation based on a random bottleneck
        const bottlenecks = await this.predictBottlenecks(companyId);
        const bottleneckFocus = bottlenecks && bottlenecks.length > 0 ? bottlenecks[0].stepName : 'MVP Development';

        return {
          recommendation: `Consider allocating more resources (e.g., engineering, marketing) towards the '${bottleneckFocus}' step to accelerate progress.`,
          details: { focusStep: bottleneckFocus, suggestion: 'Increase resource allocation' }
        };
    } catch (error) {
        console.error("Error in placeholder getOptimizedResourceAllocation:", error);
        return null;
    }
  }

  /**
   * Placeholder for predicting team velocity.
   */
  static async getTeamVelocityPrediction(companyId: string, teamId?: string): Promise<{ predictedStepsPerWeek: number; trend: 'increasing' | 'decreasing' | 'stable' } | null> {
     console.warn('getTeamVelocityPrediction: Placeholder implementation. Returning mock data.');
     // TODO: Implement call to actual prediction model/service based on recent team activity.
     try {
        await new Promise(resolve => setTimeout(resolve, 350)); // Simulate delay
        // Simulate based on recent activity (e.g., count completed steps in last week)
        // This requires fetching recent completion events, which is omitted for placeholder simplicity
        const randomTrend = ['increasing', 'decreasing', 'stable'][Math.floor(Math.random() * 3)] as 'increasing' | 'decreasing' | 'stable';
        return { predictedStepsPerWeek: parseFloat((1.5 + Math.random() * 2).toFixed(1)), trend: randomTrend };
     } catch (error) {
        console.error("Error in placeholder getTeamVelocityPrediction:", error);
        return null;
     }
  }

}

export default JourneyAnalyticsService;
