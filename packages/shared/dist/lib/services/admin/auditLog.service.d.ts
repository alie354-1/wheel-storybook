import { AuditLog } from '../../types/admin.types';
export declare class AuditLogService {
    static list(filters: {
        user_id?: string;
        entity_type?: string;
        entity_id?: string;
        limit?: number;
        offset?: number;
    }): Promise<AuditLog[]>;
    static log(entry: Omit<AuditLog, "id" | "created_at">): Promise<void>;
}
//# sourceMappingURL=auditLog.service.d.ts.map