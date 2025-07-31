import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityFeed } from './ActivityFeed';
import { Activity } from './types';

const meta: Meta<typeof ActivityFeed> = {
  title: 'Layouts/Data Display/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'An activity feed component for displaying user activities with filtering and real-time updates.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for theming and permissions',
    },
    grouped: {
      control: 'boolean',
      description: 'Group activities by date',
    },
    realTimeUpdates: {
      control: 'boolean',
      description: 'Enable real-time updates indicator',
    },
    showAvatars: {
      control: 'boolean',
      description: 'Show user avatars',
    },
    showTimestamps: {
      control: 'boolean',
      description: 'Show activity timestamps',
    },
    infiniteScroll: {
      control: 'boolean',
      description: 'Enable infinite scroll',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

// Sample data
const sampleActivities: Activity[] = [
  {
    id: '1',
    type: 'create',
    title: 'Created new project',
    description: 'Started working on the website redesign project',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    user: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      role: 'Project Manager',
    },
    target: {
      id: 'proj1',
      type: 'project',
      name: 'Website Redesign',
    },
    read: false,
    metadata: {
      budget: '$50,000',
      deadline: '2024-03-15',
    },
  },
  {
    id: '2',
    type: 'update',
    title: 'Updated task status',
    description: 'Marked design mockups as completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    user: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      role: 'Designer',
    },
    target: {
      id: 'task1',
      type: 'task',
      name: 'Design Mockups',
    },
    read: true,
    workspaceContext: 'consultant',
  },
  {
    id: '3',
    type: 'comment',
    title: 'Added a comment',
    description: 'Provided feedback on the initial wireframes',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    user: {
      id: 'user3',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      role: 'Client',
    },
    target: {
      id: 'wireframe1',
      type: 'document',
      name: 'Homepage Wireframe',
    },
    read: true,
    workspaceContext: 'client',
  },
  {
    id: '4',
    type: 'upload',
    title: 'Uploaded files',
    description: 'Added new design assets to the project',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    user: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      role: 'Designer',
    },
    target: {
      id: 'assets1',
      type: 'folder',
      name: 'Design Assets',
    },
    read: false,
    metadata: {
      file_count: 12,
      total_size: '24.5 MB',
    },
  },
  {
    id: '5',
    type: 'like',
    title: 'Liked a design',
    description: 'Approved the new color scheme proposal',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    user: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      role: 'Project Manager',
    },
    target: {
      id: 'design1',
      type: 'design',
      name: 'Color Scheme v2',
    },
    read: true,
  },
  {
    id: '6',
    type: 'share',
    title: 'Shared project link',
    description: 'Shared the project with stakeholders',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    user: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      role: 'Project Manager',
    },
    target: {
      id: 'proj1',
      type: 'project',
      name: 'Website Redesign',
    },
    read: true,
  },
  {
    id: '7',
    type: 'login',
    title: 'Logged in',
    description: 'Started a new work session',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    user: {
      id: 'user3',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      role: 'Client',
    },
    read: true,
    metadata: {
      ip_address: '192.168.1.100',
      device: 'MacBook Pro',
    },
  },
];

const sampleUserFilters = [
  {
    id: 'user1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    role: 'Project Manager',
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    role: 'Designer',
  },
  {
    id: 'user3',
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    role: 'Client',
  },
];

const sampleTypeFilters = ['create', 'update', 'comment', 'upload', 'like', 'share', 'login'];

export const Default: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    permissions: [],
    grouped: false,
    showAvatars: true,
    showTimestamps: true,
    infiniteScroll: false,
  },
};

export const Loading: Story = {
  args: {
    activities: [],
    loading: true,
    context: 'neutral',
  },
};

export const Empty: Story = {
  args: {
    activities: [],
    loading: false,
    context: 'neutral',
  },
};

export const Grouped: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
  },
};

export const WithFilters: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'consultant',
    userFilters: sampleUserFilters,
    typeFilters: sampleTypeFilters,
    grouped: false,
    showAvatars: true,
    showTimestamps: true,
  },
};

export const RealTimeUpdates: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    realTimeUpdates: true,
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
  },
};

export const InfiniteScroll: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    infiniteScroll: true,
    hasMore: true,
    grouped: false,
    showAvatars: true,
    showTimestamps: true,
    onLoadMore: () => {
      console.log('Loading more activities...');
    },
  },
};

export const ConsultantContext: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'consultant',
    permissions: ['view_all_activities'],
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
  },
};

export const ClientContext: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'client',
    permissions: [],
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
  },
};

export const Compact: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: false,
    showAvatars: false,
    showTimestamps: false,
    maxHeight: '400px',
  },
};

export const WithMaxHeight: Story = {
  args: {
    activities: [...sampleActivities, ...sampleActivities, ...sampleActivities], // Triple the activities
    loading: false,
    context: 'neutral',
    grouped: true,
    maxHeight: '500px',
    showAvatars: true,
    showTimestamps: true,
  },
};

export const Interactive: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    userFilters: sampleUserFilters,
    typeFilters: sampleTypeFilters,
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
    onActivityClick: (activity) => {
      console.log('Activity clicked:', activity);
      alert(`Clicked on: ${activity.title}`);
    },
    onUserClick: (user) => {
      console.log('User clicked:', user);
      alert(`Clicked on user: ${user.name}`);
    },
    onFilterChange: (filters) => {
      console.log('Filters changed:', filters);
    },
  },
};

export const UnreadOnly: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
    // Pre-filter to show only unread activities
    onFilterChange: (filters) => {
      console.log('Filters changed:', filters);
    },
  },
};

export const MixedWorkspaceContexts: Story = {
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'admin',
    permissions: ['view_all_activities'],
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
  },
};
