import { Meta, StoryFn } from "@storybook/react-vite";
import { TimeTracker, TimeTrackerProps } from './TimeTracker';
import { Project } from './types';

export default {
  title: 'Patterns/Workspace/TimeTracker',
  component: TimeTracker,
} as Meta;

const Template: StoryFn<TimeTrackerProps> = (args) => <TimeTracker {...args} />;

const projects: Project[] = [
  { id: '1', name: 'Project A' },
  { id: '2', name: 'Project B' },
];

export const Default = Template.bind({});
Default.args = {
  projects,
  onSessionStart: (project) => alert(`Session started for ${project.name}`),
  onSessionStop: () => alert('Session stopped'),
  onSessionPause: () => alert('Session paused'),
  onTimeEntry: (entry) => console.log(entry),
};

export const WithHistory = Template.bind({});
WithHistory.args = {
  ...Default.args,
  showHistory: true,
};
