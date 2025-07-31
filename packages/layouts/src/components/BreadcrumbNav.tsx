import { cn } from '@wheel/shared';
import { ChevronRight, Home } from 'lucide-react';
import React from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

export interface BreadcrumbItem {
  id: string;
  label: string;
  path?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  workspaceContext?: WorkspaceContext;
}

export interface BreadcrumbNavProps {
  context?: WorkspaceContext;
  items: BreadcrumbItem[];
  maxItems?: number;
  separator?: React.ReactNode;
  onItemClick?: (item: BreadcrumbItem) => void;
  responsive?: boolean;
  generateFromPath?: boolean;
  workspaceScoped?: boolean;
  className?: string;
  showHome?: boolean;
}

const contextStyles = {
  consultant: 'text-blue-600 hover:text-blue-700 border-blue-200',
  client: 'text-green-600 hover:text-green-700 border-green-200',
  admin: 'text-red-600 hover:text-red-700 border-red-200',
  expert: 'text-purple-600 hover:text-purple-700 border-purple-200',
  'tool-creator': 'text-orange-600 hover:text-orange-700 border-orange-200',
  founder: 'text-amber-600 hover:text-amber-700 border-amber-200',
  neutral: 'text-gray-600 hover:text-gray-700 border-gray-200',
};

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  context = 'neutral',
  items,
  maxItems = 5,
  separator,
  onItemClick,
  responsive = true,
  generateFromPath = false,
  workspaceScoped = false,
  className,
  showHome = true,
  ...props
}) => {
  // Process items based on maxItems limit
  const processedItems = React.useMemo(() => {
    if (items.length <= maxItems) {
      return items;
    }

    // Show first item, ellipsis, and last few items
    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 2));

    return [
      firstItem,
      { id: 'ellipsis', label: '...', disabled: true },
      ...lastItems,
    ];
  }, [items, maxItems]);

  const handleItemClick = (item: BreadcrumbItem) => {
    if (item.disabled || item.id === 'ellipsis') return;
    onItemClick?.(item);
  };

  const renderSeparator = () => {
    if (separator) return separator;
    return <ChevronRight className="h-4 w-4 text-gray-400" />;
  };

  const getItemStyles = (item: BreadcrumbItem, isLast: boolean) => {
    const baseStyles = 'inline-flex items-center gap-1 text-sm transition-colors';

    if (item.disabled || item.id === 'ellipsis') {
      return cn(baseStyles, 'text-gray-400 cursor-default');
    }

    if (isLast) {
      return cn(baseStyles, 'text-gray-900 font-medium cursor-default');
    }

    const contextStyle = contextStyles[item.workspaceContext || context];
    return cn(
      baseStyles,
      'hover:underline cursor-pointer',
      contextStyle
    );
  };

  return (
    <nav
      className={cn(
        'flex items-center space-x-1 text-sm',
        responsive && 'flex-wrap',
        className
      )}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-1">
        {showHome && (
          <>
            <li>
              <button
                onClick={() => onItemClick?.({ id: 'home', label: 'Home', path: '/' })}
                className={cn(
                  'inline-flex items-center text-sm transition-colors hover:underline',
                  contextStyles[context]
                )}
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </button>
            </li>
            {processedItems.length > 0 && (
              <li className="flex items-center">
                {renderSeparator()}
              </li>
            )}
          </>
        )}

        {processedItems.map((item, index) => {
          const isLast = index === processedItems.length - 1;

          return (
            <React.Fragment key={item.id}>
              <li>
                {item.path && !item.disabled && !isLast ? (
                  <button
                    onClick={() => handleItemClick(item)}
                    className={getItemStyles(item, isLast)}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.icon && (
                      <span className="h-4 w-4" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className={responsive ? 'truncate max-w-[120px] sm:max-w-none' : ''}>
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <span
                    className={getItemStyles(item, isLast)}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.icon && (
                      <span className="h-4 w-4" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className={responsive ? 'truncate max-w-[120px] sm:max-w-none' : ''}>
                      {item.label}
                    </span>
                  </span>
                )}
              </li>

              {!isLast && (
                <li className="flex items-center" aria-hidden="true">
                  {renderSeparator()}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
