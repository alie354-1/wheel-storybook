import { default as React } from 'react';
export interface FormFieldProps {
    /** The field's label */
    label: string;
    /** The field's HTML ID (required for accessibility) */
    id: string;
    /** Whether the field is required */
    required?: boolean;
    /** Error message to display */
    error?: string;
    /** Helper text to display */
    helperText?: string;
    /** The input component */
    children: React.ReactNode;
    /** Additional CSS classes for the field wrapper */
    className?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
}
export declare const FormField: React.FC<FormFieldProps>;
//# sourceMappingURL=form-field.d.ts.map