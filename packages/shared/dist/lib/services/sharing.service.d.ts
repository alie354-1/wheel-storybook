import { SharedJourneyReport, StepRecommendation, JourneyStep } from '../types/journey-unified.types';
/**
 * Sharing Service
 *
 * Provides methods for sharing journey progress, reports, and recommendations
 * between users and companies.
 */
export declare class SharingService {
    /**
     * Create a shareable journey report
     */
    createSharedReport(companyId: string, creatorId: string, title: string, description?: string, includedPhases?: string[], includedSteps?: string[], accessType?: 'public' | 'company' | 'private' | 'specific_users', allowedUsers?: string[], displayOptions?: Record<string, any>, expirationDate?: string): Promise<SharedJourneyReport | null>;
    /**
     * Get a shared report by ID
     */
    getSharedReport(reportId: string): Promise<SharedJourneyReport | null>;
    /**
     * Get a shared report by public token
     */
    getSharedReportByToken(token: string): Promise<SharedJourneyReport | null>;
    /**
     * Update a shared report
     */
    updateSharedReport(reportId: string, updates: Partial<SharedJourneyReport>): Promise<SharedJourneyReport | null>;
    /**
     * Delete a shared report
     */
    deleteSharedReport(reportId: string): Promise<boolean>;
    /**
     * Generate a public token for a report
     */
    generateReportPublicToken(reportId: string): Promise<string | null>;
    /**
     * Get all reports shared with a specific user
     */
    getReportsSharedWithUser(userId: string, limit?: number, offset?: number): Promise<SharedJourneyReport[]>;
    /**
     * Get all reports created by a specific user
     */
    getReportsCreatedByUser(userId: string, limit?: number, offset?: number): Promise<SharedJourneyReport[]>;
    /**
     * Export a journey report to PDF, CSV, etc.
     * This method prepares the export by creating a record in the shared_journey_exports table.
     * Actual file generation would be handled by a server-side function or service.
     */
    exportJourneyReport(reportId: string, creatorId: string, format: 'pdf' | 'csv' | 'json' | 'pptx' | 'xlsx'): Promise<{
        id: string;
        fileUrl: string;
    } | null>;
    /**
     * Increment the download count for an export
     */
    recordExportDownload(exportId: string): Promise<boolean>;
    /**
     * Recommend a step to another user
     */
    recommendStep(companyId: string, senderId: string, recipientId: string, stepId: string, contextNote?: string, priority?: 'low' | 'medium' | 'high'): Promise<StepRecommendation | null>;
    /**
     * Get recommendations for a user
     */
    getUserRecommendations(userId: string, status?: 'pending' | 'accepted' | 'declined' | 'completed', limit?: number, offset?: number): Promise<Array<StepRecommendation & {
        step?: JourneyStep;
        sender_name?: string;
    }>>;
    /**
     * Update recommendation status
     */
    updateRecommendationStatus(recommendationId: string, status: 'accepted' | 'declined' | 'completed', responseNote?: string): Promise<StepRecommendation | null>;
    /**
     * Mark a recommendation as viewed
     */
    markRecommendationViewed(recommendationId: string): Promise<boolean>;
    /**
     * Create a recommendation group
     */
    createRecommendationGroup(companyId: string, senderId: string, title: string, description?: string, recommendations?: Array<{
        recipientId: string;
        stepId: string;
        contextNote?: string;
        priority?: 'low' | 'medium' | 'high';
    }>): Promise<{
        groupId: string;
        recommendationIds: string[];
    } | null>;
    /**
     * Get recommendation groups created by a user
     */
    getRecommendationGroupsCreatedByUser(userId: string, limit?: number, offset?: number): Promise<any[]>;
}
export declare const sharingService: SharingService;
//# sourceMappingURL=sharing.service.d.ts.map