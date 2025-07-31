import { LogEntry, LoggingConfig, LoggingService } from './types';
/**
 * Enhanced Logging Service Implementation
 */
export declare class EnhancedLoggingService implements LoggingService {
    private config;
    private globalContext;
    private userId;
    private companyId;
    private sessionId;
    private buffer;
    private flushTimerId;
    private memoryLogs;
    private isEnabled;
    constructor(config?: Partial<LoggingConfig>);
    /**
     * Configure the logging service
     */
    configure(config: Partial<LoggingConfig>): void;
    /**
     * Setup flush interval for buffered logging
     */
    private setupFlushInterval;
    /**
     * Set global context for all logs
     */
    setGlobalContext(context: Record<string, any>): void;
    /**
     * Set user information for logs
     */
    setUser(userId: string, companyId?: string): void;
    /**
     * Create a log entry
     */
    private createLogEntry;
    /**
     * Format a log entry based on configuration
     */
    private formatLogEntry;
    /**
     * Log entry to appropriate destinations
     */
    private logToDestinations;
    /**
     * Log to console with appropriate level
     */
    private logToConsole;
    /**
     * Get numeric value for log level comparison
     */
    private getLevelValue;
    /**
     * Flush logs to database
     */
    flush(): Promise<void>;
    /**
     * Start a session
     */
    startSession(userId?: string, companyId?: string): Promise<string>;
    /**
     * End the current session
     */
    endSession(): Promise<void>;
    /**
     * Log at TRACE level
     */
    trace(message: string, context?: Record<string, any>): void;
    /**
     * Log at DEBUG level
     */
    debug(message: string, context?: Record<string, any>): void;
    /**
     * Log at INFO level
     */
    info(message: string, context?: Record<string, any>): void;
    /**
     * Log at WARN level
     */
    warn(message: string, context?: Record<string, any>): void;
    /**
     * Log at ERROR level
     */
    error(message: string, error?: Error | any, context?: Record<string, any>): void;
    /**
     * Log at FATAL level
     */
    fatal(message: string, error?: Error | any, context?: Record<string, any>): void;
    /**
     * Enable logging
     */
    enable(): void;
    /**
     * Disable logging
     */
    disable(): void;
    /**
     * Get logs (for in-memory logging)
     */
    getLogs(filter?: Partial<LogEntry>): LogEntry[];
    /**
     * Clear logs (for in-memory logging)
     */
    clearLogs(): void;
    /**
     * Get the current session ID
     */
    getSessionId(): string | null;
    /**
     * Log event (compatibility with original logging service)
     */
    logEvent(eventType: string | any, data?: any): Promise<void>;
    /**
     * Log navigation (compatibility with original logging service)
     */
    logNavigation(path: string, referrer?: string): Promise<void>;
    /**
     * Log interaction (compatibility with original logging service)
     */
    logInteraction(elementId: string, action: string, data?: any): Promise<void>;
    /**
     * Log performance (compatibility with original logging service)
     */
    logPerformance(metric: string, value: number, context?: any): Promise<void>;
    /**
     * Log system event (compatibility with enhanced logging service)
     */
    logSystemEvent(category: string, source: string, action: string, data?: any): Promise<void>;
    /**
     * Log user action (compatibility with enhanced logging service)
     */
    logUserAction(action: string, component: string, data?: any, metadata?: any): Promise<string>;
    /**
     * Log AI interaction (compatibility with enhanced logging service)
     */
    logAIInteraction(action: string, data?: any, metadata?: any): Promise<string>;
}
export declare const loggingServiceInstance: EnhancedLoggingService;
//# sourceMappingURL=logging.service.d.ts.map