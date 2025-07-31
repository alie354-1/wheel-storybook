import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from './Avatar';
import { AvatarGroup } from './avatargroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/Media/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a group of avatars.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026708c" />
    </AvatarGroup>
  ),
};

export const Max: Story = {
  args: {
    max: 2,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026708c" />
    </AvatarGroup>
  ),
};
