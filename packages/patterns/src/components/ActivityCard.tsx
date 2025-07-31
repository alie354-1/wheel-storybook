import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { Activity, ActivityFilter } from './types';

export interface ActivityCardProps {
  activities: Activity[];
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  filters?: ActivityFilter[];
  onActivityClick?: (activity: Activity) => void;
  onFilterChange?: (filters: ActivityFilter[]) => void;
  realTimeUpdates?: boolean;
  maxItems?: number;
  showLoadMore?: boolean;
  onLoadMore?: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activities,
  context = 'neutral',
  filters = [],
  onActivityClick,
  onFilterChange,
  realTimeUpdates = false,
  maxItems,
  showLoadMore = false,
  onLoadMore,
}) => {
  const filteredActivities = activities.filter((activity) => {
    if (filters.length === 0) {
      return true;
    }
    return filters.every((filter) => {
      if (filter.type === 'user') {
        return activity.user.id === filter.id;
      }
      if (filter.type === 'type') {
        return activity.type === filter.name;
      }
      return true;
    });
  });

  return (
    <Card className={`activity-card--${context}`}>
      {filteredActivities.slice(0, maxItems).map((activity) => (
        <div key={activity.id} onClick={() => onActivityClick?.(activity)}>
          {activity.description} @ {activity.timestamp.toLocaleDateString()}
        </div>
      ))}
      {showLoadMore && <Button onClick={onLoadMore}>Load More</Button>}
    </Card>
  );
};
