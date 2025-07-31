/**
 * DISABLED Model Training Service
 *
 * This service has been temporarily disabled to prevent database errors.
 * All operations are now no-ops (they do nothing).
 */
/**
 * Model Training Service Interface
 */
export interface ModelTrainingService {
    extractFeatures: (eventType: string, options?: any) => Promise<void>;
    recordFeedback: (feedback: any) => Promise<void>;
    trainModel: (modelId: string, options?: any) => Promise<void>;
    evaluateModel: (modelId: string, testData?: any) => Promise<any>;
}
/**
 * No-op implementation of Model Training Service
 */
declare class DisabledModelTrainingService implements ModelTrainingService {
    constructor();
    /**
     * Extract features for model training (no-op)
     */
    extractFeatures(eventType: string, options?: any): Promise<void>;
    /**
     * Record feedback for model improvement (no-op)
     */
    recordFeedback(feedback: any): Promise<void>;
    /**
     * Train a model (no-op)
     */
    trainModel(modelId: string, options?: any): Promise<void>;
    /**
     * Evaluate a model (no-op)
     */
    evaluateModel(modelId: string, testData?: any): Promise<any>;
}
export declare const modelTrainingService: DisabledModelTrainingService;
export {};
//# sourceMappingURL=model-training.service.d.ts.map