export type ModelType = 'base' | 'company' | 'abstraction' | 'user';
export interface GenerateOptions {
    maxLength?: number;
    temperature?: number;
    provider?: string;
    useCompanyModel?: boolean;
    useAbstractionModel?: boolean;
    context?: Record<string, any>;
    conversationHistory?: string;
}
export interface HuggingFaceResponse {
    generated_text: string;
    model_version?: string;
    context_applied?: boolean;
    abstraction_applied?: boolean;
}
/**
 * Client for interacting with the Hugging Face Inference API directly
 */
declare const huggingFaceClient: {
    /**
     * Validate API key format (Hugging Face keys start with "hf_")
     */
    validateApiKey(apiKey: string): boolean;
    /**
     * Get the API key and model ID for a specific model type
     */
    getAuthAndModel(modelType?: ModelType): Promise<{
        apiKey: string;
        modelId: string;
    }>;
    /**
     * Generate text based on a prompt
     */
    generate(prompt: string, modelType?: ModelType, context?: Record<string, any>, options?: Partial<GenerateOptions>): Promise<HuggingFaceResponse>;
    /**
     * Generate structured output based on a prompt and schema
     */
    generateStructure<T>(prompt: string, schema: Record<string, any>, modelType?: ModelType, context?: Record<string, any>, options?: Partial<GenerateOptions>): Promise<T>;
    /**
     * Generate multiple variations of a response
     */
    generateVariations(prompt: string, count: number, modelType?: ModelType, context?: Record<string, any>, options?: Partial<GenerateOptions>): Promise<string[]>;
    /**
     * Stream text generation with callback
     * @returns An abort controller to stop the stream
     */
    streamText(prompt: string, callback: (text: string, done: boolean) => void, modelType?: ModelType, context?: Record<string, any>, options?: Partial<GenerateOptions>): AbortController;
};
export default huggingFaceClient;
//# sourceMappingURL=huggingface-client.d.ts.map