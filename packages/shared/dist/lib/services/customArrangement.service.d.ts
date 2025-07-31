import { CustomStepArrangement, CustomStepOrder, CustomPhase, StepBatchOperation } from '../types/journey-unified.types';
/**
 * Custom Arrangement Service
 *
 * Provides methods for managing custom step arrangements, orders, and phases.
 * Implements the drag-and-drop persistence for the journey steps.
 */
export declare class CustomArrangementService {
    /**
     * Create a new custom arrangement.
     */
    createArrangement(companyId: string, userId: string, name: string, description?: string, isDefault?: boolean): Promise<CustomStepArrangement | null>;
    /**
     * Get all custom arrangements for a company.
     */
    getCompanyArrangements(companyId: string): Promise<CustomStepArrangement[]>;
    /**
     * Get a user's custom arrangements.
     */
    getUserArrangements(userId: string): Promise<CustomStepArrangement[]>;
    /**
     * Get the default arrangement for a user/company,
     * or create one if it doesn't exist.
     */
    getOrCreateDefaultArrangement(companyId: string, userId: string): Promise<CustomStepArrangement | null>;
    /**
     * Update a custom arrangement.
     */
    updateArrangement(arrangementId: string, updates: Partial<CustomStepArrangement>): Promise<CustomStepArrangement | null>;
    /**
     * Delete a custom arrangement.
     */
    deleteArrangement(arrangementId: string): Promise<boolean>;
    /**
     * Get all step orders for an arrangement.
     */
    getStepOrders(arrangementId: string): Promise<CustomStepOrder[]>;
    /**
     * Save a step order to an arrangement.
     */
    saveStepOrder(arrangementId: string, stepId: string, orderIndex: number, customPhaseId?: string, notes?: string): Promise<CustomStepOrder | null>;
    /**
     * Save multiple step orders in a single transaction.
     */
    saveBatchStepOrders(arrangementId: string, orders: {
        stepId: string;
        orderIndex: number;
        customPhaseId?: string;
        notes?: string;
    }[]): Promise<boolean>;
    /**
     * Remove a step from an arrangement.
     */
    removeStepFromArrangement(arrangementId: string, stepId: string): Promise<boolean>;
    /**
     * Reorder steps in an arrangement.
     * This method handles reordering by updating all affected step orders.
     */
    reorderSteps(arrangementId: string, sourceIndex: number, destinationIndex: number): Promise<boolean>;
    /**
     * Create a custom phase.
     */
    createCustomPhase(companyId: string, userId: string, name: string, description?: string, color?: string, orderIndex?: number): Promise<CustomPhase | null>;
    /**
     * Get all custom phases for a user in a company.
     */
    getCustomPhases(companyId: string, userId: string): Promise<CustomPhase[]>;
    /**
     * Update a custom phase.
     */
    updateCustomPhase(phaseId: string, updates: Partial<CustomPhase>): Promise<CustomPhase | null>;
    /**
     * Delete a custom phase.
     */
    deleteCustomPhase(phaseId: string): Promise<boolean>;
    /**
     * Record a batch operation on steps.
     */
    recordBatchOperation(companyId: string, userId: string, operationType: string, affectedSteps: string[], sourceArrangementId?: string, targetArrangementId?: string, operationData?: Record<string, any>): Promise<StepBatchOperation | null>;
    /**
     * Get recent batch operations for a company.
     */
    getRecentBatchOperations(companyId: string, limit?: number): Promise<StepBatchOperation[]>;
    /**
     * Get batch operations by user.
     */
    getUserBatchOperations(userId: string, limit?: number): Promise<StepBatchOperation[]>;
}
export declare const customArrangementService: CustomArrangementService;
//# sourceMappingURL=customArrangement.service.d.ts.map