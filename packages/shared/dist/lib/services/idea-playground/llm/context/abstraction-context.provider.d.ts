import { BaseContextProvider } from './base-context.provider';
import { LLMRequestContext } from './interface';
/**
 * Abstraction level settings for prompting
 */
export declare enum AbstractionLevel {
    BEGINNER = "beginner",
    INTERMEDIATE = "intermediate",
    EXPERT = "expert",
    TECHNICAL = "technical",
    BUSINESS = "business",
    CREATIVE = "creative"
}
/**
 * Context provider that adjusts the language and concepts used in prompts
 * based on the user's preferred abstraction level
 */
export declare class AbstractionContextProvider extends BaseContextProvider {
    private level;
    constructor(level?: AbstractionLevel);
    /**
     * Update the abstraction level
     */
    setAbstractionLevel(level: AbstractionLevel): void;
    /**
     * Get the current abstraction level
     */
    getAbstractionLevel(): AbstractionLevel;
    /**
     * Process and enrich context with abstraction level guidance
     */
    processContext(context: LLMRequestContext): LLMRequestContext;
    /**
     * Get guidance for beginner level
     */
    private getBeginnerGuidance;
    /**
     * Get guidance for intermediate level
     */
    private getIntermediateGuidance;
    /**
     * Get guidance for expert level
     */
    private getExpertGuidance;
    /**
     * Get guidance for technical focus
     */
    private getTechnicalGuidance;
    /**
     * Get guidance for business focus
     */
    private getBusinessGuidance;
    /**
     * Get guidance for creative focus
     */
    private getCreativeGuidance;
}
//# sourceMappingURL=abstraction-context.provider.d.ts.map