import * as React from "react";
export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export interface EnhancedTextareaProps extends Omit<React.ComponentProps<"textarea">, 'size'> {
    context?: WorkspaceContext;
    validationState?: ValidationState;
    helperText?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    label?: string;
    required?: boolean;
    textareaSize?: TextareaSize;
    fullWidth?: boolean;
    hasError?: boolean;
    name: string;
    description?: string;
    showCharacterCount?: boolean;
    maxLength?: number;
    autoResize?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    context?: WorkspaceContext;
    validationState?: ValidationState;
    textareaSize?: TextareaSize;
    autoResize?: boolean;
}, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
declare const EnhancedTextarea: React.ForwardRefExoticComponent<Omit<EnhancedTextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export { EnhancedTextarea, Textarea };
//# sourceMappingURL=textarea.d.ts.map