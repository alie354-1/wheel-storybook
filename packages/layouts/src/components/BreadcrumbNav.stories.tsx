import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileText, Folder, Settings } from 'lucide-react';
import { BreadcrumbItem, BreadcrumbNav } from './BreadcrumbNav';

// Mock action function for stories
const action = (name: string) => (...args: any[]) => {
  console.log(`Action: ${name}`, args);
};

const meta: Meta<typeof BreadcrumbNav> = {
  title: 'Layouts/BreadcrumbNav',
  component: BreadcrumbNav,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A workspace-aware breadcrumb navigation component that provides hierarchical navigation with context-specific styling and responsive behavior.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context that affects styling and behavior',
    },
    maxItems: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Maximum number of breadcrumb items to display before truncation',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior for mobile devices',
    },
    showHome: {
      control: 'boolean',
      description: 'Show home icon at the beginning of breadcrumbs',
    },
    generateFromPath: {
      control: 'boolean',
      description: 'Generate breadcrumbs from current path (future feature)',
    },
    workspaceScoped: {
      control: 'boolean',
      description: 'Scope breadcrumbs to current workspace context',
    },
  },
  args: {
    context: 'neutral',
    maxItems: 5,
    responsive: true,
    showHome: true,
    generateFromPath: false,
    workspaceScoped: false,
    onItemClick: action('breadcrumb-clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbNav>;

// Sample breadcrumb data
const sampleItems: BreadcrumbItem[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    path: '/workspace',
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/workspace/projects',
    icon: <Folder className="h-4 w-4" />,
  },
  {
    id: 'project-alpha',
    label: 'Project Alpha',
    path: '/workspace/projects/alpha',
  },
  {
    id: 'documents',
    label: 'Documents',
    path: '/workspace/projects/alpha/documents',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 'current-doc',
    label: 'Current Document.pdf',
    path: '/workspace/projects/alpha/documents/current-doc.pdf',
  },
];

const shortItems: BreadcrumbItem[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    path: '/workspace',
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/workspace/settings',
    icon: <Settings className="h-4 w-4" />,
  },
];

const longItems: BreadcrumbItem[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    path: '/workspace',
  },
  {
    id: 'clients',
    label: 'Clients',
    path: '/workspace/clients',
  },
  {
    id: 'client-acme',
    label: 'ACME Corporation',
    path: '/workspace/clients/acme',
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/workspace/clients/acme/projects',
  },
  {
    id: 'project-beta',
    label: 'Project Beta - Q4 Initiative',
    path: '/workspace/clients/acme/projects/beta',
  },
  {
    id: 'deliverables',
    label: 'Deliverables',
    path: '/workspace/clients/acme/projects/beta/deliverables',
  },
  {
    id: 'reports',
    label: 'Reports',
    path: '/workspace/clients/acme/projects/beta/deliverables/reports',
  },
  {
    id: 'final-report',
    label: 'Final Report - December 2024.pdf',
    path: '/workspace/clients/acme/projects/beta/deliverables/reports/final-report.pdf',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const ConsultantContext: Story = {
  args: {
    context: 'consultant',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with consultant workspace context styling.',
      },
    },
  },
};

export const ClientContext: Story = {
  args: {
    context: 'client',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with client workspace context styling.',
      },
    },
  },
};

export const ExpertContext: Story = {
  args: {
    context: 'expert',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with expert workspace context styling.',
      },
    },
  },
};

export const FounderContext: Story = {
  args: {
    context: 'founder',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with founder workspace context styling.',
      },
    },
  },
};

export const ShortPath: Story = {
  args: {
    items: shortItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a short path that doesn\'t require truncation.',
      },
    },
  },
};

export const LongPathTruncated: Story = {
  args: {
    items: longItems,
    maxItems: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a long path that gets truncated with ellipsis.',
      },
    },
  },
};

export const WithoutHome: Story = {
  args: {
    items: sampleItems,
    showHome: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation without the home icon.',
      },
    },
  },
};

export const CustomSeparator: Story = {
  args: {
    items: sampleItems,
    separator: <span className="text-gray-400 mx-1">→</span>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a custom separator.',
      },
    },
  },
};

export const NonResponsive: Story = {
  args: {
    items: sampleItems,
    responsive: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with responsive behavior disabled.',
      },
    },
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        id: 'workspace',
        label: 'Workspace',
        path: '/workspace',
      },
      {
        id: 'archived',
        label: 'Archived Projects',
        disabled: true,
      },
      {
        id: 'project-old',
        label: 'Old Project',
        path: '/workspace/archived/old-project',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with some disabled items.',
      },
    },
  },
};

export const MixedContextItems: Story = {
  args: {
    context: 'consultant',
    items: [
      {
        id: 'workspace',
        label: 'Workspace',
        path: '/workspace',
        workspaceContext: 'consultant',
      },
      {
        id: 'shared',
        label: 'Shared Area',
        path: '/shared',
        workspaceContext: 'neutral',
      },
      {
        id: 'client-area',
        label: 'Client Portal',
        path: '/shared/client',
        workspaceContext: 'client',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with items having different workspace contexts.',
      },
    },
  },
};

// Responsive testing stories
export const MobileView: Story = {
  args: {
    items: longItems,
    maxItems: 3,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Breadcrumb navigation optimized for mobile viewport with truncated labels.',
      },
    },
  },
};

export const TabletView: Story = {
  args: {
    items: sampleItems,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Breadcrumb navigation on tablet viewport.',
      },
    },
  },
};

// Interactive examples
export const InteractiveExample: Story = {
  args: {
    items: sampleItems,
    context: 'consultant',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb navigation. Click on any breadcrumb item to see the action in the Actions panel.',
      },
    },
  },
};

export const AllContexts: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Consultant Context</h3>
        <BreadcrumbNav context="consultant" items={sampleItems} onItemClick={action('consultant-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Client Context</h3>
        <BreadcrumbNav context="client" items={sampleItems} onItemClick={action('client-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Admin Context</h3>
        <BreadcrumbNav context="admin" items={sampleItems} onItemClick={action('admin-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Expert Context</h3>
        <BreadcrumbNav context="expert" items={sampleItems} onItemClick={action('expert-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Tool Creator Context</h3>
        <BreadcrumbNav context="tool-creator" items={sampleItems} onItemClick={action('tool-creator-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Founder Context</h3>
        <BreadcrumbNav context="founder" items={sampleItems} onItemClick={action('founder-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Neutral Context</h3>
        <BreadcrumbNav context="neutral" items={sampleItems} onItemClick={action('neutral-click')} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of breadcrumb navigation across all workspace contexts.',
      },
    },
  },
};
