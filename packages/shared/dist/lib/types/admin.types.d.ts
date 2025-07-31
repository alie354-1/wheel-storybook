export interface Phase {
    id: string;
    name: string;
    description?: string;
    order_index: number;
    created_at?: string;
    updated_at?: string;
}
export interface Domain {
    id: string;
    name: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
}
export interface Step {
    id: string;
    name: string;
    description?: string;
    primary_phase_id: string;
    primary_domain_id: string;
    domain_id?: string;
    created_at?: string;
    updated_at?: string;
    phase?: {
        id: string;
        name: string;
    };
    domain?: {
        id: string;
        name: string;
    };
}
export interface Task {
    id: string;
    name: string;
    description?: string;
    step_id: string;
    domain_id?: string;
    phase_id?: string;
    created_at?: string;
    updated_at?: string;
}
export interface Tool {
    id: string;
    name: string;
    description?: string;
    category?: string;
    created_at?: string;
    updated_at?: string;
    claimed_by?: string;
    ownership_status?: 'unclaimed' | 'claimed' | 'verified';
    owner_id?: string;
    claimed_at?: string;
    owner?: {
        email?: string;
    };
}
export interface ToolRecommendation {
    canonical_step_id: string;
    tool_id: string;
    recommendation_type: string;
    priority_rank: number;
    recommendation_reason?: string;
    created_by?: string;
    updated_by?: string;
    created_at?: string;
    updated_at?: string;
    tool?: {
        id: string;
        name: string;
    };
    step?: {
        id: string;
        name: string;
    };
}
export interface ImportExportJob {
    id: string;
    type: 'import' | 'export';
    entity_type: 'steps' | 'tasks' | 'tools';
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
    created_at: string;
    completed_at?: string;
    created_by: string;
}
//# sourceMappingURL=admin.types.d.ts.map