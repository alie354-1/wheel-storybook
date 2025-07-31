import { default as React } from 'react';
export interface SkeletonProps {
    className?: string;
    variant?: 'rectangular' | 'circular' | 'text';
    animation?: 'pulse' | 'wave' | 'none';
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
}
/**
 * Skeleton component for loading states
 */
export declare const Skeleton: React.FC<SkeletonProps>;
/**
 * SkeletonText component for text loading states
 */
export declare const SkeletonText: React.FC<{
    lines?: number;
    className?: string;
    animation?: 'pulse' | 'wave' | 'none';
    lastLineWidth?: string | number;
}>;
export default Skeleton;
//# sourceMappingURL=Skeleton.d.ts.map