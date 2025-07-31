import { Meta, StoryFn } from "@storybook/react-vite";
import { UserCard, UserCardProps } from './UserCard';

export default {
  title: 'Patterns/UserCard',
  component: UserCard,
} as Meta;

const Template: StoryFn<UserCardProps> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    id: '1',
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    status: 'online',
    role: 'Admin',
  },
  showPresence: true,
  showStatus: true,
  showActions: true,
  permissions: ['edit', 'delete', 'view_role'],
};

export const NoRole = Template.bind({});
NoRole.args = {
  user: {
    id: '1',
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    status: 'online',
    role: 'Admin',
  },
  showPresence: true,
  showStatus: true,
  showActions: true,
  permissions: ['edit', 'delete'],
};
