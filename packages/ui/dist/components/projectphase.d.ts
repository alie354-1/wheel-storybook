import { default as React } from 'react';
export type ProjectPhaseVariant = 'discovery' | 'design' | 'development' | 'testing' | 'deployment' | 'maintenance';
export interface ProjectPhaseProps {
    phase: ProjectPhaseVariant;
    className?: string;
}
/**
 * ProjectPhase component that displays the current phase of a project.
 */
export declare const ProjectPhase: React.FC<ProjectPhaseProps>;
export default ProjectPhase;
//# sourceMappingURL=projectphase.d.ts.map