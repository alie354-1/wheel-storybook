/**
 * Toast notification utility
 *
 * This utility provides a simple way to show toast notifications using CSS variables for theming.
 */
interface ToastOptions {
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    onClose?: () => void;
}
/**
 * Toast utility
 */
export declare const toast: {
    /**
     * Show a success toast
     * @param title The toast title
     * @param message The toast message
     * @param options Toast options
     */
    success: (title: string, message?: string, options?: ToastOptions) => HTMLDivElement;
    /**
     * Show an error toast
     * @param title The toast title
     * @param message The toast message
     * @param options Toast options
     */
    error: (title: string, message?: string, options?: ToastOptions) => HTMLDivElement;
    /**
     * Show an info toast
     * @param title The toast title
     * @param message The toast message
     * @param options Toast options
     */
    info: (title: string, message?: string, options?: ToastOptions) => HTMLDivElement;
    /**
     * Show a warning toast
     * @param title The toast title
     * @param message The toast message
     * @param options Toast options
     */
    warning: (title: string, message?: string, options?: ToastOptions) => HTMLDivElement;
};
export {};
//# sourceMappingURL=toast.d.ts.map