import React from 'react';
import type { Decorator } from '@storybook/react';

// Custom viewport implementation for Storybook 9.0.16
const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  wide: {
    name: 'Wide Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};

export const ViewportDecorator: Decorator = (Story, context) => {
  const { globals } = context;
  const viewport = globals.viewport || 'desktop';
  
  const currentViewport = viewports[viewport as keyof typeof viewports];
  
  if (!currentViewport) {
    return <Story />;
  }
  
  return (
    <div
      style={{
        width: currentViewport.styles.width,
        height: currentViewport.styles.height,
        margin: '0 auto',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '4px',
          left: '8px',
          fontSize: '12px',
          color: '#6b7280',
          fontFamily: 'monospace',
          zIndex: 1000,
        }}
      >
        {currentViewport.name} ({currentViewport.styles.width} × {currentViewport.styles.height})
      </div>
      <div style={{ paddingTop: '20px', height: '100%', overflow: 'auto' }}>
        <Story />
      </div>
    </div>
  );
};

// Global type for viewport selector
export const viewportGlobalTypes = {
  viewport: {
    name: 'Viewport',
    description: 'Select viewport size',
    defaultValue: 'desktop',
    toolbar: {
      icon: 'mobile',
      items: Object.entries(viewports).map(([key, value]) => ({
        value: key,
        title: value.name,
      })),
      showName: true,
    },
  },
};
