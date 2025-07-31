// Test helper functions for THE WHEEL Design System

import { fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Setup user event for interactions
export const setupUser = () => userEvent.setup();

// Helper to simulate file uploads
export const uploadFile = async (input: HTMLInputElement, file: File) => {
  await userEvent.upload(input, file);
};

// Helper to simulate form submissions
export const submitForm = async (form: HTMLFormElement) => {
  fireEvent.submit(form);
  await waitFor(() => {
    // Form should be submitted
  });
};

// Helper to wait for async operations
export const waitForAsync = async (callback: () => void | Promise<void>, timeout = 5000) => {
  await waitFor(callback, { timeout });
};

// Helper to simulate keyboard navigation
export const navigateWithKeyboard = async (element: HTMLElement, key: string) => {
  const user = setupUser();
  await user.type(element, `{${key}}`);
};

// Helper to simulate focus management
export const focusElement = async (element: HTMLElement) => {
  const user = setupUser();
  await user.click(element);
};

// Helper to simulate mouse interactions
export const hoverElement = async (element: HTMLElement) => {
  const user = setupUser();
  await user.hover(element);
};

// Helper to simulate drag and drop
export const dragAndDrop = async (source: HTMLElement, target: HTMLElement) => {
  fireEvent.dragStart(source);
  fireEvent.dragEnter(target);
  fireEvent.dragOver(target);
  fireEvent.drop(target);
  fireEvent.dragEnd(source);
};

// Helper to simulate scroll events
export const scrollElement = (element: HTMLElement, scrollTop: number) => {
  Object.defineProperty(element, 'scrollTop', {
    writable: true,
    value: scrollTop,
  });
  fireEvent.scroll(element);
};

// Helper to simulate resize events
export const resizeWindow = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
  fireEvent(window, new Event('resize'));
};

// Helper to simulate media query changes
export const changeMediaQuery = (query: string, matches: boolean) => {
  const mediaQuery = window.matchMedia(query);
  Object.defineProperty(mediaQuery, 'matches', {
    writable: true,
    value: matches,
  });
  fireEvent(mediaQuery, new Event('change'));
};

// Helper to simulate intersection observer
export const simulateIntersection = (element: HTMLElement, isIntersecting: boolean) => {
  const mockIntersectionObserver = global.IntersectionObserver;
  if (mockIntersectionObserver) {
    const callback = (mockIntersectionObserver as any).callback;
    if (callback) {
      callback([{
        target: element,
        isIntersecting,
        intersectionRatio: isIntersecting ? 1 : 0,
      }]);
    }
  }
};

// Helper to simulate network delays
export const simulateNetworkDelay = (ms: number = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Helper to generate random test data
export const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const generateRandomString = (length: number = 10) => {
  return Math.random().toString(36).substr(2, length);
};

export const generateRandomNumber = (min: number = 0, max: number = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomEmail = () => {
  return `${generateRandomString(8)}@${generateRandomString(6)}.com`;
};

export const generateRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Helper to validate form fields
export const validateField = (field: HTMLInputElement, expectedValue: string) => {
  return field.value === expectedValue;
};

// Helper to check if element is visible
export const isElementVisible = (element: HTMLElement) => {
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
};

// Helper to check if element has focus
export const isElementFocused = (element: HTMLElement) => {
  return document.activeElement === element;
};

// Helper to get element text content
export const getElementText = (element: HTMLElement) => {
  return element.textContent?.trim() || '';
};

// Helper to get element attribute value
export const getElementAttribute = (element: HTMLElement, attribute: string) => {
  return element.getAttribute(attribute);
};

// Helper to check if element has class
export const hasClass = (element: HTMLElement, className: string) => {
  return element.classList.contains(className);
};

// Helper to get all classes from element
export const getClasses = (element: HTMLElement) => {
  return Array.from(element.classList);
};

// Helper to simulate theme changes
export const simulateThemeChange = (theme: 'light' | 'dark') => {
  document.documentElement.setAttribute('data-theme', theme);
};

// Helper to simulate workspace context changes
export const simulateWorkspaceChange = (workspaceId: string) => {
  localStorage.setItem('currentWorkspace', workspaceId);
  fireEvent(window, new Event('workspace-changed'));
};

// Helper to clean up test environment
export const cleanupTestEnvironment = () => {
  localStorage.clear();
  sessionStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  document.body.innerHTML = '';
};

// Helper to assert element properties
export const assertElementProperties = (element: HTMLElement, properties: Record<string, any>) => {
  Object.entries(properties).forEach(([key, value]) => {
    expect(element).toHaveProperty(key, value);
  });
};

// Helper to assert element styles
export const assertElementStyles = (element: HTMLElement, styles: Record<string, string>) => {
  const computedStyle = window.getComputedStyle(element);
  Object.entries(styles).forEach(([property, value]) => {
    expect(computedStyle.getPropertyValue(property)).toBe(value);
  });
};

// Helper to debug element
export const debugElement = (element: HTMLElement) => {
  console.log('Element:', element);
  console.log('Tag Name:', element.tagName);
  console.log('Classes:', getClasses(element));
  console.log('Attributes:', Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`));
  console.log('Text Content:', getElementText(element));
  console.log('Computed Style:', window.getComputedStyle(element));
};
