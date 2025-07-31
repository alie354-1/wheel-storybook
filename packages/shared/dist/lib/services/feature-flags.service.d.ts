import { FeatureFlags } from '../store';
type FeatureFlagSetting = {
    enabled: boolean;
    visible?: boolean;
    value?: any;
    description?: string;
};
/**
 * Feature Flags Service
 * This service is responsible for loading and saving feature flags
 */
declare class FeatureFlagsService {
    private inMemoryFlags;
    constructor();
    /**
     * Load feature flags from database with fallback to defaults
     * @returns A promise that resolves when flags are loaded
     */
    loadFeatureFlags(): Promise<void>;
    /**
     * Get all feature flags from memory
     */
    getAllFlags(): Record<string, {
        enabled: boolean;
        visible: boolean;
    }>;
    /**
     * Check if a feature is enabled
     */
    isEnabled(key: string): boolean;
    /**
     * Check if a feature is visible (simplified, assumes visible if enabled)
     */
    isVisible(key: string): boolean;
    /**
     * Get a specific feature flag object
     */
    getFlag(key: string): FeatureFlagSetting | undefined;
    /**
     * Alias for getFlag to match UI expectations
     */
    getFeatureFlag(key: string): FeatureFlagSetting | undefined;
    /**
     * Reload feature flags
     */
    reload(): Promise<void>;
    /**
     * Save feature flags to memory and persist to database
     * @param flags The feature flags to save
     * @returns A promise that resolves when the operation is complete
     */
    saveFeatureFlags(flags: Partial<FeatureFlags>): Promise<void>;
    /**
     * Reset the LLM service to use the latest feature flags
     */
    resetLLMService(): void;
    /**
     * Stub for user-specific feature flag overrides (not implemented)
     */
    loadUserOverrides(userId: string): Promise<void>;
    /**
     * Set a single feature flag's enabled/visible state and update the store and database
     */
    setFeatureFlag(key: string, updates: {
        enabled?: boolean;
        visible?: boolean;
    }): Promise<void>;
    /**
     * Return all feature flags (raw in-memory object)
     */
    getFeatureFlags(): Record<string, any>;
    /**
     * Stub for grouped feature flag definitions (not implemented)
     */
    getGroupedDefinitions(): any[];
    /**
     * Return only enabled features/groups for admin UI filtering
     */
    getEnabledGroupedDefinitions(): any[];
}
export declare const featureFlagsService: FeatureFlagsService;
export {};
//# sourceMappingURL=feature-flags.service.d.ts.map