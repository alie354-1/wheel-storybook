import { step_status } from '../types/journey-unified.types';
export interface ProgressAnalytics {
    totalSteps: number;
    completedSteps: number;
    inProgressSteps: number;
    blockedSteps: number;
    completionRate: number;
    averageTimePerStep: number;
    currentPhase: string;
    nextMilestone: string;
    estimatedCompletionDays: number;
}
export interface SmartRecommendation {
    id: string;
    type: 'next_step' | 'unblock' | 'optimize' | 'milestone';
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    stepId?: string;
    actionItems: string[];
    reasoning: string[];
    estimatedImpact: string;
}
export interface ProgressMilestone {
    id: string;
    name: string;
    description: string;
    phaseId: string;
    requiredStepIds: string[];
    isCompleted: boolean;
    completedAt?: string;
    celebrationMessage?: string;
}
export declare const journeyProgressService: {
    /**
     * Get comprehensive progress analytics for a company
     */
    getProgressAnalytics(companyId: string): Promise<ProgressAnalytics>;
    /**
     * Get smart recommendations based on company progress
     */
    getSmartRecommendations(companyId: string): Promise<SmartRecommendation[]>;
    /**
     * Get progress milestones for a company
     */
    getProgressMilestones(companyId: string): Promise<ProgressMilestone[]>;
    /**
     * Track step progress update
     */
    trackProgressUpdate(companyId: string, stepId: string, oldStatus: step_status, newStatus: step_status): Promise<void>;
    /**
     * Check if step completion triggers milestone
     */
    checkMilestoneCompletion(companyId: string, completedStepId: string): Promise<void>;
    /**
     * Get progress trends over time
     */
    getProgressTrends(companyId: string, days?: number): Promise<Array<{
        date: string;
        completedSteps: number;
        totalSteps: number;
        completionRate: number;
    }>>;
};
//# sourceMappingURL=journeyProgress.service.d.ts.map