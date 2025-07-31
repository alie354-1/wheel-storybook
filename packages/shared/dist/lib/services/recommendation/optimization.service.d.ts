import { StepRecommendation } from '@/lib/types/journey-steps.types';
export declare class OptimizationRecommendationService {
    /**
     * Get an optimized journey path for a company
     */
    static getOptimizedPath(companyId: string, timeConstraint?: number, maxSteps?: number): Promise<StepRecommendation[]>;
    /**
    * Score available steps based on various factors.
    * NOTE: This is a placeholder implementation. Should ideally reuse or call CoreRecommendationService.scoreSteps
    * @private
    */
    private static scoreSteps;
    /**
     * Order steps optimally based on prerequisites and priority.
     * NOTE: This is a placeholder implementation. Actual logic involves topological sort + priority.
     * @private
     */
    private static orderStepsOptimally;
}
//# sourceMappingURL=optimization.service.d.ts.map