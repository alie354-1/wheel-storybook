import { Theme, ThemeMode, ColorScale } from '../types/theme.types';
import tinycolor from 'tinycolor2';

/**
 * Merges two themes, with the override theme taking precedence
 * @param base The base theme
 * @param override The override theme
 * @returns The merged theme
 */
export function mergeThemes(base: Theme, override: Partial<Theme>): Theme {
  // Start with a deep copy of the base theme
  const result: Theme = JSON.parse(JSON.stringify(base));
  
  // Merge metadata
  if (override.id) result.id = override.id;
  if (override.name) result.name = override.name;
  if (override.description) result.description = override.description;
  if (override.version) result.version = override.version;
  if (override.author) result.author = override.author;
  if (override.isPublic !== undefined) result.isPublic = override.isPublic;
  
  // Merge colors
  if (override.colors) {
    Object.keys(override.colors).forEach(colorKey => {
      const overrideColor = override.colors?.[colorKey];
      if (overrideColor) {
        if (!result.colors[colorKey]) {
          result.colors[colorKey] = { ...overrideColor } as ColorScale;
        } else {
          result.colors[colorKey] = { 
            ...result.colors[colorKey], 
            ...overrideColor 
          } as ColorScale;
        }
      }
    });
  }
  
  // Merge semantic colors
  if (override.semanticColors) {
    result.semanticColors = { ...result.semanticColors, ...override.semanticColors };
  }
  
  // Merge typography
  if (override.typography) {
    result.typography = {
      fonts: { ...result.typography.fonts, ...override.typography.fonts },
      fontSizes: { ...result.typography.fontSizes, ...override.typography.fontSizes },
      fontWeights: { ...result.typography.fontWeights, ...override.typography.fontWeights },
      lineHeights: { ...result.typography.lineHeights, ...override.typography.lineHeights },
      letterSpacings: { ...result.typography.letterSpacings, ...override.typography.letterSpacings }
    };
  }
  
  // Merge spacing
  if (override.spacing) {
    result.spacing = { ...result.spacing, ...override.spacing };
  }
  
  // Merge borders
  if (override.borders) {
    result.borders = {
      width: { ...result.borders.width, ...override.borders.width },
      radius: { ...result.borders.radius, ...override.borders.radius },
      styles: override.borders.styles 
        ? { 
            ...(result.borders.styles || {}),
            ...override.borders.styles,
            // Ensure required properties are present
            solid: override.borders.styles.solid || (result.borders.styles?.solid || 'solid')
          }
        : result.borders.styles || { solid: 'solid' }
    };
  }
  
  // Merge shadows
  if (override.shadows) {
    result.shadows = { ...result.shadows, ...override.shadows };
  }
  
  // Merge animations
  if (override.animations && result.animations) {
    // Create a safe copy of the easings with required properties
    const safeEasings = override.animations.easings 
      ? { 
          ...result.animations.easings,
          ...override.animations.easings,
          // Ensure required properties are present with non-undefined values
          ease: override.animations.easings.ease || result.animations.easings.ease || 'ease'
        }
      : result.animations.easings;
    
    // Create a safe copy of the transitions with required properties
    const safeTransitions = override.animations.transitions 
      ? { 
          ...result.animations.transitions,
          ...override.animations.transitions,
          // Ensure required properties are present with non-undefined values
          default: override.animations.transitions?.default || result.animations.transitions?.default || 'all 0.3s ease'
        }
      : result.animations.transitions;
      
    result.animations = {
      durations: { ...result.animations.durations, ...override.animations.durations },
      easings: safeEasings,
      transitions: safeTransitions,
      keyframes: { ...result.animations.keyframes, ...override.animations.keyframes }
    };
  } else if (override.animations) {
    // Ensure we have all required properties when creating a new animations object
    const defaultEasings = { 
      ease: 'ease',
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    };
    
    const defaultTransitions = {
      default: 'all 0.3s ease'
    };
    
    result.animations = { 
      ...override.animations,
      easings: override.animations.easings 
        ? { ...defaultEasings, ...override.animations.easings }
        : defaultEasings,
      transitions: override.animations.transitions
        ? { ...defaultTransitions, ...override.animations.transitions }
        : defaultTransitions
    };
  }
  
  // Merge breakpoints
  if (override.breakpoints) {
    result.breakpoints = { ...result.breakpoints, ...override.breakpoints };
  }
  
  // Merge z-indices
  if (override.zIndices) {
    result.zIndices = { ...result.zIndices, ...override.zIndices };
  }
  
  // Merge custom settings
  if (override.custom) {
    if (!result.custom) result.custom = {};
    
    // Merge assets
    if (override.custom.assets) {
      if (!result.custom.assets) result.custom.assets = {};
      result.custom.assets = { ...result.custom.assets, ...override.custom.assets };
    }
    
    // Merge components
    if (override.custom.components) {
      if (!result.custom.components) result.custom.components = {};
      result.custom.components = { ...result.custom.components, ...override.custom.components };
    }
    
    // Merge other custom properties
    if (override.custom.css) result.custom.css = override.custom.css;
    if (override.custom.javascript) result.custom.javascript = override.custom.javascript;
  }
  
  return result;
}

/**
 * Validates a theme object
 * @param theme The theme to validate
 * @returns The validated theme
 * @throws Error if the theme is invalid
 */
export function validateTheme(theme: any): Theme {
  // Check required properties
  if (!theme) throw new Error('Theme is required');
  if (typeof theme !== 'object') throw new Error('Theme must be an object');
  
  // Check required theme properties
  if (!theme.name) throw new Error('Theme name is required');
  if (!theme.colors) throw new Error('Theme colors are required');
  if (!theme.semanticColors) throw new Error('Theme semantic colors are required');
  if (!theme.typography) throw new Error('Theme typography is required');
  if (!theme.borders) throw new Error('Theme borders are required');
  
  // Check required color properties
  if (!theme.colors.primary) throw new Error('Primary color is required');
  if (!theme.colors.secondary) throw new Error('Secondary color is required');
  if (!theme.colors.accent) throw new Error('Accent color is required');
  
  // Check required semantic color properties
  if (!theme.semanticColors.bgPrimary) throw new Error('Background primary color is required');
  if (!theme.semanticColors.textPrimary) throw new Error('Text primary color is required');
  if (!theme.semanticColors.bgCard) throw new Error('Card background color is required');
  if (!theme.semanticColors.borderDefault) throw new Error('Border default color is required');
  
  // Check required typography properties
  if (!theme.typography.fonts || !theme.typography.fonts.sans) {
    throw new Error('Sans font is required');
  }
  
  if (!theme.typography.fontSizes || !theme.typography.fontSizes.base) {
    throw new Error('Base font size is required');
  }
  
  if (!theme.typography.fontWeights || 
      theme.typography.fontWeights.normal === undefined || 
      theme.typography.fontWeights.bold === undefined) {
    throw new Error('Normal and bold font weights are required');
  }
  
  if (!theme.typography.lineHeights || !theme.typography.lineHeights.normal) {
    throw new Error('Normal line height is required');
  }
  
  if (!theme.typography.letterSpacings || !theme.typography.letterSpacings.normal) {
    throw new Error('Normal letter spacing is required');
  }
  
  // Check required border properties
  if (!theme.borders.width || !theme.borders.width.base) {
    throw new Error('Base border width is required');
  }
  
  if (!theme.borders.radius || !theme.borders.radius.base) {
    throw new Error('Base border radius is required');
  }
  
  return theme as Theme;
}

/**
 * Generates a color scale from a base color
 * @param baseColor The base color (500)
 * @returns A color scale object
 */
export function generateColorScale(baseColor: string): Partial<ColorScale> {
  const color = tinycolor(baseColor);
  
  return {
    50: tinycolor.mix(color, tinycolor('var(--bg-primary)'), 90).toHexString(),
    100: tinycolor.mix(color, tinycolor('var(--bg-primary)'), 80).toHexString(),
    200: tinycolor.mix(color, tinycolor('var(--bg-primary)'), 60).toHexString(),
    300: tinycolor.mix(color, tinycolor('var(--bg-primary)'), 40).toHexString(),
    400: tinycolor.mix(color, tinycolor('var(--bg-primary)'), 20).toHexString(),
    // 500 is the base color, provided by the caller
    600: tinycolor.mix(color, tinycolor('var(--text-primary)'), 10).toHexString(),
    700: tinycolor.mix(color, tinycolor('var(--text-primary)'), 20).toHexString(),
    800: tinycolor.mix(color, tinycolor('var(--text-primary)'), 30).toHexString(),
    900: tinycolor.mix(color, tinycolor('var(--text-primary)'), 40).toHexString(),
  };
}

/**
 * Converts a theme to CSS variables
 * @param theme The theme to convert
 * @returns CSS string
 */
export function themeToCSS(theme: Theme): string {
  let css = ':root {\n';
  
  // Add color variables
  Object.entries(theme.colors).forEach(([colorName, colorScale]) => {
    Object.entries(colorScale).forEach(([shade, value]) => {
      css += `  --color-${colorName}-${shade}: ${value};\n`;
    });
  });
  
  // Add semantic color variables
  Object.entries(theme.semanticColors).forEach(([name, value]) => {
    if (value) {
      css += `  --${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Add typography variables
  // Fonts
  Object.entries(theme.typography.fonts).forEach(([name, value]) => {
    if (value) {
      css += `  --font-${name}: ${value};\n`;
    }
  });
  
  // Font sizes
  Object.entries(theme.typography.fontSizes).forEach(([name, value]) => {
    if (value) {
      css += `  --font-size-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Font weights
  Object.entries(theme.typography.fontWeights).forEach(([name, value]) => {
    if (value) {
      css += `  --font-weight-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Line heights
  Object.entries(theme.typography.lineHeights).forEach(([name, value]) => {
    if (value) {
      css += `  --line-height-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Letter spacings
  Object.entries(theme.typography.letterSpacings).forEach(([name, value]) => {
    if (value) {
      css += `  --letter-spacing-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Add spacing variables
  if (theme.spacing) {
    Object.entries(theme.spacing).forEach(([name, value]) => {
      if (value) {
        css += `  --spacing-${name}: ${value};\n`;
      }
    });
  }
  
  // Add border variables
  // Border widths
  Object.entries(theme.borders.width).forEach(([name, value]) => {
    if (value) {
      css += `  --border-width-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Border radii
  Object.entries(theme.borders.radius).forEach(([name, value]) => {
    if (value) {
      css += `  --border-radius-${kebabCase(name)}: ${value};\n`;
    }
  });
  
  // Border styles
  if (theme.borders.styles) {
    Object.entries(theme.borders.styles).forEach(([name, value]) => {
      if (value) {
        css += `  --border-style-${kebabCase(name)}: ${value};\n`;
      }
    });
  }
  
  // Add shadow variables
  if (theme.shadows) {
    Object.entries(theme.shadows).forEach(([name, value]) => {
      if (value) {
        css += `  --shadow-${kebabCase(name)}: ${value};\n`;
      }
    });
  }
  
  // Add animation variables
  if (theme.animations) {
    // Durations
    Object.entries(theme.animations.durations).forEach(([name, value]) => {
      if (value) {
        css += `  --duration-${kebabCase(name)}: ${value};\n`;
      }
    });
    
    // Easings
    Object.entries(theme.animations.easings).forEach(([name, value]) => {
      if (value) {
        css += `  --easing-${kebabCase(name)}: ${value};\n`;
      }
    });
    
    // Transitions
    if (theme.animations.transitions) {
      Object.entries(theme.animations.transitions).forEach(([name, value]) => {
        if (value) {
          css += `  --transition-${kebabCase(name)}: ${value};\n`;
        }
      });
    }
  }
  
  // Add z-index variables
  if (theme.zIndices) {
    Object.entries(theme.zIndices).forEach(([name, value]) => {
      if (value !== undefined) {
        css += `  --z-index-${kebabCase(name)}: ${value};\n`;
      }
    });
  }
  
  // Add breakpoint variables
  if (theme.breakpoints) {
    Object.entries(theme.breakpoints).forEach(([name, value]) => {
      if (value) {
        css += `  --breakpoint-${kebabCase(name)}: ${value};\n`;
      }
    });
  }
  
  // Add custom CSS
  if (theme.custom?.css) {
    css += `\n  /* Custom CSS */\n${theme.custom.css}\n`;
  }
  
  css += '}\n';
  
  return css;
}

/**
 * Gets the effective theme based on the current mode
 * @param theme The base theme
 * @param mode The theme mode
 * @returns The effective theme
 */
export function getEffectiveTheme(theme: Theme, mode: ThemeMode): Theme {
  // Start with a copy of the base theme
  const effectiveTheme = { ...theme };
  
  // Apply mode-specific overrides
  if (mode.mode === 'dark' && theme.custom?.darkMode) {
    return mergeThemes(effectiveTheme, theme.custom.darkMode as Partial<Theme>);
  } else if (mode.mode === 'high-contrast' && theme.custom?.highContrast) {
    return mergeThemes(effectiveTheme, theme.custom.highContrast as Partial<Theme>);
  } else if (mode.customMode && theme.custom?.[mode.customMode]) {
    return mergeThemes(effectiveTheme, theme.custom[mode.customMode] as Partial<Theme>);
  }
  
  return effectiveTheme;
}

/**
 * Converts a string to kebab-case
 * @param str The string to convert
 * @returns The kebab-cased string
 */
function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}
