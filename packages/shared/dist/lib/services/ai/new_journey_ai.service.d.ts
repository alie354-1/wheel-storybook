import { NewStepOutcome, NewStepTask, NewSuggestionPriority } from '../../types/new_journey.types';
interface AdaptiveSuggestion {
    suggestion: string;
    priority: NewSuggestionPriority;
}
declare class NewJourneyAIService {
    private openai;
    constructor();
    /**
     * Generates adaptive suggestions based on a step's outcome.
     * @param outcome - The detailed outcome of a completed step.
     * @returns An array of concise, actionable suggestions with priority.
     */
    generateAdaptiveSuggestions(outcome: NewStepOutcome): Promise<AdaptiveSuggestion[]>;
    /**
     * Analyzes a standup message to identify completed tasks.
     * @param message - The user's standup message.
     * @param tasks - The list of available tasks for the current step.
     * @returns An array of task IDs that were identified as completed.
     */
    analyzeStandupMessage(message: string, tasks: NewStepTask[]): Promise<string[]>;
    /**
     * Extracts detailed notes from a user message about completed tasks
     * @param message - The user message containing details about task completion
     * @param tasks - Array of tasks that were identified as completed
     * @returns Extracted notes about the completed tasks
     */
    extractTaskNotesFromMessage(message: string, tasks: NewStepTask[]): Promise<string>;
    /**
     * Recommends the next step for a company to focus on.
     * @param companyProgress - An overview of the company's current progress.
     * @returns The ID of the recommended next step.
     */
    recommendNextStep(companyProgress: any): Promise<string | null>;
    /**
     * Enhances standup bot prompts with journey-specific context
     * @param promptText - The original standup prompt
     * @param journeyContext - Context from the journey system
     * @returns Enhanced prompt with journey context
     */
    enhanceStandupPrompt(promptText: string, journeyContext: string): Promise<string>;
}
export declare const newJourneyAIService: NewJourneyAIService;
export {};
//# sourceMappingURL=new_journey_ai.service.d.ts.map