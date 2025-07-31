import { default as React } from 'react';
export type WorkspaceIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface WorkspaceIconProps {
    size?: WorkspaceIconSize;
    className?: string;
    workspace?: {
        name: string;
        logo?: string;
    };
}
/**
 * WorkspaceIcon component that displays an icon for a workspace.
 */
export declare const WorkspaceIcon: React.FC<WorkspaceIconProps>;
export default WorkspaceIcon;
//# sourceMappingURL=workspaceicon.d.ts.map