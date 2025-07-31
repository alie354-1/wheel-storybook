import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { Status } from './types';

export interface StatusCardProps {
  title: string;
  status: Status;
  statusHistory?: Status[];
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showHistory?: boolean;
  showActions?: boolean;
  onStatusChange?: (newStatus: Status) => void;
  onActionClick?: (action: string) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  status,
  statusHistory = [],
  context = 'neutral',
  showHistory = false,
  showActions = false,
  onStatusChange,
  onActionClick,
  permissions = [],
  size = 'md',
}) => {
  const handleActionClick = (action: string) => {
    if (onActionClick) {
      onActionClick(action);
    }
  };

  return (
    <Card
      className={`status-card--${context} status-card--${size}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">{title}</div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: status.color }}
        />
      </div>
      <div className="mt-2">{status.name}</div>
      {showHistory && (
        <div className="mt-4">
          <h4 className="font-bold">History</h4>
          {statusHistory.map((s) => (
            <div key={s.id}>{s.name}</div>
          ))}
        </div>
      )}
      {showActions && (
        <div className="mt-4">
          {permissions.includes('change_status') && (
            <Button onClick={() => onStatusChange?.(status)}>Change Status</Button>
          )}
        </div>
      )}
    </Card>
  );
};
