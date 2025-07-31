interface UserRoleHook {
    isSystemAdmin: boolean;
    isLoading: boolean;
    error: Error | null;
}
/**
 * Hook to check user roles and permissions
 *
 * Provides information about the current user's role in the system,
 * such as whether they are a system administrator.
 */
export declare const useUserRole: () => UserRoleHook;
export {};
//# sourceMappingURL=useUserRole.d.ts.map