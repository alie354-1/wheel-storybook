import { Avatar, Badge, Button, EmptyState, Spinner } from '@wheel/ui';
import React, { useCallback, useMemo, useState } from 'react';
import { TimelineEvent, TimelineFilter, TimelineProps } from './types';
import { getWorkspaceTheme } from './utils';

export const Timeline: React.FC<TimelineProps> = ({
  events,
  loading = false,
  context = 'neutral',
  permissions = [],
  groupBy = 'date',
  filtering = [],
  onEventClick,
  onFilterChange,
  realTimeUpdates = false,
  onNewEvent,
  responsive = true,
  maxHeight,
  showTime = true,
  showUser = true,
  className = '',
  style,
}) => {
  // State management
  const [activeFilters, setActiveFilters] = useState<TimelineFilter[]>(filtering);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  // Get workspace theme
  const theme = getWorkspaceTheme(context);

  // Filter events based on active filters
  const filteredEvents = useMemo(() => {
    if (activeFilters.length === 0) return events;

    return events.filter(event => {
      return activeFilters.every(filter => {
        switch (filter.type) {
          case 'user':
            return event.user?.id === filter.value;
          case 'type':
            return event.type === filter.value;
          case 'status':
            return event.status === filter.value;
          case 'date':
            const eventDate = new Date(event.timestamp);
            const filterDate = new Date(filter.value);
            return eventDate.toDateString() === filterDate.toDateString();
          default:
            return true;
        }
      });
    });
  }, [events, activeFilters]);

  // Group events based on groupBy prop
  const groupedEvents = useMemo(() => {
    if (groupBy === 'none') {
      return { 'All Events': filteredEvents };
    }

    const groups: Record<string, TimelineEvent[]> = {};

    filteredEvents.forEach(event => {
      let groupKey: string;

      switch (groupBy) {
        case 'date':
          groupKey = new Date(event.timestamp).toDateString();
          break;
        case 'type':
          groupKey = event.type;
          break;
        case 'user':
          groupKey = event.user?.name || 'Unknown User';
          break;
        default:
          groupKey = 'All Events';
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(event);
    });

    // Sort groups by most recent
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    });

    return groups;
  }, [filteredEvents, groupBy]);

  // Event handlers
  const handleFilterChange = useCallback((newFilters: TimelineFilter[]) => {
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  }, [onFilterChange]);

  const handleEventClick = useCallback((event: TimelineEvent) => {
    onEventClick?.(event);
  }, [onEventClick]);

  const toggleGroupExpansion = useCallback((groupKey: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupKey)) {
      newExpanded.delete(groupKey);
    } else {
      newExpanded.add(groupKey);
    }
    setExpandedGroups(newExpanded);
  }, [expandedGroups]);

  // Real-time updates
  React.useEffect(() => {
    if (realTimeUpdates && onNewEvent) {
      // This would typically connect to a WebSocket or polling mechanism
      // For now, we'll just set up the callback structure
      const handleNewEvent = (event: TimelineEvent) => {
        onNewEvent(event);
      };

      // Return cleanup function
      return () => {
        // Cleanup WebSocket connection or polling
      };
    }
  }, [realTimeUpdates, onNewEvent]);

  // Render functions
  const renderEventIcon = (event: TimelineEvent) => {
    if (event.icon) {
      return (
        <div
          className={`
            w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
            ${event.color ? '' : theme.primary}
          `}
          style={{ backgroundColor: event.color }}
        >
          {event.icon}
        </div>
      );
    }

    // Default icon based on status
    const statusColors = {
      pending: 'bg-yellow-500',
      completed: 'bg-green-500',
      failed: 'bg-red-500',
      cancelled: 'bg-gray-500',
    };

    const statusIcons = {
      pending: '⏳',
      completed: '✓',
      failed: '✗',
      cancelled: '⊘',
    };

    return (
      <div
        className={`
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${event.status ? statusColors[event.status] : theme.primary}
        `}
      >
        {event.status ? statusIcons[event.status] : '•'}
      </div>
    );
  };

  const renderEvent = (event: TimelineEvent, isLast: boolean) => {
    const canView = !event.workspaceContext ||
      event.workspaceContext === context ||
      permissions.includes('view_all_events');

    if (!canView) return null;

    return (
      <div key={event.id} className="relative flex gap-4 pb-6">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200" />
        )}

        {/* Event icon */}
        <div className="relative z-10">
          {renderEventIcon(event)}
        </div>

        {/* Event content */}
        <div className="flex-1 min-w-0">
          <div
            className={`
              bg-white border border-gray-200 rounded-lg p-4 shadow-sm
              ${onEventClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
            `}
            onClick={() => handleEventClick(event)}
          >
            {/* Event header */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">
                  {event.title}
                </h4>
                {event.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {event.description}
                  </p>
                )}
              </div>

              {event.status && (
                <Badge
                  variant={
                    event.status === 'completed' ? 'success' :
                    event.status === 'failed' ? 'error' :
                    event.status === 'cancelled' ? 'secondary' :
                    'warning'
                  }
                  size="sm"
                >
                  {event.status}
                </Badge>
              )}
            </div>

            {/* Event metadata */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              {showTime && (
                <span>
                  {new Date(event.timestamp).toLocaleString()}
                </span>
              )}

              {showUser && event.user && (
                <div className="flex items-center gap-2">
                  {event.user.avatar && (
                    <Avatar
                      src={event.user.avatar}
                      alt={event.user.name}
                      size="xs"
                    />
                  )}
                  <span>{event.user.name}</span>
                </div>
              )}

              <span className="capitalize">{event.type}</span>
            </div>

            {/* Event metadata display */}
            {event.metadata && Object.keys(event.metadata).length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(event.metadata).map(([key, value]) => (
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
      </div>
    );
  };

  const renderGroup = (groupKey: string, groupEvents: TimelineEvent[]) => {
    const isExpanded = expandedGroups.has(groupKey) || groupBy === 'none';

    return (
      <div key={groupKey} className="mb-6">
        {groupBy !== 'none' && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {groupKey}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {groupEvents.length} event{groupEvents.length !== 1 ? 's' : ''}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleGroupExpansion(groupKey)}
              >
                {isExpanded ? '▲' : '▼'}
              </Button>
            </div>
          </div>
        )}

        {isExpanded && (
          <div className="space-y-0">
            {groupEvents.map((event, index) =>
              renderEvent(event, index === groupEvents.length - 1)
            )}
          </div>
        )}
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Spinner size="lg" />
        <span className="ml-2 text-gray-600">Loading timeline...</span>
      </div>
    );
  }

  // Empty state
  if (filteredEvents.length === 0) {
    return (
      <EmptyState
        title="No events found"
        description={
          activeFilters.length > 0
            ? "No events match your current filters."
            : "There are no events to display."
        }
        actions={
          activeFilters.length > 0 ? (
            <Button onClick={() => handleFilterChange([])}>
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
      {filtering.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Filters</h4>
          <div className="flex flex-wrap gap-2">
            {filtering.map((filter) => (
              <Button
                key={`${filter.type}-${filter.value}`}
                variant={
                  activeFilters.some(f => f.type === filter.type && f.value === filter.value)
                    ? 'primary'
                    : 'outline'
                }
                size="sm"
                onClick={() => {
                  const isActive = activeFilters.some(f =>
                    f.type === filter.type && f.value === filter.value
                  );

                  if (isActive) {
                    handleFilterChange(
                      activeFilters.filter(f =>
                        !(f.type === filter.type && f.value === filter.value)
                      )
                    );
                  } else {
                    handleFilterChange([...activeFilters, filter]);
                  }
                }}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFilterChange([])}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Timeline */}
      <div
        className={`
          ${responsive ? 'w-full' : ''}
          ${maxHeight ? 'overflow-y-auto' : ''}
        `}
        style={{ maxHeight }}
      >
        {Object.entries(groupedEvents).map(([groupKey, groupEvents]) =>
          renderGroup(groupKey, groupEvents)
        )}
      </div>

      {/* Real-time indicator */}
      {realTimeUpdates && (
        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
          Live updates enabled
        </div>
      )}
    </div>
  );
};

export default Timeline;
