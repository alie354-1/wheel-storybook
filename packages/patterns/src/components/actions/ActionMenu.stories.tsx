import { Meta, StoryFn } from "@storybook/react-vite";
import { Button } from '@wheel/ui/components/button';
import { ActionMenu, ActionMenuProps } from './ActionMenu';
import { ActionItem } from './ButtonGroup';

export default {
  title: 'Patterns/Actions/ActionMenu',
  component: ActionMenu,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ActionMenuProps> = (args) => <ActionMenu {...args} />;

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
  trigger: <Button>Open Menu</Button>,
};

export const WithPermissions = Template.bind({});
WithPermissions.args = {
  actions: baseActions,
  permissions: ['delete'],
  trigger: <Button>Open Menu (With Permissions)</Button>,
};

export const WithoutPermissions = Template.bind({});
WithoutPermissions.args = {
  actions: baseActions,
  permissions: [],
  trigger: <Button>Open Menu (Without Permissions)</Button>,
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
  trigger: <Button>Open Menu (Consultant)</Button>,
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
  trigger: <Button>Open Menu (Client)</Button>,
};

export const WithSuggestions = Template.bind({});
WithSuggestions.args = {
  actions: [
    ...baseActions,
    {
      id: '8',
      label: 'Suggested Action',
      icon: 'Star',
      onClick: () => alert('Suggested Action clicked'),
      metadata: { suggested: true },
    },
  ],
  showSuggestions: true,
  trigger: <Button>Open Menu (With Suggestions)</Button>,
};

export const WithHistory = Template.bind({});
WithHistory.args = {
  actions: baseActions,
  actionHistory: [baseActions[1], baseActions[0]],
  trigger: <Button>Open Menu (With History)</Button>,
};
