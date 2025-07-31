import { JourneyStep, EnhancedJourneyStep, JourneyPhase, CompanyStepProgress, StepFilterOptions, step_status, EnhancedStepResponse, PersonalizedToolRecommendation } from '../types/journey-steps.types';
/**
 * Get all journey steps with enhanced data
 */
export declare function getEnhancedSteps(): Promise<EnhancedJourneyStep[]>;
/**
 * Get steps for a specific phase
 */
export declare function getStepsByPhase(phaseId: string): Promise<EnhancedJourneyStep[]>;
/**
 * Get a single step with all its enhanced data
 */
export declare function getEnhancedStep(stepId: string): Promise<EnhancedStepResponse>;
/**
 * Get steps with applied filters
 */
export declare function getFilteredSteps(companyId: string, options?: StepFilterOptions): Promise<EnhancedJourneyStep[]>;
/**
 * Get company progress for steps
 */
export declare function getCompanyStepProgress(companyId: string): Promise<CompanyStepProgress[]>;
/**
 * Update step progress status
 */
export declare function updateStepProgress(companyId: string, stepId: string, status: step_status, notes?: string): Promise<null>;
/**
 * Create a custom step
 */
export declare function createCustomStep(companyId: string, phaseId: string, name: string, description: string, difficultyLevel: number, estimatedTimeMin: number, estimatedTimeMax: number, keyOutcomes?: string[]): Promise<null>;
/**
 * Update an existing step
 */
export declare function updateStep(stepId: string, updates: Partial<JourneyStep>): Promise<null>;
/**
 * Get all journey phases
 */
export declare function getJourneyPhases(): Promise<JourneyPhase[]>;
/**
 * Get personalized tool recommendations for a step
 */
export declare function getPersonalizedToolRecommendations(companyId: string, stepId: string): Promise<PersonalizedToolRecommendation[]>;
/**
 * Mark a step as irrelevant/skipped
 */
export declare function markStepAsSkipped(companyId: string, stepId: string, reason?: string): Promise<null>;
/**
 * Calculate overall progress percentage across all steps
 */
export declare function calculateOverallProgress(companyId: string): Promise<number>;
/**
 * Calculate progress percentage for a specific phase
 */
export declare function calculatePhaseProgress(companyId: string, phaseId: string): Promise<number>;
/**
 * Get next recommended step based on company's progress
 */
export declare function getNextRecommendedStep(companyId: string): Promise<EnhancedJourneyStep | null>;
/**
 * Backward compatibility function to work with challenge-based code
 */
export declare function getChallengeById(challengeId: string): Promise<EnhancedStepResponse>;
/**
 * Backward compatibility function for challenges API
 */
export declare function getChallenges(companyId: string, options?: StepFilterOptions): Promise<EnhancedJourneyStep[]>;
/**
 * Update the order of steps
 *
 * This allows for reordering of steps within a phase
 */
export declare function updateStepOrder(companyId: string, steps: Array<{
    id: string;
    order_index: number;
}>): Promise<{
    success: boolean;
}>;
declare const _default: {
    getEnhancedSteps: typeof getEnhancedSteps;
    getStepsByPhase: typeof getStepsByPhase;
    getEnhancedStep: typeof getEnhancedStep;
    getFilteredSteps: typeof getFilteredSteps;
    getCompanyStepProgress: typeof getCompanyStepProgress;
    updateStepProgress: typeof updateStepProgress;
    createCustomStep: typeof createCustomStep;
    updateStep: typeof updateStep;
    getJourneyPhases: typeof getJourneyPhases;
    getPersonalizedToolRecommendations: typeof getPersonalizedToolRecommendations;
    markStepAsSkipped: typeof markStepAsSkipped;
    calculateOverallProgress: typeof calculateOverallProgress;
    calculatePhaseProgress: typeof calculatePhaseProgress;
    getNextRecommendedStep: typeof getNextRecommendedStep;
    updateStepOrder: typeof updateStepOrder;
    getChallengeById: typeof getChallengeById;
    getChallenges: typeof getChallenges;
};
export default _default;
//# sourceMappingURL=journeySteps.service.d.ts.map