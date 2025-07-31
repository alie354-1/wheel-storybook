import { Meta, StoryObj } from "@storybook/react-vite";
import { BillingStatus } from "./billingstatus";

const meta: Meta<typeof BillingStatus> = {
  title: "UI/BillingStatus",
  component: BillingStatus,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["paid", "pending", "overdue", "draft"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BillingStatus>;

export const Paid: Story = {
  args: {
    status: "paid",
  },
};

export const Pending: Story = {
  args: {
    status: "pending",
  },
};

export const Overdue: Story = {
  args: {
    status: "overdue",
  },
};

export const Draft: Story = {
  args: {
    status: "draft",
  },
};
