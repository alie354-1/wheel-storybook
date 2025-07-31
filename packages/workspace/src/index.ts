// Management Components
export { useWorkspace, WorkspaceContextProvider } from './components/management/WorkspaceContextProvider';
export { createProtectedRoute, createRoute, createWorkspaceRoute, WorkspaceRouter } from './components/management/WorkspaceRouter';

// Archive Components
export { default as WorkspaceArchive } from './components/WorkspaceArchive';

// Types
export type {
  AuditEvent, User, Workspace, WorkspaceContext, WorkspaceContextProviderProps, WorkspaceSettings,
  WorkspaceState
} from './components/management/WorkspaceContextProvider';

export type {
  WorkspaceRoute,
  WorkspaceRouterProps
} from './components/management/WorkspaceRouter';

export type {
  Archive,
  ArchiveData,
  RetentionPolicy,
  WorkspaceArchiveProps
} from './components/WorkspaceArchive';
