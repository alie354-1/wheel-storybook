import React, { useState } from 'react';
import { cn } from '@wheel/shared';

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
export const AddressInput: React.FC<AddressInputProps> = ({
  value = { street: '', city: '', state: '', zip: '' },
  onChange,
  disabled = false,
  className = '',
}) => {
  const [address, setAddress] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newAddress = { ...address, [name]: value };
    setAddress(newAddress);
    if (onChange) {
      onChange(newAddress);
    }
  };

  return (
    <div className={cn('grid grid-cols-1 gap-4', className)}>
      <input
        type="text"
        name="street"
        value={address.street}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm',
          disabled ? 'bg-gray-100' : ''
        )}
        placeholder="Street"
      />
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm col-span-2',
            disabled ? 'bg-gray-100' : ''
          )}
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm',
            disabled ? 'bg-gray-100' : ''
          )}
          placeholder="State"
        />
      </div>
      <input
        type="text"
        name="zip"
        value={address.zip}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm',
          disabled ? 'bg-gray-100' : ''
        )}
        placeholder="ZIP Code"
      />
    </div>
  );
};

export default AddressInput;
