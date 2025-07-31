import { Country } from 'react-phone-number-input';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface PhoneInputProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** The current phone number value */
    value?: string;
    /** Callback when the phone number changes */
    onChange?: (value?: string) => void;
    /** Default country for the input */
    defaultCountry?: Country;
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
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Name attribute */
    name?: string;
    /** ID attribute */
    id?: string;
}
export declare const PhoneInput: import('react').ForwardRefExoticComponent<PhoneInputProps & import('react').RefAttributes<any>>;
//# sourceMappingURL=phoneinput.d.ts.map