import { Meta, StoryFn } from "@storybook/react-vite";
import { RetryButton, RetryButtonProps } from './RetryButton';

export default {
  title: 'Patterns/Errors/RetryButton',
  component: RetryButton,
} as Meta;

const Template: StoryFn<RetryButtonProps> = (args) => <RetryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRetry: () => new Promise((resolve) => setTimeout(resolve, 1000)),
};

export const FailingRetry = Template.bind({});
FailingRetry.args = {
  onRetry: () => new Promise((_, reject) => setTimeout(reject, 1000)),
};
