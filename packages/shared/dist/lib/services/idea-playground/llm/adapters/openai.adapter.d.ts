import { LLMAdapter, LLMAdapterCapabilities } from './interface';
import { LLMRequestContext } from '../context/interface';
/**
 * OpenAI API configuration
 */
interface OpenAIConfig {
    apiKey?: string;
    model: string;
    temperature: number;
    maxTokens: number;
}
/**
 * Adapter for OpenAI API integration
 */
export declare class OpenAIAdapter implements LLMAdapter {
    private config;
    /**
     * Create a new OpenAI adapter
     * @param config Optional custom configuration
     */
    constructor(config?: Partial<OpenAIConfig>);
    /**
     * Get the adapter name
     */
    getName(): string;
    /**
     * Get adapter capabilities
     */
    getCapabilities(): LLMAdapterCapabilities;
    /**
     * Complete a prompt using the OpenAI API
     * @param prompt The prompt to send
     * @param context Optional context for the request
     */
    complete(prompt: string, context?: LLMRequestContext): Promise<string>;
    /**
     * Stream completions token by token
     * @param prompt The prompt to send
     * @param callback Function to call with each token
     * @param context Optional context for the request
     */
    streamComplete(prompt: string, callback: (token: string) => void, context?: LLMRequestContext): Promise<void>;
    /**
     * Generate embeddings for text
     * @param text The text to embed
     */
    generateEmbedding(text: string): Promise<number[]>;
    /**
     * Generate a mock response for demonstration purposes
     */
    private generateMockResponse;
    /**
     * Generate a mock embedding for demonstration purposes
     */
    private generateMockEmbedding;
    /**
     * Simulate token-by-token streaming
     */
    private simulateTokenStream;
    /**
     * Simulate API call delay
     */
    private simulateApiDelay;
    /**
     * Extract keywords from a prompt string
     */
    private extractKeywords;
}
export {};
//# sourceMappingURL=openai.adapter.d.ts.map