import type { Meta, StoryObj } from "@storybook/react-vite";
import React from 'react';
import type { Client } from './clientselector';
import { ClientSelector } from './clientselector';

const meta: Meta<typeof ClientSelector> = {
  title: 'Workspace/ClientSelector',
  component: ClientSelector,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A dropdown component for selecting clients within a workspace context. Displays client information using ClientBadge components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    clients: {
      control: 'object',
      description: 'Array of client objects to choose from'
    },
    onSelect: {
      action: 'selected',
      description: 'Callback fired when a client is selected'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ClientSelector>;

// Mock client data
const mockClients: Client[] = [
  {
    id: 'client-1',
    name: 'Acme Corporation',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=32&h=32&fit=crop&crop=entropy'
  },
  {
    id: 'client-2',
    name: 'TechStart Inc.',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=32&h=32&fit=crop&crop=entropy'
  },
  {
    id: 'client-3',
    name: 'Global Solutions Ltd.',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=32&h=32&fit=crop&crop=entropy'
  },
  {
    id: 'client-4',
    name: 'Innovation Labs',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=32&h=32&fit=crop&crop=entropy'
  },
  {
    id: 'client-5',
    name: 'Digital Dynamics'
    // No logo provided
  }
];

const smallClientList: Client[] = [
  {
    id: 'client-1',
    name: 'Acme Corporation',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=32&h=32&fit=crop&crop=entropy'
  },
  {
    id: 'client-2',
    name: 'TechStart Inc.',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=32&h=32&fit=crop&crop=entropy'
  }
];

export const Default: Story = {
  args: {
    clients: mockClients,
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const SmallList: Story = {
  args: {
    clients: smallClientList,
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const SingleClient: Story = {
  args: {
    clients: [mockClients[0]],
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const NoLogos: Story = {
  args: {
    clients: [
      { id: 'client-1', name: 'Client Alpha' },
      { id: 'client-2', name: 'Client Beta' },
      { id: 'client-3', name: 'Client Gamma' }
    ],
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const LongNames: Story = {
  args: {
    clients: [
      {
        id: 'client-1',
        name: 'Very Long Client Name That Might Overflow',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=32&h=32&fit=crop&crop=entropy'
      },
      {
        id: 'client-2',
        name: 'Another Extremely Long Client Name Corporation Ltd.',
        logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=32&h=32&fit=crop&crop=entropy'
      },
      {
        id: 'client-3',
        name: 'Short Name'
      }
    ],
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const WithCustomStyling: Story = {
  args: {
    clients: mockClients,
    onSelect: (client) => console.log('Selected client:', client),
    className: 'border-2 border-blue-300 rounded-lg p-2'
  }
};

export const InteractiveDemo: Story = {
  render: () => {
    const [selectedClient, setSelectedClient] = React.useState<Client | null>(null);
    const [selectionHistory, setSelectionHistory] = React.useState<Client[]>([]);

    const handleSelect = (client: Client) => {
      setSelectedClient(client);
      setSelectionHistory(prev => [client, ...prev.slice(0, 4)]); // Keep last 5 selections
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Client Selector</h3>
          <ClientSelector
            clients={mockClients}
            onSelect={handleSelect}
          />
        </div>

        {selectedClient && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Currently Selected:</h4>
            <p className="text-blue-700">
              {selectedClient.name} (ID: {selectedClient.id})
            </p>
          </div>
        )}

        {selectionHistory.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Selection History:</h4>
            <div className="space-y-1">
              {selectionHistory.map((client, index) => (
                <div key={`${client.id}-${index}`} className="text-sm text-gray-600">
                  {index + 1}. {client.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export const InWorkspaceContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div>
          <h3 className="font-semibold">Current Workspace</h3>
          <p className="text-sm text-gray-600">Consultant Dashboard</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Client:</span>
          <ClientSelector
            clients={mockClients}
            onSelect={(client) => console.log('Switched to client:', client)}
          />
        </div>
      </div>

      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold mb-2">Client-Specific Content</h4>
        <p className="text-gray-600">
          This content would change based on the selected client above.
        </p>
      </div>
    </div>
  )
};

export const EmptyState: Story = {
  args: {
    clients: [],
    onSelect: (client) => console.log('Selected client:', client)
  }
};

export const LoadingState: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
      </div>
      <p className="text-sm text-gray-500">
        This would typically show a loading state while clients are being fetched.
      </p>
    </div>
  )
};
