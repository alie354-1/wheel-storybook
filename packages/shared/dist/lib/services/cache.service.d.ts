/**
 * Simple in-memory cache service for LLM responses
 * This helps reduce API calls and improve response times
 */
export declare class CacheService<T> {
    private cache;
    private defaultTTL;
    private maxSize;
    /**
     * Create a new cache service
     * @param defaultTTL Default time to live in milliseconds (default: 5 minutes)
     * @param maxSize Maximum number of entries in the cache (default: 100)
     */
    constructor(defaultTTL?: number, maxSize?: number);
    /**
     * Get a value from the cache
     * @param key Cache key
     * @returns The cached value or undefined if not found or expired
     */
    get(key: string): T | undefined;
    /**
     * Set a value in the cache
     * @param key Cache key
     * @param value Value to cache
     * @param ttl Time to live in milliseconds (optional, uses default if not provided)
     */
    set(key: string, value: T, ttl?: number): void;
    /**
     * Check if a key exists in the cache and is not expired
     * @param key Cache key
     * @returns True if the key exists and is not expired
     */
    has(key: string): boolean;
    /**
     * Remove a value from the cache
     * @param key Cache key
     */
    delete(key: string): void;
    /**
     * Clear all entries from the cache
     */
    clear(): void;
    /**
     * Get the number of entries in the cache
     */
    get size(): number;
    /**
     * Get or set a value in the cache
     * If the key doesn't exist or is expired, the factory function is called to generate a new value
     * @param key Cache key
     * @param factory Function to generate a new value if not in cache
     * @param ttl Time to live in milliseconds (optional, uses default if not provided)
     * @returns The cached or newly generated value
     */
    getOrSet(key: string, factory: () => Promise<T>, ttl?: number): Promise<T>;
}
export declare const llmCacheService: CacheService<any>;
//# sourceMappingURL=cache.service.d.ts.map