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

export interface Workspace {
  id: string;
  name: string;
  type: 'consultant' | 'client' | 'admin';
  permissions: string[];
  branding?: {
    primaryColor?: string;
    logo?: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface MobileNavProps {
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  items: NavigationItem[];
  currentPath?: string;
  onItemClick?: (item: NavigationItem) => void;
  workspaces?: Workspace[];
  currentWorkspace?: Workspace;
  onWorkspaceChange?: (workspace: Workspace) => void;
  user?: User;
  bottomSheet?: boolean;
  swipeGestures?: boolean;
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  context = 'neutral',
  items,
  currentPath,
  onItemClick,
  workspaces = [],
  currentWorkspace,
  onWorkspaceChange,
  user,
  bottomSheet = false,
  swipeGestures = true,
  isOpen = false,
  onToggle,
  className,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [showWorkspaceSwitcher, setShowWorkspaceSwitcher] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
    onToggle?.(false); // Close mobile nav after navigation
  }, [onItemClick, handleItemExpand, onToggle]);

  // Check if item is active
  const isItemActive = useCallback((item: NavigationItem): boolean => {
    if (item.active) return true;
    if (currentPath && item.path) {
      return currentPath === item.path || currentPath.startsWith(item.path + '/');
    }
    return false;
  }, [currentPath]);

  // Handle workspace change
  const handleWorkspaceChange = useCallback((workspace: Workspace) => {
    onWorkspaceChange?.(workspace);
    setShowWorkspaceSwitcher(false);
  }, [onWorkspaceChange]);

  // Swipe gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!swipeGestures) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, [swipeGestures]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!swipeGestures) return;
    setTouchEnd(e.targetTouches[0].clientX);
  }, [swipeGestures]);

  const onTouchEnd = useCallback(() => {
    if (!swipeGestures || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && isOpen) {
      onToggle?.(false);
    } else if (isRightSwipe && !isOpen) {
      onToggle?.(true);
    }
  }, [swipeGestures, touchStart, touchEnd, isOpen, onToggle, minSwipeDistance]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(() => {
    onToggle?.(false);
  }, [onToggle]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
            'w-full flex items-center gap-4 px-4 py-3 text-left transition-colors duration-200',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset',
            'text-base font-medium',
            {
              'bg-blue-50 text-blue-700 border-r-4 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300': isActive,
              'text-gray-700 dark:text-gray-300': !isActive && !item.disabled,
              'text-gray-400 dark:text-gray-600 cursor-not-allowed': item.disabled,
              'pl-8': level > 0,
              'pl-12': level > 1,
            },
            // Workspace context styling
            {
              'border-r-blue-500': context === 'consultant' && isActive,
              'border-r-green-500': context === 'client' && isActive,
              'border-r-purple-500': context === 'admin' && isActive,
            }
          )}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-current={isActive ? 'page' : undefined}
        >
          {/* Icon */}
          {item.icon && (
            <Icon
              name={item.icon as any}
              size="md"
              className={cn(
                'flex-shrink-0',
                {
                  'text-blue-700 dark:text-blue-300': isActive,
                  'text-gray-500 dark:text-gray-400': !isActive,
                }
              )}
            />
          )}

          {/* Label */}
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
        </button>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="border-l-2 border-gray-200 dark:border-gray-700 ml-6">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  }, [expandedItems, handleItemClick, isItemActive, context]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 max-w-sm bg-white dark:bg-gray-900',
          'transform transition-transform duration-300 ease-in-out',
          'flex flex-col shadow-xl',
          {
            'bottom-0 top-auto rounded-t-xl': bottomSheet,
          },
          // Workspace context styling
          {
            'border-r-2 border-r-blue-200 dark:border-r-blue-800': context === 'consultant',
            'border-r-2 border-r-green-200 dark:border-r-green-800': context === 'client',
            'border-r-2 border-r-purple-200 dark:border-r-purple-800': context === 'admin',
          },
          className
        )}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            {/* Workspace indicator */}
            <div className={cn(
              'w-3 h-3 rounded-full',
              {
                'bg-blue-500': context === 'consultant',
                'bg-green-500': context === 'client',
                'bg-purple-500': context === 'admin',
                'bg-gray-500': context === 'neutral',
              }
            )} />

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {currentWorkspace?.name || 'Navigation'}
            </h2>
          </div>

          <button
            onClick={() => onToggle?.(false)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close navigation"
          >
            <Icon name="X" size="sm" className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* User info and workspace switcher */}
        {(user || workspaces.length > 0) && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            {/* User info */}
            {user && (
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <Icon name="User" size="sm" className="text-gray-600 dark:text-gray-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.role}
                  </p>
                </div>
              </div>
            )}

            {/* Workspace switcher */}
            {workspaces.length > 0 && (
              <button
                onClick={() => setShowWorkspaceSwitcher(!showWorkspaceSwitcher)}
                className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Switch Workspace
                </span>
                <Icon
                  name={showWorkspaceSwitcher ? 'ChevronUp' : 'ChevronDown'}
                  size="sm"
                  className="text-gray-400"
                />
              </button>
            )}

            {/* Workspace list */}
            {showWorkspaceSwitcher && workspaces.length > 0 && (
              <div className="mt-2 space-y-1">
                {workspaces.map(workspace => (
                  <button
                    key={workspace.id}
                    onClick={() => handleWorkspaceChange(workspace)}
                    className={cn(
                      'w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors',
                      'hover:bg-gray-100 dark:hover:bg-gray-800',
                      'focus:outline-none focus:ring-2 focus:ring-blue-500',
                      {
                        'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300':
                          currentWorkspace?.id === workspace.id,
                        'text-gray-700 dark:text-gray-300': currentWorkspace?.id !== workspace.id,
                      }
                    )}
                  >
                    <div className={cn(
                      'w-2 h-2 rounded-full',
                      {
                        'bg-blue-500': workspace.type === 'consultant',
                        'bg-green-500': workspace.type === 'client',
                        'bg-purple-500': workspace.type === 'admin',
                      }
                    )} />
                    <span className="text-sm font-medium truncate">{workspace.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto py-2">
          {items.map(item => renderNavigationItem(item))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {context.charAt(0).toUpperCase() + context.slice(1)} Workspace
          </div>
          {swipeGestures && (
            <div className="text-xs text-gray-400 dark:text-gray-500 text-center mt-1">
              Swipe left to close
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
