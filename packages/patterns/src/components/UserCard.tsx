import { Avatar } from '@wheel/ui';
import { Badge } from '@wheel/ui';
import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import { StatusDot } from '@wheel/ui';
import React from 'react';
import { User } from './types';

export interface UserCardProps {
  user: User;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showPresence?: boolean;
  showStatus?: boolean;
  showActions?: boolean;
  onUserClick?: (user: User) => void;
  onActionClick?: (action: string, user: User) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  context = 'neutral',
  showPresence = false,
  showStatus = false,
  showActions = false,
  onUserClick,
  onActionClick,
  permissions = [],
  size = 'md',
  layout = 'vertical',
}) => {
  const handleActionClick = (action: string) => {
    if (onActionClick) {
      onActionClick(action, user);
    }
  };

  const canViewRole = permissions.includes('view_role');

  return (
    <Card
      className={`user-card--${context} user-card--${size} user-card--${layout}`}
      onClick={() => onUserClick?.(user)}
    >
      <div className="flex items-center">
        <Avatar src={user.avatarUrl} alt={user.name} />
        {showPresence && user.status && <StatusDot status={user.status} />}
        <div className="ml-4">
          <div className="text-lg font-bold">{user.name}</div>
          {showStatus && user.role && canViewRole && <Badge>{user.role}</Badge>}
        </div>
      </div>
      {showActions && (
        <div className="mt-4">
          {permissions.includes('edit') && (
            <Button onClick={() => handleActionClick('edit')}>Edit</Button>
          )}
          {permissions.includes('delete') && (
            <Button onClick={() => handleActionClick('delete')} variant="danger">
              Delete
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
