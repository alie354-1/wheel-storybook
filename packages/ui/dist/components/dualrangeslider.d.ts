export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export interface DualRangeSliderProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** The current values of the slider */
    values?: [number, number];
    /** Callback when the values change */
    onChange?: (values: [number, number]) => void;
    /** The minimum value of the slider */
    min?: number;
    /** The maximum value of the slider */
    max?: number;
    /** The step value of the slider */
    step?: number;
    /** Label for the slider */
    label?: string;
    /** Whether the slider is disabled */
    disabled?: boolean;
    /** Name attribute */
    name?: string;
    /** ID attribute */
    id?: string;
    /** Show tooltips with current values */
    withTooltip?: boolean;
}
export declare const DualRangeSlider: import('react').ForwardRefExoticComponent<DualRangeSliderProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=dualrangeslider.d.ts.map