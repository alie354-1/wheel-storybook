import type { Meta, StoryObj } from "@storybook/react-vite";
import type { VideoCallParticipant, VideoCallSession, VideoCallSettings } from './VideoCallInterface';
import { VideoCallInterface } from './VideoCallInterface';

const meta: Meta<typeof VideoCallInterface> = {
  title: 'Layouts/Communication/VideoCallInterface',
  component: VideoCallInterface,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced video call interface organism with participant management, call controls, screen sharing, recording, and workspace context integration.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for styling and behavior',
    },
    showControls: {
      control: 'boolean',
      description: 'Show call control buttons',
    },
    showParticipants: {
      control: 'boolean',
      description: 'Show participants list',
    },
    showChat: {
      control: 'boolean',
      description: 'Show chat interface',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoCallInterface>;

// Mock data
const mockParticipants: VideoCallParticipant[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150',
    role: 'host',
    status: 'connected',
    videoEnabled: true,
    audioEnabled: true,
    screenSharing: false,
    joinedAt: new Date(Date.now() - 300000),
    permissions: ['video:moderate', 'video:record', 'video:invite'],
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'participant',
    status: 'connected',
    videoEnabled: true,
    audioEnabled: false,
    screenSharing: false,
    joinedAt: new Date(Date.now() - 240000),
    permissions: [],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    role: 'participant',
    status: 'connected',
    videoEnabled: false,
    audioEnabled: true,
    screenSharing: false,
    joinedAt: new Date(Date.now() - 180000),
    permissions: [],
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    role: 'observer',
    status: 'connecting',
    videoEnabled: false,
    audioEnabled: false,
    screenSharing: false,
    joinedAt: new Date(Date.now() - 60000),
    permissions: [],
  },
];

const mockSettings: VideoCallSettings = {
  allowScreenShare: true,
  allowRecording: true,
  allowChat: true,
  requirePermissionToJoin: false,
  muteParticipantsOnJoin: false,
  enableWaitingRoom: false,
  maxDuration: 3600,
  quality: 'high',
};

const mockSession: VideoCallSession = {
  id: 'call-123',
  title: 'Project Strategy Meeting',
  type: 'meeting',
  status: 'active',
  startTime: new Date(Date.now() - 900000),
  participants: mockParticipants,
  maxParticipants: 10,
  recordingEnabled: false,
  workspace: 'acme-corp',
  settings: mockSettings,
};

const currentUser = mockParticipants[0];

// Stories
export const Default: Story = {
  args: {
    session: mockSession,
    currentUser,
    context: 'neutral',
    showControls: true,
    showParticipants: true,
    showChat: false,
  },
};

export const ConsultantContext: Story = {
  args: {
    ...Default.args,
    context: 'consultant',
  },
};

export const ClientContext: Story = {
  args: {
    ...Default.args,
    context: 'client',
  },
};

export const AdminContext: Story = {
  args: {
    ...Default.args,
    context: 'admin',
  },
};

export const ExpertContext: Story = {
  args: {
    ...Default.args,
    context: 'expert',
  },
};

export const ToolCreatorContext: Story = {
  args: {
    ...Default.args,
    context: 'tool-creator',
  },
};

export const FounderContext: Story = {
  args: {
    ...Default.args,
    context: 'founder',
  },
};

export const WithScreenSharing: Story = {
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      participants: mockParticipants.map((p, i) =>
        i === 1 ? { ...p, screenSharing: true } : p
      ),
    },
  },
};

export const WithRecording: Story = {
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'recording',
      recordingEnabled: true,
    },
  },
};

export const WaitingToStart: Story = {
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'waiting',
      participants: [currentUser],
    },
  },
};

export const LargeGroup: Story = {
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      participants: [
        ...mockParticipants,
        {
          id: '5',
          name: 'Alex Thompson',
          role: 'participant',
          status: 'connected',
          videoEnabled: true,
          audioEnabled: true,
          screenSharing: false,
          joinedAt: new Date(Date.now() - 120000),
          permissions: [],
        },
        {
          id: '6',
          name: 'Lisa Wang',
          role: 'participant',
          status: 'connected',
          videoEnabled: false,
          audioEnabled: true,
          screenSharing: false,
          joinedAt: new Date(Date.now() - 90000),
          permissions: [],
        },
        {
          id: '7',
          name: 'James Wilson',
          role: 'participant',
          status: 'connected',
          videoEnabled: true,
          audioEnabled: false,
          screenSharing: false,
          joinedAt: new Date(Date.now() - 45000),
          permissions: [],
        },
        {
          id: '8',
          name: 'Maria Garcia',
          role: 'participant',
          status: 'connected',
          videoEnabled: true,
          audioEnabled: true,
          screenSharing: false,
          joinedAt: new Date(Date.now() - 30000),
          permissions: [],
        },
      ],
    },
  },
};

export const ParticipantView: Story = {
  args: {
    ...Default.args,
    currentUser: mockParticipants[1],
    session: {
      ...mockSession,
      participants: mockParticipants,
    },
  },
};

export const ObserverView: Story = {
  args: {
    ...Default.args,
    currentUser: mockParticipants[3],
    session: {
      ...mockSession,
      participants: mockParticipants,
    },
  },
};

export const NoControls: Story = {
  args: {
    ...Default.args,
    showControls: false,
  },
};

export const NoParticipantsList: Story = {
  args: {
    ...Default.args,
    showParticipants: false,
  },
};

export const MinimalInterface: Story = {
  args: {
    ...Default.args,
    showControls: false,
    showParticipants: false,
    showChat: false,
  },
};

export const ConsultationCall: Story = {
  args: {
    ...Default.args,
    context: 'consultant',
    session: {
      ...mockSession,
      title: 'Client Consultation',
      type: 'consultation',
      participants: [
        {
          ...mockParticipants[0],
          name: 'Dr. Sarah Johnson',
          role: 'host',
        },
        {
          ...mockParticipants[1],
          name: 'John Smith',
          role: 'participant',
        },
      ],
    },
  },
};

export const InterviewCall: Story = {
  args: {
    ...Default.args,
    context: 'admin',
    session: {
      ...mockSession,
      title: 'Technical Interview',
      type: 'interview',
      participants: [
        {
          ...mockParticipants[0],
          name: 'HR Manager',
          role: 'host',
        },
        {
          ...mockParticipants[1],
          name: 'Candidate',
          role: 'participant',
        },
        {
          ...mockParticipants[2],
          name: 'Tech Lead',
          role: 'participant',
        },
      ],
    },
  },
};

export const PresentationMode: Story = {
  args: {
    ...Default.args,
    context: 'expert',
    session: {
      ...mockSession,
      title: 'Product Demo',
      type: 'presentation',
      participants: [
        {
          ...mockParticipants[0],
          name: 'Presenter',
          role: 'host',
          screenSharing: true,
        },
        ...mockParticipants.slice(1).map(p => ({
          ...p,
          role: 'observer' as const,
          videoEnabled: false,
          audioEnabled: false,
        })),
      ],
    },
  },
};

export const CallEnded: Story = {
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'ended',
      endTime: new Date(),
      duration: 1800,
    },
  },
};

export const WithInteractions: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    // This story can be used for interaction testing
    console.log('Video call interface loaded');
  },
};
