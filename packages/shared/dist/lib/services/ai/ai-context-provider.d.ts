import { default as React } from 'react';
interface AIContextType {
    generateContextualHelp: (stage: string, ideaId?: string) => Promise<string>;
    getSmartSuggestions: (fieldType: string, currentValue: string) => Promise<string[]>;
    enhanceIdea: (ideaData: any) => Promise<any>;
    validateIdea: (ideaData: any, validationType: string) => Promise<any>;
    isLoading: boolean;
}
/**
 * AI Context Provider component
 * Provides AI capabilities to all child components
 */
export declare const AIContextProvider: React.FC<{
    children: React.ReactNode;
}>;
/**
 * Custom hook to use the AI context
 */
export declare const useAIContext: () => AIContextType;
export { AIContextProvider as AIProvider };
//# sourceMappingURL=ai-context-provider.d.ts.map