export type UserRoleType = 'founder' | 'company_member' | 'service_provider';
export type CompanyStageType = 'idea_stage' | 'solid_idea' | 'existing_company';
export interface SetupProgressType {
    current_step?: string;
    completed_steps?: string[];
    form_data?: Record<string, any>;
    skipped?: boolean;
    skipped_at?: string;
}
export interface EnhancedProfileType {
    id?: number;
    user_id: string;
    primary_role?: UserRoleType;
    additional_roles?: UserRoleType[];
    company_stage?: CompanyStageType;
    industry?: string;
    skill_level?: string;
    goals?: string[];
    preferred_theme?: string;
    notification_preferences?: Record<string, boolean>;
    service_categories?: string[];
    expertise?: string[];
    onboarding_completed?: boolean;
    onboarding_completed_at?: string;
    setup_progress?: SetupProgressType;
    created_at?: string;
    updated_at?: string;
}
export interface CompanyInvitationType {
    id: number;
    company_id: string;
    code: string;
    email?: string;
    role?: string;
    status: 'active' | 'used' | 'expired';
    created_at: string;
    expires_at?: string;
    used_by?: string;
    used_at?: string;
}
export interface CompanyMembershipType {
    id: number;
    company_id: string;
    user_id: string;
    role: string;
    joined_at: string;
    companies?: {
        id: string;
        name: string;
        logo_url?: string;
        industry?: string;
        size?: string;
        stage?: string;
    };
}
//# sourceMappingURL=enhanced-profile.types.d.ts.map