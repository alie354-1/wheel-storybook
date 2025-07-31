import { StepRelationship } from '@/lib/types/journey-steps.types';
export declare class RelationshipsRecommendationService {
    /**
     * Get step relationships showing which steps are connected
     */
    static getStepRelationships(stepId: string, depth?: number): Promise<StepRelationship[]>;
    /**
     * Track relationship events for analytics.
     * NOTE: This might need to be moved to a dedicated analytics service later.
     * @private
     */
    private static trackRelationshipEvent;
}
//# sourceMappingURL=relationships.service.d.ts.map