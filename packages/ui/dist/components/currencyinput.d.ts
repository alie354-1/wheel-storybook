import { CurrencyInputProps as ReactCurrencyInputProps } from 'react-currency-input-field';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface CurrencyInputProps extends ReactCurrencyInputProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** Validation state */
    validationState?: ValidationState;
    /** Helper text */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Warning message */
    warningMessage?: string;
    /** Success message */
    successMessage?: string;
    /** Label for the input */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
}
export declare const CustomCurrencyInput: import('react').ForwardRefExoticComponent<Omit<CurrencyInputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=currencyinput.d.ts.map