import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Wheel Design System',
  brandUrl: 'https://www.wheel.com',
  brandImage: '/logo.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
