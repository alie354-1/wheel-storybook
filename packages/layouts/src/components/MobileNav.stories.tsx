import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from 'react';
import MobileNav, { MobileNavProps, NavigationItem, User, Workspace } from './MobileNav';

const meta: Meta<typeof MobileNav> = {
  title: 'Layouts/MobileNav',
  component: MobileNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A mobile navigation component with workspace context awareness, swipe gestures, and bottom sheet support.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'neutral'],
      description: 'Workspace context for styling and behavior',
    },
    bottomSheet: {
      control: 'boolean',
      description: 'Display as bottom sheet instead of side panel',
    },
    swipeGestures: {
      control: 'boolean',
      description: 'Enable swipe gestures for navigation',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the mobile navigation is open',
    },
    currentPath: {
      control: 'text',
      description: 'Current active path for highlighting navigation items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileNav>;

// Sample data
const sampleUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Senior Consultant',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
};

const sampleWorkspaces: Workspace[] = [
  {
    id: '1',
    name: 'Acme Corp',
    type: 'consultant',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
  },
  {
    id: '2',
    name: 'Tech Startup',
    type: 'client',
    permissions: ['view_projects'],
  },
  {
    id: '3',
    name: 'Admin Panel',
    type: 'admin',
    permissions: ['manage_all'],
  },
];

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
    ],
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: 'Users',
    path: '/clients',
    badge: 12,
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'CreditCard',
    path: '/billing',
    badge: 5,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'BarChart3',
    path: '/reports',
    children: [
      {
        id: 'financial-reports',
        label: 'Financial',
        icon: 'DollarSign',
        path: '/reports/financial',
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
];

// Interactive wrapper component
const MobileNavWrapper = ({ children, ...args }: { children: React.ReactNode } & MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  const [currentWorkspace, setCurrentWorkspace] = useState(args.currentWorkspace || sampleWorkspaces[0]);

  return (
    <div className="h-screen bg-gray-50 relative">
      {/* Mobile trigger button */}
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Open Mobile Nav
        </button>
      </div>

      {/* Main content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Mobile Navigation Demo</h1>
        <p className="text-gray-600 mb-4">
          Click the button above to open the mobile navigation. The navigation supports:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Touch-friendly interface optimized for mobile devices</li>
          <li>Swipe gestures for easy navigation</li>
          <li>Workspace switching capabilities</li>
          <li>Hierarchical navigation with expandable sections</li>
          <li>Badge indicators for notifications and counts</li>
          <li>User profile integration</li>
        </ul>
      </div>

      {children}

      <MobileNav
        {...args}
        isOpen={isOpen}
        onToggle={setIsOpen}
        currentWorkspace={currentWorkspace}
        onWorkspaceChange={setCurrentWorkspace}
        onItemClick={(item) => {
          console.log('Navigation item clicked:', item);
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div />
    </MobileNavWrapper>
  ),
};

export const ConsultantWorkspace: Story = {
  args: {
    context: 'consultant',
    items: sampleNavigationItems,
    currentPath: '/clients',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Consultant Workspace</h2>
          <p className="text-blue-700">
            Full access to client management, billing, and reporting features with blue accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const ClientWorkspace: Story = {
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/my-projects',
    user: { ...sampleUser, role: 'Project Manager' },
    workspaces: [sampleWorkspaces[1]],
    currentWorkspace: sampleWorkspaces[1],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Client Workspace</h2>
          <p className="text-green-700">
            Simplified navigation focused on project management and communication with green accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const AdminWorkspace: Story = {
  args: {
    context: 'admin',
    items: sampleNavigationItems,
    currentPath: '/settings',
    user: { ...sampleUser, role: 'System Administrator' },
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[2],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-purple-900 mb-2">Admin Workspace</h2>
          <p className="text-purple-700">
            Administrative interface with full system access and purple accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const BottomSheet: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/projects',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: true,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">Bottom Sheet Mode</h2>
          <p className="text-yellow-700">
            The navigation appears as a bottom sheet with rounded top corners, perfect for thumb-friendly navigation.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const WithoutSwipeGestures: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/billing',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: false,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">No Swipe Gestures</h2>
          <p className="text-gray-700">
            Swipe gestures are disabled. Navigation can only be closed using the X button or backdrop click.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const WithoutUser: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/reports',
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">No User Profile</h2>
          <p className="text-blue-700">
            Navigation without user profile information, showing only workspace switching capabilities.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const SingleWorkspace: Story = {
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/overview',
    user: sampleUser,
    workspaces: [sampleWorkspaces[1]],
    currentWorkspace: sampleWorkspaces[1],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false,
  },
  render: (args) => (
    <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Single Workspace</h2>
          <p className="text-green-700">
            When only one workspace is available, the workspace switcher is not shown.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
  ),
};

export const AlwaysOpen: Story = {
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: true,
  },
  render: (args: MobileNavProps) => (
    <div className="h-screen bg-gray-50 relative">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Always Open Mobile Nav</h1>
        <p className="text-gray-600">
          This story shows the mobile navigation in an always-open state for easier inspection and testing.
        </p>
      </div>

      <MobileNav
        {...args}
        onItemClick={(item) => console.log('Navigation item clicked:', item)}
        onWorkspaceChange={(workspace) => console.log('Workspace changed:', workspace)}
        onToggle={(open) => console.log('Navigation toggled:', open)}
      />
    </div>
  ),
};
