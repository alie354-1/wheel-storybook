import { Meta, StoryFn } from "@storybook/react-vite";
import { Toolbar, ToolbarProps, ToolItem } from './Toolbar';

export default {
  title: 'Patterns/Actions/Toolbar',
  component: Toolbar,
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical', 'grid'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ToolbarProps> = (args) => <Toolbar {...args} />;

const baseTools: ToolItem[] = [
  {
    id: '1',
    label: 'Bold',
    icon: 'Type',
    onClick: () => alert('Bold clicked'),
  },
  {
    id: '2',
    label: 'Italic',
    icon: 'Type',
    onClick: () => alert('Italic clicked'),
  },
  {
    id: '3',
    label: 'Underline',
    icon: 'Underline',
    onClick: () => alert('Underline clicked'),
  },
  {
    id: '4',
    label: 'Align Left',
    icon: 'AlignLeft',
    onClick: () => alert('Align Left clicked'),
    permission: 'admin',
  },
];

export const Default = Template.bind({});
Default.args = {
  tools: baseTools,
};

export const WithPermissions = Template.bind({});
WithPermissions.args = {
  tools: baseTools,
  permissions: ['admin'],
};

export const Vertical = Template.bind({});
Vertical.args = {
  tools: baseTools,
  layout: 'vertical',
};

export const Grid = Template.bind({});
Grid.args = {
  tools: baseTools,
  layout: 'grid',
};

export const Customizable = Template.bind({});
Customizable.args = {
  tools: baseTools,
  customizable: true,
};

export const Persistent = Template.bind({});
Persistent.args = {
  tools: baseTools,
  customizable: true,
  persistent: true,
};

export const Responsive = Template.bind({});
Responsive.args = {
  tools: baseTools,
  responsive: true,
};

export const WithGroups = Template.bind({});
WithGroups.args = {
  tools: [
    ...baseTools,
    {
      id: '6',
      label: 'Align Center',
      icon: 'AlignCenter',
      onClick: () => alert('Align Center clicked'),
      group: 'alignment',
    },
    {
      id: '7',
      label: 'Align Right',
      icon: 'AlignRight',
      onClick: () => alert('Align Right clicked'),
      group: 'alignment',
    },
  ],
};

export const ConsultantContext = Template.bind({});
ConsultantContext.args = {
  tools: [
    ...baseTools,
    {
      id: '5',
      label: 'Consultant Tool',
      icon: 'UserCheck',
      onClick: () => alert('Consultant Tool clicked'),
      workspaceContext: ['consultant'],
    },
  ],
  context: 'consultant',
};
