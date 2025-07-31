import { GeneralLLMService, QueryContext as BaseQueryContext } from './general-llm.service';
import { CompanyModelService } from './company-model.service';
export interface QueryContext extends BaseQueryContext {
    context?: string;
}
export interface BusinessIdea {
    id?: string;
    version?: number;
    title: string;
    description: string;
    problem_statement?: string;
    solution_concept?: string;
    target_audience?: string;
    unique_value?: string;
    business_model?: string;
    marketing_strategy?: string;
    revenue_model?: string;
    go_to_market?: string;
    market_size?: string;
    competition?: string[];
    revenue_streams?: string[];
    cost_structure?: string[];
    key_metrics?: string[];
}
export interface IdeaFeedback {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
    suggestions: string[];
    market_insights: string[];
    validation_tips: string[];
}
export interface BusinessSuggestions {
    target_audience: string[];
    sales_channels: string[];
    pricing_model: string[];
    customer_type: string[];
    integration_needs: string[];
}
export interface IdeaVariation {
    id: string;
    title: string;
    description: string;
    differentiator: string;
    targetMarket: string;
    revenueModel: string;
    isSelected?: boolean;
    isEditing?: boolean;
}
export interface ComponentVariation {
    id: string;
    text: string;
    isSelected?: boolean;
    rating?: number;
    notes?: string;
}
export type ComponentType = 'problem_statement' | 'solution_concept' | 'target_audience' | 'unique_value' | 'business_model' | 'marketing_strategy' | 'revenue_model' | 'go_to_market';
export interface Message {
    role: 'user' | 'assistant';
    content: string;
}
export declare class IdeaGenerationService {
    private generalLLMService;
    private companyModelService;
    constructor(generalLLMService?: GeneralLLMService, companyModelService?: CompanyModelService);
    generateBusinessIdeas(context: QueryContext): Promise<BusinessIdea[]>;
    refineIdea(idea: BusinessIdea, context: QueryContext): Promise<IdeaFeedback>;
    analyzeMarket(idea: BusinessIdea, context: QueryContext): Promise<any>;
    generateBusinessModel(idea: BusinessIdea, context: QueryContext): Promise<BusinessSuggestions>;
    generateIdeaVariations(idea: BusinessIdea, context: QueryContext): Promise<IdeaVariation[]>;
    chatResponse(message: string, history: Message[], context: QueryContext): Promise<string>;
    generateComponentVariations(idea: BusinessIdea, componentType: ComponentType, context: QueryContext): Promise<ComponentVariation[]>;
    saveComponentVariation(ideaId: string, userId: string, componentType: ComponentType, variation: ComponentVariation): Promise<boolean>;
    getComponentVariations(ideaId: string, userId: string, componentType: ComponentType): Promise<ComponentVariation[]>;
    private createBusinessIdeasPrompt;
    private createIdeaRefinementPrompt;
    private createMarketAnalysisPrompt;
    private createBusinessModelPrompt;
    private createIdeaVariationsPrompt;
    private createChatPrompt;
    private getFallbackIdeas;
    private getFallbackFeedback;
    private getFallbackMarketAnalysis;
    private getFallbackBusinessModel;
    private getFallbackVariations;
    private getFallbackComponentVariations;
    private createComponentVariationPrompt;
}
export declare const ideaGenerationService: IdeaGenerationService;
//# sourceMappingURL=idea-generation.service.d.ts.map