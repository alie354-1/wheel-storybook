import { StandupEntry } from './services/standup-ai.service';
export declare const generateTasks: (entry: StandupEntry, userId: string) => Promise<{
    feedback: {
        strengths: string[];
        areas_for_improvement: string[];
        opportunities: string[];
        risks: string[];
        strategic_recommendations: string[];
    };
    follow_up_questions: never[];
    tasks: import('./services/standup-ai.service').StandupTask[];
} | {
    feedback: {
        strengths: string[];
        areas_for_improvement: string[];
        opportunities: string[];
        risks: string[];
        strategic_recommendations: string[];
    };
    follow_up_questions: string[];
    tasks: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        title: string;
        description: string;
        priority: string;
        status: "pending";
        estimated_hours: number;
        task_type: string;
        implementation_tips: string[];
        potential_challenges: string[];
        success_metrics: string[];
        resources: never[];
        learning_resources: never[];
        tools: never[];
    }[];
}>;
export declare const generateMarketAnalysis: (idea: any) => Promise<{
    customer_profiles: {
        segment: string;
        description: string;
        needs: string[];
        pain_points: string[];
        buying_behavior: string;
        sources: {
            name: string;
            url: string;
            type: string;
            year: number;
        }[];
    }[];
    early_adopters: {
        type: string;
        characteristics: string[];
        acquisition_strategy: string;
        sources: {
            name: string;
            url: string;
            type: string;
            year: number;
        }[];
    }[];
    sales_channels: {
        channel: string;
        effectiveness: number;
        cost: string;
        timeline: string;
        sources: {
            name: string;
            url: string;
            type: string;
            year: number;
        }[];
    }[];
    pricing_insights: {
        model: string;
        price_point: string;
        justification: string;
        sources: {
            name: string;
            url: string;
            type: string;
            year: number;
        }[];
    }[];
    market_size: {
        tam: string;
        sam: string;
        som: string;
        growth_rate: string;
        sources: {
            name: string;
            url: string;
            type: string;
            year: number;
        }[];
    };
}>;
export declare const generateMarketSuggestions: (idea: any) => Promise<{
    target_audience: string[];
    sales_channels: string[];
    pricing_model: string[];
    customer_type: string[];
    integration_needs: string[];
}>;
export declare const generateIdeaVariations: (idea: any) => Promise<{
    isSelected: boolean;
    isEditing: boolean;
    id: string;
    title: string;
    description: string;
    differentiator: string;
    targetMarket: string;
    revenueModel: string;
}[]>;
export declare const generateCombinedIdeas: (baseIdea: string, selectedVariations: any[]) => Promise<{
    isSelected: boolean;
    isEditing: boolean;
    id: string;
    title: string;
    description: string;
    sourceElements: string[];
    targetMarket: string;
    revenueModel: string;
    valueProposition: string;
}[]>;
//# sourceMappingURL=openai.d.ts.map