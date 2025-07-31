import { useInterval } from '@wheel/shared';
import { Card } from '@wheel/ui';
import React, { useState } from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'stable';
    period: string;
  };
  comparison?: {
    value: number;
    label: string;
    type: 'previous' | 'target' | 'average';
  };
  format?: 'currency' | 'percentage' | 'number' | 'custom';
  formatter?: (value: any) => string;
  onClick?: () => void;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onUpdate?: (value: number) => void;
  updateInterval?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  context = 'neutral',
  trend,
  comparison,
  format = 'number',
  formatter,
  onClick,
  loading = false,
  size = 'md',
  onUpdate,
  updateInterval,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useInterval(() => {
    const newValue = typeof currentValue === 'number' ? currentValue + Math.floor(Math.random() * 100) : currentValue;
    setCurrentValue(newValue);
    if (onUpdate) {
      onUpdate(newValue as number);
    }
  }, updateInterval || null);

  const formattedValue = () => {
    if (formatter) {
      return formatter(currentValue);
    }
    switch (format) {
      case 'currency':
        return `$${Number(currentValue).toFixed(2)}`;
      case 'percentage':
        return `${currentValue}%`;
      default:
        return currentValue;
    }
  };

  return (
    <Card
      className={`stat-card--${context} stat-card--${size}`}
      onClick={onClick}
    >
      <div className="text-lg font-bold">{title}</div>
      <div className="text-3xl">{loading ? '...' : formattedValue()}</div>
      {trend && (
        <div>
          {trend.direction === 'up' ? '↑' : '↓'} {trend.value}% vs {trend.period}
        </div>
      )}
      {comparison && (
        <div>
          vs {comparison.label}: {comparison.value}
        </div>
      )}
    </Card>
  );
};
