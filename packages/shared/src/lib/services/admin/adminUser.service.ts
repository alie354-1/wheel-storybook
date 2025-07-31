import { db } from "../db";
import { AdminUser } from "../../types/admin.types";

export class AdminUserService {
  static async list(): Promise<AdminUser[]> {
    return db("admin_users")
      .select("*")
      .orderBy("created_at", "desc");
  }

  static async getByUserId(userId: string): Promise<AdminUser | null> {
    return db("admin_users")
      .where({ user_id: userId })
      .first();
  }

  static async create(data: Partial<AdminUser>, createdBy: string): Promise<AdminUser> {
    const [admin] = await db("admin_users")
      .insert({
        ...data,
        is_active: true,
        created_by: createdBy
      })
      .returning("*");

    return admin;
  }

  static async update(userId: string, updates: Partial<AdminUser>, updatedBy: string): Promise<AdminUser> {
    const [admin] = await db("admin_users")
      .where({ user_id: userId })
      .update({
        ...updates,
        updated_by: updatedBy,
        updated_at: new Date()
      })
      .returning("*");

    return admin;
  }

  static async deactivate(userId: string, updatedBy: string): Promise<AdminUser> {
    const [admin] = await db("admin_users")
      .where({ user_id: userId })
      .update({
        is_active: false,
        updated_by: updatedBy,
        updated_at: new Date()
      })
      .returning("*");

    return admin;
  }
}
