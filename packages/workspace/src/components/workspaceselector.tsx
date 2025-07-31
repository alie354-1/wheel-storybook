import React, { useState } from 'react';
import { cn } from '@wheel/shared/utils/cn';
import { WorkspaceIcon } from '@wheel/ui';

export interface WorkspaceSummary {
  id: string;
  name: string;
  logo?: string;
}

export interface WorkspaceSelectorProps {
  workspaces: WorkspaceSummary[];
  onSelect: (workspace: WorkspaceSummary) => void;
  className?: string;
}

/**
 * WorkspaceSelector component for selecting a workspace.
 */
export const WorkspaceSelector: React.FC<WorkspaceSelectorProps> = ({
  workspaces,
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(workspaces[0]);

  const handleSelect = (workspace: WorkspaceSummary) => {
    setSelected(workspace);
    onSelect(workspace);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        className="flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <WorkspaceIcon workspace={selected} size="sm" />
        <span>{selected.name}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(workspace)}
            >
              <WorkspaceIcon workspace={workspace} size="sm" />
              <span>{workspace.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkspaceSelector;
