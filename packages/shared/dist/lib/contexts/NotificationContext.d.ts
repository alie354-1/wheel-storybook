import { default as React, ReactNode } from 'react';
import { Notification, NotificationOptions, NotificationType } from '../services/notification';
export interface NotificationContextValue {
    notifications: Notification[];
    notify: (message: string, type?: NotificationType, options?: NotificationOptions) => string;
    success: (message: string, options?: NotificationOptions) => string;
    info: (message: string, options?: NotificationOptions) => string;
    warning: (message: string, options?: NotificationOptions) => string;
    error: (message: string, options?: NotificationOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
}
declare const NotificationContext: React.Context<NotificationContextValue | undefined>;
export interface NotificationProviderProps {
    children: ReactNode;
}
/**
 * Provider component that wraps the app to provide notification methods
 */
export declare const NotificationProvider: React.FC<NotificationProviderProps>;
export { NotificationContext };
//# sourceMappingURL=NotificationContext.d.ts.map