import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { Theme, ThemeMode, LegacyTheme } from './types';
import { defaultTheme } from './defaults';
import { themeToCSS, getEffectiveTheme, /* mergeThemes */ } from './utils';

// Context for managing the theme
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  legacyTheme: LegacyTheme; // For backward compatibility
  applyTheme: () => void;
  resetTheme: () => void;
  isLoading: boolean;
  error: string | null;
}

// Convert new theme to legacy format for backward compatibility
function themeToLegacy(theme: Theme): LegacyTheme {
  return {
    primaryColor: theme.colors.primary[500],
    secondaryColor: theme.colors.secondary[500],
    backgroundColor: theme.semanticColors.bgPrimary,
    textColor: theme.semanticColors.textPrimary,
  };
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
  mode: 'light',
  setMode: () => {},
  legacyTheme: themeToLegacy(defaultTheme),
  applyTheme: () => {},
  resetTheme: () => {},
  isLoading: false,
  error: null,
});

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component for the theme
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mode, setModeState] = useState<ThemeMode>('light');
  const [isLoading, /* setIsLoading */] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveTheme = getEffectiveTheme(theme, mode);
  const legacyTheme = themeToLegacy(effectiveTheme);

  // Apply theme to CSS variables
  const applyTheme = useCallback(() => {
    const css = themeToCSS(effectiveTheme);
    const styleElement = document.getElementById('wheel-theme-styles');
    if (styleElement) {
      styleElement.innerHTML = css;
    } else {
      const newStyleElement = document.createElement('style');
      newStyleElement.id = 'wheel-theme-styles';
      newStyleElement.innerHTML = css;
      document.head.appendChild(newStyleElement);
    }
  }, [effectiveTheme]);

  // Set the theme
  const setTheme = useCallback((newTheme: Theme) => {
    try {
      setThemeState(newTheme);
    } catch (e) {
      setError('Invalid theme format');
    }
  }, []);

  // Reset the theme
  const resetTheme = useCallback(() => {
    setThemeState(defaultTheme);
    setModeState('light');
  }, []);

  // Apply the theme when it changes
  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mode,
        setMode: setModeState,
        legacyTheme,
        applyTheme,
        resetTheme,
        isLoading,
        error,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
