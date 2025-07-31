import { cn } from '@wheel/shared';
import React, { useCallback, useState } from 'react';

// Types
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  description: string;
  badge?: number;
  permission?: string;
}

export interface NavigationSection {
  id: string;
  title: string;
  expandable?: boolean;
  items: NavigationItem[];
}

export interface Consultant {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  title: string;
  specialties: string[];
  status: 'active' | 'busy' | 'away' | 'offline';
}

export interface Client {
  id: string;
  name: string;
  company: string;
  avatar?: string;
  status: 'active' | 'pending' | 'inactive';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  lastActivity: string;
}

export interface Workspace {
  id: string;
  name: string;
  type: string;
  clientId: string;
  status: 'active' | 'paused' | 'completed';
  revenue: number;
  hoursLogged: number;
}

export interface AnalyticsData {
  totalRevenue: number;
  activeClients: number;
  completedProjects: number;
  hoursThisMonth: number;
  revenueGrowth: number;
  clientSatisfaction: number;
}

export interface ConsultantNavProps {
  consultant: Consultant;
  clients: Client[];
  activeWorkspaces: Workspace[];
  onClientSelect?: (client: Client) => void;
  onWorkspaceSelect?: (workspace: Workspace) => void;
  onNavigate?: (path: string) => void;
  permissions: string[];
  responsive?: boolean;
  analytics?: AnalyticsData;
  className?: string;
}

/**
 * ConsultantNav Component
 *
 * A comprehensive navigation component designed specifically for consultant workspaces.
 * Features advanced functionality including client management, billing integration,
 * analytics, and time tracking with sophisticated permission-based access control.
 */
export const ConsultantNav: React.FC<ConsultantNavProps> = ({
  consultant,
  clients,
  activeWorkspaces,
  onClientSelect,
  onWorkspaceSelect,
  onNavigate,
  permissions = [],
  responsive = true,
  analytics,
  className,
}) => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['clients']));

  // Handle navigation
  const handleNavigate = useCallback((path: string, section: string) => {
    setActiveSection(section);
    if (onNavigate) {
      onNavigate(path);
    }
  }, [onNavigate]);

  // Toggle section expansion
  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }, []);

  // Get consultant status color
  const getStatusColor = useCallback((status: Consultant['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'busy':
        return 'bg-red-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  }, []);

  // Get client priority color
  const getClientPriorityColor = useCallback((priority: Client['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-100';
      case 'high':
        return 'text-orange-600 bg-orange-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }, []);

  // Navigation items for consultant workspace
  const navigationSections: NavigationSection[] = [
    {
      id: 'main',
      title: 'Main',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: 'dashboard',
          path: '/dashboard',
          description: 'Overview and key metrics',
        },
        {
          id: 'calendar',
          label: 'Calendar',
          icon: 'calendar',
          path: '/calendar',
          description: 'Schedule and appointments',
          badge: 3, // Upcoming appointments
        },
        {
          id: 'tasks',
          label: 'Tasks',
          icon: 'check-square',
          path: '/tasks',
          description: 'Action items and to-dos',
          badge: 8, // Pending tasks
        },
      ],
    },
    {
      id: 'clients',
      title: 'Client Management',
      expandable: true,
      items: [
        {
          id: 'clients-overview',
          label: 'All Clients',
          icon: 'users',
          path: '/clients',
          description: 'Manage client relationships',
          badge: clients.length,
        },
        {
          id: 'active-projects',
          label: 'Active Projects',
          icon: 'folder',
          path: '/projects/active',
          description: 'Current project work',
          badge: activeWorkspaces.length,
        },
        {
          id: 'proposals',
          label: 'Proposals',
          icon: 'file-text',
          path: '/proposals',
          description: 'Pending and sent proposals',
          permission: 'proposals',
        },
        {
          id: 'contracts',
          label: 'Contracts',
          icon: 'file-signature',
          path: '/contracts',
          description: 'Client agreements',
          permission: 'contracts',
        },
      ],
    },
    {
      id: 'business',
      title: 'Business Operations',
      expandable: true,
      items: [
        {
          id: 'billing',
          label: 'Billing & Invoices',
          icon: 'credit-card',
          path: '/billing',
          description: 'Financial management',
          permission: 'billing',
          badge: 2, // Pending invoices
        },
        {
          id: 'time-tracking',
          label: 'Time Tracking',
          icon: 'clock',
          path: '/time',
          description: 'Log and manage time',
          permission: 'time-tracking',
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: 'chart',
          path: '/analytics',
          description: 'Performance insights',
          permission: 'analytics',
        },
        {
          id: 'reports',
          label: 'Reports',
          icon: 'bar-chart',
          path: '/reports',
          description: 'Business reports',
          permission: 'reports',
        },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Resources',
      expandable: true,
      items: [
        {
          id: 'knowledge-base',
          label: 'Knowledge Base',
          icon: 'book',
          path: '/knowledge',
          description: 'Resources and documentation',
        },
        {
          id: 'templates',
          label: 'Templates',
          icon: 'layout',
          path: '/templates',
          description: 'Reusable templates',
        },
        {
          id: 'integrations',
          label: 'Integrations',
          icon: 'link',
          path: '/integrations',
          description: 'Connected services',
          permission: 'integrations',
        },
      ],
    },
  ];

  // Filter navigation items based on permissions
  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      !item.permission || permissions.includes(item.permission)
    ),
  })).filter(section => section.items.length > 0);

  return (
    <nav
      className={cn(
        'flex flex-col h-full bg-blue-50 border-r border-blue-200 text-blue-900',
        responsive && 'lg:w-80',
        'w-80',
        className
      )}
      aria-label="Consultant navigation"
    >
      {/* Consultant Header */}
      <div className="p-6 border-b border-blue-200">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {consultant.avatar ? (
              <img
                src={consultant.avatar}
                alt={consultant.name}
                className="w-12 h-12 rounded-full border-2 border-blue-300"
              />
            ) : (
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center border-2 border-blue-300">
                <span className="text-lg font-semibold text-blue-700">
                  {consultant.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className={cn(
              'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white',
              getStatusColor(consultant.status)
            )} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-blue-900 truncate">
              {consultant.name}
            </h2>
            <p className="text-sm text-blue-700 truncate">{consultant.title}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {consultant.specialties.slice(0, 2).map(specialty => (
                <span
                  key={specialty}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {specialty}
                </span>
              ))}
              {consultant.specialties.length > 2 && (
                <span className="text-xs text-blue-600">
                  +{consultant.specialties.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {analytics && (
        <div className="p-4 border-b border-blue-200">
          <h3 className="text-sm font-medium text-blue-800 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-md border border-blue-200">
              <p className="text-xs text-blue-600">Active Clients</p>
              <p className="text-lg font-semibold text-blue-900">{analytics.activeClients}</p>
            </div>
            <div className="bg-white p-3 rounded-md border border-blue-200">
              <p className="text-xs text-blue-600">This Month</p>
              <p className="text-lg font-semibold text-blue-900">{analytics.hoursThisMonth}h</p>
            </div>
            <div className="bg-white p-3 rounded-md border border-blue-200">
              <p className="text-xs text-blue-600">Revenue</p>
              <p className="text-lg font-semibold text-blue-900">
                ${analytics.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-3 rounded-md border border-blue-200">
              <p className="text-xs text-blue-600">Satisfaction</p>
              <p className="text-lg font-semibold text-blue-900">{analytics.clientSatisfaction}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {filteredSections.map(section => (
          <div key={section.id}>
            {section.expandable ? (
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between mb-3 text-sm font-medium text-blue-800 hover:text-blue-900"
              >
                <span>{section.title}</span>
                <span className={cn(
                  'w-4 h-4 transition-transform duration-200',
                  expandedSections.has(section.id) && 'transform rotate-90'
                )}>
                  <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent" />
                </span>
              </button>
            ) : (
              <h3 className="text-sm font-medium text-blue-800 mb-3">{section.title}</h3>
            )}

            {(!section.expandable || expandedSections.has(section.id)) && (
              <div className="space-y-1">
                {section.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.path, item.id)}
                    className={cn(
                      'w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200',
                      'hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                      activeSection === item.id
                        ? 'bg-blue-200 text-blue-900 font-medium'
                        : 'text-blue-800 hover:text-blue-900'
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
            )}
          </div>
        ))}
      </div>

      {/* Recent Clients */}
      {clients.length > 0 && (
        <div className="border-t border-blue-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-blue-800">Recent Clients</h3>
            <button
              onClick={() => handleNavigate('/clients', 'clients-overview')}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              View all
            </button>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {clients.slice(0, 4).map(client => (
              <button
                key={client.id}
                onClick={() => onClientSelect && onClientSelect(client)}
                className="w-full flex items-center space-x-3 p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200"
              >
                {client.avatar ? (
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-700">
                      {client.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-blue-900 truncate">{client.name}</p>
                  <p className="text-xs text-blue-600 truncate">{client.company}</p>
                </div>
                <span className={cn(
                  'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
                  getClientPriorityColor(client.priority)
                )}>
                  {client.priority}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Workspaces */}
      {activeWorkspaces.length > 0 && (
        <div className="border-t border-blue-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-blue-800">Active Workspaces</h3>
            <span className="text-xs text-blue-600">{activeWorkspaces.length} active</span>
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {activeWorkspaces.slice(0, 3).map(workspace => (
              <button
                key={workspace.id}
                onClick={() => onWorkspaceSelect && onWorkspaceSelect(workspace)}
                className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-blue-900 truncate">{workspace.name}</p>
                  <p className="text-xs text-blue-600">{workspace.hoursLogged}h logged</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-blue-900">
                    ${workspace.revenue.toLocaleString()}
                  </p>
                  <div className={cn(
                    'w-2 h-2 rounded-full',
                    workspace.status === 'active' ? 'bg-green-500' :
                    workspace.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-400'
                  )} />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ConsultantNav;
