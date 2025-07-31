import React from 'react';
import { cn } from '@wheel/shared';

export type ProjectPhaseVariant =
  | 'discovery'
  | 'design'
  | 'development'
  | 'testing'
  | 'deployment'
  | 'maintenance';

export interface ProjectPhaseProps {
  phase: ProjectPhaseVariant;
  className?: string;
}

/**
 * ProjectPhase component that displays the current phase of a project.
 */
export const ProjectPhase: React.FC<ProjectPhaseProps> = ({
  phase,
  className = '',
}) => {
  const phaseStyles: Record<ProjectPhaseVariant, string> = {
    discovery: 'bg-blue-100 text-blue-800',
    design: 'bg-purple-100 text-purple-800',
    development: 'bg-green-100 text-green-800',
    testing: 'bg-yellow-100 text-yellow-800',
    deployment: 'bg-indigo-100 text-indigo-800',
    maintenance: 'bg-gray-100 text-gray-800',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
        phaseStyles[phase],
        className
      )}
    >
      {phase.charAt(0).toUpperCase() + phase.slice(1)}
    </div>
  );
};

export default ProjectPhase;
