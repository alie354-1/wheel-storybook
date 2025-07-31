import { Avatar, Button, EmptyState, Spinner } from '@wheel/ui';
import React, { useCallback, useMemo, useState } from 'react';
import { Activity, ActivityFeedProps, ActivityFilter } from './types';
import { getWorkspaceTheme } from './utils';

export const ActivityFeed: React.FC<ActivityFeedProps> = ({
  activities,
  loading = false,
  context = 'neutral',
  permissions = [],
  grouped = false,
  onActivityClick,
  onUserClick,
  realTimeUpdates = false,
  onNewActivity,
  userFilters = [],
  typeFilters = [],
  onFilterChange,
  infiniteScroll = false,
  onLoadMore,
  hasMore = false,
  maxHeight,
  showAvatars = true,
  showTimestamps = true,
  className = '',
  style,
}) => {
  // State management
  const [activeFilters, setActiveFilters] = useState<ActivityFilter>({});

  // Get workspace theme
  const theme = getWorkspaceTheme(context);

  // Filter activities based on active filters
  const filteredActivities = useMemo(() => {
    let filtered = activities;

    // Apply user filters
    if (activeFilters.users && activeFilters.users.length > 0) {
      filtered = filtered.filter(activity =>
        activeFilters.users!.includes(activity.user.id)
      );
    }

    // Apply type filters
    if (activeFilters.types && activeFilters.types.length > 0) {
      filtered = filtered.filter(activity =>
        activeFilters.types!.includes(activity.type)
      );
    }

    // Apply date range filter
    if (activeFilters.dateRange) {
      filtered = filtered.filter(activity => {
        const activityDate = new Date(activity.timestamp);
        return activityDate >= activeFilters.dateRange!.start &&
               activityDate <= activeFilters.dateRange!.end;
      });
    }

    // Apply unread filter
    if (activeFilters.unreadOnly) {
      filtered = filtered.filter(activity => !activity.read);
    }

    return filtered;
  }, [activities, activeFilters]);

  // Group activities if needed
  const groupedActivities = useMemo(() => {
    if (!grouped) {
      return { 'All Activities': filteredActivities };
    }

    const groups: Record<string, Activity[]> = {};

    filteredActivities.forEach(activity => {
      const date = new Date(activity.timestamp);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      let groupKey: string;
      if (date.toDateString() === today.toDateString()) {
        groupKey = 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        groupKey = 'Yesterday';
      } else {
        groupKey = date.toLocaleDateString();
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(activity);
    });

    // Sort groups by most recent
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    });

    return groups;
  }, [filteredActivities, grouped]);

  // Event handlers
  const handleFilterChange = useCallback((newFilters: ActivityFilter) => {
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  }, [onFilterChange]);

  const handleActivityClick = useCallback((activity: Activity) => {
    onActivityClick?.(activity);
  }, [onActivityClick]);

  const handleUserClick = useCallback((user: Activity['user']) => {
    onUserClick?.(user);
  }, [onUserClick]);

  // Real-time updates
  React.useEffect(() => {
    if (realTimeUpdates && onNewActivity) {
      // This would typically connect to a WebSocket or polling mechanism
      const handleNewActivity = (activity: Activity) => {
        onNewActivity(activity);
      };

      // Return cleanup function
      return () => {
        // Cleanup WebSocket connection or polling
      };
    }
  }, [realTimeUpdates, onNewActivity]);

  // Render functions
  const renderActivityIcon = (activity: Activity) => {
    // Default icon based on type
    const typeIcons: Record<string, string> = {
      create: '➕',
      update: '✏️',
      delete: '🗑️',
      comment: '💬',
      like: '👍',
      share: '🔗',
      view: '👁️',
      download: '⬇️',
      upload: '⬆️',
      login: '🔑',
      logout: '🚪',
      error: '❌',
      warning: '⚠️',
      success: '✅',
      info: 'ℹ️',
    };

    const typeColors: Record<string, string> = {
      create: 'bg-green-500',
      update: 'bg-blue-500',
      delete: 'bg-red-500',
      comment: 'bg-purple-500',
      like: 'bg-pink-500',
      share: 'bg-indigo-500',
      view: 'bg-gray-500',
      download: 'bg-teal-500',
      upload: 'bg-orange-500',
      login: 'bg-emerald-500',
      logout: 'bg-slate-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      success: 'bg-green-500',
      info: 'bg-blue-500',
    };

    return (
      <div
        className={`
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${typeColors[activity.type] || theme.primary}
        `}
      >
        {typeIcons[activity.type] || '•'}
      </div>
    );
  };

  const formatTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  };

  const renderActivity = (activity: Activity) => {
    const canView = !activity.workspaceContext ||
      activity.workspaceContext === context ||
      permissions.includes('view_all_activities');

    if (!canView) return null;

    return (
      <div
        key={activity.id}
        className={`
          flex gap-3 p-3 rounded-lg transition-colors
          ${onActivityClick ? 'cursor-pointer hover:bg-gray-50' : ''}
          ${!activity.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
        `}
        onClick={() => handleActivityClick(activity)}
      >
        {/* Activity icon */}
        <div className="flex-shrink-0">
          {renderActivityIcon(activity)}
        </div>

        {/* Activity content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              {/* Activity title */}
              <p className="text-gray-900 text-sm font-medium">
                {activity.title}
              </p>

              {/* Activity description */}
              {activity.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
              )}

              {/* Activity metadata */}
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                {showTimestamps && (
                  <span>{formatTimestamp(activity.timestamp)}</span>
                )}

                {showAvatars && activity.user && (
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUserClick(activity.user);
                    }}
                  >
                    {activity.user.avatar && (
                      <Avatar
                        src={activity.user.avatar}
                        alt={activity.user.name}
                        size="xs"
                      />
                    )}
                    <span>{activity.user.name}</span>
                    {activity.user.role && (
                      <span className="text-gray-400">({activity.user.role})</span>
                    )}
                  </div>
                )}

                <span className="capitalize">
                  {activity.type.replace(/_/g, ' ')}
                </span>

                {activity.target && (
                  <span>
                    → {activity.target.name}
                  </span>
                )}
              </div>
            </div>

            {/* Unread indicator */}
            {!activity.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
            )}
          </div>

          {/* Activity metadata display */}
          {activity.metadata && Object.keys(activity.metadata).length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(activity.metadata).slice(0, 4).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-medium text-gray-600">
                      {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:
                    </span>
                    <span className="ml-1 text-gray-900">
                      {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGroup = (groupKey: string, groupActivities: Activity[]) => {
    return (
      <div key={groupKey} className="mb-4">
        {grouped && (
          <div className="flex items-center justify-between mb-3 px-3">
            <h3 className="font-semibold text-gray-900 text-sm">
              {groupKey}
            </h3>
            <span className="text-xs text-gray-500">
              {groupActivities.length} activit{groupActivities.length !== 1 ? 'ies' : 'y'}
            </span>
          </div>
        )}

        <div className="space-y-1">
          {groupActivities.map(activity => renderActivity(activity))}
        </div>
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Spinner size="lg" />
        <span className="ml-2 text-gray-600">Loading activities...</span>
      </div>
    );
  }

  // Empty state
  if (filteredActivities.length === 0) {
    return (
      <EmptyState
        title="No activities found"
        description={
          Object.keys(activeFilters).length > 0
            ? "No activities match your current filters."
            : "There are no activities to display."
        }
        actions={
          Object.keys(activeFilters).length > 0 ? (
            <Button onClick={() => handleFilterChange({})}>
              Clear filters
            </Button>
          ) : undefined
        }
      />
    );
  }

  return (
    <div className={`${className}`} style={style}>
      {/* Filters */}
      {(userFilters.length > 0 || typeFilters.length > 0) && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2 text-sm">Filters</h4>

          <div className="space-y-2">
            {/* User filters */}
            {userFilters.length > 0 && (
              <div>
                <span className="text-xs text-gray-600 mb-1 block">Users:</span>
                <div className="flex flex-wrap gap-1">
                  {userFilters.map((user) => (
                    <Button
                      key={user.id}
                      variant={
                        activeFilters.users?.includes(user.id) ? 'primary' : 'outline'
                      }
                      size="sm"
                      onClick={() => {
                        const currentUsers = activeFilters.users || [];
                        const isActive = currentUsers.includes(user.id);

                        const newUsers = isActive
                          ? currentUsers.filter(id => id !== user.id)
                          : [...currentUsers, user.id];

                        handleFilterChange({
                          ...activeFilters,
                          users: newUsers.length > 0 ? newUsers : undefined
                        });
                      }}
                    >
                      {user.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Type filters */}
            {typeFilters.length > 0 && (
              <div>
                <span className="text-xs text-gray-600 mb-1 block">Types:</span>
                <div className="flex flex-wrap gap-1">
                  {typeFilters.map((type) => (
                    <Button
                      key={type}
                      variant={
                        activeFilters.types?.includes(type) ? 'primary' : 'outline'
                      }
                      size="sm"
                      onClick={() => {
                        const currentTypes = activeFilters.types || [];
                        const isActive = currentTypes.includes(type);

                        const newTypes = isActive
                          ? currentTypes.filter(t => t !== type)
                          : [...currentTypes, type];

                        handleFilterChange({
                          ...activeFilters,
                          types: newTypes.length > 0 ? newTypes : undefined
                        });
                      }}
                    >
                      {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Unread filter */}
            <div>
              <Button
                variant={activeFilters.unreadOnly ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  handleFilterChange({
                    ...activeFilters,
                    unreadOnly: !activeFilters.unreadOnly
                  });
                }}
              >
                Unread only
              </Button>
            </div>
          </div>

          {Object.keys(activeFilters).length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFilterChange({})}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Activity Feed */}
      <div
        className={`
          bg-white border border-gray-200 rounded-lg
          ${maxHeight ? 'overflow-y-auto' : ''}
        `}
        style={{ maxHeight }}
      >
        {Object.entries(groupedActivities).map(([groupKey, groupActivities]) =>
          renderGroup(groupKey, groupActivities)
        )}

        {/* Infinite scroll trigger */}
        {infiniteScroll && hasMore && (
          <div className="p-4 text-center">
            <Button
              variant="outline"
              onClick={onLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          </div>
        )}
      </div>

      {/* Real-time indicator */}
      {realTimeUpdates && (
        <div className="mt-3 flex items-center justify-center text-xs text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
          Live updates enabled
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
