import { PreferenceMap, PreferenceValue } from '../services/preferences';
export interface UsePreferencesReturn {
    getUserPreference: <T extends PreferenceValue>(key: string, defaultValue?: T) => T | null;
    setUserPreference: <T extends PreferenceValue>(key: string, value: T) => Promise<void>;
    getAllUserPreferences: () => PreferenceMap;
    removeUserPreference: (key: string) => Promise<void>;
    getCompanyPreference: <T extends PreferenceValue>(key: string, defaultValue?: T) => T | null;
    setCompanyPreference: <T extends PreferenceValue>(key: string, value: T) => Promise<void>;
    getAllCompanyPreferences: () => PreferenceMap;
    removeCompanyPreference: (key: string) => Promise<void>;
    getAppPreference: <T extends PreferenceValue>(key: string, defaultValue?: T) => T | null;
    setAppPreference: <T extends PreferenceValue>(key: string, value: T) => Promise<void>;
    loading: boolean;
    error: string | null;
}
export declare const usePreferences: () => UsePreferencesReturn;
//# sourceMappingURL=usePreferences.d.ts.map