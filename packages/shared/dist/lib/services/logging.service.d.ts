/**
 * Logging Service Interface
 */
export interface LoggingService {
    trace: (message: string, context?: any) => Promise<void>;
    debug: (message: string, context?: any) => Promise<void>;
    info: (message: string, context?: any) => Promise<void>;
    warn: (message: string, context?: any) => Promise<void>;
    error: (message: string, error?: Error, context?: any) => Promise<void>;
    fatal: (message: string, error?: Error, context?: any) => Promise<void>;
    logEvent: (eventType: string | any, data?: any) => Promise<void>;
    startSession: (userId?: string, companyId?: string) => Promise<string>;
    endSession: (sessionId?: string) => Promise<void>;
    logNavigation: (path: string, referrer?: string) => Promise<void>;
    logInteraction: (elementId: string, action: string, data?: any) => Promise<void>;
    logPerformance: (metric: string, value: number, context?: any) => Promise<void>;
    getSessionId: () => string | null;
    logSystemEvent: (category: string, source: string, action: string, data?: any) => Promise<void>;
    logUserAction: (action: string, component: string, data?: any, metadata?: any) => Promise<string>;
    logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string>;
}
/**
 * Supabase-backed implementation of Logging Service
 */
declare class SupabaseLoggingService implements LoggingService {
    private sessionId;
    constructor();
    private log;
    trace(message: string, context?: any): Promise<void>;
    debug(message: string, context?: any): Promise<void>;
    info(message: string, context?: any): Promise<void>;
    warn(message: string, context?: any): Promise<void>;
    error(message: string, error?: Error, context?: any): Promise<void>;
    fatal(message: string, error?: Error, context?: any): Promise<void>;
    logEvent(eventType: string | any, data?: any): Promise<void>;
    startSession(userId?: string, companyId?: string): Promise<string>;
    endSession(sessionId?: string): Promise<void>;
    logNavigation(path: string, referrer?: string): Promise<void>;
    logInteraction(elementId: string, action: string, data?: any): Promise<void>;
    logPerformance(metric: string, value: number, context?: any): Promise<void>;
    getSessionId(): string | null;
    logSystemEvent(category: string, source: string, action: string, data?: any): Promise<void>;
    logUserAction(action: string, component: string, data?: any, metadata?: any): Promise<string>;
    logAIInteraction(action: string, data?: any, metadata?: any): Promise<string>;
}
export declare const loggingService: SupabaseLoggingService;
export {};
//# sourceMappingURL=logging.service.d.ts.map