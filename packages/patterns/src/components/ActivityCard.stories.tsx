import { Meta, StoryFn } from "@storybook/react-vite";
import { ActivityCard, ActivityCardProps } from './ActivityCard';

export default {
  title: 'Patterns/ActivityCard',
  component: ActivityCard,
} as Meta;

const Template: StoryFn<ActivityCardProps> = (args) => <ActivityCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  activities: [
    {
      id: '1',
      type: 'comment',
      description: 'commented on your post',
      timestamp: new Date(),
      user: {
        id: '1',
        name: 'John Doe',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      },
    },
    {
      id: '2',
      type: 'like',
      description: 'liked your post',
      timestamp: new Date(),
      user: {
        id: '2',
        name: 'Jane Doe',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      },
    },
  ],
};

export const Filtered = Template.bind({});
Filtered.args = {
  ...Default.args,
  filters: [
    {
      id: '1',
      name: 'John Doe',
      type: 'user',
    },
  ],
};
