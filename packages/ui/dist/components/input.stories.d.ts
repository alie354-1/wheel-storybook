import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('./input').InputProps & import('react').RefAttributes<HTMLInputElement>>;
    tags: string[];
    argTypes: {
        context: {
            control: {
                type: "select";
            };
            options: string[];
        };
        validationState: {
            control: {
                type: "select";
            };
            options: string[];
        };
        inputSize: {
            control: {
                type: "select";
            };
            options: string[];
        };
        required: {
            control: "boolean";
        };
        fullWidth: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        label: {
            control: "text";
        };
        helperText: {
            control: "text";
        };
        errorMessage: {
            control: "text";
        };
        warningMessage: {
            control: "text";
        };
        successMessage: {
            control: "text";
        };
        loadingText: {
            control: "text";
        };
        description: {
            control: "text";
        };
        placeholder: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const Required: Story;
export declare const WithHelperText: Story;
export declare const WithDescription: Story;
export declare const ValidationError: Story;
export declare const ValidationWarning: Story;
export declare const ValidationSuccess: Story;
export declare const LegacyError: Story;
export declare const Sizes: Story;
export declare const ConsultantContext: Story;
export declare const ClientContext: Story;
export declare const AdminContext: Story;
export declare const ExpertContext: Story;
export declare const ToolCreatorContext: Story;
export declare const FounderContext: Story;
export declare const Loading: Story;
export declare const LoadingWithCustomText: Story;
export declare const WithLeftIcon: Story;
export declare const WithRightIcon: Story;
export declare const WithBothIcons: Story;
export declare const FullWidth: Story;
export declare const Disabled: Story;
export declare const WorkspaceContextMatrix: Story;
export declare const ValidationStates: Story;
export declare const MessagePriority: Story;
export declare const AccessibilityExample: Story;
export declare const AllStates: Story;
//# sourceMappingURL=input.stories.d.ts.map