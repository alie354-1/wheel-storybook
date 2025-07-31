import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from './icon';
import * as icons from './icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Media/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying icons with workspace context awareness.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(icons),
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'error', 'warning', 'success'],
    },
    rotation: {
      control: 'radio',
      options: [0, 90, 180, 270],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'Home',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-8 gap-4">
      {Object.keys(icons).map((name) => (
        <div key={name} className="flex flex-col items-center">
          <Icon name={name as keyof typeof icons} />
          <span className="text-xs mt-1">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Icon name="Star" size="xs" />
      <Icon name="Star" size="sm" />
      <Icon name="Star" size="md" />
      <Icon name="Star" size="lg" />
      <Icon name="Star" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Icon name="Heart" color="primary" />
      <Icon name="Heart" color="secondary" />
      <Icon name="Heart" color="muted" />
      <Icon name="Heart" color="success" />
      <Icon name="Heart" color="warning" />
      <Icon name="Heart" color="error" />
    </div>
  ),
};

export const Rotations: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <Icon name="ArrowRight" rotation={0} />
      <Icon name="ArrowRight" rotation={90} />
      <Icon name="ArrowRight" rotation={180} />
      <Icon name="ArrowRight" rotation={270} />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Icon name="User" context="consultant" />
      <Icon name="User" context="client" />
      <Icon name="User" context="admin" />
      <Icon name="User" context="expert" />
      <Icon name="User" context="toolCreator" />
      <Icon name="User" context="founder" />
    </div>
  ),
};
