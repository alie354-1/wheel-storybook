import { Meta, StoryObj } from "@storybook/react-vite";
import { TimeRangeInput } from "./timerangeinput";

const meta: Meta<typeof TimeRangeInput> = {
  title: "UI/TimeRangeInput",
  component: TimeRangeInput,
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

type Story = StoryObj<typeof TimeRangeInput>;

export const Default: Story = {
  args: {
    value: {
      start: "09:00:00",
      end: "17:00:00",
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
