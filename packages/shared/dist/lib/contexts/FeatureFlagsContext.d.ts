import { default as React, ReactNode } from 'react';
import { FeatureFlags } from '../store';
export interface FeatureFlag {
    enabled: boolean;
    visible?: boolean;
    value?: any;
    [key: string]: any;
}
interface FeatureFlagsContextValue {
    flags: FeatureFlags;
    initialized: boolean;
    isEnabled: (key: string) => boolean;
    isVisible: (key: string) => boolean;
    getFlag: (key: string) => FeatureFlag | undefined;
    getAllFlags: () => Record<string, {
        enabled: boolean;
        visible: boolean;
    }>;
    reload: () => Promise<void>;
    loading: boolean;
    error: string | null;
}
interface FeatureFlagsProviderProps {
    children: ReactNode;
}
/**
 * Provider component that wraps the app to provide feature flags
 */
export declare const FeatureFlagsProvider: React.FC<FeatureFlagsProviderProps>;
/**
 * Hook to use the feature flags context
 */
export declare const useFeatureFlagsContext: () => FeatureFlagsContextValue;
/**
 * Main hook for using feature flags throughout the app.
 * Always use this instead of direct context access.
 */
export declare const useFeatureFlags: () => FeatureFlagsContextValue;
export {};
//# sourceMappingURL=FeatureFlagsContext.d.ts.map