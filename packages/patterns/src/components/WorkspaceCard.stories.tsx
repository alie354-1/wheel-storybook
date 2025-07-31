import { Meta, StoryFn } from "@storybook/react-vite";
import {
  WorkspaceCard,
  WorkspaceCardProps,
} from './workspacecard';

export default {
  title: 'Patterns/WorkspaceCard',
  component: WorkspaceCard,
} as Meta;

const Template: StoryFn<WorkspaceCardProps> = (args) => (
  <WorkspaceCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  workspace: {
    id: '1',
    name: 'Workspace A',
  },
  showMembers: true,
  showActivity: true,
  showMetrics: true,
};
