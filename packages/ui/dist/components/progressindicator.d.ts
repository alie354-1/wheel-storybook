/**
 * ProgressIndicator Component
 *
 * A component for displaying a progress indicator.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ProgressIndicatorSize = 'sm' | 'md' | 'lg';
export interface ProgressIndicatorProps {
    value?: number;
    size?: ProgressIndicatorSize;
    context?: WorkspaceContext;
    className?: string;
}
export declare const ProgressIndicator: import('react').ForwardRefExoticComponent<ProgressIndicatorProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=progressindicator.d.ts.map