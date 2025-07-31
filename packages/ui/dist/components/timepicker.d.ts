/**
 * TimePicker Component
 *
 * A specialized time input component with timezone support and workspace context awareness.
 */
export type TimeFormat = '12h' | '24h';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface TimePickerProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** Time format (12h or 24h) */
    format?: TimeFormat;
    /** Timezone for display */
    timezone?: string;
    /** Current time value (HH:MM format) */
    value?: string;
    /** Callback when time changes */
    onChange?: (value: string) => void;
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
    /** Description for accessibility */
    description?: string;
}
export declare const TimePicker: import('react').ForwardRefExoticComponent<TimePickerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=timepicker.d.ts.map