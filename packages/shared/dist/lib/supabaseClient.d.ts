/**
 * Supabase Client
 * Re-exports the singleton Supabase client from the main implementation
 * This ensures we only have one instance of the Supabase client throughout the application
 * to prevent the "Multiple GoTrueClient instances detected" warning
 */
export { supabase } from './supabase';
export declare const handleSupabaseError: (error: any) => any;
//# sourceMappingURL=supabaseClient.d.ts.map