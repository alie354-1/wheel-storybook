import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type HeadingWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';
export interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    size?: HeadingSize;
    weight?: HeadingWeight;
    color?: HeadingColor;
    context?: WorkspaceContext;
    truncate?: boolean;
    align?: 'left' | 'center' | 'right' | 'justify';
    responsive?: boolean;
    children: ReactNode;
    className?: string;
}
export declare const Heading: import('react').ForwardRefExoticComponent<HeadingProps & import('react').RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=heading.d.ts.map