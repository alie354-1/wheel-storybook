import { SupabaseClient } from '@supabase/supabase-js';
declare global {
    interface Window {
        __STORYBOOK_ADDONS__?: any;
    }
}
declare function initializeSupabase(): Promise<SupabaseClient>;
export declare const supabase: SupabaseClient<any, "public", any>;
export { initializeSupabase };
/**
 * Reset the Supabase client instance
 * This is useful for testing or when we need to force a new instance
 */
export declare function resetSupabaseClient(): void;
//# sourceMappingURL=supabase.d.ts.map