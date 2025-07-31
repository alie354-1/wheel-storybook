import React, { useState } from 'react';
import { cn } from '@wheel/shared/utils/cn';
import { ClientBadge } from '@wheel/ui';

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface ClientSelectorProps {
  clients: Client[];
  onSelect: (client: Client) => void;
  className?: string;
}

/**
 * ClientSelector component for selecting a client.
 */
export const ClientSelector: React.FC<ClientSelectorProps> = ({
  clients,
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(clients[0]);

  const handleSelect = (client: Client) => {
    setSelected(client);
    onSelect(client);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        className="flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ClientBadge client={selected} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(client)}
            >
              <ClientBadge client={client} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientSelector;
