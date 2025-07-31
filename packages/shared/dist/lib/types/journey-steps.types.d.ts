/**
 * Type definitions for Journey Steps
 *
 * These types define the enhanced step system that preserves the improved UI
 * while using the original steps data structure.
 */
export type step_status = 'not_started' | 'in_progress' | 'completed' | 'skipped';
export type difficulty_level = 1 | 2 | 3 | 4 | 5;
export interface JourneyStep {
    id: string;
    name: string;
    description?: string;
    phase_id: string;
    difficulty_level: difficulty_level;
    estimated_time_min: number;
    estimated_time_max: number;
    key_outcomes?: string[];
    prerequisite_steps?: string[];
    order_index: number;
    created_at: string;
    updated_at: string;
    is_custom?: boolean;
}
export interface EnhancedJourneyStep extends JourneyStep {
    phase_name?: string;
    phase_color?: string;
    status?: step_status;
    completion_percentage?: number;
    tools?: ToolReference[];
    team_members?: TeamMemberReference[];
}
export interface CompanyStepProgress {
    id: string;
    company_id: string;
    step_id: string;
    status: step_status;
    notes?: string;
    completed_at?: string;
    created_at: string;
    updated_at: string;
}
export interface JourneyPhase {
    id: string;
    name: string;
    description?: string;
    order_index: number;
    color?: string;
    created_at: string;
    updated_at: string;
}
export interface ToolReference {
    id: string;
    name: string;
    description?: string;
    url?: string;
    logo_url?: string;
}
export interface TeamMemberReference {
    id: string;
    name: string;
    avatar_url?: string;
    role?: string;
}
export interface StepFilterOptions {
    phase_id?: string;
    status?: step_status;
    difficulty_min?: number;
    difficulty_max?: number;
    search_term?: string;
    only_custom?: boolean;
}
export interface EnhancedStepResponse {
    id: string;
    name: string;
    description?: string;
    phase_id: string;
    phase_name?: string;
    difficulty_level: difficulty_level;
    estimated_time_min: number;
    estimated_time_max: number;
    key_outcomes?: string[];
    tools?: ToolReference[];
    status?: step_status;
}
export interface PersonalizedToolRecommendation {
    id: string;
    name: string;
    description?: string;
    url?: string;
    logo_url?: string;
    relevance_score: number;
}
export declare const calculateStepCompletion: (step: EnhancedJourneyStep) => number;
export declare const mapChallengeToStep: (challenge: any) => EnhancedJourneyStep;
export declare const mapStepToChallenge: (step: EnhancedJourneyStep) => any;
/**
 * Types for the intelligent recommendation engine (Sprint 3)
 */
export interface StepRecommendation {
    id: string;
    name: string;
    description?: string;
    difficulty_level: difficulty_level;
    estimated_time_min: number;
    estimated_time_max: number;
    phase_id: string;
    phase_name?: string;
    relevance_score: number;
    reasoning: string[];
}
export interface RecommendationScore extends EnhancedJourneyStep {
    score: number;
    reasoning: string[];
}
export interface StepRelationship {
    source_id: string;
    source_name?: string;
    target_id: string;
    target_name?: string;
    relationship_type: 'prerequisite' | 'dependent' | 'related';
}
//# sourceMappingURL=journey-steps.types.d.ts.map