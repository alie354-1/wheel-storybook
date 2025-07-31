/**
 * Spinner Component
 *
 * A component for displaying a loading spinner with workspace context awareness.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type SpinnerSize = 'sm' | 'md' | 'lg';
export interface SpinnerProps {
    size?: SpinnerSize;
    context?: WorkspaceContext;
    className?: string;
}
export declare const Spinner: import('react').ForwardRefExoticComponent<SpinnerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=spinner.d.ts.map