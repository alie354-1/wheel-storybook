/**
 * Toast Component
 *
 * A component for displaying toast notifications with workspace context awareness.
 */
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ToastVariant = 'success' | 'warning' | 'error' | 'info';
export interface ToastAction {
    label: string;
    onClick: () => void;
}
export interface ToastProps {
    variant?: ToastVariant;
    context?: WorkspaceContext;
    title?: string;
    description?: string;
    duration?: number;
    persistent?: boolean;
    actions?: ToastAction[];
}
export declare const Toast: ({ variant, context, title, description, actions }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export declare const useToast: () => {
    show: (props: ToastProps) => void;
};
export declare const ToastProvider: () => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=toast.d.ts.map