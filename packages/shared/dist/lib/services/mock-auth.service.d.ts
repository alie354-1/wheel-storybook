import { User } from '@supabase/supabase-js';
export declare class MockAuthService {
    private mockUser;
    constructor();
    signIn(): Promise<{
        user: User | null;
        error: Error | null;
    }>;
    signOut(): Promise<{
        error: Error | null;
    }>;
    getSession(): Promise<{
        data: {
            session: {
                user: User;
            };
        };
        error: null;
    }>;
    getUser(): Promise<{
        data: {
            user: User;
        };
        error: null;
    }>;
    refreshSession(): Promise<{
        data: {
            session: {
                user: User;
            };
        };
        error: null;
    }>;
    onAuthStateChange(callback: (event: string, session: any) => void): {
        data: {
            subscription: {
                unsubscribe: () => void;
            };
        };
    };
}
export declare const mockAuthService: MockAuthService;
//# sourceMappingURL=mock-auth.service.d.ts.map