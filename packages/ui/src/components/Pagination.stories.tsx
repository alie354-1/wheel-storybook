import { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: "number",
    },
    totalPages: {
      control: "number",
    },
    onPageChange: {
      action: "pageChanged",
    },
    siblingCount: {
      control: "number",
    },
    showFirstLast: {
      control: "boolean",
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

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    size: "md",
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

export const NoFirstLast: Story = {
  args: {
    ...Default.args,
    showFirstLast: false,
  },
};

export const ManyPages: Story = {
  args: {
    ...Default.args,
    totalPages: 100,
    currentPage: 50,
  },
};
