import { Button } from '@wheel/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@wheel/ui';
import { Icon } from '@wheel/ui';
import React from 'react';
import { Workspace } from './types';

export interface WorkspaceSwitcherProps {
  workspaces: Workspace[];
  currentWorkspace: Workspace;
  onWorkspaceChange: (workspace: Workspace) => void;
  onWorkspaceCreate?: () => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showRecent?: boolean;
  showSearch?: boolean;
  maxRecent?: number;
  placement?: 'dropdown' | 'modal' | 'sidebar';
}

export const WorkspaceSwitcher: React.FC<WorkspaceSwitcherProps> = ({
  workspaces,
  currentWorkspace,
  onWorkspaceChange,
  onWorkspaceCreate,
  showSearch = false,
  showRecent = false,
  maxRecent = 5,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recentWorkspaces, setRecentWorkspaces] = React.useState<Workspace[]>([]);

  const handleWorkspaceChange = (workspace: Workspace) => {
    onWorkspaceChange(workspace);
    setRecentWorkspaces((prev) =>
      [workspace, ...prev.filter((w) => w.id !== workspace.id)].slice(0, maxRecent)
    );
  };

  const filteredWorkspaces = workspaces.filter((workspace) =>
    workspace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Icon name="Users" className="mr-2" />
          {currentWorkspace.name}
          <Icon name="ChevronDown" className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {showSearch && (
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-1 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        {showRecent && recentWorkspaces.length > 0 && (
          <>
            <div className="p-2 text-xs text-gray-500">Recent</div>
            {recentWorkspaces.map((workspace) => (
              <DropdownMenuItem
                key={`recent-${workspace.id}`}
                onSelect={() => handleWorkspaceChange(workspace)}
              >
                {workspace.name}
              </DropdownMenuItem>
            ))}
            <hr className="my-1" />
          </>
        )}
        {filteredWorkspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onSelect={() => handleWorkspaceChange(workspace)}
          >
            {workspace.name}
          </DropdownMenuItem>
        ))}
        {onWorkspaceCreate && (
          <>
            <hr className="my-1" />
            <DropdownMenuItem onSelect={onWorkspaceCreate}>
              <Icon name="Plus" className="mr-2" />
              Create Workspace
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
