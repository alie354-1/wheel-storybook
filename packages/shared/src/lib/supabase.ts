import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Extend Window interface for Storybook detection
declare global {
  interface Window {
    __STORYBOOK_ADDONS__?: any;
  }
}

// Track the Supabase client instance to ensure we only create one
let supabaseInstance: SupabaseClient | null = null;

/**
 * Check if we're in a Storybook environment
 */
function isStorybookEnvironment(): boolean {
  // Check for Vite-defined environment variable first
  if ((import.meta as any).env?.STORYBOOK === 'true') {
    console.log('Storybook environment detected via STORYBOOK env var');
    return true;
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return false;
  }

  console.log('Checking Storybook environment:', {
    port: window.location?.port,
    pathname: window.location?.pathname,
    hostname: window.location?.hostname,
    title: document?.title,
    hasStorybookAddons: typeof window.__STORYBOOK_ADDONS__ !== 'undefined'
  });

  // Multiple ways to detect Storybook environment
  const isStorybook = (
    // Check for Storybook-specific global variables
    typeof window.__STORYBOOK_ADDONS__ !== 'undefined' ||
    typeof (window as any).__STORYBOOK_STORY_STORE__ !== 'undefined' ||
    typeof (window as any).__STORYBOOK_CLIENT_API__ !== 'undefined' ||
    // Check URL patterns (Storybook typically runs on port 6006 or 6008)
    (window.location?.port === '6006' || window.location?.port === '6008') ||
    window.location?.pathname?.includes('storybook') ||
    window.location?.hostname?.includes('storybook') ||
    // Check for Storybook iframe context
    window.location?.search?.includes('storybook') ||
    // Check process environment if available
    (typeof process !== 'undefined' && process.env?.NODE_ENV === 'storybook') ||
    // Check for Storybook-specific document title
    document?.title?.includes('Storybook')
  );

  console.log('Storybook environment detected:', isStorybook);
  return isStorybook;
}

/**
 * Get the Supabase client instance (singleton pattern)
 * This ensures we only ever have one instance of the Supabase client
 * to prevent the "Multiple GoTrueClient instances detected" warning
 */
async function getSupabaseClient(): Promise<SupabaseClient> {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // Use mock client in Storybook environment
  if (isStorybookEnvironment()) {
    console.log('Using mock Supabase client for Storybook environment');
    try {
      // Use dynamic import for better compatibility
      const mockModule = await import('./supabase-mock');
      supabaseInstance = mockModule.supabase as SupabaseClient;
      return supabaseInstance;
    } catch (error) {
      console.error('Failed to load mock Supabase client:', error);
      throw new Error('Failed to load Supabase mock for Storybook environment');
    }
  }

  // Initialize the Supabase client with environment variables
  const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
  const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;

  // Better error handling for missing environment variables
  if (!supabaseUrl) {
    console.error('VITE_SUPABASE_URL is missing in environment variables');
    throw new Error('Missing Supabase URL. Please check your environment configuration.');
  }

  if (!supabaseAnonKey) {
    console.error('VITE_SUPABASE_ANON_KEY is missing in environment variables');
    throw new Error('Missing Supabase Anon Key. Please check your environment configuration.');
  }

  try {
    // Create the client with improved configuration
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'wheel-auth-storage', // Use a specific storage key to avoid conflicts
        debug: false // Disable debug logging to reduce console noise
      }
    });

    console.log('Supabase client initialized successfully');
    return supabaseInstance;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    throw new Error('Failed to initialize Supabase client. See console for details.');
  }
}

// Create a synchronous wrapper that handles the async initialization
let clientPromise: Promise<SupabaseClient> | null = null;

function getClientSync(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // For Storybook, try to use mock synchronously
  if (isStorybookEnvironment()) {
    console.log('Using mock Supabase client for Storybook environment');
    try {
      const mockModule = require('./supabase-mock');
      supabaseInstance = mockModule.supabase as SupabaseClient;
      return supabaseInstance;
    } catch (error) {
      console.error('Failed to load mock Supabase client:', error);
      // Return a minimal mock that won't break the app
      const mockClient = {
        auth: {
          user: null,
          session: null,
          signIn: () => Promise.resolve({ data: null, error: null }),
          signOut: () => Promise.resolve({ error: null }),
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
        },
        from: () => ({
          select: () => Promise.resolve({ data: [], error: null }),
          insert: () => Promise.resolve({ data: null, error: null }),
          update: () => Promise.resolve({ data: null, error: null }),
          delete: () => Promise.resolve({ data: null, error: null })
        }),
        rpc: () => Promise.resolve({ data: null, error: null })
      } as unknown as SupabaseClient;

      supabaseInstance = mockClient;
      return supabaseInstance;
    }
  }

  // For non-Storybook environments, throw an error if not initialized
  throw new Error('Supabase client not initialized. Call initializeSupabase() first.');
}

// Initialize the client asynchronously
async function initializeSupabase(): Promise<SupabaseClient> {
  if (!clientPromise) {
    clientPromise = getSupabaseClient();
  }
  return clientPromise;
}

// Export the synchronous client
export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    const client = getClientSync();
    const value = (client as any)[prop];
    return typeof value === 'function' ? value.bind(client) : value;
  }
});

// Export the async initializer
export { initializeSupabase };

/**
 * Reset the Supabase client instance
 * This is useful for testing or when we need to force a new instance
 */
export function resetSupabaseClient(): void {
  supabaseInstance = null;
  console.log('Supabase client instance reset');
}
