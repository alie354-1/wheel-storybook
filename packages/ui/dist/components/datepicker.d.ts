export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface DatePickerProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** The currently selected date */
    value?: Date;
    /** Callback when a date is selected */
    onChange?: (date?: Date) => void;
    /** The timezone to use for date calculations */
    timezone?: string;
    /** The format to display the date in */
    format?: string;
    /** The minimum selectable date */
    minDate?: Date;
    /** The maximum selectable date */
    maxDate?: Date;
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
    /** Label for the date picker */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the date picker is disabled */
    disabled?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Name attribute */
    name?: string;
    /** ID attribute */
    id?: string;
}
export declare const DatePicker: import('react').ForwardRefExoticComponent<DatePickerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=datepicker.d.ts.map