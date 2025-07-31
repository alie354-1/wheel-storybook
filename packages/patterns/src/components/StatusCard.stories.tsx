import { Meta, StoryFn } from "@storybook/react-vite";
import { StatusCard, StatusCardProps } from './StatusCard';

export default {
  title: 'Patterns/StatusCard',
  component: StatusCard,
} as Meta;

const Template: StoryFn<StatusCardProps> = (args) => <StatusCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Project Status',
  status: {
    id: '1',
    name: 'In Progress',
    color: 'blue',
  },
  showActions: true,
  permissions: ['change_status'],
};

export const WithHistory = Template.bind({});
WithHistory.args = {
  title: 'Project Status',
  status: {
    id: '1',
    name: 'In Progress',
    color: 'blue',
  },
  statusHistory: [
    {
      id: '2',
      name: 'To Do',
      color: 'gray',
    },
  ],
  showHistory: true,
};
