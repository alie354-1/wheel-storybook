import { QueryContext } from './general-llm.service';
export interface AIService {
    generateTasks: (input: any, context: QueryContext) => Promise<any>;
    generateMarketAnalysis: (idea: any, context: QueryContext) => Promise<any>;
    generateMarketSuggestions: (idea: any, context: QueryContext) => Promise<any>;
    generateIdeaVariations: (idea: any, context: QueryContext) => Promise<any>;
}
declare class RealAIService implements AIService {
    generateTasks(input: any, context: QueryContext): Promise<any>;
    generateMarketAnalysis(idea: any, context: QueryContext): Promise<any>;
    generateMarketSuggestions(idea: any, context: QueryContext): Promise<any>;
    generateIdeaVariations(idea: any, context: QueryContext): Promise<any>;
}
export declare const aiService: RealAIService;
export {};
//# sourceMappingURL=ai.service.d.ts.map