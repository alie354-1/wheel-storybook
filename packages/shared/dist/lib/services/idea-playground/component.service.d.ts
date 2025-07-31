import { LLMOrchestrator } from './llm/orchestrator';
import { LLMRequestContext } from './llm/context/interface';
/**
 * Component type enum
 */
export declare enum ComponentType {
    UI = "ui",
    FEATURE = "feature",
    TECHNICAL = "technical",
    MARKETING = "marketing",
    BUSINESS = "business"
}
/**
 * Component interface
 */
export interface Component {
    id?: string;
    type: ComponentType;
    name: string;
    description: string;
    details?: string;
    tags?: string[];
}
/**
 * Component variation interface
 */
export interface ComponentVariation {
    originalComponentId?: string;
    type: ComponentType;
    name: string;
    description: string;
    details?: string;
    differentiators: string[];
    tags?: string[];
}
/**
 * Service for component-related operations
 */
export declare class ComponentService {
    private llmOrchestrator;
    /**
     * Create a new component service
     *
     * @param llmOrchestrator - The LLM orchestrator to use
     */
    constructor(llmOrchestrator: LLMOrchestrator);
    /**
     * Generate components for an idea
     *
     * @param idea - The idea to generate components for
     * @param types - The types of components to generate
     * @param context - Optional context for generation
     * @returns The generated components
     */
    generateComponents(idea: string, types?: ComponentType[], context?: LLMRequestContext): Promise<Component[]>;
    /**
     * Generate variations of a component
     *
     * @param component - The component to generate variations for
     * @param count - The number of variations to generate
     * @param context - Optional context for generation
     * @returns The generated variations
     */
    generateComponentVariations(component: Component | string, count?: number, context?: LLMRequestContext): Promise<ComponentVariation[]>;
    /**
     * Evaluate a component
     *
     * @param component - The component to evaluate
     * @param criteria - The evaluation criteria
     * @param context - Optional context for evaluation
     * @returns The evaluation results
     */
    evaluateComponent(component: Component, criteria?: string[], context?: LLMRequestContext): Promise<Record<string, number>>;
    /**
     * Merge multiple components into a new component
     *
     * @param components - The components to merge
     * @param context - Optional context for merging
     * @returns The merged component
     */
    mergeComponents(components: Component[], context?: LLMRequestContext): Promise<Component>;
}
//# sourceMappingURL=component.service.d.ts.map