import { FilterGroup, FilterRule, TableColumn, WorkspaceContext } from './types';

// Workspace context utilities
export const getWorkspaceTheme = (context: WorkspaceContext = 'neutral') => {
  const themes = {
    consultant: {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-blue-50 text-blue-900 border-blue-200',
      accent: 'text-blue-600',
      hover: 'hover:bg-blue-50',
    },
    client: {
      primary: 'bg-green-600 text-white',
      secondary: 'bg-green-50 text-green-900 border-green-200',
      accent: 'text-green-600',
      hover: 'hover:bg-green-50',
    },
    admin: {
      primary: 'bg-purple-600 text-white',
      secondary: 'bg-purple-50 text-purple-900 border-purple-200',
      accent: 'text-purple-600',
      hover: 'hover:bg-purple-50',
    },
    expert: {
      primary: 'bg-orange-600 text-white',
      secondary: 'bg-orange-50 text-orange-900 border-orange-200',
      accent: 'text-orange-600',
      hover: 'hover:bg-orange-50',
    },
    'tool-creator': {
      primary: 'bg-indigo-600 text-white',
      secondary: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      accent: 'text-indigo-600',
      hover: 'hover:bg-indigo-50',
    },
    founder: {
      primary: 'bg-red-600 text-white',
      secondary: 'bg-red-50 text-red-900 border-red-200',
      accent: 'text-red-600',
      hover: 'hover:bg-red-50',
    },
    neutral: {
      primary: 'bg-gray-600 text-white',
      secondary: 'bg-gray-50 text-gray-900 border-gray-200',
      accent: 'text-gray-600',
      hover: 'hover:bg-gray-50',
    },
  };

  return themes[context];
};

// Permission checking utilities
export const hasPermission = (userPermissions: string[] = [], requiredPermission?: string): boolean => {
  if (!requiredPermission) return true;
  return userPermissions.includes(requiredPermission) || userPermissions.includes('*');
};

export const filterColumnsByPermissions = <T>(
  columns: TableColumn<T>[],
  userPermissions: string[] = [],
  context: WorkspaceContext = 'neutral'
): TableColumn<T>[] => {
  return columns.filter(column => {
    // Check permission
    if (!hasPermission(userPermissions, column.permission)) {
      return false;
    }

    // Check workspace context
    if (column.workspaceContext && !column.workspaceContext.includes(context)) {
      return false;
    }

    // Check if column is hidden
    if (column.hidden) {
      return false;
    }

    return true;
  });
};

// Data sorting utilities
export const sortData = <T>(
  data: T[],
  field: string,
  direction: 'asc' | 'desc'
): T[] => {
  return [...data].sort((a, b) => {
    const aValue = getNestedValue(a, field);
    const bValue = getNestedValue(b, field);

    if (aValue === null || aValue === undefined) return direction === 'asc' ? 1 : -1;
    if (bValue === null || bValue === undefined) return direction === 'asc' ? -1 : 1;

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (aValue instanceof Date && bValue instanceof Date) {
      return direction === 'asc'
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    // Fallback to string comparison
    const aStr = String(aValue);
    const bStr = String(bValue);
    return direction === 'asc'
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr);
  });
};

// Data filtering utilities
export const filterData = <T>(
  data: T[],
  filters: Record<string, any>,
  searchTerm?: string
): T[] => {
  let filteredData = [...data];

  // Apply search filter
  if (searchTerm && searchTerm.trim()) {
    const searchLower = searchTerm.toLowerCase();
    filteredData = filteredData.filter(item =>
      Object.values(item as any).some(value =>
        String(value).toLowerCase().includes(searchLower)
      )
    );
  }

  // Apply column filters
  Object.entries(filters).forEach(([field, filterValue]) => {
    if (filterValue !== undefined && filterValue !== null && filterValue !== '') {
      filteredData = filteredData.filter(item => {
        const itemValue = getNestedValue(item, field);

        if (Array.isArray(filterValue)) {
          return filterValue.includes(itemValue);
        }

        if (typeof filterValue === 'string') {
          return String(itemValue).toLowerCase().includes(filterValue.toLowerCase());
        }

        return itemValue === filterValue;
      });
    }
  });

  return filteredData;
};

// Advanced filter utilities
export const applyFilterGroup = <T>(data: T[], filterGroup: FilterGroup): T[] => {
  return data.filter(item => evaluateFilterGroup(item, filterGroup));
};

const evaluateFilterGroup = <T>(item: T, group: FilterGroup): boolean => {
  const results = group.rules.map(rule => {
    if ('logic' in rule) {
      // It's a nested group
      return evaluateFilterGroup(item, rule as FilterGroup);
    } else {
      // It's a filter rule
      return evaluateFilterRule(item, rule as FilterRule);
    }
  });

  return group.logic === 'and'
    ? results.every(Boolean)
    : results.some(Boolean);
};

const evaluateFilterRule = <T>(item: T, rule: FilterRule): boolean => {
  const itemValue = getNestedValue(item, rule.field);
  const { operator, value } = rule;

  switch (operator) {
    case 'equals':
      return itemValue === value;
    case 'not_equals':
      return itemValue !== value;
    case 'contains':
      return String(itemValue).toLowerCase().includes(String(value).toLowerCase());
    case 'not_contains':
      return !String(itemValue).toLowerCase().includes(String(value).toLowerCase());
    case 'starts_with':
      return String(itemValue).toLowerCase().startsWith(String(value).toLowerCase());
    case 'ends_with':
      return String(itemValue).toLowerCase().endsWith(String(value).toLowerCase());
    case 'greater_than':
      return Number(itemValue) > Number(value);
    case 'less_than':
      return Number(itemValue) < Number(value);
    case 'between':
      return Array.isArray(value) &&
             Number(itemValue) >= Number(value[0]) &&
             Number(itemValue) <= Number(value[1]);
    case 'in':
      return Array.isArray(value) && value.includes(itemValue);
    case 'not_in':
      return Array.isArray(value) && !value.includes(itemValue);
    case 'is_null':
      return itemValue === null || itemValue === undefined;
    case 'is_not_null':
      return itemValue !== null && itemValue !== undefined;
    default:
      return true;
  }
};

// Utility functions
export const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

export const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    if (!(key in current)) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
};

// Pagination utilities
export const paginateData = <T>(
  data: T[],
  page: number,
  pageSize: number
): { data: T[]; total: number; totalPages: number } => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    data: data.slice(startIndex, endIndex),
    total: data.length,
    totalPages: Math.ceil(data.length / pageSize),
  };
};

// Selection utilities
export const getRowKey = <T>(row: T, getRowKey?: (row: T) => string): string => {
  if (getRowKey) return getRowKey(row);
  if (typeof row === 'object' && row !== null && 'id' in row) {
    return String((row as any).id);
  }
  return JSON.stringify(row);
};

export const toggleSelection = (
  selectedKeys: string[],
  key: string,
  type: 'checkbox' | 'radio' = 'checkbox'
): string[] => {
  if (type === 'radio') {
    return [key];
  }

  const index = selectedKeys.indexOf(key);
  if (index > -1) {
    return selectedKeys.filter(k => k !== key);
  } else {
    return [...selectedKeys, key];
  }
};

// Export utilities
export const exportToCSV = <T>(data: T[], columns: TableColumn<T>[], filename = 'export.csv'): void => {
  const headers = columns.map(col => col.title);
  const rows = data.map(row =>
    columns.map(col => {
      const value = getNestedValue(row, String(col.key));
      return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : String(value || '');
    })
  );

  const csvContent = [headers, ...rows]
    .map(row => row.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToJSON = <T>(data: T[], filename = 'export.json'): void => {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// Virtual scrolling utilities
export const calculateVirtualItems = (
  totalItems: number,
  itemHeight: number,
  containerHeight: number,
  scrollTop: number,
  overscan = 5
) => {
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight)
  );

  const start = Math.max(0, visibleStart - overscan);
  const end = Math.min(totalItems - 1, visibleEnd + overscan);

  return {
    start,
    end,
    visibleStart,
    visibleEnd,
    totalHeight: totalItems * itemHeight,
    offsetY: start * itemHeight,
  };
};

// Accessibility utilities
export const getAriaSort = (
  columnKey: string,
  sortField?: string,
  sortDirection?: 'asc' | 'desc'
): 'ascending' | 'descending' | 'none' => {
  if (sortField !== columnKey) return 'none';
  return sortDirection === 'asc' ? 'ascending' : 'descending';
};

// Responsive utilities
export const getResponsiveColumns = (
  columns: TableColumn[],
  screenSize: 'sm' | 'md' | 'lg' | 'xl'
): TableColumn[] => {
  const priorities = {
    sm: ['id', 'name', 'title', 'status'],
    md: ['id', 'name', 'title', 'status', 'date', 'user'],
    lg: ['id', 'name', 'title', 'status', 'date', 'user', 'description'],
    xl: columns.map(col => String(col.key)),
  };

  const priorityFields = priorities[screenSize];

  return columns.filter(col =>
    priorityFields.includes(String(col.key)) ||
    col.fixed === 'left' ||
    col.fixed === 'right'
  );
};

// Debounce utility for search and filters
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Format utilities
export const formatCellValue = (value: any, column: TableColumn): string => {
  if (value === null || value === undefined) return '';

  if (column.render) {
    // If there's a custom render function, we can't format it as string
    return String(value);
  }

  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  if (typeof value === 'number') {
    return value.toLocaleString();
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
};
