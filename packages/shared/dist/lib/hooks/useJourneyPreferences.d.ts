/**
 * User preferences for Journey system
 * Part of Sprint 3 implementation
 */
export interface JourneyPreferences {
    viewMode: 'timeline' | 'list';
    expandedPhases: string[];
    lastVisitedSteps: string[];
    favoriteSteps: string[];
    dismissedTips: string[];
    savedFilters: SavedFilter[];
}
interface SavedFilter {
    id: string;
    name: string;
    filters: Record<string, any>;
}
/**
 * Hook for managing user journey preferences with persistence
 * Added in Sprint 3 to support user preference persistence
 */
export declare const useJourneyPreferences: () => {
    preferences: JourneyPreferences;
    isLoading: boolean;
    setViewMode: (viewMode: "timeline" | "list") => void;
    addToFavorites: (stepId: string) => void;
    removeFromFavorites: (stepId: string) => void;
    recordVisitedStep: (stepId: string) => void;
    togglePhaseExpansion: (phaseId: string) => void;
    saveFilter: (name: string, filterConfig: Record<string, any>) => string;
    deleteFilter: (filterId: string) => void;
    dismissTip: (tipId: string) => void;
};
export default useJourneyPreferences;
//# sourceMappingURL=useJourneyPreferences.d.ts.map