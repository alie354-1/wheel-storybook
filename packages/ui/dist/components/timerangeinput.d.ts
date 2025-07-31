import { default as React } from 'react';
export interface TimeRangeInputProps {
    value?: {
        start: string;
        end: string;
    };
    onChange?: (value: {
        start: string;
        end: string;
    }) => void;
    disabled?: boolean;
    className?: string;
}
/**
 * TimeRangeInput component for selecting a time range.
 */
export declare const TimeRangeInput: React.FC<TimeRangeInputProps>;
export default TimeRangeInput;
//# sourceMappingURL=timerangeinput.d.ts.map