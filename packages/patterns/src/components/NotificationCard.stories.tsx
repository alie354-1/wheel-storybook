import { Meta, StoryFn } from "@storybook/react-vite";
import {
  NotificationCard,
  NotificationCardProps,
} from './NotificationCard';

export default {
  title: 'Patterns/NotificationCard',
  component: NotificationCard,
} as Meta;

const Template: StoryFn<NotificationCardProps> = (args) => (
  <NotificationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  notification: {
    id: '1',
    title: 'New Message',
    message: 'You have a new message from John Doe',
    type: 'info',
    read: false,
  },
};
