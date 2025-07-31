/**
 * Centralized Logging Hook
 *
 * This is a centralized hook that integrates both basic and enhanced logging for
 * comprehensive data collection across the application. It's designed to be the
 * primary interface for all logging operations, making it easy to capture detailed
 * information for model training.
 */
export interface CentralizedLoggingOptions {
    enableDetailedLogging?: boolean;
    captureUserContext?: boolean;
    captureCompanyContext?: boolean;
    captureSystemContext?: boolean;
    featureSets?: string[];
}
export declare const useCentralizedLogging: (options?: CentralizedLoggingOptions) => {
    logAction: (action: string, component: string, data?: any, metadata?: any) => Promise<string | undefined>;
    logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string | undefined>;
    logSystemEvent: (category: string, source: string, action: string, data?: any) => Promise<void>;
    logBusinessLogic: (action: string, process: string, data?: any, metadata?: any) => Promise<void>;
    logDataOperation: (operation: "create" | "read" | "update" | "delete" | "query", entity: string, data?: any, metadata?: any) => Promise<void>;
    recordModelFeedback: (modelId: string, input: any, output: any, feedbackType: "positive" | "negative" | "correction" | "suggestion" | "automatic" | "neutral", feedbackValue?: any) => Promise<void>;
    basic: {
        logAction: (action: string, data?: any, metadata?: any) => Promise<string>;
        logError: (error: Error | string, context?: any) => any;
        logNavigation: (fromPath: string, toPath: string, method?: "link" | "button" | "redirect" | "back" | "forward" | "manual") => Promise<void>;
        logFeatureUsage: (featureName: string, action: string, data?: any) => any;
        logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string>;
        logPageView: (pagePath: string, pageTitle: string, referrer?: string) => any;
        logPerformance: (metricName: string, value: number, unit?: string, context?: any) => Promise<void>;
        withLogging: <T extends (...args: any[]) => any>(handler: T, action: string, extraData?: Record<string, any>) => (...args: Parameters<T>) => ReturnType<T>;
    };
    enhanced: {
        logInteraction: (action: string, component: string, data?: any, metadata?: any) => Promise<string | undefined>;
        logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string | undefined>;
        logBusinessLogic: (action: string, process: string, data?: any, metadata?: any) => Promise<void>;
        logDataOperation: (operation: "create" | "read" | "update" | "delete" | "query", entity: string, data?: any, metadata?: any) => Promise<void>;
        logComponentLifecycle: (event: "mount" | "update" | "unmount", componentName?: string, props?: any) => Promise<void>;
        getInteractionId: () => string | null;
        options: {
            detailLevel: "minimal" | "standard" | "extensive";
            captureUserContext: boolean;
            captureCompanyContext: boolean;
            captureAbstractionLayers: boolean;
            extractFeaturesInRealtime: boolean;
            enableAutomaticFeedback: boolean;
        };
    };
};
//# sourceMappingURL=useCentralizedLogging.d.ts.map