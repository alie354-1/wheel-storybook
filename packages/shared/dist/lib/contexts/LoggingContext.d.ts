import { default as React, ReactNode } from 'react';
export interface LoggingContextValue {
    logInfo: (message: string, metadata?: Record<string, any>) => void;
    logWarn: (message: string, metadata?: Record<string, any>) => void;
    logError: (error: Error | string, metadata?: Record<string, any>) => void;
    clearErrors: () => void;
    errors: Array<{
        id: string;
        error: Error | string;
        timestamp: Date;
        metadata?: Record<string, any>;
    }>;
}
declare const LoggingContext: React.Context<LoggingContextValue | undefined>;
export interface LoggingProviderProps {
    children: ReactNode;
    captureGlobalErrors?: boolean;
    displayErrors?: boolean;
}
/**
 * Provider component that wraps the app to provide logging methods
 */
export declare const LoggingProvider: React.FC<LoggingProviderProps>;
/**
 * Hook to use the logging context
 */
export declare const useLoggingContext: () => LoggingContextValue;
/**
 * Main hook for using logging throughout the app.
 * Always use this instead of direct context access.
 */
export declare const useLogging: () => LoggingContextValue;
/**
 * Error boundary component that uses the logging context
 */
export declare class LoggingErrorBoundary extends React.Component<{
    children: ReactNode;
    fallback?: ReactNode;
}, {
    hasError: boolean;
    error: Error | null;
}> {
    static contextType: React.Context<LoggingContextValue | undefined>;
    context: React.ContextType<typeof LoggingContext>;
    state: {
        hasError: boolean;
        error: Error | null;
    };
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error | null;
    };
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
//# sourceMappingURL=LoggingContext.d.ts.map