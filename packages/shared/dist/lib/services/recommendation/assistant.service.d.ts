interface StepAssistantResource {
    title: string;
    description: string;
    url: string;
    type: 'video' | 'document' | 'article' | 'tool';
}
interface StepAssistantSuggestion {
    text: string;
    priority: number;
}
interface StepAssistantData {
    suggestions: StepAssistantSuggestion[];
    resources: StepAssistantResource[];
}
interface StepAssistantResponse {
    answer: string;
    confidence: number;
    sources?: string[];
}
export declare class AssistantRecommendationService {
    /**
     * Get step assistant data including suggested questions and resources
     */
    static getStepAssistantData(stepId: string, companyId: string): Promise<StepAssistantData>;
    /**
     * Ask the step assistant a question and get an answer
     */
    static askStepAssistant(stepId: string, question: string, companyId: string): Promise<StepAssistantResponse>;
    /**
     * Track assistant events for analytics
     * @private
     */
    private static trackAssistantEvent;
    /**
     * Generate suggested questions based on step context
     * @private
     */
    private static generateSuggestedQuestions;
    /**
    * Map resource type string to defined enum/type
    * @private
    */
    private static mapResourceType;
    /**
     * Generate a simulated answer for the step assistant.
     * @private
     */
    private static generateAnswer;
}
export {};
//# sourceMappingURL=assistant.service.d.ts.map