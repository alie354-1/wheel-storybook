import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
  computedStyleSupportsPseudoElements: true
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock HTMLElement.scrollIntoView
HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock HTMLElement.getBoundingClientRect
HTMLElement.prototype.getBoundingClientRect = jest.fn(() => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: jest.fn(),
}));

// Mock CSS custom properties
const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function(element, pseudoElt) {
  const result = originalGetComputedStyle.call(this, element, pseudoElt);
  return {
    ...result,
    getPropertyValue: (property) => {
      // Mock CSS custom properties for THE WHEEL theme
      if (property === '--color-primary') return '#D4AF37';
      if (property === '--color-secondary') return '#1F2937';
      if (property === '--color-accent') return '#F59E0B';
      if (property === '--color-neutral-50') return '#F9FAFB';
      if (property === '--color-neutral-900') return '#111827';
      if (property === '--spacing-unit') return '8px';
      if (property === '--border-radius') return '8px';
      if (property === '--font-family-primary') return '"Inter", sans-serif';
      if (property === '--font-family-secondary') return '"Roboto Mono", monospace';
      return result.getPropertyValue(property);
    }
  };
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;

// Mock console methods in test environment
if (process.env.NODE_ENV === 'test') {
  global.console = {
    ...console,
    // Suppress console.log during tests unless explicitly needed
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };
}

// Global test timeout
jest.setTimeout(10000);

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
  localStorageMock.clear();
  sessionStorageMock.clear();
});
