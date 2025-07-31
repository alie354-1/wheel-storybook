import { BaseContextProvider } from './base-context.provider';
import { LLMRequestContext } from './interface';
/**
 * Company information for context enrichment
 */
export interface CompanyInfo {
    name?: string;
    industry?: string;
    size?: string;
    stage?: string;
    products?: string[];
    mission?: string;
    vision?: string;
    values?: string[];
    targetAudience?: string[];
    competitors?: string[];
}
/**
 * Context provider that enriches prompts with company information
 */
export declare class CompanyContextProvider extends BaseContextProvider {
    private companyInfo;
    constructor(companyInfo?: CompanyInfo);
    /**
     * Update company information
     */
    updateCompanyInfo(companyInfo: Partial<CompanyInfo>): void;
    /**
     * Check if this provider can handle the given context
     * Requires some company information to be present
     */
    canHandle(context: LLMRequestContext): boolean;
    /**
     * Process and enrich context with company information
     */
    processContext(context: LLMRequestContext): LLMRequestContext;
}
//# sourceMappingURL=company-context.provider.d.ts.map