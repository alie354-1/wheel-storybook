// Layout Components
export { TopNavigation } from './components/TopNavigation';
export type {
  NavigationAction, TopNavigationProps, Notification as TopNotification, User as TopUser,
  Workspace as TopWorkspace
} from './components/TopNavigation';

export { BreadcrumbNav } from './components/BreadcrumbNav';
export type {
  BreadcrumbItem,
  BreadcrumbNavProps,
  WorkspaceContext
} from './components/BreadcrumbNav';

export { TabNavigation } from './components/TabNavigation';
export type {
  TabItem,
  TabNavigationProps,
  WorkspaceContext as TabWorkspaceContext
} from './components/TabNavigation';

export { WorkspaceNav } from './components/WorkspaceNav';
export type {
  WorkspaceNavProps
} from './components/WorkspaceNav';

export { ClientNav } from './components/ClientNav';
export type {
  Client,
  ClientNavProps,
  Notification as ClientNotification,
  Project as ClientProject
} from './components/ClientNav';

export { ConsultantNav } from './components/ConsultantNav';
export type {
  AnalyticsData,
  Consultant,
  Client as ConsultantClient,
  ConsultantNavProps, Workspace as ConsultantWorkspace, NavigationItem,
  NavigationSection
} from './components/ConsultantNav';

export { default as SideNavigation } from './components/SideNavigation';
export type {
  NavigationItem as SideNavigationItem, SideNavigationProps
} from './components/SideNavigation';

export { default as MobileNav } from './components/MobileNav';
export type {
  NavigationItem as MobileNavigationItem, MobileNavProps, User as MobileUser, Workspace as MobileWorkspace
} from './components/MobileNav';

// Data Display Components
export { ActivityFeed } from './components/data-display/ActivityFeed';
export { CardGrid } from './components/data-display/CardGrid';
export { DataGrid } from './components/data-display/DataGrid';
export { DataTable } from './components/data-display/DataTable';
export { Timeline } from './components/data-display/Timeline';
export type {
  Activity,
  ActivityFeedProps,
  ActivityFilter,
  BulkAction, WorkspaceContext as DataDisplayWorkspaceContext, DataGridProps,
  DataTableProps,
  FilteringConfig,
  PaginationConfig,
  SelectionConfig,
  SortingConfig,
  TableColumn,
  TimelineEvent,
  TimelineFilter,
  TimelineProps,
  VirtualScrollConfig
} from './components/data-display/types';

// Form Components
export { FormBuilder } from './components/forms/FormBuilder';
export { FormTemplate } from './components/forms/FormTemplate';
export { FormWizard } from './components/forms/FormWizard';
export type {
  FormBuilderProps, FormField, FormSchema, FormState, FormTemplateCategory, FormTemplateMetadata, FormTemplateProps, FormTemplate as FormTemplateType, FormWizardProps, FormWizardStep, WorkspaceContext as FormWorkspaceContext, UseFormTemplateReturn
} from './components/forms/types';

// Communication Components
export { ChatInterface } from './components/communication/chat/ChatInterface';
export { CommentThread } from './components/communication/comment/CommentThread';
export type {
  CommentEvent,
  CommentPermission,
  CommentPriority,
  CommentStatus,
  CommentTheme, CommentThreadProps,
  ExtendedAnnotation,
  ExtendedComment
} from './components/communication/comment/types';
export { NotificationCenter } from './components/communication/notification/NotificationCenter';
export type {
  CategoryPreference, Notification,
  NotificationAction,
  NotificationCenterProps,
  NotificationPreferences, User as NotificationUser
} from './components/communication/notification/NotificationCenter';
export type {
  Annotation,
  Approval,
  Attachment,
  Comment, WorkspaceContext as CommunicationWorkspaceContext, Message,
  Position,
  ReviewItem,
  TextSelection,
  User
} from './components/communication/types';

