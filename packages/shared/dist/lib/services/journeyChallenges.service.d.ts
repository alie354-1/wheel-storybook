import { JourneyChallenge, challenge_status, CompanyChallengeProgress } from '../types/journey-challenges.types';
/**
 * JourneyChallengesService
 *
 * Service for managing journey challenges, progress tracking, and related functionality.
 */
export declare class JourneyChallengesService {
    /**
     * Fetches all journey phases
     */
    static getPhases(): Promise<any[]>;
    /**
     * Fetches challenges, optionally filtered by phase
     */
    static getChallenges(phaseId?: string): Promise<any[]>;
    /**
     * Fetches a single challenge by ID
     */
    static getChallenge(challengeId: string): Promise<JourneyChallenge>;
    /**
     * Fetches a company's progress on all challenges
     */
    static getCompanyProgress(companyId: string): Promise<Record<string, CompanyChallengeProgress>>;
    /**
     * Updates a challenge's status for a company
     */
    static updateChallengeStatus(companyId: string, challengeId: string, status: challenge_status, notes?: string): Promise<void>;
    /**
     * Fetches tool recommendations for a challenge
     */
    static getChallengeTools(challengeId: string): Promise<any[]>;
    /**
     * Creates a new challenge
     */
    static createChallenge(challenge: Partial<JourneyChallenge>): Promise<JourneyChallenge>;
    /**
     * Updates an existing challenge
     */
    static updateChallenge(challengeId: string, updates: Partial<JourneyChallenge>): Promise<JourneyChallenge>;
    /**
     * Fetches summary metrics for a company's journey progress
     */
    static getCompanyProgressSummary(companyId: string): Promise<{
        total_challenges: number;
        completed_challenges: number;
        in_progress_challenges: number;
        skipped_challenges: number;
        not_started_challenges: number;
        phases: Record<string, {
            total: number;
            completed: number;
            in_progress: number;
            skipped: number;
            not_started: number;
        }>;
    }>;
}
//# sourceMappingURL=journeyChallenges.service.d.ts.map