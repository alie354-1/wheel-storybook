import type { Meta, StoryObj } from "@storybook/react-vite";
import SideNavigation, { NavigationItem, SideNavigationProps } from './SideNavigation';

const meta: Meta<typeof SideNavigation> = {
  title: 'Layouts/SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A collapsible side navigation component with workspace context awareness, permission-based filtering, and hierarchical navigation support.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'neutral'],
      description: 'Workspace context for styling and behavior',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the navigation can be collapsed',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
    permissions: {
      control: 'object',
      description: 'Array of user permissions for filtering navigation items',
    },
    currentPath: {
      control: 'text',
      description: 'Current active path for highlighting navigation items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

// Sample navigation items
const sampleNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/dashboard',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'FolderOpen',
    path: '/projects',
    badge: 3,
    children: [
      {
        id: 'active-projects',
        label: 'Active Projects',
        icon: 'Play',
        path: '/projects/active',
        badge: 2,
      },
      {
        id: 'completed-projects',
        label: 'Completed',
        icon: 'CheckCircle',
        path: '/projects/completed',
      },
      {
        id: 'archived-projects',
        label: 'Archived',
        icon: 'Archive',
        path: '/projects/archived',
      },
    ],
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: 'Users',
    path: '/clients',
    permission: 'view_clients',
    workspaceContext: 'consultant',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'CreditCard',
    path: '/billing',
    permission: 'view_billing',
    badge: 5,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'BarChart3',
    path: '/reports',
    permission: 'view_reports',
    children: [
      {
        id: 'financial-reports',
        label: 'Financial',
        icon: 'DollarSign',
        path: '/reports/financial',
        permission: 'view_financial_reports',
      },
      {
        id: 'project-reports',
        label: 'Project Analytics',
        icon: 'TrendingUp',
        path: '/reports/projects',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    path: '/settings',
    children: [
      {
        id: 'profile-settings',
        label: 'Profile',
        icon: 'User',
        path: '/settings/profile',
      },
      {
        id: 'workspace-settings',
        label: 'Workspace',
        icon: 'Building',
        path: '/settings/workspace',
        permission: 'manage_workspace',
      },
      {
        id: 'integrations',
        label: 'Integrations',
        icon: 'Plug',
        path: '/settings/integrations',
        permission: 'manage_integrations',
      },
    ],
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: 'HelpCircle',
    path: '/help',
  },
];

const clientNavigationItems: NavigationItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: 'Home',
    path: '/overview',
  },
  {
    id: 'my-projects',
    label: 'My Projects',
    icon: 'FolderOpen',
    path: '/my-projects',
    badge: 2,
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'FileText',
    path: '/documents',
    children: [
      {
        id: 'contracts',
        label: 'Contracts',
        icon: 'FileSignature',
        path: '/documents/contracts',
      },
      {
        id: 'invoices',
        label: 'Invoices',
        icon: 'Receipt',
        path: '/documents/invoices',
        badge: 1,
      },
    ],
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'MessageSquare',
    path: '/messages',
    badge: 3,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'User',
    path: '/profile',
  },
];

export const Default: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
        <p className="text-gray-600">
          This is the main content area. The side navigation is fully functional with collapsible sections,
          permission-based filtering, and workspace context awareness.
        </p>
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Current Path: {args.currentPath}</h2>
          <p className="text-sm text-gray-600">
            Click on navigation items to see the active state changes.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const ConsultantWorkspace: Story = {
  args: {
    context: 'consultant',
    items: sampleNavigationItems,
    currentPath: '/clients',
    permissions: ['view_clients', 'view_billing', 'view_reports', 'view_financial_reports', 'manage_workspace'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Consultant Workspace</h1>
        <p className="text-gray-600">
          Consultant workspace with full permissions and blue accent colors.
          Notice the workspace-specific styling and available navigation items.
        </p>
      </div>
    </div>
  ),
};

export const ClientWorkspace: Story = {
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/my-projects',
    permissions: [],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Client Workspace</h1>
        <p className="text-gray-600">
          Client workspace with simplified navigation and green accent colors.
          Limited to client-relevant features and information.
        </p>
      </div>
    </div>
  ),
};

export const AdminWorkspace: Story = {
  args: {
    context: 'admin',
    items: sampleNavigationItems,
    currentPath: '/settings/workspace',
    permissions: ['view_clients', 'view_billing', 'view_reports', 'view_financial_reports', 'manage_workspace', 'manage_integrations'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">Admin Workspace</h1>
        <p className="text-gray-600">
          Admin workspace with full permissions and purple accent colors.
          Access to all administrative features and settings.
        </p>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/projects/active',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: true,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Collapsed Navigation</h1>
        <p className="text-gray-600">
          The navigation starts in collapsed mode, showing only icons.
          Click the chevron button to expand it.
        </p>
      </div>
    </div>
  ),
};

export const LimitedPermissions: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    permissions: ['view_billing'], // Very limited permissions
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Limited Permissions</h1>
        <p className="text-gray-600">
          This example shows how navigation items are filtered based on user permissions.
          Only items without permission requirements or with 'view_billing' permission are shown.
        </p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-800">Current Permissions:</h3>
          <p className="text-sm text-yellow-700">view_billing</p>
        </div>
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/billing',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Navigation with Badges</h1>
        <p className="text-gray-600">
          Notice the badge indicators on various navigation items showing counts
          for notifications, pending items, or other relevant metrics.
        </p>
      </div>
    </div>
  ),
};

export const NonCollapsible: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/reports/projects',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Non-Collapsible Navigation</h1>
        <p className="text-gray-600">
          This navigation cannot be collapsed and always shows the full menu.
          Notice there's no collapse toggle button in the header.
        </p>
      </div>
    </div>
  ),
};

export const DeepNesting: Story = {
  args: {
    context: 'neutral',
    items: [
      {
        id: 'level1',
        label: 'Level 1',
        icon: 'Folder',
        children: [
          {
            id: 'level2a',
            label: 'Level 2A',
            icon: 'Folder',
            children: [
              {
                id: 'level3a',
                label: 'Level 3A',
                icon: 'File',
                path: '/level1/level2a/level3a',
              },
              {
                id: 'level3b',
                label: 'Level 3B',
                icon: 'File',
                path: '/level1/level2a/level3b',
              },
            ],
          },
          {
            id: 'level2b',
            label: 'Level 2B',
            icon: 'File',
            path: '/level1/level2b',
          },
        ],
      },
    ],
    currentPath: '/level1/level2a/level3a',
    permissions: [],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true,
  },
  render: (args: SideNavigationProps) => (
    <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Deep Nesting Example</h1>
        <p className="text-gray-600">
          This example demonstrates how the navigation handles deeply nested menu structures
          with proper indentation and visual hierarchy.
        </p>
      </div>
    </div>
  ),
};
