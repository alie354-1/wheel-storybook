export interface NewCompanyJourney {
    id: string;
    company_id: string;
    name: string;
    created_at?: string;
    updated_at?: string;
}
export interface NewCompanyJourneyStep {
    id: string;
    journey_id: string;
    canonical_step_id?: string;
    name: string;
    description?: string;
    phase_id?: string;
    domain_id?: string;
    status: NewStepStatus;
    started_at?: string;
    completed_at?: string;
    order_index?: number;
    notes?: string;
    created_at?: string;
    updated_at?: string;
}
export interface NewStepTask {
    id: string;
    step_id: string;
    title: string;
    description?: string;
    status: string;
    priority?: string;
    due_date?: string;
    completed_at?: string;
    created_at?: string;
    updated_at?: string;
}
export type NewStepStatus = 'not_started' | 'active' | 'complete' | 'skipped';
export interface NewJourneyPhase {
    id: string;
    name: string;
    description?: string;
    order_index: number;
    color?: string;
}
export interface NewJourneyDomain {
    id: string;
    name: string;
    description?: string;
    color?: string;
}
export interface NewJourneyStep {
    id: string;
    name: string;
    description?: string;
    primary_phase_id?: string;
    primary_domain_id?: string;
    is_active: boolean;
    order_index?: number;
    journey_phases_new?: NewJourneyPhase;
    journey_domains_new?: NewJourneyDomain;
}
export type NewSuggestionPriority = 'low' | 'medium' | 'high';
export type NewDifficulty = 'easy' | 'medium' | 'hard';
export interface NewDomainProgress {
    domain_id: string;
    progress_percentage: number;
    team_involvement: TeamInvolvement;
    maturity_level: MaturityLevel;
    current_state: CurrentState;
}
export type TeamInvolvement = 'none' | 'low' | 'medium' | 'high';
export type MaturityLevel = 'initial' | 'developing' | 'defined' | 'managed' | 'optimized';
export type CurrentState = 'not_started' | 'in_progress' | 'completed' | 'on_hold';
export interface NewStepOutcome {
    id: string;
    step_id: string;
    user_id: string;
    outcome: string;
    lessons_learned?: string;
    blockers_encountered?: string;
    time_to_complete?: number;
    created_at?: string;
    time_taken_days?: number;
    confidence_level?: number;
    key_learnings?: string[];
    task_results?: any[];
    company_step_id?: string;
}
export interface NewAnonymizedOutcome {
    id: string;
    canonical_step_id: string;
    outcome: string;
    lessons_learned?: string;
    blockers_encountered?: string;
    time_to_complete?: number;
    difficulty_rating?: NewDifficulty;
    created_at?: string;
}
export interface JourneyTool {
    id: string;
    name: string;
    category: string;
    description: string;
    link: string;
    logo_url?: string;
    created_at?: string;
    updated_at?: string;
}
export interface JourneyStepToolRecommendation {
    id: string;
    canonical_step_id: string;
    tool_id: string;
    recommendation_reason: string;
    priority_rank: number;
    created_at?: string;
    tool?: JourneyTool;
}
//# sourceMappingURL=new_journey.types.d.ts.map