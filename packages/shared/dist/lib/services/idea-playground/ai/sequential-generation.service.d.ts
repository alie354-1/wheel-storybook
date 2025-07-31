import { IdeaPlaygroundIdea } from '../../../types/idea-playground.types';
import { Suggestion } from '../../../../components/idea-playground/pathway1/SuggestionCard';
/**
 * This service manages sequential generation of idea suggestions,
 * allowing for better performance, improved error handling, and
 * a more responsive user experience.
 */
export declare class SequentialGenerationService {
    /**
     * Generate a set of suggestions one by one.
     * Shows suggestions in real-time as they are generated.
     * Provides fallback to mock suggestions if AI generation fails.
     * Enforces a maximum of 6 suggestions and minimum of 3 when possible.
     */
    generateSuggestionsSequentially(idea: IdeaPlaygroundIdea, userId: string, count: number | undefined, progressCallback: (suggestion: Suggestion, isMock: boolean, index: number, totalCount: number) => void): Promise<Suggestion[]>;
}
export declare const sequentialGenerationService: SequentialGenerationService;
//# sourceMappingURL=sequential-generation.service.d.ts.map