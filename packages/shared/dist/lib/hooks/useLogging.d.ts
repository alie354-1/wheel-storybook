/**
 * useLogging Hook
 *
 * A React hook that provides convenient access to logging functionality for components.
 * This hook makes it easy to log user actions, errors, navigation, and feature usage
 * while maintaining component context information.
 */
/**
 * React hook for component-level logging
 *
 * @param componentName The name of the component using the hook (for context)
 * @returns Object with logging methods scoped to the component
 */
export declare function useLogging(componentName: string): {
    logAction: (action: string, data?: any, metadata?: any) => Promise<string>;
    logError: (error: Error | string, context?: any) => any;
    logNavigation: (fromPath: string, toPath: string, method?: "link" | "button" | "redirect" | "back" | "forward" | "manual") => Promise<void>;
    logFeatureUsage: (featureName: string, action: string, data?: any) => any;
    logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string>;
    logPageView: (pagePath: string, pageTitle: string, referrer?: string) => any;
    logPerformance: (metricName: string, value: number, unit?: string, context?: any) => Promise<void>;
    withLogging: <T extends (...args: any[]) => any>(handler: T, action: string, extraData?: Record<string, any>) => (...args: Parameters<T>) => ReturnType<T>;
};
//# sourceMappingURL=useLogging.d.ts.map