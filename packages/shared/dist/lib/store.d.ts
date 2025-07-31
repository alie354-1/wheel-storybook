import { UserProfile } from './services/profile/types';
export interface FeatureFlags {
    [key: string]: {
        enabled: boolean;
        visible: boolean;
    };
}
interface AuthState {
    user: UserProfile | null;
    profile: UserProfile | null;
    featureFlags: FeatureFlags;
    setUser: (user: UserProfile | null) => void;
    setProfile: (profile: UserProfile | null) => void;
    setFeatureFlags: (flags: Partial<FeatureFlags>) => void;
    fetchProfile: (userId: string) => Promise<void>;
    updateSetupProgress: (progress: any) => Promise<void>;
    clearAuth: () => void;
}
export declare const useAuthStore: import('zustand').UseBoundStore<import('zustand').StoreApi<AuthState>>;
interface IdeaPlaygroundState {
    currentCanvasId: string | null;
    currentIdeaId: string | null;
    isGeneratingIdeas: boolean;
    setCurrentCanvasId: (id: string | null) => void;
    setCurrentIdeaId: (id: string | null) => void;
    setIsGeneratingIdeas: (isGenerating: boolean) => void;
}
export declare const useIdeaPlaygroundStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IdeaPlaygroundState>>;
interface UIState {
    sidebarOpen: boolean;
    darkMode: boolean;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebar: () => void;
    setDarkMode: (enabled: boolean) => void;
    toggleDarkMode: () => void;
}
export declare const useUIStore: import('zustand').UseBoundStore<import('zustand').StoreApi<UIState>>;
export {};
//# sourceMappingURL=store.d.ts.map