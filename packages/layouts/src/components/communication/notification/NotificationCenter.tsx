import { Avatar, Badge, Button, Icon } from '@wheel/ui';
import React, { useCallback, useMemo, useState } from 'react';

// Types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'mention' | 'update';
  category: 'system' | 'chat' | 'comment' | 'task' | 'billing' | 'general';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  workspace: string;
  sender?: User;
  actions?: NotificationAction[];
  metadata?: Record<string, any>;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface NotificationAction {
  id: string;
  label: string;
  type: 'primary' | 'secondary' | 'link';
  action: string;
  url?: string;
  data?: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface NotificationPreferences {
  channels: {
    inApp: boolean;
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  categories: Record<string, CategoryPreference>;
  schedule: {
    doNotDisturb: boolean;
    doNotDisturbStart?: string;
    doNotDisturbEnd?: string;
    timezone: string;
  };
  grouping: {
    enabled: boolean;
    interval: number;
  };
}

export interface CategoryPreference {
  enabled: boolean;
  channels: string[];
  priority: string;
  sound?: boolean;
}

export interface NotificationCenterProps {
  notifications: Notification[];
  currentUser: User;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool_creator' | 'founder' | 'neutral';
  onNotificationClick?: (notification: Notification) => void;
  onMarkAsRead?: (notificationId: string) => void;
  onMarkAllAsRead?: () => void;
  onClearAll?: () => void;
  showFilters?: boolean;
  showSettings?: boolean;
  permissions?: string[];
}

// Constants
const NOTIFICATION_CATEGORIES = {
  system: 'System',
  chat: 'Chat',
  comment: 'Comments',
  task: 'Tasks',
  billing: 'Billing',
  general: 'General'
};

const NOTIFICATION_TYPES = {
  info: { icon: 'Info', color: 'blue' },
  success: { icon: 'CheckCircle', color: 'green' },
  warning: { icon: 'AlertTriangle', color: 'yellow' },
  error: { icon: 'AlertCircle', color: 'red' },
  mention: { icon: 'AtSign', color: 'purple' },
  update: { icon: 'RefreshCw', color: 'blue' }
};

// Utility functions
const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
};

const formatDateGroup = (date: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 86400000);
  const notificationDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (notificationDate.getTime() === today.getTime()) return 'Today';
  if (notificationDate.getTime() === yesterday.getTime()) return 'Yesterday';
  return date.toLocaleDateString();
};

// Styled components
const NotificationCenterContainer = ({ children, context }: { children: React.ReactNode; context?: string }) => (
  <div className={`
    notification-center
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700
    rounded-lg shadow-lg
    w-96 max-h-96 overflow-hidden
    ${context === 'consultant' ? 'border-blue-200 dark:border-blue-800' : ''}
    ${context === 'client' ? 'border-green-200 dark:border-green-800' : ''}
    ${context === 'admin' ? 'border-purple-200 dark:border-purple-800' : ''}
    ${context === 'expert' ? 'border-orange-200 dark:border-orange-800' : ''}
    ${context === 'tool_creator' ? 'border-pink-200 dark:border-pink-800' : ''}
    ${context === 'founder' ? 'border-yellow-200 dark:border-yellow-800' : ''}
  `}>
    {children}
  </div>
);

const NotificationHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="notification-header p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
    {children}
  </div>
);

const HeaderActions = ({ children }: { children: React.ReactNode }) => (
  <div className="header-actions flex items-center gap-2">
    {children}
  </div>
);

const NotificationFilters = ({ children }: { children: React.ReactNode }) => (
  <div className="notification-filters p-2 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-1">
    {children}
  </div>
);

const FilterButton = ({
  children,
  active,
  onClick
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      filter-button px-3 py-1 rounded-full text-sm font-medium transition-colors
      ${active
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
      }
    `}
  >
    {children}
  </button>
);

const NotificationList = ({ children }: { children: React.ReactNode }) => (
  <div className="notification-list max-h-80 overflow-y-auto">
    {children}
  </div>
);

const NotificationGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="notification-group">
    {children}
  </div>
);

const DateHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="date-header px-4 py-2 bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 sticky top-0">
    {children}
  </div>
);

const NotificationItem = ({
  notification,
  onClick,
  onMarkAsRead,
  context
}: {
  notification: Notification;
  onClick: () => void;
  onMarkAsRead: () => void;
  context?: string;
}) => {
  const typeConfig = NOTIFICATION_TYPES[notification.type];

  return (
    <div
      className={`
        notification-item p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer
        hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
        ${!notification.read ? 'bg-blue-50 dark:bg-blue-950' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className={`
          notification-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${typeConfig.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : ''}
          ${typeConfig.color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' : ''}
          ${typeConfig.color === 'yellow' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' : ''}
          ${typeConfig.color === 'red' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' : ''}
          ${typeConfig.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : ''}
        `}>
          <Icon name={typeConfig.icon as any} size="sm" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {notification.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {notification.message}
              </p>
            </div>

            <div className="flex items-center gap-2 ml-2">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(notification.timestamp)}
              </span>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>

          {notification.sender && (
            <div className="flex items-center gap-2 mt-2">
              <Avatar
                src={notification.sender.avatar}
                alt={notification.sender.name}
                size="xs"
                fallback={notification.sender.name.charAt(0)}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {notification.sender.name}
              </span>
            </div>
          )}

          {notification.actions && notification.actions.length > 0 && (
            <div className="flex gap-2 mt-3">
              {notification.actions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.type === 'primary' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle action
                  }}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ message, context }: { message: string; context?: string }) => (
  <div className="empty-state p-8 text-center">
    <Icon name="Bell" size="lg" className="mx-auto mb-4 text-gray-400" />
    <p className="text-gray-500 dark:text-gray-400">{message}</p>
  </div>
);

// Main component
export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  currentUser,
  context = 'neutral',
  onNotificationClick,
  onMarkAsRead,
  onMarkAllAsRead,
  onClearAll,
  showFilters = true,
  showSettings = true,
  permissions = []
}) => {
  const [filter, setFilter] = useState('all');
  const [showPreferences, setShowPreferences] = useState(false);

  // Mock hasPermission function since useWorkspace is not available
  const hasPermission = (permission: string) => permissions.includes(permission);

  // Filter notifications
  const filteredNotifications = useMemo(() => {
    let filtered = notifications;

    if (filter === 'unread') {
      filtered = filtered.filter(n => !n.read);
    } else if (filter !== 'all') {
      filtered = filtered.filter(n => n.category === filter);
    }

    return filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [notifications, filter]);

  // Group notifications by date
  const groupedNotifications = useMemo(() => {
    return filteredNotifications.reduce((groups, notification) => {
      const dateKey = formatDateGroup(notification.timestamp);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(notification);
      return groups;
    }, {} as Record<string, Notification[]>);
  }, [filteredNotifications]);

  // Event handlers
  const handleNotificationClick = useCallback((notification: Notification) => {
    if (!notification.read && onMarkAsRead) {
      onMarkAsRead(notification.id);
    }
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  }, [onMarkAsRead, onNotificationClick]);

  const handleMarkAsRead = useCallback((notificationId: string) => {
    if (onMarkAsRead) {
      onMarkAsRead(notificationId);
    }
  }, [onMarkAsRead]);

  const handleMarkAllAsRead = useCallback(() => {
    if (onMarkAllAsRead) {
      onMarkAllAsRead();
    }
  }, [onMarkAllAsRead]);

  const handleClearAll = useCallback(() => {
    if (onClearAll) {
      onClearAll();
    }
  }, [onClearAll]);

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationCenterContainer context={context}>
      <NotificationHeader>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">
            Notifications
          </h3>
          {unreadCount > 0 && (
            <Badge variant="primary" size="sm">
              {unreadCount}
            </Badge>
          )}
        </div>

        <HeaderActions>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </Button>
          )}
          {notifications.length > 0 && hasPermission('notification:clear') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
            >
              Clear all
            </Button>
          )}
          {showSettings && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPreferences(true)}
            >
              <Icon name="Settings" size="sm" />
            </Button>
          )}
        </HeaderActions>
      </NotificationHeader>

      {showFilters && (
        <NotificationFilters>
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === 'unread'}
            onClick={() => setFilter('unread')}
          >
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </FilterButton>
          {Object.entries(NOTIFICATION_CATEGORIES).map(([key, label]) => {
            const count = notifications.filter(n => n.category === key).length;
            return count > 0 ? (
              <FilterButton
                key={key}
                active={filter === key}
                onClick={() => setFilter(key)}
              >
                {label} ({count})
              </FilterButton>
            ) : null;
          })}
        </NotificationFilters>
      )}

      <NotificationList>
        {Object.keys(groupedNotifications).length === 0 ? (
          <EmptyState
            message={filter === 'unread' ? 'No unread notifications' : 'No notifications'}
            context={context}
          />
        ) : (
          Object.entries(groupedNotifications).map(([date, items]) => (
            <NotificationGroup key={date}>
              <DateHeader>{date}</DateHeader>
              {items.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onClick={() => handleNotificationClick(notification)}
                  onMarkAsRead={() => handleMarkAsRead(notification.id)}
                  context={context}
                />
              ))}
            </NotificationGroup>
          ))
        )}
      </NotificationList>
    </NotificationCenterContainer>
  );
};

export default NotificationCenter;
