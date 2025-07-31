import React from 'react';
import { cn } from '@wheel/shared/utils/cn';
import { WorkspaceSelector, WorkspaceSummary } from './workspaceselector';

export interface WorkspaceSwitcherProps {
  workspaces: WorkspaceSummary[];
  onSwitch: (workspace: WorkspaceSummary) => void;
  className?: string;
}

/**
 * WorkspaceSwitcher component for switching between workspaces.
 */
export const WorkspaceSwitcher: React.FC<WorkspaceSwitcherProps> = ({
  workspaces,
  onSwitch,
  className = '',
}) => {
  return (
    <div className={cn('p-4 bg-gray-100 rounded-md', className)}>
      <h3 className="text-lg font-semibold mb-4">Switch Workspace</h3>
      <WorkspaceSelector workspaces={workspaces} onSelect={onSwitch} />
    </div>
  );
};

export default WorkspaceSwitcher;
