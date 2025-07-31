/**
 * Interface for connection requests between users and experts
 */
export interface ConnectRequest {
    id: string;
    requester_id: string;
    expert_id: string;
    message?: string;
    expertise_area?: string;
    status: 'pending' | 'accepted' | 'declined';
    created_at: string;
    updated_at: string;
    expert_name?: string;
    expert_avatar_url?: string;
    requester_name?: string;
    requester_avatar_url?: string;
}
/**
 * Service for managing connection requests between users and experts
 * Fixed version that handles foreign key constraints properly
 */
export declare const connectService: {
    /**
     * Create a new connection request
     * @param data The connection request data
     * @returns The created connection request
     */
    createConnectRequest(data: Omit<ConnectRequest, "id" | "status" | "created_at" | "updated_at">): Promise<ConnectRequest | null>;
    /**
     * Get connection requests for an expert
     * @param expertId The expert's ID
     * @param status Optional status filter
     * @returns Array of connection requests
     */
    getConnectRequestsByExpert(expertId: string, status?: string): Promise<ConnectRequest[]>;
    /**
     * Get connection requests for a user
     * @param userId The user's ID
     * @param status Optional status filter
     * @returns Array of connection requests
     */
    getConnectRequestsByUser(userId: string, status?: string): Promise<ConnectRequest[]>;
    /**
     * Get a specific connection request by ID
     * @param requestId The connection request ID
     * @returns The connection request
     */
    getConnectRequestById(requestId: string): Promise<ConnectRequest | null>;
    /**
     * Update the status of a connection request
     * @param requestId The connection request ID
     * @param updates The updates to apply
     * @returns The updated connection request
     */
    updateConnectRequestStatus(requestId: string, updates: {
        status: "accepted" | "declined";
    }): Promise<ConnectRequest | null>;
    /**
     * Check if a connection exists between a user and an expert
     * @param userId The user's ID
     * @param expertId The expert's ID
     * @returns The connection request if it exists
     */
    checkConnectionExists(userId: string, expertId: string): Promise<ConnectRequest | null>;
    /**
     * Get all users connected to an expert
     * @param expertId The expert's ID
     * @returns Array of connected users
     */
    getConnectedUsers(expertId: string): Promise<any[]>;
    /**
     * Get all experts connected to a user
     * @param userId The user's ID
     * @returns Array of connected experts
     */
    getConnectedExperts(userId: string): Promise<any[]>;
    /**
     * Get all connection requests for a user (both as requester and expert)
     * @param userId The user's ID
     * @returns Array of connection requests
     */
    getUserConnectRequests(userId: string): Promise<ConnectRequest[]>;
};
//# sourceMappingURL=connect.service.d.ts.map