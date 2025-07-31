import { 
  Theme, 
  ColorScale, 
  SemanticColors, 
  Typography, 
  Spacing, 
  Borders, 
  Shadows, 
  Animations, 
  Breakpoints, 
  ZIndices 
} from '../types/theme.types';

/**
 * Default primary color scale - Midnight Blue
 */
const primaryColorScale: ColorScale = {
  50: '#e0e7ff',
  100: '#c7d2fe',
  200: '#a5b4fc',
  300: '#818cf8',
  400: '#6366f1',
  500: '#1e1b4b', // Base midnight blue
  600: '#312e81',
  700: '#3730a3',
  800: '#4338ca',
  900: '#0f0c29',
};

/**
 * Default secondary color scale - Amber
 */
const secondaryColorScale: ColorScale = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: 'var(--warning)',
  500: 'var(--warning)', // Base amber
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
};

/**
 * Default accent color scale - Gradient blend
 */
const accentColorScale: ColorScale = {
  50: '#e8f4fd',
  100: '#d1e9fb',
  200: '#a3d3f7',
  300: '#75bdf3',
  400: '#47a6ef',
  500: '#6366f1', // Blend of primary and secondary
  600: '#1273bc',
  700: '#0e568d',
  800: '#0a395e',
  900: '#051d2f',
};

/**
 * Default success color scale
 */
const successColorScale: ColorScale = {
  50: '#f3faf7',
  100: '#def7ec',
  200: '#bcf0da',
  300: '#84e1bc',
  400: '#31c48d',
  500: '#0e9f6e',
  600: '#057a55',
  700: '#046c4e',
  800: '#03543f',
  900: '#014737',
};

/**
 * Default warning color scale
 */
const warningColorScale: ColorScale = {
  50: '#fdfdea',
  100: '#fdf6b2',
  200: '#fce96a',
  300: '#faca15',
  400: '#e3a008',
  500: '#c27803',
  600: '#9f580a',
  700: '#8e4b10',
  800: '#723b13',
  900: '#633112',
};

/**
 * Default danger color scale
 */
const dangerColorScale: ColorScale = {
  50: '#fdf2f2',
  100: '#fde8e8',
  200: '#fbd5d5',
  300: '#f8b4b4',
  400: '#f98080',
  500: '#f05252',
  600: '#e02424',
  700: '#c81e1e',
  800: '#9b1c1c',
  900: '#771d1d',
};

/**
 * Default info color scale
 */
const infoColorScale: ColorScale = {
  50: '#e8f4fd',
  100: '#d1e9fb',
  200: '#a3d3f7',
  300: '#75bdf3',
  400: '#47a6ef',
  500: '#1a90eb',
  600: '#1273bc',
  700: '#0e568d',
  800: '#0a395e',
  900: '#051d2f',
};

/**
 * Default neutral color scale
 */
const neutralColorScale: ColorScale = {
  50: 'var(--bg-secondary)',
  100: 'var(--bg-secondary)',
  200: 'var(--border-default)',
  300: 'var(--border-default)',
  400: 'var(--text-disabled)',
  500: 'var(--text-secondary)',
  600: 'var(--text-secondary)',
  700: 'var(--text-secondary)',
  800: 'var(--text-primary)',
  900: 'var(--text-primary)',
};

/**
 * Default semantic colors
 */
const semanticColors: SemanticColors = {
  // Background colors
  bgPrimary: 'var(--bg-secondary)',
  bgSecondary: 'var(--bg-secondary)',
  bgTertiary: 'var(--border-default)',
  bgCard: 'var(--bg-primary)',
  bgModal: '#ffffff',
  bgHover: 'rgba(0, 0, 0, 0.05)',
  bgActive: 'var(--shadow-color-light)',
  bgDisabled: 'var(--border-default)',
  
  // Text colors
  textPrimary: '#1e1b4b', // Updated to midnight blue
  textSecondary: 'var(--text-secondary)',
  textTertiary: 'var(--text-disabled)',
  textDisabled: 'var(--border-default)',
  textInverted: 'var(--bg-primary)',
  textLink: '#3730a3', // Updated to midnight blue
  textLinkHover: 'var(--warning)', // Updated to amber
  
  // Border colors
  borderDefault: 'var(--border-default)',
  borderFocus: '#3730a3', // Updated to midnight blue
  borderDisabled: 'var(--border-default)',
  
  // Other semantic colors
  shadow: 'var(--shadow-color-light)',
  overlay: 'var(--overlay-background)',
  
  // Gradient backgrounds
  bgGradientPrimary: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, var(--warning) 100%)',
  bgGradientMidnight: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)',
  bgGradientAmber: 'linear-gradient(135deg, var(--warning) 0%, #d97706 100%)',
  bgGradientJourney: 'linear-gradient(135deg, var(--warning) 0%, #d97706 50%, #b45309 100%)',
};

/**
 * Default typography settings
 */
const typography: Typography = {
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2.25rem',
    '4xl': '3rem',
    '5xl': '4rem',
  },
  
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

/**
 * Default spacing settings
 */
const spacing: Spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

/**
 * Default border settings
 */
const borders: Borders = {
  width: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '4px',
    thicker: '8px',
  },
  
  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  
  styles: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
  },
};

/**
 * Default shadow settings
 */
const shadows: Shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 var(--shadow-color-light), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px var(--shadow-color-light), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px var(--shadow-color-light), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px var(--shadow-color-light), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(55, 48, 163, 0.5)', // Updated to midnight blue
};

/**
 * Default animation settings
 */
const animations: Animations = {
  durations: {
    fastest: '50ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slowest: '500ms',
  },
  
  easings: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  
  transitions: {
    default: 'all 200ms ease',
    slow: 'all 300ms ease',
    fast: 'all 100ms ease',
  },
  
  keyframes: {
    spin: '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }',
    ping: '@keyframes ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }',
    pulse: '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }',
    bounce: '@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }',
    ambient: '@keyframes ambient { 0% { opacity: 0.8; transform: scale(1); } 100% { opacity: 1; transform: scale(1.05); } }',
  },
};

/**
 * Default breakpoint settings
 */
const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Default z-index settings
 */
const zIndices: ZIndices = {
  hide: -1,
  auto: 0,
  base: 1,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
};

/**
 * Default theme
 */
export const defaultTheme: Theme = {
  // Metadata
  id: 'default',
  name: 'THE WHEEL Default Theme',
  description: 'The default theme for The Wheel',
  version: '1.0.0',
  author: 'The Wheel Team',
  isPublic: true,
  
  // Core theme properties
  colors: {
    primary: primaryColorScale,
    secondary: secondaryColorScale,
    accent: accentColorScale,
    success: successColorScale,
    warning: warningColorScale,
    danger: dangerColorScale,
    info: infoColorScale,
    neutral: neutralColorScale,
  },
  semanticColors,
  typography,
  spacing,
  borders,
  shadows,
  animations,
  breakpoints,
  zIndices,
  
  // Custom settings
  custom: {
    assets: {
      logoUrl: '/logos/wheel_logo_primary.svg',
    },
  },
};

/**
 * Platform Hero Theme Preset
 */
export const platformHeroTheme: Theme = {
  ...defaultTheme,
  name: 'Platform Hero',
  description: 'A bold theme for landing pages and hero sections',
  semanticColors: {
    ...defaultTheme.semanticColors,
    bgPrimary: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, var(--warning) 100%)',
    bgModal: '#1e1b4b',
    textPrimary: 'var(--bg-primary)',
    textSecondary: '#e0e0e0',
    textTertiary: '#a0a0a0',
    borderDefault: '#3d3d3d',
  },
  custom: {
    ...defaultTheme.custom,
    assets: {
      logoUrl: '/logos/wheel_logo_stacked.svg',
    },
  },
};

/**
 * Founder Dashboard Theme Preset
 */
export const founderDashboardTheme: Theme = {
  ...defaultTheme,
  name: 'Founder Dashboard',
  description: 'A dark theme for founder dashboards',
  semanticColors: {
    ...defaultTheme.semanticColors,
    bgPrimary: '#121212',
    bgSecondary: '#1e1e1e',
    bgTertiary: '#2d2d2d',
    bgCard: '#2d2d2d',
    bgModal: '#1e1e1e',
    textPrimary: 'var(--bg-primary)',
    textSecondary: '#e0e0e0',
    textTertiary: '#a0a0a0',
    borderDefault: '#3d3d3d',
  },
  custom: {
    ...defaultTheme.custom,
    assets: {
      logoUrl: '/logos/wheel_logo_dashboard.svg',
    },
  },
};

/**
 * VC Portal Theme Preset
 */
export const vcPortalTheme: Theme = {
  ...defaultTheme,
  name: 'VC Portal',
  description: 'A professional light theme for VC portals',
  semanticColors: {
    ...defaultTheme.semanticColors,
    bgPrimary: 'var(--bg-primary)',
    bgSecondary: '#f8fafc',
    bgTertiary: '#f1f5f9',
    bgCard: 'var(--bg-primary)',
    bgModal: '#ffffff',
    textPrimary: '#1e1b4b',
    textSecondary: '#334155',
    textTertiary: '#64748b',
    borderDefault: '#e2e8f0',
  },
  custom: {
    ...defaultTheme.custom,
    assets: {
      logoUrl: '/logos/wheel_logo_vc_portfolio.svg',
    },
  },
};

/**
 * Journey Energy Theme Preset
 */
export const journeyEnergyTheme: Theme = {
  ...defaultTheme,
  name: 'Journey Energy',
  description: 'An energetic theme for journey milestones',
  colors: {
    ...defaultTheme.colors,
    primary: secondaryColorScale, // Use amber as primary
    secondary: primaryColorScale, // Use midnight blue as secondary
  },
  semanticColors: {
    ...defaultTheme.semanticColors,
    bgPrimary: 'linear-gradient(135deg, var(--warning) 0%, #d97706 50%, #b45309 100%)',
    bgModal: '#b45309',
    textPrimary: 'var(--bg-primary)',
    textSecondary: '#fef3c7',
    textTertiary: 'var(--warning)',
    borderDefault: '#b45309',
  },
  custom: {
    ...defaultTheme.custom,
    assets: {
      logoUrl: '/logos/wheel_logo_journey_energy.svg',
    },
  },
};
