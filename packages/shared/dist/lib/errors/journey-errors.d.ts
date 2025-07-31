/**
 * Custom error types for the Journey Unified system
 * These help with better error handling and more specific error messages
 */
/**
 * Base class for all Journey system errors
 */
export declare class JourneyError extends Error {
    constructor(message: string);
}
/**
 * Error thrown when a step is not found
 */
export declare class StepNotFoundError extends JourneyError {
    constructor(stepId: string);
}
/**
 * Error thrown when a phase is not found
 */
export declare class PhaseNotFoundError extends JourneyError {
    constructor(phaseId: string);
}
/**
 * Error thrown when a tool is not found
 */
export declare class ToolNotFoundError extends JourneyError {
    constructor(toolId: string);
}
/**
 * Error thrown when a database operation fails
 */
export declare class DatabaseError extends JourneyError {
    originalError: any;
    constructor(operation: string, originalError: any);
}
/**
 * Error thrown when a validation error occurs
 */
export declare class ValidationError extends JourneyError {
    validationErrors: Record<string, string>;
    constructor(message: string, validationErrors?: Record<string, string>);
}
/**
 * Error thrown when an operation is not authorized
 */
export declare class NotAuthorizedError extends JourneyError {
    constructor(operation: string);
}
/**
 * Error thrown when a company is not found
 */
export declare class CompanyNotFoundError extends JourneyError {
    constructor(companyId: string);
}
/**
 * Validation utility functions
 */
export declare const validate: {
    /**
     * Validates that a string is not empty
     */
    notEmpty: (value: string | null | undefined, fieldName: string) => string;
    /**
     * Validates that a value is a valid UUID
     */
    uuid: (value: string, fieldName: string) => string;
    /**
     * Validates that a number is within a range
     */
    range: (value: number, min: number, max: number, fieldName: string) => number;
};
//# sourceMappingURL=journey-errors.d.ts.map