import { Theme as ThemeType, ThemeHistory, ThemeStats, ThemeFilter } from '../types/theme.types';
export type Theme = ThemeType;
export interface LegacyTheme {
    primaryColor: string;
    secondaryColor: string;
    successColor: string;
    dangerColor: string;
    backgroundColor: string;
    textColor: string;
    cardBackgroundColor: string;
    borderColor: string;
    fontFamily: string;
    borderRadius: string;
    logoUrl: string;
}
/**
 * Converts a legacy theme to the new theme format
 * @param legacyTheme The legacy theme to convert
 * @returns A new theme object
 */
declare function convertLegacyTheme(legacyTheme: LegacyTheme): ThemeType;
export declare const themeService: {
    /**
     * Gets a theme by tenant ID
     * @param tenantId The tenant ID
     * @returns The theme or null if not found
     */
    getThemeByTenant(tenantId: string): Promise<ThemeType | LegacyTheme | null>;
    /**
     * Sets a theme for a tenant
     * @param tenantId The tenant ID
     * @param theme The theme to set
     */
    setThemeForTenant(tenantId: string, theme: ThemeType | LegacyTheme): Promise<void>;
    /**
     * Gets a theme by ID
     * @param themeId The theme ID
     * @returns The theme or null if not found
     */
    getThemeById(themeId: string): Promise<ThemeType | null>;
    /**
     * Creates a new theme
     * @param theme The theme to create
     * @param tenantId The tenant ID
     * @returns The created theme ID
     */
    createTheme(theme: ThemeType, tenantId: string): Promise<string>;
    /**
     * Updates an existing theme
     * @param themeId The theme ID
     * @param theme The updated theme
     */
    updateTheme(themeId: string, theme: Partial<ThemeType>): Promise<void>;
    /**
     * Creates a theme history entry
     * @param themeId The theme ID
     * @param theme The theme snapshot
     * @param changes Description of changes
     */
    createThemeHistoryEntry(themeId: string, theme: ThemeType, changes: string): Promise<void>;
    /**
     * Gets theme history entries
     * @param themeId The theme ID
     * @returns Array of theme history entries
     */
    getThemeHistory(themeId: string): Promise<ThemeHistory[]>;
    /**
     * Deletes a theme
     * @param themeId The theme ID
     */
    deleteTheme(themeId: string): Promise<void>;
    /**
     * Lists themes with optional filtering
     * @param filter Optional filter criteria
     * @returns Array of themes
     */
    listThemes(filter?: ThemeFilter): Promise<ThemeType[]>;
    /**
     * Gets theme statistics
     * @param themeId The theme ID
     * @returns Theme statistics
     */
    getThemeStats(themeId: string): Promise<ThemeStats | null>;
    /**
     * Rates a theme
     * @param themeId The theme ID
     * @param userId The user ID
     * @param rating The rating (1-5)
     * @param comment Optional comment
     */
    rateTheme(themeId: string, userId: string, rating: number, comment?: string): Promise<void>;
    /**
     * Updates theme statistics
     * @param themeId The theme ID
     */
    updateThemeStats(themeId: string): Promise<void>;
    /**
     * Converts a theme to CSS variables
     * @param theme The theme to convert
     * @returns CSS string
     */
    themeToCSS(theme: ThemeType): string;
    /**
     * Converts a legacy theme to the new format
     * @param legacyTheme The legacy theme
     * @returns The converted theme
     */
    convertLegacyTheme: typeof convertLegacyTheme;
};
export {};
//# sourceMappingURL=theme.service.d.ts.map