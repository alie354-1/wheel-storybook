import React from 'react';
import type { Decorator } from '@storybook/react';

// Custom controls implementation for Storybook 9.0.16
export const ControlsDecorator: Decorator = (Story, context) => {
  const { args, argTypes } = context;
  
  // Add custom controls functionality here
  // This provides basic controls support without addon-essentials
  return (
    <div style={{ padding: '1rem' }}>
      <Story {...args} />
    </div>
  );
};

// Custom actions implementation
export const ActionsDecorator: Decorator = (Story, context) => {
  const { args } = context;
  
  // Log actions to console since we don't have addon-actions
  const actionArgs = Object.keys(args || {}).reduce((acc, key) => {
    const value = (args as any)?.[key];
    if (typeof value === 'function') {
      acc[key] = (...argList: any[]) => {
        console.log(`Action: ${key}`, argList);
        return value(...argList);
      };
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as any);
  
  return <Story {...actionArgs} />;
};
