import type { Meta, StoryObj } from "@storybook/react-vite";
import React from 'react';

// Simple test component - no complex dependencies
const TestComponent = ({ text = "Hello World" }: { text?: string }) => {
  return <div style={{ padding: '20px', border: '1px solid #ccc' }}>{text}</div>;
};

const meta = {
  title: 'Test/Simple',
  component: TestComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Simple Test Component',
  },
};
