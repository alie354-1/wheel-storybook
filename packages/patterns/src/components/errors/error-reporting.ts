import { ErrorInfo } from './types';

class ErrorReportingService {
  report(error: Error, errorInfo: ErrorInfo) {
    // In a real application, this would send the error to a service like Sentry, Bugsnag, or a custom backend.
    console.group('Error Reporter');
    console.error('Caught an error:', error);
    console.log('Additional info:', errorInfo);
    console.groupEnd();
  }
}

export const errorReporter = new ErrorReportingService();
