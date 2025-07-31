import { User } from '../types/profile.types.ts';
export declare class ProfileService {
    constructor();
    /**
     * Fetch a user profile from the users table
     */
    getProfile(userId: string): Promise<User | null>;
    /**
     * Create a new user profile in the users table
     */
    createProfile(profileData: Partial<User>): Promise<User | null>;
    /**
     * Get or create a user profile - first tries to get, then creates if not found
     */
    getOrCreateProfile(userId: string, authUserData?: any): Promise<User | null>;
    /**
     * Update a user profile in the users table
     */
    updateProfile(userId: string, updates: Partial<User>): Promise<User | null>;
    /**
     * Get all user profiles for members of a company
     */
    getCompanyProfiles(companyId: string): Promise<User[]>;
}
export declare const profileService: ProfileService;
//# sourceMappingURL=profile.service.d.ts.map