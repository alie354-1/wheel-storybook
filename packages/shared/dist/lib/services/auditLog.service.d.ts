interface AuditLogDetails {
    [key: string]: any;
}
/**
 * Logs a significant action to the audit trail.
 * Should be called from backend functions or secure frontend contexts where appropriate.
 *
 * @param action - A code or description identifying the action (e.g., 'user_login', 'updated_setting').
 * @param options - Optional parameters including userId, companyId, target details, and status.
 */
export declare const logAuditAction: (action: string, options?: {
    userId?: string | null;
    companyId?: string | null;
    targetType?: string | null;
    targetId?: string | null;
    details?: AuditLogDetails | null;
    status?: "success" | "failure" | null;
}) => Promise<void>;
export {};
//# sourceMappingURL=auditLog.service.d.ts.map