import type { Meta, StoryObj } from "@storybook/react-vite";
import React from 'react';
import { WorkspaceContextProvider } from './WorkspaceContextProvider';
import { WorkspaceRouter, createProtectedRoute, createRoute, createWorkspaceRoute } from './WorkspaceRouter';

// Mock components for routes
const HomePage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Home Page</h1>
    <p className="text-gray-600">Welcome to the workspace home page.</p>
  </div>
);

const DashboardPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
    <p className="text-gray-600">This is the dashboard page.</p>
  </div>
);

const AdminPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>
    <p className="text-gray-600">This is the admin panel - requires admin permissions.</p>
  </div>
);

const ClientPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Client Area</h1>
    <p className="text-gray-600">This is the client area - only for client workspaces.</p>
  </div>
);

const SettingsPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Settings</h1>
    <p className="text-gray-600">Workspace settings page.</p>
  </div>
);

// Mock workspace context data
const mockWorkspace = {
  id: 'ws-1',
  name: 'Test Workspace',
  type: 'client' as const,
  settings: {
    theme: 'light' as const,
    notifications: true,
    privacy: 'private' as const,
    features: {}
  },
  state: {
    isActive: true,
    lastAccessed: new Date(),
    sessionId: 'session-123',
    preferences: {}
  }
};

const mockUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  roles: ['user', 'admin']
};

const mockPermissions = ['read', 'write', 'admin'];

const mockConsultantWorkspace = {
  ...mockWorkspace,
  type: 'consultant' as const
};

const mockConsultantUser = {
  ...mockUser,
  roles: ['user']
};

const mockConsultantPermissions = ['read'];

// Sample routes
const sampleRoutes = [
  createRoute('/', HomePage, { exact: true }),
  createRoute('/dashboard', DashboardPage),
  createProtectedRoute('/admin', AdminPage, ['admin']),
  createWorkspaceRoute('/client', ClientPage, ['client']),
  createRoute('/settings', SettingsPage)
];

const meta: Meta<typeof WorkspaceRouter> = {
  title: 'Workspace/Management/WorkspaceRouter',
  component: WorkspaceRouter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The WorkspaceRouter component provides intelligent routing with workspace-aware permissions and access control.

## Features

- **Route Matching**: Supports exact and prefix matching with nested routes
- **Permission Control**: Route-level permission and role checking
- **Workspace Types**: Routes can be restricted to specific workspace types
- **Error Handling**: Built-in error boundaries and fallback components
- **Loading States**: Smooth transitions with loading indicators
- **Customizable**: Custom loading, error, and permission denied components

## Route Types

- **Basic Routes**: Simple path-to-component mapping
- **Protected Routes**: Require specific permissions
- **Workspace Routes**: Restricted to certain workspace types
- **Nested Routes**: Support for hierarchical routing

## Usage

\`\`\`tsx
import { WorkspaceRouter, createRoute, createProtectedRoute } from '@workspace/management';

const routes = [
  createRoute('/', HomePage),
  createProtectedRoute('/admin', AdminPage, ['admin']),
  createWorkspaceRoute('/client', ClientPage, ['client'])
];

<WorkspaceRouter
  routes={routes}
  currentPath="/dashboard"
  onRouteChange={handleRouteChange}
/>
\`\`\`
        `
      }
    }
  },
  decorators: [
    (Story, context) => (
      <WorkspaceContextProvider
        workspace={mockWorkspace}
        user={mockUser}
        permissions={mockPermissions}
      >
        <div className="min-h-screen bg-gray-50">
          <Story {...context} />
        </div>
      </WorkspaceContextProvider>
    )
  ],
  argTypes: {
    routes: {
      description: 'Array of route configurations',
      control: false
    },
    currentPath: {
      description: 'Current active path',
      control: 'text'
    },
    onRouteChange: {
      description: 'Callback when route changes',
      action: 'route-changed'
    },
    fallbackRoute: {
      description: 'Route to redirect to when access is denied',
      control: 'text'
    },
    loadingComponent: {
      description: 'Custom loading component',
      control: false
    },
    errorComponent: {
      description: 'Custom error component',
      control: false
    },
    permissionDeniedComponent: {
      description: 'Custom permission denied component',
      control: false
    }
  }
};

export default meta;
type Story = StoryObj<typeof WorkspaceRouter>;

// Basic routing story
export const Default: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/',
    fallbackRoute: '/unauthorized'
  }
};

// Dashboard route
export const Dashboard: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
};

// Protected route with admin access
export const AdminAccess: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/admin',
    fallbackRoute: '/unauthorized'
  }
};

// Protected route without admin access
export const AdminDenied: Story = {
  decorators: [
    (Story) => (
      <WorkspaceContextProvider
        workspace={mockConsultantWorkspace}
        user={mockConsultantUser}
        permissions={mockConsultantPermissions}
      >
        <div className="min-h-screen bg-gray-50">
          <Story />
        </div>
      </WorkspaceContextProvider>
    )
  ],
  args: {
    routes: sampleRoutes,
    currentPath: '/admin',
    fallbackRoute: '/unauthorized'
  }
};

// Workspace-specific route (client workspace)
export const ClientWorkspace: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/client',
    fallbackRoute: '/unauthorized'
  }
};

// Workspace-specific route denied (consultant trying to access client area)
export const ClientWorkspaceDenied: Story = {
  decorators: [
    (Story) => (
      <WorkspaceContextProvider
        workspace={mockConsultantWorkspace}
        user={mockConsultantUser}
        permissions={mockConsultantPermissions}
      >
        <div className="min-h-screen bg-gray-50">
          <Story />
        </div>
      </WorkspaceContextProvider>
    )
  ],
  args: {
    routes: sampleRoutes,
    currentPath: '/client',
    fallbackRoute: '/unauthorized'
  }
};

// Route not found
export const NotFound: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/nonexistent',
    fallbackRoute: '/unauthorized'
  }
};

// Loading state - Note: WorkspaceContextProvider doesn't have loading prop, so we'll simulate with a custom component
export const LoadingState: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
        <span className="ml-2 text-gray-600">Loading workspace...</span>
      </div>
    </div>
  ),
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
};

// Error state - Note: WorkspaceContextProvider doesn't have error prop, so we'll simulate with a custom component
export const ErrorState: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-64 p-6">
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load workspace</h3>
        <p className="text-gray-600 text-center">There was an error loading the workspace data.</p>
      </div>
    </div>
  ),
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
};

// Custom components
const CustomLoading: React.FC = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="text-center">
      <div className="animate-pulse bg-amber-200 rounded-full h-16 w-16 mx-auto mb-4"></div>
      <p className="text-amber-600 font-medium">Custom Loading...</p>
    </div>
  </div>
);

const CustomError: React.FC<{ error: Error }> = ({ error }) => (
  <div className="flex flex-col items-center justify-center min-h-64 p-6 bg-red-50">
    <div className="text-red-500 mb-4">
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-red-900 mb-2">Custom Error Handler</h3>
    <p className="text-red-700 text-center">{error.message}</p>
  </div>
);

export const CustomComponents: Story = {
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized',
    loadingComponent: CustomLoading,
    errorComponent: CustomError
  }
};

// Nested routes example
const NestedPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Nested Route</h1>
    <p className="text-gray-600">This is a nested route example.</p>
  </div>
);

const nestedRoutes = [
  createRoute('/', HomePage, { exact: true }),
  createRoute('/parent', DashboardPage, {
    children: [
      createRoute('/parent/child', NestedPage)
    ]
  })
];

export const NestedRoutes: Story = {
  args: {
    routes: nestedRoutes,
    currentPath: '/parent/child',
    fallbackRoute: '/unauthorized'
  }
};

// Interactive example with route switching
export const Interactive: Story = {
  render: (args) => {
    const [currentPath, setCurrentPath] = React.useState('/');

    const handleRouteChange = (path: string) => {
      setCurrentPath(path);
      args.onRouteChange?.(path);
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleRouteChange('/')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/'
                  ? 'bg-amber-100 text-amber-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleRouteChange('/dashboard')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/dashboard'
                  ? 'bg-amber-100 text-amber-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleRouteChange('/admin')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/admin'
                  ? 'bg-amber-100 text-amber-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Admin
            </button>
            <button
              onClick={() => handleRouteChange('/client')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/client'
                  ? 'bg-amber-100 text-amber-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Client Area
            </button>
            <button
              onClick={() => handleRouteChange('/settings')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/settings'
                  ? 'bg-amber-100 text-amber-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Settings
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Current path: <code className="bg-gray-100 px-2 py-1 rounded">{currentPath}</code>
          </div>
        </div>

        <WorkspaceRouter
          {...args}
          currentPath={currentPath}
          onRouteChange={handleRouteChange}
        />
      </div>
    );
  },
  args: {
    routes: sampleRoutes,
    fallbackRoute: '/unauthorized'
  }
};
