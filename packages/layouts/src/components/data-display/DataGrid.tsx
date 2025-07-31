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

export const DataGrid = <T extends Record<string, any>>({
  data,
  loading = false,
  context = 'neutral',
  permissions = [],
  columns = 'auto',
  gap = 'md',
  itemHeight = 'auto',
  cardComponent: CardComponent,
  pagination,
  filtering,
  selection,
  virtualScrolling,
  onItemClick,
  onItemDoubleClick,
  infiniteScroll = false,
  onLoadMore,
  hasMore = false,
  responsive = true,
  className = '',
  style,
}: DataGridProps<T>) => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<string[]>(selection?.selectedKeys || []);
  const [currentPage, setCurrentPage] = useState(pagination?.page || 1);
  const [pageSize, setPageSize] = useState(pagination?.pageSize || 12);
  const [scrollTop, setScrollTop] = useState(0);

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

  // Process data: filter, paginate
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply filtering
    if (filtering?.enabled !== false && searchTerm) {
      result = filterData(result, {}, searchTerm);
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
  }, [data, searchTerm, currentPage, pageSize, filtering, pagination, virtualScrolling, infiniteScroll]);

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

  // Grid layout calculations
  const gridConfig = useMemo(() => {
    if (typeof columns === 'number') {
      return {
        columns: `repeat(${columns}, 1fr)`,
        autoFit: false,
      };
    }

    // Auto-fit columns based on container width and item min-width
    const minItemWidth = 280; // Minimum card width
    const gapSize = gap === 'sm' ? 8 : gap === 'md' ? 16 : gap === 'lg' ? 24 : typeof gap === 'number' ? gap : 16;

    return {
      columns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
      autoFit: true,
      gap: gapSize,
    };
  }, [columns, gap]);

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

    return (
      <div
        key={itemKey}
        className={`
          ${responsive ? 'w-full' : ''}
          ${onItemClick ? 'cursor-pointer' : ''}
          transition-transform duration-150 hover:scale-[1.02]
        `}
        onClick={() => handleItemClick(item, index)}
        onDoubleClick={() => handleItemDoubleClick(item, index)}
        style={{
          height: itemHeight === 'auto' ? 'auto' : itemHeight,
        }}
      >
        <CardComponent
          item={item}
          context={context}
          selected={isSelected}
          onSelect={selection?.enabled ? () => handleItemSelection(itemKey) : undefined}
        />
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
      {/* Search/Filter Bar */}
      {filtering?.enabled !== false && (
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder={filtering?.searchPlaceholder || "Search items..."}
                onChange={(e) => debouncedSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
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
        {virtualScrolling?.enabled ? renderVirtualizedGrid() : renderRegularGrid()}

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

export default DataGrid;
