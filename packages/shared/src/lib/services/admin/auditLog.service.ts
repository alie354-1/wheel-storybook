import { db } from "../db";
import { AuditLog } from "../../types/admin.types";

export class AuditLogService {
  static async list(filters: {
    user_id?: string;
    entity_type?: string;
    entity_id?: string;
    limit?: number;
    offset?: number;
  }): Promise<AuditLog[]> {
    const query = db("admin_audit_log").select("*").orderBy("created_at", "desc");

    if (filters.user_id) {
      query.where("user_id", filters.user_id);
    }
    if (filters.entity_type) {
      query.where("entity_type", filters.entity_type);
    }
    if (filters.entity_id) {
      query.where("entity_id", filters.entity_id);
    }
    if (filters.limit) {
      query.limit(filters.limit);
    }
    if (filters.offset) {
      query.offset(filters.offset);
    }

    return query;
  }

  static async log(entry: Omit<AuditLog, "id" | "created_at">): Promise<void> {
    await db("admin_audit_log").insert(entry);
  }
}
