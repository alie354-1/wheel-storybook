import { cn } from "@wheel/shared";
import * as React from "react";

// Local implementation of useAutosizeTextArea hook
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  React.useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral'
export type ValidationState = 'error' | 'warning' | 'success' | 'none'

export interface EnhancedTextareaProps extends Omit<React.ComponentProps<"textarea">, 'size'> {
  context?: WorkspaceContext
  validationState?: ValidationState
  helperText?: string
  errorMessage?: string
  warningMessage?: string
  successMessage?: string
  label?: string
  required?: boolean
  textareaSize?: TextareaSize
  fullWidth?: boolean
  hasError?: boolean
  name: string
  description?: string
  showCharacterCount?: boolean
  maxLength?: number
  autoResize?: boolean
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & {
    context?: WorkspaceContext
    validationState?: ValidationState
    textareaSize?: TextareaSize
    autoResize?: boolean
  }
>(({ className, context = 'neutral', validationState = 'none', textareaSize = 'md', autoResize = true, ...props }, ref) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(autoResize ? textAreaRef.current : null, props.value as string)
  React.useImperativeHandle(ref, () => textAreaRef.current as HTMLTextAreaElement)

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'border-consultant-400 focus:border-consultant-600 focus:ring-consultant-500 bg-consultant-50'
      case 'client': return 'border-client-400 focus:border-client-600 focus:ring-client-500 bg-client-50'
      case 'admin': return 'border-admin-400 focus:border-admin-600 focus:ring-admin-500 bg-admin-50'
      case 'expert': return 'border-expert-400 focus:border-expert-600 focus:ring-expert-500 bg-expert-50'
      case 'toolCreator': return 'border-toolCreator-400 focus:border-toolCreator-600 focus:ring-toolCreator-500 bg-toolCreator-50'
      case 'founder': return 'border-founder-400 focus:border-founder-600 focus:ring-founder-500 bg-founder-50'
      default: return 'border-slate-300 focus:border-slate-500 focus:ring-slate-500 bg-white'
    }
  }

  const getValidationClasses = () => {
    switch (validationState) {
      case 'error': return 'border-red-500 focus:border-red-500 focus:ring-red-500'
      case 'warning': return 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500'
      case 'success': return 'border-green-500 focus:border-green-500 focus:ring-green-500'
      default: return ''
    }
  }

  const getSizeClasses = () => {
    switch (textareaSize) {
      case 'xs': return 'min-h-[40px] px-2 py-1 text-xs'
      case 'sm': return 'min-h-[50px] px-2.5 py-1.5 text-sm'
      case 'md': return 'min-h-[60px] px-3 py-2 text-base'
      case 'lg': return 'min-h-[80px] px-4 py-2.5 text-lg'
      case 'xl': return 'min-h-[100px] px-5 py-3 text-xl'
      default: return 'min-h-[60px] px-3 py-2 text-base'
    }
  }

  return (
    <textarea
      className={cn(
        "flex w-full rounded-lg border shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors duration-200",
        getSizeClasses(),
        validationState !== 'none' ? getValidationClasses() : getContextClasses(),
        className
      )}
      ref={textAreaRef}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

const EnhancedTextarea = React.forwardRef<HTMLTextAreaElement, EnhancedTextareaProps>(({
  context = 'neutral',
  validationState = 'none',
  helperText,
  errorMessage,
  warningMessage,
  successMessage,
  label,
  required,
  textareaSize = 'md',
  fullWidth = true,
  hasError,
  name,
  description,
  showCharacterCount,
  maxLength,
  autoResize = true,
  className,
  value,
  ...props
}, ref) => {
  const finalValidationState = hasError ? 'error' : validationState
  const currentLength = typeof value === 'string' ? value.length : 0

  const getMessage = () => {
    switch (finalValidationState) {
      case 'error': return errorMessage || helperText
      case 'warning': return warningMessage || helperText
      case 'success': return successMessage || helperText
      default: return helperText
    }
  }

  const getMessageColor = () => {
    switch (finalValidationState) {
      case 'error': return 'text-red-600'
      case 'warning': return 'text-yellow-600'
      case 'success': return 'text-green-600'
      default: return 'text-slate-600'
    }
  }

  const message = getMessage()
  const showCount = showCharacterCount || maxLength

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label htmlFor={name} className={cn('block text-sm font-medium', finalValidationState === 'error' ? 'text-red-700' : 'text-slate-700')}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Textarea
        ref={ref}
        context={context}
        validationState={finalValidationState}
        textareaSize={textareaSize}
        autoResize={autoResize}
        id={name}
        value={value}
        maxLength={maxLength}
        aria-describedby={description ? `${name}-description` : undefined}
        aria-invalid={finalValidationState === 'error'}
        className={fullWidth ? 'w-full' : ''}
        {...props}
      />

      {(message || description || showCount) && (
        <div className="space-y-1">
          {description && <p id={`${name}-description`} className="text-xs text-slate-500">{description}</p>}
          <div className="flex justify-between items-center">
            {message && <p className={cn('text-xs', getMessageColor())}>{message}</p>}
            {showCount && (
              <p className={cn('text-xs', maxLength && currentLength > maxLength ? 'text-red-600' : 'text-slate-500')}>
                {currentLength}{maxLength && `/${maxLength}`}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
})
EnhancedTextarea.displayName = 'EnhancedTextarea'

export { EnhancedTextarea, Textarea };

