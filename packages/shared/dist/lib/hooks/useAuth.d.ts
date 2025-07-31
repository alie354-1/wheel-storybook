import { User } from '../types/profile.types';
interface UseAuthReturn {
    user: User | null;
    profile: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
    fetchProfile: (userId: string) => Promise<void>;
    updateProfile: (userId: string, data: Partial<User>) => Promise<void>;
    signOut: () => Promise<void>;
}
/**
 * Hook for accessing authentication and user profile state
 */
export declare function useAuth(): UseAuthReturn;
export {};
//# sourceMappingURL=useAuth.d.ts.map