import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbsProps {
  children: React.ReactNode;
  className?: string;
  separator?: React.ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
}

/**
 * Breadcrumbs component for navigation
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className = '',
  separator = '/',
  maxItems = 8,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
}) => {
  const childrenArray = React.Children.toArray(children);
  
  // Handle collapsing breadcrumbs if there are too many
  const renderBreadcrumbs = () => {
    if (childrenArray.length <= maxItems) {
      return childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <li className="mx-2 text-textTertiary" aria-hidden="true">
              {separator}
            </li>
          )}
        </React.Fragment>
      ));
    }
    
    // Handle collapsed breadcrumbs
    const items = [];
    
    // Add items before collapse
    for (let i = 0; i < itemsBeforeCollapse; i++) {
      items.push(
        <React.Fragment key={i}>
          {childrenArray[i]}
          <li className="mx-2 text-textTertiary" aria-hidden="true">
            {separator}
          </li>
        </React.Fragment>
      );
    }
    
    // Add ellipsis
    items.push(
      <li key="ellipsis" className="mx-2 text-textTertiary">
        ...
      </li>
    );
    
    // Add items after collapse
    const startIndex = childrenArray.length - itemsAfterCollapse;
    for (let i = startIndex; i < childrenArray.length; i++) {
      items.push(
        <React.Fragment key={i}>
          {i > startIndex && (
            <li className="mx-2 text-textTertiary" aria-hidden="true">
              {separator}
            </li>
          )}
          {childrenArray[i]}
        </React.Fragment>
      );
    }
    
    return items;
  };
  
  return (
    <nav aria-label="breadcrumb">
      <ol className={`flex flex-wrap items-center text-sm ${className}`}>
        {renderBreadcrumbs()}
      </ol>
    </nav>
  );
};

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  current?: boolean;
}

/**
 * BreadcrumbItem component for individual breadcrumb items
 */
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  onClick,
  className = '',
  current = false,
}) => {
  const classes = `
    ${current ? 'text-textPrimary font-medium' : 'text-textSecondary hover:text-primary-500'}
    ${className}
  `;
  
  if (current) {
    return (
      <li className={classes} aria-current="page">
        {children}
      </li>
    );
  }
  
  if (href) {
    return (
      <li className={classes}>
        <Link to={href} className="hover:underline">
          {children}
        </Link>
      </li>
    );
  }
  
  if (onClick) {
    return (
      <li className={classes}>
        <button 
          type="button" 
          onClick={onClick} 
          className="hover:underline"
        >
          {children}
        </button>
      </li>
    );
  }
  
  return <li className={classes}>{children}</li>;
};

export default {
  Root: Breadcrumbs,
  Item: BreadcrumbItem,
};
