import { Meta, StoryObj } from "@storybook/react-vite";
import { TimeIndicator } from "./timeindicator";

const meta: Meta<typeof TimeIndicator> = {
  title: "UI/TimeIndicator",
  component: TimeIndicator,
  tags: ["autodocs"],
  argTypes: {
    time: {
      control: "date",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TimeIndicator>;

export const Default: Story = {
  args: {
    time: new Date(),
  },
};
