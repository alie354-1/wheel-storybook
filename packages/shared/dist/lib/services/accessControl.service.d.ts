type Permission = 'read:journey' | 'write:journey' | 'admin:company' | 'manage:billing' | 'moderate:tools';
type Role = 'admin' | 'member' | 'viewer' | 'billing_manager';
/**
 * Service for managing role-based access control (RBAC) and permissions.
 */
export declare const accessControlService: {
    /**
     * Checks if a user has a specific permission within a company context.
     *
     * @param userId - The ID of the user.
     * @param companyId - The ID of the company context.
     * @param requiredPermission - The permission to check for.
     * @returns A promise resolving to true if the user has the permission, false otherwise.
     */
    hasPermission(userId: string, companyId: string, requiredPermission: Permission): Promise<boolean>;
    /**
     * Fetches the role of a user within a specific company.
     *
     * @param userId - The ID of the user.
     * @param companyId - The ID of the company.
     * @returns A promise resolving to the user's role or null if not found/error.
     */
    getUserRole(userId: string, companyId: string): Promise<Role | null>;
    /**
     * Fetches the permissions associated with a specific role.
     * This might query a dedicated 'role_permissions' table or use a predefined mapping.
     *
     * @param role - The role to get permissions for.
     * @returns A promise resolving to an array of permissions or null if error/not found.
     */
    getRolePermissions(role: Role): Promise<Permission[] | null>;
    /**
     * Assigns a role to a user within a company.
     * Requires appropriate admin privileges to execute.
     *
     * @param assigningUserId - The ID of the user performing the action.
     * @param targetUserId - The ID of the user whose role is being assigned.
     * @param companyId - The ID of the company.
     * @param role - The role to assign.
     * @returns A promise resolving to true on success, false otherwise.
     */
    assignRole(assigningUserId: string, targetUserId: string, companyId: string, role: Role): Promise<boolean>;
};
export {};
//# sourceMappingURL=accessControl.service.d.ts.map