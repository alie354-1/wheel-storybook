import { Meta, StoryObj } from "@storybook/react-vite";
import { CollaboratorAvatar } from "./collaboratoravatar";

const meta: Meta<typeof CollaboratorAvatar> = {
  title: "UI/CollaboratorAvatar",
  component: CollaboratorAvatar,
  tags: ["autodocs"],
  argTypes: {
    collaborator: {
      control: "object",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CollaboratorAvatar>;

export const Default: Story = {
  args: {
    collaborator: {
      name: "John Doe",
    },
  },
};

export const WithAvatar: Story = {
  args: {
    collaborator: {
      name: "Jane Doe",
      avatarUrl: "https://via.placeholder.com/150",
    },
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};
