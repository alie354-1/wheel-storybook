export interface ConversationMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}
export interface ConversationMemory {
    id: string;
    user_id: string;
    messages: ConversationMessage[];
    summary?: string;
    topics?: string[];
    last_updated: string;
    created_at: string;
}
export interface StandupMemory {
    lastStandup?: {
        date: string;
        accomplished: string;
        working_on: string;
        blockers: string;
        goals: string;
        answers?: Record<string, string>;
    };
    recentStandups?: Array<{
        date: string;
        accomplished: string;
        working_on: string;
        blockers: string;
        goals: string;
        answers?: Record<string, string>;
    }>;
    progressSummary?: string;
}
declare class ConversationMemoryService {
    getMemory(userId: string): Promise<ConversationMemory | null>;
    saveMemory(userId: string, messages: ConversationMessage[], summary?: string, topics?: string[]): Promise<string | null>;
    addMessage(userId: string, role: 'user' | 'assistant', content: string): Promise<boolean>;
    getStandupMemory(userId: string): Promise<StandupMemory>;
    private generateProgressSummary;
}
export declare const conversationMemoryService: ConversationMemoryService;
export {};
//# sourceMappingURL=conversation-memory.service.d.ts.map