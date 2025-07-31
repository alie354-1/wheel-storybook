/**
 * Service for integrating with external LMS and content providers.
 * Handles content sync, progress tracking, credential management, and resource linking.
 * (Sprint 5 - BOH-504)
 */
export interface ExternalLMSIntegration {
    id: string;
    name: string;
    type: "lms" | "content_provider";
    api_url: string;
    status: "connected" | "disconnected" | "error";
    last_sync?: string;
    credentials?: Record<string, any>;
}
export interface ExternalContentResource {
    id: string;
    title: string;
    provider: string;
    type: string;
    url: string;
    rating?: number;
    usage_count?: number;
    cost?: number;
}
export declare function listIntegrations(companyId: string): Promise<ExternalLMSIntegration[]>;
export declare function connectIntegration(companyId: string, integrationId: string, credentials: Record<string, any>): Promise<boolean>;
export declare function disconnectIntegration(companyId: string, integrationId: string): Promise<boolean>;
export declare function fetchExternalContent(companyId: string, providerId: string): Promise<ExternalContentResource[]>;
export declare function syncProgressWithLMS(companyId: string, lmsId: string): Promise<boolean>;
export declare function fetchCredentials(companyId: string, integrationId: string): Promise<Record<string, any> | null>;
//# sourceMappingURL=externalTrainingIntegration.service.d.ts.map