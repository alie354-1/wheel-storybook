import { DeckComment, AiServiceRequestPayload, AiGeneratedSuggestion } from '../../deck-builder/types/index.ts';
interface SentimentAnalysisResult {
    sentiment: 'positive' | 'negative' | 'neutral';
    score: number;
}
interface IntentRecognitionResult {
    intent: 'question' | 'suggestion' | 'criticism' | 'praise' | 'concern' | 'other';
    confidence: number;
}
interface TopicCategorizationResult {
    category: string;
    confidence: number;
}
interface ActionItem {
    text: string;
    priority?: 'high' | 'medium' | 'low';
}
interface FeedbackAnalysis {
    sentiment: SentimentAnalysisResult;
    intent: IntentRecognitionResult;
    topics: TopicCategorizationResult[];
    actionItems: ActionItem[];
    overallSummary?: string;
}
interface ExpertiseDetectionResult {
    expertise_score: number;
}
/**
 * Analyzes the sentiment of a given text.
 * @param text The text to analyze.
 * @returns A promise that resolves to the sentiment analysis result.
 */
export declare function analyzeSentiment(text: string): Promise<SentimentAnalysisResult>;
/**
 * Detects the expertise level from a given text.
 * @param text The text to analyze.
 * @returns A promise that resolves to the expertise detection result.
 */
export declare function detectExpertise(text: string): Promise<ExpertiseDetectionResult>;
/**
 * Recognizes the intent of a given text.
 * @param text The text to analyze.
 * @returns A promise that resolves to the intent recognition result.
 */
export declare function recognizeIntent(text: string): Promise<IntentRecognitionResult>;
/**
 * Categorizes a comment into predefined topics.
 * @param text The comment text to categorize.
 * @returns A promise that resolves to the topic categorization result.
 */
export declare function categorizeCommentTopics(text: string): Promise<TopicCategorizationResult[]>;
/**
 * Extracts potential action items from a given text.
 * @param text The text to analyze.
 * @returns A promise that resolves to an array of extracted action items.
 */
export declare function extractActionItems(text: string): Promise<ActionItem[]>;
/**
 * Generates text rewrite suggestions for a given piece of text, optionally using context and feedback.
 * @param originalText The text to rewrite.
 * @param context Optional context about where the text appears (e.g., "slide title", "problem statement section").
 * @param feedbackPrompt Optional specific feedback or instruction for the rewrite (e.g., "Make it more concise", "Explain this for a non-technical audience").
 * @returns A promise that resolves to an array of rewrite suggestions.
 */
export declare function generateRewriteSuggestions(originalText: string, context?: string, feedbackPrompt?: string): Promise<string[]>;
/**
 * Processes a single DeckComment to extract full analysis.
 * This function is more comprehensive and might be used for detailed views.
 * For simply populating deck_comments, direct calls to individual AI functions might be preferred in deckService.
 * @param comment The DeckComment object.
 * @returns A promise that resolves to a FeedbackAnalysis object.
 */
export declare function analyzeSingleComment(comment: DeckComment): Promise<FeedbackAnalysis>;
export declare const aiService: {
    analyzeSentiment: typeof analyzeSentiment;
    recognizeIntent: typeof recognizeIntent;
    categorizeCommentTopics: typeof categorizeCommentTopics;
    extractActionItems: typeof extractActionItems;
    generateRewriteSuggestions: typeof generateRewriteSuggestions;
    analyzeSingleComment: typeof analyzeSingleComment;
    detectExpertise: typeof detectExpertise;
    isInitialized: () => boolean;
    /**
     * Generates slide rewrite suggestions based on comments and existing slide content.
     * This will call the 'ai-generate-slide-rewrite-from-feedback' Supabase function.
     * @param payload The request payload containing deckId, slideId, comments, slideContent, and optional aggregatedInsightsSummary.
     * @returns A promise that resolves to an array of AiGeneratedSuggestion objects.
     */
    generateSlideRewriteSuggestions(payload: AiServiceRequestPayload): Promise<AiGeneratedSuggestion[]>;
};
export default aiService;
//# sourceMappingURL=aiService.d.ts.map