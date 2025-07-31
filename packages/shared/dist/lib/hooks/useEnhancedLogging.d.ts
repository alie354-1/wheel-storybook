/**
 * Enhanced Logging Hook
 *
 * This hook ensures comprehensive logging of all system interactions, user behaviors,
 * and context information for model training purposes. It captures detailed data
 * about users, companies, and multi-level abstractions to enable more accurate
 * predictions and model training.
 */
export interface EnhancedLoggingOptions {
    detailLevel: 'minimal' | 'standard' | 'extensive';
    captureUserContext: boolean;
    captureCompanyContext: boolean;
    captureAbstractionLayers: boolean;
    extractFeaturesInRealtime: boolean;
    enableAutomaticFeedback: boolean;
}
export declare const useEnhancedLogging: (customOptions?: Partial<EnhancedLoggingOptions>) => {
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
//# sourceMappingURL=useEnhancedLogging.d.ts.map