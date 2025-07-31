import { Meta, StoryFn } from "@storybook/react-vite";
import { ActionItem, ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Patterns/Actions/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    context: {
      control: {
        type: 'select',
        options: ['consultant', 'client', 'admin', 'neutral'],
      },
    },
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'accent',
          'gradient-midnight',
          'gradient-amber',
          'ghost',
          'outline',
          'link',
          'danger',
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

const baseActions: ActionItem[] = [
  {
    id: '1',
    label: 'Edit',
    icon: 'Edit',
    onClick: () => alert('Edit clicked'),
  },
  {
    id: '2',
    label: 'Copy',
    icon: 'Copy',
    onClick: () => alert('Copy clicked'),
  },
  {
    id: '3',
    label: 'Delete',
    icon: 'Trash2',
    variant: 'danger',
    onClick: () => alert('Delete clicked'),
    permission: 'delete',
  },
];

export const Default = Template.bind({});
Default.args = {
  actions: baseActions,
};

export const WithPermissions = Template.bind({});
WithPermissions.args = {
  actions: baseActions,
  permissions: ['delete'],
};

export const WithoutPermissions = Template.bind({});
WithoutPermissions.args = {
  actions: baseActions,
  permissions: [],
};

export const Vertical = Template.bind({});
Vertical.args = {
  actions: baseActions,
  orientation: 'vertical',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  actions: [
    ...baseActions,
    {
      id: '4',
      label: 'Share',
      icon: 'Share2',
      onClick: () => alert('Share clicked'),
    },
    {
      id: '5',
      label: 'Export',
      icon: 'Download',
      onClick: () => alert('Export clicked'),
    },
  ],
  maxVisible: 3,
};

export const WithBulkActions = Template.bind({});
WithBulkActions.args = {
  actions: baseActions,
  hasBulkActions: true,
};

export const Responsive = Template.bind({});
Responsive.args = {
  actions: baseActions,
  responsive: true,
};

export const ConsultantContext = Template.bind({});
ConsultantContext.args = {
  actions: [
    ...baseActions,
    {
      id: '6',
      label: 'Consultant Action',
      icon: 'UserCheck',
      onClick: () => alert('Consultant Action clicked'),
      workspaceContext: ['consultant'],
    },
  ],
  context: 'consultant',
};

export const ClientContext = Template.bind({});
ClientContext.args = {
  actions: [
    ...baseActions,
    {
      id: '7',
      label: 'Client Action',
      icon: 'User',
      onClick: () => alert('Client Action clicked'),
      workspaceContext: ['client'],
    },
  ],
  context: 'client',
};
