import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkspaceContextProvider, useWorkspace } from './WorkspaceContextProvider';

// Simple demo component to show workspace context usage
const WorkspaceDemo = () => {
  const { workspace, user, permissions, hasPermission, switchContext } = useWorkspace();

  const handleSwitchContext = async () => {
    try {
      const newTheme: 'light' | 'dark' | 'gradient' = workspace.settings.theme === 'light' ? 'dark' : 'light';
      const newWorkspace = {
        ...workspace,
        name: workspace.name + ' (Switched)',
        settings: {
          ...workspace.settings,
          theme: newTheme
        }
      };
      await switchContext(newWorkspace);
    } catch (error) {
      console.error('Failed to switch context:', error);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">Workspace Information</h3>
        <div className="space-y-2">
          <p><strong>Name:</strong> {workspace.name}</p>
          <p><strong>Type:</strong> <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">{workspace.type}</span></p>
          <p><strong>Active:</strong> <span className={`px-2 py-1 rounded text-sm ${workspace.state.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{workspace.state.isActive ? 'Active' : 'Inactive'}</span></p>
          <p><strong>Theme:</strong> {workspace.settings.theme}</p>
          <p><strong>Privacy:</strong> {workspace.settings.privacy}</p>
        </div>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roles:</strong> {user.roles.join(', ')}</p>
          <p><strong>Permissions:</strong> {permissions.join(', ')}</p>
        </div>
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">Permission Tests</h3>
        <div className="space-y-2">
          <p><strong>Can Read:</strong> <span className={hasPermission('read') ? 'text-green-600' : 'text-red-600'}>{hasPermission('read') ? 'Yes' : 'No'}</span></p>
          <p><strong>Can Write:</strong> <span className={hasPermission('write') ? 'text-green-600' : 'text-red-600'}>{hasPermission('write') ? 'Yes' : 'No'}</span></p>
          <p><strong>Can Admin:</strong> <span className={hasPermission('admin') ? 'text-green-600' : 'text-red-600'}>{hasPermission('admin') ? 'Yes' : 'No'}</span></p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSwitchContext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Switch Context
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof WorkspaceContextProvider> = {
  title: 'Workspace/Management/WorkspaceContextProvider',
  component: WorkspaceContextProvider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Provides workspace context and state management throughout the application. Handles user authentication, permissions, workspace settings, and audit logging.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkspaceContextProvider>;

// Mock data
const mockClientWorkspace = {
  id: 'ws-client-001',
  name: 'Acme Corp Workspace',
  type: 'client' as const,
  settings: {
    theme: 'light' as const,
    notifications: true,
    privacy: 'private' as const,
    features: {
      analytics: true,
      collaboration: true,
      reporting: false
    }
  },
  state: {
    isActive: true,
    lastAccessed: new Date(),
    sessionId: 'session-123',
    preferences: {
      sidebarCollapsed: false,
      defaultView: 'dashboard'
    }
  }
};

const mockConsultantWorkspace = {
  id: 'ws-consultant-001',
  name: 'Consultant Dashboard',
  type: 'consultant' as const,
  settings: {
    theme: 'dark' as const,
    notifications: true,
    privacy: 'public' as const,
    features: {
      analytics: true,
      collaboration: true,
      reporting: true,
      clientManagement: true
    }
  },
  state: {
    isActive: true,
    lastAccessed: new Date(),
    sessionId: 'session-456',
    preferences: {
      sidebarCollapsed: true,
      defaultView: 'clients'
    }
  }
};

const mockAdminWorkspace = {
  id: 'ws-admin-001',
  name: 'Admin Control Panel',
  type: 'admin' as const,
  settings: {
    theme: 'light' as const,
    notifications: true,
    privacy: 'restricted' as const,
    features: {
      analytics: true,
      collaboration: true,
      reporting: true,
      clientManagement: true,
      systemConfig: true,
      userManagement: true
    }
  },
  state: {
    isActive: true,
    lastAccessed: new Date(),
    sessionId: 'session-789',
    preferences: {
      sidebarCollapsed: false,
      defaultView: 'system'
    }
  }
};

const mockClientUser = {
  id: 'user-client-001',
  name: 'John Smith',
  email: 'john.smith@acmecorp.com',
  roles: ['client', 'user'],
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
};

const mockConsultantUser = {
  id: 'user-consultant-001',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@consulting.com',
  roles: ['consultant', 'user'],
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=32&h=32&fit=crop&crop=face',
};

const mockAdminUser = {
  id: 'user-admin-001',
  name: 'Admin User',
  email: 'admin@system.com',
  roles: ['admin', 'user'],
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
};

export const ClientWorkspace: Story = {
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const ConsultantWorkspace: Story = {
  args: {
    workspace: mockConsultantWorkspace,
    user: mockConsultantUser,
    permissions: ['read', 'write', 'comment', 'manage_clients', 'view_analytics'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const AdminWorkspace: Story = {
  args: {
    workspace: mockAdminWorkspace,
    user: mockAdminUser,
    permissions: ['read', 'write', 'comment', 'manage_clients', 'view_analytics', 'admin', 'manage_users', 'system_config'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const LimitedPermissions: Story = {
  args: {
    workspace: mockClientWorkspace,
    user: {
      ...mockClientUser,
      name: 'Guest User',
      email: 'guest@acmecorp.com',
      roles: ['guest'],
    },
    permissions: ['read'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const InactiveWorkspace: Story = {
  args: {
    workspace: {
      ...mockClientWorkspace,
      name: 'Suspended Workspace',
      state: {
        ...mockClientWorkspace.state,
        isActive: false
      }
    },
    user: mockClientUser,
    permissions: ['read'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const DarkTheme: Story = {
  args: {
    workspace: {
      ...mockConsultantWorkspace,
      settings: {
        ...mockConsultantWorkspace.settings,
        theme: 'dark' as const,
      },
    },
    user: mockConsultantUser,
    permissions: ['read', 'write', 'comment', 'manage_clients'],
  },
  render: (args) => (
    <div className="dark bg-gray-900 min-h-screen">
      <WorkspaceContextProvider {...args}>
        <WorkspaceDemo />
      </WorkspaceContextProvider>
    </div>
  ),
};

export const WithCustomOnAudit: Story = {
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment'],
    onContextChange: (context) => {
      console.log('Context changed:', context);
    },
    onPermissionDenied: (permission) => {
      console.log('Permission denied:', permission);
    },
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const StrictSecurityMode: Story = {
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write'],
    securityMode: 'strict' as const,
    auditEnabled: true,
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const PermissiveSecurityMode: Story = {
  args: {
    workspace: mockAdminWorkspace,
    user: mockAdminUser,
    permissions: ['read'],
    securityMode: 'permissive' as const,
    auditEnabled: true,
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
  ),
};

export const InteractiveDemo: Story = {
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment'],
  },
  render: (args) => (
    <WorkspaceContextProvider {...args}>
      <div className="space-y-6">
        <WorkspaceDemo />

        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Context Usage Example</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const { workspace, user, permissions, hasPermission, switchContext } = useWorkspace();

// Check permissions
if (hasPermission('admin')) {
  // Show admin features
}

// Switch workspace context
await switchContext(newWorkspace);`}
          </pre>
        </div>
      </div>
    </WorkspaceContextProvider>
  ),
};
