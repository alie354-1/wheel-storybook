/**
 * Journey Status Configuration
 *
 * This file defines all possible step statuses and their display properties.
 * Components should reference this configuration instead of hard-coding status values.
 */
export type StepStatusType = 'not_started' | 'active' | 'complete' | 'skipped';
export interface StepStatusConfig {
    id: StepStatusType;
    label: string;
    description: string;
    icon: any;
    colorClass: string;
    showInSidePanel: boolean;
    showInMostRecent: boolean;
    showInActive: boolean;
}
/**
 * Master configuration for all step statuses
 */
export declare const STEP_STATUSES: Record<StepStatusType, StepStatusConfig>;
/**
 * Helper functions for working with step statuses
 */
/**
 * Get status config by ID
 */
export declare const getStatusConfig: (statusId: StepStatusType) => StepStatusConfig;
/**
 * Get all statuses that should appear in the side panel
 */
export declare const getSidePanelStatuses: () => StepStatusType[];
/**
 * Get all statuses that should appear in the most recent section
 */
export declare const getMostRecentStatuses: () => StepStatusType[];
/**
 * Get all statuses that should appear in the active steps list
 */
export declare const getActiveStatuses: () => StepStatusType[];
//# sourceMappingURL=journey-status.config.d.ts.map