import { ClassValue } from 'clsx';
/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param inputs Class names to combine
 * @returns Merged class names
 */
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Formats a date to a string
 * @param date Date to format
 * @param options Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export declare function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string;
/**
 * Formats a number to a currency string
 * @param amount Amount to format
 * @param currency Currency code
 * @returns Formatted currency string
 */
export declare function formatCurrency(amount: number, currency?: string): string;
/**
 * Truncates a string to a specified length
 * @param str String to truncate
 * @param length Maximum length
 * @returns Truncated string
 */
export declare function truncate(str: string, length: number): string;
/**
 * Generates a random ID
 * @param length Length of the ID
 * @returns Random ID
 */
export declare function generateId(length?: number): string;
/**
 * Debounces a function
 * @param fn Function to debounce
 * @param ms Debounce time in milliseconds
 * @returns Debounced function
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, ms: number): (this: any, ...args: Parameters<T>) => void;
/**
 * Throttles a function
 * @param fn Function to throttle
 * @param ms Throttle time in milliseconds
 * @returns Throttled function
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, ms: number): (this: any, ...args: Parameters<T>) => any;
/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value Value to check
 * @returns Whether the value is empty
 */
export declare function isEmpty(value: any): boolean;
/**
 * Capitalizes the first letter of a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export declare function capitalize(str: string): string;
/**
 * Converts a string to kebab-case
 * @param str String to convert
 * @returns Kebab-cased string
 */
export declare function toKebabCase(str: string): string;
/**
 * Converts a string to camelCase
 * @param str String to convert
 * @returns Camel-cased string
 */
export declare function toCamelCase(str: string): string;
//# sourceMappingURL=index.d.ts.map