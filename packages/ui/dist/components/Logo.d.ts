/**
 * Logo Component
 *
 * A component for displaying workspace-specific logos.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type LogoVariant = 'full' | 'mark' | 'wordmark';
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface LogoProps {
    variant?: LogoVariant;
    size?: LogoSize;
    context?: WorkspaceContext;
    theme?: 'light' | 'dark';
    responsive?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare const Logo: import('react').ForwardRefExoticComponent<LogoProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Logo.d.ts.map