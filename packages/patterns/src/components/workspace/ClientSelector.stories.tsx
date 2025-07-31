import { Meta, StoryFn } from "@storybook/react-vite";
import {
  ClientSelector,
  ClientSelectorProps,
} from './ClientSelector';
import { Client } from './types';

export default {
  title: 'Patterns/Workspace/ClientSelector',
  component: ClientSelector,
} as Meta;

const Template: StoryFn<ClientSelectorProps> = (args) => (
  <ClientSelector {...args} />
);

const clients: Client[] = [
  { id: '1', name: 'Client A' },
  { id: '2', name: 'Client B' },
  { id: '3', name: 'Client C' },
];

export const Default = Template.bind({});
Default.args = {
  clients,
  onClientSelect: (client) => alert(`Selected ${client.name}`),
};

export const WithSelectedClient = Template.bind({});
WithSelectedClient.args = {
  clients,
  selectedClient: clients[1],
  onClientSelect: (client) => alert(`Selected ${client.name}`),
};

export const WithRecents = Template.bind({});
WithRecents.args = {
  clients,
  onClientSelect: (client) => alert(`Selected ${client.name}`),
  showRecent: true,
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  clients,
  onClientSelect: (client) => alert(`Selected ${client.name}`),
  showFilters: true,
  filters: [
    { id: '1', label: 'Active', isActive: true },
    { id: '2', label: 'Inactive', isActive: false },
  ],
  onFilterChange: (filters) => console.log(filters),
};

export const WithCreate = Template.bind({});
WithCreate.args = {
  clients,
  onClientSelect: (client) => alert(`Selected ${client.name}`),
  onClientCreate: () => alert('Create new client'),
  permissions: ['create-client'],
};
