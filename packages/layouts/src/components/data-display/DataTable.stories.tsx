import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from './DataTable';
import { TableColumn } from './types';

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
  },
];

// Column definitions
const userColumns: TableColumn<User>[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
    filterable: true,
    width: 200,
  },
  {
    key: 'email',
    title: 'Email',
    sortable: true,
    filterable: true,
    width: 250,
  },
  {
    key: 'role',
    title: 'Role',
    sortable: true,
    filterable: true,
    width: 150,
  },
  {
    key: 'status',
    title: 'Status',
    sortable: true,
    filterable: true,
    width: 120,
    render: (value: string) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : value === 'inactive'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'lastLogin',
    title: 'Last Login',
    sortable: true,
    width: 150,
    render: (value: Date) => value.toLocaleDateString(),
  },
  {
    key: 'projects',
    title: 'Projects',
    sortable: true,
    width: 100,
    align: 'center',
  },
  {
    key: 'revenue',
    title: 'Revenue',
    sortable: true,
    width: 120,
    align: 'right',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

const projectColumns: TableColumn<Project>[] = [
  {
    key: 'name',
    title: 'Project Name',
    sortable: true,
    filterable: true,
    width: 200,
  },
  {
    key: 'client',
    title: 'Client',
    sortable: true,
    filterable: true,
    width: 150,
  },
  {
    key: 'status',
    title: 'Status',
    sortable: true,
    filterable: true,
    width: 120,
    render: (value: string) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value === 'active'
            ? 'bg-blue-100 text-blue-800'
            : value === 'completed'
            ? 'bg-green-100 text-green-800'
            : value === 'planning'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'progress',
    title: 'Progress',
    sortable: true,
    width: 150,
    render: (value: number) => (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
        <span className="text-xs text-gray-600 ml-2">{value}%</span>
      </div>
    ),
  },
  {
    key: 'budget',
    title: 'Budget',
    sortable: true,
    width: 120,
    align: 'right',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: 'team',
    title: 'Team Size',
    width: 100,
    align: 'center',
    render: (value: string[]) => value.length,
  },
];

const meta: Meta<typeof DataTable<any>> = {
  title: 'Layouts/Data Display/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A comprehensive data table component with advanced features including:

- **Sorting & Filtering**: Column-based sorting and search functionality
- **Selection**: Single or multi-row selection with bulk actions
- **Pagination**: Built-in pagination with customizable page sizes
- **Virtual Scrolling**: Performance optimization for large datasets
- **Workspace Context**: Adaptive styling based on user role
- **Responsive Design**: Mobile-friendly with horizontal scrolling
- **Accessibility**: Full ARIA support and keyboard navigation
- **Export**: Data export functionality
- **Expandable Rows**: Nested content support

Perfect for displaying complex data sets in admin panels, dashboards, and data management interfaces.
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Table size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered'],
      description: 'Table visual variant',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Make header sticky on scroll',
    },
    exportable: {
      control: 'boolean',
      description: 'Enable export functionality',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

// Basic table
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'neutral',
    size: 'md',
    variant: 'default',
  },
};

// With workspace context
export const ConsultantContext: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'consultant',
    size: 'md',
  },
};

export const ClientContext: Story = {
  args: {
    data: sampleProjects,
    columns: projectColumns as any,
    context: 'client',
    size: 'md',
  },
};

// With selection
export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    selection: {
      enabled: true,
      type: 'checkbox',
      selectedKeys: ['1', '3'],
    },
    bulkActions: [
      {
        id: 'activate',
        label: 'Activate',
        variant: 'primary',
        onClick: (rows) => console.log('Activate:', rows),
      },
      {
        id: 'deactivate',
        label: 'Deactivate',
        variant: 'secondary',
        onClick: (rows) => console.log('Deactivate:', rows),
      },
      {
        id: 'delete',
        label: 'Delete',
        variant: 'danger',
        confirmMessage: 'Are you sure you want to delete selected users?',
        onClick: (rows) => console.log('Delete:', rows),
      },
    ],
  },
};

// With pagination
export const WithPagination: Story = {
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers], // Duplicate data for pagination demo
    columns: userColumns as any,
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 5,
      total: 15,
      showSizeChanger: true,
      showTotal: true,
    },
  },
};

// With filtering
export const WithFiltering: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    columns: userColumns as any,
    loading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns as any,
    loading: false,
  },
};

// Striped variant
export const Striped: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    variant: 'striped',
  },
};

// Bordered variant
export const Bordered: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    variant: 'bordered',
  },
};

// Small size
export const SmallSize: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    size: 'sm',
  },
};

// Large size
export const LargeSize: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    size: 'lg',
  },
};

// With sticky header
export const StickyHeader: Story = {
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    columns: userColumns as any,
    stickyHeader: true,
    maxHeight: 400,
  },
};

// With expandable rows
export const ExpandableRows: Story = {
  args: {
    data: sampleProjects,
    columns: projectColumns as any,
    expandable: {
      expandedRowRender: (project: any) => (
        <div className="p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">Project Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Start Date:</strong> {project.startDate.toLocaleDateString()}</p>
              <p><strong>End Date:</strong> {project.endDate.toLocaleDateString()}</p>
            </div>
            <div>
              <p><strong>Team Members:</strong></p>
              <ul className="list-disc list-inside">
                {project.team.map((member: string, index: number) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  },
};

// With export
export const WithExport: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    exportable: true,
    onExport: (data) => {
      console.log('Exporting data:', data);
      // In a real app, this would trigger a download
    },
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'admin',
    size: 'md',
    variant: 'striped',
    selection: {
      enabled: true,
      type: 'checkbox',
    },
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 3,
      total: sampleUsers.length,
      showSizeChanger: true,
      showTotal: true,
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
    },
    sorting: {
      field: 'name',
      direction: 'asc',
    },
    bulkActions: [
      {
        id: 'export-selected',
        label: 'Export Selected',
        variant: 'secondary',
        onClick: (rows) => console.log('Export selected:', rows),
      },
      {
        id: 'bulk-edit',
        label: 'Bulk Edit',
        variant: 'primary',
        onClick: (rows) => console.log('Bulk edit:', rows),
      },
    ],
    exportable: true,
    stickyHeader: true,
    responsive: true,
    onRowClick: (row) => console.log('Row clicked:', row),
    onExport: (data) => console.log('Export all:', data),
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
    columns: userColumns as any,
    virtualScrolling: {
      enabled: true,
      itemHeight: 48,
      overscan: 5,
    },
    maxHeight: 400,
  },
};
