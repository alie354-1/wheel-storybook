import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';
export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export interface CardProps {
    variant?: CardVariant;
    context?: WorkspaceContext;
    elevation?: 0 | 1 | 2 | 3 | 4 | 5;
    interactive?: boolean;
    padding?: CardPadding;
    radius?: CardRadius;
    header?: ReactNode;
    footer?: ReactNode;
    onClick?: () => void;
    onHover?: () => void;
    children: ReactNode;
    className?: string;
}
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
declare const CardHeader: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & import('react').RefAttributes<HTMLDivElement>>;
declare const CardTitle: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLHeadingElement> & import('react').RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLParagraphElement> & import('react').RefAttributes<HTMLParagraphElement>>;
declare const CardContent: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & import('react').RefAttributes<HTMLDivElement>>;
declare const CardFooter: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & import('react').RefAttributes<HTMLDivElement>>;
export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
//# sourceMappingURL=card.d.ts.map