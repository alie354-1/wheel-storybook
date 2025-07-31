import { Persona, UserProfile, OnboardingState } from '../types/multi-persona-profile.types';
/**
 * Enhanced ProfileService for the multi-persona system
 *
 * This service handles all operations related to user profiles, personas,
 * and persona context switching.
 */
export declare class MultiPersonaProfileService {
    /**
     * Get a user's complete profile with all personas
     *
     * @param userId The user's ID
     * @returns Promise with the complete user profile or null
     */
    getProfile(userId: string): Promise<UserProfile | null>;
    /**
     * Get all personas belonging to a user
     *
     * @param userId The user's ID
     * @returns Promise with array of personas
     */
    getPersonas(userId: string): Promise<Persona[]>;
    /**
     * Get a user's currently active persona
     *
     * @param userId The user's ID
     * @returns Promise with the active persona or null
     */
    getActivePersona(userId: string): Promise<Persona | null>;
    /**
     * Get a specific persona by ID
     *
     * @param personaId The persona's ID
     * @returns Promise with the persona or null
     */
    getPersonaById(personaId: string): Promise<Persona | null>;
    /**
     * Create a new persona for a user
     *
     * @param userId The user's ID
     * @param personaData Initial data for the new persona
     * @returns Promise with the created persona or null
     */
    createPersona(userId: string, personaData: Partial<Persona>): Promise<Persona | null>;
    /**
     * Update an existing persona
     *
     * @param personaId The persona's ID
     * @param updates Updates to apply to the persona
     * @returns Promise with the updated persona or null
     */
    updatePersona(personaId: string, updates: Partial<Persona>): Promise<Persona | null>;
    /**
     * Delete a persona
     *
     * @param personaId The persona's ID
     * @returns Promise<boolean> indicating success
     */
    deletePersona(personaId: string): Promise<boolean>;
    /**
     * Set a specific persona as the active one
     *
     * @param userId The user's ID
     * @param personaId The persona to set as active
     * @returns Promise<boolean> indicating success
     */
    setActivePersona(userId: string, personaId: string): Promise<boolean>;
    /**
     * Evaluate context rules to determine if a persona switch is needed
     *
     * @param userId The user's ID
     * @param context The current context type
     * @param contextValue The current context value
     * @returns Promise with the persona ID to switch to, or null if no switch needed
     */
    evaluateContextRules(userId: string, context: string, contextValue: string): Promise<string | null>;
    /**
     * Add a new context switching rule
     *
     * @param userId The user's ID
     * @param personaId The persona to switch to
     * @param context The context type
     * @param condition The regex condition
     * @param priority The rule priority (higher = evaluated first)
     * @returns Promise<boolean> indicating success
     */
    addContextRule(userId: string, personaId: string, context: string, condition: string, priority?: number): Promise<boolean>;
    /**
     * Get onboarding state for a specific persona
     *
     * @param userId The user's ID
     * @param personaId The persona ID
     * @returns Promise with the onboarding state or null
     */
    getOnboardingState(userId: string, personaId: string): Promise<OnboardingState | null>;
    /**
     * Update onboarding state for a specific persona
     *
     * @param userId The user's ID
     * @param personaId The persona ID
     * @param updates Updates to apply to the onboarding state
     * @returns Promise with the updated state or null
     */
    updateOnboardingState(userId: string, personaId: string, updates: Partial<OnboardingState>): Promise<OnboardingState | null>;
    /**
     * Check if onboarding is complete for a specific persona
     *
     * @param userId The user's ID
     * @param personaId The persona ID
     * @returns Promise<boolean> indicating if onboarding is complete
     */
    isOnboardingComplete(userId: string, personaId: string): Promise<boolean>;
    /**
     * Check if any of the user's personas need onboarding
     *
     * @param userId The user's ID
     * @returns Promise<{needsOnboarding: boolean, personaId?: string}>
     */
    checkOnboardingNeeded(userId: string): Promise<{
        needsOnboarding: boolean;
        personaId?: string;
    }>;
    /**
     * Create a default profile for a new user
     */
    private createDefaultProfile;
    /**
     * Create a default persona for a user
     */
    private createDefaultPersona;
    /**
     * Create onboarding state for a persona
     */
    private createOnboardingState;
    /**
     * Record a persona switch for analytics and ML recommendations
     */
    private recordPersonaSwitch;
    /**
     * Get default persona data based on type
     */
    private getDefaultPersonaData;
    /**
     * Get default system metadata
     */
    private getDefaultSystemMetadata;
}
export declare const multiPersonaProfileService: MultiPersonaProfileService;
//# sourceMappingURL=multi-persona-profile.service.d.ts.map