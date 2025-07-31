import React, { Component, ErrorInfo, ReactNode } from 'react';
import { errorReporter } from './error-reporting';

interface ErrorBoundaryProps {
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: Array<string | number>;
  resetOnPropsChange?: boolean;
  isolate?: boolean;
  level?: 'page' | 'section' | 'component';
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  errorInfo?: ErrorInfo;
  level?: 'page' | 'section' | 'component';
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    errorReporter.report(error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback: FallbackComponent, children, context, level } = this.props;

    if (hasError && error) {
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={error}
            resetError={this.resetError}
            context={context}
            level={level}
          />
        );
      }
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export { ErrorBoundary };
export type { ErrorBoundaryProps, ErrorFallbackProps };

