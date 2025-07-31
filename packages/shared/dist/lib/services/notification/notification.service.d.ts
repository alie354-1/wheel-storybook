import { Notification, NotificationListener, NotificationOptions, NotificationService, NotificationType } from './types';
export declare class NotificationServiceImpl implements NotificationService {
    private notifications;
    private listeners;
    private defaultOptions;
    /**
     * Creates a new notification
     */
    notify(message: string, type?: NotificationType, options?: NotificationOptions): string;
    /**
     * Convenience method for success notifications
     */
    success(message: string, options?: NotificationOptions): string;
    /**
     * Convenience method for info notifications
     */
    info(message: string, options?: NotificationOptions): string;
    /**
     * Convenience method for warning notifications
     */
    warning(message: string, options?: NotificationOptions): string;
    /**
     * Convenience method for error notifications
     */
    error(message: string, options?: NotificationOptions): string;
    /**
     * Dismiss notification by ID
     */
    dismiss(id: string): void;
    /**
     * Clear all notifications
     */
    clear(): void;
    /**
     * Check if notification exists
     */
    exists(id: string): boolean;
    /**
     * Get all notifications
     */
    getAll(): Notification[];
    /**
     * Get notification by ID
     */
    get(id: string): Notification | undefined;
    /**
     * Subscribe to notification changes
     */
    subscribe(listener: NotificationListener): () => void;
    /**
     * Set default options for notifications
     */
    setDefaultOptions(options: NotificationOptions): void;
    /**
     * Get default options
     */
    getDefaultOptions(): NotificationOptions;
    /**
     * Notify all listeners of changes
     */
    private notifyListeners;
}
//# sourceMappingURL=notification.service.d.ts.map