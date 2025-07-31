import { default as React, ReactNode } from 'react';
import { User } from '../types/profile.types.ts';
export interface AuthContextValue {
    user: User | null;
    profile: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    isInitialized: boolean;
    error: string | null;
    connectionStatus: 'connected' | 'disconnected' | 'reconnecting';
    lastSync: Date | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    signup: (email: string, password: string, metadata?: any) => Promise<void>;
    updateProfile: (userId: string, data: Partial<User>) => Promise<void>;
    refreshUser: () => Promise<void>;
    clearError: () => void;
    retry: () => Promise<void>;
    fetchProfile: (userId: string) => Promise<void>;
    signOut: () => Promise<void>;
}
export interface AuthProviderProps {
    children: ReactNode;
    loadingFallback?: ReactNode;
    unauthorizedFallback?: ReactNode;
}
/**
 * Enhanced Provider component with improved state management and error handling
 */
export declare const AuthProvider: React.FC<AuthProviderProps>;
/**
 * Hook to use the auth context
 */
export declare const useAuthContext: () => AuthContextValue;
/**
 * Main hook for using authentication throughout the app.
 * Always use this instead of direct context access.
 */
export declare const useAuth: () => AuthContextValue;
/**
 * Higher-order component that requires authentication
 * Redirects to login if user is not authenticated
 */
export declare const withAuth: <P extends object>(Component: React.ComponentType<P>) => React.FC<P>;
//# sourceMappingURL=AuthContext.d.ts.map