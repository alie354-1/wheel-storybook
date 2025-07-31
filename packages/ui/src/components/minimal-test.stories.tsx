import type { Meta, StoryObj } from '@storybook/react';

// Minimal component with no external dependencies
const MinimalComponent = () => {
  console.log('MinimalComponent rendering');
  return <div style={{ padding: '20px', background: '#f0f0f0' }}>Minimal Test Component</div>;
};

const meta: Meta<typeof MinimalComponent> = {
  title: 'Debug/MinimalTest',
  component: MinimalComponent,
  // No decorators, no parameters, just the bare minimum
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    console.log('Story render function called');
    return <MinimalComponent />;
  },
};
