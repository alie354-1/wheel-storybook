import { default as React } from 'react';
import { StandupEntry, StandupFeedback, StandupTask } from '../standup-ai.service';
interface StandupAIContextType {
    generateSectionFeedback: (section: 'accomplished' | 'working_on' | 'blockers' | 'goals', currentInput: string, currentEntry: StandupEntry) => Promise<StandupFeedback>;
    generateStandupSummary: (entry: StandupEntry) => Promise<any>;
    generateTasks: (entry: StandupEntry) => Promise<StandupTask[]>;
    isLoading: boolean;
}
/**
 * Standup AI Context Provider component
 * Provides AI capabilities specifically for standup functionality
 */
export declare const StandupAIProvider: React.FC<{
    children: React.ReactNode;
}>;
/**
 * Custom hook to use the Standup AI context
 */
export declare const useStandupAIContext: () => StandupAIContextType;
export {};
//# sourceMappingURL=standup-context-provider.d.ts.map