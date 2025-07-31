import { useProgress } from '@wheel/shared';
import { Card } from '@wheel/ui';
import { ProgressIndicator } from '@wheel/ui';
import React from 'react';
import { Milestone, Progress } from './types';

export interface ProgressCardProps {
  title: string;
  progress: Progress;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showMilestones?: boolean;
  showTrend?: boolean;
  onMilestoneClick?: (milestone: Milestone) => void;
  onProgressUpdate?: (progress: Progress) => void;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  updateInterval?: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  context = 'neutral',
  showMilestones = false,
  size = 'md',
  updateInterval,
}) => {
  const currentValue = useProgress(progress.value, progress.target, updateInterval || null);
  const percentage = (currentValue / progress.target) * 100;

  return (
    <Card className={`progress-card--${context} progress-card--${size}`}>
      <div className="text-lg font-bold">{title}</div>
      <ProgressIndicator value={percentage} />
      {showMilestones && (
        <div className="mt-4">
          {progress.milestones?.map((milestone) => (
            <div key={milestone.id}>{milestone.name}</div>
          ))}
        </div>
      )}
    </Card>
  );
};
