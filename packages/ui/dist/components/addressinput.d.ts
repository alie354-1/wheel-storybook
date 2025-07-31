import { default as React } from 'react';
export interface AddressInputProps {
    value?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    onChange?: (value: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }) => void;
    disabled?: boolean;
    className?: string;
}
/**
 * AddressInput component for entering addresses.
 */
export declare const AddressInput: React.FC<AddressInputProps>;
export default AddressInput;
//# sourceMappingURL=addressinput.d.ts.map