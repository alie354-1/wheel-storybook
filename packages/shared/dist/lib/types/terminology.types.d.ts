/**
 * Core terminology types for the multi-tenant terminology system
 */
export type TerminologyValue = string | number | boolean | Record<string, any>;
export type TerminologyMap = {
    [key: string]: any;
    terms?: Record<string, any>;
    behaviors?: Record<string, TerminologyOverrideBehavior>;
};
export type ResolvedTerminologyMap = {
    [key: string]: any;
};
export type TerminologyEntityType = 'system' | 'partner' | 'organization' | 'company' | 'team' | 'user';
export type TerminologyOverrideBehavior = 'replace' | 'merge' | 'suggest';
export interface TerminologyEntry {
    key: string;
    value: TerminologyValue;
}
export interface DefaultTerminologyEntry extends TerminologyEntry {
    description?: string;
}
export interface PartnerTerminologyEntry extends TerminologyEntry {
    partner_id: string;
    override_behavior: TerminologyOverrideBehavior;
    created_at?: string;
    updated_at?: string;
}
export interface OrganizationTerminologyEntry extends TerminologyEntry {
    organization_id: string;
    override_behavior: TerminologyOverrideBehavior;
    created_at?: string;
    updated_at?: string;
}
export interface CompanyTerminologyEntry extends TerminologyEntry {
    company_id: string;
    override_behavior: TerminologyOverrideBehavior;
    created_at?: string;
    updated_at?: string;
}
export interface TeamTerminologyEntry extends TerminologyEntry {
    team_id: string;
    override_behavior: TerminologyOverrideBehavior;
    created_at?: string;
    updated_at?: string;
}
export interface UserTerminologyEntry extends TerminologyEntry {
    user_id: string;
    created_at?: string;
    updated_at?: string;
}
export interface JourneyTerminology {
    mainUnit: {
        singular: string;
        plural: string;
        verb?: string;
        possessive?: string;
        articleIndefinite?: string;
        articleDefinite?: string;
    };
    phaseUnit?: {
        singular: string;
        plural: string;
        possessive?: string;
        articleIndefinite?: string;
        articleDefinite?: string;
    };
    stepUnit: {
        singular: string;
        plural: string;
        verb?: string;
        possessive?: string;
        articleIndefinite?: string;
        articleDefinite?: string;
    };
    progressTerms?: {
        notStarted: string;
        inProgress: string;
        completed: string;
        skipped?: string;
        notNeeded?: string;
    };
}
export interface ToolTerminology {
    mainUnit: {
        singular: string;
        plural: string;
        verb?: string;
        possessive?: string;
        articleIndefinite?: string;
        articleDefinite?: string;
    };
    evaluationTerms?: {
        singular: string;
        plural: string;
        verb?: string;
        possessive?: string;
        articleIndefinite?: string;
        articleDefinite?: string;
    };
}
export interface SystemTerminology {
    application?: {
        name: string;
        shortName?: string;
        tagline?: string;
    };
    actions?: {
        [key: string]: string;
    };
}
export interface CompleteTerminology {
    journeyTerms?: JourneyTerminology;
    toolTerms?: ToolTerminology;
    systemTerms?: SystemTerminology;
    [key: string]: any;
}
export interface TerminologyResolutionParams {
    entityType: TerminologyEntityType;
    entityId: string;
    keys?: string[];
}
export interface TerminologySettings {
    enabled: boolean;
    abTestId?: string;
    variant?: string;
}
//# sourceMappingURL=terminology.types.d.ts.map