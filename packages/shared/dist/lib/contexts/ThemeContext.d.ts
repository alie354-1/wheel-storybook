import { default as React } from 'react';
import { LegacyTheme } from '../services/theme.service';
import { Theme, ThemeMode } from '../types/theme.types';
export type LegacyThemeType = LegacyTheme;
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    legacyTheme: LegacyTheme;
    applyTheme: () => void;
    resetTheme: () => void;
    isLoading: boolean;
    error: string | null;
}
export declare const useTheme: () => ThemeContextType;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map