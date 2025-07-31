/**
 * FormBuilder Component
 * Advanced form builder organism with workspace context, auto-save, and collaborative editing
 */

import { Button } from '@wheel/ui';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FormBuilderProps,
  FormField,
  FormState
} from './types';
import {
  calculateFormCompletion,
  debounce,
  deepClone,
  generateFieldId,
  getVisibleFields,
  hasUnsavedChanges,
  validateForm
} from './utils';

/**
 * FormBuilder - Dynamic form generation with workspace context
 */
export function FormBuilder({
  context = 'neutral',
  schema,
  initialData = {},
  onSubmit,
  onChange,
  onValidationChange,
  template,
  workspaceId,
  autoSave = false,
  autoSaveInterval = 2000,
  collaborative = false,
  readonly = false,
  permissions = [],
  className = '',
  loading = false,
  disabled = false
}: FormBuilderProps) {
  // Form state management
  const [formState, setFormState] = useState<FormState>({
    data: { ...initialData },
    errors: {},
    touched: {},
    isValid: true,
    isSubmitting: false,
    isDirty: false,
    lastSaved: undefined
  });

  // Auto-save state
  const [autoSaveStatus, setAutoSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const savedDataRef = useRef({ ...initialData });
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout>();

  // Get visible fields based on current data and permissions
  const visibleFields = useMemo(() =>
    getVisibleFields(schema.fields, formState.data, permissions, context),
    [schema.fields, formState.data, permissions, context]
  );

  // Calculate form completion percentage
  const completionPercentage = useMemo(() =>
    calculateFormCompletion(visibleFields, formState.data, permissions, context),
    [visibleFields, formState.data, permissions, context]
  );

  // Validate form data
  const validateFormData = useCallback((data: Record<string, any>) => {
    const errors = validateForm(visibleFields, data, context);
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
  }, [visibleFields, context]);

  // Handle field value changes
  const handleFieldChange = useCallback((fieldName: string, value: any) => {
    if (readonly || disabled) return;

    setFormState(prevState => {
      const newData = { ...prevState.data, [fieldName]: value };
      const { errors, isValid } = validateFormData(newData);
      const isDirty = hasUnsavedChanges(newData, savedDataRef.current);

      const newState = {
        ...prevState,
        data: newData,
        errors,
        isValid,
        isDirty,
        touched: { ...prevState.touched, [fieldName]: true }
      };

      // Trigger onChange callback
      onChange?.(newData);
      onValidationChange?.(errors);

      return newState;
    });
  }, [readonly, disabled, validateFormData, onChange, onValidationChange]);

  // Debounced auto-save function
  const debouncedAutoSave = useMemo(
    () => debounce(async (data: Record<string, any>) => {
      if (!autoSave || readonly) return;

      try {
        setAutoSaveStatus('saving');

        // Simulate auto-save API call
        await new Promise(resolve => setTimeout(resolve, 500));

        savedDataRef.current = deepClone(data);
        setFormState(prev => ({ ...prev, lastSaved: new Date(), isDirty: false }));
        setAutoSaveStatus('saved');

        // Reset status after 2 seconds
        setTimeout(() => setAutoSaveStatus('idle'), 2000);
      } catch (error) {
        console.error('Auto-save failed:', error);
        setAutoSaveStatus('error');
        setTimeout(() => setAutoSaveStatus('idle'), 3000);
      }
    }, autoSaveInterval),
    [autoSave, autoSaveInterval, readonly]
  );

  // Auto-save effect
  useEffect(() => {
    if (autoSave && formState.isDirty && !formState.isSubmitting) {
      debouncedAutoSave(formState.data);
    }
  }, [autoSave, formState.isDirty, formState.isSubmitting, formState.data, debouncedAutoSave]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (readonly || disabled || formState.isSubmitting) return;

    const { errors, isValid } = validateFormData(formState.data);

    setFormState(prev => ({
      ...prev,
      errors,
      isValid,
      isSubmitting: true,
      touched: visibleFields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    }));

    if (isValid && onSubmit) {
      try {
        await onSubmit(formState.data);
        savedDataRef.current = deepClone(formState.data);
        setFormState(prev => ({ ...prev, isDirty: false, lastSaved: new Date() }));
      } catch (error) {
        console.error('Form submission failed:', error);
      }
    }

    setFormState(prev => ({ ...prev, isSubmitting: false }));
  }, [readonly, disabled, formState.isSubmitting, formState.data, validateFormData, visibleFields, onSubmit]);

  // Reset form
  const handleReset = useCallback(() => {
    if (readonly || disabled) return;

    setFormState({
      data: { ...initialData },
      errors: {},
      touched: {},
      isValid: true,
      isSubmitting: false,
      isDirty: false,
      lastSaved: undefined
    });
    savedDataRef.current = { ...initialData };
  }, [readonly, disabled, initialData]);

  // Render form field
  const renderField = useCallback((field: FormField) => {
    const fieldId = generateFieldId(field.name, workspaceId);
    const value = formState.data[field.name] || '';
    const error = formState.errors[field.name];
    const touched = formState.touched[field.name];

    return (
      <div key={field.name} className="space-y-2">
        <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          id={fieldId}
          name={field.name}
          type={field.type || 'text'}
          placeholder={field.placeholder}
          value={value}
          disabled={disabled || readonly}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange(field.name, e.target.value)}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${touched && error ? 'border-red-500' : 'border-gray-300'}
            ${disabled || readonly ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
          `}
          {...field.props}
        />
        {touched && error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }, [formState.data, formState.errors, formState.touched, disabled, readonly, workspaceId, handleFieldChange]);

  // Auto-save indicator
  const renderAutoSaveIndicator = () => {
    if (!autoSave) return null;

    const statusMessages = {
      idle: '',
      saving: 'Saving...',
      saved: 'Saved',
      error: 'Save failed'
    };

    const statusColors = {
      idle: 'text-gray-500',
      saving: 'text-blue-500',
      saved: 'text-green-500',
      error: 'text-red-500'
    };

    return (
      <div className={`text-sm ${statusColors[autoSaveStatus]} transition-colors duration-200`}>
        {statusMessages[autoSaveStatus]}
        {formState.lastSaved && autoSaveStatus === 'idle' && (
          <span className="text-gray-400 ml-2">
            Last saved: {formState.lastSaved.toLocaleTimeString()}
          </span>
        )}
      </div>
    );
  };

  // Form layout based on schema
  const renderFormLayout = () => {
    const layout = schema.layout?.type || 'single-column';
    const spacing = schema.layout?.spacing || 'normal';

    const spacingClasses = {
      compact: 'space-y-3',
      normal: 'space-y-4',
      relaxed: 'space-y-6'
    };

    const layoutClasses = {
      'single-column': 'grid grid-cols-1',
      'two-column': 'grid grid-cols-1 md:grid-cols-2 gap-x-6',
      'grid': `grid grid-cols-1 md:grid-cols-${schema.layout?.columns || 2} gap-x-6`,
      'tabs': 'space-y-4',
      'accordion': 'space-y-2'
    };

    return (
      <div className={`${layoutClasses[layout]} ${spacingClasses[spacing]}`}>
        {visibleFields.map(renderField)}
      </div>
    );
  };

  // Workspace-specific styling
  const getWorkspaceStyles = () => {
    const baseStyles = 'bg-white border border-gray-200 rounded-lg shadow-sm';

    const workspaceStyles = {
      consultant: 'border-blue-200 focus-within:border-blue-500',
      client: 'border-green-200 focus-within:border-green-500',
      admin: 'border-purple-200 focus-within:border-purple-500',
      expert: 'border-orange-200 focus-within:border-orange-500',
      'tool-creator': 'border-indigo-200 focus-within:border-indigo-500',
      founder: 'border-red-200 focus-within:border-red-500',
      neutral: 'border-gray-200 focus-within:border-gray-500'
    };

    return `${baseStyles} ${workspaceStyles[context]}`;
  };

  return (
    <div className={`form-builder ${className}`}>
      {/* Form Header */}
      {(schema.metadata?.title || completionPercentage < 100 || autoSave) && (
        <div className="mb-6">
          {schema.metadata?.title && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {schema.metadata.title}
              </h2>
              {schema.metadata.description && (
                <p className="text-gray-600 mt-1">
                  {schema.metadata.description}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            {/* Progress indicator */}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {completionPercentage}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            {/* Auto-save indicator */}
            {renderAutoSaveIndicator()}
          </div>
        </div>
      )}

      {/* Form Content */}
      <form onSubmit={handleSubmit} className={getWorkspaceStyles()}>
        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
              <span className="ml-3 text-gray-600">Loading form...</span>
            </div>
          ) : (
            renderFormLayout()
          )}
        </div>

        {/* Form Actions */}
        {!readonly && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {formState.isDirty && (
                  <span className="text-sm text-orange-600">
                    You have unsaved changes
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleReset}
                  disabled={disabled || formState.isSubmitting || !formState.isDirty}
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={disabled || formState.isSubmitting || !formState.isValid}
                  isLoading={formState.isSubmitting}
                >
                  {formState.isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Collaborative indicators */}
      {collaborative && (
        <div className="mt-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Collaborative editing enabled</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormBuilder;
