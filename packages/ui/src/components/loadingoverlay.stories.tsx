import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from 'react';
import { Button } from './button';
import { LoadingOverlay } from './loadingoverlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/Feedback/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a loading overlay on top of other content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="w-96 h-64 border rounded-lg p-4">
      <LoadingOverlay isLoading={isLoading}>
        <h3 className="text-lg font-bold">Content Area</h3>
        <p>This is the content that will be overlaid when loading.</p>
        <Button onClick={handleClick} className="mt-4">
          {isLoading ? 'Loading...' : 'Load Content'}
        </Button>
      </LoadingOverlay>
    </div>
  );
};

export const Default: Story = {
  render: () => <LoadingExample />,
};
