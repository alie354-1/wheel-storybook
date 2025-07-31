interface ExternalSystem {
    id: string;
    name: string;
    type: 'lms' | 'content_provider';
    api_endpoint?: string;
}
interface ExternalContent {
    external_id: string;
    system_id: string;
    title: string;
    description?: string;
    url: string;
    content_type: string;
}
interface UserProgress {
    user_id: string;
    external_content_id: string;
    status: 'not_started' | 'in_progress' | 'completed';
    completion_percentage?: number;
    last_accessed_at?: string;
}
/**
 * Service for managing integrations with external training systems (LMS, content providers).
 */
export declare const externalIntegrationService: {
    /**
     * Fetches configured external systems.
     */
    getExternalSystems(): Promise<ExternalSystem[] | null>;
    /**
     * Synchronizes content from a specific external system.
     * This would involve calling the external system's API.
     *
     * @param systemId - The ID of the external system to sync.
     */
    syncContent(systemId: string): Promise<{
        synced: number;
        errors: number;
    } | null>;
    /**
     * Tracks user progress on external content.
     * This might be called via webhooks from the external system or polled.
     *
     * @param progressData - The progress information.
     */
    trackExternalProgress(progressData: UserProgress): Promise<boolean>;
    /**
     * Fetches external content relevant to a specific journey step.
     *
     * @param stepId - The ID of the journey step.
     */
    getRelevantExternalContent(stepId: string): Promise<ExternalContent[] | null>;
};
export {};
//# sourceMappingURL=externalIntegration.service.d.ts.map