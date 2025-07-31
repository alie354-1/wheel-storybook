import { cn } from '@wheel/shared';
import { Icon } from '@wheel/ui';
import React, { useCallback, useEffect, useState } from 'react';

export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  children?: NavigationItem[];
  permission?: string;
  badge?: number;
  active?: boolean;
  disabled?: boolean;
  workspaceContext?: 'consultant' | 'client' | 'admin' | 'neutral';
}

export interface SideNavigationProps {
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  items: NavigationItem[];
  currentPath?: string;
  onItemClick?: (item: NavigationItem) => void;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  permissions?: string[];
  responsive?: boolean;
  className?: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  context = 'neutral',
  items,
  currentPath,
  onItemClick,
  collapsible = true,
  defaultCollapsed = false,
  onCollapseChange,
  permissions = [],
  responsive = true,
  className,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Handle collapse state changes
  const handleCollapseToggle = useCallback(() => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  }, [collapsed, onCollapseChange]);

  // Handle item expansion
  const handleItemExpand = useCallback((itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  // Filter items based on permissions and workspace context
  const filterItems = useCallback((items: NavigationItem[]): NavigationItem[] => {
    return items.filter(item => {
      // Check permission
      if (item.permission && !permissions.includes(item.permission)) {
        return false;
      }

      // Check workspace context
      if (item.workspaceContext && item.workspaceContext !== context) {
        return false;
      }

      return true;
    }).map(item => ({
      ...item,
      children: item.children ? filterItems(item.children) : undefined,
    }));
  }, [permissions, context]);

  const filteredItems = filterItems(items);

  // Handle item click
  const handleItemClick = useCallback((item: NavigationItem, event: React.MouseEvent) => {
    event.preventDefault();

    if (item.disabled) return;

    // If item has children, toggle expansion
    if (item.children && item.children.length > 0) {
      handleItemExpand(item.id);
      return;
    }

    onItemClick?.(item);
  }, [onItemClick, handleItemExpand]);

  // Check if item is active
  const isItemActive = useCallback((item: NavigationItem): boolean => {
    if (item.active) return true;
    if (currentPath && item.path) {
      return currentPath === item.path || currentPath.startsWith(item.path + '/');
    }
    return false;
  }, [currentPath]);

  // Render navigation item
  const renderNavigationItem = useCallback((item: NavigationItem, level: number = 0) => {
    const isActive = isItemActive(item);
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="navigation-item">
        <button
          onClick={(e) => handleItemClick(item, e)}
          disabled={item.disabled}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset',
            {
              'bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300': isActive,
              'text-gray-700 dark:text-gray-300': !isActive && !item.disabled,
              'text-gray-400 dark:text-gray-600 cursor-not-allowed': item.disabled,
              'pl-6': level > 0,
              'pl-9': level > 1,
            },
            // Workspace context styling
            {
              'border-l-4 border-l-blue-500': context === 'consultant' && isActive,
              'border-l-4 border-l-green-500': context === 'client' && isActive,
              'border-l-4 border-l-purple-500': context === 'admin' && isActive,
            }
          )}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-current={isActive ? 'page' : undefined}
        >
          {/* Icon */}
          {item.icon && !collapsed && (
            <Icon
              name={item.icon as any}
              size="sm"
              className={cn(
                'flex-shrink-0',
                {
                  'text-blue-700 dark:text-blue-300': isActive,
                  'text-gray-500 dark:text-gray-400': !isActive,
                }
              )}
            />
          )}

          {/* Collapsed state - show only icon */}
          {collapsed && item.icon && (
            <Icon
              name={item.icon as any}
              size="sm"
              className={cn(
                'flex-shrink-0 mx-auto',
                {
                  'text-blue-700 dark:text-blue-300': isActive,
                  'text-gray-500 dark:text-gray-400': !isActive,
                }
              )}
            />
          )}

          {/* Label */}
          {!collapsed && (
            <>
              <span className="flex-1 truncate">{item.label}</span>

              {/* Badge */}
              {item.badge && item.badge > 0 && (
                <span className={cn(
                  'inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full',
                  {
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': isActive,
                    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200': !isActive,
                  }
                )}>
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}

              {/* Expand/Collapse indicator */}
              {hasChildren && (
                <Icon
                  name={isExpanded ? 'ChevronDown' : 'ChevronRight'}
                  size="sm"
                  className="flex-shrink-0 text-gray-400"
                />
              )}
            </>
          )}
        </button>

        {/* Children */}
        {hasChildren && isExpanded && !collapsed && (
          <div className="ml-3 border-l border-gray-200 dark:border-gray-700">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  }, [collapsed, expandedItems, handleItemClick, isItemActive, context]);

  // Responsive behavior
  useEffect(() => {
    if (!responsive) return;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, [responsive]);

  return (
    <nav
      className={cn(
        'flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700',
        'transition-all duration-300 ease-in-out',
        {
          'w-64': !collapsed,
          'w-16': collapsed,
        },
        // Workspace context styling
        {
          'border-r-blue-200 dark:border-r-blue-800': context === 'consultant',
          'border-r-green-200 dark:border-r-green-800': context === 'client',
          'border-r-purple-200 dark:border-r-purple-800': context === 'admin',
        },
        className
      )}
      role="navigation"
      aria-label="Side navigation"
    >
      {/* Header with collapse toggle */}
      {collapsible && (
        <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
          {!collapsed && (
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
              Navigation
            </h2>
          )}
          <button
            onClick={handleCollapseToggle}
            className={cn(
              'p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800',
              'focus:outline-none focus:ring-2 focus:ring-blue-500',
              {
                'mx-auto': collapsed,
              }
            )}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
          >
            <Icon
              name={collapsed ? 'ChevronRight' : 'ChevronLeft'}
              size="sm"
              className="text-gray-500 dark:text-gray-400"
            />
          </button>
        </div>
      )}

      {/* Navigation items */}
      <div className="flex-1 overflow-y-auto py-2">
        {filteredItems.map(item => renderNavigationItem(item))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3">
        {!collapsed ? (
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {context.charAt(0).toUpperCase() + context.slice(1)} Workspace
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-gray-400 mx-auto" />
        )}
      </div>
    </nav>
  );
};

export default SideNavigation;
