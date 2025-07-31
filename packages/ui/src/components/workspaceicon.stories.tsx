import { Meta, StoryObj } from "@storybook/react-vite";
import { WorkspaceIcon } from "./workspaceicon";

const meta: Meta<typeof WorkspaceIcon> = {
  title: "UI/WorkspaceIcon",
  component: WorkspaceIcon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    workspace: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof WorkspaceIcon>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const WithWorkspace: Story = {
  args: {
    ...Default.args,
    workspace: {
      name: "My Workspace",
    },
  },
};

export const WithLogo: Story = {
  args: {
    ...Default.args,
    workspace: {
      name: "My Workspace",
      logo: "https://via.placeholder.com/150",
    },
  },
};

export const ExtraSmall: Story = {
  args: {
    ...WithWorkspace.args,
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    ...WithWorkspace.args,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    ...WithWorkspace.args,
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    ...WithWorkspace.args,
    size: "xl",
  },
};
