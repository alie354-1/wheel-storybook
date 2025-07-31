import { ReactNode } from 'react';
import { Status } from './StatusDot';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square';
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    context?: WorkspaceContext;
    presence?: Status;
    shape?: AvatarShape;
    fallback?: string | ReactNode;
    badge?: ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const Avatar: import('react').ForwardRefExoticComponent<AvatarProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Avatar.d.ts.map