export interface UserProfile {
    theme?: 'light' | 'dark';
    id: string;
    email: string;
    full_name: string | null;
    avatar_url: string | null;
    role: 'user' | 'admin' | 'superadmin' | 'Platform Admin';
    is_public: boolean;
    allows_messages: boolean;
    professional_background?: string;
    social_links?: Record<string, string>;
    settings?: Record<string, any>;
    setup_progress?: {
        current_step: string;
        completed_steps: string[];
        form_data: Record<string, any>;
        last_updated?: string;
    };
}
/**
 * User interface matching the new users table schema
 */
export interface User {
    id: string;
    email: string;
    company_id?: string | null;
    full_name?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: 'active' | 'inactive' | 'suspended' | 'pending_verification';
    email_verified?: boolean;
    phone?: string | null;
    created_at: string;
    updated_at: string;
    last_login_at?: string | null;
    metadata?: Record<string, any>;
    setup_progress?: {
        current_step: string;
        completed_steps: string[];
        form_data: Record<string, any>;
        last_updated?: string;
    };
    role?: string;
    is_public?: boolean;
    allows_messages?: boolean;
    professional_background?: string;
    social_links?: Record<string, string>;
}
export interface FeatureFlags {
    [key: string]: {
        enabled: boolean;
        visible: boolean;
    };
}
export interface UserLearningProfile {
    user_id: string;
    learning_style_preference?: string | null;
    preferred_content_types?: string[] | null;
    pace_preference?: number | null;
    engagement_level?: number | null;
    skill_gaps?: Record<string, any> | null;
    preferences_payload?: Record<string, any> | null;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=profile.types.d.ts.map