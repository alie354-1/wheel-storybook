import { DashboardConfig, DashboardData, SavedReport, ExportFormat } from './types';
/**
 * Fetches data required for the main analytics dashboard based on config
 *
 * @param config The dashboard configuration defining widgets and settings
 * @param companyId Optional company ID context
 * @param dateRange Optional date range filter
 * @returns Dashboard data for display
 */
export declare function getDashboardAnalytics(config: DashboardConfig, companyId?: string, dateRange?: {
    start: Date;
    end: Date;
}): Promise<DashboardData>;
/**
 * Fetches the dashboard configuration for a user or company
 *
 * @param ownerId The user ID or potentially a shared dashboard ID
 * @returns The dashboard configuration or null if not found or error
 */
export declare function getDashboardConfig(ownerId: string): Promise<DashboardConfig | null>;
/**
 * Saves or updates the dashboard configuration
 *
 * @param config The dashboard configuration to save
 * @returns The saved configuration or null on error
 */
export declare function saveDashboardConfig(config: DashboardConfig): Promise<DashboardConfig | null>;
/**
 * Fetches all saved reports for a user/company
 *
 * @param ownerId The user ID owning the reports
 * @param companyId Optional company ID context
 * @returns An array of saved reports or null on error
 */
export declare function getSavedReports(ownerId: string, companyId?: string): Promise<SavedReport[] | null>;
/**
 * Saves or updates a custom report configuration
 *
 * @param report The report configuration to save
 * @returns The saved report configuration or null on error
 */
export declare function saveReport(report: Omit<SavedReport, 'id' | 'created_at' | 'updated_at'> & {
    id?: string;
}): Promise<SavedReport | null>;
/**
 * Deletes a saved report
 *
 * @param reportId The ID of the report to delete
 * @param ownerId The user ID owning the report (for verification)
 * @returns True if successful, false otherwise
 */
export declare function deleteReport(reportId: string, ownerId: string): Promise<boolean>;
/**
 * Generates and triggers a download for data in the specified format
 *
 * @param data The data array to export
 * @param format The desired export format ('csv', 'excel', 'pdf')
 * @param filename The base filename for the downloaded file
 */
export declare function exportData(data: any[], format: ExportFormat, filename: string): Promise<void>;
//# sourceMappingURL=dashboardAnalytics.service.d.ts.map