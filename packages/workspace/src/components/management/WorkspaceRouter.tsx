import React, { ComponentType, useEffect, useMemo, useState } from 'react';
import { useWorkspace } from './WorkspaceContextProvider';

// Types
export interface WorkspaceRoute {
  path: string;
  component: ComponentType<any>;
  permissions?: string[];
  roles?: string[];
  workspaceTypes?: string[];
  exact?: boolean;
  redirect?: string;
  children?: WorkspaceRoute[];
}

export interface WorkspaceRouterProps {
  routes: WorkspaceRoute[];
  currentPath: string;
  onRouteChange: (path: string) => void;
  fallbackRoute?: string;
  loadingComponent?: React.FC;
  errorComponent?: React.FC<{ error: Error }>;
  permissionDeniedComponent?: React.FC<{ route: WorkspaceRoute; onBack: () => void }>;
}

// Default components
const DefaultLoading: React.FC = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
    <span className="ml-2 text-gray-600">Loading...</span>
  </div>
);

const DefaultError: React.FC<{ error: Error }> = ({ error }) => (
  <div className="flex flex-col items-center justify-center min-h-64 p-6">
    <div className="text-red-600 mb-4">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h3>
    <p className="text-gray-600 text-center mb-4">{error.message}</p>
    <button
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
    >
      Reload Page
    </button>
  </div>
);

const DefaultPermissionDenied: React.FC<{ route: WorkspaceRoute; onBack: () => void }> = ({ route, onBack }) => (
  <div className="flex flex-col items-center justify-center min-h-64 p-6">
    <div className="text-amber-600 mb-4">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Denied</h3>
    <p className="text-gray-600 text-center mb-4">
      You don't have permission to access this page.
    </p>
    <div className="text-sm text-gray-500 mb-4">
      Required permissions: {route.permissions?.join(', ') || 'None specified'}
    </div>
    <button
      onClick={onBack}
      className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
    >
      Go Back
    </button>
  </div>
);

// Route Container
const RouteContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="workspace-route-container">
    {children}
  </div>
);

// Utility functions
const findMatchingRoute = (routes: WorkspaceRoute[], path: string): WorkspaceRoute | null => {
  for (const route of routes) {
    // Check exact match
    if (route.exact && route.path === path) {
      return route;
    }

    // Check prefix match
    if (!route.exact && path.startsWith(route.path)) {
      // Check for child routes first
      if (route.children) {
        const childMatch = findMatchingRoute(route.children, path);
        if (childMatch) return childMatch;
      }
      return route;
    }

    // Check child routes
    if (route.children) {
      const childMatch = findMatchingRoute(route.children, path);
      if (childMatch) return childMatch;
    }
  }

  return null;
};

const normalizeRoute = (route: WorkspaceRoute): WorkspaceRoute => ({
  ...route,
  path: route.path.startsWith('/') ? route.path : `/${route.path}`,
  permissions: route.permissions || [],
  roles: route.roles || [],
  workspaceTypes: route.workspaceTypes || [],
  exact: route.exact ?? false
});

// Main Component
export const WorkspaceRouter: React.FC<WorkspaceRouterProps> = ({
  routes,
  currentPath,
  onRouteChange,
  fallbackRoute = '/unauthorized',
  loadingComponent: Loading = DefaultLoading,
  errorComponent: ErrorComponent = DefaultError,
  permissionDeniedComponent: PermissionDenied = DefaultPermissionDenied
}) => {
  const { workspace, hasPermission, user } = useWorkspace();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Normalize routes
  const normalizedRoutes = useMemo(() =>
    routes.map(normalizeRoute),
    [routes]
  );

  // Find matching route
  const matchedRoute = useMemo(() => {
    try {
      const route = findMatchingRoute(normalizedRoutes, currentPath);
      setError(null);
      return route;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Route matching failed'));
      return null;
    }
  }, [normalizedRoutes, currentPath]);

  // Check route permissions
  const canAccessRoute = useMemo(() => {
    if (!matchedRoute) return false;

    try {
      // Check workspace type
      if (matchedRoute.workspaceTypes && matchedRoute.workspaceTypes.length > 0) {
        if (!matchedRoute.workspaceTypes.includes(workspace.type)) {
          return false;
        }
      }

      // Check permissions
      if (matchedRoute.permissions && matchedRoute.permissions.length > 0) {
        const hasAllPermissions = matchedRoute.permissions.every(perm => hasPermission(perm));
        if (!hasAllPermissions) {
          return false;
        }
      }

      // Check roles
      if (matchedRoute.roles && matchedRoute.roles.length > 0) {
        const hasRequiredRole = matchedRoute.roles.some(role => user.roles.includes(role));
        if (!hasRequiredRole) {
          return false;
        }
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Permission check failed'));
      return false;
    }
  }, [matchedRoute, workspace.type, hasPermission, user.roles]);

  // Handle redirects
  useEffect(() => {
    if (matchedRoute?.redirect) {
      onRouteChange(matchedRoute.redirect);
    }
  }, [matchedRoute, onRouteChange]);

  // Simulate loading for route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Brief loading state for UX

    return () => clearTimeout(timer);
  }, [currentPath]);

  // Handle route rendering
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!matchedRoute) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 p-6">
        <div className="text-gray-400 mb-4">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175C5.25 12.09 5.25 11.438 5.25 10.5V7.5c0-.938 0-1.59.543-2.325C6.336 4.44 7.164 4 8.25 4h7.5c1.086 0 1.914.44 2.457 1.175.543.735.543 1.387.543 2.325v3c0 .938 0 1.59-.543 2.325-.543.735-1.371 1.175-2.457 1.175H12z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Page Not Found</h3>
        <p className="text-gray-600 text-center mb-4">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => onRouteChange('/')}
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          Go Home
        </button>
      </div>
    );
  }

  if (!canAccessRoute) {
    return (
      <PermissionDenied
        route={matchedRoute}
        onBack={() => onRouteChange(fallbackRoute)}
      />
    );
  }

  const RouteComponent = matchedRoute.component;

  return (
    <RouteContainer>
      <RouteComponent />
    </RouteContainer>
  );
};

// Route utilities for external use
export const createRoute = (
  path: string,
  component: ComponentType<any>,
  options: Partial<Omit<WorkspaceRoute, 'path' | 'component'>> = {}
): WorkspaceRoute => ({
  path,
  component,
  ...options
});

export const createProtectedRoute = (
  path: string,
  component: ComponentType<any>,
  permissions: string[],
  options: Partial<Omit<WorkspaceRoute, 'path' | 'component' | 'permissions'>> = {}
): WorkspaceRoute => ({
  path,
  component,
  permissions,
  ...options
});

export const createWorkspaceRoute = (
  path: string,
  component: ComponentType<any>,
  workspaceTypes: string[],
  options: Partial<Omit<WorkspaceRoute, 'path' | 'component' | 'workspaceTypes'>> = {}
): WorkspaceRoute => ({
  path,
  component,
  workspaceTypes,
  ...options
});

export default WorkspaceRouter;
