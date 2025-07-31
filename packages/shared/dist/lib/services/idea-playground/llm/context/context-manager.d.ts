import { ContextProvider, LLMRequestContext } from './interface';
/**
 * Manager for context providers that enriches LLM prompts
 * with relevant context from various sources
 */
export declare class ContextManager {
    private providers;
    constructor(initialProviders?: ContextProvider[]);
    /**
     * Create a default context manager with standard providers
     */
    static createDefault(): ContextManager;
    /**
     * Process context through all relevant providers
     */
    processContext(context: LLMRequestContext): LLMRequestContext;
    /**
     * Format the final context for the LLM prompt
     */
    private formatContext;
    /**
     * Add a new context provider
     */
    addProvider(provider: ContextProvider): void;
    /**
     * Get a provider by name
     */
    getProvider(name: string): ContextProvider | undefined;
    /**
     * Remove a provider by name
     */
    removeProvider(name: string): boolean;
    /**
     * Enable a provider by name
     */
    enableProvider(name: string): boolean;
    /**
     * Disable a provider by name
     */
    disableProvider(name: string): boolean;
    /**
     * Get all providers
     */
    getAllProviders(): ContextProvider[];
}
//# sourceMappingURL=context-manager.d.ts.map