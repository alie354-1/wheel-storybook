/**
 * CommentThread Stories
 *
 * Storybook stories for the CommentThread component demonstrating
 * various comment scenarios and workspace contexts.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Comment, User } from '../types';
import { CommentThread } from './CommentThread';

// Simple action function for stories
const action = (name: string) => (...args: any[]) => {
  console.log(`${name}:`, ...args);
};

// Mock users
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150',
    status: 'online',
    role: 'consultant',
    workspace: 'consultant-workspace'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@client.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    status: 'online',
    role: 'client',
    workspace: 'client-workspace'
  },
  {
    id: '3',
    name: 'Alex Rivera',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    status: 'away',
    role: 'expert',
    workspace: 'expert-workspace'
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma@admin.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    status: 'online',
    role: 'admin',
    workspace: 'admin-workspace'
  }
];

// Mock comments
const mockComments: Comment[] = [
  {
    id: '1',
    content: 'This looks great! I really like the direction we\'re taking with the new design. The color scheme works well with our brand guidelines.',
    author: mockUsers[0],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    workspaceId: 'project-1',
    resolved: false,
    reactions: [
      {
        emoji: '👍',
        users: [mockUsers[1], mockUsers[2]],
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
      },
      {
        emoji: '❤️',
        users: [mockUsers[1]],
        timestamp: new Date(Date.now() - 30 * 60 * 1000)
      }
    ]
  },
  {
    id: '2',
    content: 'I have some concerns about the accessibility of this design. The contrast ratio might not meet WCAG guidelines. Can we review this?',
    author: mockUsers[2],
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    workspaceId: 'project-1',
    resolved: false,
    replies: [
      {
        id: '2-1',
        content: 'Good point! I\'ll run it through our accessibility checker and make adjustments.',
        author: mockUsers[0],
        parentId: '2',
        timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
        workspaceId: 'project-1',
        resolved: false
      },
      {
        id: '2-2',
        content: 'I can help with the accessibility review if needed. I have experience with WCAG compliance.',
        author: mockUsers[3],
        parentId: '2',
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        workspaceId: 'project-1',
        resolved: false
      }
    ]
  },
  {
    id: '3',
    content: 'The mobile responsiveness needs work. On smaller screens, the layout breaks. I\'ve attached some screenshots.',
    author: mockUsers[1],
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    workspaceId: 'project-1',
    resolved: true,
    resolvedBy: mockUsers[0],
    resolvedAt: new Date(Date.now() - 10 * 60 * 1000),
    attachments: [
      {
        id: 'att-1',
        name: 'mobile-layout-issue.png',
        type: 'image/png',
        size: 245760,
        url: '#',
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150'
      }
    ]
  },
  {
    id: '4',
    content: 'Can we schedule a quick call to discuss the timeline? I want to make sure we\'re aligned on deliverables.',
    author: mockUsers[1],
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    workspaceId: 'project-1',
    resolved: false,
    mentions: [mockUsers[0]]
  }
];

const meta: Meta<typeof CommentThread> = {
  title: 'Layouts/Communication/CommentThread',
  component: CommentThread,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive comment thread component that displays comments with replies, supports real-time updates, and provides full comment management functionality.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool_creator', 'founder', 'neutral'],
      description: 'Workspace context for theming'
    },
    allowReplies: {
      control: 'boolean',
      description: 'Allow users to reply to comments'
    },
    allowResolution: {
      control: 'boolean',
      description: 'Allow users to resolve comments'
    },
    allowEditing: {
      control: 'boolean',
      description: 'Allow users to edit their comments'
    },
    permissions: {
      control: 'object',
      description: 'User permissions for comment actions'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CommentThread>;

// Default story
export const Default: Story = {
  args: {
    comments: mockComments,
    parentId: 'project-1',
    parentType: 'project',
    currentUser: mockUsers[0],
    context: 'consultant',
    allowReplies: true,
    allowResolution: true,
    allowEditing: true,
    permissions: [
      'comment:create',
      'comment:edit',
      'comment:delete',
      'comment:resolve',
      'comment:react',
      'comment:reply'
    ],
    onCommentAdd: action('onCommentAdd'),
    onCommentReply: action('onCommentReply'),
    onCommentResolve: action('onCommentResolve'),
    onCommentEdit: action('onCommentEdit'),
    onCommentDelete: action('onCommentDelete'),
    onCommentReact: action('onCommentReact')
  }
};

// Empty state
export const EmptyState: Story = {
  args: {
    ...Default.args,
    comments: []
  }
};

// Client context
export const ClientContext: Story = {
  args: {
    ...Default.args,
    currentUser: mockUsers[1],
    context: 'client'
  }
};

// Admin context
export const AdminContext: Story = {
  args: {
    ...Default.args,
    currentUser: mockUsers[3],
    context: 'admin'
  }
};

// Expert context
export const ExpertContext: Story = {
  args: {
    ...Default.args,
    currentUser: mockUsers[2],
    context: 'expert'
  }
};

// Limited permissions
export const LimitedPermissions: Story = {
  args: {
    ...Default.args,
    currentUser: mockUsers[1],
    permissions: ['comment:create', 'comment:react'],
    allowReplies: false,
    allowResolution: false,
    allowEditing: false
  }
};

// Read-only mode
export const ReadOnly: Story = {
  args: {
    ...Default.args,
    permissions: [],
    allowReplies: false,
    allowResolution: false,
    allowEditing: false
  }
};

// Single comment thread
export const SingleComment: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[0]]
  }
};

// Comment with replies
export const CommentWithReplies: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[1]]
  }
};

// Resolved comments only
export const ResolvedComments: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[2]]
  }
};

// Comments with attachments
export const CommentsWithAttachments: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[2]]
  }
};

// Comments with mentions
export const CommentsWithMentions: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[3]]
  }
};

// Comments with reactions
export const CommentsWithReactions: Story = {
  args: {
    ...Default.args,
    comments: [mockComments[0]]
  }
};

// Long comment thread
export const LongThread: Story = {
  args: {
    ...Default.args,
    comments: [
      ...mockComments,
      {
        id: '5',
        content: 'I\'ve updated the design based on the feedback. Please take a look and let me know what you think.',
        author: mockUsers[0],
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        workspaceId: 'project-1',
        resolved: false
      },
      {
        id: '6',
        content: 'The new version looks much better! The accessibility issues have been addressed.',
        author: mockUsers[2],
        timestamp: new Date(Date.now() - 3 * 60 * 1000),
        workspaceId: 'project-1',
        resolved: false,
        reactions: [
          {
            emoji: '✅',
            users: [mockUsers[0], mockUsers[1]],
            timestamp: new Date(Date.now() - 2 * 60 * 1000)
          }
        ]
      }
    ]
  }
};

// Different workspace contexts showcase
export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Consultant Context</h3>
        <CommentThread
          comments={[mockComments[0]]}
          parentId="project-1"
          parentType="project"
          currentUser={mockUsers[0]}
          context="consultant"
          permissions={['comment:create', 'comment:react']}
          onCommentAdd={action('consultant-add')}
          onCommentReact={action('consultant-react')}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Client Context</h3>
        <CommentThread
          comments={[mockComments[1]]}
          parentId="project-1"
          parentType="project"
          currentUser={mockUsers[1]}
          context="client"
          permissions={['comment:create', 'comment:react']}
          onCommentAdd={action('client-add')}
          onCommentReact={action('client-react')}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Context</h3>
        <CommentThread
          comments={[mockComments[2]]}
          parentId="project-1"
          parentType="project"
          currentUser={mockUsers[3]}
          context="admin"
          permissions={['comment:create', 'comment:resolve', 'comment:delete']}
          onCommentAdd={action('admin-add')}
          onCommentResolve={action('admin-resolve')}
          onCommentDelete={action('admin-delete')}
        />
      </div>
    </div>
  )
};

// Interactive demo
export const InteractiveDemo: Story = {
  args: {
    ...Default.args,
    comments: mockComments.slice(0, 2)
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing full comment functionality including adding, replying, resolving, and reacting to comments.'
      }
    }
  }
};
