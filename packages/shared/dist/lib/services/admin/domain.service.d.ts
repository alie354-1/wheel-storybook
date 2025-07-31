import { Domain } from '@/lib/types/admin.types';
import { DomainStep } from '@/lib/types/domain.types';
/**
 * Get all steps for a domain.
 */
export declare function getDomainSteps(domain_id: string, company_id?: string | null): Promise<DomainStep[]>;
/**
 * Add a step to a domain.
 */
export declare function addStepToDomain(domain_id: string, step_id: string, fields?: Record<string, any>): Promise<any>;
/**
 * Remove a step from a domain.
 */
export declare function removeStepFromDomain(domain_id: string, step_id: string): Promise<any>;
/**
 * Get suggested steps for a domain using a simple algorithm.
 * In a real implementation, this would use an LLM or more sophisticated algorithm.
 */
export declare function getSuggestedStepsForDomain(domain_id: string): Promise<any>;
/**
 * LLM-powered: Suggest domains for a step using OpenAI, returning ranked suggestions with explanations.
 */
export declare const getLLMDomainSuggestionsForStep: (stepId: string, companyId: string | null) => Promise<{
    domain: any;
    score: number;
    explanation: string;
}[]>;
/**
 * Batch add steps to a domain.
 * @param domain_id The domain id.
 * @param step_ids Array of step ids to add.
 * @param fields (optional) Additional fields to set on each domain_step.
 * @returns Array of created domain_step records or throws on error.
 */
export declare function batchAddStepsToDomain(domain_id: string, step_ids: string[], fields?: Record<string, any>): Promise<any>;
export declare class DomainService {
    static list(): Promise<Domain[]>;
    static get(id: string): Promise<Domain | null>;
    static create(payload: Partial<Domain>): Promise<Domain>;
    static update(id: string, payload: Partial<Domain>): Promise<Domain>;
    static delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=domain.service.d.ts.map