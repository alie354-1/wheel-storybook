/**
 * FormWizard Component
 * Multi-step form wizard organism for THE WHEEL design system
 * Supports workspace context, auto-save, and collaborative editing
 */

import { Button } from '@wheel/ui';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FormState,
  FormWizardProps,
  FormWizardStep,
  UseFormWizardReturn,
  WorkspaceContext
} from './types';
import {
  debounce,
  getVisibleFields,
  hasUnsavedChanges,
  validateForm
} from './utils';

/**
 * Custom hook for form wizard state management
 */
function useFormWizard(
  steps: FormWizardStep[],
  initialData: Record<string, any> = {},
  options: {
    autoSave?: boolean;
    autoSaveInterval?: number;
    onStepChange?: (step: number, data: Record<string, any>) => void;
    onComplete?: (data: Record<string, any>) => void;
    context?: WorkspaceContext;
    permissions?: string[];
  } = {}
): UseFormWizardReturn {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    data: initialData,
    errors: {},
    touched: {},
    isValid: false,
    isSubmitting: false,
    isDirty: false,
    currentStep: 0
  });

  const totalSteps = steps.length;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  // Get current step configuration
  const currentStepConfig = steps[currentStep];
  const visibleFields = useMemo(() => {
    if (!currentStepConfig) return [];
    return getVisibleFields(
      currentStepConfig.fields,
      formState.data,
      options.permissions,
      options.context
    );
  }, [currentStepConfig, formState.data, options.permissions, options.context]);

  // Validate current step
  const validateCurrentStep = useCallback(() => {
    if (!currentStepConfig) return true;

    const stepErrors = validateForm(
      visibleFields,
      formState.data,
      options.context
    );

    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, ...stepErrors },
      isValid: Object.keys(stepErrors).length === 0
    }));

    return Object.keys(stepErrors).length === 0;
  }, [currentStepConfig, visibleFields, formState.data, options.context]);

  // Check if can proceed to next step
  const canGoNext = useMemo(() => {
    if (isLastStep) return false;

    // Check if current step is valid
    const stepErrors = validateForm(
      visibleFields,
      formState.data,
      options.context
    );

    return Object.keys(stepErrors).length === 0;
  }, [isLastStep, visibleFields, formState.data, options.context]);

  const canGoPrevious = !isFirstStep;

  // Auto-save functionality
  const debouncedAutoSave = useMemo(() => {
    if (!options.autoSave) return null;

    return debounce((data: Record<string, any>) => {
      // Auto-save logic would go here
      setFormState(prev => ({
        ...prev,
        lastSaved: new Date()
      }));
    }, options.autoSaveInterval || 2000);
  }, [options.autoSave, options.autoSaveInterval]);

  // Update form data
  const setValue = useCallback((field: string, value: any) => {
    setFormState(prev => {
      const newData = { ...prev.data, [field]: value };
      const newState = {
        ...prev,
        data: newData,
        touched: { ...prev.touched, [field]: true },
        isDirty: hasUnsavedChanges(newData, initialData)
      };

      // Trigger auto-save
      if (debouncedAutoSave) {
        debouncedAutoSave(newData);
      }

      return newState;
    });
  }, [debouncedAutoSave, initialData]);

  // Set field error
  const setError = useCallback((field: string, error: string) => {
    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [field]: error }
    }));
  }, []);

  // Clear field error
  const clearError = useCallback((field: string) => {
    setFormState(prev => {
      const newErrors = { ...prev.errors };
      delete newErrors[field];
      return {
        ...prev,
        errors: newErrors
      };
    });
  }, []);

  // Navigate to next step
  const nextStep = useCallback(() => {
    if (!canGoNext) return;

    const newStep = Math.min(currentStep + 1, totalSteps - 1);
    setCurrentStep(newStep);
    setFormState(prev => ({ ...prev, currentStep: newStep }));

    if (options.onStepChange) {
      options.onStepChange(newStep, formState.data);
    }
  }, [canGoNext, currentStep, totalSteps, formState.data, options]);

  // Navigate to previous step
  const previousStep = useCallback(() => {
    if (!canGoPrevious) return;

    const newStep = Math.max(currentStep - 1, 0);
    setCurrentStep(newStep);
    setFormState(prev => ({ ...prev, currentStep: newStep }));

    if (options.onStepChange) {
      options.onStepChange(newStep, formState.data);
    }
  }, [canGoPrevious, currentStep, formState.data, options]);

  // Navigate to specific step
  const goToStep = useCallback((step: number) => {
    if (step < 0 || step >= totalSteps) return;

    setCurrentStep(step);
    setFormState(prev => ({ ...prev, currentStep: step }));

    if (options.onStepChange) {
      options.onStepChange(step, formState.data);
    }
  }, [totalSteps, formState.data, options]);

  // Validate entire form
  const validate = useCallback(() => {
    return validateCurrentStep();
  }, [validateCurrentStep]);

  // Reset form
  const reset = useCallback(() => {
    setCurrentStep(0);
    setFormState({
      data: initialData,
      errors: {},
      touched: {},
      isValid: false,
      isSubmitting: false,
      isDirty: false,
      currentStep: 0
    });
  }, [initialData]);

  // Submit form
  const submit = useCallback(() => {
    if (!isLastStep || !canGoNext) return;

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    if (options.onComplete) {
      options.onComplete(formState.data);
    }
  }, [isLastStep, canGoNext, formState.data, options]);

  return {
    formState,
    setValue,
    setError,
    clearError,
    validate,
    reset,
    submit,
    currentStep,
    totalSteps,
    canGoNext,
    canGoPrevious,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep,
    isLastStep
  };
}

/**
 * Progress indicator component
 */
interface WizardProgressProps {
  steps: FormWizardStep[];
  currentStep: number;
  completedSteps: number[];
  context?: WorkspaceContext;
}

function WizardProgress({ steps, currentStep, completedSteps, context }: WizardProgressProps) {
  const getStepStatus = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) return 'completed';
    if (stepIndex === currentStep) return 'current';
    if (stepIndex < currentStep) return 'completed';
    return 'upcoming';
  };

  const getStepClasses = (stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    const baseClasses = 'flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors';

    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-500 text-white`;
      case 'current':
        return `${baseClasses} bg-blue-500 text-white ring-2 ring-blue-200`;
      case 'upcoming':
        return `${baseClasses} bg-gray-200 text-gray-500`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={getStepClasses(index)}>
                {completedSteps.includes(index) ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-medium text-gray-900">{step.title}</div>
                {step.estimatedTime && (
                  <div className="text-xs text-gray-500">{step.estimatedTime} min</div>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-0.5 bg-gray-200">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{
                    width: index < currentStep ? '100%' : '0%'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Step content component
 */
interface WizardStepContentProps {
  step: FormWizardStep;
  formData: Record<string, any>;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
  context?: WorkspaceContext;
  permissions?: string[];
}

function WizardStepContent({
  step,
  formData,
  errors,
  onFieldChange,
  context,
  permissions
}: WizardStepContentProps) {
  const visibleFields = getVisibleFields(step.fields, formData, permissions, context);

  return (
    <div className="space-y-6">
      {step.description && (
        <div className="text-gray-600 mb-6">
          {step.description}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {visibleFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type || 'text'}
              value={formData[field.name] || ''}
              onChange={(e) => onFieldChange(field.name, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={field.placeholder}
              disabled={(field as any).disabled || false}
            />
            {errors[field.name] && (
              <p className="text-sm text-red-600">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Main FormWizard component
 */
export function FormWizard({
  context = 'neutral',
  steps,
  initialData = {},
  currentStep: controlledCurrentStep,
  onStepChange,
  onComplete,
  onCancel,
  template,
  workspaceId,
  autoSave = false,
  autoSaveInterval = 2000,
  showProgress = true,
  allowStepSkip = false,
  allowStepBack = true,
  permissions = [],
  className = '',
  loading = false,
  disabled = false
}: FormWizardProps) {
  // Mock workspace for now - replace with actual useWorkspace hook when available
  const workspace = { type: 'neutral' };
  const workspaceContext = context || workspace?.type || 'neutral';

  // Use controlled or uncontrolled step management
  const isControlled = controlledCurrentStep !== undefined;

  const {
    formState,
    setValue,
    setError,
    clearError,
    validate,
    reset,
    submit,
    currentStep: internalCurrentStep,
    totalSteps,
    canGoNext,
    canGoPrevious,
    nextStep: internalNextStep,
    previousStep: internalPreviousStep,
    goToStep: internalGoToStep,
    isFirstStep,
    isLastStep
  } = useFormWizard(steps, initialData, {
    autoSave,
    autoSaveInterval,
    onStepChange,
    onComplete,
    context: workspaceContext,
    permissions
  });

  const currentStep = isControlled ? controlledCurrentStep! : internalCurrentStep;
  const nextStep = isControlled ? () => onStepChange?.(currentStep + 1, formState.data) : internalNextStep;
  const previousStep = isControlled ? () => onStepChange?.(currentStep - 1, formState.data) : internalPreviousStep;
  const goToStep = isControlled ? (step: number) => onStepChange?.(step, formState.data) : internalGoToStep;

  // Track completed steps
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Update completed steps when moving forward
  useEffect(() => {
    if (currentStep > 0 && !completedSteps.includes(currentStep - 1)) {
      setCompletedSteps(prev => [...prev, currentStep - 1]);
    }
  }, [currentStep, completedSteps]);

  // Get current step configuration
  const currentStepConfig = steps[currentStep];

  if (!currentStepConfig) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600">Invalid step configuration</div>
      </div>
    );
  }

  // Calculate overall progress
  const overallProgress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleFieldChange = (field: string, value: any) => {
    setValue(field, value);
    clearError(field);
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  const handleComplete = () => {
    if (validate()) {
      submit();
    }
  };

  const baseClasses = `
    bg-white rounded-lg shadow-sm border border-gray-200 p-6
    ${className}
  `;

  if (loading) {
    return (
      <div className={baseClasses}>
        <div className="animate-pulse space-y-6">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={baseClasses}>
      {/* Progress indicator */}
      {showProgress && (
        <WizardProgress
          steps={steps}
          currentStep={currentStep}
          completedSteps={completedSteps}
          context={workspaceContext}
        />
      )}

      {/* Step header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            {currentStepConfig.title}
          </h2>
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {totalSteps} ({overallProgress}%)
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <WizardStepContent
        step={currentStepConfig}
        formData={formState.data}
        errors={formState.errors}
        onFieldChange={handleFieldChange}
        context={workspaceContext}
        permissions={permissions}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          {allowStepBack && canGoPrevious && (
            <Button
              variant="secondary"
              onClick={previousStep}
              disabled={disabled || formState.isSubmitting}
            >
              Previous
            </Button>
          )}

          {onCancel && (
            <Button
              variant="ghost"
              onClick={onCancel}
              disabled={disabled || formState.isSubmitting}
            >
              Cancel
            </Button>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {allowStepSkip && !isLastStep && (
            <Button
              variant="ghost"
              onClick={nextStep}
              disabled={disabled || formState.isSubmitting}
            >
              Skip
            </Button>
          )}

          {isLastStep ? (
            <Button
              variant="primary"
              onClick={handleComplete}
              disabled={disabled || !canGoNext || formState.isSubmitting}
              isLoading={formState.isSubmitting}
            >
              Complete
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={disabled || !canGoNext || formState.isSubmitting}
            >
              Next
            </Button>
          )}
        </div>
      </div>

      {/* Auto-save indicator */}
      {autoSave && formState.lastSaved && (
        <div className="mt-4 text-xs text-gray-500 text-center">
          Last saved: {formState.lastSaved.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}

export default FormWizard;
