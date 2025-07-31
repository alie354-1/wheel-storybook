import { default as React, ReactNode } from 'react';
import { IdeaPlaygroundFacade } from '../services/idea-playground.service.facade';
import { Idea, RefinementLevel, RefinementResult, BusinessModelCanvas, ValuePropositionCanvas } from '../services/idea-playground';
interface IdeaPlaygroundContextValue {
    facade: IdeaPlaygroundFacade;
    isLoading: boolean;
    error: Error | null;
    setLoading: (loading: boolean) => void;
    setError: (error: Error | null) => void;
    generateIdeas: (topic?: string, count?: number, context?: any) => Promise<Idea[]>;
    refineIdea: (idea: string, level?: RefinementLevel, context?: any) => Promise<RefinementResult>;
    generateBusinessModelCanvas: (idea: string, context?: any) => Promise<BusinessModelCanvas>;
    generateValuePropositionCanvas: (idea: string, context?: any) => Promise<ValuePropositionCanvas>;
    saveIdea: (idea: Idea) => Promise<Idea & {
        id: string;
    }>;
}
export declare const IdeaPlaygroundProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useIdeaPlayground: () => IdeaPlaygroundContextValue;
export {};
//# sourceMappingURL=IdeaPlaygroundContext.d.ts.map