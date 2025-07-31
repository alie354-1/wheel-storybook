import { IdeaPlaygroundIdea } from '../types/idea-playground.types';
import { Suggestion } from '../../components/idea-playground/pathway1/SuggestionCard';
/**
 * Service to handle AI operations specifically for Pathway 1 of the Idea Playground
 */
export declare class IdeaPathway1AIService {
    /**
     * Helper method to check feature flags and reset LLM service if needed
     */
    private checkAndResetLLMService;
    /**
     * Generate a single company suggestion based on an initial idea
     */
    /**
     * Maximum number of retries for generating a suggestion
     */
    private MAX_RETRIES;
    /**
     * Timeout duration in milliseconds for single suggestion generation
     */
    private SUGGESTION_TIMEOUT_MS;
    /**
     * Attempts to recover a JSON object from malformed or incomplete JSON
     * This is used as a last resort when standard parsing methods fail
     */
    private tryRecoverBrokenJson;
    /**
     * Generate a single company suggestion based on an initial idea
     * With improved timeout handling, retry logic and error recovery
     */
    generateSingleSuggestion(idea: IdeaPlaygroundIdea, userId: string, variationIndex?: number, retryCount?: number): Promise<Suggestion>;
    /**
     * Generate multiple company suggestions based on an initial idea
     * Can now be implemented as a series of individual suggestion calls
     * or left as-is for backward compatibility
     */
    generateCompanySuggestions(idea: IdeaPlaygroundIdea, userId: string, count?: number): Promise<Suggestion[]>;
    /**
     * Public access to mock suggestions for components
     */
    generateMockSuggestionsPublic(idea: IdeaPlaygroundIdea, count: number): Suggestion[];
    /**
     * Generate mock suggestions based on an original idea (fallback method)
     */
    private generateMockSuggestions;
    /**
     * Create a basic merged suggestion from multiple suggestions
     */
    private createBasicMergedSuggestion;
    /**
     * Generate a merged suggestion from multiple selected suggestions
     */
    mergeSuggestions(suggestions: Suggestion[], userId: string): Promise<Suggestion>;
    /**
     * Regenerate a specific suggestion
     */
    regenerateSuggestion(originalSuggestion: Suggestion, idea: IdeaPlaygroundIdea, userId: string): Promise<Suggestion>;
    /**
     * Create a prompt for generating a single company suggestion
     */
    private createSingleSuggestionPrompt;
    /**
     * Create a prompt for generating multiple company suggestions
     */
    private createSuggestionPrompt;
    /**
     * Create a prompt for merging multiple suggestions
     */
    private createMergePrompt;
    /**
     * Create a prompt for regenerating a specific suggestion
     */
    private createRegenerationPrompt;
    /**
     * Parse the AI response to extract suggestion objects
     */
    private parseSuggestionsResponse;
    /**
     * Parse the AI response into a merged suggestion
     */
    private parseMergedSuggestion;
    /**
     * Parse the AI response into a regenerated suggestion
     */
    private parseRegeneratedSuggestion;
    /**
     * Validate and ensure all required fields are present in a suggestion
     */
    private validateAndCleanSuggestion;
}
export declare const ideaPathway1AIService: IdeaPathway1AIService;
//# sourceMappingURL=idea-pathway1-ai.service.d.ts.map