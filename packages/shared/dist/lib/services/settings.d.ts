/**
 * Global settings for the application
 *
 * This file contains configuration settings that can be used throughout the application.
 */
/**
 * Idea Playground specific settings
 */
export declare const ideaPlaygroundSettings: {
    /**
     * OpenAI API key (should be set via environment variable in production)
     */
    openAIApiKey: string;
    /**
     * Default model to use for AI operations
     */
    defaultModel: string;
    /**
     * Mock mode - uses mock data instead of real API calls when true
     */
    useMockData: boolean;
    /**
     * Feature flags for enabling/disabling specific features
     */
    features: {
        streamingResponses: boolean;
        embeddingsSearch: boolean;
        advancedPrompting: boolean;
        multipleModels: boolean;
        mockResponses: boolean;
    };
    /**
     * Default temperature for AI requests
     */
    temperature: number;
    /**
     * Maximum number of tokens for AI completions
     */
    maxTokens: number;
    /**
     * Base URL for API requests
     */
    apiBaseUrl: string;
};
/**
 * General application settings
 */
export declare const appSettings: {
    /**
     * Enable debug logging
     */
    debug: boolean;
    /**
     * Application version
     */
    version: string;
    /**
     * API timeout in milliseconds
     */
    apiTimeout: number;
    /**
     * Default language
     */
    language: string;
};
//# sourceMappingURL=settings.d.ts.map