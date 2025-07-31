import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

// Types
export interface Workspace {
  id: string;
  name: string;
  type: 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder';
  settings: WorkspaceSettings;
  state: WorkspaceState;
}

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar?: string;
}

export interface WorkspaceSettings {
  theme: 'light' | 'dark' | 'gradient';
  notifications: boolean;
  privacy: 'public' | 'private' | 'restricted';
  features: Record<string, boolean>;
}

export interface WorkspaceState {
  isActive: boolean;
  lastAccessed: Date;
  sessionId: string;
  preferences: Record<string, any>;
}

export interface WorkspaceContext {
  workspace: Workspace;
  user: User;
  permissions: string[];
  roles: string[];
  settings: WorkspaceSettings;
  state: WorkspaceState;
  hasPermission: (permission: string) => boolean;
  switchContext: (newWorkspace: Workspace) => Promise<void>;
  auditLog?: AuditEvent[];
}

export interface AuditEvent {
  id: string;
  timestamp: Date;
  user: User;
  action: string;
  resource: string;
  details: Record<string, any>;
  ip?: string;
  userAgent?: string;
  workspaceId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface WorkspaceContextProviderProps {
  workspace: Workspace;
  user: User;
  permissions: string[];
  onContextChange?: (context: WorkspaceContext) => void;
  onPermissionDenied?: (permission: string) => void;
  children: ReactNode;
  securityMode?: 'strict' | 'permissive';
  auditEnabled?: boolean;
}

// Context
const WorkspaceContextContext = createContext<WorkspaceContext | null>(null);

// Hook
export const useWorkspace = (): WorkspaceContext => {
  const context = useContext(WorkspaceContextContext);
  if (!context) {
    throw new Error('useWorkspace must be used within a WorkspaceContextProvider');
  }
  return context;
};

// Utility functions
const saveContextState = async (context: WorkspaceContext): Promise<void> => {
  try {
    localStorage.setItem(`workspace_${context.workspace.id}`, JSON.stringify({
      state: context.state,
      settings: context.settings,
      lastAccessed: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Failed to save context state:', error);
  }
};

const loadWorkspaceContext = async (workspace: Workspace, user: User): Promise<WorkspaceContext> => {
  try {
    const saved = localStorage.getItem(`workspace_${workspace.id}`);
    const savedData = saved ? JSON.parse(saved) : {};

    return {
      workspace: {
        ...workspace,
        state: {
          ...workspace.state,
          ...savedData.state,
          lastAccessed: new Date()
        },
        settings: {
          ...workspace.settings,
          ...savedData.settings
        }
      },
      user,
      permissions: [], // Will be loaded from API
      roles: user.roles,
      settings: workspace.settings,
      state: workspace.state,
      hasPermission: () => false, // Will be implemented
      switchContext: async () => {}, // Will be implemented
    };
  } catch (error) {
    console.error('Failed to load workspace context:', error);
    throw error;
  }
};

const subscribeToWorkspaceUpdates = (workspaceId: string, handler: (update: any) => void) => {
  // Mock implementation - in real app would use WebSocket or SSE
  const interval = setInterval(() => {
    // Simulate periodic updates
    if (Math.random() > 0.95) {
      handler({
        workspaceId,
        changes: {
          state: {
            lastAccessed: new Date()
          }
        }
      });
    }
  }, 5000);

  return () => clearInterval(interval);
};

const unsubscribeFromWorkspaceUpdates = (workspaceId: string, handler: (update: any) => void) => {
  // Mock implementation
  console.log(`Unsubscribed from workspace ${workspaceId} updates`);
};

// Main Component
export const WorkspaceContextProvider: React.FC<WorkspaceContextProviderProps> = ({
  workspace,
  user,
  permissions,
  onContextChange,
  onPermissionDenied,
  children,
  securityMode = 'strict',
  auditEnabled = true
}) => {
  const [context, setContext] = useState<WorkspaceContext>({
    workspace,
    user,
    permissions,
    roles: user.roles,
    settings: workspace.settings,
    state: workspace.state,
    hasPermission: () => false,
    switchContext: async () => {}
  });

  const [auditLog, setAuditLog] = useState<AuditEvent[]>([]);

  // Permission checking with audit
  const hasPermission = useCallback((permission: string): boolean => {
    const hasAccess = context.permissions.includes(permission) ||
      (securityMode === 'permissive' && context.roles.includes('admin'));

    if (auditEnabled) {
      const auditEvent: AuditEvent = {
        id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        user: context.user,
        action: 'permission_check',
        resource: permission,
        details: { hasAccess, securityMode },
        workspaceId: context.workspace.id,
        severity: hasAccess ? 'low' : 'medium'
      };

      setAuditLog(prev => [auditEvent, ...prev.slice(0, 99)]); // Keep last 100 events
    }

    if (!hasAccess) {
      onPermissionDenied?.(permission);
    }

    return hasAccess;
  }, [context.permissions, context.roles, context.user, context.workspace.id, securityMode, auditEnabled, onPermissionDenied]);

  // Context switching with validation
  const switchContext = useCallback(async (newWorkspace: Workspace): Promise<void> => {
    try {
      // Validate permission to switch
      if (!hasPermission('workspace:switch')) {
        throw new Error('Permission denied: workspace:switch');
      }

      // Save current context state
      await saveContextState(context);

      // Load new context
      const newContext = await loadWorkspaceContext(newWorkspace, user);

      // Update context
      const updatedContext = {
        ...newContext,
        hasPermission,
        switchContext
      };

      setContext(updatedContext);
      onContextChange?.(updatedContext);

      // Audit log
      if (auditEnabled) {
        const auditEvent: AuditEvent = {
          id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date(),
          user: context.user,
          action: 'context_switch',
          resource: 'workspace',
          details: {
            fromWorkspace: workspace.id,
            toWorkspace: newWorkspace.id
          },
          workspaceId: newWorkspace.id,
          severity: 'medium'
        };

        setAuditLog(prev => [auditEvent, ...prev.slice(0, 99)]);
      }
    } catch (error) {
      console.error('Context switch failed:', error);

      if (auditEnabled) {
        const auditEvent: AuditEvent = {
          id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date(),
          user: context.user,
          action: 'context_switch_failed',
          resource: 'workspace',
          details: {
            error: error instanceof Error ? error.message : 'Unknown error',
            fromWorkspace: workspace.id,
            toWorkspace: newWorkspace.id
          },
          workspaceId: workspace.id,
          severity: 'high'
        };

        setAuditLog(prev => [auditEvent, ...prev.slice(0, 99)]);
      }

      throw error;
    }
  }, [context, hasPermission, user, workspace.id, auditEnabled, onContextChange]);

  // Real-time context synchronization
  useEffect(() => {
    const syncHandler = (update: any) => {
      if (update.workspaceId === workspace.id) {
        setContext(prev => ({
          ...prev,
          ...update.changes
        }));
      }
    };

    const unsubscribe = subscribeToWorkspaceUpdates(workspace.id, syncHandler);
    return unsubscribe;
  }, [workspace.id]);

  // Update context methods
  useEffect(() => {
    setContext(prev => ({
      ...prev,
      hasPermission,
      switchContext,
      auditLog: auditEnabled ? auditLog : undefined
    }));
  }, [hasPermission, switchContext, auditLog, auditEnabled]);

  const value: WorkspaceContext = {
    ...context,
    hasPermission,
    switchContext,
    auditLog: auditEnabled ? auditLog : undefined
  };

  return (
    <WorkspaceContextContext.Provider value={value}>
      {children}
    </WorkspaceContextContext.Provider>
  );
};

export default WorkspaceContextProvider;
