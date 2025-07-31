import { default as React, ReactNode } from 'react';
/**
 * Props for the BaseAIContextProvider component
 */
export interface BaseAIContextProviderProps {
    /** Children to render inside the provider */
    children: ReactNode;
    /** Service to use for AI operations */
    service: AIService;
    /** Context name for debugging */
    contextName?: string;
}
/**
 * Interface for AI service
 */
export interface AIService {
    /** Generate a response based on the prompt */
    generateResponse: (prompt: string) => Promise<string>;
    /** Generate suggestions based on the prompt */
    generateSuggestions?: (prompt: string) => Promise<string[]>;
    /** Analyze text and provide feedback */
    analyzeText?: (text: string) => Promise<string>;
}
/**
 * Context for AI operations
 */
export interface BaseAIContext {
    /** Generate a response based on the prompt */
    generateResponse: (prompt: string) => Promise<string>;
    /** Generate suggestions based on the prompt */
    generateSuggestions: (prompt: string) => Promise<string[]>;
    /** Analyze text and provide feedback */
    analyzeText: (text: string) => Promise<string>;
    /** Whether the AI is currently loading */
    isLoading: boolean;
    /** Error message if any */
    error: string | null;
    /** Clear the error message */
    clearError: () => void;
}
/**
 * Create a context for AI operations
 */
export declare function createAIContext(): React.Context<BaseAIContext | null>;
/**
 * Base component for AI context providers
 * This component provides the common functionality for AI context providers
 */
export declare function BaseAIContextProvider({ children, service, contextName }: BaseAIContextProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Create a hook to use the AI context
 */
export declare function createUseAIContext(Context: React.Context<BaseAIContext | null>): () => BaseAIContext;
//# sourceMappingURL=BaseAIContextProvider.d.ts.map