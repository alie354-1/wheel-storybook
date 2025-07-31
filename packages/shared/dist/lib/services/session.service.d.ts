/**
 * Interface for expert sessions
 */
export interface ExpertSession {
    id: string;
    connect_request_id: string;
    expert_id: string;
    requester_id: string;
    session_title?: string;
    session_goals?: string;
    scheduled_at: string;
    duration_minutes: number;
    status: 'scheduled' | 'completed' | 'cancelled';
    notes?: string;
    created_at: string;
    updated_at: string;
}
/**
 * Service for managing expert sessions
 */
export declare const sessionService: {
    /**
     * Create a new expert session
     * @param data The session data
     * @returns The created session
     */
    createSession(data: Omit<ExpertSession, "id" | "status" | "created_at" | "updated_at">): Promise<ExpertSession | null>;
    /**
     * Get sessions for an expert
     * @param expertId The expert's ID
     * @param status Optional status filter
     * @returns Array of sessions
     */
    getSessionsByExpert(expertId: string, status?: string): Promise<ExpertSession[]>;
    /**
     * Get upcoming sessions for an expert
     * @param expertId The expert's ID
     * @returns Array of upcoming sessions
     */
    getUpcomingSessionsByExpert(expertId: string): Promise<ExpertSession[]>;
    /**
     * Get sessions for a user
     * @param userId The user's ID
     * @param status Optional status filter
     * @returns Array of sessions
     */
    getSessionsByUser(userId: string, status?: string): Promise<ExpertSession[]>;
    /**
     * Get upcoming sessions for a user
     * @param userId The user's ID
     * @returns Array of upcoming sessions
     */
    getUpcomingSessionsByUser(userId: string): Promise<ExpertSession[]>;
    /**
     * Get a specific session by ID
     * @param sessionId The session ID
     * @returns The session
     */
    getSessionById(sessionId: string): Promise<ExpertSession | null>;
    /**
     * Update a session
     * @param sessionId The session ID
     * @param updates The updates to apply
     * @returns The updated session
     */
    updateSession(sessionId: string, updates: Partial<Omit<ExpertSession, "id" | "created_at" | "updated_at">>): Promise<ExpertSession | null>;
    /**
     * Update a session's status
     * @param sessionId The session ID
     * @param status The new status
     * @returns The updated session
     */
    updateSessionStatus(sessionId: string, status: "scheduled" | "completed" | "cancelled"): Promise<ExpertSession | null>;
    /**
     * Add notes to a session
     * @param sessionId The session ID
     * @param notes The session notes
     * @returns The updated session
     */
    addSessionNotes(sessionId: string, notes: string): Promise<ExpertSession | null>;
    /**
     * Reschedule a session
     * @param sessionId The session ID
     * @param scheduledAt The new scheduled time
     * @param durationMinutes Optional new duration
     * @returns The updated session
     */
    rescheduleSession(sessionId: string, scheduledAt: string, durationMinutes?: number): Promise<ExpertSession | null>;
    /**
     * Get all sessions for a user (both as requester and expert)
     * @param userId The user's ID
     * @returns Array of sessions with additional details
     */
    getUserSessions(userId: string): Promise<any[]>;
};
//# sourceMappingURL=session.service.d.ts.map