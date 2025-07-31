/**
 * Time utility functions
 */
/**
 * Format a time range in a human-readable format
 *
 * @param minutes - Time in minutes
 * @returns Formatted time string (e.g. "30 minutes", "1-2 hours", "2-3 days")
 */
export declare function formatTimeRange(minMinutes: number, maxMinutes: number): string;
/**
 * Calculate a human-readable time estimate from min/max minutes
 */
export declare function calculateTimeEstimate(minMinutes: number, maxMinutes: number): string;
/**
 * Get completion time estimate based on estimated times and current progress
 */
export declare function getCompletionEstimate(estimatedMinMinutes: number, estimatedMaxMinutes: number, progressPercentage: number): string;
/**
 * Format a date or timestamp
 */
export declare function formatDate(date: Date | string | number): string;
/**
 * Get relative time from a date (e.g. "2 days ago", "in 3 hours")
 */
export declare function getRelativeTime(date: Date | string | number): string;
//# sourceMappingURL=time-utils.d.ts.map