import { LLMOrchestrator } from './llm/orchestrator';
import { AbstractionLevel } from './llm/context/abstraction-context.provider';
import { CompanyInfo } from './llm/context/company-context.provider';
/**
 * Result of an idea generation process
 */
export interface IdeaGenerationResult {
    /** Title of the idea */
    title: string;
    /** Description of the idea */
    description: string;
    /** Problem statement */
    problem_statement: string;
    /** Solution concept */
    solution_concept: string;
    /** Target audience (can be string or string[]) */
    target_audience: string[] | string;
    /** Unique value proposition */
    unique_value: string;
    /** Business model */
    business_model: string;
    /** Optional tags */
    tags?: string[];
    /** Optional version number */
    version?: number;
    /** Any additional fields */
    [key: string]: any;
}
/**
 * Parameters for idea generation
 */
export interface IdeaGenerationParams {
    /** Specific industry or domain */
    industry?: string;
    /** Target audience */
    targetAudience?: string;
    /** Problem area to focus on */
    problemArea?: string;
    /** Technology trends to leverage */
    techTrends?: string[];
    /** Abstract level for the response */
    abstractionLevel?: AbstractionLevel;
    /** Company context information */
    companyInfo?: CompanyInfo;
    /** Maximum number of results to generate */
    maxResults?: number;
    /** Any additional parameters */
    [key: string]: any;
}
/**
 * Service for generating business ideas
 */
export declare class IdeaGenerationService {
    private llmOrchestrator;
    constructor(llmOrchestrator: LLMOrchestrator);
    /**
     * Generate a single business idea
     */
    generateIdea(params?: IdeaGenerationParams): Promise<IdeaGenerationResult>;
    /**
     * Generate multiple business ideas
     */
    generateMultipleIdeas(params?: IdeaGenerationParams): Promise<IdeaGenerationResult[]>;
    /**
     * Build a prompt for generating business ideas
     */
    private buildIdeaGenerationPrompt;
    /**
     * Get the expected output format for the LLM
     */
    private getOutputFormat;
    /**
     * Parse the LLM response into a structured IdeaGenerationResult
     */
    private parseIdeaGenerationResponse;
    /**
     * Create a structured idea from unstructured text
     */
    private createStructuredIdeaFromText;
    /**
     * Get a fallback idea in case of errors
     */
    private getFallbackIdea;
}
//# sourceMappingURL=idea-generation.service.d.ts.map