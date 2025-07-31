import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FeatureToggle, NavigationItem, User, Workspace } from './WorkspaceNav';
import { WorkspaceNav } from './WorkspaceNav';

// Mock data
const mockUser: User = {
  id: '1',
  name: 'Alexandra Cohen',
  email: 'alexandra@thewheel.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  role: 'Senior Consultant',
  permissions: ['read', 'write', 'admin', 'billing', 'analytics', 'client-management'],
};

const mockFeatures: FeatureToggle[] = [
  {
    id: 'analytics',
    name: 'Advanced Analytics',
    enabled: true,
    permission: 'analytics',
    workspaceContext: 'consultant',
  },
  {
    id: 'billing',
    name: 'Billing Management',
    enabled: true,
    permission: 'billing',
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    enabled: true,
  },
  {
    id: 'collaboration',
    name: 'Team Collaboration',
    enabled: true,
    workspaceContext: 'neutral',
  },
];

const consultantNavigation: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    active: true,
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: 'users',
    path: '/clients',
    badge: 3,
    children: [
      {
        id: 'active-clients',
        label: 'Active Clients',
        path: '/clients/active',
        badge: 12,
      },
      {
        id: 'pending-clients',
        label: 'Pending Approval',
        path: '/clients/pending',
        badge: 3,
      },
      {
        id: 'archived-clients',
        label: 'Archived',
        path: '/clients/archived',
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'folder',
    path: '/projects',
    badge: 8,
    children: [
      {
        id: 'active-projects',
        label: 'Active Projects',
        path: '/projects/active',
        badge: 5,
      },
      {
        id: 'completed-projects',
        label: 'Completed',
        path: '/projects/completed',
        badge: 3,
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Invoices',
    icon: 'credit-card',
    path: '/billing',
    permission: 'billing',
    workspaceContext: 'consultant',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'chart',
    path: '/analytics',
    permission: 'analytics',
    workspaceContext: 'consultant',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    path: '/settings',
    children: [
      {
        id: 'profile',
        label: 'Profile',
        path: '/settings/profile',
      },
      {
        id: 'workspace',
        label: 'Workspace',
        path: '/settings/workspace',
        permission: 'admin',
      },
      {
        id: 'integrations',
        label: 'Integrations',
        path: '/settings/integrations',
      },
    ],
  },
];

const clientNavigation: NavigationItem[] = [
  {
    id: 'overview',
    label: 'Project Overview',
    icon: 'home',
    path: '/overview',
    active: true,
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'file',
    path: '/documents',
    badge: 2,
  },
  {
    id: 'communications',
    label: 'Messages',
    icon: 'message',
    path: '/messages',
    badge: 5,
  },
  {
    id: 'timeline',
    label: 'Project Timeline',
    icon: 'calendar',
    path: '/timeline',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'credit-card',
    path: '/billing',
    workspaceContext: 'client',
  },
];

const adminNavigation: NavigationItem[] = [
  {
    id: 'system',
    label: 'System Overview',
    icon: 'monitor',
    path: '/system',
    active: true,
  },
  {
    id: 'users',
    label: 'User Management',
    icon: 'users',
    path: '/users',
    permission: 'admin',
    children: [
      {
        id: 'consultants',
        label: 'Consultants',
        path: '/users/consultants',
        badge: 25,
      },
      {
        id: 'clients',
        label: 'Clients',
        path: '/users/clients',
        badge: 150,
      },
      {
        id: 'admins',
        label: 'Administrators',
        path: '/users/admins',
        badge: 5,
      },
    ],
  },
  {
    id: 'workspaces',
    label: 'Workspaces',
    icon: 'building',
    path: '/workspaces',
    permission: 'admin',
  },
  {
    id: 'analytics',
    label: 'System Analytics',
    icon: 'chart',
    path: '/analytics',
    permission: 'admin',
  },
  {
    id: 'settings',
    label: 'System Settings',
    icon: 'settings',
    path: '/settings',
    permission: 'admin',
  },
];

const mockWorkspaces: Record<string, Workspace> = {
  consultant: {
    id: 'ws-consultant',
    name: 'Consultant Workspace',
    type: 'consultant',
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    branding: {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop',
      theme: 'light',
    },
    navigation: consultantNavigation,
  },
  client: {
    id: 'ws-client',
    name: 'Client Portal',
    type: 'client',
    permissions: ['read'],
    features: mockFeatures.filter(f => !f.workspaceContext || f.workspaceContext === 'client' || f.workspaceContext === 'neutral'),
    branding: {
      primaryColor: '#10B981',
      secondaryColor: '#047857',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop',
      theme: 'light',
    },
    navigation: clientNavigation,
  },
  admin: {
    id: 'ws-admin',
    name: 'Admin Dashboard',
    type: 'admin',
    permissions: ['read', 'write', 'admin'],
    features: mockFeatures,
    branding: {
      primaryColor: '#6B7280',
      secondaryColor: '#374151',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop',
      theme: 'light',
    },
    navigation: adminNavigation,
  },
};

const meta: Meta<typeof WorkspaceNav> = {
  title: 'Layouts/WorkspaceNav',
  component: WorkspaceNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The WorkspaceNav component provides sophisticated navigation that adapts to different workspace contexts.
It supports permission-based filtering, workspace-specific theming, and hierarchical navigation structures.

## Features

- **Workspace Context Awareness**: Adapts styling and navigation items based on workspace type
- **Permission-Based Filtering**: Shows/hides navigation items based on user permissions
- **Hierarchical Navigation**: Supports nested navigation items with expand/collapse functionality
- **Feature Toggles**: Displays enabled features for the current workspace
- **Responsive Design**: Adapts to different screen sizes and supports collapsed state
- **Accessibility**: Full keyboard navigation and screen reader support

## Workspace Types

- **Consultant**: Blue theme with advanced features like billing and analytics
- **Client**: Green theme with simplified navigation focused on project communication
- **Admin**: Gray theme with system management and user administration features
- **Expert**: Purple theme with specialized tools and expert features
- **Tool Creator**: Orange theme with development and creation tools
- **Founder**: Amber theme with executive dashboard and high-level insights
        `,
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'The workspace context that determines theming and available features',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the navigation is in collapsed state',
    },
    responsive: {
      control: 'boolean',
      description: 'Whether the navigation should be responsive',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex">
        <Story />
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
          <p className="text-gray-600">
            This is the main content area. The WorkspaceNav component is displayed on the left side.
            Try different workspace contexts to see how the navigation adapts.
          </p>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WorkspaceNav>;

// Default story - Consultant workspace
export const Default: Story = {
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
};

// Consultant workspace with full features
export const ConsultantWorkspace: Story = {
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant workspace with blue theming and advanced features like billing and analytics.',
      },
    },
  },
};

// Client workspace with limited features
export const ClientWorkspace: Story = {
  args: {
    workspace: mockWorkspaces.client,
    context: 'client',
    user: {
      ...mockUser,
      name: 'John Client',
      role: 'Project Manager',
      permissions: ['read'],
    },
    permissions: ['read'],
    features: mockFeatures.filter(f => !f.workspaceContext || f.workspaceContext === 'client' || f.workspaceContext === 'neutral'),
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Client workspace with green theming and simplified navigation focused on project communication.',
      },
    },
  },
};

// Admin workspace with system management features
export const AdminWorkspace: Story = {
  args: {
    workspace: mockWorkspaces.admin,
    context: 'admin',
    user: {
      ...mockUser,
      name: 'Sarah Admin',
      role: 'System Administrator',
      permissions: ['read', 'write', 'admin'],
    },
    permissions: ['read', 'write', 'admin'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Admin workspace with gray theming and system management features.',
      },
    },
  },
};

// Collapsed navigation state
export const CollapsedNavigation: Story = {
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: true,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation in collapsed state, showing only icons and essential information.',
      },
    },
  },
};

// Limited permissions scenario
export const LimitedPermissions: Story = {
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: {
      ...mockUser,
      name: 'Junior Consultant',
      role: 'Junior Consultant',
      permissions: ['read'],
    },
    permissions: ['read'],
    features: mockFeatures.filter(f => !f.permission),
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with limited permissions, showing how items are filtered based on user access.',
      },
    },
  },
};

// Expert workspace context
export const ExpertWorkspace: Story = {
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Expert Hub',
      type: 'expert',
      navigation: [
        {
          id: 'expertise',
          label: 'My Expertise',
          icon: 'star',
          path: '/expertise',
          active: true,
        },
        {
          id: 'consultations',
          label: 'Consultations',
          icon: 'users',
          path: '/consultations',
          badge: 5,
        },
        {
          id: 'knowledge-base',
          label: 'Knowledge Base',
          icon: 'book',
          path: '/knowledge',
        },
        {
          id: 'earnings',
          label: 'Earnings',
          icon: 'credit-card',
          path: '/earnings',
        },
      ],
    },
    context: 'expert',
    user: {
      ...mockUser,
      name: 'Dr. Expert',
      role: 'Subject Matter Expert',
    },
    permissions: ['read', 'write', 'expert'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Expert workspace with purple theming and specialized tools for subject matter experts.',
      },
    },
  },
};

// Tool Creator workspace context
export const ToolCreatorWorkspace: Story = {
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Creator Studio',
      type: 'tool-creator',
      navigation: [
        {
          id: 'tools',
          label: 'My Tools',
          icon: 'wrench',
          path: '/tools',
          active: true,
          badge: 12,
        },
        {
          id: 'marketplace',
          label: 'Marketplace',
          icon: 'store',
          path: '/marketplace',
        },
        {
          id: 'analytics',
          label: 'Tool Analytics',
          icon: 'chart',
          path: '/analytics',
        },
        {
          id: 'revenue',
          label: 'Revenue',
          icon: 'credit-card',
          path: '/revenue',
        },
      ],
    },
    context: 'tool-creator',
    user: {
      ...mockUser,
      name: 'Alex Creator',
      role: 'Tool Developer',
    },
    permissions: ['read', 'write', 'create'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tool Creator workspace with orange theming and development tools for creating marketplace tools.',
      },
    },
  },
};

// Founder workspace context
export const FounderWorkspace: Story = {
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Executive Dashboard',
      type: 'founder',
      navigation: [
        {
          id: 'overview',
          label: 'Executive Overview',
          icon: 'dashboard',
          path: '/overview',
          active: true,
        },
        {
          id: 'metrics',
          label: 'Key Metrics',
          icon: 'chart',
          path: '/metrics',
        },
        {
          id: 'growth',
          label: 'Growth Analytics',
          icon: 'trending-up',
          path: '/growth',
        },
        {
          id: 'strategy',
          label: 'Strategic Planning',
          icon: 'target',
          path: '/strategy',
        },
      ],
    },
    context: 'founder',
    user: {
      ...mockUser,
      name: 'CEO Founder',
      role: 'Chief Executive Officer',
    },
    permissions: ['read', 'write', 'admin', 'founder'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Founder workspace with amber theming and executive dashboard for high-level insights.',
      },
    },
  },
};

// Interactive example with navigation callbacks
export const InteractiveNavigation: Story = {
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(`Navigating to: ${path}`);
    },
    onWorkspaceChange: (workspace: Workspace) => {
      console.log('Workspace changed:', workspace);
      alert(`Workspace changed to: ${workspace.name}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive navigation with callback functions. Click navigation items to see the callbacks in action.',
      },
    },
  },
};
