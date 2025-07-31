import { GroupBase, Props } from 'react-select';
export type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
export type GroupedOption = {
    label: string;
    options: SelectOption[];
};
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export type SelectSize = 'sm' | 'md' | 'lg';
export interface EnhancedSelectProps extends Props<SelectOption, boolean, GroupBase<SelectOption>> {
    context?: WorkspaceContext;
    validationState?: ValidationState;
    selectSize?: SelectSize;
    label?: string;
    helperText?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    required?: boolean;
}
export declare const EnhancedSelect: import('react').ForwardRefExoticComponent<EnhancedSelectProps & import('react').RefAttributes<any>>;
//# sourceMappingURL=select.d.ts.map