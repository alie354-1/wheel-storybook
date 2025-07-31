/**
 * Notification Service Types
 * Defines types for notification management
 */
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
export interface NotificationOptions {
    duration?: number;
    position?: NotificationPosition;
    dismissible?: boolean;
    actionText?: string;
    actionFn?: () => void;
    onDismiss?: () => void;
    id?: string;
}
export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    title?: string;
    duration: number;
    dismissible: boolean;
    position: NotificationPosition;
    timestamp: Date;
    actionText?: string;
    actionFn?: () => void;
    onDismiss?: () => void;
}
export interface NotificationStore {
    notifications: Notification[];
    add: (notification: Notification) => void;
    remove: (id: string) => void;
    clear: () => void;
}
export type NotificationListener = (notifications: Notification[]) => void;
export interface NotificationService {
    notify: (message: string, type?: NotificationType, options?: NotificationOptions) => string;
    success: (message: string, options?: NotificationOptions) => string;
    info: (message: string, options?: NotificationOptions) => string;
    warning: (message: string, options?: NotificationOptions) => string;
    error: (message: string, options?: NotificationOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
    exists: (id: string) => boolean;
    getAll: () => Notification[];
    get: (id: string) => Notification | undefined;
    subscribe: (listener: NotificationListener) => () => void;
    setDefaultOptions: (options: NotificationOptions) => void;
    getDefaultOptions: () => NotificationOptions;
}
//# sourceMappingURL=types.d.ts.map