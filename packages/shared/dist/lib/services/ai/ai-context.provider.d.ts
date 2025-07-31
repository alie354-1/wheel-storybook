import { default as React } from 'react';
import { AIServiceInterface } from '../../../components/idea-playground/enhanced/services/ai-service.interface';
interface AIContextType {
    aiService: AIServiceInterface | null;
    isUsingRealAI: boolean;
    isUsingMultiTieredAI: boolean;
    currentTier: 'free' | 'standard' | 'premium';
    isLoading: boolean;
    lastError: string | null;
    clearError: () => void;
}
export declare function AIProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAIContext(): AIContextType;
export {};
//# sourceMappingURL=ai-context.provider.d.ts.map