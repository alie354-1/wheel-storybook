export interface PredictiveInsight {
    id: string;
    title: string;
    value: string | number;
    unit?: string;
    description: string;
    type: 'forecast' | 'bottleneck' | 'projection' | 'optimization';
}
export interface ReportingData {
    timeSeries?: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
        }[];
    };
    tableData?: {
        columns: string[];
        rows: any[][];
    };
    scorecard?: {
        metric: string;
        value: number | string;
        change?: number;
    };
}
export interface DashboardWidgetConfig {
    id: string;
    type: 'predictiveInsight' | 'timeSeriesChart' | 'reportTable' | 'scorecard';
    settings: Record<string, any>;
    position: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
export interface DashboardConfig {
    id: string;
    name: string;
    widgets: DashboardWidgetConfig[];
    created_at?: string;
    updated_at?: string;
}
export interface SavedReport {
    id: string;
    name: string;
    description?: string;
    configuration: Record<string, any>;
    owner_id: string;
    company_id?: string;
    created_at?: string;
    updated_at?: string;
}
export type ExportFormat = 'csv' | 'excel' | 'pdf';
export interface DashboardData {
    predictiveInsights: PredictiveInsight[];
    reportingData: ReportingData;
}
/**
 * Fetches data required for the main analytics dashboard based on config.
 * Currently returns mock data and ignores config.
 *
 * @param config - The dashboard configuration defining widgets and settings.
 * @param companyId - The ID of the company context.
 * @param dateRange - Optional date range filter.
 * @returns A promise resolving to the dashboard data.
 */
export declare const getDashboardAnalytics: (config: DashboardConfig, // Use config to determine what data to fetch
companyId?: string, dateRange?: {
    start: Date;
    end: Date;
}) => Promise<DashboardData>;
/**
 * Fetches the dashboard configuration for a user or company.
 *
 * @param ownerId - The user ID or potentially a shared dashboard ID.
 * @returns The dashboard configuration or null if not found or error.
 */
export declare const getDashboardConfig: (ownerId: string) => Promise<DashboardConfig | null>;
/**
 * Saves or updates the dashboard configuration.
 *
 * @param config - The dashboard configuration to save.
 * @returns The saved configuration or null if an error occurs.
 */
export declare const saveDashboardConfig: (config: DashboardConfig) => Promise<DashboardConfig | null>;
/**
 * Fetches all saved reports for a user/company.
 *
 * @param ownerId - The user ID owning the reports.
 * @param companyId - Optional company ID context.
 * @returns An array of saved reports or null on error.
 */
export declare const getSavedReports: (ownerId: string, companyId?: string) => Promise<SavedReport[] | null>;
/**
 * Saves or updates a custom report configuration.
 *
 * @param report - The report configuration to save.
 * @returns The saved report configuration or null on error.
 */
export declare const saveReport: (report: Omit<SavedReport, "id" | "created_at" | "updated_at"> & {
    id?: string;
}) => Promise<SavedReport | null>;
/**
 * Deletes a saved report.
 *
 * @param reportId - The ID of the report to delete.
 * @param ownerId - The user ID owning the report (for verification).
 * @returns True if successful, false otherwise.
 */
export declare const deleteReport: (reportId: string, ownerId: string) => Promise<boolean>;
/**
 * Generates and triggers a download for data in the specified format.
 *
 * @param data - The data array to export.
 * @param format - The desired export format ('csv', 'excel', 'pdf').
 * @param filename - The base filename for the downloaded file.
 */
export declare const exportData: (data: any[], // Should ideally be more specific, e.g., Record<string, any>[]
format: ExportFormat, filename: string) => Promise<void>;
//# sourceMappingURL=dashboardAnalytics.service.d.ts.map