import { ElementType } from 'react';
/**
 * Icon Component
 *
 * A component for displaying icons with workspace context awareness.
 */
import * as LucideIcons from 'lucide-react';
export type LucideIconName = keyof typeof LucideIcons;
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';
export interface IconProps {
    name?: LucideIconName;
    as?: ElementType;
    size?: IconSize;
    color?: IconColor;
    context?: WorkspaceContext;
    rotation?: 0 | 90 | 180 | 270;
    title?: string;
    className?: string;
}
export declare const Icon: import('react').ForwardRefExoticComponent<IconProps & import('react').RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=icon.d.ts.map