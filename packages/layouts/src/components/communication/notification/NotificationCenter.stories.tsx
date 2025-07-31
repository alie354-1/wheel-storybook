import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Notification, User } from './NotificationCenter';
import { NotificationCenter } from './NotificationCenter';

// Mock data
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  role: 'consultant'
};

const mockSender: User = {
  id: '2',
  name: 'Jane Smith',
  email: 'jane@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=32&h=32&fit=crop&crop=face',
  role: 'client'
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'info',
    category: 'system',
    title: 'System Update',
    message: 'The system will be updated tonight at 2 AM EST.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
    workspace: 'main',
    priority: 'medium',
    metadata: { version: '2.1.0' }
  },
  {
    id: '2',
    type: 'mention',
    category: 'chat',
    title: 'You were mentioned',
    message: 'Jane mentioned you in the project discussion.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    workspace: 'main',
    sender: mockSender,
    priority: 'high',
    actions: [
      {
        id: 'view',
        label: 'View Message',
        type: 'primary',
        action: 'navigate',
        url: '/chat/123'
      },
      {
        id: 'reply',
        label: 'Reply',
        type: 'secondary',
        action: 'reply'
      }
    ]
  },
  {
    id: '3',
    type: 'success',
    category: 'task',
    title: 'Task Completed',
    message: 'Your task "Review client proposal" has been completed.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    read: true,
    workspace: 'main',
    priority: 'low'
  },
  {
    id: '4',
    type: 'warning',
    category: 'billing',
    title: 'Payment Due',
    message: 'Your invoice #INV-001 is due in 3 days.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: false,
    workspace: 'main',
    priority: 'urgent',
    actions: [
      {
        id: 'pay',
        label: 'Pay Now',
        type: 'primary',
        action: 'payment',
        url: '/billing/pay/INV-001'
      }
    ]
  },
  {
    id: '5',
    type: 'error',
    category: 'system',
    title: 'Sync Failed',
    message: 'Failed to sync data with external service. Please try again.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    read: true,
    workspace: 'main',
    priority: 'high',
    actions: [
      {
        id: 'retry',
        label: 'Retry Sync',
        type: 'primary',
        action: 'retry'
      }
    ]
  },
  {
    id: '6',
    type: 'update',
    category: 'comment',
    title: 'New Comment',
    message: 'Someone commented on your document.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    read: true,
    workspace: 'main',
    sender: mockSender,
    priority: 'medium'
  }
];

const meta: Meta<typeof NotificationCenter> = {
  title: 'Layouts/Communication/NotificationCenter',
  component: NotificationCenter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive notification center component that displays notifications with filtering, grouping, and action capabilities.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool_creator', 'founder', 'neutral'],
      description: 'The context determines the visual styling and behavior'
    },
    showFilters: {
      control: 'boolean',
      description: 'Whether to show notification filters'
    },
    showSettings: {
      control: 'boolean',
      description: 'Whether to show the settings button'
    },
    permissions: {
      control: 'object',
      description: 'Array of permission strings for the current user'
    }
  }
};

export default meta;
type Story = StoryObj<typeof NotificationCenter>;

// Default story
export const Default: Story = {
  args: {
    notifications: mockNotifications,
    currentUser: mockUser,
    context: 'neutral',
    showFilters: true,
    showSettings: true,
    permissions: ['notification:clear']
  }
};

// Context variations
export const ConsultantContext: Story = {
  args: {
    ...Default.args,
    context: 'consultant'
  }
};

export const ClientContext: Story = {
  args: {
    ...Default.args,
    context: 'client'
  }
};

export const AdminContext: Story = {
  args: {
    ...Default.args,
    context: 'admin'
  }
};

// State variations
export const EmptyState: Story = {
  args: {
    ...Default.args,
    notifications: []
  }
};

export const UnreadOnly: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => !n.read)
  }
};

export const NoFilters: Story = {
  args: {
    ...Default.args,
    showFilters: false
  }
};

export const NoSettings: Story = {
  args: {
    ...Default.args,
    showSettings: false
  }
};

export const LimitedPermissions: Story = {
  args: {
    ...Default.args,
    permissions: []
  }
};

// Notification type examples
export const SystemNotifications: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'system')
  }
};

export const ChatNotifications: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'chat')
  }
};

export const BillingNotifications: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'billing')
  }
};

// Priority examples
export const UrgentNotifications: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.priority === 'urgent')
  }
};

export const HighPriorityNotifications: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.priority === 'high')
  }
};

// Interactive examples
export const WithActions: Story = {
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.actions && n.actions.length > 0),
    onNotificationClick: (notification) => {
      console.log('Notification clicked:', notification);
    },
    onMarkAsRead: (id) => {
      console.log('Mark as read:', id);
    },
    onMarkAllAsRead: () => {
      console.log('Mark all as read');
    },
    onClearAll: () => {
      console.log('Clear all notifications');
    }
  }
};

// Large dataset
export const ManyNotifications: Story = {
  args: {
    ...Default.args,
    notifications: [
      ...mockNotifications,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `generated-${i}`,
        type: ['info', 'success', 'warning', 'error', 'mention', 'update'][i % 6] as any,
        category: ['system', 'chat', 'comment', 'task', 'billing', 'general'][i % 6] as any,
        title: `Generated Notification ${i + 1}`,
        message: `This is a generated notification message ${i + 1} for testing purposes.`,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * (i + 1)),
        read: i % 3 === 0,
        workspace: 'main',
        priority: ['low', 'medium', 'high', 'urgent'][i % 4] as any,
        ...(i % 4 === 0 && { sender: mockSender })
      }))
    ]
  }
};

// Responsive test
export const Mobile: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

// Dark mode
export const DarkMode: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

// Real-time simulation
export const RealTimeUpdates: Story = {
  args: {
    ...Default.args
  },
  play: async ({ canvasElement }) => {
    // This would simulate real-time updates in a real application
    console.log('Simulating real-time notification updates...');
  }
};
