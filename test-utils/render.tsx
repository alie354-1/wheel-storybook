import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@wheel/themes';
import { WorkspaceProvider } from '@wheel/workspace';
import React from 'react';

// Default theme for testing
const defaultTheme = {
  colors: {
    primary: '#D4AF37',
    secondary: '#1F2937',
    accent: '#F59E0B',
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      secondary: '"Roboto Mono", monospace',
    },
  },
  border: {
    radius: 8,
  },
};

// Default workspace context for testing
const defaultWorkspaceContext = {
  currentWorkspace: {
    id: 'test-workspace',
    name: 'Test Workspace',
    slug: 'test-workspace',
    settings: {
      theme: 'default',
      timezone: 'UTC',
    },
  },
  user: {
    id: 'test-user',
    name: 'Test User',
    email: 'test@example.com',
  },
  permissions: {
    canEdit: true,
    canDelete: true,
    canInvite: true,
  },
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: any;
  workspaceContext?: any;
  withTheme?: boolean;
  withWorkspace?: boolean;
}

function customRender(
  ui: React.ReactElement,
  {
    theme = defaultTheme,
    workspaceContext = defaultWorkspaceContext,
    withTheme = true,
    withWorkspace = true,
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    let wrappedChildren = children;

    if (withWorkspace) {
      wrappedChildren = (
        <WorkspaceProvider workspace={workspaceContext}>
          {wrappedChildren}
        </WorkspaceProvider>
      );
    }

    if (withTheme) {
      wrappedChildren = (
        <ThemeProvider>
          {wrappedChildren}
        </ThemeProvider>
      );
    }

    return <>{wrappedChildren}</>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { customRender as render };

