import { LogEvent } from '../types/logging.types';
declare class EnhancedLoggingService {
    private initialized;
    private currentSessionId;
    private userId;
    private companyId;
    private clientInfo;
    private isEnabled;
    private hasPermissionIssues;
    private localLogs;
    private maxLocalLogSize;
    constructor();
    /**
     * Initialize the logging service (no-op)
     */
    initialize(): Promise<void>;
    /**
     * Start a new user session (no-op)
     * @param userId User ID (optional)
     * @param companyId Company ID (optional)
     * @returns Session ID
     */
    startSession(userId?: string, companyId?: string): Promise<string>;
    /**
     * End the current user session (no-op)
     */
    endSession(): Promise<void>;
    /**
     * Get the current session duration in milliseconds (no-op)
     */
    private getSessionDuration;
    /**
     * Simplified client info collection (no-op)
     */
    private collectClientInfo;
    /**
     * Set the current user context (no-op)
     */
    setUserContext(userId: string | null, companyId?: string | null): void;
    /**
     * Log a general event to the system (no-op)
     * @returns Fake event ID
     */
    logEvent(event: Omit<LogEvent, 'id' | 'created_at'>): Promise<string | null>;
    /**
     * Simplified local storage (no-op)
     */
    private storeLogLocally;
    /**
     * Log a system event locally (no-op)
     */
    private logSystemEventLocally;
    /**
     * Determine the required consent type (no-op)
     */
    private getRequiredConsentType;
    /**
     * All logging methods are no-ops that return fake IDs
     */
    logUserAction(action: string, component?: string, data?: any, metadata?: any): Promise<string | null>;
    logAIInteraction(action: string, data: any, metadata?: any): Promise<string | null>;
    logPageView(pagePath: string, pageTitle: string, referrer?: string, metadata?: any): Promise<string | null>;
    logNavigation(fromPath: string, toPath: string, navigationMethod: any, metadata?: any): Promise<string | null>;
    logError(error: Error | string, component?: string, context?: any): Promise<string | null>;
    logAPIRequest(endpoint: string, method: string, requestData?: any, responseData?: any, statusCode?: number, duration?: number): Promise<string | null>;
    logSystemEvent(category: string, source: string, action: string, data?: any): Promise<string | null>;
    logFeatureUsage(featureName: string, action: string, data?: any): Promise<string | null>;
    logPerformance(metricName: string, value: number, unit?: string, context?: any): Promise<string | null>;
    logAuth(action: string, userId?: string, method?: string, success?: boolean, reason?: string): Promise<string | null>;
    /**
     * Enable or disable logging (no-op)
     */
    setEnabled(enabled: boolean): void;
    /**
     * Check if logging is enabled
     */
    isLoggingEnabled(): boolean;
    /**
     * Get the current session ID
     */
    getSessionId(): string | null;
    /**
     * Check if we're using local logging
     */
    isUsingLocalLogging(): boolean;
    /**
     * Get locally stored logs
     */
    getLocalLogs(): LogEvent[];
    /**
     * Get logs for a user (no-op)
     */
    getUserLogs(userId: string, startDate: string, endDate: string, eventTypes?: string[]): Promise<LogEvent[]>;
    /**
     * Get session logs (no-op)
     */
    getSessionLogs(sessionId: string): Promise<LogEvent[]>;
    /**
     * Apply retention policies (no-op)
     */
    applyRetentionPolicies(): Promise<void>;
}
export declare const enhancedLoggingService: EnhancedLoggingService;
export declare const loggingService: EnhancedLoggingService;
export {};
//# sourceMappingURL=logging.service.enhanced.d.ts.map