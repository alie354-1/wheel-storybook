import { Avatar, Badge, Button, Flex, Icon, Stack } from '@wheel/ui';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Import Text and Heading components directly
const Text = ({ children, size = 'md', className = '', ...props }: {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  [key: string]: any;
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  return <p className={`${sizeClasses[size]} ${className}`} {...props}>{children}</p>;
};

const Heading = ({ children, level = 1, className = '', ...props }: {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  [key: string]: any;
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const levelClasses = {
    1: 'text-3xl font-bold',
    2: 'text-2xl font-bold',
    3: 'text-xl font-semibold',
    4: 'text-lg font-semibold',
    5: 'text-base font-medium',
    6: 'text-sm font-medium',
  };
  return <Component className={`${levelClasses[level]} ${className}`} {...props}>{children}</Component>;
};

// Mock useWorkspace hook for now
const useWorkspace = () => ({
  hasPermission: (permission: string) => true
});

// Types
export interface VideoCallParticipant {
  id: string;
  name: string;
  avatar?: string;
  role: 'host' | 'participant' | 'observer';
  status: 'connected' | 'connecting' | 'disconnected' | 'muted';
  videoEnabled: boolean;
  audioEnabled: boolean;
  screenSharing: boolean;
  joinedAt: Date;
  permissions: string[];
}

export interface VideoCallSession {
  id: string;
  title: string;
  type: 'meeting' | 'consultation' | 'presentation' | 'interview';
  status: 'waiting' | 'active' | 'ended' | 'recording';
  startTime: Date;
  endTime?: Date;
  duration?: number;
  participants: VideoCallParticipant[];
  maxParticipants: number;
  recordingEnabled: boolean;
  recordingUrl?: string;
  workspace: string;
  settings: VideoCallSettings;
}

export interface VideoCallSettings {
  allowScreenShare: boolean;
  allowRecording: boolean;
  allowChat: boolean;
  requirePermissionToJoin: boolean;
  muteParticipantsOnJoin: boolean;
  enableWaitingRoom: boolean;
  maxDuration?: number;
  quality: 'low' | 'medium' | 'high' | 'auto';
}

export interface VideoCallAction {
  id: string;
  type: 'mute' | 'unmute' | 'video-on' | 'video-off' | 'screen-share' | 'end-call' | 'record' | 'invite';
  label: string;
  icon: any;
  enabled: boolean;
  visible: boolean;
}

export interface VideoCallInterfaceProps {
  session: VideoCallSession;
  currentUser: VideoCallParticipant;
  context?: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
  onParticipantAction?: (participantId: string, action: string) => void;
  onCallAction?: (action: VideoCallAction) => void;
  onScreenShare?: (enabled: boolean) => void;
  onRecordingToggle?: (enabled: boolean) => void;
  onParticipantInvite?: () => void;
  onCallEnd?: () => void;
  onSettingsChange?: (settings: VideoCallSettings) => void;
  showControls?: boolean;
  showParticipants?: boolean;
  showChat?: boolean;
  permissions?: string[];
  className?: string;
}

// Styled Components
const VideoCallContainer = React.forwardRef<HTMLDivElement, {
  context?: string;
  children: React.ReactNode;
  className?: string;
}>(({ context = 'neutral', children, className }, ref) => {
  const baseClasses = 'relative w-full h-full bg-gray-900 rounded-lg overflow-hidden';
  const contextClasses = {
    consultant: 'border-consultant-primary/20',
    client: 'border-client-primary/20',
    admin: 'border-admin-primary/20',
    expert: 'border-expert-primary/20',
    'tool-creator': 'border-tool-creator-primary/20',
    founder: 'border-founder-primary/20',
    neutral: 'border-gray-200/20'
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${contextClasses[context as keyof typeof contextClasses]} ${className || ''}`}
    >
      {children}
    </div>
  );
});

const VideoGrid = React.forwardRef<HTMLDivElement, {
  participants: VideoCallParticipant[];
  context?: string;
  children: React.ReactNode;
}>(({ participants, context = 'neutral', children }, ref) => {
  const getGridClasses = () => {
    const count = participants.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 grid-rows-2';
    if (count <= 6) return 'grid-cols-3 grid-rows-2';
    return 'grid-cols-4 grid-rows-3';
  };

  return (
    <div
      ref={ref}
      className={`grid gap-2 p-4 h-full ${getGridClasses()}`}
    >
      {children}
    </div>
  );
});

const ParticipantVideo = React.forwardRef<HTMLDivElement, {
  participant: VideoCallParticipant;
  context?: string;
  isCurrentUser?: boolean;
  onAction?: (action: string) => void;
}>(({ participant, context = 'neutral', isCurrentUser = false, onAction }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const contextClasses = {
    consultant: 'border-consultant-primary/30',
    client: 'border-client-primary/30',
    admin: 'border-admin-primary/30',
    expert: 'border-expert-primary/30',
    'tool-creator': 'border-tool-creator-primary/30',
    founder: 'border-founder-primary/30',
    neutral: 'border-gray-300/30'
  };

  return (
    <div
      ref={ref}
      className={`relative bg-gray-800 rounded-lg overflow-hidden border-2 ${contextClasses[context as keyof typeof contextClasses]} ${isCurrentUser ? 'ring-2 ring-blue-500' : ''}`}
    >
      {participant.videoEnabled ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isCurrentUser}
          playsInline
        />
      ) : (
        <Flex align="center" justify="center" className="w-full h-full bg-gray-700">
          <Avatar
            src={participant.avatar}
            alt={participant.name}
            fallback={participant.name.charAt(0).toUpperCase()}
            size="lg"
          />
        </Flex>
      )}

      {/* Participant Info Overlay */}
      <div className="absolute bottom-2 left-2 right-2">
        <Flex align="center" justify="between" className="bg-black/50 rounded px-2 py-1">
            <Flex align="center" gap="sm">
              <Text size="sm" className="text-white font-medium">
                {participant.name}
                {isCurrentUser && ' (You)'}
              </Text>
              {participant.role === 'host' && (
                <Badge variant="primary" size="sm">Host</Badge>
              )}
            </Flex>
            <Flex align="center" gap="sm">
              {!participant.audioEnabled && (
                <Icon name="MicOff" size="sm" className="text-red-400" />
              )}
              {participant.screenSharing && (
                <Icon name="Monitor" size="sm" className="text-green-400" />
              )}
            <div className={`w-2 h-2 rounded-full ${
              participant.status === 'connected' ? 'bg-green-400' :
              participant.status === 'connecting' ? 'bg-yellow-400' :
              'bg-red-400'
            }`} />
          </Flex>
        </Flex>
      </div>

      {/* Screen Sharing Indicator */}
      {participant.screenSharing && (
        <div className="absolute top-2 left-2">
          <Badge variant="success" size="sm">
            <Icon name="Monitor" size="sm" className="mr-1" />
            Sharing Screen
          </Badge>
        </div>
      )}
    </div>
  );
});

const CallControls = React.forwardRef<HTMLDivElement, {
  session: VideoCallSession;
  currentUser: VideoCallParticipant;
  context?: string;
  onAction?: (action: VideoCallAction) => void;
}>(({ session, currentUser, context = 'neutral', onAction }, ref) => {
  const { hasPermission } = useWorkspace();

  const actions: VideoCallAction[] = useMemo(() => [
    {
      id: 'mute',
      type: currentUser.audioEnabled ? 'mute' : 'unmute',
      label: currentUser.audioEnabled ? 'Mute' : 'Unmute',
      icon: currentUser.audioEnabled ? 'Mic' : 'MicOff',
      enabled: true,
      visible: true
    },
    {
      id: 'video',
      type: currentUser.videoEnabled ? 'video-off' : 'video-on',
      label: currentUser.videoEnabled ? 'Turn Off Video' : 'Turn On Video',
      icon: currentUser.videoEnabled ? 'Video' : 'VideoOff',
      enabled: true,
      visible: true
    },
    {
      id: 'screen-share',
      type: 'screen-share',
      label: currentUser.screenSharing ? 'Stop Sharing' : 'Share Screen',
      icon: 'Monitor',
      enabled: session.settings.allowScreenShare,
      visible: session.settings.allowScreenShare
    },
    {
      id: 'record',
      type: 'record',
      label: session.status === 'recording' ? 'Stop Recording' : 'Start Recording',
      icon: 'Circle',
      enabled: session.settings.allowRecording && hasPermission('video:record'),
      visible: session.settings.allowRecording && hasPermission('video:record')
    },
    {
      id: 'invite',
      type: 'invite',
      label: 'Invite Participants',
      icon: 'UserPlus',
      enabled: hasPermission('video:invite'),
      visible: hasPermission('video:invite')
    },
    {
      id: 'end-call',
      type: 'end-call',
      label: 'End Call',
      icon: 'PhoneOff',
      enabled: currentUser.role === 'host' || hasPermission('video:end'),
      visible: true
    }
  ], [currentUser, session, hasPermission]);

  const contextClasses = {
    consultant: 'bg-consultant-primary/10 border-consultant-primary/20',
    client: 'bg-client-primary/10 border-client-primary/20',
    admin: 'bg-admin-primary/10 border-admin-primary/20',
    expert: 'bg-expert-primary/10 border-expert-primary/20',
    'tool-creator': 'bg-tool-creator-primary/10 border-tool-creator-primary/20',
    founder: 'bg-founder-primary/10 border-founder-primary/20',
    neutral: 'bg-gray-800/50 border-gray-600/20'
  };

  return (
    <div
      ref={ref}
      className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${contextClasses[context as keyof typeof contextClasses]} backdrop-blur-sm border rounded-lg p-2`}
    >
      <Flex align="center" gap="sm">
        {actions.filter(action => action.visible).map((action) => (
          <Button
            key={action.id}
            variant={action.type === 'end-call' ? 'danger' :
                   action.type === 'record' && session.status === 'recording' ? 'danger' :
                   currentUser.screenSharing && action.type === 'screen-share' ? 'primary' :
                   !currentUser.audioEnabled && action.type === 'unmute' ? 'danger' :
                   !currentUser.videoEnabled && action.type === 'video-on' ? 'secondary' :
                   'ghost'}
            size="sm"
            disabled={!action.enabled}
            onClick={() => onAction?.(action)}
            className={`${action.type === 'end-call' ? 'bg-red-600 hover:bg-red-700' : ''} text-white`}
          >
            <Icon name={action.icon} size="sm" />
          </Button>
        ))}
      </Flex>
    </div>
  );
});

const ParticipantsList = React.forwardRef<HTMLDivElement, {
  participants: VideoCallParticipant[];
  currentUser: VideoCallParticipant;
  context?: string;
  onParticipantAction?: (participantId: string, action: string) => void;
}>(({ participants, currentUser, context = 'neutral', onParticipantAction }, ref) => {
  const { hasPermission } = useWorkspace();

  const contextClasses = {
    consultant: 'bg-consultant-primary/5 border-consultant-primary/20',
    client: 'bg-client-primary/5 border-client-primary/20',
    admin: 'bg-admin-primary/5 border-admin-primary/20',
    expert: 'bg-expert-primary/5 border-expert-primary/20',
    'tool-creator': 'bg-tool-creator-primary/5 border-tool-creator-primary/20',
    founder: 'bg-founder-primary/5 border-founder-primary/20',
    neutral: 'bg-gray-800/30 border-gray-600/20'
  };

  return (
    <div
      ref={ref}
      className={`absolute top-4 right-4 w-64 ${contextClasses[context as keyof typeof contextClasses]} backdrop-blur-sm border rounded-lg p-3`}
    >
      <Heading level={4} className="text-white mb-3">
        Participants ({participants.length})
      </Heading>
      <Stack spacing="sm">
        {participants.map((participant) => (
          <Flex key={participant.id} align="center" justify="between" className="p-2 rounded bg-black/20">
            <Flex align="center" gap="sm">
              <Avatar
                src={participant.avatar}
                alt={participant.name}
                fallback={participant.name.charAt(0).toUpperCase()}
                size="sm"
              />
              <Stack spacing="sm">
                <Text size="sm" className="text-white font-medium">
                  {participant.name}
                  {participant.id === currentUser.id && ' (You)'}
                </Text>
                <Flex align="center" gap="sm">
                  {participant.role === 'host' && (
                    <Badge variant="primary" size="sm">Host</Badge>
                  )}
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    participant.status === 'connected' ? 'bg-green-400' :
                    participant.status === 'connecting' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`} />
                </Flex>
              </Stack>
            </Flex>
            <Flex align="center" gap="sm">
              <Icon
                name={participant.audioEnabled ? 'Mic' : 'MicOff'}
                size="sm"
                className={participant.audioEnabled ? 'text-green-400' : 'text-red-400'}
              />
              <Icon
                name={participant.videoEnabled ? 'Video' : 'VideoOff'}
                size="sm"
                className={participant.videoEnabled ? 'text-green-400' : 'text-red-400'}
              />
              {hasPermission('video:moderate') && participant.id !== currentUser.id && (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => onParticipantAction?.(participant.id, 'remove')}
                  className="text-red-400 hover:text-red-300"
                >
                  <Icon name="X" size="sm" />
                </Button>
              )}
            </Flex>
          </Flex>
        ))}
      </Stack>
    </div>
  );
});

const CallStatus = React.forwardRef<HTMLDivElement, {
  session: VideoCallSession;
  context?: string;
}>(({ session, context = 'neutral' }, ref) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (session.status === 'active') {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - session.startTime.getTime()) / 1000);
        setDuration(elapsed);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [session.status, session.startTime]);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const contextClasses = {
    consultant: 'bg-consultant-primary/10 border-consultant-primary/20',
    client: 'bg-client-primary/10 border-client-primary/20',
    admin: 'bg-admin-primary/10 border-admin-primary/20',
    expert: 'bg-expert-primary/10 border-expert-primary/20',
    'tool-creator': 'bg-tool-creator-primary/10 border-tool-creator-primary/20',
    founder: 'bg-founder-primary/10 border-founder-primary/20',
    neutral: 'bg-gray-800/50 border-gray-600/20'
  };

  return (
    <div
      ref={ref}
      className={`absolute top-4 left-4 ${contextClasses[context as keyof typeof contextClasses]} backdrop-blur-sm border rounded-lg p-3`}
    >
      <Stack spacing="sm">
        <Text size="sm" className="text-white font-medium">
          {session.title}
        </Text>
        <Flex align="center" gap="sm">
          <div className={`w-2 h-2 rounded-full ${
            session.status === 'active' ? 'bg-green-400' :
            session.status === 'waiting' ? 'bg-yellow-400' :
            session.status === 'recording' ? 'bg-red-400' :
            'bg-gray-400'
          }`} />
          <Text size="xs" className="text-gray-300">
            {session.status === 'active' ? formatDuration(duration) :
             session.status === 'waiting' ? 'Waiting to start' :
             session.status === 'recording' ? `Recording • ${formatDuration(duration)}` :
             'Call ended'}
          </Text>
        </Flex>
      </Stack>
    </div>
  );
});

// Main Component
export const VideoCallInterface = React.forwardRef<HTMLDivElement, VideoCallInterfaceProps>(
  ({
    session,
    currentUser,
    context = 'neutral',
    onParticipantAction,
    onCallAction,
    onScreenShare,
    onRecordingToggle,
    onParticipantInvite,
    onCallEnd,
    onSettingsChange,
    showControls = true,
    showParticipants = true,
    showChat = false,
    permissions = [],
    className
  }, ref) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle fullscreen toggle
    const toggleFullscreen = useCallback(() => {
      if (!document.fullscreenElement) {
        containerRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }, []);

    // Handle call actions
    const handleCallAction = useCallback((action: VideoCallAction) => {
      switch (action.type) {
        case 'mute':
        case 'unmute':
          // Toggle audio
          break;
        case 'video-on':
        case 'video-off':
          // Toggle video
          break;
        case 'screen-share':
          onScreenShare?.(!currentUser.screenSharing);
          break;
        case 'record':
          onRecordingToggle?.(session.status !== 'recording');
          break;
        case 'invite':
          onParticipantInvite?.();
          break;
        case 'end-call':
          onCallEnd?.();
          break;
      }
      onCallAction?.(action);
    }, [currentUser.screenSharing, session.status, onScreenShare, onRecordingToggle, onParticipantInvite, onCallEnd, onCallAction]);

    // Handle keyboard shortcuts
    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.ctrlKey || event.metaKey) {
          switch (event.key) {
            case 'm':
              event.preventDefault();
              handleCallAction({
                id: 'mute',
                type: currentUser.audioEnabled ? 'mute' : 'unmute',
                label: '',
                icon: '',
                enabled: true,
                visible: true
              });
              break;
            case 'e':
              event.preventDefault();
              handleCallAction({
                id: 'video',
                type: currentUser.videoEnabled ? 'video-off' : 'video-on',
                label: '',
                icon: '',
                enabled: true,
                visible: true
              });
              break;
            case 's':
              event.preventDefault();
              handleCallAction({
                id: 'screen-share',
                type: 'screen-share',
                label: '',
                icon: '',
                enabled: true,
                visible: true
              });
              break;
          }
        }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }, [currentUser.audioEnabled, currentUser.videoEnabled, handleCallAction]);

    return (
      <VideoCallContainer
        ref={ref}
        context={context}
        className={className}
      >
        <div ref={containerRef} className="relative w-full h-full">
          {/* Call Status */}
          <CallStatus session={session} context={context} />

          {/* Participants List */}
          {showParticipants && (
            <ParticipantsList
              participants={session.participants}
              currentUser={currentUser}
              context={context}
              onParticipantAction={onParticipantAction}
            />
          )}

          {/* Video Grid */}
          <VideoGrid participants={session.participants} context={context}>
            {session.participants.map((participant) => (
              <ParticipantVideo
                key={participant.id}
                participant={participant}
                context={context}
                isCurrentUser={participant.id === currentUser.id}
                onAction={(action) => onParticipantAction?.(participant.id, action)}
              />
            ))}
          </VideoGrid>

          {/* Call Controls */}
          {showControls && (
            <CallControls
              session={session}
              currentUser={currentUser}
              context={context}
              onAction={handleCallAction}
            />
          )}

          {/* Fullscreen Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFullscreen}
            className="absolute top-4 right-80 text-white hover:bg-white/10"
          >
            <Icon name={isFullscreen ? 'Minimize' : 'Maximize'} size="sm" />
          </Button>
        </div>
      </VideoCallContainer>
    );
  }
);

VideoCallInterface.displayName = 'VideoCallInterface';

export default VideoCallInterface;
