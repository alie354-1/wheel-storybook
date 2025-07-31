import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Badge, Card } from '@wheel/ui';
import React from 'react';
import { DataGrid } from './DataGrid';

// Sample data types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: Date;
  projects: number;
  revenue: number;
  avatar?: string;
}

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  progress: number;
  startDate: Date;
  endDate: Date;
  budget: number;
  team: string[];
  description: string;
}

// Sample data
const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Senior Developer',
    status: 'active',
    lastLogin: new Date('2024-01-15'),
    projects: 3,
    revenue: 125000,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Project Manager',
    status: 'active',
    lastLogin: new Date('2024-01-14'),
    projects: 5,
    revenue: 180000,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Designer',
    status: 'inactive',
    lastLogin: new Date('2024-01-10'),
    projects: 2,
    revenue: 95000,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Developer',
    status: 'pending',
    lastLogin: new Date('2024-01-12'),
    projects: 1,
    revenue: 75000,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Consultant',
    status: 'active',
    lastLogin: new Date('2024-01-16'),
    projects: 4,
    revenue: 200000,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'UX Designer',
    status: 'active',
    lastLogin: new Date('2024-01-17'),
    projects: 3,
    revenue: 140000,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face',
  },
];

const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    client: 'Acme Corp',
    status: 'active',
    progress: 75,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-03-01'),
    budget: 50000,
    team: ['John Doe', 'Jane Smith'],
    description: 'Complete redesign of the corporate website with modern UI/UX principles.',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'Tech Startup',
    status: 'planning',
    progress: 25,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-06-01'),
    budget: 120000,
    team: ['Bob Johnson', 'Alice Brown'],
    description: 'Native mobile application for iOS and Android platforms.',
  },
  {
    id: '3',
    name: 'E-commerce Platform',
    client: 'Retail Giant',
    status: 'completed',
    progress: 100,
    startDate: new Date('2023-10-01'),
    endDate: new Date('2024-01-01'),
    budget: 200000,
    team: ['Charlie Wilson', 'John Doe', 'Jane Smith'],
    description: 'Full-featured e-commerce platform with payment integration.',
  },
  {
    id: '4',
    name: 'Data Analytics Dashboard',
    client: 'Finance Corp',
    status: 'active',
    progress: 60,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-04-15'),
    budget: 80000,
    team: ['Diana Prince', 'Charlie Wilson'],
    description: 'Real-time analytics dashboard for financial data visualization.',
  },
];

// Card components
const UserCardComponent: React.FC<{
  item: User;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}> = ({ item, context, selected, onSelect }) => (
  <Card className={`p-4 h-full ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center space-x-3">
        <Avatar
          src={item.avatar}
          alt={item.name}
          size="md"
          fallback={item.name.split(' ').map(n => n[0]).join('')}
        />
        <div>
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.role}</p>
        </div>
      </div>
      {onSelect && (
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      )}
    </div>

    <div className="space-y-2 mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Status</span>
        <Badge
          variant={item.status === 'active' ? 'success' : item.status === 'inactive' ? 'error' : 'warning'}
        >
          {item.status}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Projects</span>
        <span className="text-sm font-medium">{item.projects}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Revenue</span>
        <span className="text-sm font-medium">${item.revenue.toLocaleString()}</span>
      </div>
    </div>

    <div className="text-xs text-gray-500">
      Last login: {item.lastLogin.toLocaleDateString()}
    </div>
  </Card>
);

const ProjectCardComponent: React.FC<{
  item: Project;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}> = ({ item, context, selected, onSelect }) => (
  <Card className={`p-4 h-full ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.client}</p>
      </div>
      {onSelect && (
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      )}
    </div>

    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{item.description}</p>

    <div className="space-y-3 mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Status</span>
        <Badge
          variant={
            item.status === 'completed' ? 'success' :
            item.status === 'active' ? 'primary' :
            item.status === 'planning' ? 'warning' : 'secondary'
          }
        >
          {item.status}
        </Badge>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium">{item.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Budget</span>
        <span className="text-sm font-medium">${item.budget.toLocaleString()}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Team</span>
        <span className="text-sm font-medium">{item.team.length} members</span>
      </div>
    </div>

    <div className="text-xs text-gray-500">
      {item.startDate.toLocaleDateString()} - {item.endDate.toLocaleDateString()}
    </div>
  </Card>
);

// Type-safe wrapper components for DataGrid
const UserCard: React.ComponentType<{
  item: Record<string, any>;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}> = ({ item, context, selected, onSelect }) => (
  <UserCardComponent
    item={item as User}
    context={context}
    selected={selected}
    onSelect={onSelect}
  />
);

const ProjectCard: React.ComponentType<{
  item: Record<string, any>;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}> = ({ item, context, selected, onSelect }) => (
  <ProjectCardComponent
    item={item as Project}
    context={context}
    selected={selected}
    onSelect={onSelect}
  />
);

const meta: Meta<typeof DataGrid<any>> = {
  title: 'Layouts/Data Display/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible data grid component for displaying data in card-based layouts with advanced features:

- **Responsive Grid**: Auto-fit columns based on container width
- **Virtual Scrolling**: Performance optimization for large datasets
- **Infinite Scroll**: Load more data as user scrolls
- **Selection**: Single or multi-item selection with bulk actions
- **Filtering & Search**: Built-in search and filtering capabilities
- **Workspace Context**: Adaptive styling based on user role
- **Custom Cards**: Flexible card component system
- **Pagination**: Traditional pagination support

Perfect for dashboards, user directories, project galleries, and any card-based data display.
        `,
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for adaptive styling',
    },
    columns: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: 'Number of columns (or "auto" for responsive)',
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Gap between grid items',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
    infiniteScroll: {
      control: 'boolean',
      description: 'Enable infinite scrolling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Basic grid
export const Default: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'neutral',
    columns: 'auto',
    gap: 'md',
  },
};

// With workspace context
export const ConsultantContext: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'consultant',
    columns: 'auto',
    gap: 'md',
  },
};

export const ClientContext: Story = {
  args: {
    data: sampleProjects,
    cardComponent: ProjectCard,
    context: 'client',
    columns: 'auto',
    gap: 'md',
  },
};

// Fixed columns
export const TwoColumns: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 2,
    gap: 'md',
  },
};

export const ThreeColumns: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 3,
    gap: 'md',
  },
};

export const FourColumns: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 4,
    gap: 'sm',
  },
};

// Different gaps
export const SmallGap: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    gap: 'sm',
  },
};

export const LargeGap: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    gap: 'lg',
  },
};

// With selection
export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    selection: {
      enabled: true,
      type: 'checkbox',
      selectedKeys: ['1', '3'],
    },
    onItemClick: (item) => console.log('Item clicked:', item),
  },
};

// With filtering
export const WithFiltering: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
    },
  },
};

// With pagination
export const WithPagination: Story = {
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers], // Duplicate data for pagination demo
    cardComponent: UserCard,
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 4,
      total: 18,
      showSizeChanger: true,
      showTotal: true,
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    cardComponent: UserCard,
    loading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    data: [],
    cardComponent: UserCard,
    loading: false,
  },
};

// Project cards
export const ProjectGrid: Story = {
  args: {
    data: sampleProjects,
    cardComponent: ProjectCard,
    context: 'admin',
    columns: 'auto',
    gap: 'md',
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search projects...',
    },
  },
};

// Virtual scrolling (for large datasets)
export const VirtualScrolling: Story = {
  args: {
    data: Array.from({ length: 1000 }, (_, i) => ({
      id: `${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Developer', 'Designer', 'Manager'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
      lastLogin: new Date(2024, 0, (i % 30) + 1),
      projects: Math.floor(Math.random() * 10),
      revenue: Math.floor(Math.random() * 200000),
    })),
    cardComponent: UserCard,
    virtualScrolling: {
      enabled: true,
      itemHeight: 200,
      overscan: 5,
    },
    columns: 'auto',
    gap: 'md',
  },
};

// Infinite scroll
export const InfiniteScroll: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    infiniteScroll: true,
    hasMore: true,
    onLoadMore: () => {
      console.log('Loading more items...');
      // In a real app, this would load more data
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
    },
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'admin',
    columns: 'auto',
    gap: 'md',
    selection: {
      enabled: true,
      type: 'checkbox',
      onSelectionChange: (keys, items) => {
        console.log('Selection changed:', keys, items);
      },
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
      onSearch: (term) => console.log('Search:', term),
    },
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 4,
      total: sampleUsers.length,
      showSizeChanger: true,
      showTotal: true,
      onPageChange: (page, pageSize) => {
        console.log('Page changed:', page, pageSize);
      },
    },
    onItemClick: (item) => console.log('Item clicked:', item),
    onItemDoubleClick: (item) => console.log('Item double-clicked:', item),
    responsive: true,
  },
};

// Different item heights
export const FixedHeight: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    itemHeight: 250,
    columns: 3,
    gap: 'md',
  },
};

// Responsive behavior
export const ResponsiveGrid: Story = {
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    responsive: true,
    columns: 'auto',
    gap: 'md',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
