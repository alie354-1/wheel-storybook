import { default as React } from 'react';
export interface CollaboratorAvatarProps {
    collaborator: {
        name: string;
        avatarUrl?: string;
    };
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
/**
 * CollaboratorAvatar component that displays a collaborator's avatar.
 */
export declare const CollaboratorAvatar: React.FC<CollaboratorAvatarProps>;
export default CollaboratorAvatar;
//# sourceMappingURL=collaboratoravatar.d.ts.map