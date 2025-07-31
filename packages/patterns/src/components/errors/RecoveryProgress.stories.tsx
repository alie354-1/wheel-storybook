import { Meta, StoryFn } from "@storybook/react-vite";
import { RecoveryProgress, RecoveryProgressProps, RecoveryStep } from './RecoveryProgress';

export default {
  title: 'Patterns/Errors/RecoveryProgress',
  component: RecoveryProgress,
} as Meta;

const steps: RecoveryStep[] = [
  {
    id: '1',
    label: 'Step 1: Acknowledging the issue',
    action: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
  {
    id: '2',
    label: 'Step 2: Finding a solution',
    action: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
  {
    id: '3',
    label: 'Step 3: Applying the fix',
    action: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
];

const Template: StoryFn<RecoveryProgressProps> = (args) => <RecoveryProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps,
};

const failingSteps: RecoveryStep[] = [
    {
      id: '1',
      label: 'Step 1: Acknowledging the issue',
      action: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    },
    {
      id: '2',
      label: 'Step 2: Failing to find a solution',
      action: () => new Promise((_, reject) => setTimeout(() => reject(new Error('Could not find a solution')), 1000)),
    },
    {
      id: '3',
      label: 'Step 3: Applying the fix',
      action: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    },
  ];

export const Failing = Template.bind({});
Failing.args = {
    steps: failingSteps,
};
