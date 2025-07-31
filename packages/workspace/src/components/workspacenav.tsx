import React from 'react';
import { cn } from '@wheel/shared/utils/cn';
import { WorkspaceSwitcher } from './workspaceswitcher';
import { ClientSelector } from './clientselector';

export interface WorkspaceNavProps {
  workspaces: any[];
  clients: any[];
  onWorkspaceSwitch: (workspace: any) => void;
  onClientSelect: (client: any) => void;
  className?: string;
}

/**
 * WorkspaceNav component for navigating a workspace.
 */
export const WorkspaceNav: React.FC<WorkspaceNavProps> = ({
  workspaces,
  clients,
  onWorkspaceSwitch,
  onClientSelect,
  className = '',
}) => {
  return (
    <nav className={cn('flex items-center justify-between p-4 bg-white shadow-md', className)}>
      <WorkspaceSwitcher workspaces={workspaces} onSwitch={onWorkspaceSwitch} />
      <ClientSelector clients={clients} onSelect={onClientSelect} />
    </nav>
  );
};

export default WorkspaceNav;
