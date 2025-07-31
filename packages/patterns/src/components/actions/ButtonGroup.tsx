import { Button, ButtonVariant, Icon, LucideIconName, cn } from '@wheel/ui';
import React from 'react';

export interface ActionItem {
  id: string;
  label: string;
  icon?: LucideIconName;
  shortcut?: string;
  permission?: string;
  workspaceContext?: string[];
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  metadata?: Record<string, any>;
}

export interface ButtonGroupProps {
  actions: ActionItem[];
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: ButtonVariant;
  onActionClick?: (action: ActionItem) => void;
  permissions?: string[];
  maxVisible?: number;
  showOverflow?: boolean;
  hasBulkActions?: boolean;
  responsive?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  actions,
  context = 'neutral',
  orientation = 'horizontal',
  size = 'md',
  variant = 'primary',
  onActionClick,
  permissions = [],
  maxVisible,
  showOverflow = true,
  hasBulkActions = false,
  responsive = false,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const hasPermission = (action: ActionItem) => {
    if (!action.permission) return true;
    return permissions.includes(action.permission);
  };

  const isVisibleInContext = (action: ActionItem) => {
    if (!action.workspaceContext) return true;
    return action.workspaceContext.includes(context);
  };

  const visibleActions = actions.filter(
    (action) => hasPermission(action) && isVisibleInContext(action)
  );

  const displayedActions =
    maxVisible && showOverflow
      ? visibleActions.slice(0, maxVisible)
      : visibleActions;
  const overflowActions =
    maxVisible && showOverflow ? visibleActions.slice(maxVisible) : [];

  const handleActionClick = (action: ActionItem) => {
    if (onActionClick) {
      onActionClick(action);
    }
    action.onClick();
  };

  return (
    <div
      className={cn(
        'inline-flex',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        responsive && 'flex-wrap',
        'items-center'
      )}
    >
      {hasBulkActions && (
        <div className="p-2">
          <input
            type="checkbox"
            onChange={(e) =>
              setSelectedItems(
                e.target.checked ? displayedActions.map((a) => a.id) : []
              )
            }
          />
        </div>
      )}
      {displayedActions.map((action) => (
        <Button
          key={action.id}
          variant={action.variant || variant}
          size={size}
          disabled={action.disabled || (hasBulkActions && selectedItems.length === 0)}
          onClick={() => handleActionClick(action)}
          className="first:rounded-l-md last:rounded-r-md"
        >
          {hasBulkActions && (
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedItems.includes(action.id)}
              onChange={() => handleSelectItem(action.id)}
            />
          )}
          {action.icon && <Icon name={action.icon} className="mr-2" />}
          {action.label}
        </Button>
      ))}
      {overflowActions.length > 0 && (
        // Overflow menu will be implemented later
        <Button variant={variant} size={size} className="rounded-r-md">
          ...
        </Button>
      )}
    </div>
  );
};
