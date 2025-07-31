export interface QueryContext {
    userId: string;
    companyId?: string;
    feature?: string;
    useCompanyModel?: boolean;
    useAbstraction?: boolean;
    useExistingModels?: boolean;
    context?: string;
    conversationHistory?: Array<{
        role: 'system' | 'user' | 'assistant';
        content: string;
    }>;
    temperature?: number;
}
export interface GeneralLLMService {
    query: (input: string, context: QueryContext) => Promise<any>;
}
export declare class OpenAIGeneralLLMService implements GeneralLLMService {
    constructor();
    query(input: string, context: QueryContext): Promise<any>;
}
/**
 * Get the LLM service instance
 * This ensures we use the same instance throughout the application
 */
export declare const getGeneralLLMService: () => GeneralLLMService;
/**
 * Reset the LLM service instance
 * This is useful when feature flags change and we need to recreate the service
 */
export declare const resetGeneralLLMService: () => void;
export declare const generalLLMService: {
    query: (input: string, context: QueryContext) => Promise<any>;
    setAIProvider: (provider: "openai" | "mock") => void;
};
//# sourceMappingURL=general-llm.service.d.ts.map