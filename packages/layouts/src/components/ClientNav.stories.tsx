import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Client, Notification, Project } from './ClientNav';
import { ClientNav } from './ClientNav';

// Mock data
const mockClient: Client = {
  id: 'client-1',
  name: 'John Smith',
  email: 'john.smith@acmecorp.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  company: 'Acme Corporation',
  status: 'active',
};

const mockProjects: Project[] = [
  {
    id: 'project-1',
    name: 'Digital Transformation Initiative',
    description: 'Modernizing legacy systems and processes',
    status: 'active',
    progress: 75,
    dueDate: '2025-09-15',
    priority: 'high',
  },
  {
    id: 'project-2',
    name: 'Marketing Automation Setup',
    description: 'Implementing automated marketing workflows',
    status: 'active',
    progress: 45,
    dueDate: '2025-08-30',
    priority: 'medium',
  },
  {
    id: 'project-3',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    status: 'completed',
    progress: 100,
    dueDate: '2025-06-01',
    priority: 'low',
  },
];

const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'New Document Available',
    message: 'Project requirements document has been uploaded',
    type: 'info',
    read: false,
    timestamp: '2025-07-14T09:30:00Z',
  },
  {
    id: 'notif-2',
    title: 'Meeting Scheduled',
    message: 'Weekly check-in scheduled for tomorrow at 2 PM',
    type: 'info',
    read: false,
    timestamp: '2025-07-14T08:15:00Z',
  },
  {
    id: 'notif-3',
    title: 'Invoice Generated',
    message: 'Monthly invoice for July is now available',
    type: 'success',
    read: true,
    timestamp: '2025-07-13T16:45:00Z',
  },
  {
    id: 'notif-4',
    title: 'Milestone Completed',
    message: 'Phase 2 of your project has been completed',
    type: 'success',
    read: false,
    timestamp: '2025-07-12T14:20:00Z',
  },
  {
    id: 'notif-5',
    title: 'Action Required',
    message: 'Please review and approve the latest deliverables',
    type: 'warning',
    read: false,
    timestamp: '2025-07-11T11:30:00Z',
  },
];

const meta: Meta<typeof ClientNav> = {
  title: 'Layouts/ClientNav',
  component: ClientNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The ClientNav component provides a simplified, client-focused navigation experience designed specifically for client workspaces.
It emphasizes project communication, document access, and essential client features with an intuitive, easy-to-use interface.

## Features

- **Project-Focused Design**: Centers around active projects with clear status indicators
- **Simplified Navigation**: Streamlined menu items focused on client needs
- **Communication Priority**: Emphasizes messaging and collaboration features
- **Progress Tracking**: Visual progress indicators for active projects
- **Notification Management**: Built-in notification system for important updates
- **Quick Actions**: Easy access to support and help resources
- **Permission-Aware**: Respects client permission levels and shows appropriate features

## Client Experience

The ClientNav is designed to provide clients with:
- Clear project status and progress visibility
- Easy access to project documents and communications
- Streamlined billing and invoice access
- Direct support and help channels
- Notification management for staying updated

## Design Principles

- **Simplicity**: Clean, uncluttered interface that's easy to navigate
- **Clarity**: Clear visual hierarchy and status indicators
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsiveness**: Adapts to different screen sizes while maintaining usability
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
      description: 'Array of permissions for the client user',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex">
        <Story />
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Client Portal</h1>
          <p className="text-gray-600 mb-6">
            Welcome to your project portal. Use the navigation on the left to access your project information,
            documents, and communicate with your consultant team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Status</h3>
              <p className="text-gray-600">View real-time updates on your project progress and milestones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documents</h3>
              <p className="text-gray-600">Access all project deliverables, reports, and shared documents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-gray-600">Stay connected with your consultant team through integrated messaging.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ClientNav>;

// Default story - Active client with multiple projects
export const Default: Story = {
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read'],
    responsive: true,
    notifications: mockNotifications,
  },
};

// Active client with full permissions
export const ActiveClientWithBilling: Story = {
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(`Navigating to: ${path}`);
    },
    onProjectChange: (project: Project) => {
      console.log('Project changed:', project);
      alert(`Switched to project: ${project.name}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Active client with billing permissions, showing the full navigation including billing access.',
      },
    },
  },
};

// Client with single project
export const SingleProject: Story = {
  args: {
    client: mockClient,
    projects: [mockProjects[0]],
    currentProject: mockProjects[0],
    permissions: ['read'],
    responsive: true,
    notifications: mockNotifications.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with a single active project, showing simplified project selection.',
      },
    },
  },
};

// Client with completed project
export const CompletedProject: Story = {
  args: {
    client: mockClient,
    projects: [mockProjects[2]], // Completed project
    currentProject: mockProjects[2],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: [
      {
        id: 'completion-notif',
        title: 'Project Completed',
        message: 'Your website redesign project has been successfully completed',
        type: 'success',
        read: false,
        timestamp: '2025-07-14T10:00:00Z',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Client viewing a completed project with success notifications.',
      },
    },
  },
};

// Pending client status
export const PendingClient: Story = {
  args: {
    client: {
      ...mockClient,
      name: 'Jane Pending',
      status: 'pending',
      company: 'Startup Inc.',
    },
    projects: [
      {
        ...mockProjects[0],
        name: 'Initial Consultation',
        status: 'on-hold',
        progress: 25,
        priority: 'medium',
      },
    ],
    permissions: ['read'],
    responsive: true,
    notifications: [
      {
        id: 'pending-notif',
        title: 'Account Activation Pending',
        message: 'Your account is being reviewed. You will receive full access soon.',
        type: 'warning',
        read: false,
        timestamp: '2025-07-14T09:00:00Z',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with pending status, showing limited access and activation notifications.',
      },
    },
  },
};

// Client with no notifications
export const NoNotifications: Story = {
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[1],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Client navigation without any notifications, showing clean interface.',
      },
    },
  },
};

// Client with urgent project
export const UrgentProject: Story = {
  args: {
    client: mockClient,
    projects: [
      {
        id: 'urgent-project',
        name: 'Critical System Recovery',
        description: 'Emergency system restoration and data recovery',
        status: 'active',
        progress: 60,
        dueDate: '2025-07-20',
        priority: 'urgent',
      },
    ],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: [
      {
        id: 'urgent-notif',
        title: 'Urgent: Action Required',
        message: 'Critical system recovery requires your immediate attention',
        type: 'error',
        read: false,
        timestamp: '2025-07-14T09:45:00Z',
      },
      {
        id: 'update-notif',
        title: 'Progress Update',
        message: 'System recovery is 60% complete, on track for deadline',
        type: 'info',
        read: false,
        timestamp: '2025-07-14T08:30:00Z',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with an urgent priority project, showing high-priority styling and notifications.',
      },
    },
  },
};

// Client with multiple active projects
export const MultipleActiveProjects: Story = {
  args: {
    client: {
      ...mockClient,
      name: 'Sarah Manager',
      company: 'Enterprise Solutions Ltd.',
    },
    projects: mockProjects.filter(p => p.status === 'active'),
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications,
  },
  parameters: {
    docs: {
      description: {
        story: 'Client managing multiple active projects with full notification system.',
      },
    },
  },
};

// Limited permissions client
export const LimitedPermissions: Story = {
  args: {
    client: {
      ...mockClient,
      name: 'Basic User',
      company: 'Small Business Co.',
    },
    projects: [mockProjects[0]],
    currentProject: mockProjects[0],
    permissions: [], // No special permissions
    responsive: true,
    notifications: mockNotifications.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with minimal permissions, showing basic navigation without billing access.',
      },
    },
  },
};

// Interactive navigation example
export const InteractiveNavigation: Story = {
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      // In a real app, this would handle routing
      alert(`Navigating to: ${path}`);
    },
    onProjectChange: (project: Project) => {
      console.log('Project changed:', project);
      alert(`Switched to project: ${project.name}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive client navigation with callback functions. Click navigation items and change projects to see the callbacks in action.',
      },
    },
  },
};

// Mobile responsive view
export const MobileView: Story = {
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications.slice(0, 3),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Client navigation optimized for mobile devices, showing responsive behavior.',
      },
    },
  },
};
