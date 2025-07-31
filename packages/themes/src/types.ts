/**
 * Theme Types
 * 
 * This file contains all the types related to the theming system,
 * adapted from the existing implementation in thewheel.
 */

// Basic type for a color scale (e.g., from light to dark)
export interface ColorScale {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string; // Base color
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  [key: number]: string | undefined;
}

// Defines all the color scales used in the theme
export interface ThemeColors {
  primary: ColorScale;
  secondary: ColorScale;
  accent: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
  neutral: ColorScale;
  [key: string]: ColorScale;
}

// Defines semantic colors for specific UI elements
export interface SemanticColors {
  bgPrimary: string;
  bgSecondary?: string;
  textPrimary: string;
  textSecondary?: string;
  borderDefault: string;
  [key: string]: string | undefined;
}

// Defines typography settings
export interface Typography {
  fonts: {
    sans: string;
    serif?: string;
    mono?: string;
    [key: string]: string | undefined;
  };
  fontSizes: {
    base: string;
    [key: string]: string | undefined;
  };
  fontWeights: {
    normal: string | number;
    bold: string | number;
    [key: string]: string | number | undefined;
  };
  lineHeights: {
    normal: string;
    [key: string]: string | undefined;
  };
}

// Defines spacing settings (e.g., for margins and paddings)
export interface Spacing {
  [key: string]: string | undefined;
}

// Defines border settings
export interface Borders {
  width: {
    base: string;
    [key: string]: string | undefined;
  };
  radius: {
    base: string;
    [key: string]: string | undefined;
  };
}

// The main Theme interface, which combines all the other types
export interface Theme {
  id?: string;
  name: string;
  version?: string;
  colors: ThemeColors;
  semanticColors: SemanticColors;
  typography: Typography;
  spacing?: Spacing;
  borders: Borders;
}

// Defines the theme mode (e.g., light, dark)
export type ThemeMode = 'light' | 'dark' | 'high-contrast';

// Legacy theme type for backward compatibility
export interface LegacyTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}
