import { default as React } from 'react';
export interface DropdownMenuProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
interface DropdownContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const useDropdownContext: () => DropdownContextType;
export interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}
export declare const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps>;
export interface DropdownMenuContentProps {
    children: React.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}
export declare const DropdownMenuContent: React.FC<DropdownMenuContentProps>;
export interface DropdownMenuItemProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    destructive?: boolean;
}
export declare const DropdownMenuItem: React.FC<DropdownMenuItemProps>;
export interface DropdownMenuSeparatorProps {
    className?: string;
}
export declare const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps>;
export interface DropdownMenuLabelProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownMenuLabel: React.FC<DropdownMenuLabelProps>;
declare const _default: {
    Root: React.FC<DropdownMenuProps>;
    Trigger: React.FC<DropdownMenuTriggerProps>;
    Content: React.FC<DropdownMenuContentProps>;
    Item: React.FC<DropdownMenuItemProps>;
    Separator: React.FC<DropdownMenuSeparatorProps>;
    Label: React.FC<DropdownMenuLabelProps>;
};
export default _default;
//# sourceMappingURL=DropdownMenu.d.ts.map