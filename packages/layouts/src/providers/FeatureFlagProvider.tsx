import React, { createContext, useContext, ReactNode } from 'react';

interface FeatureFlagContextType {
  isEnabled: (flag: string) => boolean;
}

const FeatureFlagContext = createContext<FeatureFlagContextType>({
  isEnabled: () => true, // Default: all features enabled
});

export const useFeatureFlag = () => useContext(FeatureFlagContext);

interface FeatureFlagProviderProps {
  children: ReactNode;
  flags?: Record<string, boolean>;
}

export const FeatureFlagProvider: React.FC<FeatureFlagProviderProps> = ({ 
  children, 
  flags = {} 
}) => {
  const isEnabled = (flag: string): boolean => {
    return flags[flag] ?? true; // Default to enabled
  };

  return (
    <FeatureFlagContext.Provider value={{ isEnabled }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FeatureFlagProvider;
export const useFeatureFlags = useFeatureFlag;
