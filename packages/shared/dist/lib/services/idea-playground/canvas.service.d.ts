import { IdeaPlaygroundIdea } from '../../types/idea-playground.types';
import { LLMOrchestrator } from './llm/orchestrator';
/**
 * Base canvas interface with common properties
 */
export interface BaseCanvas {
    id: string;
    ideaId: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    type: string;
}
/**
 * Business Model Canvas sections
 */
export interface BusinessModelCanvas extends BaseCanvas {
    type: 'business-model';
    keyPartners: string[];
    keyActivities: string[];
    keyResources: string[];
    valuePropositions: string[];
    customerRelationships: string[];
    channels: string[];
    customerSegments: string[];
    costStructure: string[];
    revenueStreams: string[];
}
/**
 * Value Proposition Canvas sections
 */
export interface ValuePropositionCanvas extends BaseCanvas {
    type: 'value-proposition';
    customerJobs: string[];
    customerPains: string[];
    customerGains: string[];
    products: string[];
    painRelievers: string[];
    gainCreators: string[];
}
/**
 * Create parameters for a new Business Model Canvas
 */
export interface CreateBusinessModelCanvasParams {
    ideaId: string;
    name?: string;
    initialData?: Partial<BusinessModelCanvas>;
    userId: string;
}
/**
 * Create parameters for a new Value Proposition Canvas
 */
export interface CreateValuePropositionCanvasParams {
    ideaId: string;
    name?: string;
    initialData?: Partial<ValuePropositionCanvas>;
    userId: string;
}
/**
 * Update parameters for a canvas
 */
export interface UpdateCanvasParams {
    canvasId: string;
    data: Partial<BusinessModelCanvas> | Partial<ValuePropositionCanvas>;
    userId: string;
}
/**
 * Service for creating and managing different canvas types
 */
export declare class CanvasService {
    private orchestrator;
    constructor(orchestrator: LLMOrchestrator);
    /**
     * Create a new Business Model Canvas for an idea
     */
    createBusinessModelCanvas(params: CreateBusinessModelCanvasParams): Promise<BusinessModelCanvas>;
    /**
     * Create a new Value Proposition Canvas for an idea
     */
    createValuePropositionCanvas(params: CreateValuePropositionCanvasParams): Promise<ValuePropositionCanvas>;
    /**
     * Get a canvas by its ID
     */
    getCanvas(canvasId: string): Promise<BusinessModelCanvas | ValuePropositionCanvas>;
    /**
     * Get all canvases for an idea
     */
    getCanvasesForIdea(ideaId: string): Promise<(BusinessModelCanvas | ValuePropositionCanvas)[]>;
    /**
     * Update an existing canvas
     */
    updateCanvas(params: UpdateCanvasParams): Promise<BusinessModelCanvas | ValuePropositionCanvas>;
    /**
     * Delete a canvas
     */
    deleteCanvas(canvasId: string, userId: string): Promise<void>;
    /**
     * Auto-generate a Business Model Canvas from an idea using AI
     */
    generateBusinessModelCanvas(idea: IdeaPlaygroundIdea, userId: string): Promise<BusinessModelCanvas>;
    /**
     * Auto-generate a Value Proposition Canvas from an idea using AI
     */
    generateValuePropositionCanvas(idea: IdeaPlaygroundIdea, userId: string): Promise<ValuePropositionCanvas>;
    /**
     * Generate default Business Model Canvas for fallback
     */
    private generateDefaultBMC;
    /**
     * Generate default Value Proposition Canvas for fallback
     */
    private generateDefaultVPC;
}
//# sourceMappingURL=canvas.service.d.ts.map