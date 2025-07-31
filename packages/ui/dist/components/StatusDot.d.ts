/**
 * StatusDot Component
 *
 * A component for displaying a user's or system's status with a colored dot.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type Status = 'online' | 'offline' | 'busy' | 'away' | 'inactive';
export type StatusDotSize = 'sm' | 'md' | 'lg';
export interface StatusDotProps {
    status?: Status;
    size?: StatusDotSize;
    context?: WorkspaceContext;
    pulse?: boolean;
    label?: string;
    className?: string;
}
export declare const StatusDot: import('react').ForwardRefExoticComponent<StatusDotProps & import('react').RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=StatusDot.d.ts.map