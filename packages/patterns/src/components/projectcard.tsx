import { Avatar } from '@wheel/ui';
import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { ProgressCard } from './ProgressCard';
import { Project, User } from './types';

export interface ProjectCardProps {
  project: Project;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showProgress?: boolean;
  showTeam?: boolean;
  showActions?: boolean;
  onProjectClick?: (project: Project) => void;
  onTeamMemberClick?: (member: User) => void;
  onActionClick?: (action: string, project: Project) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  context = 'neutral',
  showProgress = false,
  showTeam = false,
  showActions = false,
  onProjectClick,
  onTeamMemberClick,
  onActionClick,
  permissions = [],
  size = 'md',
}) => {
  return (
    <Card
      className={`project-card--${context} project-card--${size}`}
      onClick={() => onProjectClick?.(project)}
    >
      <div className="text-lg font-bold">{project.name}</div>
      {showProgress && project.progress && (
        <div className="mt-4">
          <ProgressCard title="Progress" progress={project.progress} />
        </div>
      )}
      {showTeam && (
        <div className="mt-4">
          <h4 className="font-bold">Team</h4>
          {project.team?.map((member) => (
            <div
              key={member.id}
              onClick={() => onTeamMemberClick?.(member)}
            >
              <Avatar src={member.avatarUrl} alt={member.name} />
              {member.name}
            </div>
          ))}
        </div>
      )}
      {showActions && (
        <div className="mt-4">
          {permissions.includes('edit') && (
            <Button onClick={() => onActionClick?.('edit', project)}>
              Edit
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
