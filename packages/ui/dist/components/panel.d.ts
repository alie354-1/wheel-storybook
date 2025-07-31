import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
export interface PanelProps {
    variant?: 'elevated' | 'outlined' | 'filled';
    context?: WorkspaceContext;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    header?: ReactNode;
    actions?: ReactNode;
    resizable?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    onResize?: (size: number) => void;
    children: ReactNode;
    className?: string;
}
export declare const Panel: import('react').ForwardRefExoticComponent<PanelProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=panel.d.ts.map