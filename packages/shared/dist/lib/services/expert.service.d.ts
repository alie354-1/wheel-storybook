import { ExpertProfile, ExpertEndorsement, ExpertResponse } from '../types/community.types';
/**
 * Expert Service
 *
 * Provides methods for managing expert profiles, endorsements, and expert responses.
 * Fixed version v4 that adds the ability to get expert profiles by ID
 */
declare class ExpertService {
    /**
     * Get an expert profile by user ID
     *
     * @param userId The ID of the user
     * @returns The expert profile or null if not found
     */
    getExpertProfile(userId: string): Promise<ExpertProfile | null>;
    /**
     * Get an expert profile by profile ID
     *
     * @param profileId The ID of the expert profile
     * @returns The expert profile or null if not found
     */
    getExpertProfileById(profileId: string): Promise<ExpertProfile | null>;
    /**
     * Create or update an expert profile
     *
     * @param profile The expert profile data
     * @returns The created or updated expert profile
     */
    upsertExpertProfile(profile: Partial<ExpertProfile>): Promise<ExpertProfile>;
    /**
     * Delete an expert profile
     *
     * @param userId The ID of the user
     * @returns True if successful, false otherwise
     */
    deleteExpertProfile(userId: string): Promise<boolean>;
    /**
     * Get endorsements for an expert
     *
     * @param expertId The ID of the expert
     * @returns Array of endorsements
     */
    getExpertEndorsements(expertId: string): Promise<ExpertEndorsement[]>;
    /**
     * Add an endorsement for an expert
     *
     * @param endorsement The endorsement data
     * @returns The created endorsement
     */
    addEndorsement(endorsement: Partial<ExpertEndorsement>): Promise<ExpertEndorsement>;
    /**
     * Update an endorsement
     *
     * @param endorsementId The ID of the endorsement
     * @param updates The updates to apply
     * @returns The updated endorsement
     */
    updateEndorsement(endorsementId: string, updates: Partial<ExpertEndorsement>): Promise<ExpertEndorsement>;
    /**
     * Delete an endorsement
     *
     * @param endorsementId The ID of the endorsement
     * @returns True if successful, false otherwise
     */
    deleteEndorsement(endorsementId: string): Promise<boolean>;
    /**
     * Get expert responses for a thread
     *
     * @param threadId The ID of the thread
     * @returns Array of expert responses
     */
    getExpertResponsesForThread(threadId: string): Promise<ExpertResponse[]>;
    /**
     * Get expert response for a reply
     *
     * @param replyId The ID of the reply
     * @returns The expert response or null if not found
     */
    getExpertResponseForReply(replyId: string): Promise<ExpertResponse | null>;
    /**
     * Mark a reply as an expert response
     *
     * @param expertResponse The expert response data
     * @returns The created expert response
     */
    markAsExpertResponse(expertResponse: Partial<ExpertResponse>): Promise<ExpertResponse>;
    /**
     * Remove expert response status from a reply
     *
     * @param replyId The ID of the reply
     * @returns True if successful, false otherwise
     */
    removeExpertResponse(replyId: string): Promise<boolean>;
    /**
     * Verify an expert response
     *
     * @param responseId The ID of the expert response
     * @param verifierId The ID of the verifier
     * @returns The updated expert response
     */
    verifyExpertResponse(responseId: string, verifierId: string): Promise<ExpertResponse>;
    /**
     * Dispute an expert response
     *
     * @param responseId The ID of the expert response
     * @param verifierId The ID of the verifier
     * @returns The updated expert response
     */
    disputeExpertResponse(responseId: string, verifierId: string): Promise<ExpertResponse>;
    /**
     * Get top experts by endorsement count
     *
     * @param limit The maximum number of experts to return
     * @returns Array of expert profiles with endorsement counts
     */
    getTopExperts(limit?: number): Promise<any[]>;
    /**
     * Get expertise areas with counts
     *
     * @param limit The maximum number of areas to return
     * @returns Array of expertise areas with counts
     */
    getExpertiseAreas(limit?: number): Promise<any[]>;
}
export declare const expertService: ExpertService;
export {};
//# sourceMappingURL=expert.service.d.ts.map