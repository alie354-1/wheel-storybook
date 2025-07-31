interface AIAssistedInputProps {
    fieldType: 'title' | 'description' | 'problem' | 'solution' | 'audience' | 'value' | 'business_model';
    label: string;
    value: string;
    onChange: (value: string) => void;
    ideaContext?: Record<string, any>;
    placeholder?: string;
    className?: string;
    required?: boolean;
}
export declare function AIAssistedInput({ fieldType, label, value, onChange, ideaContext, placeholder, className, required }: AIAssistedInputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AIAssistedInput.d.ts.map