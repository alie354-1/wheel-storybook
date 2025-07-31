/* eslint-disable react/react-in-jsx-scope */
// @ts-ignore - Storybook types are provided by @storybook/react-vite
import type { Meta, StoryObj } from "@storybook/react-vite";

const TestComponent = () => {
  return <div style={{ padding: '20px', border: '2px solid blue' }}>Test Component Loaded Successfully!</div>;
};

const meta = {
  title: 'Test/TestComponent',
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
