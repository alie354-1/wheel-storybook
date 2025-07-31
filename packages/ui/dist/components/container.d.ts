import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export interface ResponsiveConfig {
    sm?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
    md?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
    lg?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
    xl?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
}
export interface ContainerProps {
    size?: ContainerSize;
    context?: WorkspaceContext;
    responsive?: boolean | ResponsiveConfig;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    fluid?: boolean;
    centerContent?: boolean;
    children: ReactNode;
    className?: string;
}
export declare const Container: import('react').ForwardRefExoticComponent<ContainerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=container.d.ts.map