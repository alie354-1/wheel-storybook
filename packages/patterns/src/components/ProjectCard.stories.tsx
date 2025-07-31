import { Meta, StoryFn } from "@storybook/react-vite";
import { ProjectCard, ProjectCardProps } from './projectcard';

export default {
  title: 'Patterns/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: StoryFn<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: {
    id: '1',
    name: 'Project A',
  },
  showProgress: true,
  showTeam: true,
  showActions: true,
  permissions: ['edit'],
};
