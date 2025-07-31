import React from 'react';
import { cn } from '@wheel/shared';

export interface CollaboratorAvatarProps {
  collaborator: {
    name: string;
    avatarUrl?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * CollaboratorAvatar component that displays a collaborator's avatar.
 */
export const CollaboratorAvatar: React.FC<CollaboratorAvatarProps> = ({
  collaborator,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

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
        sizeClasses[size],
        className
      )}
      title={collaborator.name}
    >
      {collaborator.avatarUrl ? (
        <img
          src={collaborator.avatarUrl}
          alt={collaborator.name}
          className="w-full h-full rounded-full"
        />
      ) : (
        <span>{getInitials(collaborator.name)}</span>
      )}
    </div>
  );
};

export default CollaboratorAvatar;
