import type { Meta, StoryObj } from "@storybook/react-vite";
import { User, Workspace } from '../types';
import { ChatInterface } from './ChatInterface';

const meta: Meta<typeof ChatInterface> = {
  title: 'Layouts/Communication/ChatInterface',
  component: ChatInterface,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive chat interface component with real-time messaging, file attachments, and workspace context support.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool_creator', 'founder', 'neutral'],
      description: 'Workspace context that affects styling and behavior'
    },
    showSidebar: {
      control: 'boolean',
      description: 'Whether to show the chat list sidebar'
    },
    showSearch: {
      control: 'boolean',
      description: 'Whether to show search functionality'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ChatInterface>;

// Mock data
const mockCurrentUser: User = {
  id: '1',
  name: 'Current User',
  email: 'current@example.com',
  avatar: '/avatars/current.jpg',
  status: 'online'
};

const mockWorkspace: Workspace = {
  id: 'workspace-1',
  name: 'Design Team',
  type: 'consultant',
  settings: {
    allowMessaging: true,
    allowComments: true,
    allowNotifications: true,
    encryption: true,
    retention: 30
  }
};

export const Default: Story = {
  args: {
    workspace: mockWorkspace,
    currentUser: mockCurrentUser,
    context: 'consultant',
    showSidebar: true,
    showSearch: true,
    permissions: ['chat:send', 'chat:read', 'chat:delete']
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

export const ExpertContext: Story = {
  args: {
    ...Default.args,
    context: 'expert'
  }
};

export const ToolCreatorContext: Story = {
  args: {
    ...Default.args,
    context: 'tool_creator'
  }
};

export const FounderContext: Story = {
  args: {
    ...Default.args,
    context: 'founder'
  }
};

export const NeutralContext: Story = {
  args: {
    ...Default.args,
    context: 'neutral'
  }
};

export const WithoutSidebar: Story = {
  args: {
    ...Default.args,
    showSidebar: false
  }
};

export const WithoutSearch: Story = {
  args: {
    ...Default.args,
    showSearch: false
  }
};

export const MinimalInterface: Story = {
  args: {
    ...Default.args,
    showSidebar: false,
    showSearch: false
  }
};

export const WithSpecificChat: Story = {
  args: {
    ...Default.args,
    chatId: '1'
  }
};

export const RestrictedPermissions: Story = {
  args: {
    ...Default.args,
    permissions: ['chat:read'] // Only read permission, no send
  }
};

export const InteractiveDemo: Story = {
  args: {
    ...Default.args,
    onMessageSend: (message) => {
      console.log('Message sent:', message);
    },
    onChatSelect: (chat) => {
      console.log('Chat selected:', chat);
    }
  }
};
