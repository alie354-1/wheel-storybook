import { Meta, StoryFn } from "@storybook/react-vite";
import {
  WorkspaceSwitcher,
  WorkspaceSwitcherProps,
} from './WorkspaceSwitcher';
import { Workspace } from './types';

export default {
  title: 'Patterns/Workspace/WorkspaceSwitcher',
  component: WorkspaceSwitcher,
} as Meta;

const Template: StoryFn<WorkspaceSwitcherProps> = (args) => (
  <WorkspaceSwitcher {...args} />
);

const workspaces: Workspace[] = [
  { id: '1', name: 'Consultant Workspace' },
  { id: '2', name: 'Client Workspace' },
  { id: '3', name: 'Admin Workspace' },
];

export const Default = Template.bind({});
Default.args = {
  workspaces,
  currentWorkspace: workspaces[0],
  onWorkspaceChange: (workspace) =>
    alert(`Switched to ${workspace.name}`),
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  workspaces,
  currentWorkspace: workspaces[0],
  onWorkspaceChange: (workspace) =>
    alert(`Switched to ${workspace.name}`),
  showSearch: true,
};

export const WithRecents = Template.bind({});
WithRecents.args = {
  workspaces,
  currentWorkspace: workspaces[0],
  onWorkspaceChange: (workspace) =>
    alert(`Switched to ${workspace.name}`),
  showRecent: true,
};

export const WithCreate = Template.bind({});
WithCreate.args = {
  workspaces,
  currentWorkspace: workspaces[0],
  onWorkspaceChange: (workspace) =>
    alert(`Switched to ${workspace.name}`),
  onWorkspaceCreate: () => alert('Create new workspace'),
};
