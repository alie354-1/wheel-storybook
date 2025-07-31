import { IdeaPlaygroundIdea } from '../types/idea-playground.types';
import { IdeaVariation, MergedIdea, IdeaVariationParams, IdeaMergeParams } from '../types/idea-pathway.types';
declare class IdeaPlaygroundPathwayService {
    /**
     * Generates variations of an existing idea
     * @param userId User ID
     * @param params Parameters for variation generation
     * @returns Array of generated variations
     */
    generateIdeaVariations(userId: string, params: IdeaVariationParams): Promise<IdeaVariation[]>;
    /**
     * Updates the selection state of a variation
     * @param variationId Variation ID
     * @param isSelected Whether the variation is selected
     * @returns True if update was successful
     */
    updateVariationSelection(variationId: string, isSelected: boolean): Promise<boolean>;
    /**
     * Merges selected variations into new ideas
     * @param userId User ID
     * @param params Merge parameters
     * @returns Array of merged ideas
     */
    mergeSelectedVariations(userId: string, params: IdeaMergeParams): Promise<MergedIdea[]>;
    /**
     * Gets merged ideas for a canvas
     * @param canvasId Canvas ID
     * @returns Array of merged ideas with source variations
     */
    getMergedIdeasForCanvas(canvasId: string): Promise<MergedIdea[]>;
    /**
     * Saves a variation as a new idea
     * @param userId User ID
     * @param canvasId Canvas ID
     * @param variation Variation to save
     * @returns Saved idea
     */
    saveVariationAsIdea(userId: string, canvasId: string, variation: IdeaVariation): Promise<IdeaPlaygroundIdea>;
    /**
     * Saves a merged idea as a new idea
     * @param userId User ID
     * @param canvasId Canvas ID
     * @param mergedIdea Merged idea to save
     * @returns Saved idea
     */
    saveMergedIdeaAsIdea(userId: string, canvasId: string, mergedIdea: MergedIdea): Promise<IdeaPlaygroundIdea>;
    /**
     * Updates the status of an idea
     * @param ideaId Idea ID
     * @param status New status
     * @returns True if update was successful
     */
    updateIdeaStatus(ideaId: string, status: string): Promise<boolean>;
}
export declare const ideaPlaygroundPathwayService: IdeaPlaygroundPathwayService;
export {};
//# sourceMappingURL=idea-playground-pathway.service.d.ts.map