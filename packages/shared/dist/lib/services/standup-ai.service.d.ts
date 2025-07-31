import { GeneralLLMService, QueryContext } from './general-llm.service';
import { CompanyModelService } from './company-model.service';
export interface StandupEntry {
    accomplished: string;
    working_on: string;
    blockers: string;
    goals: string;
    answers?: Record<string, string> | null;
}
export interface StandupFeedback {
    content: string;
    follow_up_questions?: string[];
}
export interface StandupSummary {
    content: string;
    strengths: string[];
    areas_for_improvement: string[];
    opportunities: string[];
    risks: string[];
    strategic_recommendations: string[];
}
export interface SectionConversation {
    messages: Array<{
        role: 'user' | 'assistant';
        content: string;
    }>;
}
export interface StandupTask {
    id?: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status?: 'pending' | 'in_progress' | 'completed';
    estimated_hours: number;
    task_type: string;
    implementation_tips: string[];
    potential_challenges: string[];
    success_metrics: string[];
    resources: {
        title: string;
        url: string;
        type: string;
        description: string;
    }[];
    learning_resources: {
        title: string;
        url: string;
        type: string;
        platform: string;
        description: string;
    }[];
    tools: {
        name: string;
        url: string;
        category: string;
        description: string;
    }[];
}
export declare class StandupAIService {
    private generalLLMService;
    private companyModelService;
    private static askedQuestions;
    constructor(generalLLMService?: GeneralLLMService, companyModelService?: CompanyModelService);
    private getSectionConversation;
    private trackQuestion;
    private hasAskedQuestion;
    private calculateSimilarity;
    private checkAndResetLLMService;
    generateSectionFeedback(section: 'accomplished' | 'working_on' | 'blockers' | 'goals', currentInput: string, currentEntry: StandupEntry, context: QueryContext): Promise<StandupFeedback>;
    generateStandupSummary(entry: StandupEntry, context: QueryContext): Promise<StandupSummary>;
    generateTasks(entry: StandupEntry, userId: string, context: QueryContext): Promise<StandupTask[]>;
    private getFallbackTasks;
    private createSectionPrompt;
    private createSummaryPrompt;
    private createTasksPrompt;
    private extractFollowUpQuestions;
    private validatePriority;
}
export declare const standupAIService: StandupAIService;
//# sourceMappingURL=standup-ai.service.d.ts.map