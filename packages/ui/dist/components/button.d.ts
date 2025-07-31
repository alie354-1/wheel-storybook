import { default as React } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'gradient-midnight' | 'gradient-amber' | 'ghost' | 'outline' | 'link' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type IconPosition = 'left' | 'right';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    context?: WorkspaceContext;
    isLoading?: boolean;
    loadingText?: string;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    theme?: any;
}
export declare function Button({ children, className, variant, size, context, isLoading, loadingText, icon, iconPosition, leftIcon, // Deprecated but maintained for backward compatibility
rightIcon, // Deprecated but maintained for backward compatibility
fullWidth, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedBy, theme, // Deprecated but maintained for backward compatibility
...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map