import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from './image';

const meta: Meta<typeof Image> = {
  title: 'Components/Media/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An enhanced image component with support for lazy loading, placeholders, and error fallbacks.',
      },
    },
  },
  argTypes: {
    fit: {
      control: 'radio',
      options: ['cover', 'contain', 'fill'],
    },
    lazy: { control: 'boolean' },
    aspectRatio: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc',
    alt: 'A beautiful landscape',
    className: 'w-96',
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?delay=2000',
    placeholder: <div className="w-full h-full bg-gray-300 animate-pulse" />,
  },
};

export const WithErrorFallback: Story = {
  args: {
    ...Default.args,
    src: 'https://invalid-url.com/image.jpg',
    error: <div className="w-full h-full bg-red-100 flex items-center justify-center text-red-600">Image failed to load</div>,
  },
};

export const AspectRatio: Story = {
  args: {
    ...Default.args,
    aspectRatio: '1 / 1',
    className: 'w-64',
  },
};
