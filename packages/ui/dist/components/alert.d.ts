import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type AlertVariant = 'success' | 'warning' | 'error' | 'info';
export type Urgency = 'low' | 'medium' | 'high' | 'critical';
export interface AlertProps {
    variant?: AlertVariant;
    urgency?: Urgency;
    context?: WorkspaceContext;
    title?: string;
    description?: string;
    actions?: ReactNode;
    dismissible?: boolean;
    onClose?: () => void;
    className?: string;
    children?: ReactNode;
}
export declare const Alert: import('react').ForwardRefExoticComponent<AlertProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=alert.d.ts.map