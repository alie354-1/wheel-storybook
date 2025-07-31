import { ReactNode } from 'react';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    context?: WorkspaceContext;
    aspectRatio?: string;
    fit?: 'cover' | 'contain' | 'fill';
    lazy?: boolean;
    placeholder?: string | ReactNode;
    error?: string | ReactNode;
    onLoad?: () => void;
    onError?: () => void;
}
export declare const Image: import('react').ForwardRefExoticComponent<ImageProps & import('react').RefAttributes<HTMLImageElement>>;
//# sourceMappingURL=image.d.ts.map