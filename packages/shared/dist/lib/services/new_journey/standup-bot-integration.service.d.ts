/**
 * Standup Bot Integration Service
 *
 * Handles the processing of standup updates, natural language analysis,
 * and extraction of task completions from user messages.
 */
interface ProcessMessageParams {
    companyId: string;
    journeyId: string;
    stepId: string;
    taskIds: string[];
    message: string;
}
interface ProcessMessageResponse {
    text: string;
    completedTaskIds: string[];
}
export declare const standupBotIntegrationService: {
    /**
     * Process a user's standup message to extract task completions and generate a response.
     */
    processMessage(params: ProcessMessageParams): Promise<ProcessMessageResponse>;
    /**
     * Save a standup message to the database for future analysis and history.
     */
    saveStandupMessage(companyId: string, stepId: string, message: string, sender: "user" | "bot"): Promise<void>;
    /**
     * Analyze a message to detect which tasks have been completed.
     * This is a simplified implementation - in a real system, we would use
     * more sophisticated NLP to detect task completions.
     */
    detectCompletedTasks(message: string, taskIds: string[]): Promise<string[]>;
};
export {};
//# sourceMappingURL=standup-bot-integration.service.d.ts.map