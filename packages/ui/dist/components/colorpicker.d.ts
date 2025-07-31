/**
 * ColorPicker Component
 *
 * A component for selecting colors with support for various formats and workspace contexts.
 */
export type ColorFormat = 'hex' | 'rgb' | 'hsl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface ColorPickerProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** The current color value */
    value?: string;
    /** Callback when the color changes */
    onChange?: (color: string) => void;
    /** The format of the color string */
    format?: ColorFormat;
    /** A list of preset colors to display */
    presets?: string[];
    /** Allow users to select a custom color */
    allowCustom?: boolean;
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
    /** Label for the color picker */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the color picker is disabled */
    disabled?: boolean;
    /** Name attribute */
    name?: string;
    /** ID attribute */
    id?: string;
}
export declare const ColorPicker: import('react').ForwardRefExoticComponent<ColorPickerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=colorpicker.d.ts.map