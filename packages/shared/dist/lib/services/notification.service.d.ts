import { Notification } from '../types/journey-unified.types';
/**
 * Notification Service
 *
 * Provides methods for managing the notification system.
 * Handles sending, delivering, and querying notifications.
 */
export declare class NotificationService {
    /**
     * Send a notification to a user (in-app, email, Slack)
     */
    sendNotification(userId: string, companyId: string, eventType: string, title: string, body: string, resourceType?: string, resourceId?: string, actionUrl?: string, priority?: 'low' | 'normal' | 'high' | 'urgent', channels?: string[]): Promise<Notification | null>;
    /**
     * Send a personalized nudge notification to a user.
     */
    sendNudge(userId: string, domainId: string, title: string, message: string, priority?: 'low' | 'normal' | 'high'): Promise<any>;
    /**
     * Send an email notification (stub - implement with SMTP or email API)
     */
    sendEmailNotification(userId: string, subject: string, body: string): Promise<void>;
    /**
     * Send a Slack notification (stub - implement with Slack webhook or API)
     */
    sendSlackNotification(userId: string, title: string, body: string): Promise<void>;
    /**
     * Get user notifications with optional filtering
     */
    getUserNotifications(userId: string, options?: {
        isRead?: boolean;
        eventTypes?: string[];
        startDate?: string;
        endDate?: string;
        priority?: 'low' | 'normal' | 'high' | 'urgent';
        limit?: number;
        offset?: number;
    }): Promise<Notification[]>;
    /**
     * Get unread notification count for a user
     */
    getUnreadCount(userId: string): Promise<number>;
    /**
     * Mark a single notification as read
     */
    markAsRead(notificationId: string, userId: string): Promise<boolean>;
    /**
     * Mark multiple notifications as read
     */
    markMultipleAsRead(notificationIds: string[], userId: string): Promise<number>;
    /**
     * Mark all notifications as read for a user
     */
    markAllAsRead(userId: string): Promise<number>;
    /**
     * Get user notification preferences
     */
    getUserNotificationPreferences(userId: string, companyId: string): Promise<any[]>;
    /**
     * Update notification preferences for a specific event type
     */
    updateNotificationPreference(userId: string, companyId: string, eventType: string, updates: {
        isEnabled?: boolean;
        channels?: string[];
        batchFrequency?: 'instant' | 'hourly' | 'daily' | 'weekly';
        quietHoursStart?: string;
        quietHoursEnd?: string;
    }): Promise<boolean>;
    /**
     * Create default notification preferences for a user
     */
    createDefaultNotificationPreferences(userId: string, companyId: string): Promise<boolean>;
    /**
     * Get pending notification batches that are ready to be delivered
     * This would typically be called by a scheduled job
     */
    getPendingNotificationBatches(batchType?: 'hourly' | 'daily' | 'weekly', limit?: number): Promise<any[]>;
    /**
     * Mark a notification batch as delivered
     */
    markBatchDelivered(batchId: string): Promise<boolean>;
    /**
     * Get smart alerts for a company
     */
    getSmartAlerts(companyId: string): Promise<any[]>;
    /**
     * Update the last triggered time for a smart alert
     */
    updateSmartAlertLastTriggered(alertId: string): Promise<boolean>;
}
export declare const notificationService: NotificationService;
//# sourceMappingURL=notification.service.d.ts.map