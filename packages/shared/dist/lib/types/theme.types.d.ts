/**
 * Theme Types
 *
 * This file contains all the types related to the theming system.
 */
/**
 * Color scale from 50 to 900
 */
export interface ColorScale {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    [key: number]: string | undefined;
}
/**
 * Theme colors
 */
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
/**
 * Semantic colors for specific UI elements
 */
export interface SemanticColors {
    bgPrimary: string;
    bgSecondary?: string;
    bgTertiary?: string;
    bgCard: string;
    bgModal?: string;
    bgHover?: string;
    bgActive?: string;
    bgDisabled?: string;
    textPrimary: string;
    textSecondary?: string;
    textTertiary?: string;
    textDisabled?: string;
    textInverted?: string;
    textLink?: string;
    textLinkHover?: string;
    borderDefault: string;
    borderFocus?: string;
    borderDisabled?: string;
    shadow?: string;
    overlay?: string;
    [key: string]: string | undefined;
}
/**
 * Typography settings
 */
export interface Typography {
    fonts: {
        sans: string;
        serif?: string;
        mono?: string;
        [key: string]: string | undefined;
    };
    fontSizes: {
        xs?: string;
        sm?: string;
        base: string;
        md?: string;
        lg?: string;
        xl?: string;
        '2xl'?: string;
        '3xl'?: string;
        '4xl'?: string;
        '5xl'?: string;
        [key: string]: string | undefined;
    };
    fontWeights: {
        thin?: string | number;
        light?: string | number;
        normal: string | number;
        medium?: string | number;
        semibold?: string | number;
        bold: string | number;
        extrabold?: string | number;
        black?: string | number;
        [key: string]: string | number | undefined;
    };
    lineHeights: {
        none?: string;
        tight?: string;
        snug?: string;
        normal: string;
        relaxed?: string;
        loose?: string;
        [key: string]: string | undefined;
    };
    letterSpacings: {
        tighter?: string;
        tight?: string;
        normal: string;
        wide?: string;
        wider?: string;
        widest?: string;
        [key: string]: string | undefined;
    };
}
/**
 * Spacing settings
 */
export interface Spacing {
    0?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    8?: string;
    10?: string;
    12?: string;
    16?: string;
    20?: string;
    24?: string;
    32?: string;
    40?: string;
    48?: string;
    56?: string;
    64?: string;
    72?: string;
    80?: string;
    96?: string;
    [key: string]: string | undefined;
}
/**
 * Border settings
 */
export interface Borders {
    width: {
        none?: string;
        thin?: string;
        base: string;
        thick?: string;
        thicker?: string;
        [key: string]: string | undefined;
    };
    radius: {
        none?: string;
        sm?: string;
        base: string;
        md?: string;
        lg?: string;
        xl?: string;
        full?: string;
        [key: string]: string | undefined;
    };
    styles?: {
        solid: string;
        dashed?: string;
        dotted?: string;
        double?: string;
        [key: string]: string | undefined;
    };
}
/**
 * Shadow settings
 */
export interface Shadows {
    none?: string;
    sm?: string;
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
    inner?: string;
    outline?: string;
    [key: string]: string | undefined;
}
/**
 * Animation settings
 */
export interface Animations {
    durations: {
        fastest?: string;
        fast?: string;
        normal: string;
        slow?: string;
        slowest?: string;
        [key: string]: string | undefined;
    };
    easings: {
        linear?: string;
        ease: string;
        easeIn?: string;
        easeOut?: string;
        easeInOut?: string;
        [key: string]: string | undefined;
    };
    transitions?: {
        default: string;
        slow?: string;
        fast?: string;
        [key: string]: string | undefined;
    };
    keyframes?: {
        [key: string]: string;
    };
}
/**
 * Breakpoints for responsive design
 */
export interface Breakpoints {
    xs?: string;
    sm?: string;
    md: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    [key: string]: string | undefined;
}
/**
 * Z-index settings
 */
export interface ZIndices {
    hide?: number;
    auto?: number;
    base: number;
    dropdown?: number;
    sticky?: number;
    fixed?: number;
    overlay?: number;
    modal?: number;
    popover?: number;
    toast?: number;
    tooltip?: number;
    [key: string]: number | undefined;
}
/**
 * Custom theme settings
 */
export interface CustomThemeSettings {
    assets?: {
        logoUrl?: string;
        favicon?: string;
        [key: string]: string | undefined;
    };
    components?: {
        [key: string]: any;
    };
    css?: string;
    javascript?: string;
    [key: string]: any;
}
/**
 * Theme mode
 */
export interface ThemeMode {
    mode: 'light' | 'dark' | 'high-contrast';
    customMode?: string;
}
/**
 * Theme history entry
 */
export interface ThemeHistory {
    id: string;
    themeId: string;
    version: string;
    changes: string;
    createdBy: string;
    createdAt: Date;
    theme: Theme;
}
/**
 * Theme statistics
 */
export interface ThemeStats {
    themeId: string;
    downloads: number;
    rating: number;
    ratingCount: number;
    usageCount: number;
    updatedAt: Date;
}
/**
 * Theme rating
 */
export interface ThemeRating {
    id: string;
    themeId: string;
    userId: string;
    rating: number;
    comment?: string;
    createdAt: Date;
}
/**
 * Theme filter options
 */
export interface ThemeFilter {
    isPublic?: boolean;
    tenantId?: string;
    authorId?: string;
    search?: string;
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
}
/**
 * Theme preset
 */
export interface ThemePreset {
    id: string;
    name: string;
    description?: string;
    theme: Theme;
}
/**
 * Main Theme interface
 */
export interface Theme {
    id?: string;
    name: string;
    description?: string;
    version?: string;
    author?: string;
    isPublic?: boolean;
    colors: ThemeColors;
    semanticColors: SemanticColors;
    typography: Typography;
    spacing?: Spacing;
    borders: Borders;
    shadows?: Shadows;
    animations?: Animations;
    breakpoints?: Breakpoints;
    zIndices?: ZIndices;
    custom?: CustomThemeSettings;
}
//# sourceMappingURL=theme.types.d.ts.map