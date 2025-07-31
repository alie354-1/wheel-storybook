/**
 * Multi-Persona Profile System Type Definitions
 *
 * This file contains all type definitions for the multi-persona profile system,
 * enabling users to maintain separate professional identities within the platform.
 */
/*** CORE IDENTITY MODULE ***/
/**
 * Core identity information shared across all personas
 */
export interface CoreIdentity {
    id: string;
    email: string;
    secondary_emails?: string[];
    full_name: string | null;
    display_name?: string;
    avatar_url?: string | null;
    bio?: string;
    pronouns?: string;
    verified: boolean;
    account_created_at: string;
    last_active_at?: string;
    locale?: string;
    timezone?: string;
    accessibility_needs?: string[];
    account_status: 'active' | 'inactive' | 'suspended' | 'deleted';
}
/*** PROFESSIONAL IDENTITY MODULE ***/
/**
 * Professional identity information
 */
export interface ProfessionalIdentity {
    title?: string;
    industry?: string;
    secondary_industries?: string[];
    role_category?: RoleCategory;
    role_subcategory?: string;
    skills?: Skill[];
    expertise_areas?: string[];
    experience_level?: ExperienceLevel;
    certifications?: Certification[];
    education?: Education[];
    work_history?: WorkExperience[];
    founding_history?: FoundingExperience[];
    mentorship_status?: 'seeking' | 'offering' | 'both' | 'none';
    collaboration_interests?: string[];
    investment_interests?: InvestmentInterest[];
    service_offerings?: ServiceOffering[];
}
export declare enum RoleCategory {
    FOUNDER = "FOUNDER",
    COMPANY_MEMBER = "COMPANY_MEMBER",
    SERVICE_PROVIDER = "SERVICE_PROVIDER",
    INVESTOR = "INVESTOR",
    ADVISOR = "ADVISOR",
    COMMUNITY_MEMBER = "COMMUNITY_MEMBER",
    CUSTOM = "CUSTOM"
}
export declare enum ExperienceLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    EXPERT = "EXPERT"
}
export interface Skill {
    name: string;
    proficiency: ExperienceLevel;
    years_experience?: number;
    last_used?: string;
}
export interface Certification {
    name: string;
    issuer: string;
    date_earned: string;
    expiration_date?: string;
    verification_url?: string;
}
export interface Education {
    institution: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date?: string;
    achievements?: string[];
}
export interface WorkExperience {
    company: string;
    title: string;
    description?: string;
    start_date: string;
    end_date?: string;
    is_current: boolean;
    achievements?: string[];
    references?: Reference[];
}
export interface Reference {
    name: string;
    title?: string;
    company?: string;
    contact?: string;
    relationship: string;
}
export interface FoundingExperience {
    company_name: string;
    industry: string;
    role: string;
    start_date: string;
    end_date?: string;
    current_status: 'operating' | 'acquired' | 'merged' | 'closed';
    funding_raised?: number;
    exit_valuation?: number;
    team_size?: number;
    description?: string;
}
export interface InvestmentInterest {
    stage: string[];
    amount_range: {
        min?: number;
        max?: number;
    };
    industries: string[];
    thesis?: string;
}
export interface ServiceOffering {
    category: string;
    description: string;
    expertise_level: ExperienceLevel;
    rate_type: 'hourly' | 'project' | 'retainer';
    availability: 'part_time' | 'full_time' | 'contract';
}
/*** NETWORK & SOCIAL MODULE ***/
/**
 * Network and social information
 */
export interface NetworkIdentity {
    connections?: Connection[];
    connection_groups?: Group[];
    followers_count?: number;
    following_count?: number;
    blocked_users?: string[];
    social_links?: SocialLink[];
    public_visibility?: Visibility;
    contact_preferences?: ContactPreferences;
    endorsements?: Endorsement[];
    testimonials?: Testimonial[];
    community_roles?: string[];
    contributions?: Contribution[];
    reputation_score?: number;
    karma_points?: number;
    badges?: Badge[];
}
export interface Connection {
    user_id: string;
    relationship: 'colleague' | 'mentor' | 'mentee' | 'investor' | 'partner' | 'other';
    connected_at: string;
    notes?: string;
}
export interface Group {
    name: string;
    members: string[];
    description?: string;
}
export interface SocialLink {
    platform: string;
    url: string;
    username?: string;
    verified: boolean;
}
export interface Visibility {
    profile_discoverable: boolean;
    show_email: boolean;
    show_skills: boolean;
    show_experience: boolean;
    show_education: boolean;
    show_investments: boolean;
    show_services: boolean;
    show_connections: boolean;
}
export interface ContactPreferences {
    allow_direct_messages: boolean;
    allow_connection_requests: boolean;
    allow_meeting_requests: boolean;
    preferred_contact_method?: 'email' | 'platform' | 'phone';
    response_time_expectation?: string;
}
export interface Endorsement {
    skill: string;
    endorsed_by: string;
    endorsed_at: string;
    strength?: ExperienceLevel;
}
export interface Testimonial {
    content: string;
    author_id: string;
    created_at: string;
    relationship: string;
    is_public: boolean;
}
export interface Contribution {
    type: 'article' | 'event' | 'resource' | 'comment' | 'question' | 'answer';
    id: string;
    created_at: string;
    engagement_metrics?: {
        views?: number;
        likes?: number;
        comments?: number;
        shares?: number;
    };
}
export interface Badge {
    id: string;
    name: string;
    description: string;
    icon_url: string;
    awarded_at: string;
    category: 'achievement' | 'participation' | 'expertise' | 'special';
}
/*** COMPANY AFFILIATION MODULE ***/
/**
 * Company affiliation information
 */
export interface CompanyAffiliations {
    primary_company_id?: string;
    primary_company_role?: string;
    primary_company_title?: string;
    primary_company_join_date?: string;
    companies?: CompanyAssociation[];
    past_companies?: CompanyAssociation[];
    reports_to?: string;
    direct_reports?: string[];
    team_id?: string;
    department?: string;
    employee_id?: string;
    access_level?: string;
    authorized_features?: string[];
}
export interface CompanyAssociation {
    company_id: string;
    role: string;
    title?: string;
    relationship_type: 'employee' | 'founder' | 'advisor' | 'investor' | 'board' | 'contractor';
    start_date: string;
    end_date?: string;
    ownership_stake?: number;
    is_public: boolean;
}
/*** PROJECT CONTEXT MODULE ***/
/**
 * Current project context information
 */
export interface ProjectContext {
    current_startup_stage?: 'ideation' | 'validation' | 'early_development' | 'mvp' | 'launch' | 'growth';
    current_company_valuation?: number;
    current_funding_round?: string;
    funding_status?: 'bootstrapped' | 'pre-seed' | 'seed' | 'series_a' | 'series_b' | 'series_c' | 'profitable';
    personal_goals?: Goal[];
    current_okrs?: OKR[];
    kpis_tracked?: KPI[];
    milestones?: Milestone[];
    current_challenges?: string[];
    areas_seeking_help?: string[];
    current_priorities?: Priority[];
}
export interface Goal {
    description: string;
    category: 'professional' | 'business' | 'personal' | 'learning';
    target_date?: string;
    progress?: number;
    status: 'not_started' | 'in_progress' | 'completed' | 'deferred';
}
export interface OKR {
    objective: string;
    key_results: {
        description: string;
        target: number;
        current: number;
        unit: string;
    }[];
    time_frame: string;
    status: 'on_track' | 'at_risk' | 'off_track' | 'completed';
}
export interface KPI {
    name: string;
    description?: string;
    current_value: number;
    target_value: number;
    unit: string;
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
}
export interface Milestone {
    name: string;
    description?: string;
    due_date: string;
    status: 'upcoming' | 'in_progress' | 'completed' | 'missed';
    associated_goals?: string[];
}
export interface Priority {
    task: string;
    importance: 'critical' | 'high' | 'medium' | 'low';
    urgency: 'immediate' | 'this_week' | 'this_month' | 'this_quarter';
    status: 'not_started' | 'in_progress' | 'blocked' | 'completed';
}
/*** AI & PERSONALIZATION MODULE ***/
/**
 * AI personalization information
 */
export interface AIPersonalization {
    communication_style_preference?: 'detailed' | 'concise' | 'visual' | 'technical' | 'simple';
    content_interests?: string[];
    content_format_preferences?: ('text' | 'video' | 'audio' | 'interactive')[];
    interaction_history?: {
        total_conversations?: number;
        frequent_topics?: string[];
        favorite_tools?: string[];
        saved_prompts?: SavedPrompt[];
    };
    learning_path?: {
        current_focus?: string;
        completed_topics?: string[];
        skill_goals?: string[];
        preferred_learning_style?: string;
    };
    feature_usage?: Record<string, {
        last_used?: string;
        usage_count?: number;
        proficiency?: 'novice' | 'intermediate' | 'advanced';
    }>;
    content_engagement?: {
        clicked_topics?: Record<string, number>;
        time_spent?: Record<string, number>;
        favorited_items?: string[];
    };
}
export interface SavedPrompt {
    id: string;
    name: string;
    content: string;
    tags?: string[];
    created_at: string;
    last_used_at?: string;
    usage_count: number;
}
/*** BILLING & COMPLIANCE MODULE ***/
/**
 * Billing and compliance information
 */
export interface BillingCompliance {
    subscription_tier?: 'free' | 'pro' | 'business' | 'enterprise';
    subscription_start_date?: string;
    subscription_renewal_date?: string;
    billing_cycle?: 'monthly' | 'annual' | 'quarterly';
    payment_method_id?: string;
    usage_metrics?: {
        api_calls?: number;
        storage_used?: number;
        premium_features_used?: string[];
    };
    plan_limits?: {
        max_projects?: number;
        max_storage?: number;
        max_collaborators?: number;
    };
    terms_accepted?: {
        version: string;
        date_accepted: string;
        ip_address?: string;
    };
    data_processing_consents?: Record<string, {
        consented: boolean;
        date: string;
    }>;
    gdpr_requests?: {
        data_export?: {
            requested_at: string;
            fulfilled_at?: string;
            status: 'pending' | 'processing' | 'completed' | 'denied';
        };
        data_deletion?: {
            requested_at: string;
            fulfilled_at?: string;
            status: 'pending' | 'processing' | 'completed' | 'denied';
        };
    };
}
/*** SYSTEM & METADATA MODULE ***/
/**
 * System and metadata information
 */
export interface SystemMetadata {
    profile_version: number;
    last_updated: string;
    update_history?: {
        timestamp: string;
        fields_changed: string[];
        updated_by: 'user' | 'system' | 'admin';
    }[];
    security_level?: 'standard' | 'enhanced' | 'maximum';
    two_factor_enabled: boolean;
    last_password_change?: string;
    login_history?: {
        timestamp: string;
        ip_address: string;
        device_info: string;
        location?: string;
    }[];
    is_beta_tester?: boolean;
    feature_flags?: Record<string, boolean>;
    experiment_groups?: string[];
    referral_code?: string;
    referred_by?: string;
    legacy_user_id?: string;
    imported_from?: string;
    import_date?: string;
}
/*** MULTI-PERSONA SYSTEM ***/
/**
 * Complete user profile with multiple personas
 */
export interface UserProfile {
    core: CoreIdentity;
    active_persona_id?: string;
    system: SystemMetadata;
    global_settings?: {
        default_persona_id?: string;
        auto_switch_personas?: boolean;
        cross_persona_notifications?: boolean;
    };
}
/**
 * Individual persona representing a specific role or identity
 */
export interface Persona {
    id: string;
    user_id: string;
    name: string;
    type: 'founder' | 'service_provider' | 'company_member' | 'investor' | 'advisor' | 'community' | 'custom';
    icon?: string;
    is_public: boolean;
    is_active: boolean;
    created_at: string;
    last_used_at?: string;
    professional?: ProfessionalIdentity;
    network?: NetworkIdentity;
    company_affiliations?: CompanyAffiliations;
    project_context?: ProjectContext;
    personalization?: AIPersonalization;
    billing?: BillingCompliance;
    visibility_settings: {
        discoverable_as: ('founder' | 'service_provider' | 'company_member' | 'investor' | 'advisor')[];
        visible_to: ('public' | 'connections' | 'specific_companies' | 'specific_users')[];
        hidden_fields: string[];
        specific_users?: string[];
        company_specific_views?: {
            company_id: string;
            visible_fields: string[];
            hidden_fields: string[];
        }[];
    };
}
/*** CONTEXT SWITCHING SYSTEM ***/
/**
 * Rules and history for context-based persona switching
 */
export interface PersonaContextSwitching {
    auto_switch_rules?: {
        context: 'url_path' | 'company_view' | 'feature_usage' | 'time_of_day' | 'referring_site';
        condition: string;
        switch_to_persona_id: string;
    }[];
    context_defaults?: {
        dashboard_persona_id?: string;
        messaging_persona_id?: string;
        directory_persona_id?: string;
        company_specific?: {
            company_id: string;
            persona_id: string;
        }[];
    };
    switching_history?: {
        timestamp: string;
        from_persona_id: string;
        to_persona_id: string;
        trigger: 'manual' | 'auto' | 'rule';
        context?: string;
    }[];
}
/*** ONBOARDING STATE ***/
/**
 * Onboarding state for a specific persona
 */
export interface OnboardingState {
    id: string;
    user_id: string;
    persona_id: string;
    current_step: string;
    completed_steps: string[];
    form_data: Record<string, any>;
    is_complete: boolean;
    last_updated: string;
    metrics?: {
        step_completion_times?: Record<string, string>;
        total_time_spent?: number;
        completion_date?: string;
    };
}
/*** APP SETTINGS (SEPARATED FROM PROFILE) ***/
/**
 * Application settings separated from user profile
 */
export interface AppSettings {
    user_id: string;
    theme: 'light' | 'dark' | 'system';
    notifications: {
        email: boolean;
        push: boolean;
        inApp: boolean;
        digest: boolean;
    };
    display: {
        compactView: boolean;
        showTips: boolean;
        cardSize: 'small' | 'medium' | 'large';
    };
    features: Record<string, boolean>;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=multi-persona-profile.types.d.ts.map