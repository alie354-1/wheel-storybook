// @ts-ignore - Type imports for Storybook v8
import { withThemeByClassName } from "@storybook/addon-themes";
import "../packages/ui/src/globals.css";
import "./brand.css";
import { ActionsDecorator, ControlsDecorator } from "./decorators/ControlsDecorator";
import { ViewportDecorator, viewportGlobalTypes } from "./decorators/ViewportDecorator";
import { WorkspaceDecorator, globalTypes } from "./decorators/WorkspaceDecorator";

// Define Preview type locally since @storybook/react-vite doesn't export it
interface Preview {
  parameters?: any;
  decorators?: any[];
  globalTypes?: any;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8fafc',
        },
        {
          name: 'dark',
          value: '#0f0c29',
        },
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, #f59e0b 100%)',
        },
      ],
    },
  },

  decorators: [
    WorkspaceDecorator,
    ActionsDecorator,
    ControlsDecorator,
    ViewportDecorator,
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
        gradient: "gradient",
      },
      defaultTheme: "light",
    }),
  ],

  globalTypes: {
    ...globalTypes,
    ...viewportGlobalTypes,
  },

};

export default preview;
