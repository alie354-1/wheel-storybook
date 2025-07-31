import { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./form-field";
import { Input } from "./input";

const meta: Meta<typeof FormField> = {
  title: "UI/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    id: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      <Input id={args.id} name={args.id} />
    </FormField>
  ),
  args: {
    label: "Name",
    id: "name",
  },
};

export const WithHelperText: Story = {
  ...Default,
  args: {
    ...Default.args,
    helperText: "This is some helper text.",
  },
};

export const WithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    error: "This field is required.",
  },
};

export const Required: Story = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
};
