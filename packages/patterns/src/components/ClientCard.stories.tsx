import { Meta, StoryFn } from "@storybook/react-vite";
import { ClientCard, ClientCardProps } from './clientcard';

export default {
  title: 'Patterns/ClientCard',
  component: ClientCard,
} as Meta;

const Template: StoryFn<ClientCardProps> = (args) => <ClientCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  client: {
    id: '1',
    name: 'Client A',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  showProjects: true,
  showMetrics: true,
  showActions: true,
  permissions: ['edit'],
};
