/**
 * Preferences Service Types
 * Defines types for user, company, and application preferences management
 */
export type PreferenceScope = 'user' | 'company' | 'application';
export type PreferenceValue = string | number | boolean | object | null;
export interface PreferenceItem {
    key: string;
    value: PreferenceValue;
    scope: PreferenceScope;
    scopeId?: string;
    updatedAt: Date;
}
export interface PreferenceMap {
    [key: string]: PreferenceValue;
}
export interface ScopedPreferencesMap {
    [scope: string]: {
        [scopeId: string]: PreferenceMap;
    };
}
export interface PreferenceChangeEvent {
    key: string;
    oldValue: PreferenceValue;
    newValue: PreferenceValue;
    scope: PreferenceScope;
    scopeId?: string;
}
export type PreferenceChangeListener = (event: PreferenceChangeEvent) => void;
export interface PreferenceService {
    get: <T extends PreferenceValue>(key: string, scope: PreferenceScope, scopeId?: string) => Promise<T | null>;
    getAll: (scope: PreferenceScope, scopeId?: string) => Promise<PreferenceMap>;
    set: <T extends PreferenceValue>(key: string, value: T, scope: PreferenceScope, scopeId?: string) => Promise<void>;
    setMultiple: (preferences: PreferenceMap, scope: PreferenceScope, scopeId?: string) => Promise<void>;
    remove: (key: string, scope: PreferenceScope, scopeId?: string) => Promise<void>;
    removeMultiple: (keys: string[], scope: PreferenceScope, scopeId?: string) => Promise<void>;
    clear: (scope: PreferenceScope, scopeId?: string) => Promise<void>;
    has: (key: string, scope: PreferenceScope, scopeId?: string) => Promise<boolean>;
    addChangeListener: (listener: PreferenceChangeListener) => () => void;
    getUserPreference: <T extends PreferenceValue>(key: string, userId: string) => Promise<T | null>;
    setUserPreference: <T extends PreferenceValue>(key: string, value: T, userId: string) => Promise<void>;
    getAllUserPreferences: (userId: string) => Promise<PreferenceMap>;
    getCompanyPreference: <T extends PreferenceValue>(key: string, companyId: string) => Promise<T | null>;
    setCompanyPreference: <T extends PreferenceValue>(key: string, value: T, companyId: string) => Promise<void>;
    getAllCompanyPreferences: (companyId: string) => Promise<PreferenceMap>;
    getApplicationPreference: <T extends PreferenceValue>(key: string) => Promise<T | null>;
    setApplicationPreference: <T extends PreferenceValue>(key: string, value: T) => Promise<void>;
    getAllApplicationPreferences: () => Promise<PreferenceMap>;
}
//# sourceMappingURL=types.d.ts.map