import { default as React } from 'react';
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
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map