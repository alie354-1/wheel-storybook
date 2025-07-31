import { default as React, ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';
export interface StackProps {
    direction?: 'vertical' | 'horizontal';
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    context?: WorkspaceContext;
    align?: 'start' | 'end' | 'center' | 'stretch';
    separator?: ReactNode;
    responsive?: boolean;
    children: ReactNode;
    className?: string;
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=stack.d.ts.map