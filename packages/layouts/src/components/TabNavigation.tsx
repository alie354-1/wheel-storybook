import { cn } from '@wheel/shared';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
  disabled?: boolean;
  lazy?: boolean;
  permission?: string;
  workspaceContext?: WorkspaceContext;
  content?: React.ReactNode;
  closable?: boolean;
}

export interface TabNavigationProps {
  context?: WorkspaceContext;
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tab: TabItem) => void;
  onTabClose?: (tab: TabItem) => void;
  variant?: 'line' | 'card' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  scrollable?: boolean;
  responsive?: boolean;
  lazy?: boolean;
  permissions?: string[];
  className?: string;
  tabListClassName?: string;
  tabPanelClassName?: string;
  showContent?: boolean;
}

const contextStyles = {
  consultant: {
    active: 'border-blue-500 text-blue-600',
    inactive: 'text-gray-500 hover:text-blue-600 hover:border-blue-300',
    background: 'bg-blue-50',
  },
  client: {
    active: 'border-green-500 text-green-600',
    inactive: 'text-gray-500 hover:text-green-600 hover:border-green-300',
    background: 'bg-green-50',
  },
  admin: {
    active: 'border-red-500 text-red-600',
    inactive: 'text-gray-500 hover:text-red-600 hover:border-red-300',
    background: 'bg-red-50',
  },
  expert: {
    active: 'border-purple-500 text-purple-600',
    inactive: 'text-gray-500 hover:text-purple-600 hover:border-purple-300',
    background: 'bg-purple-50',
  },
  'tool-creator': {
    active: 'border-orange-500 text-orange-600',
    inactive: 'text-gray-500 hover:text-orange-600 hover:border-orange-300',
    background: 'bg-orange-50',
  },
  founder: {
    active: 'border-amber-500 text-amber-600',
    inactive: 'text-gray-500 hover:text-amber-600 hover:border-amber-300',
    background: 'bg-amber-50',
  },
  neutral: {
    active: 'border-gray-500 text-gray-900',
    inactive: 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
    background: 'bg-gray-50',
  },
};

const variantStyles = {
  line: {
    tabList: 'border-b border-gray-200',
    tab: 'border-b-2 border-transparent px-4 py-2',
    activeTab: 'border-b-2',
  },
  card: {
    tabList: 'bg-gray-100 p-1 rounded-lg',
    tab: 'px-3 py-1.5 rounded-md',
    activeTab: 'bg-white shadow-sm',
  },
  pill: {
    tabList: 'space-x-1',
    tab: 'px-3 py-1.5 rounded-full',
    activeTab: 'shadow-sm',
  },
};

const sizeStyles = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export const TabNavigation: React.FC<TabNavigationProps> = ({
  context = 'neutral',
  tabs,
  activeTab,
  onTabChange,
  onTabClose,
  variant = 'line',
  size = 'md',
  scrollable = true,
  responsive = true,
  lazy = false,
  permissions = [],
  className,
  tabListClassName,
  tabPanelClassName,
  showContent = true,
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab || tabs[0]?.id);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);
  const [loadedTabs, setLoadedTabs] = useState<Set<string>>(new Set([internalActiveTab]));

  const currentActiveTab = activeTab || internalActiveTab;

  // Filter tabs based on permissions
  const filteredTabs = React.useMemo(() => {
    return tabs.filter(tab => {
      if (!tab.permission) return true;
      return permissions.includes(tab.permission);
    });
  }, [tabs, permissions]);

  // Check scroll state
  const checkScrollState = React.useCallback(() => {
    if (!tabListRef.current || !scrollable) return;

    const { scrollLeft, scrollWidth, clientWidth } = tabListRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    setShowScrollButtons(scrollWidth > clientWidth);
  }, [scrollable]);

  useEffect(() => {
    checkScrollState();
    const handleResize = () => checkScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkScrollState, filteredTabs]);

  useEffect(() => {
    if (lazy && currentActiveTab && !loadedTabs.has(currentActiveTab)) {
      setLoadedTabs(prev => new Set([...prev, currentActiveTab]));
    }
  }, [currentActiveTab, lazy, loadedTabs]);

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return;

    const newActiveTab = tab.id;
    setInternalActiveTab(newActiveTab);
    onTabChange?.(tab);

    if (lazy && !loadedTabs.has(newActiveTab)) {
      setLoadedTabs(prev => new Set([...prev, newActiveTab]));
    }
  };

  const handleTabClose = (tab: TabItem, event: React.MouseEvent) => {
    event.stopPropagation();
    onTabClose?.(tab);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (!tabListRef.current) return;

    const scrollAmount = 200;
    const newScrollLeft = direction === 'left'
      ? tabListRef.current.scrollLeft - scrollAmount
      : tabListRef.current.scrollLeft + scrollAmount;

    tabListRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

    setTimeout(checkScrollState, 300);
  };

  const getTabStyles = (tab: TabItem, isActive: boolean) => {
    const baseStyles = cn(
      'inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      sizeStyles[size],
      variantStyles[variant].tab
    );

    if (tab.disabled) {
      return cn(baseStyles, 'opacity-50 cursor-not-allowed text-gray-400');
    }

    const contextStyle = contextStyles[tab.workspaceContext || context];

    if (isActive) {
      return cn(
        baseStyles,
        variantStyles[variant].activeTab,
        contextStyle.active,
        variant === 'card' || variant === 'pill' ? contextStyle.background : ''
      );
    }

    return cn(baseStyles, contextStyle.inactive);
  };

  const renderBadge = (badge: number) => {
    if (!badge) return null;

    return (
      <span className={cn(
        'inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-xs font-medium',
        'bg-red-100 text-red-800 min-w-[1.25rem] h-5'
      )}>
        {badge > 99 ? '99+' : badge}
      </span>
    );
  };

  const activeTabData = filteredTabs.find(tab => tab.id === currentActiveTab);

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Tab List */}
      <div className="relative">
        {/* Scroll Left Button */}
        {showScrollButtons && canScrollLeft && (
          <button
            onClick={() => scrollTabs('left')}
            className={cn(
              'absolute left-0 top-0 z-10 h-full px-2 bg-white shadow-md',
              'flex items-center justify-center hover:bg-gray-50',
              'border-r border-gray-200'
            )}
            aria-label="Scroll tabs left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Tab List Container */}
        <div
          ref={tabListRef}
          className={cn(
            'flex overflow-x-auto scrollbar-hide',
            variantStyles[variant].tabList,
            scrollable && showScrollButtons && canScrollLeft && 'pl-10',
            scrollable && showScrollButtons && canScrollRight && 'pr-10',
            tabListClassName
          )}
          role="tablist"
          onScroll={checkScrollState}
        >
          {filteredTabs.map((tab) => {
            const isActive = tab.id === currentActiveTab;

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                className={getTabStyles(tab, isActive)}
                onClick={() => handleTabClick(tab)}
                disabled={tab.disabled}
              >
                {tab.icon && (
                  <span className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                    {tab.icon}
                  </span>
                )}

                <span className={responsive ? 'truncate max-w-[120px] sm:max-w-none' : ''}>
                  {tab.label}
                </span>

                {tab.badge && renderBadge(tab.badge)}

                {tab.closable && (
                  <button
                    onClick={(e) => handleTabClose(tab, e)}
                    className={cn(
                      'ml-1 p-0.5 rounded hover:bg-gray-200 transition-colors',
                      'focus:outline-none focus:ring-1 focus:ring-gray-400'
                    )}
                    aria-label={`Close ${tab.label} tab`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        {showScrollButtons && canScrollRight && (
          <button
            onClick={() => scrollTabs('right')}
            className={cn(
              'absolute right-0 top-0 z-10 h-full px-2 bg-white shadow-md',
              'flex items-center justify-center hover:bg-gray-50',
              'border-l border-gray-200'
            )}
            aria-label="Scroll tabs right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tab Panels */}
      {showContent && activeTabData && (
        <div
          role="tabpanel"
          id={`tabpanel-${activeTabData.id}`}
          aria-labelledby={`tab-${activeTabData.id}`}
          className={cn('mt-4', tabPanelClassName)}
        >
          {lazy ? (
            loadedTabs.has(activeTabData.id) && activeTabData.content
          ) : (
            activeTabData.content
          )}
        </div>
      )}
    </div>
  );
};

export default TabNavigation;
