import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download, Plus } from 'lucide-react';
import { TopNavigation } from './TopNavigation';

const meta: Meta<typeof TopNavigation> = {
  title: 'Layouts/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enhanced primary navigation with workspace context awareness, notifications, and user management.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for theming',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search bar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopNavigation>;

// Mock data
const mockUser = {
  id: '1',
  name: 'Alexandra Cohen',
  email: 'alexandra@thewheel.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
  role: 'Senior Consultant',
};

const mockWorkspaces = [
  {
    id: '1',
    name: 'Acme Corp',
    type: 'client' as const,
    permissions: ['read', 'write'],
  },
  {
    id: '2',
    name: 'Tech Startup',
    type: 'consultant' as const,
    permissions: ['read', 'write', 'admin'],
  },
  {
    id: '3',
    name: 'Enterprise Solutions',
    type: 'expert' as const,
    permissions: ['read'],
  },
];

const mockNotifications = [
  {
    id: '1',
    title: 'New project assigned',
    message: 'You have been assigned to the Acme Corp redesign project',
    type: 'info' as const,
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
  },
  {
    id: '2',
    title: 'Payment received',
    message: 'Payment of $5,000 has been received from Tech Startup',
    type: 'success' as const,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
  },
  {
    id: '3',
    title: 'Meeting reminder',
    message: 'Client call with Enterprise Solutions in 15 minutes',
    type: 'warning' as const,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    read: true,
  },
];

const mockPrimaryActions = [
  {
    id: 'create',
    label: 'Create',
    icon: Plus,
    onClick: () => console.log('Create clicked'),
  },
  {
    id: 'export',
    label: 'Export',
    icon: Download,
    onClick: () => console.log('Export clicked'),
    badge: 3,
  },
];

export const Default: Story = {
  args: {
    context: 'neutral',
    user: mockUser,
    workspaces: mockWorkspaces,
    currentWorkspace: mockWorkspaces[0],
    notifications: mockNotifications,
    primaryActions: mockPrimaryActions,
    responsive: true,
    showSearch: true,
    onWorkspaceChange: (workspace) => console.log('Workspace changed:', workspace),
    onNotificationClick: (notification) => console.log('Notification clicked:', notification),
    onSearch: (query) => console.log('Search:', query),
    onMobileMenuClick: () => console.log('Mobile menu clicked'),
    onSignOut: () => console.log('Sign out clicked'),
  },
};

export const ConsultantContext: Story = {
  args: {
    ...Default.args,
    context: 'consultant',
    currentWorkspace: mockWorkspaces[1],
  },
};

export const ClientContext: Story = {
  args: {
    ...Default.args,
    context: 'client',
    currentWorkspace: mockWorkspaces[0],
  },
};

export const ExpertContext: Story = {
  args: {
    ...Default.args,
    context: 'expert',
    currentWorkspace: mockWorkspaces[2],
  },
};

export const WithManyNotifications: Story = {
  args: {
    ...Default.args,
    notifications: [
      ...mockNotifications,
      {
        id: '4',
        title: 'System update',
        message: 'The system will be updated tonight at 2 AM EST',
        type: 'info' as const,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
        read: false,
      },
      {
        id: '5',
        title: 'Invoice overdue',
        message: 'Invoice #1234 is now 5 days overdue',
        type: 'error' as const,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
        read: false,
      },
    ],
  },
};

export const NoNotifications: Story = {
  args: {
    ...Default.args,
    notifications: [],
  },
};

export const WithoutSearch: Story = {
  args: {
    ...Default.args,
    showSearch: false,
  },
};

export const MinimalSetup: Story = {
  args: {
    context: 'neutral',
    user: mockUser,
    responsive: true,
    showSearch: false,
    onSignOut: () => console.log('Sign out clicked'),
  },
};

export const MobileView: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const WithoutUser: Story = {
  args: {
    context: 'neutral',
    workspaces: mockWorkspaces,
    currentWorkspace: mockWorkspaces[0],
    notifications: mockNotifications,
    primaryActions: mockPrimaryActions,
    responsive: true,
    showSearch: true,
    onWorkspaceChange: (workspace) => console.log('Workspace changed:', workspace),
    onNotificationClick: (notification) => console.log('Notification clicked:', notification),
    onSearch: (query) => console.log('Search:', query),
    onMobileMenuClick: () => console.log('Mobile menu clicked'),
  },
};

export const FounderContext: Story = {
  args: {
    ...Default.args,
    context: 'founder',
    user: {
      ...mockUser,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
    },
    currentWorkspace: {
      id: 'founder-workspace',
      name: 'THE WHEEL',
      type: 'founder' as const,
      permissions: ['read', 'write', 'admin', 'owner'],
    },
  },
};

export const ToolCreatorContext: Story = {
  args: {
    ...Default.args,
    context: 'tool-creator',
    user: {
      ...mockUser,
      name: 'Alex Developer',
      role: 'Tool Creator',
    },
    currentWorkspace: {
      id: 'tool-workspace',
      name: 'Development Tools',
      type: 'tool-creator' as const,
      permissions: ['read', 'write', 'deploy'],
    },
  },
};
