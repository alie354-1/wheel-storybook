import { default as React } from 'react';
import { UserProfile, ProfilePersona } from '../services/profile/types';
interface ProfileContextValue {
    profile: UserProfile | null;
    activePersona: ProfilePersona | null;
    loading: boolean;
    error: string | null;
    refreshProfile: () => Promise<void>;
    switchPersona: (personaId: string) => Promise<void>;
}
interface ProfileProviderProps {
    userId: string;
    children: React.ReactNode;
}
export declare function ProfileProvider({ userId, children }: ProfileProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook to use the profile context
 */
export declare function useProfile(): ProfileContextValue;
export {};
//# sourceMappingURL=ProfileContext.d.ts.map