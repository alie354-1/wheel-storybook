import { IdeaPlaygroundIdea } from '../../types/idea-playground.types';
import { IdeaGenerationResult, RefinementResult } from '../../types/idea-generation.types';
/**
 * Legacy idea data format
 */
export interface LegacyIdeaData {
    id?: string;
    title: string;
    description: string;
    problem?: string;
    solution?: string;
    audience?: string | string[];
    value_prop?: string;
    business_model?: string;
    tags?: string[];
    status?: string;
    created_by?: string;
    created_at?: string;
    updated_at?: string;
}
/**
 * Convert legacy idea data to the current IdeaPlaygroundIdea format
 */
export declare function convertLegacyIdeaToCurrentFormat(legacyData: LegacyIdeaData): Partial<IdeaPlaygroundIdea>;
/**
 * Convert current IdeaPlaygroundIdea to the generation result format
 */
export declare function convertIdeaToGenerationResult(idea: IdeaPlaygroundIdea): IdeaGenerationResult;
/**
 * Convert current IdeaPlaygroundIdea to the refinement result format
 */
export declare function convertIdeaToRefinementResult(idea: IdeaPlaygroundIdea, feedback: string): RefinementResult;
/**
 * Create an empty idea template
 */
export declare function createEmptyIdea(userId: string): Partial<IdeaPlaygroundIdea>;
/**
 * Industry-specific templates
 */
export declare const industryTemplates: Record<string, Partial<IdeaPlaygroundIdea>>;
/**
 * Get an industry-specific template
 */
export declare function getIndustryTemplate(industry: string, userId: string): Partial<IdeaPlaygroundIdea>;
//# sourceMappingURL=type-compatibility.d.ts.map