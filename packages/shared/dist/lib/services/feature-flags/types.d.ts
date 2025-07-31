/**
 * Feature Flags Types - Shared type definitions for the feature flags system
 */
/**
 * Definition of a single feature flag
 */
export interface FeatureFlag {
    enabled: boolean;
    visible: boolean;
    description?: string;
    override?: boolean;
}
/**
 * Complete map of all feature flags
 */
export interface FeatureFlags {
    [key: string]: FeatureFlag;
}
/**
 * Feature flag categories for organization
 */
export declare enum FeatureFlagCategory {
    NAVIGATION = "navigation",
    COMPONENTS = "components",
    IDEA_PLAYGROUND = "ideaPlayground",
    INTEGRATION = "integration",
    SYSTEM = "system",
    EXPERIMENTAL = "experimental"
}
/**
 * Feature flag definition with metadata
 */
export interface FeatureFlagDefinition {
    key: string;
    name: string;
    description: string;
    category: FeatureFlagCategory;
    defaultValue: FeatureFlag;
}
/**
 * Definition of a feature flag group for UI organization
 */
export interface FeatureFlagGroup {
    name: string;
    description: string;
    category: FeatureFlagCategory;
    features: FeatureFlagDefinition[];
}
/**
 * Feature flag override configuration for users or companies
 */
export interface FeatureFlagOverride {
    id: string;
    type: 'user' | 'company';
    flags: Partial<FeatureFlags>;
    createdAt: string;
    updatedAt: string;
}
/**
 * Interface for the feature flags service
 */
export interface IFeatureFlagsService {
    loadFeatureFlags(): Promise<FeatureFlags>;
    saveFeatureFlags(flags: Partial<FeatureFlags>): Promise<void>;
    getFeatureFlags(): FeatureFlags;
    getFeatureFlag(key: string): FeatureFlag | undefined;
    setFeatureFlag(key: string, value: Partial<FeatureFlag>): void;
    resetToDefaults(): Promise<void>;
    loadUserOverrides(userId: string): Promise<void>;
    loadCompanyOverrides(companyId: string): Promise<void>;
    saveUserOverride(userId: string, flags: Partial<FeatureFlags>): Promise<void>;
    saveCompanyOverride(companyId: string, flags: Partial<FeatureFlags>): Promise<void>;
    clearOverrides(): void;
    isEnabled(key: string): boolean;
    isVisible(key: string): boolean;
    getAllDefinitions(): FeatureFlagDefinition[];
    getGroupedDefinitions(): FeatureFlagGroup[];
}
//# sourceMappingURL=types.d.ts.map