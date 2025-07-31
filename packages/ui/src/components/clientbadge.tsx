import React from 'react';
import { cn } from '@wheel/shared';

export interface ClientBadgeProps {
  client: {
    name: string;
    logo?: string;
  };
  className?: string;
}

/**
 * ClientBadge component that displays a client's name and logo.
 */
export const ClientBadge: React.FC<ClientBadgeProps> = ({
  client,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-800',
        className
      )}
    >
      {client.logo && (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="w-5 h-5 rounded-full mr-2"
        />
      )}
      <span>{client.name}</span>
    </div>
  );
};

export default ClientBadge;
