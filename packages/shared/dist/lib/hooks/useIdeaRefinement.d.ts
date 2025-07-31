import { RefinementLevel, RefinementResult } from '../services/idea-playground';
interface IdeaRefinementParams {
    idea_id: string;
    focus_areas?: string[];
    additional_notes?: string;
}
export declare const useIdeaRefinement: () => {
    refinementResults: RefinementResult[];
    refineIdea: (idea: string, level?: RefinementLevel) => Promise<import('../types/idea-playground.types').IdeaPlaygroundIdea>;
    refineIdeaWithParams: (params: IdeaRefinementParams) => Promise<import('../types/idea-playground.types').IdeaPlaygroundIdea>;
    compareRefinements: (results: RefinementResult[]) => any;
    generateVariations: (idea: string, count?: number) => Promise<any>;
    isLoading: boolean;
    error: Error | null;
};
export {};
//# sourceMappingURL=useIdeaRefinement.d.ts.map