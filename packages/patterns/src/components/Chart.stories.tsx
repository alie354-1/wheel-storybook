import { Meta, StoryFn } from "@storybook/react-vite";
import { Chart, ChartProps } from './Chart';

export default {
  title: 'Patterns/Chart',
  component: Chart,
} as Meta;

const Template: StoryFn<ChartProps> = (args) => <Chart {...args} />;

const data = [
  { name: 'Page A', value: 4000 },
  { name: 'Page B', value: 3000 },
  { name: 'Page C', value: 2000 },
  { name: 'Page D', value: 2780 },
  { name: 'Page E', value: 1890 },
  { name: 'Page F', value: 2390 },
  { name: 'Page G', value: 3490 },
];

export const Line = Template.bind({});
Line.args = {
  data,
  type: 'line',
};

export const Bar = Template.bind({});
Bar.args = {
  data,
  type: 'bar',
};

export const Pie = Template.bind({});
Pie.args = {
  data,
  type: 'pie',
};

export const Scatter = Template.bind({});
Scatter.args = {
  data,
  type: 'scatter',
};

export const Area = Template.bind({});
Area.args = {
  data,
  type: 'area',
};

export const RealTime = Template.bind({});
RealTime.args = {
  data,
  type: 'line',
  updateInterval: 1000,
};
