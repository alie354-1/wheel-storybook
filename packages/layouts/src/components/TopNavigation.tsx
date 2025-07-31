import { cn } from '@wheel/shared';
import { Avatar, Badge, Button, Logo } from '@wheel/ui';
import {
  Bell,
  ChevronDown,
  HelpCircle,
  LogOut,
  Menu,
  Search,
  Settings,
  User
} from 'lucide-react';
import React, { useState } from 'react';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface Workspace {
  id: string;
  name: string;
  type: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder';
  avatar?: string;
  permissions: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export interface NavigationAction {
  id: string;
  label: string;
  icon?: React.ElementType;
  onClick?: () => void;
  href?: string;
  permission?: string;
  badge?: number;
  disabled?: boolean;
}

export interface TopNavigationProps {
  /** Workspace context for theming */
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  /** Available workspaces for switching */
  workspaces?: Workspace[];
  /** Currently active workspace */
  currentWorkspace?: Workspace;
  /** Workspace change handler */
  onWorkspaceChange?: (workspace: Workspace) => void;
  /** Current user information */
  user?: User;
  /** Notifications array */
  notifications?: Notification[];
  /** Notification click handler */
  onNotificationClick?: (notification: Notification) => void;
  /** Primary navigation actions */
  primaryActions?: NavigationAction[];
  /** Secondary navigation actions */
  secondaryActions?: NavigationAction[];
  /** Enable responsive behavior */
  responsive?: boolean;
  /** Mobile menu toggle handler */
  onMobileMenuClick?: () => void;
  /** Search functionality */
  onSearch?: (query: string) => void;
  /** Show search bar */
  showSearch?: boolean;
  /** Sign out handler */
  onSignOut?: () => void;
  /** Custom className */
  className?: string;
}

/**
 * TopNavigation - Enhanced primary navigation with workspace context awareness
 *
 * Features:
 * - Workspace switcher integration
 * - Context-aware theming
 * - Notification center
 * - User profile management
 * - Responsive design
 * - Accessibility compliant
 */
export const TopNavigation: React.FC<TopNavigationProps> = ({
  context = 'neutral',
  workspaces = [],
  currentWorkspace,
  onWorkspaceChange,
  user,
  notifications = [],
  onNotificationClick,
  primaryActions = [],
  secondaryActions = [],
  responsive = true,
  onMobileMenuClick,
  onSearch,
  showSearch = true,
  onSignOut,
  className,
}) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Context-aware styling
  const contextStyles = {
    consultant: 'bg-blue-50 border-blue-200',
    client: 'bg-green-50 border-green-200',
    admin: 'bg-gray-50 border-gray-200',
    expert: 'bg-purple-50 border-purple-200',
    'tool-creator': 'bg-orange-50 border-orange-200',
    founder: 'bg-amber-50 border-amber-200',
    neutral: 'bg-white border-gray-200',
  };

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
    setIsNotificationOpen(false);
  };

  return (
    <header
      className={cn(
        'border-b shadow-sm transition-colors duration-200',
        contextStyles[context],
        className
      )}
      role="banner"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section: Mobile Menu + Logo + Workspace Switcher */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            {responsive && onMobileMenuClick && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMobileMenuClick}
                className="lg:hidden"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            )}

            {/* Logo */}
            <Logo
              variant="full"
              size="sm"
              className="transition-transform hover:scale-105"
            />

            {/* Workspace Switcher Placeholder */}
            {workspaces.length > 0 && currentWorkspace && onWorkspaceChange && (
              <div className="hidden md:block">
                <div className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
                  {currentWorkspace.name}
                </div>
              </div>
            )}
          </div>

          {/* Center Section: Search */}
          {showSearch && onSearch && (
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  aria-label="Search"
                />
              </form>
            </div>
          )}

          {/* Right Section: Actions + Notifications + Profile */}
          <div className="flex items-center gap-2">
            {/* Primary Actions */}
            {primaryActions.map((action) => (
              <Button
                key={action.id}
                variant="ghost"
                size="sm"
                onClick={action.onClick}
                disabled={action.disabled}
                className="hidden md:flex"
                aria-label={action.label}
              >
                {action.icon && <action.icon className="w-4 h-4" />}
                <span className="ml-2">{action.label}</span>
                {action.badge && action.badge > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {action.badge}
                  </Badge>
                )}
              </Button>
            ))}

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative"
                aria-label={`Notifications ${unreadNotifications > 0 ? `(${unreadNotifications} unread)` : ''}`}
              >
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <Badge
                    variant="error"
                    className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0"
                  >
                    {unreadNotifications > 9 ? '9+' : unreadNotifications}
                  </Badge>
                )}
              </Button>

              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    <div className="py-2">
                      {notifications.slice(0, 10).map((notification) => (
                        <button
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification)}
                          className={cn(
                            'w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0',
                            !notification.read && 'bg-blue-50'
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className={cn(
                              'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                              !notification.read ? 'bg-blue-500' : 'bg-gray-300'
                            )} />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 text-sm">
                                {notification.title}
                              </p>
                              <p className="text-gray-600 text-sm truncate">
                                {notification.message}
                              </p>
                              <p className="text-gray-400 text-xs mt-1">
                                {notification.timestamp.toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* User Profile */}
            {user && (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 px-2"
                  aria-label="User menu"
                  aria-expanded={isProfileMenuOpen}
                >
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    fallback={user.name.charAt(0)}
                    size="sm"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </Button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                        <HelpCircle className="w-4 h-4" />
                        <span>Help</span>
                      </button>
                      <hr className="my-1" />
                      {onSignOut && (
                        <button
                          onClick={onSignOut}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Workspace Switcher */}
        {workspaces.length > 0 && currentWorkspace && onWorkspaceChange && (
          <div className="md:hidden mt-3">
            <div className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
              {currentWorkspace.name}
            </div>
          </div>
        )}
      </div>

      {/* Click outside handlers */}
      {(isProfileMenuOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileMenuOpen(false);
            setIsNotificationOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default TopNavigation;
