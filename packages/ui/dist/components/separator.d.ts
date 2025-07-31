import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
export interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical';
    context?: WorkspaceContext;
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'solid' | 'dashed' | 'dotted';
    text?: string;
    icon?: ReactNode;
    decorative?: boolean;
    className?: string;
}
export declare const Separator: import('react').ForwardRefExoticComponent<SeparatorProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=separator.d.ts.map