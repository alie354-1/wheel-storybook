/**
 * Company Tool Evaluation Service
 * - Manage tool evaluation list, scorecards, notes, and selection
 * - Integrate with company budget when a tool is selected
 */
export declare const companyToolEvaluationService: {
    addToolToEvaluation(companyId: string, toolId: string, addedBy: string): Promise<void>;
    removeToolFromEvaluation(companyId: string, toolId: string): Promise<void>;
    getEvaluationList(companyId: string): Promise<any>;
    upsertScorecard(evaluationId: string, criterion: string, rating: number, notes: string): Promise<void>;
    getScorecards(evaluationId: string): Promise<any>;
    updateEvaluationNotes(evaluationId: string, notes: string): Promise<void>;
    selectTool(evaluationId: string, price?: number | null, budgetCategory?: string | null): Promise<void>;
};
//# sourceMappingURL=companyToolEvaluation.service.d.ts.map