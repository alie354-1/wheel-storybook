import { Meta, StoryObj } from "@storybook/react-vite";
import { ClientBadge } from "./clientbadge";

const meta: Meta<typeof ClientBadge> = {
  title: "UI/ClientBadge",
  component: ClientBadge,
  tags: ["autodocs"],
  argTypes: {
    client: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClientBadge>;

export const Default: Story = {
  args: {
    client: {
      name: "Client Name",
    },
  },
};

export const WithLogo: Story = {
  args: {
    client: {
      name: "Client Name",
      logo: "https://via.placeholder.com/150",
    },
  },
};
