export interface AppSetting {
    key: string;
    value: any;
    description?: string;
    scope: 'global' | 'company';
    company_id?: string | null;
    created_at: string;
    updated_at: string;
}
/**
 * Service for managing application settings.
 */
export declare const appSettingsService: {
    /**
     * Fetches a specific application setting.
     * Checks for company-specific setting first, then falls back to global if applicable.
     *
     * @param key - The unique key of the setting.
     * @param companyId - Optional company ID for company-scoped settings.
     * @returns A promise resolving to the setting value or null if not found/error.
     */
    getSetting(key: string, companyId?: string): Promise<any | null>;
    /**
     * Fetches all settings, optionally filtered by scope and/or company.
     *
     * @param scope - Optional filter by scope ('global' or 'company').
     * @param companyId - Optional company ID (required if scope is 'company').
     * @returns A promise resolving to an array of settings or null if error.
     */
    getAllSettings(scope?: "global" | "company", companyId?: string): Promise<AppSetting[] | null>;
    /**
     * Updates or creates an application setting. Requires admin privileges.
     *
     * @param settingData - The setting data to upsert.
     * @param adminUserId - The ID of the admin user performing the action (for permission check).
     * @returns A promise resolving to the updated/created setting or null if error/permission denied.
     */
    upsertSetting(settingData: Omit<AppSetting, "created_at" | "updated_at">, adminUserId: string): Promise<AppSetting | null>;
    /**
     * Deletes an application setting. Requires admin privileges.
     * Note: Be cautious deleting global settings.
     *
     * @param key - The key of the setting to delete.
     * @param scope - The scope of the setting.
     * @param companyId - The company ID if scope is 'company'.
     * @param adminUserId - The ID of the admin user performing the action.
     * @returns A promise resolving to true on success, false otherwise.
     */
    deleteSetting(key: string, scope: "global" | "company", adminUserId: string, companyId?: string): Promise<boolean>;
};
//# sourceMappingURL=appSettings.service.d.ts.map