import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';

export interface ErrorInfo {
  componentStack?: string | null;
  digest?: string | null;
  errorBoundary?: ErrorBoundary;
  errorBoundaryProps?: ErrorBoundaryProps;
}

export interface ErrorAction {
  label: string;
  action: () => void | Promise<void>;
  type: 'primary' | 'secondary';
  icon?: string;
}

export interface ErrorCategory {
  type: 'network' | 'permission' | 'validation' | 'system' | 'unknown';
  severity: 'low' | 'medium' | 'high' | 'critical';
  recoverable: boolean;
  userMessage: string;
  technicalMessage: string;
  suggestedActions: ErrorAction[];
}
