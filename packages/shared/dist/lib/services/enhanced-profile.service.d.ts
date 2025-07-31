import { EnhancedProfileType } from '../types/enhanced-profile.types';
declare class EnhancedProfileService {
    /**
     * Get a user's enhanced profile
     */
    getProfile(userId: string): Promise<EnhancedProfileType | null>;
    /**
     * Update a user's enhanced profile
     */
    updateProfile(userId: string, profileData: Partial<EnhancedProfileType>): Promise<boolean>;
    /**
     * Create a new enhanced profile
     */
    createProfile(profileData: EnhancedProfileType): Promise<boolean>;
    /**
     * Get a company invitation by its code
     */
    getCompanyInvitation(inviteCode: string): Promise<any | null>;
    /**
     * Get company membership details
     */
    getCompanyMembership(userId: string): Promise<any | null>;
    /**
     * Check if a user is a member of a company
     */
    isCompanyMember(userId: string): Promise<boolean>;
    /**
     * Get service categories for a service provider
     */
    getServiceCategories(userId: string): Promise<string[]>;
    /**
     * Get expertise for a service provider
     */
    getExpertise(userId: string): Promise<string[]>;
}
export declare const enhancedProfileService: EnhancedProfileService;
export {};
//# sourceMappingURL=enhanced-profile.service.d.ts.map