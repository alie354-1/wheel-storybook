import { Notification, NotificationOptions, NotificationType } from '../services/notification';
export interface UseNotificationReturn {
    notify: (message: string, type?: NotificationType, options?: NotificationOptions) => string;
    success: (message: string, options?: NotificationOptions) => string;
    info: (message: string, options?: NotificationOptions) => string;
    warning: (message: string, options?: NotificationOptions) => string;
    error: (message: string, options?: NotificationOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
    notifications: Notification[];
}
export declare const useNotification: () => UseNotificationReturn;
//# sourceMappingURL=useNotification.d.ts.map