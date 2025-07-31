import { Button, Icon, LucideIconName, cn } from '@wheel/ui';
import React from 'react';

export interface ToolItem {
  id: string;
  label: string;
  icon?: LucideIconName;
  permission?: string;
  workspaceContext?: string[];
  disabled?: boolean;
  onClick: () => void;
  group?: string;
}

export type ToolbarLayout = 'horizontal' | 'vertical' | 'grid';

export interface ToolbarProps {
  tools: ToolItem[];
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  layout?: ToolbarLayout;
  customizable?: boolean;
  onToolClick?: (tool: ToolItem) => void;
  onLayoutChange?: (layout: ToolbarLayout) => void;
  permissions?: string[];
  persistent?: boolean;
  responsive?: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  tools,
  context = 'neutral',
  layout = 'horizontal',
  onToolClick,
  permissions = [],
  customizable = false,
  onLayoutChange,
  persistent = false,
  responsive = false,
}) => {
  const [currentLayout, setCurrentLayout] = React.useState<ToolbarLayout>(() => {
    if (persistent) {
      return (localStorage.getItem('toolbar-layout') as ToolbarLayout) || layout;
    }
    return layout;
  });

  const handleLayoutChange = (newLayout: ToolbarLayout) => {
    setCurrentLayout(newLayout);
    if (onLayoutChange) {
      onLayoutChange(newLayout);
    }
    if (persistent) {
      localStorage.setItem('toolbar-layout', newLayout);
    }
  };
  const hasPermission = (tool: ToolItem) => {
    if (!tool.permission) return true;
    return permissions.includes(tool.permission);
  };

  const isVisibleInContext = (tool: ToolItem) => {
    if (!tool.workspaceContext) return true;
    return tool.workspaceContext.includes(context);
  };

  const visibleTools = tools.filter(
    (tool) => hasPermission(tool) && isVisibleInContext(tool)
  );

  const groupedTools = visibleTools.reduce((acc, tool) => {
    const group = tool.group || 'default';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(tool);
    return acc;
  }, {} as Record<string, ToolItem[]>);

  const handleToolClick = (tool: ToolItem) => {
    if (onToolClick) {
      onToolClick(tool);
    }
    tool.onClick();
  };

  return (
    <div
      className={cn(
        'flex p-1 bg-gray-100 rounded-md',
        currentLayout === 'vertical' ? 'flex-col' : 'flex-row',
        currentLayout === 'grid' && 'grid grid-cols-4',
        responsive && 'flex-wrap',
        'gap-1'
      )}
    >
      {customizable && (
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={() => handleLayoutChange('horizontal')}>H</Button>
          <Button variant="ghost" size="sm" onClick={() => handleLayoutChange('vertical')}>V</Button>
          <Button variant="ghost" size="sm" onClick={() => handleLayoutChange('grid')}>G</Button>
        </div>
      )}
      {Object.entries(groupedTools).map(([group, tools]) => (
        <div key={group} className="flex items-center">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              variant="ghost"
              size="sm"
              disabled={tool.disabled}
              onClick={() => handleToolClick(tool)}
              aria-label={tool.label}
            >
              {tool.icon && <Icon name={tool.icon} />}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
