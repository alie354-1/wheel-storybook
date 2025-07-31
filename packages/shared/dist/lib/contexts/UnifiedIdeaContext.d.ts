import { default as React, ReactNode } from 'react';
import { IdeaWorkspace, UnifiedIdea, IdeaGenerationParams } from '../types/unified-idea.types';
interface UnifiedIdeaContextType {
    workspaces: IdeaWorkspace[];
    currentWorkspace: IdeaWorkspace | null;
    setCurrentWorkspace: (workspace: IdeaWorkspace | null) => void;
    createWorkspace: (title: string, description?: string) => Promise<IdeaWorkspace | null>;
    updateWorkspace: (workspaceId: string, updates: Partial<IdeaWorkspace>) => Promise<boolean>;
    deleteWorkspace: (workspaceId: string) => Promise<boolean>;
    ideas: UnifiedIdea[];
    currentIdea: UnifiedIdea | null;
    setCurrentIdea: (idea: UnifiedIdea | null) => void;
    generateIdeas: (params: IdeaGenerationParams) => Promise<UnifiedIdea[]>;
    updateIdea: (ideaId: string, updates: Partial<UnifiedIdea>) => Promise<boolean>;
    deleteIdea: (ideaId: string) => Promise<boolean>;
    currentRefinementStep: number;
    setCurrentRefinementStep: (step: number) => void;
    isLoading: boolean;
    error: string;
    setError: (error: string) => void;
    success: string;
    setSuccess: (success: string) => void;
    saveToLocalStorage: () => void;
    loadFromLocalStorage: () => void;
    clearLocalStorage: () => void;
}
export declare const useUnifiedIdeaContext: () => UnifiedIdeaContextType;
interface UnifiedIdeaProviderProps {
    children: ReactNode;
    initialWorkspaceId?: string;
    initialIdeaId?: string;
    initialStep?: number;
}
export declare const UnifiedIdeaProvider: React.FC<UnifiedIdeaProviderProps>;
export {};
//# sourceMappingURL=UnifiedIdeaContext.d.ts.map