import React from 'react';
import { Button } from './button';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  showFirstLast?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Pagination component for navigating through pages
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = '',
  showFirstLast = true,
  size = 'md',
}) => {
  // Generate page numbers to display
  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    
    // Calculate range of pages to show
    const totalPageNumbers = siblingCount * 2 + 3; // siblings + current + first + last
    
    // Case 1: If total pages is less than the page numbers we want to show
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Calculate left and right sibling index
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    
    // Determine if we should show ellipsis
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    
    // Case 2: Show left dots but no right dots
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, '...', ...rightRange];
    }
    
    // Case 3: Show right dots but no left dots
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from(
        { length: leftItemCount },
        (_, i) => i + 1
      );
      return [...leftRange, '...', totalPages];
    }
    
    // Case 4: Show both left and right dots
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, '...', ...middleRange, '...', totalPages];
    }
    
    return pageNumbers;
  };
  
  // Get button size based on prop
  const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      case 'md':
      default:
        return 'sm';
    }
  };
  
  const buttonSize = getButtonSize();
  const pageNumbers = getPageNumbers();
  
  return (
    <nav 
      className={`flex items-center justify-center space-x-1 ${className}`}
      aria-label="Pagination"
    >
      {/* Previous button */}
      <Button
        variant="ghost"
        size={buttonSize}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &laquo;
      </Button>
      
      {/* First page button (optional) */}
      {showFirstLast && !pageNumbers.includes(1) && (
        <>
          <Button
            variant={currentPage === 1 ? 'primary' : 'ghost'}
            size={buttonSize}
            onClick={() => onPageChange(1)}
            aria-label="Page 1"
            aria-current={currentPage === 1 ? 'page' : undefined}
          >
            1
          </Button>
          <span className="text-textTertiary">&hellip;</span>
        </>
      )}
      
      {/* Page numbers */}
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="text-textTertiary">
              &hellip;
            </span>
          );
        }
        
        const pageNumber = page as number;
        
        return (
          <Button
            key={pageNumber}
            variant={currentPage === pageNumber ? 'primary' : 'ghost'}
            size={buttonSize}
            onClick={() => onPageChange(pageNumber)}
            aria-label={`Page ${pageNumber}`}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          >
            {pageNumber}
          </Button>
        );
      })}
      
      {/* Last page button (optional) */}
      {showFirstLast && !pageNumbers.includes(totalPages) && (
        <>
          <span className="text-textTertiary">&hellip;</span>
          <Button
            variant={currentPage === totalPages ? 'primary' : 'ghost'}
            size={buttonSize}
            onClick={() => onPageChange(totalPages)}
            aria-label={`Page ${totalPages}`}
            aria-current={currentPage === totalPages ? 'page' : undefined}
          >
            {totalPages}
          </Button>
        </>
      )}
      
      {/* Next button */}
      <Button
        variant="ghost"
        size={buttonSize}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &raquo;
      </Button>
    </nav>
  );
};

export default Pagination;
