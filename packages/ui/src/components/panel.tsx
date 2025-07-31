/**
 * Panel Component
 *
 * A collapsible and resizable panel for displaying content.
 */

import { cn } from '@wheel/shared';
import { ChevronDown } from 'lucide-react';
import { Resizable } from 're-resizable';
import { forwardRef, ReactNode, useState } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

export interface PanelProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  context?: WorkspaceContext;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  header?: ReactNode;
  actions?: ReactNode;
  resizable?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  onResize?: (size: number) => void;
  children: ReactNode;
  className?: string;
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>((
  {
    variant = 'outlined',
    context = 'neutral',
    collapsible = false,
    defaultCollapsed = false,
    header,
    actions,
    resizable = false,
    onCollapse,
    onResize,
    children,
    className,
    ...props
  },
  ref
) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    if (collapsible) {
      const newCollapsedState = !isCollapsed;
      setIsCollapsed(newCollapsedState);
      if (onCollapse) {
        onCollapse(newCollapsedState);
      }
    }
  };

  const variantClasses = {
    elevated: 'shadow-lg',
    outlined: 'border',
    filled: 'bg-gray-50',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant':
        return {
          panel: 'bg-blue-50 border-blue-200',
          header: 'border-blue-200 bg-blue-100/50',
          content: 'bg-blue-25',
          button: 'text-blue-600 hover:text-blue-800 hover:bg-blue-100'
        };
      case 'client':
        return {
          panel: 'bg-green-50 border-green-200',
          header: 'border-green-200 bg-green-100/50',
          content: 'bg-green-25',
          button: 'text-green-600 hover:text-green-800 hover:bg-green-100'
        };
      case 'admin':
        return {
          panel: 'bg-gray-50 border-gray-200',
          header: 'border-gray-200 bg-gray-100/50',
          content: 'bg-gray-25',
          button: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
        };
      case 'expert':
        return {
          panel: 'bg-purple-50 border-purple-200',
          header: 'border-purple-200 bg-purple-100/50',
          content: 'bg-purple-25',
          button: 'text-purple-600 hover:text-purple-800 hover:bg-purple-100'
        };
      case 'tool-creator':
        return {
          panel: 'bg-orange-50 border-orange-200',
          header: 'border-orange-200 bg-orange-100/50',
          content: 'bg-orange-25',
          button: 'text-orange-600 hover:text-orange-800 hover:bg-orange-100'
        };
      case 'founder':
        return {
          panel: 'bg-amber-50 border-amber-200',
          header: 'border-amber-200 bg-amber-100/50',
          content: 'bg-amber-25',
          button: 'text-amber-600 hover:text-amber-800 hover:bg-amber-100'
        };
      default:
        return {
          panel: 'bg-white border-gray-200',
          header: 'border-gray-200 bg-gray-50',
          content: 'bg-white',
          button: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
        };
    }
  };

  const contextClasses = getContextClasses();

  const panelClasses = cn(
    'rounded-lg transition-all duration-200',
    variantClasses[variant],
    contextClasses.panel,
    className
  );

  if (resizable) {
    return (
      <Resizable
        defaultSize={{
          width: '100%',
          height: 'auto',
        }}
        onResizeStop={(e, direction, ref, d) => {
          if (onResize) {
            onResize(ref.offsetWidth);
          }
        }}
      >
        <div ref={ref} className={panelClasses} {...props}>
          <div className={cn('flex items-center justify-between p-4 border-b', contextClasses.header)}>
            <div className="flex items-center">
              {collapsible && (
                <button onClick={handleToggle} className={cn('mr-2 p-1 rounded transition-colors', contextClasses.button)}>
                  <ChevronDown className={cn('transition-transform', { 'rotate-180': !isCollapsed })} />
                </button>
              )}
              {header}
            </div>
            {actions}
          </div>
          {!isCollapsed && (
            <div className={cn('p-4', contextClasses.content)}>
              {children}
            </div>
          )}
        </div>
      </Resizable>
    );
  }

  return (
    <div ref={ref} className={panelClasses} {...props}>
      <div className={cn('flex items-center justify-between p-4 border-b', contextClasses.header)}>
        <div className="flex items-center">
          {collapsible && (
            <button onClick={handleToggle} className={cn('mr-2 p-1 rounded transition-colors', contextClasses.button)}>
              <ChevronDown className={cn('transition-transform', { 'rotate-180': !isCollapsed })} />
            </button>
          )}
          {header}
        </div>
        {actions}
      </div>
      {!isCollapsed && (
        <div className={cn('p-4', contextClasses.content)}>
          {children}
        </div>
      )}
    </div>
  );
});

Panel.displayName = 'Panel';
