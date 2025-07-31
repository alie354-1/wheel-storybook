import { PreferenceMap, PreferenceChangeListener, PreferenceScope, PreferenceService, PreferenceValue } from './types';
export declare class PreferencesServiceImpl implements PreferenceService {
    private listeners;
    private inMemoryCache;
    /**
     * Get a preference value by key, scope, and optional scopeId
     */
    get<T extends PreferenceValue>(key: string, scope: PreferenceScope, scopeId?: string): Promise<T | null>;
    /**
     * Get all preferences for a scope and scopeId
     */
    getAll(scope: PreferenceScope, scopeId?: string): Promise<PreferenceMap>;
    /**
     * Set a preference value
     */
    set<T extends PreferenceValue>(key: string, value: T, scope: PreferenceScope, scopeId?: string): Promise<void>;
    /**
     * Set multiple preferences at once
     */
    setMultiple(preferences: PreferenceMap, scope: PreferenceScope, scopeId?: string): Promise<void>;
    /**
     * Remove a preference
     */
    remove(key: string, scope: PreferenceScope, scopeId?: string): Promise<void>;
    /**
     * Remove multiple preferences
     */
    removeMultiple(keys: string[], scope: PreferenceScope, scopeId?: string): Promise<void>;
    /**
     * Clear all preferences for a scope
     */
    clear(scope: PreferenceScope, scopeId?: string): Promise<void>;
    /**
     * Check if a preference exists
     */
    has(key: string, scope: PreferenceScope, scopeId?: string): Promise<boolean>;
    /**
     * Add a change listener
     */
    addChangeListener(listener: PreferenceChangeListener): () => void;
    /**
     * Get a user preference
     */
    getUserPreference<T extends PreferenceValue>(key: string, userId: string): Promise<T | null>;
    /**
     * Set a user preference
     */
    setUserPreference<T extends PreferenceValue>(key: string, value: T, userId: string): Promise<void>;
    /**
     * Get all user preferences
     */
    getAllUserPreferences(userId: string): Promise<PreferenceMap>;
    /**
     * Get a company preference
     */
    getCompanyPreference<T extends PreferenceValue>(key: string, companyId: string): Promise<T | null>;
    /**
     * Set a company preference
     */
    setCompanyPreference<T extends PreferenceValue>(key: string, value: T, companyId: string): Promise<void>;
    /**
     * Get all company preferences
     */
    getAllCompanyPreferences(companyId: string): Promise<PreferenceMap>;
    /**
     * Get an application preference
     */
    getApplicationPreference<T extends PreferenceValue>(key: string): Promise<T | null>;
    /**
     * Set an application preference
     */
    setApplicationPreference<T extends PreferenceValue>(key: string, value: T): Promise<void>;
    /**
     * Get all application preferences
     */
    getAllApplicationPreferences(): Promise<PreferenceMap>;
    /**
     * Validate scope ID requirement
     */
    private validateScopeId;
    /**
     * Notify listeners of preference changes
     */
    private notifyChange;
    /**
     * Get a preference from the cache
     */
    private getFromCache;
    /**
     * Get all preferences from the cache for a scope
     */
    private getAllFromCache;
    /**
     * Update the cache with a new preference value
     */
    private updateCache;
    /**
     * Remove a preference from the cache
     */
    private removeFromCache;
    /**
     * Clear all preferences from the cache for a scope
     */
    private clearCache;
}
//# sourceMappingURL=preferences.service.d.ts.map