import { default as React } from 'react';
export interface ValidationRule {
    validate: (value: string) => boolean;
    message: string;
}
export interface ValidationContextProps {
    rules: ValidationRule[];
    errors: Record<string, string>;
    validate: (name: string, value: string) => void;
}
export declare const ValidationProvider: React.FC<{
    rules: ValidationRule[];
    children: React.ReactNode;
}>;
export declare const useValidation: () => ValidationContextProps | null;
//# sourceMappingURL=validationcontext.d.ts.map