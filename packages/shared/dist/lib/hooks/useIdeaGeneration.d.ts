import { Idea } from '../services/idea-playground';
interface IdeaGenerationParams {
    topic?: string;
    count?: number;
    industry?: string;
    problem_area?: string;
    useCompanyContext?: boolean;
    market_focus?: string;
    target_audience?: string[];
    keywords?: string[];
}
export declare const useIdeaGeneration: () => {
    ideas: Idea[];
    setIdeas: import('react').Dispatch<import('react').SetStateAction<Idea[]>>;
    generateIdeas: (params: IdeaGenerationParams) => Promise<any>;
    saveIdea: (idea: Idea) => Promise<any>;
    getIdeasForCanvas: (canvasId: string) => Promise<Idea[]>;
    isLoading: boolean;
    error: Error | null;
};
export {};
//# sourceMappingURL=useIdeaGeneration.d.ts.map