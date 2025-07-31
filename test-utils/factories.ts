// Test data factories for THE WHEEL Design System

export interface TestUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
}

export interface TestWorkspace {
  id: string;
  name: string;
  slug: string;
  settings: {
    theme: string;
    timezone: string;
  };
}

export interface TestProject {
  id: string;
  name: string;
  description: string;
  workspaceId: string;
  status: 'active' | 'inactive' | 'archived';
}

export interface TestClient {
  id: string;
  name: string;
  email: string;
  company: string;
  workspaceId: string;
}

// User factory
export const createTestUser = (overrides: Partial<TestUser> = {}): TestUser => ({
  id: `user-${Math.random().toString(36).substr(2, 9)}`,
  name: 'Test User',
  email: 'test@example.com',
  role: 'member',
  ...overrides,
});

// Workspace factory
export const createTestWorkspace = (overrides: Partial<TestWorkspace> = {}): TestWorkspace => ({
  id: `workspace-${Math.random().toString(36).substr(2, 9)}`,
  name: 'Test Workspace',
  slug: 'test-workspace',
  settings: {
    theme: 'default',
    timezone: 'UTC',
  },
  ...overrides,
});

// Project factory
export const createTestProject = (overrides: Partial<TestProject> = {}): TestProject => ({
  id: `project-${Math.random().toString(36).substr(2, 9)}`,
  name: 'Test Project',
  description: 'A test project for testing purposes',
  workspaceId: `workspace-${Math.random().toString(36).substr(2, 9)}`,
  status: 'active',
  ...overrides,
});

// Client factory
export const createTestClient = (overrides: Partial<TestClient> = {}): TestClient => ({
  id: `client-${Math.random().toString(36).substr(2, 9)}`,
  name: 'Test Client',
  email: 'client@example.com',
  company: 'Test Company',
  workspaceId: `workspace-${Math.random().toString(36).substr(2, 9)}`,
  ...overrides,
});

// Batch factories
export const createTestUsers = (count: number = 5): TestUser[] => {
  return Array.from({ length: count }, (_, index) => createTestUser({
    name: `Test User ${index + 1}`,
    email: `test${index + 1}@example.com`,
  }));
};

export const createTestWorkspaces = (count: number = 3): TestWorkspace[] => {
  return Array.from({ length: count }, (_, index) => createTestWorkspace({
    name: `Test Workspace ${index + 1}`,
    slug: `test-workspace-${index + 1}`,
  }));
};

export const createTestProjects = (count: number = 5, workspaceId?: string): TestProject[] => {
  return Array.from({ length: count }, (_, index) => createTestProject({
    name: `Test Project ${index + 1}`,
    description: `Test project ${index + 1} for testing purposes`,
    workspaceId: workspaceId || `workspace-${Math.random().toString(36).substr(2, 9)}`,
  }));
};

export const createTestClients = (count: number = 5, workspaceId?: string): TestClient[] => {
  return Array.from({ length: count }, (_, index) => createTestClient({
    name: `Test Client ${index + 1}`,
    email: `client${index + 1}@example.com`,
    company: `Test Company ${index + 1}`,
    workspaceId: workspaceId || `workspace-${Math.random().toString(36).substr(2, 9)}`,
  }));
};

// Complex test scenarios
export const createTestWorkspaceWithData = () => {
  const workspace = createTestWorkspace();
  const users = createTestUsers(3);
  const projects = createTestProjects(3, workspace.id);
  const clients = createTestClients(3, workspace.id);

  return {
    workspace,
    users,
    projects,
    clients,
  };
};

// Theme factory for testing
export const createTestTheme = (overrides: any = {}) => ({
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
  ...overrides,
});
