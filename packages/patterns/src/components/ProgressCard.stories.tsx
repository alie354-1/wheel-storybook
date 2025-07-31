import { Meta, StoryFn } from "@storybook/react-vite";
import { ProgressCard, ProgressCardProps } from './ProgressCard';

export default {
  title: 'Patterns/ProgressCard',
  component: ProgressCard,
} as Meta;

const Template: StoryFn<ProgressCardProps> = (args) => <ProgressCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Project Progress',
  progress: {
    id: '1',
    name: 'Project A',
    value: 50,
    target: 100,
  },
};

export const RealTime = Template.bind({});
RealTime.args = {
  title: 'Real-Time Progress',
  progress: {
    id: '1',
    name: 'Project A',
    value: 0,
    target: 100,
  },
  updateInterval: 1000,
};
