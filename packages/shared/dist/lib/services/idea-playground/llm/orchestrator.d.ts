import { LLMAdapter } from './adapters/interface';
import { ContextManager } from './context/context-manager';
import { LLMRequestContext } from './context/interface';
/**
 * Orchestrates LLM interactions using the appropriate adapter and context processing
 */
export declare class LLMOrchestrator {
    private adapter;
    private contextManager;
    /**
     * Create a new LLM orchestrator
     * @param adapter The LLM adapter to use
     * @param contextManager The context manager for request enrichment
     */
    constructor(adapter?: LLMAdapter, contextManager?: ContextManager);
    /**
     * Complete a prompt using the configured adapter
     * @param prompt The prompt to send to the LLM
     * @param context Optional additional context
     * @returns Promise resolving to the generated text
     */
    complete(prompt: string, context?: Partial<LLMRequestContext>): Promise<string>;
    /**
     * Stream completion tokens
     * @param prompt The prompt to send to the LLM
     * @param callback Function to call with each token
     * @param context Optional additional context
     */
    streamComplete(prompt: string, callback: (token: string) => void, context?: Partial<LLMRequestContext>): Promise<void>;
    /**
     * Generate embeddings for a text
     * @param text The text to generate embeddings for
     * @returns Promise resolving to the embeddings
     */
    generateEmbedding(text: string): Promise<number[]>;
    /**
     * Get the context manager
     */
    getContextManager(): ContextManager;
    /**
     * Set a new context manager
     */
    setContextManager(contextManager: ContextManager): void;
    /**
     * Get the current adapter
     */
    getAdapter(): LLMAdapter;
    /**
     * Set a new adapter
     */
    setAdapter(adapter: LLMAdapter): void;
    /**
     * Construct the final prompt by combining all context elements
     */
    private constructFinalPrompt;
}
//# sourceMappingURL=orchestrator.d.ts.map