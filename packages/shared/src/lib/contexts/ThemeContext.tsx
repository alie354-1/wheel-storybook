import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useAuthStore } from '../store';
import { themeService, LegacyTheme } from '../services/theme.service';
import { Theme, ThemeMode } from '../types/theme.types';
import { defaultTheme } from '../theme/defaults';
import { mergeThemes, getEffectiveTheme, themeToCSS } from '../theme/utils';

// For backward compatibility
export type LegacyThemeType = LegacyTheme;

interface ThemeContextType {
  // Theme state
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Theme mode
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  
  // Legacy theme for backward compatibility
  legacyTheme: LegacyTheme;
  
  // Theme utilities
  applyTheme: () => void;
  resetTheme: () => void;
  
  // Theme state
  isLoading: boolean;
  error: string | null;
}

const defaultMode: ThemeMode = {
  mode: 'light',
};

// Convert the new theme to a legacy theme format for backward compatibility
function themeToLegacy(theme: Theme): LegacyTheme {
  return {
    primaryColor: theme.colors.primary[500],
    secondaryColor: theme.colors.secondary[500],
    successColor: theme.colors.success[500],
    dangerColor: theme.colors.danger[500],
    backgroundColor: theme.semanticColors.bgPrimary,
    textColor: theme.semanticColors.textPrimary,
    cardBackgroundColor: theme.semanticColors.bgCard,
    borderColor: theme.semanticColors.borderDefault,
    fontFamily: theme.typography.fonts.sans,
    borderRadius: theme.borders.radius.base,
    logoUrl: theme.custom?.assets?.logoUrl || '',
  };
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
  mode: defaultMode,
  setMode: () => {},
  legacyTheme: themeToLegacy(defaultTheme),
  applyTheme: () => {},
  resetTheme: () => {},
  isLoading: false,
  error: null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { profile } = useAuthStore();
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Get the effective theme based on the current mode
  const effectiveTheme = getEffectiveTheme(theme, mode);
  
  // Legacy theme for backward compatibility
  const legacyTheme = themeToLegacy(effectiveTheme);

  // Apply theme to CSS variables
  const applyTheme = useCallback(() => {
    // Apply theme to CSS variables
    const root = document.documentElement;
    
    // Apply color scales
    Object.entries(effectiveTheme.colors).forEach(([colorName, colorScale]) => {
      if (typeof colorScale === 'object') {
        Object.entries(colorScale).forEach(([shade, value]) => {
          if (value) {
            root.style.setProperty(`--color-${colorName}-${shade}`, value);
          }
        });
      }
    });
    
    // Apply semantic colors
    Object.entries(effectiveTheme.semanticColors).forEach(([name, value]) => {
      if (value) {
        // Convert camelCase to kebab-case for CSS variables
        const cssName = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        
        // Map semantic color names to CSS variable names
        const variableName = (() => {
          switch (cssName) {
            case 'bg-primary': return '--bg-primary';
            case 'bg-secondary': return '--bg-secondary';
            case 'bg-tertiary': return '--bg-tertiary';
            case 'bg-card': return '--bg-card';
            case 'bg-hover': return '--bg-hover';
            case 'bg-active': return '--bg-active';
            case 'bg-disabled': return '--bg-disabled';
            case 'text-primary': return '--text-primary';
            case 'text-secondary': return '--text-secondary';
            case 'text-tertiary': return '--text-tertiary';
            case 'text-disabled': return '--text-disabled';
            case 'text-inverted': return '--text-inverted';
            case 'text-link': return '--text-link';
            case 'text-link-hover': return '--text-link-hover';
            case 'border-default': return '--border-default';
            case 'border-focus': return '--border-focus';
            case 'border-disabled': return '--border-disabled';
            case 'shadow': return '--shadow';
            case 'overlay': return '--overlay';
            default: return `--${cssName}`;
          }
        })();
        
        root.style.setProperty(variableName, value);
      }
    });
    
    // Apply typography
    // Fonts
    Object.entries(effectiveTheme.typography.fonts).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--font-${name}`, value);
      }
    });
    
    // Font sizes
    Object.entries(effectiveTheme.typography.fontSizes).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--font-size-${name}`, value);
      }
    });
    
    // Font weights
    Object.entries(effectiveTheme.typography.fontWeights).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--font-weight-${name}`, value.toString());
      }
    });
    
    // Line heights
    Object.entries(effectiveTheme.typography.lineHeights).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--line-height-${name}`, value);
      }
    });
    
    // Letter spacings
    Object.entries(effectiveTheme.typography.letterSpacings).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--letter-spacing-${name}`, value);
      }
    });
    
    // Apply spacing
    if (effectiveTheme.spacing) {
      Object.entries(effectiveTheme.spacing).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--spacing-${name}`, value);
        }
      });
    }
    
    // Apply borders
    // Border widths
    Object.entries(effectiveTheme.borders.width).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--border-width-${name}`, value);
      }
    });
    
    // Border radii
    Object.entries(effectiveTheme.borders.radius).forEach(([name, value]) => {
      if (value) {
        root.style.setProperty(`--border-radius-${name}`, value);
      }
    });
    
    // Border styles
    if (effectiveTheme.borders.styles) {
      Object.entries(effectiveTheme.borders.styles).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--border-style-${name}`, value);
        }
      });
    }
    
    // Apply shadows
    if (effectiveTheme.shadows) {
      Object.entries(effectiveTheme.shadows).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--shadow-${name}`, value);
        }
      });
    }
    
    // Apply animations
    if (effectiveTheme.animations) {
      // Durations
      Object.entries(effectiveTheme.animations.durations).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--duration-${name}`, value);
        }
      });
      
      // Easings
      Object.entries(effectiveTheme.animations.easings).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--easing-${name}`, value);
        }
      });
      
      // Transitions
      if (effectiveTheme.animations.transitions) {
        Object.entries(effectiveTheme.animations.transitions).forEach(([name, value]) => {
          if (value) {
            root.style.setProperty(`--transition-${name}`, value);
          }
        });
      }
    }
    
    // Apply breakpoints
    if (effectiveTheme.breakpoints) {
      Object.entries(effectiveTheme.breakpoints).forEach(([name, value]) => {
        if (value) {
          root.style.setProperty(`--breakpoint-${name}`, value);
        }
      });
    }
    
    // For backward compatibility, also set the legacy CSS variables
    root.style.setProperty('--primary-color', legacyTheme.primaryColor);
    root.style.setProperty('--secondary-color', legacyTheme.secondaryColor);
    root.style.setProperty('--success-color', legacyTheme.successColor);
    root.style.setProperty('--danger-color', legacyTheme.dangerColor);
    root.style.setProperty('--background-color', legacyTheme.backgroundColor);
    root.style.setProperty('--text-color', legacyTheme.textColor);
    root.style.setProperty('--card-background-color', legacyTheme.cardBackgroundColor);
    root.style.setProperty('--border-color', legacyTheme.borderColor);
    root.style.setProperty('--font-family', legacyTheme.fontFamily);
    root.style.setProperty('--border-radius', legacyTheme.borderRadius);
    
    // Add theme mode class to body
    document.body.classList.remove('light-theme', 'dark-theme', 'high-contrast-theme');
    if (mode.mode === 'dark') {
      document.body.classList.add('dark-theme');
    } else if (mode.mode === 'high-contrast') {
      document.body.classList.add('high-contrast-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [effectiveTheme, legacyTheme, mode.mode]);

  // Set theme with validation
  const setTheme = useCallback((newTheme: Theme) => {
    try {
      setThemeState(newTheme);
    } catch (e) {
      console.error('Invalid theme:', e);
      setError('Invalid theme format');
    }
  }, []);

  // Set mode
  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  // Reset theme to default
  const resetTheme = useCallback(() => {
    setThemeState(defaultTheme);
    setModeState(defaultMode);
    setError(null);
  }, []);

  // Fetch theme from tenant
  useEffect(() => {
    const fetchTheme = async () => {
      if (profile?.company_id) {
        setIsLoading(true);
        setError(null);
        
        try {
          const tenantTheme = await themeService.getThemeByTenant(profile.company_id);
          
          if (tenantTheme) {
            // Check if it's a legacy theme
            if ('primaryColor' in tenantTheme) {
              // Convert legacy theme to new format
              const convertedTheme = themeService.convertLegacyTheme(tenantTheme);
              setThemeState(convertedTheme);
            } else {
              // It's already a new theme format
              setThemeState(tenantTheme as Theme);
            }
          }
        } catch (e) {
          console.error('Error fetching theme:', e);
          setError('Failed to load theme');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTheme();
  }, [profile]);

  // Apply theme whenever it changes
  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme, 
        mode, 
        setMode, 
        legacyTheme, 
        applyTheme,
        resetTheme,
        isLoading,
        error
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
