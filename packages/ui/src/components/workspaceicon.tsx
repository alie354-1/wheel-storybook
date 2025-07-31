import React from 'react';
import { cn } from '@wheel/shared';

export type WorkspaceIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface WorkspaceIconProps {
  size?: WorkspaceIconSize;
  className?: string;
  // In a real application, you would pass in the workspace object
  // and derive the icon from that.
  // For now, we will just use a placeholder.
  workspace?: {
    name: string;
    logo?: string;
  };
}

/**
 * WorkspaceIcon component that displays an icon for a workspace.
 */
export const WorkspaceIcon: React.FC<WorkspaceIconProps> = ({
  size = 'md',
  className = '',
  workspace,
}) => {
  const getDimensions = () => {
    switch (size) {
      case 'xs':
        return 24;
      case 'sm':
        return 32;
      case 'md':
        return 40;
      case 'lg':
        return 48;
      case 'xl':
        return 56;
      default:
        return 40;
    }
  };

  const dimensions = getDimensions();
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center bg-gray-200 text-gray-700 font-bold',
        className
      )}
      style={{
        width: dimensions,
        height: dimensions,
        fontSize: dimensions / 2.5,
      }}
    >
      {workspace?.logo ? (
        <img
          src={workspace.logo}
          alt={`${workspace.name} logo`}
          className="w-full h-full rounded-full"
        />
      ) : (
        <span>{workspace ? getInitials(workspace.name) : 'W'}</span>
      )}
    </div>
  );
};

export default WorkspaceIcon;
