import { CommunityGroup, GroupMembership, CreateCommunityGroupRequest, UpdateCommunityGroupRequest, CommunityGroupFilters, PaginationParams, PaginatedResponse, GroupRole, MembershipStatus, CommunityProfileSummary } from '../types/community.types';
/**
 * Community Service
 * Handles all community-related operations
 */
export declare const communityService: {
    /**
     * Get all community groups with optional filtering and pagination
     */
    getGroups(filters?: CommunityGroupFilters, pagination?: PaginationParams): Promise<PaginatedResponse<CommunityGroup>>;
    /**
     * Get a single community group by ID or slug
     */
    getGroup(idOrSlug: string): Promise<CommunityGroup | null>;
    /**
     * Create a new community group
     */
    createGroup(groupData: CreateCommunityGroupRequest, createdBy: string): Promise<CommunityGroup>;
    /**
     * Update an existing community group
     */
    updateGroup(groupId: string, groupData: UpdateCommunityGroupRequest): Promise<CommunityGroup>;
    /**
     * Archive a community group (soft delete)
     */
    archiveGroup(groupId: string): Promise<void>;
    /**
     * Get all members of a community group
     */
    getGroupMembers(groupId: string): Promise<GroupMembership[]>;
    /**
     * Join a community group
     */
    joinGroup(groupId: string, userId: string, role?: GroupRole): Promise<GroupMembership>;
    /**
     * Leave a community group
     */
    leaveGroup(groupId: string, userId: string): Promise<void>;
    /**
     * Update membership status (approve or reject)
     */
    updateMembershipStatus(membershipId: string, newStatus: MembershipStatus): Promise<GroupMembership>;
    /**
     * Get pending membership requests for a group
     */
    getPendingMemberships(groupId: string): Promise<GroupMembership[]>;
    /**
     * Update a user's role in a community group
     */
    updateMemberRole(groupId: string, userId: string, newRole: GroupRole): Promise<GroupMembership>;
    /**
     * Check if a user is a member of a specific group
     */
    checkUserMembership(groupId: string, userId: string): Promise<{
        isMember: boolean;
        status: MembershipStatus | null;
        role: GroupRole | null;
    }>;
    /**
     * Get all groups a user is a member of
     */
    getUserGroups(userId: string): Promise<CommunityGroup[]>;
    /**
     * Get a user's community profile summary
     * This includes group memberships, achievements, and recent activity
     */
    getCommunityProfile(userId: string): Promise<CommunityProfileSummary | null>;
};
//# sourceMappingURL=community.service.d.ts.map