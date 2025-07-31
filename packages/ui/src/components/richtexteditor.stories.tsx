import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTextEditor } from './richtexteditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Components/Form/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A foundational rich text editor with basic formatting options.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
      description: 'Workspace context for styling',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the editor is disabled',
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  args: {
    label: 'Description',
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <RichTextEditor label="Consultant Context" context="consultant" />
      <RichTextEditor label="Client Context" context="client" />
      <RichTextEditor label="Admin Context" context="admin" />
      <RichTextEditor label="Expert Context" context="expert" />
      <RichTextEditor label="Tool Creator Context" context="toolCreator" />
      <RichTextEditor label="Founder Context" context="founder" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Rich Text Editor',
    disabled: true,
  },
};
