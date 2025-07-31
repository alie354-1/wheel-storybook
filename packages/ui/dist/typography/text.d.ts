import { ElementType, ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';
export interface TextProps {
    as?: ElementType;
    variant?: 'body' | 'caption' | 'overline' | 'subtitle1' | 'subtitle2';
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    context?: WorkspaceContext;
    truncate?: boolean;
    align?: 'left' | 'center' | 'right' | 'justify';
    responsive?: boolean;
    children: ReactNode;
    className?: string;
}
export declare const Text: import('react').ForwardRefExoticComponent<TextProps & import('react').RefAttributes<HTMLElement>>;
//# sourceMappingURL=text.d.ts.map