import { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectPhase } from "./projectphase";

const meta: Meta<typeof ProjectPhase> = {
  title: "UI/ProjectPhase",
  component: ProjectPhase,
  tags: ["autodocs"],
  argTypes: {
    phase: {
      control: {
        type: "select",
        options: [
          "discovery",
          "design",
          "development",
          "testing",
          "deployment",
          "maintenance",
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectPhase>;

export const Discovery: Story = {
  args: {
    phase: "discovery",
  },
};

export const Design: Story = {
  args: {
    phase: "design",
  },
};

export const Development: Story = {
  args: {
    phase: "development",
  },
};

export const Testing: Story = {
  args: {
    phase: "testing",
  },
};

export const Deployment: Story = {
  args: {
    phase: "deployment",
  },
};

export const Maintenance: Story = {
  args: {
    phase: "maintenance",
  },
};
