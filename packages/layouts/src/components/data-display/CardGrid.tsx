import { EmptyState, Spinner } from '@wheel/ui';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { DataGridProps } from './types';
import {
  calculateVirtualItems,
  debounce,
  filterData,
  getRowKey,
  getWorkspaceTheme,
  paginateData,
  toggleSelection
} from './utils';

export interface CardGridProps<T = any> extends Omit<DataGridProps<T>, 'cardComponent'> {
  // Card rendering
  renderCard: (item: T, index: number, context?: string) => React.ReactNode;

  // Grid layout
  minCardWidth?: number;
  maxCardWidth?: number;
  aspectRatio?: number;

  // Enhanced features
  sortable?: boolean;
  sortOptions?: Array<{
    key: string;
    label: string;
    direction?: 'asc' | 'desc';
  }>;
  onSort?: (sortKey: string, direction: 'asc' | 'desc') => void;

  // Drag and drop
  draggable?: boolean;
  onDragStart?: (item: T, index: number) => void;
  onDragEnd?: (item: T, fromIndex: number, toIndex: number) => void;

  // Masonry layout
  masonry?: boolean;
  masonryBreakpoints?: Record<number, number>;
}

export const CardGrid = <T extends Record<string, any>>({
  data,
  loading = false,
  context = 'neutral',
  permissions = [],
  columns = 'auto',
  gap = 'md',
  itemHeight = 'auto',
  renderCard,
  minCardWidth = 280,
  maxCardWidth = 400,
  aspectRatio,
  pagination,
  filtering,
  selection,
  virtualScrolling,
  sortable = false,
  sortOptions = [],
  onSort,
  draggable = false,
  onDragStart,
  onDragEnd,
  masonry = false,
  masonryBreakpoints,
  onItemClick,
  onItemDoubleClick,
  infiniteScroll = false,
  onLoadMore,
  hasMore = false,
  responsive = true,
  className = '',
  style,
}: CardGridProps<T>) => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<string[]>(selection?.selectedKeys || []);
  const [currentPage, setCurrentPage] = useState(pagination?.page || 1);
  const [pageSize, setPageSize] = useState(pagination?.pageSize || 12);
  const [scrollTop, setScrollTop] = useState(0);
  const [sortKey, setSortKey] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [draggedItem, setDraggedItem] = useState<{ item: T; index: number } | null>(null);

  // Refs
  const gridRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Get workspace theme
  const theme = getWorkspaceTheme(context);

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

  // Process data: filter, sort, paginate
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply filtering
    if (filtering?.enabled !== false && searchTerm) {
      result = filterData(result, {}, searchTerm);
    }

    // Apply sorting
    if (sortKey && onSort) {
      onSort(sortKey, sortDirection);
    } else if (sortKey) {
      result.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Apply pagination (if not using virtual scrolling or infinite scroll)
    if (pagination?.enabled !== false && !virtualScrolling?.enabled && !infiniteScroll) {
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
  }, [data, searchTerm, sortKey, sortDirection, currentPage, pageSize, filtering, pagination, virtualScrolling, infiniteScroll, onSort]);

  // Grid layout calculations
  const gridConfig = useMemo(() => {
    if (typeof columns === 'number') {
      return {
        columns: `repeat(${columns}, 1fr)`,
        autoFit: false,
      };
    }

    // Auto-fit columns based on container width and card constraints
    const gapSize = gap === 'sm' ? 8 : gap === 'md' ? 16 : gap === 'lg' ? 24 : typeof gap === 'number' ? gap : 16;

    if (masonry) {
      // Masonry layout uses CSS columns
      return {
        columns: 'auto',
        autoFit: true,
        gap: gapSize,
        masonry: true,
      };
    }

    return {
      columns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`,
      autoFit: true,
      gap: gapSize,
    };
  }, [columns, gap, minCardWidth, masonry]);

  // Virtual scrolling calculations
  const virtualItems = useMemo(() => {
    if (!virtualScrolling?.enabled || !gridRef.current || itemHeight === 'auto') {
      return null;
    }

    const containerHeight = gridRef.current.clientHeight;
    const itemHeightNum = typeof itemHeight === 'number' ? itemHeight : 200;

    return calculateVirtualItems(
      processedData.data.length,
      itemHeightNum,
      containerHeight,
      scrollTop,
      virtualScrolling.overscan
    );
  }, [virtualScrolling, processedData.data.length, scrollTop, itemHeight]);

  // Event handlers
  const handleItemSelection = useCallback((itemKey: string) => {
    if (!selection?.enabled) return;

    const newSelectedKeys = toggleSelection(selectedKeys, itemKey, selection.type);
    setSelectedKeys(newSelectedKeys);

    if (selection.onSelectionChange) {
      const selectedItems = processedData.data.filter(item =>
        newSelectedKeys.includes(getRowKey(item, selection.getRowKey))
      );
      selection.onSelectionChange(newSelectedKeys, selectedItems);
    }
  }, [selectedKeys, selection, processedData.data]);

  const handleItemClick = useCallback((item: T, index: number) => {
    onItemClick?.(item, index);
  }, [onItemClick]);

  const handleItemDoubleClick = useCallback((item: T, index: number) => {
    onItemDoubleClick?.(item, index);
  }, [onItemDoubleClick]);

  const handleSort = useCallback((newSortKey: string) => {
    const newDirection = sortKey === newSortKey && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortKey(newSortKey);
    setSortDirection(newDirection);
  }, [sortKey, sortDirection]);

  const handleDragStart = useCallback((item: T, index: number) => {
    if (!draggable) return;

    setDraggedItem({ item, index });
    onDragStart?.(item, index);
  }, [draggable, onDragStart]);

  const handleDragEnd = useCallback((item: T, fromIndex: number, toIndex: number) => {
    if (!draggable) return;

    setDraggedItem(null);
    onDragEnd?.(item, fromIndex, toIndex);
  }, [draggable, onDragEnd]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (virtualScrolling?.enabled) {
      setScrollTop(e.currentTarget.scrollTop);
      if (virtualScrolling.onScroll) {
        virtualScrolling.onScroll(e.currentTarget.scrollTop);
      }
    }
  }, [virtualScrolling]);

  // Infinite scroll setup
  React.useEffect(() => {
    if (!infiniteScroll || !loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && onLoadMore) {
          onLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [infiniteScroll, hasMore, onLoadMore]);

  // Gap classes
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const gapClass = typeof gap === 'string' ? gapClasses[gap] : '';

  // Render functions
  const renderGridItem = (item: T, index: number) => {
    const itemKey = getRowKey(item, selection?.getRowKey);
    const isSelected = selectedKeys.includes(itemKey);
    const isDragged = draggedItem?.item === item;

    return (
      <div
        key={itemKey}
        className={`
          ${responsive ? 'w-full' : ''}
          ${onItemClick ? 'cursor-pointer' : ''}
          ${isDragged ? 'opacity-50' : ''}
          ${isSelected ? 'ring-2 ring-blue-500' : ''}
          transition-all duration-150 hover:scale-[1.02]
        `}
        style={{
          height: itemHeight === 'auto' ? 'auto' : itemHeight,
          maxWidth: maxCardWidth,
          aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
        }}
        draggable={draggable}
        onDragStart={() => handleDragStart(item, index)}
        onDragEnd={() => handleDragEnd(item, draggedItem?.index || 0, index)}
        onClick={() => handleItemClick(item, index)}
        onDoubleClick={() => handleItemDoubleClick(item, index)}
      >
        <div className="relative h-full">
          {selection?.enabled && (
            <div className="absolute top-2 right-2 z-10">
              <input
                type={selection.type === 'radio' ? 'radio' : 'checkbox'}
                checked={isSelected}
                onChange={() => handleItemSelection(itemKey)}
                className="w-4 h-4"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          {renderCard(item, index, context)}
        </div>
      </div>
    );
  };

  const renderVirtualizedGrid = () => {
    if (!virtualItems) return null;

    const { start, end, totalHeight, offsetY } = virtualItems;
    const visibleItems = processedData.data.slice(start, end + 1);

    return (
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          <div
            className={`grid ${gapClass}`}
            style={{
              gridTemplateColumns: gridConfig.columns,
              gap: typeof gap === 'number' ? `${gap}px` : undefined,
            }}
          >
            {visibleItems.map((item, index) => renderGridItem(item, start + index))}
          </div>
        </div>
      </div>
    );
  };

  const renderMasonryGrid = () => (
    <div
      className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
      style={{
        columnGap: typeof gap === 'number' ? `${gap}px` : undefined,
      }}
    >
      {processedData.data.map((item, index) => (
        <div key={getRowKey(item, selection?.getRowKey)} className="break-inside-avoid mb-4">
          {renderGridItem(item, index)}
        </div>
      ))}
    </div>
  );

  const renderRegularGrid = () => (
    <div
      className={`grid ${gapClass}`}
      style={{
        gridTemplateColumns: gridConfig.columns,
        gap: typeof gap === 'number' ? `${gap}px` : undefined,
      }}
    >
      {processedData.data.map((item, index) => renderGridItem(item, index))}
    </div>
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
        title="No items found"
        description={searchTerm ? "No results found for your search." : "There are no items to display."}
        actions={searchTerm ? (
          <button
            onClick={() => setSearchTerm('')}
            className={`px-4 py-2 rounded-md ${theme.primary} hover:opacity-90 transition-opacity`}
          >
            Clear search
          </button>
        ) : undefined}
      />
    );
  }

  return (
    <div className={`${className}`} style={style}>
      {/* Toolbar */}
      {(filtering?.enabled !== false || sortable || selectedKeys.length > 0) && (
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search and Filters */}
            <div className="flex items-center gap-4 flex-1">
              {filtering?.enabled !== false && (
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder={filtering?.searchPlaceholder || "Search items..."}
                    onChange={(e) => debouncedSearch(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}

              {sortable && sortOptions.length > 0 && (
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortKey}
                    onChange={(e) => handleSort(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Default</option>
                    {sortOptions.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {sortKey && (
                    <button
                      onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                      className="p-2 text-gray-500 hover:text-gray-700"
                      title={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
                    >
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Selection Info */}
            {selectedKeys.length > 0 && (
              <div className="text-sm text-gray-600">
                {selectedKeys.length} selected
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grid Container */}
      <div
        ref={gridRef}
        className={`
          ${virtualScrolling?.enabled ? 'overflow-auto' : ''}
          ${responsive ? 'w-full' : ''}
        `}
        style={{
          maxHeight: virtualScrolling?.enabled ? 600 : undefined,
        }}
        onScroll={handleScroll}
      >
        {virtualScrolling?.enabled
          ? renderVirtualizedGrid()
          : masonry
            ? renderMasonryGrid()
            : renderRegularGrid()
        }

        {/* Infinite Scroll Trigger */}
        {infiniteScroll && hasMore && (
          <div ref={loadMoreRef} className="flex justify-center py-4">
            <Spinner size="md" />
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination?.enabled !== false && !virtualScrolling?.enabled && !infiniteScroll && processedData.totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.filteredTotal)} of {processedData.filteredTotal} results
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`
                px-3 py-1 text-sm border rounded-md
                ${currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                }
              `}
            >
              Previous
            </button>

            <span className="text-sm text-gray-700 px-3">
              Page {currentPage} of {processedData.totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(Math.min(processedData.totalPages, currentPage + 1))}
              disabled={currentPage === processedData.totalPages}
              className={`
                px-3 py-1 text-sm border rounded-md
                ${currentPage === processedData.totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                }
              `}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
