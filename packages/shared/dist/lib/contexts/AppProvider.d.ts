import { default as React, ReactNode } from 'react';
export interface AppProviderProps {
    children: ReactNode;
    captureErrors?: boolean;
    displayErrors?: boolean;
}
/**
 * Combined provider component that wraps the app to provide all contexts
 */
export declare const AppProvider: React.FC<AppProviderProps>;
//# sourceMappingURL=AppProvider.d.ts.map