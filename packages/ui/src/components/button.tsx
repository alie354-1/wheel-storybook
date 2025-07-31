import React from "react";

export type ButtonVariant =
  | 'primary'           // Default primary button
  | 'secondary'         // Secondary button
  | 'accent'            // Accent button
  | 'gradient-midnight' // Midnight blue gradient
  | 'gradient-amber'    // Amber gradient
  | 'ghost'             // Transparent with hover
  | 'outline'           // Border button
  | 'link'              // Link style button
  | 'danger';           // Danger/delete button

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';

export type IconPosition = 'left' | 'right';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  context?: WorkspaceContext;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  leftIcon?: React.ReactNode;  // Deprecated: use icon with iconPosition
  rightIcon?: React.ReactNode; // Deprecated: use icon with iconPosition
  fullWidth?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  theme?: any; // Deprecated: use context instead
}

export function Button({
  children,
  className = "",
  variant = 'primary',
  size = 'md',
  context = 'neutral',
  isLoading = false,
  loadingText,
  icon,
  iconPosition = 'left',
  leftIcon, // Deprecated but maintained for backward compatibility
  rightIcon, // Deprecated but maintained for backward compatibility
  fullWidth = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  theme, // Deprecated but maintained for backward compatibility
  ...props
}: ButtonProps) {

  // Workspace context-aware styling
  const getContextualVariantClasses = () => {
    switch (variant) {
      case 'primary':
        switch (context) {
          case 'consultant':
            return 'bg-consultant-700 hover:bg-consultant-800 focus:ring-consultant-500 text-white shadow-lg border-2 border-consultant-500';
          case 'client':
            return 'bg-client-700 hover:bg-client-800 focus:ring-client-500 text-white shadow-lg border-2 border-client-500';
          case 'admin':
            return 'bg-admin-900 hover:bg-admin-800 focus:ring-admin-500 text-white shadow-lg border-2 border-admin-600';
          case 'expert':
            return 'bg-expert-700 hover:bg-expert-800 focus:ring-expert-500 text-white shadow-lg border-2 border-expert-500';
          case 'toolCreator':
            return 'bg-toolCreator-700 hover:bg-toolCreator-800 focus:ring-toolCreator-500 text-white shadow-lg border-2 border-toolCreator-500';
          case 'founder':
            return 'bg-gradient-to-r from-founder-600 to-founder-700 hover:from-founder-700 hover:to-founder-800 focus:ring-founder-500 text-white shadow-xl border-2 border-founder-500';
          default:
            return 'bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 text-white shadow-sm';
        }
      case 'secondary':
        switch (context) {
          case 'consultant':
            return 'bg-consultant-200 hover:bg-consultant-300 focus:ring-consultant-500 text-consultant-900 shadow-md border-2 border-consultant-300';
          case 'client':
            return 'bg-client-200 hover:bg-client-300 focus:ring-client-500 text-client-900 shadow-md border-2 border-client-300';
          case 'admin':
            return 'bg-admin-200 hover:bg-admin-300 focus:ring-admin-500 text-admin-900 shadow-md border-2 border-admin-300';
          case 'expert':
            return 'bg-expert-200 hover:bg-expert-300 focus:ring-expert-500 text-expert-900 shadow-md border-2 border-expert-300';
          case 'toolCreator':
            return 'bg-toolCreator-200 hover:bg-toolCreator-300 focus:ring-toolCreator-500 text-toolCreator-900 shadow-md border-2 border-toolCreator-300';
          case 'founder':
            return 'bg-gradient-to-r from-founder-200 to-founder-300 hover:from-founder-300 hover:to-founder-400 focus:ring-founder-500 text-founder-900 shadow-md border-2 border-founder-300';
          default:
            return 'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 text-white shadow-sm';
        }
      case 'outline':
        switch (context) {
          case 'consultant':
            return 'border-2 border-consultant-600 text-consultant-700 hover:bg-consultant-100 hover:text-consultant-800 focus:ring-consultant-500 bg-transparent shadow-sm';
          case 'client':
            return 'border-2 border-client-600 text-client-700 hover:bg-client-100 hover:text-client-800 focus:ring-client-500 bg-transparent shadow-sm';
          case 'admin':
            return 'border-2 border-admin-600 text-admin-700 hover:bg-admin-100 hover:text-admin-800 focus:ring-admin-500 bg-transparent shadow-sm';
          case 'expert':
            return 'border-2 border-expert-600 text-expert-700 hover:bg-expert-100 hover:text-expert-800 focus:ring-expert-500 bg-transparent shadow-sm';
          case 'toolCreator':
            return 'border-2 border-toolCreator-600 text-toolCreator-700 hover:bg-toolCreator-100 hover:text-toolCreator-800 focus:ring-toolCreator-500 bg-transparent shadow-sm';
          case 'founder':
            return 'border-2 border-founder-600 text-founder-700 hover:bg-founder-100 hover:text-founder-800 focus:ring-founder-500 bg-transparent shadow-sm';
          default:
            return 'border-2 border-slate-600 text-slate-700 hover:bg-slate-100 hover:text-slate-800 focus:ring-slate-500 bg-transparent shadow-sm';
        }
      case 'ghost':
        switch (context) {
          case 'consultant':
            return 'text-consultant-600 hover:bg-consultant-50 focus:ring-consultant-500 bg-transparent';
          case 'client':
            return 'text-client-600 hover:bg-client-50 focus:ring-client-500 bg-transparent';
          case 'admin':
            return 'text-admin-600 hover:bg-admin-50 focus:ring-admin-500 bg-transparent';
          case 'expert':
            return 'text-expert-600 hover:bg-expert-50 focus:ring-expert-500 bg-transparent';
          case 'toolCreator':
            return 'text-toolCreator-600 hover:bg-toolCreator-50 focus:ring-toolCreator-500 bg-transparent';
          case 'founder':
            return 'text-founder-600 hover:bg-founder-50 focus:ring-founder-500 bg-transparent';
          default:
            return 'text-primary-500 hover:bg-gray-100 focus:ring-primary-500 bg-transparent';
        }
      case 'link':
        switch (context) {
          case 'consultant':
            return 'text-consultant-600 hover:text-consultant-700 hover:underline focus:ring-consultant-500 bg-transparent p-0 h-auto';
          case 'client':
            return 'text-client-600 hover:text-client-700 hover:underline focus:ring-client-500 bg-transparent p-0 h-auto';
          case 'admin':
            return 'text-admin-600 hover:text-admin-700 hover:underline focus:ring-admin-500 bg-transparent p-0 h-auto';
          case 'expert':
            return 'text-expert-600 hover:text-expert-700 hover:underline focus:ring-expert-500 bg-transparent p-0 h-auto';
          case 'toolCreator':
            return 'text-toolCreator-600 hover:text-toolCreator-700 hover:underline focus:ring-toolCreator-500 bg-transparent p-0 h-auto';
          case 'founder':
            return 'text-founder-600 hover:text-founder-700 hover:underline focus:ring-founder-500 bg-transparent p-0 h-auto';
          default:
            return 'text-primary-500 hover:text-primary-700 hover:underline focus:ring-primary-500 bg-transparent p-0 h-auto';
        }
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white shadow-sm';
      case 'accent':
        return 'bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 text-white shadow-sm';
      case 'gradient-midnight':
        return 'bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 focus:ring-primary-500 text-white shadow-md';
      case 'gradient-amber':
        return 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 text-white shadow-md';
      default:
        return 'bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 text-white shadow-sm';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs px-2 py-1 rounded gap-1';
      case 'sm':
        return 'text-sm px-3 py-1.5 rounded gap-1.5';
      case 'md':
        return 'text-base px-4 py-2 rounded-md gap-2';
      case 'lg':
        return 'text-lg px-6 py-3 rounded-lg gap-2';
      case 'xl':
        return 'text-xl px-8 py-4 rounded-lg gap-3';
      default:
        return 'text-base px-4 py-2 rounded-md gap-2';
    }
  };

  // Workspace context-aware spinner
  const getLoadingSpinner = () => {
    const spinnerColor = variant === 'outline' || variant === 'ghost' || variant === 'link' ? 'border-current' : 'border-white';
    return (
      <svg
        className={`animate-spin h-4 w-4 ${spinnerColor} border-2 border-t-transparent rounded-full`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
  };

  // Determine which icon to use (new icon prop takes precedence over deprecated leftIcon/rightIcon)
  const displayIcon = icon || (iconPosition === 'left' ? leftIcon : rightIcon);
  const effectiveIconPosition = icon ? iconPosition : (leftIcon ? 'left' : 'right');

  // Don't apply size classes to link variant
  const sizeClasses = variant === 'link' ? '' : getSizeClasses();

  // Enhanced accessibility attributes
  const accessibilityProps = {
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-disabled': isLoading || props.disabled,
    'aria-busy': isLoading,
    'data-context': context,
    'data-variant': variant,
    'data-size': size,
    ...(isLoading && { 'aria-live': 'polite' as const }),
  };

  return (
    <button
      className={`
        font-medium transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getContextualVariantClasses()}
        ${sizeClasses}
        ${fullWidth ? 'w-full' : ''}
        ${variant === 'link' ? '' : 'inline-flex items-center justify-center'}
        ${(isLoading || props.disabled) ? 'pointer-events-none' : ''}
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...accessibilityProps}
      {...props}
    >
      {isLoading && effectiveIconPosition === 'left' && getLoadingSpinner()}
      {!isLoading && displayIcon && effectiveIconPosition === 'left' && (
        <span className="flex-shrink-0">{displayIcon}</span>
      )}
      <span className={isLoading ? 'opacity-75' : ''}>
        {isLoading ? (loadingText || 'Loading...') : children}
      </span>
      {!isLoading && displayIcon && effectiveIconPosition === 'right' && (
        <span className="flex-shrink-0">{displayIcon}</span>
      )}
      {isLoading && effectiveIconPosition === 'right' && getLoadingSpinner()}
    </button>
  );
}
