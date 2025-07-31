import { default as React } from 'react';
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
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
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
export declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
declare const _default: {
    Root: React.FC<BreadcrumbsProps>;
    Item: React.FC<BreadcrumbItemProps>;
};
export default _default;
//# sourceMappingURL=Breadcrumbs.d.ts.map