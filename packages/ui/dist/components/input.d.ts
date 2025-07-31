import { default as React, InputHTMLAttributes } from 'react';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** Validation state of the input */
    validationState?: ValidationState;
    /** Helper text below the input */
    helperText?: string;
    /** Error message to display */
    errorMessage?: string;
    /** Warning message to display */
    warningMessage?: string;
    /** Success message to display */
    successMessage?: string;
    /** Label for the input */
    label?: string;
    /** Whether the label is required */
    required?: boolean;
    /** Size of the input */
    inputSize?: InputSize;
    /** Icon to display at the start of the input */
    leftIcon?: React.ReactNode;
    /** Icon to display at the end of the input */
    rightIcon?: React.ReactNode;
    /** Whether the input takes up the full width of its container */
    fullWidth?: boolean;
    /** Whether the input is in a loading state */
    loading?: boolean;
    /** Custom loading text */
    loadingText?: string;
    /** Input masking pattern */
    mask?: string;
    /** Whether the input has an error (deprecated - use validationState) */
    hasError?: boolean;
    /** The name of the input field */
    name: string;
    /** Description for accessibility */
    description?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=input.d.ts.map