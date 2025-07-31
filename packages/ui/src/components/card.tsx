/**
 * Card Component
 *
 * A versatile card component for displaying content in a structured way.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';
export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps {
  variant?: CardVariant;
  context?: WorkspaceContext;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  interactive?: boolean;
  padding?: CardPadding;
  radius?: CardRadius;
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  onHover?: () => void;
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>((
  {
    variant = 'elevated',
    context = 'neutral',
    elevation = 1,
    interactive = false,
    padding = 'md',
    radius = 'md',
    header,
    footer,
    onClick,
    onHover,
    children,
    className,
    ...props
  },
  ref
) => {
  const variantClasses = {
    elevated: `shadow-lg`,
    outlined: 'border',
    filled: 'bg-gray-50',
  };

  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg',
    5: 'shadow-xl',
  };

  const getContextClasses = () => {
    if (variant !== 'outlined') return '';
    switch (context) {
      case 'consultant': return 'border-blue-500';
      case 'client': return 'border-green-500';
      case 'admin': return 'border-gray-500';
      default: return 'border-slate-200';
    }
  };

  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const cardClasses = cn(
    'bg-white',
    variant === 'elevated' ? elevationClasses[elevation] : variantClasses[variant],
    getContextClasses(),
    radiusClasses[radius],
    { 'cursor-pointer transition-shadow hover:shadow-xl': interactive },
    className
  );

  return (
    <div ref={ref} className={cardClasses} onClick={onClick} onMouseOver={onHover} {...props}>
      {header && <div className="p-4 border-b">{header}</div>}
      <div className={paddingClasses[padding]}>{children}</div>
      {footer && <div className="p-4 border-t">{footer}</div>}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-slate-500", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
