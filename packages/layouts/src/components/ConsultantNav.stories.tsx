import type { Meta, StoryObj } from "@storybook/react-vite";
import type { AnalyticsData, Client, Consultant, Workspace } from './ConsultantNav';
import { ConsultantNav } from './ConsultantNav';

// Mock data
const mockConsultant: Consultant = {
  id: 'consultant-1',
  name: 'Dr. Sarah Wilson',
  email: 'sarah.wilson@consultingfirm.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  title: 'Senior Strategy Consultant',
  specialties: ['Digital Transformation', 'Process Optimization', 'Change Management', 'Data Analytics'],
  status: 'active',
};

const mockClients: Client[] = [
  {
    id: 'client-1',
    name: 'John Smith',
    company: 'Acme Corporation',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    priority: 'high',
    lastActivity: '2025-07-14T08:30:00Z',
  },
  {
    id: 'client-2',
    name: 'Emily Chen',
    company: 'TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    priority: 'urgent',
    lastActivity: '2025-07-14T09:15:00Z',
  },
  {
    id: 'client-3',
    name: 'Michael Rodriguez',
    company: 'Global Enterprises',
    status: 'active',
    priority: 'medium',
    lastActivity: '2025-07-13T16:45:00Z',
  },
  {
    id: 'client-4',
    name: 'Lisa Thompson',
    company: 'Innovation Labs',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    status: 'pending',
    priority: 'low',
    lastActivity: '2025-07-12T14:20:00Z',
  },
  {
    id: 'client-5',
    name: 'David Park',
    company: 'Future Systems',
    status: 'active',
    priority: 'high',
    lastActivity: '2025-07-14T07:00:00Z',
  },
];

const mockWorkspaces: Workspace[] = [
  {
    id: 'workspace-1',
    name: 'Digital Transformation - Acme Corp',
    type: 'Strategy Consulting',
    clientId: 'client-1',
    status: 'active',
    revenue: 125000,
    hoursLogged: 240,
  },
  {
    id: 'workspace-2',
    name: 'Process Optimization - TechStart',
    type: 'Operations Consulting',
    clientId: 'client-2',
    status: 'active',
    revenue: 85000,
    hoursLogged: 180,
  },
  {
    id: 'workspace-3',
    name: 'Change Management - Global Ent.',
    type: 'Organizational Development',
    clientId: 'client-3',
    status: 'paused',
    revenue: 95000,
    hoursLogged: 160,
  },
  {
    id: 'workspace-4',
    name: 'Data Analytics Setup - Innovation',
    type: 'Technical Consulting',
    clientId: 'client-4',
    status: 'active',
    revenue: 65000,
    hoursLogged: 120,
  },
];

const mockAnalytics: AnalyticsData = {
  totalRevenue: 370000,
  activeClients: 8,
  completedProjects: 12,
  hoursThisMonth: 156,
  revenueGrowth: 23.5,
  clientSatisfaction: 94,
};

const meta: Meta<typeof ConsultantNav> = {
  title: 'Layouts/ConsultantNav',
  component: ConsultantNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The ConsultantNav component provides a comprehensive navigation experience designed specifically for consultant workspaces.
It features advanced functionality including client management, billing integration, analytics, and time tracking with sophisticated permission-based access control.

## Features

- **Advanced Client Management**: Comprehensive client relationship management with priority indicators
- **Business Analytics**: Real-time performance metrics and revenue tracking
- **Permission-Based Access**: Sophisticated role-based navigation with granular permissions
- **Workspace Management**: Active project tracking with revenue and time logging
- **Expandable Sections**: Organized navigation with collapsible sections for better organization
- **Quick Stats Dashboard**: At-a-glance business performance indicators
- **Recent Activity**: Quick access to recent clients and active workspaces

## Consultant Experience

The ConsultantNav is designed to provide consultants with:
- Comprehensive business overview and analytics
- Efficient client and project management
- Advanced billing and time tracking capabilities
- Performance insights and reporting tools
- Professional tools and resource access
- Streamlined workflow management

## Design Principles

- **Professional**: Clean, sophisticated interface that reflects consultant expertise
- **Comprehensive**: Full-featured navigation covering all business aspects
- **Efficient**: Quick access to frequently used features and information
- **Scalable**: Handles multiple clients and projects with ease
- **Data-Driven**: Emphasizes metrics and performance indicators
        `,
      },
    },
  },
  argTypes: {
    responsive: {
      control: 'boolean',
      description: 'Whether the navigation should be responsive',
    },
    permissions: {
      control: 'object',
      description: 'Array of permissions for the consultant user',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex">
        <Story />
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Consultant Dashboard</h1>
          <p className="text-gray-600 mb-6">
            Welcome to your consultant workspace. Manage your clients, track performance, and access all your business tools from the navigation panel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Management</h3>
              <p className="text-gray-600">Manage relationships, track project progress, and maintain client communications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Analytics</h3>
              <p className="text-gray-600">Monitor performance metrics, revenue tracking, and business growth indicators.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Workspaces</h3>
              <p className="text-gray-600">Access active projects, track time, and manage deliverables across all clients.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ConsultantNav>;

// Default story - Full-featured consultant with all permissions
export const Default: Story = {
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: mockAnalytics,
  },
};

// Active consultant with full permissions and interactions
export const FullFeatured: Story = {
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: mockAnalytics,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(`Navigating to: ${path}`);
    },
    onClientSelect: (client: Client) => {
      console.log('Client selected:', client);
      alert(`Selected client: ${client.name} from ${client.company}`);
    },
    onWorkspaceSelect: (workspace: Workspace) => {
      console.log('Workspace selected:', workspace);
      alert(`Selected workspace: ${workspace.name}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured consultant navigation with all permissions and interactive callbacks. Click on navigation items, clients, or workspaces to see the interactions.',
      },
    },
  },
};

// Busy consultant status
export const BusyConsultant: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      status: 'busy',
      name: 'Dr. Michael Chen',
      title: 'Lead Business Consultant',
    },
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: {
      ...mockAnalytics,
      hoursThisMonth: 180,
      activeClients: 6,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with busy status, showing high activity levels and focused permissions.',
      },
    },
  },
};

// Limited permissions consultant
export const LimitedPermissions: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Jennifer Adams',
      title: 'Junior Consultant',
      specialties: ['Research', 'Analysis'],
    },
    clients: mockClients.slice(0, 2),
    activeWorkspaces: mockWorkspaces.slice(0, 1),
    permissions: ['time-tracking'], // Very limited permissions
    responsive: true,
    analytics: {
      totalRevenue: 45000,
      activeClients: 2,
      completedProjects: 3,
      hoursThisMonth: 120,
      revenueGrowth: 15.2,
      clientSatisfaction: 88,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Junior consultant with limited permissions, showing restricted navigation access.',
      },
    },
  },
};

// High-performing consultant
export const HighPerformer: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Alexandra Rodriguez',
      title: 'Principal Consultant',
      specialties: ['Strategic Planning', 'Executive Coaching', 'M&A Advisory', 'Digital Innovation'],
    },
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: {
      totalRevenue: 850000,
      activeClients: 12,
      completedProjects: 28,
      hoursThisMonth: 165,
      revenueGrowth: 45.8,
      clientSatisfaction: 98,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'High-performing principal consultant with exceptional metrics and full access.',
      },
    },
  },
};

// Away status consultant
export const AwayConsultant: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      status: 'away',
      name: 'Robert Kim',
      title: 'Senior Consultant',
    },
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: mockAnalytics,
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with away status, indicating temporary unavailability.',
      },
    },
  },
};

// No analytics data
export const WithoutAnalytics: Story = {
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'time-tracking'],
    responsive: true,
    // No analytics prop
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant navigation without analytics data, showing simplified interface.',
      },
    },
  },
};

// Single client consultant
export const SingleClient: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Maria Gonzalez',
      title: 'Specialized Consultant',
      specialties: ['Industry Expert'],
    },
    clients: [mockClients[0]],
    activeWorkspaces: [mockWorkspaces[0]],
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: {
      totalRevenue: 125000,
      activeClients: 1,
      completedProjects: 2,
      hoursThisMonth: 140,
      revenueGrowth: 12.3,
      clientSatisfaction: 96,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant working with a single client, showing focused workspace management.',
      },
    },
  },
};

// Offline consultant
export const OfflineConsultant: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      status: 'offline',
      name: 'Thomas Wilson',
      title: 'Consultant',
    },
    clients: mockClients.slice(0, 2),
    activeWorkspaces: mockWorkspaces.slice(0, 1),
    permissions: ['time-tracking'],
    responsive: true,
    analytics: {
      totalRevenue: 180000,
      activeClients: 3,
      completedProjects: 8,
      hoursThisMonth: 95,
      revenueGrowth: 8.7,
      clientSatisfaction: 91,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with offline status, showing reduced activity state.',
      },
    },
  },
};

// Many clients and workspaces
export const HighVolume: Story = {
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Dr. Patricia Lee',
      title: 'Managing Consultant',
      specialties: ['Portfolio Management', 'Team Leadership', 'Strategic Consulting'],
    },
    clients: [
      ...mockClients,
      {
        id: 'client-6',
        name: 'James Wilson',
        company: 'Enterprise Solutions',
        status: 'active',
        priority: 'medium',
        lastActivity: '2025-07-14T06:30:00Z',
      },
      {
        id: 'client-7',
        name: 'Anna Martinez',
        company: 'Growth Ventures',
        status: 'active',
        priority: 'high',
        lastActivity: '2025-07-13T18:45:00Z',
      },
    ],
    activeWorkspaces: [
      ...mockWorkspaces,
      {
        id: 'workspace-5',
        name: 'Strategic Planning - Enterprise',
        type: 'Strategy Consulting',
        clientId: 'client-6',
        status: 'active',
        revenue: 110000,
        hoursLogged: 200,
      },
    ],
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts'],
    responsive: true,
    analytics: {
      totalRevenue: 650000,
      activeClients: 15,
      completedProjects: 35,
      hoursThisMonth: 175,
      revenueGrowth: 32.1,
      clientSatisfaction: 95,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Managing consultant with high client volume and multiple active workspaces.',
      },
    },
  },
};

// Mobile responsive view
export const MobileView: Story = {
  args: {
    consultant: mockConsultant,
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: mockAnalytics,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Consultant navigation optimized for mobile devices, showing responsive behavior.',
      },
    },
  },
};
