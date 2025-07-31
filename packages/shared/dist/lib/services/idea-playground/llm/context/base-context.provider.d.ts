import { ContextProvider, LLMRequestContext } from './interface';
/**
 * Base implementation of the context provider
 * Provides foundational functionality that other providers can extend
 */
export declare abstract class BaseContextProvider implements ContextProvider {
    private name;
    private priority;
    private enabled;
    constructor(name: string, priority?: number);
    /**
     * Get the name of this provider
     */
    getName(): string;
    /**
     * Get the priority of this provider (higher numbers run first)
     */
    getPriority(): number;
    /**
     * Check if this provider is enabled
     */
    isEnabled(): boolean;
    /**
     * Enable or disable this provider
     */
    setEnabled(enabled: boolean): void;
    /**
     * Check if this provider can handle the given context
     * By default, returns true if the provider is enabled
     */
    canHandle(context: LLMRequestContext): boolean;
    /**
     * Process and enrich context with additional information
     * This is implemented by specific providers
     */
    abstract processContext(context: LLMRequestContext): LLMRequestContext;
    /**
     * Helper method to combine context values with a delimiter
     */
    protected combineContextValues(existing: string | undefined, additional: string): string;
    /**
     * Helper method to add an example to the context
     */
    protected addExample(context: LLMRequestContext, example: string): LLMRequestContext;
    /**
     * Helper method to add a constraint to the context
     */
    protected addConstraint(context: LLMRequestContext, constraint: string): LLMRequestContext;
}
//# sourceMappingURL=base-context.provider.d.ts.map