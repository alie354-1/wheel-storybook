
// Base types for communication system
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  role?: string;
  workspace?: string;
}

export interface Workspace {
  id: string;
  name: string;
  type: 'consultant' | 'client' | 'admin' | 'expert' | 'tool_creator' | 'founder';
  settings?: WorkspaceSettings;
}

export interface WorkspaceSettings {
  allowMessaging: boolean;
  allowComments: boolean;
  allowNotifications: boolean;
  encryption: boolean;
  retention: number;
}

// Chat & Messaging Types
export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
  chatId: string;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
  replyTo?: string;
  reactions?: MessageReaction[];
  edited?: boolean;
  editedAt?: Date;
  type?: 'text' | 'file' | 'image' | 'system';
}

export interface Chat {
  id: string;
  type: 'direct' | 'group' | 'channel';
  name?: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  workspace: string;
  createdAt: Date;
  settings?: ChatSettings;
  isArchived?: boolean;
}

export interface ChatSettings {
  notifications: boolean;
  encryption: boolean;
  retention: number;
  permissions: string[];
}

export interface MessageReaction {
  emoji: string;
  users: User[];
  timestamp: Date;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnail?: string;
}

// Comment System Types
export interface Comment {
  id: string;
  content: string;
  author: User;
  parentId?: string;
  timestamp: Date;
  edited?: boolean;
  editedAt?: Date;
  resolved?: boolean;
  resolvedBy?: User;
  resolvedAt?: Date;
  mentions?: User[];
  attachments?: Attachment[];
  reactions?: CommentReaction[];
  workspaceId: string;
  replies?: Comment[];
}

export interface CommentReaction {
  emoji: string;
  users: User[];
  timestamp: Date;
}

export interface TextSelection {
  start: number;
  end: number;
  text: string;
  context?: string;
}

export interface Annotation {
  id: string;
  position: Position;
  comment: Comment;
  design: string;
  layer?: string;
  status: 'open' | 'resolved' | 'archived';
}

export interface Position {
  x: number;
  y: number;
}

export interface ReviewItem {
  id: string;
  type: 'document' | 'design' | 'code';
  title: string;
  content: any;
  status: 'pending' | 'approved' | 'rejected';
  reviewers: User[];
  approvals: Approval[];
}

export interface Approval {
  id: string;
  reviewer: User;
  status: 'approved' | 'rejected';
  comment?: string;
  timestamp: Date;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'mention' | 'update';
  category: 'system' | 'chat' | 'comment' | 'task' | 'billing' | 'general';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  workspace: string;
  sender?: User;
  actions?: NotificationAction[];
  metadata?: Record<string, any>;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface NotificationAction {
  id: string;
  label: string;
  type: 'primary' | 'secondary' | 'link';
  action: string;
  url?: string;
  data?: any;
}

export interface NotificationPreferences {
  channels: {
    inApp: boolean;
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  categories: Record<string, CategoryPreference>;
  schedule: {
    doNotDisturb: boolean;
    doNotDisturbStart?: string;
    doNotDisturbEnd?: string;
    timezone: string;
  };
  grouping: {
    enabled: boolean;
    interval: number;
  };
}

export interface CategoryPreference {
  enabled: boolean;
  channels: string[];
  priority: string;
  sound?: boolean;
}

// Component Props Types
export interface ChatInterfaceProps {
  workspace: Workspace;
  currentUser: User;
  chatId?: string;
  context?: WorkspaceContext;
  onMessageSend?: (message: Message) => void;
  onChatSelect?: (chat: Chat) => void;
  showSidebar?: boolean;
  showSearch?: boolean;
  permissions?: string[];
  className?: string;
}

export interface MessageListProps {
  messages: Message[];
  currentUser: User;
  context?: WorkspaceContext;
  onMessageReply?: (message: Message) => void;
  onMessageReact?: (message: Message, reaction: string) => void;
  onLoadMore?: () => void;
  loading?: boolean;
  hasMore?: boolean;
  className?: string;
}

export interface MessageInputProps {
  onSend: (content: string, attachments?: File[]) => void;
  onTyping?: () => void;
  context?: WorkspaceContext;
  placeholder?: string;
  maxLength?: number;
  allowAttachments?: boolean;
  allowFormatting?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface CommentThreadProps {
  comments: Comment[];
  parentId: string;
  parentType: 'document' | 'design' | 'project' | 'task';
  currentUser: User;
  context?: WorkspaceContext;
  onCommentAdd?: (comment: Comment) => void;
  onCommentReply?: (parentId: string, comment: Comment) => void;
  onCommentResolve?: (commentId: string) => void;
  allowReplies?: boolean;
  permissions?: string[];
  className?: string;
}

export interface InlineCommentProps {
  selection: TextSelection;
  document: any;
  currentUser: User;
  context?: WorkspaceContext;
  onCommentCreate?: (comment: Comment) => void;
  onSelectionChange?: (selection: TextSelection) => void;
  permissions?: string[];
  className?: string;
}

export interface AnnotationCommentProps {
  position: Position;
  design: any;
  currentUser: User;
  context?: WorkspaceContext;
  onAnnotationCreate?: (annotation: Annotation) => void;
  onPositionChange?: (position: Position) => void;
  permissions?: string[];
  className?: string;
}

export interface ReviewCommentProps {
  reviewItem: ReviewItem;
  currentUser: User;
  context?: WorkspaceContext;
  onApprove?: () => void;
  onReject?: (reason: string) => void;
  onCommentAdd?: (comment: Comment) => void;
  showApprovalActions?: boolean;
  permissions?: string[];
  className?: string;
}

export interface NotificationCenterProps {
  notifications: Notification[];
  currentUser: User;
  context?: WorkspaceContext;
  onNotificationClick?: (notification: Notification) => void;
  onMarkAsRead?: (notificationId: string) => void;
  onMarkAllAsRead?: () => void;
  onClearAll?: () => void;
  showFilters?: boolean;
  showSettings?: boolean;
  permissions?: string[];
  className?: string;
}

export interface ToastNotificationProps {
  notification: Notification;
  context?: WorkspaceContext;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  duration?: number;
  onDismiss?: () => void;
  onAction?: (action: NotificationAction) => void;
  autoClose?: boolean;
  className?: string;
}

export interface NotificationPreferencesProps {
  user: User;
  preferences: NotificationPreferences;
  context?: WorkspaceContext;
  onPreferenceChange?: (preferences: NotificationPreferences) => void;
  onSave?: () => void;
  showAdvanced?: boolean;
  permissions?: string[];
  className?: string;
}

// Real-time collaboration types
export interface TypingIndicator {
  userId: string;
  userName: string;
  chatId: string;
  timestamp: Date;
}

export interface PresenceStatus {
  userId: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  lastSeen?: Date;
}

// Utility types
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool_creator' | 'founder' | 'neutral';
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';
export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'mention' | 'update';
export type NotificationCategory = 'system' | 'chat' | 'comment' | 'task' | 'billing' | 'general';
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';
