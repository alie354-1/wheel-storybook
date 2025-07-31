import { Meta, StoryFn } from "@storybook/react-vite";
import { Button } from '@wheel/ui/components/button';
import { useState } from 'react';
import { ErrorModal, ErrorModalProps } from './ErrorModal';

export default {
  title: 'Patterns/Errors/ErrorModal',
  component: ErrorModal,
} as Meta;

const Template: StoryFn<ErrorModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ErrorModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  error: new Error('This is a test error in a modal.'),
  showDetails: true,
};
