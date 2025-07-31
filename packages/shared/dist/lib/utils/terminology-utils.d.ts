import { TerminologyValue, TerminologyMap, ResolvedTerminologyMap, TerminologyOverrideBehavior } from '../types/terminology.types';
/**
 * Deep merges two terminology objects
 */
export declare function deepMergeTerminology(base: TerminologyMap, override: TerminologyMap, behavior?: TerminologyOverrideBehavior): TerminologyMap;
/**
 * Flattens a nested terminology object into a flat key-value map
 * @param obj The nested terminology object
 * @param prefix Key prefix for nested properties
 * @param result Accumulator for recursive calls
 * @returns Flattened key-value map
 */
export declare function flattenTerminology(obj: Record<string, any>, prefix?: string, result?: Record<string, TerminologyValue>): Record<string, TerminologyValue>;
/**
 * Converts a flat terminology map back to a nested structure
 * @param map Flat terminology map with dot-notation keys
 * @returns Nested terminology structure
 */
export declare function unflattenTerminology(map: Record<string, TerminologyValue>): Record<string, any>;
/**
 * Formats a terminology term with the given context
 * @param template The template string with placeholders
 * @param context The context to replace placeholders
 * @returns Formatted string
 */
export declare function formatTerminology(template: string, context?: Record<string, any>): string;
/**
 * Validates if the provided terminology is complete for the required paths
 * @param terminology The terminology object to validate
 * @param requiredPaths Array of dot-notation paths that must exist
 * @returns True if all required paths exist, false otherwise
 */
export declare function validateTerminologyCompleteness(terminology: Record<string, any>, requiredPaths: string[]): boolean;
/**
 * Get a nested value from an object using dot notation
 * @param obj The object to get the value from
 * @param path The path to the value using dot notation
 * @param defaultValue The default value to return if the path doesn't exist
 */
export declare function deepGet(obj: Record<string, any>, path: string, defaultValue?: any): any;
/**
 * Apply terminology override with the given behavior
 * @param base Base terminology value
 * @param override Override terminology value
 * @param behavior The override behavior to apply
 */
export declare function applyTerminologyOverride(base: any, override: any, behavior: TerminologyOverrideBehavior): any;
/**
 * Creates a default terminology configuration
 */
export declare function createDefaultTerminology(): ResolvedTerminologyMap;
/**
 * Predefined terminology sets for different contexts
 */
export declare const predefinedTerminologySets: {
    [key: string]: Partial<ResolvedTerminologyMap>;
    businessFormal: Partial<ResolvedTerminologyMap>;
    startupFocused: Partial<ResolvedTerminologyMap>;
    projectManagement: Partial<ResolvedTerminologyMap>;
};
//# sourceMappingURL=terminology-utils.d.ts.map