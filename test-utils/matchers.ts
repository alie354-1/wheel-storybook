// Custom Jest matchers for THE WHEEL Design System

import { expect } from '@jest/globals';

// Custom matcher for testing theme values
export const toHaveThemeValue = (received: any, property: string, expectedValue: any) => {
  const computedStyle = window.getComputedStyle(received);
  const actualValue = computedStyle.getPropertyValue(property);

  const pass = actualValue === expectedValue;

  if (pass) {
    return {
      message: () => `Expected ${property} not to be ${expectedValue}, but it was`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected ${property} to be ${expectedValue}, but received ${actualValue}`,
      pass: false,
    };
  }
};

// Custom matcher for testing component accessibility
export const toBeAccessible = (received: any) => {
  // Check for basic accessibility attributes
  const hasRole = received.getAttribute('role') !== null;
  const hasAriaLabel = received.getAttribute('aria-label') !== null;
  const hasAriaLabelledBy = received.getAttribute('aria-labelledby') !== null;
  const hasAriaDescribedBy = received.getAttribute('aria-describedby') !== null;

  const isAccessible = hasRole || hasAriaLabel || hasAriaLabelledBy || hasAriaDescribedBy;

  if (isAccessible) {
    return {
      message: () => `Expected element not to be accessible, but it was`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected element to be accessible (have role, aria-label, aria-labelledby, or aria-describedby), but it wasn't`,
      pass: false,
    };
  }
};

// Custom matcher for testing workspace context
export const toHaveWorkspaceContext = (received: any, expectedContext: any) => {
  const actualContext = received.props?.workspace || received.context?.workspace;

  const pass = JSON.stringify(actualContext) === JSON.stringify(expectedContext);

  if (pass) {
    return {
      message: () => `Expected workspace context not to match, but it did`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected workspace context to match ${JSON.stringify(expectedContext)}, but received ${JSON.stringify(actualContext)}`,
      pass: false,
    };
  }
};

// Custom matcher for testing component variants
export const toHaveVariant = (received: any, expectedVariant: string) => {
  const classList = Array.from(received.classList);
  const hasVariant = classList.some((className: string) => className.includes(expectedVariant));

  if (hasVariant) {
    return {
      message: () => `Expected element not to have variant ${expectedVariant}, but it did`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected element to have variant ${expectedVariant}, but received classes: ${classList.join(', ')}`,
      pass: false,
    };
  }
};

// Custom matcher for testing component sizes
export const toHaveSize = (received: any, expectedSize: string) => {
  const classList = Array.from(received.classList);
  const hasSize = classList.some((className: string) => className.includes(expectedSize));

  if (hasSize) {
    return {
      message: () => `Expected element not to have size ${expectedSize}, but it did`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected element to have size ${expectedSize}, but received classes: ${classList.join(', ')}`,
      pass: false,
    };
  }
};

// Custom matcher for testing loading states
export const toBeLoading = (received: any) => {
  const hasLoadingClass = received.classList.contains('loading');
  const hasLoadingAttribute = received.getAttribute('data-loading') === 'true';
  const hasAriaLabel = received.getAttribute('aria-label')?.includes('loading');

  const isLoading = hasLoadingClass || hasLoadingAttribute || hasAriaLabel;

  if (isLoading) {
    return {
      message: () => `Expected element not to be loading, but it was`,
      pass: true,
    };
  } else {
    return {
      message: () => `Expected element to be in loading state, but it wasn't`,
      pass: false,
    };
  }
};

// Custom matcher for testing error states
export const toHaveError = (received: any, expectedError?: string) => {
  const hasErrorClass = received.classList.contains('error');
  const hasErrorAttribute = received.getAttribute('data-error') === 'true';
  const errorMessage = received.getAttribute('data-error-message');

  const hasError = hasErrorClass || hasErrorAttribute;

  if (expectedError) {
    const errorMatches = errorMessage === expectedError;

    if (hasError && errorMatches) {
      return {
        message: () => `Expected element not to have error "${expectedError}", but it did`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected element to have error "${expectedError}", but received "${errorMessage}"`,
        pass: false,
      };
    }
  } else {
    if (hasError) {
      return {
        message: () => `Expected element not to have error, but it did`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected element to have error state, but it didn't`,
        pass: false,
      };
    }
  }
};

// Extend Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveThemeValue(property: string, expectedValue: any): R;
      toBeAccessible(): R;
      toHaveWorkspaceContext(expectedContext: any): R;
      toHaveVariant(expectedVariant: string): R;
      toHaveSize(expectedSize: string): R;
      toBeLoading(): R;
      toHaveError(expectedError?: string): R;
    }
  }
}

// Register custom matchers
expect.extend({
  toHaveThemeValue,
  toBeAccessible,
  toHaveWorkspaceContext,
  toHaveVariant,
  toHaveSize,
  toBeLoading,
  toHaveError,
});
