/**
 * Supabase Client Service
 *
 * This module provides the Supabase client instance for use across the application.
 * It ensures we have a single, consistent way to access Supabase by using the
 * singleton implementation from src/lib/supabase.ts.
 */
/**
 * Supabase service to be registered in the service registry
 */
export declare const supabaseService: {
    supabase: import('@supabase/supabase-js').SupabaseClient<any, "public", any>;
    /**
     * Reset the Supabase client's auth state
     */
    resetAuth: () => Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: unknown;
    }>;
    /**
     * Check if the Supabase client is authenticated
     */
    isAuthenticated: () => Promise<{
        authenticated: boolean;
        session: import('@supabase/auth-js').Session | null;
        error?: undefined;
    } | {
        authenticated: boolean;
        error: unknown;
        session?: undefined;
    }>;
};
//# sourceMappingURL=index.d.ts.map