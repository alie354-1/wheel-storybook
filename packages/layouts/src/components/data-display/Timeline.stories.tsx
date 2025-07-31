import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from './Timeline';
import { TimelineEvent } from './types';

const meta: Meta<typeof Timeline> = {
  title: 'Layouts/Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A timeline component for displaying chronological events with filtering and grouping capabilities.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for theming and permissions',
    },
    groupBy: {
      control: 'select',
      options: ['date', 'type', 'user', 'none'],
      description: 'How to group timeline events',
    },
    realTimeUpdates: {
      control: 'boolean',
      description: 'Enable real-time updates indicator',
    },
    showTime: {
      control: 'boolean',
      description: 'Show timestamps for events',
    },
    showUser: {
      control: 'boolean',
      description: 'Show user information for events',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// Sample data
const sampleEvents: TimelineEvent[] = [
  {
    id: '1',
    type: 'create',
    title: 'Project Created',
    description: 'New project "Website Redesign" was created',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    user: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    status: 'completed',
    metadata: {
      project_id: 'proj_123',
      budget: '$50,000',
    },
  },
  {
    id: '2',
    type: 'update',
    title: 'Task Updated',
    description: 'Design mockups task was updated with new requirements',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    user: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    },
    status: 'pending',
    workspaceContext: 'consultant',
  },
  {
    id: '3',
    type: 'comment',
    title: 'Comment Added',
    description: 'Added feedback on the initial wireframes',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    user: {
      id: 'user3',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    },
    status: 'completed',
    workspaceContext: 'client',
  },
  {
    id: '4',
    type: 'delete',
    title: 'File Deleted',
    description: 'Removed outdated design file',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    user: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    status: 'failed',
    icon: '🗑️',
    color: '#ef4444',
  },
  {
    id: '5',
    type: 'milestone',
    title: 'Milestone Reached',
    description: 'Phase 1 of the project has been completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    user: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    },
    status: 'completed',
    icon: '🎯',
    color: '#10b981',
  },
];

const sampleFilters = [
  { key: 'user1', label: 'John Doe', value: 'user1', type: 'user' as const },
  { key: 'user2', label: 'Jane Smith', value: 'user2', type: 'user' as const },
  { key: 'create', label: 'Created', value: 'create', type: 'type' as const },
  { key: 'update', label: 'Updated', value: 'update', type: 'type' as const },
  { key: 'completed', label: 'Completed', value: 'completed', type: 'status' as const },
  { key: 'pending', label: 'Pending', value: 'pending', type: 'status' as const },
];

export const Default: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    permissions: [],
    groupBy: 'date',
    showTime: true,
    showUser: true,
    responsive: true,
  },
};

export const Loading: Story = {
  args: {
    events: [],
    loading: true,
    context: 'neutral',
  },
};

export const Empty: Story = {
  args: {
    events: [],
    loading: false,
    context: 'neutral',
  },
};

export const WithFilters: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'consultant',
    filtering: sampleFilters,
    groupBy: 'date',
    showTime: true,
    showUser: true,
  },
};

export const GroupedByType: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'type',
    showTime: true,
    showUser: true,
  },
};

export const GroupedByUser: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'user',
    showTime: true,
    showUser: true,
  },
};

export const NoGrouping: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'none',
    showTime: true,
    showUser: true,
  },
};

export const RealTimeUpdates: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    realTimeUpdates: true,
    groupBy: 'date',
    showTime: true,
    showUser: true,
  },
};

export const ConsultantContext: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'consultant',
    permissions: ['view_all_events'],
    groupBy: 'date',
    showTime: true,
    showUser: true,
  },
};

export const ClientContext: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'client',
    permissions: [],
    groupBy: 'date',
    showTime: true,
    showUser: true,
  },
};

export const Compact: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    showTime: false,
    showUser: false,
    maxHeight: '400px',
  },
};

export const WithMaxHeight: Story = {
  args: {
    events: [...sampleEvents, ...sampleEvents, ...sampleEvents], // Triple the events
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    maxHeight: '500px',
    showTime: true,
    showUser: true,
  },
};

export const Interactive: Story = {
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    filtering: sampleFilters,
    showTime: true,
    showUser: true,
    onEventClick: (event) => {
      console.log('Event clicked:', event);
      alert(`Clicked on: ${event.title}`);
    },
    onFilterChange: (filters) => {
      console.log('Filters changed:', filters);
    },
  },
};
