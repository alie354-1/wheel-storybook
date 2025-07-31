import { AggregationParams, AggregationResult, TimeSeriesParams, TimeSeriesDataPoint } from './types';
/**
 * Get aggregated metric data based on specified parameters
 *
 * @param params Aggregation parameters including metric, filters, and grouping
 * @returns Aggregated results or null on error
 */
export declare function getAggregatedMetric(params: AggregationParams): Promise<AggregationResult[] | null>;
/**
 * Get time series data for a metric over a specified time range
 *
 * @param params Time series parameters including metric, interval, and date range
 * @returns Time series data points or null on error
 */
export declare function getTimeSeriesData(params: TimeSeriesParams): Promise<TimeSeriesDataPoint[] | null>;
//# sourceMappingURL=reporting.service.d.ts.map