/**
 * VerticalSlider Component
 *
 * A vertical range input component for numeric input with workspace context support.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export interface VerticalSliderProps {
    /** Workspace context for styling */
    context?: WorkspaceContext;
    /** The current value of the slider */
    value?: number;
    /** Callback when the value changes */
    onChange?: (value: number) => void;
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
}
export declare const VerticalSlider: import('react').ForwardRefExoticComponent<VerticalSliderProps & import('react').RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=verticalslider.d.ts.map