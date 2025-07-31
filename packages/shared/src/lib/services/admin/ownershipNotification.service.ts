import { db } from "../db";
import { OwnershipNotification } from "../../types/admin.types";

export class OwnershipNotificationService {
  static async listByUser(userId: string): Promise<OwnershipNotification[]> {
    return db("ownership_notifications")
      .select("*")
      .where({ user_id: userId })
      .orderBy("created_at", "desc");
  }

  static async create(notification: Omit<OwnershipNotification, "id" | "created_at">): Promise<OwnershipNotification> {
    const [record] = await db("ownership_notifications")
      .insert({
        ...notification,
        created_at: new Date()
      })
      .returning("*");

    return record;
  }

  static async markAsRead(notificationId: string): Promise<boolean> {
    const updated = await db("ownership_notifications")
      .where({ id: notificationId })
      .update({ read_at: new Date() });

    return updated > 0;
  }
}
