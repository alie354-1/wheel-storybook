import { Meta, StoryFn } from "@storybook/react-vite";
import { StatCard, StatCardProps } from './StatCard';

export default {
  title: 'Patterns/StatCard',
  component: StatCard,
} as Meta;

const Template: StoryFn<StatCardProps> = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Total Revenue',
  value: 12345,
  format: 'currency',
  trend: {
    value: 12,
    direction: 'up',
    period: 'last month',
  },
};

export const RealTime = Template.bind({});
RealTime.args = {
  title: 'Real-Time Data',
  value: 100,
  format: 'number',
  updateInterval: 1000,
};
