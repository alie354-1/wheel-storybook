/**
 * Simple In-Memory Cache Utility
 *
 * Provides basic caching functionality with time-to-live (TTL) support.
 * Note: This is a very basic implementation. For production, consider
 * more robust libraries or strategies (e.g., using localStorage with size limits,
 * dedicated caching services, or libraries like TanStack Query's built-in caching).
 */
/**
 * Retrieves an item from the cache. Returns null if the item
 * doesn't exist or has expired.
 *
 * @param key - The cache key.
 * @returns The cached data or null.
 */
export declare function getCache<T>(key: string): T | null;
/**
 * Adds or updates an item in the cache.
 *
 * @param key - The cache key.
 * @param data - The data to cache.
 * @param ttlMs - Optional time-to-live in milliseconds. Defaults to DEFAULT_TTL_MS.
 */
export declare function setCache<T>(key: string, data: T, ttlMs?: number): void;
/**
 * Removes an item from the cache.
 *
 * @param key - The cache key to remove.
 */
export declare function invalidateCache(key: string): void;
/**
 * Clears the entire cache.
 */
export declare function clearCache(): void;
/**
 * A higher-order function to wrap an async function with caching.
 *
 * @param keyPrefix - A prefix for the cache key.
 * @param fn - The async function to wrap.
 * @param ttlMs - Optional TTL for cached results.
 * @returns A new async function that uses the cache.
 */
export declare function withCache<TArgs extends any[], TResult>(keyPrefix: string, fn: (...args: TArgs) => Promise<TResult>, ttlMs?: number): (...args: TArgs) => Promise<TResult>;
//# sourceMappingURL=cache.d.ts.map