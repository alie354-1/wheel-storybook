import { cn } from '@wheel/shared';
import React, { useCallback, useState } from 'react';

// Types
export interface Client {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  company: string;
  status: 'active' | 'pending' | 'inactive';
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  progress: number;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: string;
}

export interface ClientNavProps {
  client: Client;
  projects: Project[];
  currentProject?: Project;
  onProjectChange?: (project: Project) => void;
  onNavigate?: (path: string) => void;
  permissions: string[];
  responsive?: boolean;
  notifications?: Notification[];
  className?: string;
}

/**
 * ClientNav Component
 *
 * A simplified navigation component designed specifically for client workspaces.
 * Focuses on project communication, document access, and essential client features
 * with limited permission requirements.
 */
export const ClientNav: React.FC<ClientNavProps> = ({
  client,
  projects,
  currentProject,
  onProjectChange,
  onNavigate,
  permissions = [],
  responsive = true,
  notifications = [],
  className,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Get unread notifications count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Get active project or first project
  const activeProject = currentProject || projects[0];

  // Handle navigation
  const handleNavigate = useCallback((path: string, section: string) => {
    setActiveSection(section);
    if (onNavigate) {
      onNavigate(path);
    }
  }, [onNavigate]);

  // Handle project change
  const handleProjectChange = useCallback((project: Project) => {
    if (onProjectChange) {
      onProjectChange(project);
    }
  }, [onProjectChange]);

  // Get project status color
  const getProjectStatusColor = useCallback((status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      case 'on-hold':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }, []);

  // Get priority color
  const getPriorityColor = useCallback((priority: Project['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600';
      case 'high':
        return 'text-orange-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  }, []);

  // Navigation items for client workspace
  const navigationItems = [
    {
      id: 'overview',
      label: 'Project Overview',
      icon: 'home',
      path: '/overview',
      description: 'View project status and updates',
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: 'file',
      path: '/documents',
      description: 'Access project files and deliverables',
      badge: activeProject ? Math.floor(Math.random() * 10) + 1 : 0,
    },
    {
      id: 'communications',
      label: 'Messages',
      icon: 'message',
      path: '/messages',
      description: 'Communicate with your consultant',
      badge: unreadCount,
    },
    {
      id: 'timeline',
      label: 'Timeline',
      icon: 'calendar',
      path: '/timeline',
      description: 'View project milestones and deadlines',
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: 'credit-card',
      path: '/billing',
      description: 'View invoices and payment history',
      permission: 'billing',
    },
    {
      id: 'feedback',
      label: 'Feedback',
      icon: 'star',
      path: '/feedback',
      description: 'Provide feedback and reviews',
    },
  ];

  // Filter navigation items based on permissions
  const filteredNavigation = navigationItems.filter(item =>
    !item.permission || permissions.includes(item.permission)
  );

  return (
    <nav
      className={cn(
        'flex flex-col h-full bg-green-50 border-r border-green-200 text-green-900',
        responsive && 'lg:w-80',
        'w-80',
        className
      )}
      aria-label="Client navigation"
    >
      {/* Client Header */}
      <div className="p-6 border-b border-green-200">
        <div className="flex items-center space-x-4">
          {client.avatar ? (
            <img
              src={client.avatar}
              alt={client.name}
              className="w-12 h-12 rounded-full border-2 border-green-300"
            />
          ) : (
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center border-2 border-green-300">
              <span className="text-lg font-semibold text-green-700">
                {client.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-green-900 truncate">
              {client.name}
            </h2>
            <p className="text-sm text-green-700 truncate">{client.company}</p>
            <div className="flex items-center mt-1">
              <div className={cn(
                'w-2 h-2 rounded-full mr-2',
                client.status === 'active' ? 'bg-green-500' :
                client.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
              )} />
              <span className="text-xs text-green-600 capitalize">{client.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Selector */}
      {projects.length > 0 && (
        <div className="p-4 border-b border-green-200">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Current Project
          </label>
          <select
            value={activeProject?.id || ''}
            onChange={(e) => {
              const project = projects.find(p => p.id === e.target.value);
              if (project) {
                handleProjectChange(project);
              }
            }}
            className="w-full px-3 py-2 text-sm border border-green-300 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>

          {/* Project Status */}
          {activeProject && (
            <div className="mt-3 p-3 bg-white rounded-md border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                  getProjectStatusColor(activeProject.status)
                )}>
                  {activeProject.status.replace('-', ' ')}
                </span>
                <span className={cn(
                  'text-xs font-medium',
                  getPriorityColor(activeProject.priority)
                )}>
                  {activeProject.priority} priority
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs text-green-700 mb-1">
                  <span>Progress</span>
                  <span>{activeProject.progress}%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${activeProject.progress}%` }}
                  />
                </div>
              </div>

              {activeProject.dueDate && (
                <p className="text-xs text-green-600">
                  Due: {new Date(activeProject.dueDate).toLocaleDateString()}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {filteredNavigation.map(item => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.path, item.id)}
            className={cn(
              'w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200',
              'hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
              activeSection === item.id
                ? 'bg-green-200 text-green-900 font-medium'
                : 'text-green-800 hover:text-green-900'
            )}
            aria-label={item.label}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                {/* Icon placeholder */}
                <div className="w-5 h-5 bg-current opacity-60 rounded-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.label}</p>
                <p className="text-xs opacity-75 truncate">{item.description}</p>
              </div>
            </div>

            {item.badge && item.badge > 0 && (
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ml-2">
                {item.badge > 99 ? '99+' : item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="border-t border-green-200 p-4">
        <h3 className="text-sm font-medium text-green-800 mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleNavigate('/support', 'support')}
            className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200"
          >
            <div className="w-4 h-4 bg-current opacity-60 rounded-sm" />
            <span>Contact Support</span>
          </button>

          <button
            onClick={() => handleNavigate('/help', 'help')}
            className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200"
          >
            <div className="w-4 h-4 bg-current opacity-60 rounded-sm" />
            <span>Help Center</span>
          </button>
        </div>
      </div>

      {/* Notifications Summary */}
      {notifications.length > 0 && (
        <div className="border-t border-green-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-green-800">Recent Updates</h3>
            {unreadCount > 0 && (
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {notifications.slice(0, 3).map(notification => (
              <div
                key={notification.id}
                className={cn(
                  'p-2 rounded-md text-xs',
                  notification.read ? 'bg-green-100 text-green-700' : 'bg-white text-green-800 border border-green-200'
                )}
              >
                <p className="font-medium truncate">{notification.title}</p>
                <p className="opacity-75 truncate">{notification.message}</p>
              </div>
            ))}
          </div>
          {notifications.length > 3 && (
            <button
              onClick={() => handleNavigate('/notifications', 'notifications')}
              className="w-full mt-2 text-xs text-green-600 hover:text-green-800 text-center"
            >
              View all notifications
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default ClientNav;
