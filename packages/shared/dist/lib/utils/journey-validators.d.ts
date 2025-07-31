import { JourneyStep, Tool, step_status } from '../types/journey-unified.types';
/**
 * Validate a step object for creation or update
 */
export declare function validateStep(step: Partial<JourneyStep>): void;
/**
 * Validate status update
 */
export declare function validateStepStatus(status: step_status): void;
/**
 * Validate a tool object for creation or update
 */
export declare function validateTool(tool: Partial<Tool>): void;
/**
 * Validate a rating value
 */
export declare function validateRating(rating: number): void;
/**
 * Validate completion percentage
 */
export declare function validateCompletionPercentage(percentage: number): void;
//# sourceMappingURL=journey-validators.d.ts.map