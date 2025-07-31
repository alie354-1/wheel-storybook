import { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    separator: {
      control: "text",
    },
    maxItems: {
      control: "number",
    },
    itemsBeforeCollapse: {
      control: "number",
    },
    itemsAfterCollapse: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/category">Category</BreadcrumbItem>
      <BreadcrumbItem current>Current Page</BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {},
};

export const WithCustomSeparator: Story = {
  ...Default,
  args: {
    separator: ">",
  },
};

export const Collapsed: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/1">Page 1</BreadcrumbItem>
      <BreadcrumbItem href="/2">Page 2</BreadcrumbItem>
      <BreadcrumbItem href="/3">Page 3</BreadcrumbItem>
      <BreadcrumbItem href="/4">Page 4</BreadcrumbItem>
      <BreadcrumbItem current>Current Page</BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1,
  },
};
