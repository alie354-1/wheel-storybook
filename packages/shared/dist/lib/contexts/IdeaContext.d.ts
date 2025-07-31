import { default as React, ReactNode } from 'react';
import { BusinessSuggestions, IdeaVariation } from '../services/idea-generation.service';
export interface IdeaData {
    id?: string;
    version?: number;
    title: string;
    description: string;
    problem_statement: string;
    solution_concept: string;
    target_audience: string;
    unique_value: string;
    business_model: string;
    marketing_strategy: string;
    revenue_model: string;
    go_to_market: string;
    market_size?: string;
    ai_feedback?: {
        strengths: string[];
        weaknesses: string[];
        opportunities: string[];
        threats: string[];
        suggestions: string[];
        market_insights: string[];
        validation_tips: string[];
    };
    business_suggestions?: BusinessSuggestions;
    selected_suggestions?: Record<string, string[]>;
    concept_variations?: IdeaVariation[];
    selected_variation?: IdeaVariation;
    merged_variation?: {
        title: string;
        description: string;
        differentiator: string;
        targetMarket: string;
        revenueModel: string;
    };
}
interface IdeaContextType {
    ideaData: IdeaData;
    setIdeaData: React.Dispatch<React.SetStateAction<IdeaData>>;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    totalSteps: number;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    success: string;
    setSuccess: React.Dispatch<React.SetStateAction<string>>;
    saveToLocalStorage: () => void;
    clearLocalStorage: () => void;
}
interface IdeaProviderProps {
    children: ReactNode;
    initialStep?: number;
}
export declare const IdeaProvider: React.FC<IdeaProviderProps>;
export declare const useIdeaContext: () => IdeaContextType;
export {};
//# sourceMappingURL=IdeaContext.d.ts.map