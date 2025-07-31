import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    context?: WorkspaceContext;
    count?: number;
    dot?: boolean;
    maxCount?: number;
    showZero?: boolean;
    children?: ReactNode;
    className?: string;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=badge.d.ts.map