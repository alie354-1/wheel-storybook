import { OwnershipNotification } from '../../types/admin.types';
export declare class OwnershipNotificationService {
    static listByUser(userId: string): Promise<OwnershipNotification[]>;
    static create(notification: Omit<OwnershipNotification, "id" | "created_at">): Promise<OwnershipNotification>;
    static markAsRead(notificationId: string): Promise<boolean>;
}
//# sourceMappingURL=ownershipNotification.service.d.ts.map