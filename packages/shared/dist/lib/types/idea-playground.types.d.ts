/**
 * Core type definitions for the Idea Playground functionality
 */
/**
 * Represents the status of an idea in its lifecycle
 */
export declare enum IdeaStatus {
    DRAFT = "draft",
    IN_PROGRESS = "in_progress",
    REFINED = "refined",
    VALIDATED = "validated",
    IMPLEMENTED = "implemented",
    ARCHIVED = "archived"
}
/**
 * Protection level for intellectual property
 */
export declare enum ProtectionLevel {
    PUBLIC = "public",
    PRIVATE = "private",
    CONFIDENTIAL = "confidential"
}
/**
 * Canvas types for idea visualization
 */
export declare enum CanvasType {
    STANDARD = "standard",
    BUSINESS_MODEL = "business-model",
    PROBLEM_SOLUTION = "problem-solution",
    CUSTOMER_JOURNEY = "customer-journey",
    VALUE_PROPOSITION = "value-proposition"
}
/**
 * Idea types for categorization
 */
export declare enum IdeaType {
    NEW_COMPANY = "new_company",
    NEW_PRODUCT = "new_product",
    NEW_FEATURE = "new_feature",
    IMPROVEMENT = "improvement"
}
/**
 * Structure matching the database schema for ideas
 * Note: Uses snake_case for database compatibility
 */
export interface IdeaPlaygroundIdea {
    id: string;
    title: string;
    description: string;
    problem_statement: string;
    solution_concept: string;
    target_audience: string[];
    unique_value: string;
    business_model: string;
    canvas_data?: Record<string, any>;
    canvas_type?: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    parent_idea_id?: string;
    refinement_feedback?: string;
    protection_level: string;
    status?: string;
    is_saved?: boolean;
    used_company_context?: boolean;
    idea_type?: string;
    company_id?: string;
    last_edited?: string;
}
/**
 * Interface for company information
 */
export interface Company {
    id: string;
    name: string;
    slug?: string;
    description?: string;
    logo_url?: string;
    website?: string;
    industry?: string;
    size?: string;
    stage?: string;
    founded_date?: string;
    is_formed?: boolean;
    created_at: string;
    updated_at: string;
    metadata?: Record<string, any>;
}
/**
 * Business model canvas sections
 */
export interface BusinessModelCanvas {
    id: string;
    ideaId: string;
    keyPartners: string[];
    keyActivities: string[];
    keyResources: string[];
    valuePropositions: string[];
    customerRelationships: string[];
    channels: string[];
    customerSegments: string[];
    costStructure: string[];
    revenueStreams: string[];
    createdAt: string;
    updatedAt: string;
}
/**
 * Value proposition canvas sections
 */
export interface ValuePropositionCanvas {
    id: string;
    ideaId: string;
    customerJobs: string[];
    customerPains: string[];
    customerGains: string[];
    products: string[];
    painRelievers: string[];
    gainCreators: string[];
    createdAt: string;
    updatedAt: string;
}
/**
 * Interface for company member (company_members table)
 */
export interface CompanyMember {
    id: string;
    company_id: string;
    user_id: string;
    title?: string;
    joined_at: string;
    invited_by?: string;
}
//# sourceMappingURL=idea-playground.types.d.ts.map