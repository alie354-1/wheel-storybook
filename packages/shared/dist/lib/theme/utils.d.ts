import { Theme, ThemeMode, ColorScale } from '../types/theme.types';
/**
 * Merges two themes, with the override theme taking precedence
 * @param base The base theme
 * @param override The override theme
 * @returns The merged theme
 */
export declare function mergeThemes(base: Theme, override: Partial<Theme>): Theme;
/**
 * Validates a theme object
 * @param theme The theme to validate
 * @returns The validated theme
 * @throws Error if the theme is invalid
 */
export declare function validateTheme(theme: any): Theme;
/**
 * Generates a color scale from a base color
 * @param baseColor The base color (500)
 * @returns A color scale object
 */
export declare function generateColorScale(baseColor: string): Partial<ColorScale>;
/**
 * Converts a theme to CSS variables
 * @param theme The theme to convert
 * @returns CSS string
 */
export declare function themeToCSS(theme: Theme): string;
/**
 * Gets the effective theme based on the current mode
 * @param theme The base theme
 * @param mode The theme mode
 * @returns The effective theme
 */
export declare function getEffectiveTheme(theme: Theme, mode: ThemeMode): Theme;
//# sourceMappingURL=utils.d.ts.map