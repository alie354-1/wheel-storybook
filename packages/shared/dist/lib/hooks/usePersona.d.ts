import { Persona } from '../types/multi-persona-profile.types';
/**
 * Hook to manage persona state and operations
 */
export declare const usePersona: () => {
    personas: Persona[];
    activePersona: Persona | null;
    isLoading: boolean;
    error: string | null;
    switchPersona: (personaId: string) => Promise<boolean | undefined>;
};
//# sourceMappingURL=usePersona.d.ts.map