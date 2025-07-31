import { Meta, StoryFn } from "@storybook/react-vite";
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';

export default {
  title: 'Patterns/Errors/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
    context: {
      control: {
        type: 'select',
        options: ['consultant', 'client', 'admin', 'neutral'],
      },
    },
    level: {
      control: {
        type: 'select',
        options: ['page', 'section', 'component'],
      },
    },
  },
} as Meta;

import { FallbackUI } from './FallbackUI';

const ComponentThatThrows = () => {
  throw new Error('This is a test error.');
};

const Template: StoryFn<ErrorBoundaryProps> = (args) => (
  <ErrorBoundary {...args}>
    <ComponentThatThrows />
  </ErrorBoundary>
);

export const Default = Template.bind({});
Default.args = {
  fallback: FallbackUI,
};

const ComponentThatWorks = () => {
    return <div>This component works fine.</div>
}

const TemplateWorks: StoryFn<ErrorBoundaryProps> = (args) => (
    <ErrorBoundary {...args}>
      <ComponentThatWorks />
    </ErrorBoundary>
  );

export const NoError = TemplateWorks.bind({});
NoError.args = {
    fallback: FallbackUI,
};
