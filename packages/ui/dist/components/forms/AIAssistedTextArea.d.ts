interface AIAssistedTextAreaProps {
    fieldType: 'title' | 'description' | 'problem' | 'solution' | 'audience' | 'value' | 'business_model';
    label: string;
    value: string;
    onChange: (value: string) => void;
    ideaContext?: Record<string, any>;
    placeholder?: string;
    className?: string;
    required?: boolean;
    rows?: number;
}
export declare function AIAssistedTextArea({ fieldType, label, value, onChange, ideaContext, placeholder, className, required, rows }: AIAssistedTextAreaProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AIAssistedTextArea.d.ts.map