// Workspace context types based on existing thewheel implementation
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'marketplace';

export interface WorkspaceContextProps {
  context?: WorkspaceContext;
}

export interface WorkspaceTheme {
  primaryColor: string;
  secondaryColor: string;
  logoUrl?: string;
  customCSS?: string;
}

export interface WorkspaceConfig {
  context: WorkspaceContext;
  theme?: WorkspaceTheme;
  permissions?: string[];
  features?: string[];
}

// Enhanced workspace context with multi-tenant support
export interface MultiTenantWorkspaceContext extends WorkspaceContextProps {
  tenantId?: string;
  companyId?: string;
  userId?: string;
  permissions?: string[];
  features?: string[];
}

// Context-aware styling utilities
export const contextStyles = {
  consultant: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-blue-100 text-blue-900',
    accent: 'border-blue-500',
  },
  client: {
    primary: 'bg-green-500 text-white',
    secondary: 'bg-green-100 text-green-900',
    accent: 'border-green-500',
  },
  admin: {
    primary: 'bg-gray-500 text-white',
    secondary: 'bg-gray-100 text-gray-900',
    accent: 'border-gray-500',
  },
  marketplace: {
    primary: 'bg-purple-500 text-white',
    secondary: 'bg-purple-100 text-purple-900',
    accent: 'border-purple-500',
  },
} as const;

// Workspace context utilities
export const getContextStyles = (context: WorkspaceContext = 'consultant') => {
  return contextStyles[context];
};

export const hasPermission = (
  userPermissions: string[] = [],
  requiredPermission: string
): boolean => {
  return userPermissions.includes(requiredPermission) || userPermissions.includes('admin');
};

export const hasFeature = (
  enabledFeatures: string[] = [],
  requiredFeature: string
): boolean => {
  return enabledFeatures.includes(requiredFeature);
};
