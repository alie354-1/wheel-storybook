import { ProfilePersona, ProfileSection, ProfileService, UserProfile } from './types';
/**
 * MultiPersona Profile Service Implementation
 */
export declare class MultiPersonaProfileService implements ProfileService {
    /**
     * Get a user's profile
     */
    getProfile(userId: string): Promise<UserProfile | null>;
    /**
     * Create a new profile
     */
    createProfile(profile: UserProfile): Promise<UserProfile>;
    /**
     * Update an existing profile
     */
    updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile>;
    /**
     * Get profile sections
     */
    getProfileSections(userId: string, personaId?: string): Promise<ProfileSection[]>;
    /**
     * Add a profile section
     */
    addProfileSection(section: Omit<ProfileSection, 'id'>): Promise<ProfileSection>;
    /**
     * Update a profile section
     */
    updateProfileSection(sectionId: string, updates: Partial<ProfileSection>): Promise<ProfileSection>;
    /**
     * Remove a profile section
     */
    removeProfileSection(sectionId: string): Promise<void>;
    /**
     * Get user personas
     */
    getPersonas(userId: string): Promise<ProfilePersona[]>;
    /**
     * Create a new persona
     */
    createPersona(userId: string, persona: Omit<ProfilePersona, 'id'>): Promise<ProfilePersona>;
    /**
     * Update a persona
     */
    updatePersona(personaId: string, updates: Partial<ProfilePersona>): Promise<ProfilePersona>;
    /**
     * Delete a persona
     */
    deletePersona(personaId: string): Promise<void>;
    /**
     * Set active persona
     */
    setActivePersona(userId: string, personaId: string): Promise<void>;
    /**
     * Get active persona
     */
    getActivePersona(userId: string): Promise<ProfilePersona | null>;
    /**
     * Helper method to convert social links from various formats
     */
    private convertSocialLinks;
}
export declare const profileServiceInstance: MultiPersonaProfileService;
//# sourceMappingURL=profile.service.d.ts.map