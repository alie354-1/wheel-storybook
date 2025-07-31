import { Suggestion } from '../../../../components/idea-playground/pathway1/SuggestionCard';
/**
 * Service responsible for merging multiple idea suggestions
 * into a single cohesive concept
 */
export declare class IdeaMergerService {
    /**
     * Merge multiple suggestions into a single cohesive idea
     * Delegates to the AI service for the actual merging
     */
    mergeSuggestions(suggestions: Suggestion[], userId: string): Promise<Suggestion>;
    /**
     * Create a basic merged suggestion from multiple suggestions
     * This is a fallback method in case the AI-powered merging fails
     */
    private createBasicMergedSuggestion;
}
export declare const ideaMergerService: IdeaMergerService;
//# sourceMappingURL=idea-merger.service.d.ts.map