import { Meta, StoryFn } from "@storybook/react-vite";
import { FallbackContent, FallbackContentProps } from './FallbackContent';

export default {
  title: 'Patterns/Errors/FallbackContent',
  component: FallbackContent,
} as Meta;

const Template: StoryFn<FallbackContentProps> = (args) => <FallbackContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primaryContent: <div>This is the primary content.</div>,
  fallbackContent: <div>This is the fallback content.</div>,
};

export const WithError = Template.bind({});
WithError.args = {
  primaryContent: <div>This is the primary content.</div>,
  fallbackContent: <div>This is the fallback content.</div>,
  error: new Error('This is a test error.'),
  showError: true,
};
