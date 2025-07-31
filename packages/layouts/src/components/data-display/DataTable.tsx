import { Button, Checkbox, EmptyState, Input, Spinner } from '@wheel/ui';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { DataTableProps } from './types';
import {
  calculateVirtualItems,
  debounce,
  filterColumnsByPermissions,
  filterData,
  formatCellValue,
  getAriaSort,
  getNestedValue,
  getRowKey,
  getWorkspaceTheme,
  paginateData,
  sortData,
  toggleSelection
} from './utils';

export const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  context = 'neutral',
  permissions = [],
  pagination,
  sorting,
  filtering,
  selection,
  bulkActions = [],
  virtualScrolling,
  onRowClick,
  onRowDoubleClick,
  onCellClick,
  size = 'md',
  variant = 'default',
  responsive = true,
  stickyHeader = false,
  maxHeight,
  expandable,
  exportable = false,
  onExport,
  ariaLabel,
  ariaLabelledBy,
  className = '',
  style,
}: DataTableProps<T>) => {
  // State management
  const [sortField, setSortField] = useState<string | undefined>(sorting?.field);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(sorting?.direction || 'asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [columnFilters, setColumnFilters] = useState<Record<string, any>>({});
  const [selectedKeys, setSelectedKeys] = useState<string[]>(selection?.selectedKeys || []);
  const [expandedKeys, setExpandedKeys] = useState<string[]>(expandable?.expandedRowKeys || []);
  const [currentPage, setCurrentPage] = useState(pagination?.page || 1);
  const [pageSize, setPageSize] = useState(pagination?.pageSize || 10);
  const [scrollTop, setScrollTop] = useState(0);

  // Refs
  const tableRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLTableSectionElement>(null);

  // Get workspace theme
  const theme = getWorkspaceTheme(context);

  // Filter columns by permissions and context
  const visibleColumns = useMemo(() => {
    return filterColumnsByPermissions(columns, permissions, context);
  }, [columns, permissions, context]);

  // Process data: filter, sort, paginate
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply filtering
    if (filtering?.enabled !== false) {
      result = filterData(result, columnFilters, searchTerm);
    }

    // Apply sorting
    if (sortField && sorting?.onSort) {
      // External sorting
      sorting.onSort(sortField, sortDirection);
    } else if (sortField) {
      // Internal sorting
      result = sortData(result, sortField, sortDirection);
    }

    // Apply pagination
    if (pagination?.enabled !== false && !virtualScrolling?.enabled) {
      const paginatedResult = paginateData(result, currentPage, pageSize);
      return {
        data: paginatedResult.data,
        total: paginatedResult.total,
        totalPages: paginatedResult.totalPages,
        filteredTotal: result.length,
      };
    }

    return {
      data: result,
      total: result.length,
      totalPages: 1,
      filteredTotal: result.length,
    };
  }, [data, columnFilters, searchTerm, sortField, sortDirection, currentPage, pageSize, filtering, sorting, pagination, virtualScrolling]);

  // Virtual scrolling calculations
  const virtualItems = useMemo(() => {
    if (!virtualScrolling?.enabled || !tableRef.current) {
      return null;
    }

    const containerHeight = tableRef.current.clientHeight;
    const itemHeight = virtualScrolling.itemHeight || 48;

    return calculateVirtualItems(
      processedData.data.length,
      itemHeight,
      containerHeight,
      scrollTop,
      virtualScrolling.overscan
    );
  }, [virtualScrolling, processedData.data.length, scrollTop]);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      setCurrentPage(1);
      if (filtering?.onSearch) {
        filtering.onSearch(term);
      }
    }, 300),
    [filtering]
  );

  // Event handlers
  const handleSort = useCallback((columnKey: string) => {
    const column = visibleColumns.find(col => String(col.key) === columnKey);
    if (!column?.sortable) return;

    const newDirection = sortField === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(columnKey);
    setSortDirection(newDirection);

    if (sorting?.onSort) {
      sorting.onSort(columnKey, newDirection);
    }
  }, [visibleColumns, sortField, sortDirection, sorting]);

  const handleRowSelection = useCallback((rowKey: string) => {
    if (!selection?.enabled) return;

    const newSelectedKeys = toggleSelection(selectedKeys, rowKey, selection.type);
    setSelectedKeys(newSelectedKeys);

    if (selection.onSelectionChange) {
      const selectedRows = processedData.data.filter(row =>
        newSelectedKeys.includes(getRowKey(row, selection.getRowKey))
      );
      selection.onSelectionChange(newSelectedKeys, selectedRows);
    }
  }, [selectedKeys, selection, processedData.data]);

  const handleSelectAll = useCallback(() => {
    if (!selection?.enabled || selection.type === 'radio') return;

    const allKeys = processedData.data.map(row => getRowKey(row, selection.getRowKey));
    const newSelectedKeys = selectedKeys.length === allKeys.length ? [] : allKeys;
    setSelectedKeys(newSelectedKeys);

    if (selection.onSelectionChange) {
      const selectedRows = newSelectedKeys.length > 0 ? processedData.data : [];
      selection.onSelectionChange(newSelectedKeys, selectedRows);
    }
  }, [selectedKeys, selection, processedData.data]);

  const handleBulkAction = useCallback((actionId: string) => {
    const action = bulkActions.find(a => a.id === actionId);
    if (!action) return;

    const selectedRows = processedData.data.filter(row =>
      selectedKeys.includes(getRowKey(row, selection?.getRowKey))
    );

    if (action.confirmMessage && !window.confirm(action.confirmMessage)) {
      return;
    }

    action.onClick(selectedRows);
  }, [bulkActions, processedData.data, selectedKeys, selection]);

  const handleExport = useCallback(() => {
    if (!exportable || !onExport) return;

    const exportData = selectedKeys.length > 0
      ? processedData.data.filter(row => selectedKeys.includes(getRowKey(row, selection?.getRowKey)))
      : processedData.data;

    onExport(exportData);
  }, [exportable, onExport, processedData.data, selectedKeys, selection]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (virtualScrolling?.enabled) {
      setScrollTop(e.currentTarget.scrollTop);
      if (virtualScrolling.onScroll) {
        virtualScrolling.onScroll(e.currentTarget.scrollTop);
      }
    }
  }, [virtualScrolling]);

  // Size classes
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const cellPaddingClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-2',
    lg: 'px-4 py-3',
  };

  // Variant classes
  const variantClasses = {
    default: '',
    striped: '[&>tbody>tr:nth-child(odd)]:bg-gray-50',
    bordered: 'border border-gray-200',
  };

  // Render functions
  const renderTableHeader = () => (
    <thead
      ref={headerRef}
      className={`bg-gray-50 ${stickyHeader ? 'sticky top-0 z-10' : ''}`}
    >
      <tr>
        {selection?.enabled && (
          <th className={`${cellPaddingClasses[size]} w-12`}>
            {selection.type === 'checkbox' && selection.selectAll !== false && (
              <Checkbox
                checked={selectedKeys.length === processedData.data.length && processedData.data.length > 0}
                onChange={handleSelectAll}
                aria-label="Select all rows"
              />
            )}
          </th>
        )}

        {visibleColumns.map((column) => (
          <th
            key={String(column.key)}
            className={`
              ${cellPaddingClasses[size]}
              text-left font-medium text-gray-900
              ${column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}
              ${column.align === 'center' ? 'text-center' : ''}
              ${column.align === 'right' ? 'text-right' : ''}
            `}
            style={{
              width: column.width,
              minWidth: column.minWidth,
              maxWidth: column.maxWidth,
            }}
            onClick={() => column.sortable && handleSort(String(column.key))}
            aria-sort={getAriaSort(String(column.key), sortField, sortDirection)}
          >
            <div className="flex items-center gap-1">
              {column.headerRender ? column.headerRender() : column.title}
              {column.sortable && (
                <div className="flex flex-col">
                  <span
                    className={`text-xs ${
                      sortField === String(column.key) && sortDirection === 'asc'
                        ? 'text-blue-600'
                        : 'text-gray-400'
                    }`}
                  >
                    ▲
                  </span>
                  <span
                    className={`text-xs -mt-1 ${
                      sortField === String(column.key) && sortDirection === 'desc'
                        ? 'text-blue-600'
                        : 'text-gray-400'
                    }`}
                  >
                    ▼
                  </span>
                </div>
              )}
              {column.filterable && (
                <span className="text-xs text-gray-400">🔍</span>
              )}
            </div>
          </th>
        ))}

        {expandable && (
          <th className={`${cellPaddingClasses[size]} w-12`}>
            <span className="sr-only">Expand</span>
          </th>
        )}
      </tr>
    </thead>
  );

  const renderTableRow = (row: T, index: number) => {
    const rowKey = getRowKey(row, selection?.getRowKey);
    const isSelected = selectedKeys.includes(rowKey);
    const isExpanded = expandedKeys.includes(rowKey);

    return (
      <React.Fragment key={rowKey}>
        <tr
          className={`
            ${isSelected ? theme.secondary : 'hover:bg-gray-50'}
            ${onRowClick ? 'cursor-pointer' : ''}
            transition-colors duration-150
          `}
          onClick={() => onRowClick?.(row, index)}
          onDoubleClick={() => onRowDoubleClick?.(row, index)}
        >
          {selection?.enabled && (
            <td className={cellPaddingClasses[size]}>
              <Checkbox
                checked={isSelected}
                onChange={() => handleRowSelection(rowKey)}
                aria-label={`Select row ${index + 1}`}
              />
            </td>
          )}

          {visibleColumns.map((column) => {
            const value = getNestedValue(row, String(column.key));

            return (
              <td
                key={String(column.key)}
                className={`
                  ${cellPaddingClasses[size]}
                  ${column.align === 'center' ? 'text-center' : ''}
                  ${column.align === 'right' ? 'text-right' : ''}
                  ${onCellClick ? 'cursor-pointer' : ''}
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  onCellClick?.(value, row, column);
                }}
              >
                {column.render ? column.render(value, row, index) : formatCellValue(value, column)}
              </td>
            );
          })}

          {expandable && (
            <td className={cellPaddingClasses[size]}>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const newExpandedKeys = expandedKeys.includes(rowKey)
                    ? expandedKeys.filter(k => k !== rowKey)
                    : [...expandedKeys, rowKey];
                  setExpandedKeys(newExpandedKeys);
                  expandable.onExpand?.(!isExpanded, row);
                }}
                aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
              >
                {isExpanded ? (
                  <span className="text-sm">▲</span>
                ) : (
                  <span className="text-sm">▼</span>
                )}
              </Button>
            </td>
          )}
        </tr>

        {expandable && isExpanded && (
          <tr>
            <td
              colSpan={visibleColumns.length + (selection?.enabled ? 1 : 0) + 1}
              className="p-0"
            >
              <div className="bg-gray-50 p-4">
                {expandable.expandedRowRender(row)}
              </div>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  };

  const renderVirtualizedRows = () => {
    if (!virtualItems) return null;

    const { start, end, totalHeight, offsetY } = virtualItems;
    const visibleRows = processedData.data.slice(start, end + 1);

    return (
      <tbody style={{ height: totalHeight }}>
        <tr style={{ height: offsetY }}>
          <td colSpan={visibleColumns.length + (selection?.enabled ? 1 : 0) + (expandable ? 1 : 0)} />
        </tr>
        {visibleRows.map((row, index) => renderTableRow(row, start + index))}
      </tbody>
    );
  };

  const renderRegularRows = () => (
    <tbody>
      {processedData.data.map((row, index) => renderTableRow(row, index))}
    </tbody>
  );

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Spinner size="lg" />
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    );
  }

  // Empty state
  if (processedData.data.length === 0) {
    return (
      <EmptyState
        title="No data available"
        description={searchTerm ? "No results found for your search." : "There are no items to display."}
        actions={searchTerm ? (
          <Button onClick={() => setSearchTerm('')}>
            Clear search
          </Button>
        ) : undefined}
      />
    );
  }

  return (
    <div className={`${className}`} style={style}>
      {/* Toolbar */}
      {(filtering?.enabled !== false || bulkActions.length > 0 || exportable) && (
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            {filtering?.searchable !== false && (
              <div className="flex-1 max-w-sm">
                <Input
                  name="search"
                  placeholder={filtering?.searchPlaceholder || "Search..."}
                  onChange={(e) => debouncedSearch(e.target.value)}
                  className="w-full"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {selectedKeys.length > 0 && bulkActions.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {selectedKeys.length} selected
                </span>
                {bulkActions.map((action) => (
                  <Button
                    key={action.id}
                    variant={action.variant || 'secondary'}
                    size="sm"
                    onClick={() => handleBulkAction(action.id)}
                    disabled={action.disabled}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}

            {exportable && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
              >
                Export
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div
        ref={tableRef}
        className={`
          overflow-auto border border-gray-200 rounded-lg
          ${maxHeight ? '' : 'max-h-96'}
        `}
        style={{ maxHeight }}
        onScroll={handleScroll}
      >
        <table
          className={`
            min-w-full divide-y divide-gray-200
            ${sizeClasses[size]}
            ${variantClasses[variant]}
          `}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        >
          {renderTableHeader()}
          {virtualScrolling?.enabled ? renderVirtualizedRows() : renderRegularRows()}
        </table>
      </div>

      {/* Pagination */}
      {pagination?.enabled !== false && !virtualScrolling?.enabled && processedData.totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.filteredTotal)} of {processedData.filteredTotal} results
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <span className="text-sm text-gray-700">
              Page {currentPage} of {processedData.totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(processedData.totalPages, currentPage + 1))}
              disabled={currentPage === processedData.totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
