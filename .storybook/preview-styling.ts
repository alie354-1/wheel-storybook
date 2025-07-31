import type { Preview } from '@storybook/react';
import '../packages/ui/src/globals.css';
import './brand.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components', 'Patterns', 'Layouts', 'Workspace'],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: ['light', 'dark', 'gradient'],
        showName: true,
      },
    },
  },
};

export default preview;
