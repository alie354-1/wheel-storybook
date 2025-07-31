import { Meta, StoryFn } from "@storybook/react-vite";
import { Button } from '@wheel/ui/components/button';
import { ToastProvider } from '@wheel/ui/components/toast';
import { useErrorToast } from './ErrorToast';

export default {
  title: 'Patterns/Errors/ErrorToast',
  decorators: [(Story) => <div><Story /><ToastProvider /></div>],
} as Meta;

const ToastComponent = () => {
  const { showErrorToast } = useErrorToast();

  return (
    <div className="space-x-4">
      <Button
        onClick={() =>
          showErrorToast({
            error: new Error('This is a test error.'),
          })
        }
      >
        Show Default Error Toast
      </Button>
      <Button
        onClick={() =>
          showErrorToast({
            error: new Error('Network error: Failed to fetch data.'),
            context: 'client',
          })
        }
      >
        Show Network Error Toast
      </Button>
    </div>
  );
};

const Template: StoryFn = () => <ToastComponent />;

export const Default = Template.bind({});
