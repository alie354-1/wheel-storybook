/**
 * Financial Hub Service
 * - Fetch budget templates and categories
 * - Import template to company budget
 * - List/edit company budget
 */
export declare const financialHubService: {
    getBudgetTemplates(): Promise<any[]>;
    getTemplateCategories(templateId: string): Promise<any[]>;
    importTemplateToCompanyBudget(companyId: string, templateId: string, addedByUserId: string): Promise<void>;
    getCompanyBudget(companyId: string): Promise<any[]>;
    updateBudgetLine(budgetId: string, updates: Record<string, any>): Promise<void>;
    addBudgetLine(companyId: string, line: {
        category: string;
        description?: string;
        amount: number;
        period: "monthly" | "annual" | "one-time";
        added_by: string;
        template_id?: string;
        template_category_id?: string;
    }): Promise<void>;
    removeBudgetLine(budgetId: string): Promise<void>;
    getFinancialSnapshot(companyId: string): Promise<{
        burnRate: any;
    }>;
};
//# sourceMappingURL=financialHub.service.d.ts.map