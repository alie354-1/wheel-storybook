import { Meta, StoryObj } from "@storybook/react-vite";
import { ExpertiseTag } from "./expertisetag";

const meta: Meta<typeof ExpertiseTag> = {
  title: "UI/ExpertiseTag",
  component: ExpertiseTag,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ExpertiseTag>;

export const Default: Story = {
  args: {
    tag: "React",
  },
};
