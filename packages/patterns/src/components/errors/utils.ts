import { ErrorCategory } from './types';

export const categorizeError = (error: Error): ErrorCategory => {
  // Basic error categorization logic. This can be expanded.
  if (error.message.includes('Network')) {
    return {
      type: 'network',
      severity: 'high',
      recoverable: true,
      userMessage: 'A network error occurred. Please check your connection and try again.',
      technicalMessage: error.message,
      suggestedActions: [{ label: 'Retry', action: () => window.location.reload(), type: 'primary' }],
    };
  }

  if (error.message.includes('Permission')) {
    return {
      type: 'permission',
      severity: 'medium',
      recoverable: false,
      userMessage: "You don't have permission to perform this action.",
      technicalMessage: error.message,
      suggestedActions: [],
    };
  }

  return {
    type: 'unknown',
    severity: 'critical',
    recoverable: false,
    userMessage: 'An unexpected error occurred.',
    technicalMessage: error.message,
    suggestedActions: [],
  };
};
