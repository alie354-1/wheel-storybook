import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';
export interface FlexProps {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    context?: WorkspaceContext;
    responsive?: boolean;
    children: ReactNode;
    className?: string;
}
export declare const Flex: import('react').ForwardRefExoticComponent<FlexProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=flex.d.ts.map