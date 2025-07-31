import { Avatar } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { ActivityCard } from './ActivityCard';
import { StatCard } from './StatCard';
import { Activity, User, Workspace } from './types';

export interface WorkspaceCardProps {
  workspace: Workspace;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showMembers?: boolean;
  showActivity?: boolean;
  showMetrics?: boolean;
  onWorkspaceClick?: (workspace: Workspace) => void;
  onMemberClick?: (member: User) => void;
  onActivityClick?: (activity: Activity) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  workspace,
  context = 'neutral',
  showMembers = false,
  showActivity = false,
  showMetrics = false,
  onWorkspaceClick,
  onMemberClick,
  onActivityClick,
  permissions = [],
  size = 'md',
}) => {
  return (
    <Card
      className={`workspace-card--${context} workspace-card--${size}`}
      onClick={() => onWorkspaceClick?.(workspace)}
    >
      <div className="text-lg font-bold">{workspace.name}</div>
      {showMembers && (
        <div className="mt-4">
          <h4 className="font-bold">Members</h4>
          {workspace.members?.map((member) => (
            <div key={member.id} onClick={() => onMemberClick?.(member)}>
              <Avatar src={member.avatarUrl} alt={member.name} />
              {member.name}
            </div>
          ))}
        </div>
      )}
      {showActivity && workspace.activity && (
        <div className="mt-4">
          <h4 className="font-bold">Activity</h4>
          <ActivityCard activities={workspace.activity} />
        </div>
      )}
      {showMetrics && (
        <div className="mt-4">
          <h4 className="font-bold">Metrics</h4>
          {workspace.metrics?.map((metric) => (
            <StatCard key={metric.title} {...metric} />
          ))}
        </div>
      )}
    </Card>
  );
};
