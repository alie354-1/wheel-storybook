export declare function getCompanyJourneyBoard(companyId: string): Promise<{
    phases: any[];
    steps: any[];
    progress: any[];
    customSteps: any[];
}>;
export declare function updateCompanyStep(companyId: string, stepId: string, updates: Partial<{
    status: string;
    order_index: number;
    notes: string;
    can_be_parallel: boolean;
    archived: boolean;
}>): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
export declare function addCompanyCustomStep(companyId: string, phaseId: string, name: string, description?: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
export declare function updateCompanyCustomStep(stepId: string, updates: Partial<{
    name: string;
    description: string;
    order_index: number;
    can_be_parallel: boolean;
    archived: boolean;
}>): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
export declare function deleteCompanyCustomStep(stepId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
export declare function getCompanyJourneyAIRecommendations(companyId: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<any[]>>;
export declare function askCompanyJourneyAIQuestion(companyId: string, stepId: string, question: string): Promise<import('@supabase/postgrest-js').PostgrestSingleResponse<null>>;
//# sourceMappingURL=journeyBoard.service.d.ts.map