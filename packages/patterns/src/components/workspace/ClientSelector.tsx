import { Button } from '@wheel/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@wheel/ui';
import { Icon } from '@wheel/ui';
import React from 'react';
import { Client } from './types';

export interface ClientFilter {
  id: string;
  label: string;
  isActive: boolean;
}

export interface ClientSelectorProps {
  clients: Client[];
  selectedClient?: Client;
  onClientSelect: (client: Client) => void;
  onClientCreate?: () => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showSearch?: boolean;
  showRecent?: boolean;
  showFilters?: boolean;
  filters?: ClientFilter[];
  onFilterChange?: (filters: ClientFilter[]) => void;
  permissions?: string[];
  maxRecent?: number;
}

export const ClientSelector: React.FC<ClientSelectorProps> = ({
  clients,
  selectedClient,
  onClientSelect,
  onClientCreate,
  showRecent = false,
  maxRecent = 5,
  filters = [],
  onFilterChange,
  showFilters = false,
  permissions = [],
}) => {
  const [recentClients, setRecentClients] = React.useState<Client[]>([]);

  const handleClientSelect = (client: Client) => {
    onClientSelect(client);
    setRecentClients((prev) =>
      [client, ...prev.filter((c) => c.id !== client.id)].slice(0, maxRecent)
    );
  };

  const hasPermission = (permission: string) => {
    return permissions.includes(permission);
  };

  const filteredClients = clients.filter((client) => {
    if (filters.length === 0) return true;
    return filters.some((filter) => filter.isActive);
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Icon name="User" className="mr-2" />
          {selectedClient ? selectedClient.name : 'Select Client'}
          <Icon name="ChevronDown" className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {showRecent && recentClients.length > 0 && (
          <>
            <div className="p-2 text-xs text-gray-500">Recent</div>
            {recentClients.map((client) => (
              <DropdownMenuItem
                key={`recent-${client.id}`}
                onSelect={() => handleClientSelect(client)}
              >
                {client.name}
              </DropdownMenuItem>
            ))}
            <hr className="my-1" />
          </>
        )}
        {showFilters && (
            <div className="p-2">
                {filters.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={filter.isActive}
                            onChange={() => {
                                const newFilters = filters.map((f) =>
                                    f.id === filter.id ? { ...f, isActive: !f.isActive } : f
                                );
                                onFilterChange?.(newFilters);
                            }}
                        />
                        <span className="ml-2">{filter.label}</span>
                    </div>
                ))}
            </div>
        )}
        {filteredClients.map((client) => (
          <DropdownMenuItem
            key={client.id}
            onSelect={() => handleClientSelect(client)}
          >
            {client.name}
          </DropdownMenuItem>
        ))}
        {onClientCreate && hasPermission('create-client') && (
          <>
            <hr className="my-1" />
            <DropdownMenuItem onSelect={onClientCreate}>
              <Icon name="Plus" className="mr-2" />
              Create Client
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
