import {
  Button, DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger, Icon
} from '@wheel/ui';
import React from 'react';
import { ActionItem } from './ButtonGroup';

export interface ActionMenuProps {
  actions: ActionItem[];
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  trigger?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  onActionClick?: (action: ActionItem) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  permissions?: string[];
  showSuggestions?: boolean;
  searchable?: boolean;
  actionHistory?: ActionItem[];
}

export const ActionMenu: React.FC<ActionMenuProps> = ({
  actions,
  context = 'neutral',
  trigger,
  align = 'center',
  onActionClick,
  onMenuOpen,
  onMenuClose,
  permissions = [],
  showSuggestions = false,
  actionHistory = [],
}) => {
  const [history, setHistory] = React.useState<ActionItem[]>(actionHistory);

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

  const suggestedActions = showSuggestions
    ? visibleActions.filter((a) => a.metadata?.suggested)
    : [];

  const handleActionClick = (action: ActionItem) => {
    if (onActionClick) {
      onActionClick(action);
    }
    action.onClick();
    setHistory((prev) => [action, ...prev].slice(0, 5));
  };

  return (
    <DropdownMenu onOpenChange={(open) => (open ? onMenuOpen?.() : onMenuClose?.())}>
      <DropdownMenuTrigger asChild>
        {trigger || <Button variant="ghost">Open Menu</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {suggestedActions.length > 0 && (
          <>
            {suggestedActions.map((action) => (
              <DropdownMenuItem
                key={`suggested-${action.id}`}
                disabled={action.disabled}
                onSelect={() => handleActionClick(action)}
              >
                <Icon name="Star" className="mr-2" />
                {action.label}
              </DropdownMenuItem>
            ))}
            <hr className="my-1" />
          </>
        )}
        {visibleActions.map((action) => (
          <DropdownMenuItem
            key={action.id}
            disabled={action.disabled}
            onSelect={() => handleActionClick(action)}
          >
            {action.icon && <Icon name={action.icon} className="mr-2" />}
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
