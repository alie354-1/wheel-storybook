import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart, Bell, FileText, Home, Settings, Users } from 'lucide-react';
import { TabNavigation } from './TabNavigation';

const meta: Meta<typeof TabNavigation> = {
  title: 'Layouts/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible tab navigation component with workspace context support, scrolling, lazy loading, and permission-based filtering.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for theming',
    },
    variant: {
      control: 'select',
      options: ['line', 'card', 'pill'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs',
    },
    scrollable: {
      control: 'boolean',
      description: 'Enable horizontal scrolling for overflow tabs',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
    },
    lazy: {
      control: 'boolean',
      description: 'Enable lazy loading of tab content',
    },
    showContent: {
      control: 'boolean',
      description: 'Show tab panel content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabNavigation>;

// Sample tab data
const basicTabs = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <Home className="h-4 w-4" />,
    content: <div className="p-4 bg-gray-50 rounded-lg">Overview content goes here...</div>,
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="h-4 w-4" />,
    badge: 3,
    content: <div className="p-4 bg-gray-50 rounded-lg">Documents content with 3 new items...</div>,
  },
  {
    id: 'team',
    label: 'Team',
    icon: <Users className="h-4 w-4" />,
    content: <div className="p-4 bg-gray-50 rounded-lg">Team management content...</div>,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <BarChart className="h-4 w-4" />,
    content: <div className="p-4 bg-gray-50 rounded-lg">Analytics dashboard content...</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    content: <div className="p-4 bg-gray-50 rounded-lg">Settings configuration...</div>,
  },
];

const manyTabs = [
  ...basicTabs,
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="h-4 w-4" />,
    badge: 12,
    content: <div className="p-4 bg-gray-50 rounded-lg">Notifications content...</div>,
  },
  {
    id: 'billing',
    label: 'Billing',
    content: <div className="p-4 bg-gray-50 rounded-lg">Billing information...</div>,
  },
  {
    id: 'integrations',
    label: 'Integrations',
    content: <div className="p-4 bg-gray-50 rounded-lg">Third-party integrations...</div>,
  },
  {
    id: 'security',
    label: 'Security',
    content: <div className="p-4 bg-gray-50 rounded-lg">Security settings...</div>,
  },
  {
    id: 'api',
    label: 'API Access',
    content: <div className="p-4 bg-gray-50 rounded-lg">API configuration...</div>,
  },
];

const permissionTabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home className="h-4 w-4" />,
    content: <div className="p-4 bg-gray-50 rounded-lg">Dashboard content...</div>,
  },
  {
    id: 'users',
    label: 'User Management',
    icon: <Users className="h-4 w-4" />,
    permission: 'admin',
    content: <div className="p-4 bg-gray-50 rounded-lg">User management (admin only)...</div>,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: <BarChart className="h-4 w-4" />,
    permission: 'reports',
    content: <div className="p-4 bg-gray-50 rounded-lg">Reports content...</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    permission: 'admin',
    content: <div className="p-4 bg-gray-50 rounded-lg">Settings (admin only)...</div>,
  },
];

const closableTabs = [
  {
    id: 'file1',
    label: 'Document.pdf',
    icon: <FileText className="h-4 w-4" />,
    closable: true,
    content: <div className="p-4 bg-gray-50 rounded-lg">Document.pdf content...</div>,
  },
  {
    id: 'file2',
    label: 'Spreadsheet.xlsx',
    closable: true,
    content: <div className="p-4 bg-gray-50 rounded-lg">Spreadsheet.xlsx content...</div>,
  },
  {
    id: 'file3',
    label: 'Presentation.pptx',
    closable: true,
    content: <div className="p-4 bg-gray-50 rounded-lg">Presentation.pptx content...</div>,
  },
];

export const Default: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
};

export const WorkspaceContexts: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Consultant Context</h3>
        <TabNavigation {...args} context="consultant" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Client Context</h3>
        <TabNavigation {...args} context="client" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Context</h3>
        <TabNavigation {...args} context="admin" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Expert Context</h3>
        <TabNavigation {...args} context="expert" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: false,
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Line Variant (Default)</h3>
        <TabNavigation {...args} variant="line" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Variant</h3>
        <TabNavigation {...args} variant="card" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Pill Variant</h3>
        <TabNavigation {...args} variant="pill" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: false,
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Size</h3>
        <TabNavigation {...args} size="sm" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Size (Default)</h3>
        <TabNavigation {...args} size="md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size</h3>
        <TabNavigation {...args} size="lg" />
      </div>
    </div>
  ),
};

export const ScrollableTabs: Story = {
  args: {
    tabs: manyTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    scrollable: true,
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'When there are many tabs, horizontal scrolling is enabled with navigation buttons.',
      },
    },
  },
};

export const PermissionBasedTabs: Story = {
  args: {
    tabs: permissionTabs,
    permissions: ['admin', 'reports'],
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be filtered based on user permissions. Only tabs with matching permissions are shown.',
      },
    },
  },
};

export const ClosableTabs: Story = {
  args: {
    tabs: closableTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    onTabClose: (tab) => console.log('Tab closed:', tab),
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be made closable with close buttons. Useful for document editors or dynamic content.',
      },
    },
  },
};

export const LazyLoading: Story = {
  args: {
    tabs: [
      {
        id: 'instant',
        label: 'Instant Load',
        content: <div className="p-4 bg-green-50 rounded-lg">This content loads immediately</div>,
      },
      {
        id: 'lazy1',
        label: 'Lazy Tab 1',
        lazy: true,
        content: <div className="p-4 bg-blue-50 rounded-lg">This content loads only when tab is first activated</div>,
      },
      {
        id: 'lazy2',
        label: 'Lazy Tab 2',
        lazy: true,
        content: <div className="p-4 bg-purple-50 rounded-lg">This content also loads lazily</div>,
      },
    ],
    lazy: true,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab content can be loaded lazily to improve initial performance. Content is only rendered when the tab is first activated.',
      },
    },
  },
};

export const WithBadges: Story = {
  args: {
    tabs: [
      {
        id: 'inbox',
        label: 'Inbox',
        badge: 5,
        content: <div className="p-4 bg-gray-50 rounded-lg">Inbox with 5 unread messages</div>,
      },
      {
        id: 'notifications',
        label: 'Notifications',
        badge: 23,
        content: <div className="p-4 bg-gray-50 rounded-lg">23 new notifications</div>,
      },
      {
        id: 'alerts',
        label: 'Alerts',
        badge: 150,
        content: <div className="p-4 bg-gray-50 rounded-lg">150+ alerts (shows as 99+)</div>,
      },
      {
        id: 'archive',
        label: 'Archive',
        content: <div className="p-4 bg-gray-50 rounded-lg">Archived items</div>,
      },
    ],
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can display badges to show counts or status. Badges over 99 are displayed as "99+".',
      },
    },
  },
};

export const DisabledTabs: Story = {
  args: {
    tabs: [
      {
        id: 'available',
        label: 'Available',
        content: <div className="p-4 bg-gray-50 rounded-lg">This tab is available</div>,
      },
      {
        id: 'disabled',
        label: 'Disabled',
        disabled: true,
        content: <div className="p-4 bg-gray-50 rounded-lg">This content won't show</div>,
      },
      {
        id: 'coming-soon',
        label: 'Coming Soon',
        disabled: true,
        content: <div className="p-4 bg-gray-50 rounded-lg">Feature coming soon</div>,
      },
    ],
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be disabled to prevent interaction while maintaining visual presence.',
      },
    },
  },
};

export const ResponsiveBehavior: Story = {
  args: {
    tabs: manyTabs,
    responsive: true,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'On smaller screens, tab labels are truncated and scrolling is enabled for better mobile experience.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: (tab) => console.log('Tab changed:', tab),
    showContent: true,
    className: 'border border-gray-200 rounded-lg p-4',
    tabListClassName: 'bg-gray-50 rounded-md p-1',
    tabPanelClassName: 'bg-white border border-gray-200 rounded-md p-6 mt-4',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab navigation can be customized with additional CSS classes for container, tab list, and tab panels.',
      },
    },
  },
};
