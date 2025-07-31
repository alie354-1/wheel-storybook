import { Avatar, Badge, Button, EmptyState, Icon, Input, Spinner } from '@wheel/ui';
import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../../lib/utils';
import {
  Chat,
  ChatInterfaceProps,
  Message,
  TypingIndicator,
  User,
  WorkspaceContext
} from '../types';

// Mock hook for real-time collaboration - would be replaced with actual implementation
const useRealTimeCollaboration = () => {
  return {
    socket: {
      on: (event: string, handler: Function) => {},
      off: (event: string) => {},
      emit: (event: string, data: any) => {}
    }
  };
};

// Mock hook for workspace permissions - would be replaced with actual implementation
const useWorkspace = () => {
  return {
    hasPermission: (permission: string) => true
  };
};

// Utility function to format dates
const formatDate = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
};

// Chat List Component
interface ChatListProps {
  chats: Chat[];
  selectedChat: Chat | null;
  onChatSelect: (chat: Chat) => void;
  context?: WorkspaceContext;
  currentUser: User;
}

const ChatList: React.FC<ChatListProps> = ({
  chats,
  selectedChat,
  onChatSelect,
  context = 'consultant',
  currentUser
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = useMemo(() => {
    if (!searchQuery) return chats;
    return chats.filter(chat =>
      chat.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.participants.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [chats, searchQuery]);

  const getContextStyles = (context: WorkspaceContext) => {
    const styles = {
      consultant: 'border-l-blue-500 bg-blue-50',
      client: 'border-l-green-500 bg-green-50',
      admin: 'border-l-purple-500 bg-purple-50',
      expert: 'border-l-orange-500 bg-orange-50',
      tool_creator: 'border-l-indigo-500 bg-indigo-50',
      founder: 'border-l-red-500 bg-red-50',
      neutral: 'border-l-gray-500 bg-gray-50'
    };
    return styles[context] || 'border-l-gray-500 bg-gray-50';
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            name="search"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <EmptyState
            title={searchQuery ? "No conversations found" : "No conversations yet"}
            description="Start a new conversation to get started"
          />
        ) : (
          <div className="space-y-1 p-2">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => onChatSelect(chat)}
                className={cn(
                  "flex items-center p-3 rounded-lg cursor-pointer transition-colors border-l-4",
                  selectedChat?.id === chat.id
                    ? getContextStyles(context)
                    : "border-l-transparent hover:bg-gray-50"
                )}
              >
                <div className="flex-shrink-0 mr-3">
                  {chat.type === 'direct' ? (
                    <Avatar
                      src={chat.participants.find(p => p.id !== currentUser.id)?.avatar || chat.participants[0]?.avatar}
                      alt={chat.participants.find(p => p.id !== currentUser.id)?.name || chat.participants[0]?.name}
                      size="md"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Icon name="Users" className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {chat.name || chat.participants
                        .filter(p => p.id !== currentUser.id)
                        .map(p => p.name)
                        .join(', ')}
                    </h3>
                    {chat.lastMessage && (
                      <span className="text-xs text-gray-500">
                        {formatDate(chat.lastMessage.timestamp)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage?.content || 'No messages yet'}
                    </p>
                    {chat.unreadCount > 0 && (
                      <Badge variant="primary" size="sm">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Chat Header Component
interface ChatHeaderProps {
  chat: Chat;
  context?: WorkspaceContext;
  currentUser: User;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ chat, context = 'consultant', currentUser }) => {
  const getContextColor = (context: WorkspaceContext) => {
    const colors = {
      consultant: 'text-blue-600',
      client: 'text-green-600',
      admin: 'text-purple-600',
      expert: 'text-orange-600',
      tool_creator: 'text-indigo-600',
      founder: 'text-red-600',
      neutral: 'text-gray-600'
    };
    return colors[context] || 'text-gray-600';
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          {chat.type === 'direct' ? (
            <Avatar
              src={chat.participants.find(p => p.id !== currentUser.id)?.avatar || chat.participants[0]?.avatar}
              alt={chat.participants.find(p => p.id !== currentUser.id)?.name || chat.participants[0]?.name}
              size="md"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <Icon name="Users" className="w-5 h-5 text-gray-600" />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {chat.name || chat.participants
              .filter(p => p.id !== currentUser.id)
              .map(p => p.name)
              .join(', ')}
          </h2>
          <p className={cn("text-sm", getContextColor(context as WorkspaceContext))}>
            {chat.participants.length} participant{chat.participants.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Icon name="Phone" className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="Video" className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="Info" className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

// Message List Component
interface MessageListProps {
  messages: Message[];
  currentUser: User;
  context?: WorkspaceContext;
  onMessageReply?: (message: Message) => void;
  onMessageReact?: (message: Message, reaction: string) => void;
  loading?: boolean;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  currentUser,
  context = 'consultant',
  onMessageReply,
  onMessageReact,
  loading
}) => {
  const getContextColor = (context: WorkspaceContext) => {
    const colors = {
      consultant: 'bg-blue-500',
      client: 'bg-green-500',
      admin: 'bg-purple-500',
      expert: 'bg-orange-500',
      tool_creator: 'bg-indigo-500',
      founder: 'bg-red-500',
      neutral: 'bg-gray-500'
    };
    return colors[context] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <EmptyState
          title="No messages yet"
          description="Start the conversation!"
        />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwnMessage = message.sender.id === currentUser.id;

        return (
          <div
            key={message.id}
            className={cn(
              "flex",
              isOwnMessage ? "justify-end" : "justify-start"
            )}
          >
            <div className={cn("flex max-w-xs lg:max-w-md", isOwnMessage ? "flex-row-reverse" : "flex-row")}>
              {!isOwnMessage && (
                <Avatar
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  size="sm"
                  className="flex-shrink-0 mr-2"
                />
              )}

              <div className={cn("flex flex-col", isOwnMessage ? "items-end" : "items-start")}>
                {!isOwnMessage && (
                  <span className="text-xs text-gray-500 mb-1">{message.sender.name}</span>
                )}

                <div
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    isOwnMessage
                      ? cn("text-white", getContextColor(context as WorkspaceContext))
                      : "bg-gray-100 text-gray-900"
                  )}
                >
                  <p className="text-sm">{message.content}</p>

                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {message.attachments.map((attachment) => (
                        <div key={attachment.id} className="flex items-center space-x-2 text-xs">
                          <Icon name="Paperclip" className="w-3 h-3" />
                          <span>{attachment.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-1 space-x-2">
                  <span className="text-xs text-gray-500">
                    {formatDate(message.timestamp)}
                  </span>

                  {message.status === 'read' && isOwnMessage && (
                    <Icon name="CheckCheck" className="w-3 h-3 text-blue-500" />
                  )}

                  {message.reactions && message.reactions.length > 0 && (
                    <div className="flex space-x-1">
                      {message.reactions.map((reaction, index) => (
                        <span key={index} className="text-xs bg-gray-200 px-1 rounded">
                          {reaction.emoji} {reaction.users.length}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Message Input Component
interface MessageInputProps {
  onSend: (content: string, attachments?: File[]) => void;
  onTyping?: () => void;
  context?: WorkspaceContext;
  placeholder?: string;
  disabled?: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSend,
  onTyping,
  context = 'consultant',
  placeholder = "Type a message...",
  disabled
}) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend(message.trim(), attachments);
      setMessage('');
      setAttachments([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getContextColor = (context: WorkspaceContext) => {
    const colors = {
      consultant: 'text-blue-600 hover:text-blue-700',
      client: 'text-green-600 hover:text-green-700',
      admin: 'text-purple-600 hover:text-purple-700',
      expert: 'text-orange-600 hover:text-orange-700',
      tool_creator: 'text-indigo-600 hover:text-indigo-700',
      founder: 'text-red-600 hover:text-red-700',
      neutral: 'text-gray-600 hover:text-gray-700'
    };
    return colors[context] || 'text-gray-600 hover:text-gray-700';
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                onTyping?.();
              }}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={1}
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />

            {attachments.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded text-sm">
                    <Icon name="Paperclip" className="w-3 h-3" />
                    <span>{file.name}</span>
                    <button
                      onClick={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Icon name="X" className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                setAttachments(prev => [...prev, ...Array.from(e.target.files!)]);
              }
            }}
            className="hidden"
            id="file-upload"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={disabled}
          >
            <Icon name="Paperclip" className="w-4 h-4" />
          </Button>

          <Button
            onClick={handleSend}
            disabled={disabled || (!message.trim() && attachments.length === 0)}
            className={cn("px-4 py-2", getContextColor(context as WorkspaceContext))}
          >
            <Icon name="Send" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main ChatInterface Component
export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  workspace,
  currentUser,
  chatId,
  context = 'consultant',
  onMessageSend,
  onChatSelect,
  showSidebar = true,
  showSearch = true,
  permissions = [],
  className
}) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);
  const { socket } = useRealTimeCollaboration();
  const { hasPermission } = useWorkspace();

  // Mock data for demonstration
  useEffect(() => {
    // In a real implementation, this would fetch chats from an API
    const mockChats: Chat[] = [
      {
        id: '1',
        type: 'direct',
        participants: [
          currentUser,
          { id: '2', name: 'John Doe', email: 'john@example.com', avatar: '/avatars/john.jpg' }
        ],
        unreadCount: 2,
        workspace: workspace.id,
        createdAt: new Date(),
        lastMessage: {
          id: '1',
          content: 'Hey, how are you?',
          sender: { id: '2', name: 'John Doe', email: 'john@example.com' },
          timestamp: new Date(),
          chatId: '1',
          status: 'read'
        }
      }
    ];
    setChats(mockChats);

    if (chatId) {
      const chat = mockChats.find(c => c.id === chatId);
      if (chat) setSelectedChat(chat);
    }
  }, [workspace.id, currentUser, chatId]);

  // Set up real-time listeners
  useEffect(() => {
    socket.on('message:new', handleNewMessage);
    socket.on('message:update', handleMessageUpdate);
    socket.on('typing:start', handleTypingStart);
    socket.on('typing:stop', handleTypingStop);

    return () => {
      socket.off('message:new');
      socket.off('message:update');
      socket.off('typing:start');
      socket.off('typing:stop');
    };
  }, [socket]);

  const handleNewMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const handleMessageUpdate = (message: Message) => {
    setMessages(prev => prev.map(m => m.id === message.id ? message : m));
  };

  const handleTypingStart = (indicator: TypingIndicator) => {
    // Handle typing indicator
  };

  const handleTypingStop = (indicator: TypingIndicator) => {
    // Handle typing indicator stop
  };

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    onChatSelect?.(chat);

    // Load messages for selected chat
    setLoading(true);
    // In a real implementation, this would fetch messages from an API
    setTimeout(() => {
      const mockMessages: Message[] = [
        {
          id: '1',
          content: 'Hey, how are you?',
          sender: chat.participants.find(p => p.id !== currentUser.id) || chat.participants[0],
          timestamp: new Date(Date.now() - 3600000),
          chatId: chat.id,
          status: 'read'
        },
        {
          id: '2',
          content: 'I\'m doing well, thanks! How about you?',
          sender: currentUser,
          timestamp: new Date(Date.now() - 3000000),
          chatId: chat.id,
          status: 'read'
        }
      ];
      setMessages(mockMessages);
      setLoading(false);
    }, 500);
  };

  const handleSendMessage = (content: string, attachments?: File[]) => {
    if (!selectedChat) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: currentUser,
      timestamp: new Date(),
      chatId: selectedChat.id,
      status: 'sending',
      attachments: attachments?.map(file => ({
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        size: file.size,
        url: URL.createObjectURL(file)
      }))
    };

    setMessages(prev => [...prev, newMessage]);
    onMessageSend?.(newMessage);

    // Simulate message sending
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === newMessage.id ? { ...m, status: 'sent' as const } : m
      ));
    }, 1000);
  };

  return (
    <div className={cn("flex h-full bg-white rounded-lg shadow-lg overflow-hidden", className)}>
      {showSidebar && (
        <div className="w-80 flex-shrink-0">
          <ChatList
            chats={chats}
            selectedChat={selectedChat}
            onChatSelect={handleChatSelect}
            context={context}
            currentUser={currentUser}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <ChatHeader
              chat={selectedChat}
              context={context}
              currentUser={currentUser}
            />
            <MessageList
              messages={messages}
              currentUser={currentUser}
              context={context}
              loading={loading}
            />
            <MessageInput
              onSend={handleSendMessage}
              context={context}
              placeholder="Type a message..."
              disabled={!hasPermission('chat:send')}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <EmptyState
              title="Select a conversation"
              description="Choose a conversation from the sidebar to start chatting"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
