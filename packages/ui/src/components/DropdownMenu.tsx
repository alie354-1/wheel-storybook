import React, { useState, useRef, useEffect } from 'react';

// DropdownMenu Component
export interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Context to share state with children
  const dropdownContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <DropdownContext.Provider value={dropdownContext}>
      <div ref={dropdownRef} className={`relative inline-block ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// DropdownContext
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

export const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdownContext must be used within a DropdownMenu');
  }
  return context;
};

// DropdownMenuTrigger Component
export interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ 
  children, 
  className = '',
  asChild = false
}) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      ...children.props,
    });
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center ${className}`}
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {children}
    </button>
  );
};

// DropdownMenuContent Component
export interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ 
  children, 
  className = '',
  align = 'end',
  sideOffset = 8
}) => {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0',
  };

  return (
    <div
      className={`
        absolute z-dropdown mt-${sideOffset} min-w-[8rem] overflow-hidden rounded-md 
        border border-borderDefault bg-bgCard p-1 shadow-md 
        animate-in fade-in-80 zoom-in-95 
        ${alignmentClasses[align]}
        ${className}
      `}
      role="menu"
    >
      {children}
    </div>
  );
};

// DropdownMenuItem Component
export interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ 
  children, 
  className = '',
  onClick,
  disabled = false,
  destructive = false
}) => {
  const { setIsOpen } = useDropdownContext();

  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
    setIsOpen(false);
  };

  return (
    <button
      type="button"
      className={`
        relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none 
        transition-colors focus:bg-bgHover focus:text-textPrimary
        ${disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
        ${destructive ? 'text-danger-500 focus:text-danger-500' : 'text-textPrimary'}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled}
      role="menuitem"
    >
      {children}
    </button>
  );
};

// DropdownMenuSeparator Component
export interface DropdownMenuSeparatorProps {
  className?: string;
}

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`-mx-1 my-1 h-px bg-borderDefault ${className}`} />
  );
};

// DropdownMenuLabel Component
export interface DropdownMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-2 py-1.5 text-sm font-semibold text-textSecondary ${className}`}>
      {children}
    </div>
  );
};

export default {
  Root: DropdownMenu,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Label: DropdownMenuLabel,
};
