import { ReactNode } from 'react';

// Workspace context types
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

// Base data types
export interface BaseDataItem {
  id: string;
  [key: string]: any;
}

// Table column configuration
export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  width?: number | string;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  permission?: string;
  workspaceContext?: WorkspaceContext[];
  render?: (value: any, row: T, index: number) => ReactNode;
  headerRender?: () => ReactNode;
  editable?: boolean;
  validator?: (value: any) => boolean | string;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
  hidden?: boolean;
}

// Sorting configuration
export interface SortingConfig {
  field?: string;
  direction?: 'asc' | 'desc';
  multiSort?: boolean;
  onSort?: (field: string, direction: 'asc' | 'desc') => void;
}

// Filtering configuration
export interface FilteringConfig {
  enabled?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  filters?: FilterOption[];
  onFilter?: (filters: Record<string, any>) => void;
  onSearch?: (searchTerm: string) => void;
}

export interface FilterOption {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number' | 'boolean';
  options?: { label: string; value: any }[];
  placeholder?: string;
}

// Pagination configuration
export interface PaginationConfig {
  enabled?: boolean;
  page?: number;
  pageSize?: number;
  total?: number;
  pageSizeOptions?: number[];
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  onPageChange?: (page: number, pageSize: number) => void;
}

// Selection configuration
export interface SelectionConfig<T = any> {
  enabled?: boolean;
  type?: 'checkbox' | 'radio';
  selectedKeys?: string[];
  onSelectionChange?: (selectedKeys: string[], selectedRows: T[]) => void;
  getRowKey?: (row: T) => string;
  selectAll?: boolean;
  preserveSelectedRowKeys?: boolean;
}

// Bulk actions
export interface BulkAction {
  id: string;
  label: string;
  icon?: string;
  permission?: string;
  workspaceContext?: WorkspaceContext[];
  onClick: (selectedRows: any[]) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  confirmMessage?: string;
}

// Virtual scrolling configuration
export interface VirtualScrollConfig {
  enabled?: boolean;
  itemHeight?: number;
  overscan?: number;
  scrollToIndex?: number;
  onScroll?: (scrollTop: number) => void;
}

// DataTable props
export interface DataTableProps<T = any> {
  // Core data
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;

  // Workspace context
  context?: WorkspaceContext;
  permissions?: string[];

  // Table features
  pagination?: PaginationConfig;
  sorting?: SortingConfig;
  filtering?: FilteringConfig;
  selection?: SelectionConfig<T>;
  bulkActions?: BulkAction[];
  virtualScrolling?: VirtualScrollConfig;

  // Behavior
  onRowClick?: (row: T, index: number) => void;
  onRowDoubleClick?: (row: T, index: number) => void;
  onCellClick?: (value: any, row: T, column: TableColumn<T>) => void;

  // Styling
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'striped' | 'bordered';
  responsive?: boolean;
  stickyHeader?: boolean;
  maxHeight?: number | string;

  // Advanced features
  expandable?: {
    expandedRowRender: (row: T) => ReactNode;
    expandedRowKeys?: string[];
    onExpand?: (expanded: boolean, row: T) => void;
  };

  // Export
  exportable?: boolean;
  onExport?: (data: T[]) => void;

  // Accessibility
  ariaLabel?: string;
  ariaLabelledBy?: string;

  // Custom styling
  className?: string;
  style?: React.CSSProperties;
}

// DataGrid props (for card-based layouts)
export interface DataGridProps<T = any> {
  // Core data
  data: T[];
  loading?: boolean;

  // Workspace context
  context?: WorkspaceContext;
  permissions?: string[];

  // Grid configuration
  columns?: number | 'auto';
  gap?: 'sm' | 'md' | 'lg' | number;
  itemHeight?: number | 'auto';

  // Card component
  cardComponent: React.ComponentType<{
    item: T;
    context?: WorkspaceContext;
    selected?: boolean;
    onSelect?: (selected: boolean) => void;
  }>;

  // Features
  pagination?: PaginationConfig;
  filtering?: FilteringConfig;
  selection?: SelectionConfig<T>;
  virtualScrolling?: VirtualScrollConfig;

  // Behavior
  onItemClick?: (item: T, index: number) => void;
  onItemDoubleClick?: (item: T, index: number) => void;

  // Infinite scroll
  infiniteScroll?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;

  // Styling
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Timeline types
export interface TimelineEvent {
  id: string;
  type: string;
  title: string;
  description?: string;
  timestamp: Date;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
  workspaceContext?: WorkspaceContext;
  metadata?: Record<string, any>;
  icon?: string;
  color?: string;
  status?: 'pending' | 'completed' | 'failed' | 'cancelled';
}

export interface TimelineFilter {
  key: string;
  label: string;
  value: any;
  type: 'user' | 'type' | 'date' | 'status';
}

export interface TimelineProps {
  // Core data
  events: TimelineEvent[];
  loading?: boolean;

  // Workspace context
  context?: WorkspaceContext;
  permissions?: string[];

  // Features
  groupBy?: 'date' | 'type' | 'user' | 'none';
  filtering?: TimelineFilter[];
  onEventClick?: (event: TimelineEvent) => void;
  onFilterChange?: (filters: TimelineFilter[]) => void;

  // Real-time updates
  realTimeUpdates?: boolean;
  onNewEvent?: (event: TimelineEvent) => void;

  // Styling
  responsive?: boolean;
  maxHeight?: number | string;
  showTime?: boolean;
  showUser?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Activity feed types
export interface Activity {
  id: string;
  type: string;
  title: string;
  description?: string;
  timestamp: Date;
  user: {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
  };
  target?: {
    id: string;
    type: string;
    name: string;
  };
  workspaceContext?: WorkspaceContext;
  metadata?: Record<string, any>;
  read?: boolean;
}

export interface ActivityFilter {
  users?: string[];
  types?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  unreadOnly?: boolean;
}

export interface ActivityFeedProps {
  // Core data
  activities: Activity[];
  loading?: boolean;

  // Workspace context
  context?: WorkspaceContext;
  permissions?: string[];

  // Features
  grouped?: boolean;
  onActivityClick?: (activity: Activity) => void;
  onUserClick?: (user: Activity['user']) => void;

  // Real-time updates
  realTimeUpdates?: boolean;
  onNewActivity?: (activity: Activity) => void;

  // Filtering
  userFilters?: Activity['user'][];
  typeFilters?: string[];
  onFilterChange?: (filters: ActivityFilter) => void;

  // Infinite scroll
  infiniteScroll?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;

  // Styling
  maxHeight?: number | string;
  showAvatars?: boolean;
  showTimestamps?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Export types
export interface ExportConfig {
  format: 'csv' | 'xlsx' | 'pdf' | 'json';
  filename?: string;
  includeHeaders?: boolean;
  selectedOnly?: boolean;
  columns?: string[];
}

export interface ExportProgress {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  message?: string;
  downloadUrl?: string;
  error?: string;
}

// Filter builder types
export interface FilterRule {
  id: string;
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'starts_with' | 'ends_with' | 'greater_than' | 'less_than' | 'between' | 'in' | 'not_in' | 'is_null' | 'is_not_null';
  value: any;
  type: 'text' | 'number' | 'date' | 'boolean' | 'select';
}

export interface FilterGroup {
  id: string;
  logic: 'and' | 'or';
  rules: (FilterRule | FilterGroup)[];
}

export interface FilterPreset {
  id: string;
  name: string;
  description?: string;
  filters: FilterGroup;
  workspaceContext?: WorkspaceContext[];
  shared?: boolean;
  createdBy?: string;
  createdAt?: Date;
}
