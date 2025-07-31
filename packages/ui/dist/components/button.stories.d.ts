import { StoryObj } from '@storybook/react';
import { Button } from './button';
declare const meta: {
    title: string;
    component: typeof Button;
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: "select";
            };
            options: string[];
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
        };
        context: {
            control: {
                type: "select";
            };
            options: string[];
        };
        iconPosition: {
            control: {
                type: "select";
            };
            options: string[];
        };
        isLoading: {
            control: "boolean";
        };
        fullWidth: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const Link: Story;
export declare const Danger: Story;
export declare const ConsultantContext: Story;
export declare const ClientContext: Story;
export declare const AdminContext: Story;
export declare const ExpertContext: Story;
export declare const ToolCreatorContext: Story;
export declare const FounderContext: Story;
export declare const Sizes: Story;
export declare const Loading: Story;
export declare const LoadingWithCustomText: Story;
export declare const WithIcon: Story;
export declare const WithIconRight: Story;
export declare const WorkspaceContextMatrix: Story;
export declare const AccessibilityExample: Story;
export declare const FullWidth: Story;
export declare const AllStates: Story;
//# sourceMappingURL=button.stories.d.ts.map