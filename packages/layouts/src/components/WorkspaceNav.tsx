import { cn } from '@wheel/shared';
import React, { useCallback, useState } from 'react';

// Types
export interface Workspace {
  id: string;
  name: string;
  type: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder';
  permissions: string[];
  features: FeatureToggle[];
  branding?: WorkspaceBranding;
  navigation: NavigationItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  permissions: string[];
}

export interface FeatureToggle {
  id: string;
  name: string;
  enabled: boolean;
  permission?: string;
  workspaceContext?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
}

export interface WorkspaceBranding {
  primaryColor: string;
  secondaryColor: string;
  logo?: string;
  theme: 'light' | 'dark' | 'gradient';
}

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
  workspaceContext?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
}

export interface WorkspaceNavProps {
  workspace: Workspace;
  context: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  user: User;
  permissions: string[];
  features: FeatureToggle[];
  onNavigate?: (path: string) => void;
  onWorkspaceChange?: (workspace: Workspace) => void;
  responsive?: boolean;
  collapsed?: boolean;
  className?: string;
}

/**
 * WorkspaceNav Component
 *
 * A sophisticated navigation component that adapts to different workspace contexts,
 * providing context-aware navigation items, permission-based filtering, and
 * workspace-specific features.
 */
export const WorkspaceNav: React.FC<WorkspaceNavProps> = ({
  workspace,
  context = 'neutral',
  user,
  permissions = [],
  features = [],
  onNavigate,
  onWorkspaceChange,
  responsive = true,
  collapsed = false,
  className,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Filter navigation items based on permissions and workspace context
  const filterNavigationItems = useCallback((items: NavigationItem[]): NavigationItem[] => {
    return items.filter(item => {
      // Check permission requirement
      if (item.permission && !permissions.includes(item.permission)) {
        return false;
      }

      // Check workspace context requirement
      if (item.workspaceContext && item.workspaceContext !== context && item.workspaceContext !== 'neutral') {
        return false;
      }

      // Check if item is disabled
      if (item.disabled) {
        return false;
      }

      return true;
    }).map(item => ({
      ...item,
      children: item.children ? filterNavigationItems(item.children) : undefined,
    }));
  }, [permissions, context]);

  // Get workspace-specific theme classes
  const getWorkspaceTheme = useCallback(() => {
    const baseClasses = 'transition-colors duration-200';

    switch (context) {
      case 'consultant':
        return `${baseClasses} bg-blue-50 border-blue-200 text-blue-900`;
      case 'client':
        return `${baseClasses} bg-green-50 border-green-200 text-green-900`;
      case 'admin':
        return `${baseClasses} bg-gray-50 border-gray-200 text-gray-900`;
      case 'expert':
        return `${baseClasses} bg-purple-50 border-purple-200 text-purple-900`;
      case 'tool-creator':
        return `${baseClasses} bg-orange-50 border-orange-200 text-orange-900`;
      case 'founder':
        return `${baseClasses} bg-amber-50 border-amber-200 text-amber-900`;
      default:
        return `${baseClasses} bg-white border-gray-200 text-gray-900`;
    }
  }, [context]);

  // Toggle expanded state for navigation items with children
  const toggleExpanded = useCallback((itemId: string) => {
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

  // Handle navigation item click
  const handleItemClick = useCallback((item: NavigationItem) => {
    if (item.children && item.children.length > 0) {
      toggleExpanded(item.id);
    } else if (item.path && onNavigate) {
      onNavigate(item.path);
    }
  }, [onNavigate, toggleExpanded]);

  // Render navigation item
  const renderNavigationItem = useCallback((item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const filteredChildren = hasChildren ? filterNavigationItems(item.children!) : [];

    return (
      <div key={item.id} className="w-full">
        <button
          onClick={() => handleItemClick(item)}
          className={cn(
            'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
            'hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2',
            level > 0 && 'ml-4 text-xs',
            item.active && 'bg-opacity-100 font-semibold',
            !item.active && 'hover:bg-gray-100',
            collapsed && level === 0 && 'justify-center px-2'
          )}
          style={{ paddingLeft: collapsed ? undefined : `${0.75 + level * 1}rem` }}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-label={item.label}
        >
          <div className="flex items-center space-x-2">
            {item.icon && (
              <span className="flex-shrink-0 w-4 h-4" aria-hidden="true">
                {/* Icon would be rendered here */}
                <div className="w-4 h-4 bg-current opacity-60 rounded-sm" />
              </span>
            )}
            {!collapsed && (
              <span className="truncate">{item.label}</span>
            )}
          </div>

          {!collapsed && (
            <div className="flex items-center space-x-1">
              {item.badge && item.badge > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
              {hasChildren && (
                <span className={cn(
                  'flex-shrink-0 w-4 h-4 transition-transform duration-200',
                  isExpanded && 'transform rotate-90'
                )}>
                  <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent" />
                </span>
              )}
            </div>
          )}
        </button>

        {/* Render children if expanded */}
        {hasChildren && isExpanded && !collapsed && (
          <div className="mt-1 space-y-1">
            {filteredChildren.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  }, [expandedItems, filterNavigationItems, handleItemClick, collapsed]);

  // Get filtered navigation items
  const filteredNavigation = filterNavigationItems(workspace.navigation);

  // Get enabled features for current context
  const enabledFeatures = features.filter(feature =>
    feature.enabled &&
    (!feature.permission || permissions.includes(feature.permission)) &&
    (!feature.workspaceContext || feature.workspaceContext === context || feature.workspaceContext === 'neutral')
  );

  return (
    <nav
      className={cn(
        'flex flex-col h-full border-r',
        getWorkspaceTheme(),
        responsive && 'lg:w-64',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
      aria-label={`${workspace.name} navigation`}
    >
      {/* Workspace Header */}
      <div className={cn(
        'flex items-center justify-between p-4 border-b border-current border-opacity-20',
        collapsed && 'justify-center px-2'
      )}>
        {!collapsed && (
          <div className="flex items-center space-x-3">
            {workspace.branding?.logo && (
              <img
                src={workspace.branding.logo}
                alt={`${workspace.name} logo`}
                className="w-8 h-8 rounded"
              />
            )}
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold truncate">{workspace.name}</h2>
              <p className="text-xs opacity-75 capitalize">{workspace.type}</p>
            </div>
          </div>
        )}

        {workspace.branding?.logo && collapsed && (
          <img
            src={workspace.branding.logo}
            alt={`${workspace.name} logo`}
            className="w-8 h-8 rounded"
          />
        )}
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredNavigation.map(item => renderNavigationItem(item))}
      </div>

      {/* Feature Toggles Section */}
      {enabledFeatures.length > 0 && !collapsed && (
        <div className="border-t border-current border-opacity-20 p-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide opacity-75 mb-2">
            Features
          </h3>
          <div className="space-y-1">
            {enabledFeatures.map(feature => (
              <div
                key={feature.id}
                className="flex items-center justify-between px-3 py-1 text-xs"
              >
                <span className="truncate">{feature.name}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Info */}
      {!collapsed && (
        <div className="border-t border-current border-opacity-20 p-4">
          <div className="flex items-center space-x-3">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-current bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs opacity-75 truncate">{user.role}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default WorkspaceNav;
