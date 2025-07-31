/**
 * Journey Status Service
 *
 * This service handles fetching and caching step status configurations from the database.
 * It provides methods to get statuses for different UI components.
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
    orderIndex: number;
}
/**
 * Journey Status Service
 */
declare class JourneyStatusService {
    private statusCache;
    private lastFetchTime;
    private cacheTTL;
    /**
     * Fetch all statuses from the database
     */
    private fetchStatuses;
    /**
     * Get fallback statuses in case of database error
     */
    private getFallbackStatuses;
    /**
     * Get all statuses
     */
    getAllStatuses(): Promise<Record<StepStatusType, StepStatusConfig>>;
    /**
     * Get status config by ID
     */
    getStatusConfig(statusId: StepStatusType): Promise<StepStatusConfig>;
    /**
     * Get all statuses that should appear in the side panel
     */
    getSidePanelStatuses(): Promise<StepStatusType[]>;
    /**
     * Get all statuses that should appear in the most recent section
     */
    getMostRecentStatuses(): Promise<StepStatusType[]>;
    /**
     * Get all statuses that should appear in the active steps list
     */
    getActiveStatuses(): Promise<StepStatusType[]>;
    /**
     * Refresh the status cache
     */
    refreshCache(): Promise<void>;
}
export declare const journeyStatusService: JourneyStatusService;
export {};
//# sourceMappingURL=journey-status.service.d.ts.map