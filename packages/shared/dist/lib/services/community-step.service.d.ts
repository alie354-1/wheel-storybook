export interface CommunityStep {
    id: string;
    user_id: string;
    name: string;
    description: string;
    status: 'pending_review' | 'approved' | 'rejected';
    created_at: string;
    updated_at: string;
}
export declare const communityStepService: {
    submitStep(step: Pick<CommunityStep, "name" | "description" | "user_id">): Promise<CommunityStep>;
    getCommunitySteps(status?: CommunityStep["status"]): Promise<CommunityStep[]>;
    updateStepStatus(id: string, status: "approved" | "rejected"): Promise<CommunityStep>;
};
//# sourceMappingURL=community-step.service.d.ts.map