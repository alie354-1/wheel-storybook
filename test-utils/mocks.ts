// Mock implementations for THE WHEEL Design System tests

import { jest } from '@jest/globals';

// Mock React Router
export const mockNavigate = jest.fn();
export const mockLocation = {
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'test-key',
};

// Mock workspace context
export const mockWorkspaceContext = {
  currentWorkspace: {
    id: 'test-workspace-id',
    name: 'Test Workspace',
    slug: 'test-workspace',
    settings: {
      theme: 'default',
      timezone: 'UTC',
    },
  },
  user: {
    id: 'test-user-id',
    name: 'Test User',
    email: 'test@example.com',
  },
  permissions: {
    canEdit: true,
    canDelete: true,
    canInvite: true,
  },
};

// Mock theme context
export const mockThemeContext = {
  theme: {
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
  },
  setTheme: jest.fn(),
  toggleTheme: jest.fn(),
};

// Mock API responses
export const mockApiResponse = {
  success: (data: any) => ({
    ok: true,
    json: () => Promise.resolve(data),
    status: 200,
    statusText: 'OK',
  }),
  error: (status: number = 500, message: string = 'Internal Server Error') => ({
    ok: false,
    json: () => Promise.resolve({ error: message }),
    status,
    statusText: message,
  }),
};

// Mock fetch
export const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
global.fetch = mockFetch;

// Mock console methods
export const mockConsole = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
};

// Mock localStorage
export const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock sessionStorage
export const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock file upload
export const mockFileUpload = {
  file: new File(['test file content'], 'test-file.txt', { type: 'text/plain' }),
  fileList: (files: File[]) => {
    const fileList = {
      length: files.length,
      item: (index: number) => files[index] || null,
    };

    Object.defineProperty(fileList, Symbol.iterator, {
      value: function* () {
        for (let i = 0; i < files.length; i++) {
          yield files[i];
        }
      },
    });

    return fileList as FileList;
  },
};

// Mock date/time
export const mockDate = {
  now: () => new Date('2023-01-01T00:00:00.000Z'),
  format: (date: Date) => date.toISOString(),
};

// Mock intersection observer
export const mockIntersectionObserver = {
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
};

// Mock resize observer
export const mockResizeObserver = {
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
};

// Mock media query
export const mockMediaQuery = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Mock clipboard
export const mockClipboard = {
  writeText: jest.fn(() => Promise.resolve()),
  readText: jest.fn(() => Promise.resolve('mocked clipboard text')),
};

// Mock notifications
export const mockNotification = {
  show: jest.fn(),
  hide: jest.fn(),
  permission: 'granted' as NotificationPermission,
  requestPermission: jest.fn(() => Promise.resolve('granted' as NotificationPermission)),
};

// Mock WebSocket
export const mockWebSocket = {
  send: jest.fn(),
  close: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  readyState: WebSocket.OPEN,
};

// Mock form data
export const mockFormData = {
  append: jest.fn(),
  delete: jest.fn(),
  get: jest.fn(),
  has: jest.fn(),
  set: jest.fn(),
  entries: jest.fn(),
  keys: jest.fn(),
  values: jest.fn(),
};

// Reset all mocks
export const resetAllMocks = () => {
  jest.clearAllMocks();
  mockNavigate.mockClear();
  mockFetch.mockClear();
  Object.values(mockConsole).forEach((mock) => mock.mockClear());
  Object.values(mockLocalStorage).forEach((mock) => mock.mockClear());
  Object.values(mockSessionStorage).forEach((mock) => mock.mockClear());
  Object.values(mockIntersectionObserver).forEach((mock) => mock.mockClear());
  Object.values(mockResizeObserver).forEach((mock) => mock.mockClear());
  mockClipboard.writeText.mockClear();
  mockClipboard.readText.mockClear();
  mockNotification.show.mockClear();
  mockNotification.hide.mockClear();
  mockNotification.requestPermission.mockClear();
  Object.values(mockWebSocket).forEach((mock) => {
    if (typeof mock === 'function') mock.mockClear();
  });
  Object.values(mockFormData).forEach((mock) => mock.mockClear());
};

// Setup mocks for specific test scenarios
export const setupMocks = {
  // Setup successful API calls
  successfulApi: (data: any) => {
    mockFetch.mockResolvedValue(mockApiResponse.success(data));
  },

  // Setup failed API calls
  failedApi: (status: number = 500, message: string = 'Internal Server Error') => {
    mockFetch.mockResolvedValue(mockApiResponse.error(status, message));
  },

  // Setup localStorage with data
  localStorage: (data: Record<string, string>) => {
    mockLocalStorage.getItem.mockImplementation((key: string) => data[key] || null);
  },

  // Setup sessionStorage with data
  sessionStorage: (data: Record<string, string>) => {
    mockSessionStorage.getItem.mockImplementation((key: string) => data[key] || null);
  },

  // Setup media query matches
  mediaQuery: (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => mockMediaQuery(query)),
    });
  },
};
