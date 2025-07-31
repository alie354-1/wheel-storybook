import { ScorecardCriterion } from '../../components/company/journey/ToolSelector/ScorecardBuilder';
/**
 * Get tools associated with a specific step
 *
 * Retrieves all tools that are recommended for a particular journey step
 */
export declare function getStepTools(stepId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Get personalized tool recommendations for a company and step
 *
 * This uses the enhanced database function that takes into account:
 * - Company profile and industry
 * - Step requirements and goals
 * - Company's previous tool selections
 * - Similar companies' tool choices
 */
export declare function getPersonalizedToolRecommendations(companyId: string, stepId: string): Promise<import('@supabase/postgrest-js').PostgrestResponseFailure | import('@supabase/postgrest-js').PostgrestResponseSuccess<any>>;
/**
 * Get custom tools that a company has added for a specific step
 */
export declare function getCompanyCustomTools(companyId: string, stepId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Add a custom tool for a company's step
 *
 * This allows companies to add tools that aren't in our standard database
 */
export declare function addCompanyCustomTool(companyId: string, stepId: string, tool: {
    name: string;
    url: string;
    description?: string;
    logo_url?: string;
}): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
/**
 * Save a scorecard definition for evaluating tools
 *
 * Scorecards provide criteria for comparing different tools
 */
export declare function saveScorecardDefinition(companyId: string, toolId: string, stepId: string, criteria: ScorecardCriterion[], userId: string, name: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
/**
 * Get scorecard definitions for a company and step
 */
export declare function getScorecardDefinitions(companyId: string, stepId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Save a tool evaluation based on a scorecard
 */
export declare function saveToolEvaluation(scorecardId: string, toolId: string, userId: string, responses: Record<string, any>, notes: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
/**
 * Get all evaluations for a specific tool and step
 */
export declare function getToolEvaluations(toolId: string, stepId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Upload a document related to a tool evaluation
 *
 * These could be screenshots, PDFs, or other materials
 */
export declare function uploadToolDocument(companyId: string, toolId: string, userId: string, fileUrl: string, fileType?: string, description?: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
/**
 * Get all documents uploaded for a tool
 */
export declare function getToolDocuments(toolId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Select a tool to use for a specific step
 *
 * This marks the company's final selection
 */
export declare function selectCompanyToolForStep(companyId: string, stepId: string, toolId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
/**
 * Get all tools selected by a company across all steps
 */
export declare function getAllCompanySelectedTools(companyId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
/**
 * Find similar companies using the same tools
 *
 * This helps with building community insights
 */
export declare function getSimilarCompaniesUsingTool(companyId: string, toolId: string, limit?: number): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any>>;
/**
 * Compare usage statistics between tools across all companies
 *
 * This provides aggregate insights about tool popularity
 */
export declare function compareToolUsageStatistics(toolIds: string[]): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any>>;
declare const _default: {
    getStepTools: typeof getStepTools;
    getPersonalizedToolRecommendations: typeof getPersonalizedToolRecommendations;
    getCompanyCustomTools: typeof getCompanyCustomTools;
    addCompanyCustomTool: typeof addCompanyCustomTool;
    saveScorecardDefinition: typeof saveScorecardDefinition;
    getScorecardDefinitions: typeof getScorecardDefinitions;
    saveToolEvaluation: typeof saveToolEvaluation;
    getToolEvaluations: typeof getToolEvaluations;
    uploadToolDocument: typeof uploadToolDocument;
    getToolDocuments: typeof getToolDocuments;
    selectCompanyToolForStep: typeof selectCompanyToolForStep;
    getAllCompanySelectedTools: typeof getAllCompanySelectedTools;
    getSimilarCompaniesUsingTool: typeof getSimilarCompaniesUsingTool;
    compareToolUsageStatistics: typeof compareToolUsageStatistics;
};
export default _default;
//# sourceMappingURL=toolSelection.service.d.ts.map