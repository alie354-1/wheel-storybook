/**
 * Toast notification utility
 * 
 * This utility provides a simple way to show toast notifications using CSS variables for theming.
 */

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  onClose?: () => void;
}

// Default options
const defaultOptions: ToastOptions = {
  duration: 5000,
  position: 'top-right'
};

// Toast type to color mapping
const typeToColorMap = {
  success: {
    bg: 'var(--color-success-50)',
    border: 'var(--color-success-500)',
    icon: 'var(--color-success-500)'
  },
  error: {
    bg: 'var(--color-error-50)',
    border: 'var(--color-error-500)',
    icon: 'var(--color-error-500)'
  },
  info: {
    bg: 'var(--color-info-50)',
    border: 'var(--color-info-500)',
    icon: 'var(--color-info-500)'
  },
  warning: {
    bg: 'var(--color-warning-50)',
    border: 'var(--color-warning-500)',
    icon: 'var(--color-warning-500)'
  }
};

// Position to CSS mapping
const positionToCSS = {
  'top-right': {
    top: '1rem',
    right: '1rem',
    bottom: 'auto',
    left: 'auto'
  },
  'top-left': {
    top: '1rem',
    right: 'auto',
    bottom: 'auto',
    left: '1rem'
  },
  'bottom-right': {
    top: 'auto',
    right: '1rem',
    bottom: '1rem',
    left: 'auto'
  },
  'bottom-left': {
    top: 'auto',
    right: 'auto',
    bottom: '1rem',
    left: '1rem'
  },
  'top-center': {
    top: '1rem',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  'bottom-center': {
    top: 'auto',
    right: 'auto',
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

/**
 * Show a toast notification
 * @param type The type of toast
 * @param title The toast title
 * @param message The toast message
 * @param options Toast options
 */
function showToast(type: ToastType, title: string, message?: string, options?: ToastOptions) {
  const mergedOptions = { ...defaultOptions, ...options };
  const colors = typeToColorMap[type];
  const position = positionToCSS[mergedOptions.position || 'top-right'];
  
  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.zIndex = '9999';
    toastContainer.style.pointerEvents = 'none';
    document.body.appendChild(toastContainer);
  }
  
  // Set container position
  Object.assign(toastContainer.style, position);
  
  // Create toast element
  const toastElement = document.createElement('div');
  toastElement.style.backgroundColor = colors.bg;
  toastElement.style.borderLeft = `4px solid ${colors.border}`;
  toastElement.style.color = 'var(--color-text-primary)';
  toastElement.style.padding = '1rem';
  toastElement.style.borderRadius = 'var(--radius-md)';
  toastElement.style.boxShadow = 'var(--shadow-md)';
  toastElement.style.marginBottom = '0.5rem';
  toastElement.style.width = '320px';
  toastElement.style.pointerEvents = 'auto';
  toastElement.style.display = 'flex';
  toastElement.style.flexDirection = 'column';
  toastElement.style.position = 'relative';
  toastElement.style.animation = 'toast-in 0.3s ease-out forwards';
  
  // Add title
  const titleElement = document.createElement('div');
  titleElement.style.fontWeight = 'var(--font-weight-semibold)';
  titleElement.style.fontSize = 'var(--font-size-md)';
  titleElement.style.marginBottom = message ? '0.25rem' : '0';
  titleElement.textContent = title;
  toastElement.appendChild(titleElement);
  
  // Add message if provided
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.style.fontSize = 'var(--font-size-sm)';
    messageElement.style.opacity = '0.9';
    messageElement.textContent = message;
    toastElement.appendChild(messageElement);
  }
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '0.5rem';
  closeButton.style.right = '0.5rem';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '1rem';
  closeButton.style.color = 'var(--color-text-secondary)';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    closeToast();
  });
  toastElement.appendChild(closeButton);
  
  // Add to container
  toastContainer.appendChild(toastElement);
  
  // Create and add styles for animation if they don't exist
  if (!document.getElementById('toast-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'toast-styles';
    styleElement.textContent = `
      @keyframes toast-in {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes toast-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-20px); opacity: 0; }
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  // Function to close toast
  const closeToast = () => {
    toastElement.style.animation = 'toast-out 0.3s ease-in forwards';
    setTimeout(() => {
      if (toastContainer && toastContainer.contains(toastElement)) {
        toastContainer.removeChild(toastElement);
        if (mergedOptions.onClose) {
          mergedOptions.onClose();
        }
        
        // Remove container if empty
        if (toastContainer.childElementCount === 0) {
          document.body.removeChild(toastContainer);
        }
      }
    }, 300);
  };
  
  // Auto-remove after duration
  if (mergedOptions.duration) {
    setTimeout(closeToast, mergedOptions.duration);
  }
  
  return toastElement;
}

/**
 * Toast utility
 */
export const toast = {
  /**
   * Show a success toast
   * @param title The toast title
   * @param message The toast message
   * @param options Toast options
   */
  success: (title: string, message?: string, options?: ToastOptions) => 
    showToast('success', title, message, options),
  
  /**
   * Show an error toast
   * @param title The toast title
   * @param message The toast message
   * @param options Toast options
   */
  error: (title: string, message?: string, options?: ToastOptions) => 
    showToast('error', title, message, options),
  
  /**
   * Show an info toast
   * @param title The toast title
   * @param message The toast message
   * @param options Toast options
   */
  info: (title: string, message?: string, options?: ToastOptions) => 
    showToast('info', title, message, options),
  
  /**
   * Show a warning toast
   * @param title The toast title
   * @param message The toast message
   * @param options Toast options
   */
  warning: (title: string, message?: string, options?: ToastOptions) => 
    showToast('warning', title, message, options)
};
