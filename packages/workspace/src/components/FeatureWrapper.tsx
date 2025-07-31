import React from 'react';
import { useFeatureFlags } from '@wheel/layouts/providers/FeatureFlagProvider';

interface FeatureWrapperProps {
  featureName: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const FeatureWrapper: React.FC<FeatureWrapperProps> = ({ featureName, fallback = null, children }) => {
  const { isEnabled } = useFeatureFlags();
  return isEnabled(featureName) ? <>{children}</> : <>{fallback}</>;
};
