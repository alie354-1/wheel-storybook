import { supabase } from '../supabase';
import { 
  Theme as ThemeType, 
  ThemePreset, 
  ThemeHistory, 
  ThemeStats, 
  ThemeRating, 
  ThemeFilter,
  ThemeMode
} from '../types/theme.types';
import { defaultTheme } from '../theme/defaults';
import { mergeThemes, validateTheme, themeToCSS } from '../theme/utils';

// Re-export the Theme type for backward compatibility
export type Theme = ThemeType;

// Legacy theme interface for backward compatibility
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
function convertLegacyTheme(legacyTheme: LegacyTheme): ThemeType {
  // Start with the default theme
  const newTheme = { ...defaultTheme };
  
  // Override with legacy values
  return {
    ...newTheme,
    colors: {
      ...newTheme.colors,
      primary: {
        ...newTheme.colors.primary,
        500: legacyTheme.primaryColor,
      },
      secondary: {
        ...newTheme.colors.secondary,
        500: legacyTheme.secondaryColor,
      },
      success: {
        ...newTheme.colors.success,
        500: legacyTheme.successColor,
      },
      danger: {
        ...newTheme.colors.danger,
        500: legacyTheme.dangerColor,
      },
    },
    semanticColors: {
      ...newTheme.semanticColors,
      bgPrimary: legacyTheme.backgroundColor,
      textPrimary: legacyTheme.textColor,
      bgCard: legacyTheme.cardBackgroundColor,
      borderDefault: legacyTheme.borderColor,
    },
    typography: {
      ...newTheme.typography,
      fonts: {
        ...newTheme.typography.fonts,
        sans: legacyTheme.fontFamily,
      },
    },
    borders: {
      ...newTheme.borders,
      radius: {
        ...newTheme.borders.radius,
        base: legacyTheme.borderRadius,
      },
    },
    custom: {
      ...newTheme.custom,
      assets: {
        logoUrl: legacyTheme.logoUrl || '',
      },
    },
  };
}

export const themeService = {
  /**
   * Gets a theme by tenant ID
   * @param tenantId The tenant ID
   * @returns The theme or null if not found
   */
  async getThemeByTenant(tenantId: string): Promise<ThemeType | LegacyTheme | null> {
    const { data, error } = await supabase
      .from('tenants')
      .select('theme, theme_id')
      .eq('id', tenantId)
      .single();

    if (error) {
      console.error('Error fetching theme:', error);
      return null;
    }

    // If the tenant has a theme_id, fetch the theme from the themes table
    if (data?.theme_id) {
      return this.getThemeById(data.theme_id);
    }

    // If the tenant has a legacy theme object, convert it
    if (data?.theme && typeof data.theme === 'object') {
      const legacyTheme = data.theme as LegacyTheme;
      
      // Check if it's a legacy theme by looking for primaryColor
      if ('primaryColor' in legacyTheme) {
        return legacyTheme;
      }
      
      // It might already be a new theme format
      try {
        return validateTheme(data.theme as Theme);
      } catch (e) {
        console.error('Invalid theme format:', e);
        return null;
      }
    }

    return null;
  },

  /**
   * Sets a theme for a tenant
   * @param tenantId The tenant ID
   * @param theme The theme to set
   */
  async setThemeForTenant(tenantId: string, theme: ThemeType | LegacyTheme): Promise<void> {
    // If it's a legacy theme, store it directly
    if ('primaryColor' in theme) {
      const { error } = await supabase
        .from('tenants')
        .update({ theme })
        .eq('id', tenantId);

      if (error) {
        console.error('Error saving legacy theme:', error);
        throw new Error('Failed to save theme');
      }
      return;
    }

    // For new theme format, store in themes table and reference by ID
    try {
      const validatedTheme = validateTheme(theme);
      
      // Check if the theme already exists
      let themeId = theme.id;
      
      if (!themeId || themeId === 'default') {
        // Create a new theme
        const { data, error } = await supabase
          .from('themes')
          .insert({
            name: theme.name || 'Custom Theme',
            description: theme.description || 'Custom tenant theme',
            theme: validatedTheme,
            tenant_id: tenantId,
            is_public: false,
          })
          .select('id')
          .single();

        if (error) {
          console.error('Error creating theme:', error);
          throw new Error('Failed to create theme');
        }

        themeId = data.id;
      } else {
        // Update existing theme
        const { error } = await supabase
          .from('themes')
          .update({
            theme: validatedTheme,
            updated_at: new Date().toISOString(),
          })
          .eq('id', themeId);

        if (error) {
          console.error('Error updating theme:', error);
          throw new Error('Failed to update theme');
        }
      }

      // Update tenant to reference the theme
      const { error } = await supabase
        .from('tenants')
        .update({ theme_id: themeId })
        .eq('id', tenantId);

      if (error) {
        console.error('Error linking theme to tenant:', error);
        throw new Error('Failed to link theme to tenant');
      }
    } catch (e) {
      console.error('Error saving theme:', e);
      throw new Error('Failed to save theme: ' + (e as Error).message);
    }
  },

  /**
   * Gets a theme by ID
   * @param themeId The theme ID
   * @returns The theme or null if not found
   */
  async getThemeById(themeId: string): Promise<ThemeType | null> {
    if (themeId === 'default') {
      return defaultTheme;
    }

    const { data, error } = await supabase
      .from('themes')
      .select('theme')
      .eq('id', themeId)
      .single();

    if (error) {
      console.error('Error fetching theme:', error);
      return null;
    }

    try {
      return validateTheme(data.theme);
    } catch (e) {
      console.error('Invalid theme format:', e);
      return null;
    }
  },

  /**
   * Creates a new theme
   * @param theme The theme to create
   * @param tenantId The tenant ID
   * @returns The created theme ID
   */
  async createTheme(theme: ThemeType, tenantId: string): Promise<string> {
    try {
      const validatedTheme = validateTheme(theme);
      
      const { data, error } = await supabase
        .from('themes')
        .insert({
          name: theme.name,
          description: theme.description || '',
          theme: validatedTheme,
          tenant_id: tenantId,
          is_public: theme.isPublic || false,
        })
        .select('id')
        .single();

      if (error) {
        console.error('Error creating theme:', error);
        throw new Error('Failed to create theme');
      }

      return data.id;
    } catch (e) {
      console.error('Error creating theme:', e);
      throw new Error('Failed to create theme: ' + (e as Error).message);
    }
  },

  /**
   * Updates an existing theme
   * @param themeId The theme ID
   * @param theme The updated theme
   */
  async updateTheme(themeId: string, theme: Partial<ThemeType>): Promise<void> {
    const currentTheme = await this.getThemeById(themeId);
    if (!currentTheme) {
      throw new Error('Theme not found');
    }

    const updatedTheme = mergeThemes(currentTheme, theme);
    
    try {
      const validatedTheme = validateTheme(updatedTheme);
      
      const { error } = await supabase
        .from('themes')
        .update({
          name: updatedTheme.name,
          description: updatedTheme.description,
          theme: validatedTheme,
          is_public: updatedTheme.isPublic,
          updated_at: new Date().toISOString(),
        })
        .eq('id', themeId);

      if (error) {
        console.error('Error updating theme:', error);
        throw new Error('Failed to update theme');
      }

      // Create a history entry
      await this.createThemeHistoryEntry(themeId, validatedTheme, 'Theme updated');
    } catch (e) {
      console.error('Error updating theme:', e);
      throw new Error('Failed to update theme: ' + (e as Error).message);
    }
  },

  /**
   * Creates a theme history entry
   * @param themeId The theme ID
   * @param theme The theme snapshot
   * @param changes Description of changes
   */
  async createThemeHistoryEntry(themeId: string, theme: ThemeType, changes: string): Promise<void> {
    const { error } = await supabase
      .from('theme_history')
      .insert({
        theme_id: themeId,
        theme: theme,
        changes: changes,
        created_at: new Date().toISOString(),
        created_by: 'system', // This should be replaced with the actual user ID
      });

    if (error) {
      console.error('Error creating theme history entry:', error);
      // Don't throw here, just log the error
    }
  },

  /**
   * Gets theme history entries
   * @param themeId The theme ID
   * @returns Array of theme history entries
   */
  async getThemeHistory(themeId: string): Promise<ThemeHistory[]> {
    const { data, error } = await supabase
      .from('theme_history')
      .select('*')
      .eq('theme_id', themeId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching theme history:', error);
      return [];
    }

    return data.map(entry => ({
      id: entry.id,
      themeId: entry.theme_id,
      version: entry.version || '1.0.0',
      changes: entry.changes,
      createdBy: entry.created_by,
      createdAt: new Date(entry.created_at),
      theme: entry.theme,
    }));
  },

  /**
   * Deletes a theme
   * @param themeId The theme ID
   */
  async deleteTheme(themeId: string): Promise<void> {
    // First check if any tenants are using this theme
    const { data, error: checkError } = await supabase
      .from('tenants')
      .select('id')
      .eq('theme_id', themeId);

    if (checkError) {
      console.error('Error checking theme usage:', checkError);
      throw new Error('Failed to check theme usage');
    }

    if (data && data.length > 0) {
      throw new Error('Cannot delete theme that is in use by tenants');
    }

    // Delete theme history first
    const { error: historyError } = await supabase
      .from('theme_history')
      .delete()
      .eq('theme_id', themeId);

    if (historyError) {
      console.error('Error deleting theme history:', historyError);
      // Continue anyway
    }

    // Delete the theme
    const { error } = await supabase
      .from('themes')
      .delete()
      .eq('id', themeId);

    if (error) {
      console.error('Error deleting theme:', error);
      throw new Error('Failed to delete theme');
    }
  },

  /**
   * Lists themes with optional filtering
   * @param filter Optional filter criteria
   * @returns Array of themes
   */
  async listThemes(filter?: ThemeFilter): Promise<ThemeType[]> {
    let query = supabase
      .from('themes')
      .select('*');

    if (filter) {
      if (filter.isPublic !== undefined) {
        query = query.eq('is_public', filter.isPublic);
      }
      
      if (filter.tenantId) {
        query = query.eq('tenant_id', filter.tenantId);
      }
      
      if (filter.authorId) {
        query = query.eq('created_by', filter.authorId);
      }
      
      if (filter.search) {
        query = query.or(`name.ilike.%${filter.search}%,description.ilike.%${filter.search}%`);
      }
      
      if (filter.sortBy) {
        const direction = filter.sortDirection || 'desc';
        query = query.order(filter.sortBy, { ascending: direction === 'asc' });
      } else {
        query = query.order('updated_at', { ascending: false });
      }
    } else {
      query = query.order('updated_at', { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error listing themes:', error);
      return [];
    }

    return data.map(item => validateTheme(item.theme));
  },

  /**
   * Gets theme statistics
   * @param themeId The theme ID
   * @returns Theme statistics
   */
  async getThemeStats(themeId: string): Promise<ThemeStats | null> {
    const { data, error } = await supabase
      .from('theme_stats')
      .select('*')
      .eq('theme_id', themeId)
      .single();

    if (error) {
      console.error('Error fetching theme stats:', error);
      return null;
    }

    return {
      themeId: data.theme_id,
      downloads: data.downloads || 0,
      rating: data.rating || 0,
      ratingCount: data.rating_count || 0,
      usageCount: data.usage_count || 0,
      updatedAt: new Date(data.updated_at),
    };
  },

  /**
   * Rates a theme
   * @param themeId The theme ID
   * @param userId The user ID
   * @param rating The rating (1-5)
   * @param comment Optional comment
   */
  async rateTheme(themeId: string, userId: string, rating: number, comment?: string): Promise<void> {
    // Validate rating
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }

    // Check if user has already rated this theme
    const { data: existingRating, error: checkError } = await supabase
      .from('theme_ratings')
      .select('id')
      .eq('theme_id', themeId)
      .eq('user_id', userId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "No rows returned"
      console.error('Error checking existing rating:', checkError);
      throw new Error('Failed to check existing rating');
    }

    if (existingRating) {
      // Update existing rating
      const { error } = await supabase
        .from('theme_ratings')
        .update({
          rating,
          comment,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingRating.id);

      if (error) {
        console.error('Error updating rating:', error);
        throw new Error('Failed to update rating');
      }
    } else {
      // Create new rating
      const { error } = await supabase
        .from('theme_ratings')
        .insert({
          theme_id: themeId,
          user_id: userId,
          rating,
          comment,
          created_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Error creating rating:', error);
        throw new Error('Failed to create rating');
      }
    }

    // Update theme stats
    await this.updateThemeStats(themeId);
  },

  /**
   * Updates theme statistics
   * @param themeId The theme ID
   */
  async updateThemeStats(themeId: string): Promise<void> {
    // Get all ratings for this theme
    const { data: ratings, error: ratingsError } = await supabase
      .from('theme_ratings')
      .select('rating')
      .eq('theme_id', themeId);

    if (ratingsError) {
      console.error('Error fetching ratings:', ratingsError);
      return;
    }

    // Calculate average rating
    const ratingCount = ratings.length;
    const averageRating = ratingCount > 0
      ? ratings.reduce((sum, item) => sum + item.rating, 0) / ratingCount
      : 0;

    // Get usage count
    const { data: tenants, error: tenantsError } = await supabase
      .from('tenants')
      .select('id')
      .eq('theme_id', themeId);

    if (tenantsError) {
      console.error('Error fetching tenant count:', tenantsError);
      return;
    }

    const usageCount = tenants?.length || 0;

    // Update stats
    const { error: updateError } = await supabase
      .from('theme_stats')
      .upsert({
        theme_id: themeId,
        rating: averageRating,
        rating_count: ratingCount,
        usage_count: usageCount,
        updated_at: new Date().toISOString(),
      });

    if (updateError) {
      console.error('Error updating theme stats:', updateError);
    }
  },

  /**
   * Converts a theme to CSS variables
   * @param theme The theme to convert
   * @returns CSS string
   */
  themeToCSS(theme: ThemeType): string {
    return themeToCSS(theme);
  },

  /**
   * Converts a legacy theme to the new format
   * @param legacyTheme The legacy theme
   * @returns The converted theme
   */
  convertLegacyTheme,
};
