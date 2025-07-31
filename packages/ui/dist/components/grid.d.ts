import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
export interface GridProps {
    columns?: number | string;
    rows?: number | string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    context?: WorkspaceContext;
    responsive?: boolean;
    autoFit?: boolean;
    autoFill?: boolean;
    templateAreas?: string;
    children: ReactNode;
    className?: string;
}
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=grid.d.ts.map