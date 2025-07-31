import { Avatar } from '@wheel/ui';
import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { StatCard } from './StatCard';
import { Client, Project } from './types';

export interface ClientCardProps {
  client: Client;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showProjects?: boolean;
  showMetrics?: boolean;
  showActions?: boolean;
  onClientClick?: (client: Client) => void;
  onProjectClick?: (project: Project) => void;
  onActionClick?: (action: string, client: Client) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const ClientCard: React.FC<ClientCardProps> = ({
  client,
  context = 'neutral',
  showProjects = false,
  showMetrics = false,
  showActions = false,
  onClientClick,
  onProjectClick,
  onActionClick,
  permissions = [],
  size = 'md',
}) => {
  return (
    <Card
      className={`client-card--${context} client-card--${size}`}
      onClick={() => onClientClick?.(client)}
    >
      <div className="flex items-center">
        <Avatar src={client.avatarUrl} alt={client.name} />
        <div className="ml-4">
          <div className="text-lg font-bold">{client.name}</div>
        </div>
      </div>
      {showProjects && (
        <div className="mt-4">
          <h4 className="font-bold">Projects</h4>
          {client.projects?.map((project) => (
            <div key={project.id} onClick={() => onProjectClick?.(project)}>
              {project.name}
            </div>
          ))}
        </div>
      )}
      {showMetrics && (
        <div className="mt-4">
          <h4 className="font-bold">Metrics</h4>
          {client.metrics?.map((metric) => (
            <StatCard key={metric.title} {...metric} />
          ))}
        </div>
      )}
      {showActions && (
        <div className="mt-4">
          {permissions.includes('edit') && (
            <Button onClick={() => onActionClick?.('edit', client)}>
              Edit
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
