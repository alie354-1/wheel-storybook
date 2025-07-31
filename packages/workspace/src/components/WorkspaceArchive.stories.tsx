import type { Meta, StoryObj } from "@storybook/react-vite";
import WorkspaceArchive, { type Archive, type ArchiveData, type RetentionPolicy } from './WorkspaceArchive';

// Mock data
const mockPolicies: RetentionPolicy[] = [
  {
    id: 'policy-1',
    name: 'Standard Business',
    description: 'Standard retention policy for business workspaces',
    retentionPeriod: 365,
    autoDelete: true,
    compressionEnabled: true,
    encryptionRequired: false,
    workspaceTypes: ['business', 'client'],
    category: 'business'
  },
  {
    id: 'policy-2',
    name: 'Legal Compliance',
    description: 'Extended retention for legal compliance requirements',
    retentionPeriod: 2555, // 7 years
    autoDelete: false,
    compressionEnabled: true,
    encryptionRequired: true,
    workspaceTypes: ['legal', 'compliance'],
    category: 'legal'
  },
  {
    id: 'policy-3',
    name: 'Technical Archive',
    description: 'Short-term retention for technical workspaces',
    retentionPeriod: 90,
    autoDelete: true,
    compressionEnabled: false,
    encryptionRequired: false,
    workspaceTypes: ['development', 'testing'],
    category: 'technical'
  }
];

const mockArchives: Archive[] = [
  {
    id: 'archive-1',
    name: 'Q4 2024 Client Projects',
    description: 'Complete archive of all client projects from Q4 2024',
    createdAt: new Date('2024-12-31'),
    size: 2147483648, // 2GB
    type: 'full',
    status: 'active',
    retentionPolicy: mockPolicies[0],
    encryption: true,
    workspaceId: 'workspace-1',
    createdBy: 'admin@example.com',
    expiresAt: new Date('2025-12-31')
  },
  {
    id: 'archive-2',
    name: 'Legal Documents Backup',
    description: 'Archived legal documents and contracts',
    createdAt: new Date('2024-11-15'),
    size: 524288000, // 500MB
    type: 'incremental',
    status: 'archived',
    retentionPolicy: mockPolicies[1],
    encryption: true,
    workspaceId: 'workspace-1',
    createdBy: 'legal@example.com',
    expiresAt: new Date('2031-11-15')
  },
  {
    id: 'archive-3',
    name: 'Development Snapshots',
    description: 'Weekly development environment snapshots',
    createdAt: new Date('2024-10-01'),
    size: 1073741824, // 1GB
    type: 'incremental',
    status: 'deleted',
    retentionPolicy: mockPolicies[2],
    encryption: false,
    workspaceId: 'workspace-1',
    createdBy: 'dev@example.com'
  },
  {
    id: 'archive-4',
    name: 'Client Communications',
    description: 'Archived client emails and messages',
    createdAt: new Date('2024-09-15'),
    size: 314572800, // 300MB
    type: 'full',
    status: 'active',
    retentionPolicy: mockPolicies[0],
    encryption: true,
    workspaceId: 'workspace-1',
    createdBy: 'support@example.com',
    expiresAt: new Date('2025-09-15')
  }
];

const mockWorkspace = {
  id: 'workspace-1',
  name: 'Acme Corporation',
  type: 'business'
};

const meta: Meta<typeof WorkspaceArchive> = {
  title: 'Workspace/WorkspaceArchive',
  component: WorkspaceArchive,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive archive management component for workspace data retention, compliance, and recovery operations.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'neutral'],
      description: 'Workspace context that affects permissions and styling'
    },
    showPolicies: {
      control: 'boolean',
      description: 'Whether to show the retention policies tab'
    },
    showCompliance: {
      control: 'boolean',
      description: 'Whether to show the compliance monitoring tab'
    },
    permissions: {
      control: 'object',
      description: 'Array of permission strings for the current user'
    }
  }
};

export default meta;
type Story = StoryObj<typeof WorkspaceArchive>;

// Default story
export const Default: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
};

// Admin context with full permissions
export const AdminView: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: [
      'archive:create',
      'archive:restore',
      'archive:delete',
      'archive:manage_policies'
    ]
  }
};

// Client context with limited permissions
export const ClientView: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'client',
    showPolicies: false,
    showCompliance: false,
    permissions: ['archive:create']
  }
};

// Consultant context
export const ConsultantView: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'consultant',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore']
  }
};

// Empty state
export const EmptyState: Story = {
  args: {
    workspace: mockWorkspace,
    archives: [],
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
};

// Limited archives
export const LimitedArchives: Story = {
  args: {
    workspace: mockWorkspace,
    archives: [mockArchives[0]],
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
};

// No permissions
export const ReadOnlyView: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: []
  }
};

// Compliance focused
export const ComplianceFocused: Story = {
  args: {
    workspace: {
      ...mockWorkspace,
      name: 'Legal Firm LLC',
      type: 'legal'
    },
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: [
      'archive:create',
      'archive:restore',
      'archive:delete',
      'archive:manage_policies'
    ]
  }
};

// Interactive example with handlers
export const Interactive: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: [
      'archive:create',
      'archive:restore',
      'archive:delete',
      'archive:manage_policies'
    ],
    onArchiveCreate: (data: ArchiveData) => {
      console.log('Creating archive:', data);
      alert(`Archive "${data.name}" would be created`);
    },
    onArchiveRestore: (archive: Archive) => {
      console.log('Restoring archive:', archive);
      alert(`Archive "${archive.name}" would be restored`);
    },
    onArchiveDelete: (archive: Archive) => {
      console.log('Deleting archive:', archive);
      alert(`Archive "${archive.name}" would be deleted`);
    },
    onPolicyUpdate: (policy: RetentionPolicy) => {
      console.log('Updating policy:', policy);
      alert(`Policy "${policy.name}" would be updated`);
    }
  }
};

// Mobile responsive
export const Mobile: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

// Tablet responsive
export const Tablet: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

// Dark mode
export const DarkMode: Story = {
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Large dataset
export const LargeDataset: Story = {
  args: {
    workspace: mockWorkspace,
    archives: [
      ...mockArchives,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `archive-${i + 5}`,
        name: `Archive ${i + 5}`,
        description: `Generated archive ${i + 5} for testing`,
        createdAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
        size: Math.floor(Math.random() * 5000000000), // Random size up to 5GB
        type: (Math.random() > 0.5 ? 'full' : 'incremental') as 'full' | 'incremental',
        status: (['active', 'archived', 'deleted'][Math.floor(Math.random() * 3)]) as 'active' | 'archived' | 'deleted',
        retentionPolicy: mockPolicies[Math.floor(Math.random() * mockPolicies.length)],
        encryption: Math.random() > 0.5,
        workspaceId: 'workspace-1',
        createdBy: `user${i}@example.com`,
        expiresAt: Math.random() > 0.3 ? new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1) : undefined
      }))
    ],
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: [
      'archive:create',
      'archive:restore',
      'archive:delete',
      'archive:manage_policies'
    ]
  }
};
