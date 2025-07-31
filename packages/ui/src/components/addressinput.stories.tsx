import { Meta, StoryObj } from "@storybook/react-vite";
import { AddressInput } from "./addressinput";

const meta: Meta<typeof AddressInput> = {
  title: "UI/AddressInput",
  component: AddressInput,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "object",
    },
    onChange: {
      action: "changed",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AddressInput>;

export const Default: Story = {
  args: {
    value: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
