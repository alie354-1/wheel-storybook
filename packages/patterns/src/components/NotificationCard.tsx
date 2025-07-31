import { Card } from '@wheel/ui';
import React from 'react';
import { Notification } from './types';

export interface NotificationCardProps {
  notification: Notification;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showActions?: boolean;
  onActionClick?: (action: string) => void;
  onDismiss?: () => void;
  onMarkRead?: () => void;
  compact?: boolean;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  context = 'neutral',
  compact = false,
}) => {
  return (
    <Card
      className={`notification-card--${context} notification-card--${
        notification.type
      } ${compact ? 'notification-card--compact' : ''}`}
    >
      <div className="font-bold">{notification.title}</div>
      <div>{notification.message}</div>
    </Card>
  );
};
