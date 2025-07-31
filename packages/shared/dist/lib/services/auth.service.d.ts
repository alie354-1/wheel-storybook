import { User } from '../types/profile.types';
/**
 * Singleton AuthService class
 * Manages authentication operations with improved error handling and retry logic
 */
declare class AuthService {
    private static instance;
    private authStatus;
    private retryCount;
    private constructor();
    /**
     * Get the singleton instance of AuthService
     */
    static getInstance(): AuthService;
    /**
     * Get the current authentication status
     */
    getAuthStatus(): string;
    /**
     * Sign in and fetch the full user record from the users table
     * Includes retry logic for transient errors
     */
    signIn(email: string, password: string, retry?: number): Promise<{
        user: User | null;
        error: Error | null;
    }>;
    /**
     * Sign out the current user with improved cleanup
     */
    signOut(): Promise<{
        error: Error | null;
    }>;
    /**
     * Force logout all users - useful for testing and resolving auth issues
     */
    forceLogoutAllUsers(): Promise<{
        success: boolean;
        error: Error | null;
    }>;
    /**
     * Clean up authentication-related storage
     */
    private cleanupAuthStorage;
    /**
     * Get the current session with error handling
     */
    getSession(): Promise<{
        data: {
            session: import('@supabase/auth-js').Session;
        };
        error: null;
    } | {
        data: {
            session: null;
        };
        error: unknown;
    }>;
    /**
     * Get the current user with error handling
     */
    getUser(): Promise<{
        data: {
            user: import('@supabase/auth-js').User;
        };
        error: null;
    } | {
        data: {
            user: null;
        };
        error: unknown;
    }>;
    /**
     * Refresh the current session with retry logic
     */
    refreshSession(retry?: number): Promise<{
        data: {
            session: any | null;
        };
        error: Error | null;
    }>;
    /**
     * Set up auth state change listener with error handling
     */
    onAuthStateChange(callback: (event: string, session: any) => void): {
        data: {
            subscription: import('@supabase/auth-js').Subscription;
        };
    } | {
        data: {
            subscription: null;
        };
        error: unknown;
    };
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth.service.d.ts.map