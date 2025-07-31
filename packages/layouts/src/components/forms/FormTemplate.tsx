/**
 * FormTemplate Component
 * Reusable form template organism for THE WHEEL design system
 * Supports template management, customization, and sharing
 */

import { Button } from '@wheel/ui';
import { useCallback, useMemo, useState } from 'react';
import {
  FormTemplateCategory,
  FormTemplateMetadata,
  FormTemplateProps,
  FormTemplate as FormTemplateType,
  UseFormTemplateReturn,
  WorkspaceContext
} from './types';
import {
  debounce,
  getVisibleFields
} from './utils';

/**
 * Custom hook for form template management
 */
function useFormTemplate(
  template: FormTemplateType | null,
  options: {
    autoSave?: boolean;
    autoSaveInterval?: number;
    onTemplateChange?: (template: FormTemplateType) => void;
    onTemplateSave?: (template: FormTemplateType) => void;
    context?: WorkspaceContext;
    permissions?: string[];
  } = {}
): UseFormTemplateReturn {
  const [currentTemplate, setCurrentTemplate] = useState<FormTemplateType | null>(template);
  const [isEditing, setIsEditing] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Auto-save functionality
  const debouncedAutoSave = useMemo(() => {
    if (!options.autoSave) return null;

    return debounce((template: FormTemplateType) => {
      setIsSaving(true);
      // Auto-save logic would go here
      setTimeout(() => {
        setIsSaving(false);
        setLastSaved(new Date());
        setIsDirty(false);
      }, 500);
    }, options.autoSaveInterval || 2000);
  }, [options.autoSave, options.autoSaveInterval]);

  // Update template
  const updateTemplate = useCallback((updates: Partial<FormTemplateType>) => {
    if (!currentTemplate) return;

    const updatedTemplate = { ...currentTemplate, ...updates };
    setCurrentTemplate(updatedTemplate);
    setIsDirty(true);

    if (options.onTemplateChange) {
      options.onTemplateChange(updatedTemplate);
    }

    // Trigger auto-save
    if (debouncedAutoSave) {
      debouncedAutoSave(updatedTemplate);
    }
  }, [currentTemplate, options, debouncedAutoSave]);

  // Save template
  const saveTemplate = useCallback(async () => {
    if (!currentTemplate || !isDirty) return;

    setIsSaving(true);
    try {
      if (options.onTemplateSave) {
        options.onTemplateSave(currentTemplate);
      }
      setLastSaved(new Date());
      setIsDirty(false);
    } finally {
      setIsSaving(false);
    }
  }, [currentTemplate, isDirty, options]);

  // Start editing
  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  // Stop editing
  const stopEditing = useCallback(() => {
    setIsEditing(false);
  }, []);

  // Cancel editing
  const cancelEditing = useCallback(() => {
    setCurrentTemplate(template);
    setIsEditing(false);
    setIsDirty(false);
  }, [template]);

  return {
    currentTemplate,
    isEditing,
    isDirty,
    isSaving,
    lastSaved,
    updateTemplate,
    saveTemplate,
    startEditing,
    stopEditing,
    cancelEditing
  };
}

/**
 * Template metadata editor component
 */
interface TemplateMetadataEditorProps {
  metadata: FormTemplateMetadata;
  onMetadataChange: (metadata: FormTemplateMetadata) => void;
  context?: WorkspaceContext;
  disabled?: boolean;
}

function TemplateMetadataEditor({
  metadata,
  onMetadataChange,
  context,
  disabled = false
}: TemplateMetadataEditorProps) {
  const handleChange = (field: keyof FormTemplateMetadata, value: any) => {
    onMetadataChange({
      ...metadata,
      [field]: value
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Template Name *
          </label>
          <input
            type="text"
            value={metadata.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter template name"
            disabled={disabled}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={metadata.category}
            onChange={(e) => handleChange('category', e.target.value as FormTemplateCategory)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={disabled}
          >
            <option value="general">General</option>
            <option value="onboarding">Onboarding</option>
            <option value="survey">Survey</option>
            <option value="application">Application</option>
            <option value="feedback">Feedback</option>
            <option value="registration">Registration</option>
            <option value="contact">Contact</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={metadata.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe what this template is for"
          rows={3}
          disabled={disabled}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Version
          </label>
          <input
            type="text"
            value={metadata.version}
            onChange={(e) => handleChange('version', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1.0.0"
            disabled={disabled}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            value={metadata.author || ''}
            onChange={(e) => handleChange('author', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Template author"
            disabled={disabled}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Time (minutes)
          </label>
          <input
            type="number"
            value={metadata.estimatedTime || ''}
            onChange={(e) => handleChange('estimatedTime', parseInt(e.target.value) || undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="5"
            min="1"
            disabled={disabled}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tags
        </label>
        <input
          type="text"
          value={metadata.tags?.join(', ') || ''}
          onChange={(e) => handleChange('tags', e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="tag1, tag2, tag3"
          disabled={disabled}
        />
        <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={metadata.isPublic || false}
            onChange={(e) => handleChange('isPublic', e.target.checked)}
            className="mr-2"
            disabled={disabled}
          />
          <span className="text-sm text-gray-700">Make template public</span>
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={metadata.isShared || false}
            onChange={(e) => handleChange('isShared', e.target.checked)}
            className="mr-2"
            disabled={disabled}
          />
          <span className="text-sm text-gray-700">Allow sharing</span>
        </label>
      </div>
    </div>
  );
}

/**
 * Template preview component
 */
interface TemplatePreviewProps {
  template: FormTemplateType;
  context?: WorkspaceContext;
}

function TemplatePreview({ template, context }: TemplatePreviewProps) {
  const visibleFields = useMemo(() => {
    return getVisibleFields(template.fields, {}, [], context);
  }, [template.fields, context]);

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900">{template.metadata.name}</h3>
        {template.metadata.description && (
          <p className="text-gray-600 mt-1">{template.metadata.description}</p>
        )}
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
          <span>Category: {template.metadata.category}</span>
          <span>Version: {template.metadata.version}</span>
          {template.metadata.estimatedTime && (
            <span>Est. time: {template.metadata.estimatedTime} min</span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Form Fields ({visibleFields.length})</h4>
        <div className="grid grid-cols-1 gap-4">
          {visibleFields.map((field, index) => (
            <div key={field.name} className="border border-gray-200 rounded-md p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-gray-900">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {field.type}
                </span>
              </div>
              {field.placeholder && (
                <p className="text-xs text-gray-500">Placeholder: {field.placeholder}</p>
              )}
              {field.validation && (
                <p className="text-xs text-gray-500">Validation: {JSON.stringify(field.validation)}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {template.metadata.tags && template.metadata.tags.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {template.metadata.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Main FormTemplate component
 */
export function FormTemplate({
  context = 'neutral',
  template: initialTemplate,
  mode = 'view',
  onTemplateChange,
  onTemplateSave,
  onTemplateUse,
  onTemplateShare,
  onTemplateDelete,
  autoSave = false,
  autoSaveInterval = 2000,
  permissions = [],
  className = '',
  loading = false,
  disabled = false
}: FormTemplateProps) {
  // Mock workspace for now - replace with actual useWorkspace hook when available
  const workspace = { type: 'neutral' };
  const workspaceContext = context || workspace?.type || 'neutral';

  const {
    currentTemplate,
    isEditing,
    isDirty,
    isSaving,
    lastSaved,
    updateTemplate,
    saveTemplate,
    startEditing,
    stopEditing,
    cancelEditing
  } = useFormTemplate(initialTemplate || null, {
    autoSave,
    autoSaveInterval,
    onTemplateChange,
    onTemplateSave,
    context: workspaceContext,
    permissions
  });

  const handleMetadataChange = useCallback((metadata: FormTemplateMetadata) => {
    updateTemplate({ metadata });
  }, [updateTemplate]);

  const handleUseTemplate = useCallback(() => {
    if (currentTemplate && onTemplateUse) {
      onTemplateUse(currentTemplate);
    }
  }, [currentTemplate, onTemplateUse]);

  const handleShareTemplate = useCallback(() => {
    if (currentTemplate && onTemplateShare) {
      onTemplateShare(currentTemplate);
    }
  }, [currentTemplate, onTemplateShare]);

  const handleDeleteTemplate = useCallback(() => {
    if (currentTemplate && onTemplateDelete) {
      onTemplateDelete(currentTemplate);
    }
  }, [currentTemplate, onTemplateDelete]);

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

  if (!currentTemplate) {
    return (
      <div className={baseClasses}>
        <div className="text-center py-8">
          <div className="text-gray-500">No template selected</div>
        </div>
      </div>
    );
  }

  return (
    <div className={baseClasses}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {mode === 'edit' || isEditing ? 'Edit Template' : 'Template'}
          </h2>
          {lastSaved && (
            <p className="text-sm text-gray-500">
              Last saved: {lastSaved.toLocaleTimeString()}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {mode === 'view' && !isEditing && (
            <>
              <Button
                variant="secondary"
                onClick={handleUseTemplate}
                disabled={disabled}
              >
                Use Template
              </Button>
              {currentTemplate.metadata.isShared && (
                <Button
                  variant="ghost"
                  onClick={handleShareTemplate}
                  disabled={disabled}
                >
                  Share
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={startEditing}
                disabled={disabled}
              >
                Edit
              </Button>
            </>
          )}

          {(mode === 'edit' || isEditing) && (
            <>
              <Button
                variant="ghost"
                onClick={cancelEditing}
                disabled={disabled || isSaving}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={saveTemplate}
                disabled={disabled || !isDirty || isSaving}
                isLoading={isSaving}
              >
                Save
              </Button>
            </>
          )}

          {mode === 'view' && !isEditing && onTemplateDelete && (
            <Button
              variant="ghost"
              onClick={handleDeleteTemplate}
              disabled={disabled}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      {mode === 'edit' || isEditing ? (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Template Information</h3>
            <TemplateMetadataEditor
              metadata={currentTemplate.metadata}
              onMetadataChange={handleMetadataChange}
              context={workspaceContext}
              disabled={disabled || isSaving}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Form Preview</h3>
            <TemplatePreview
              template={currentTemplate}
              context={workspaceContext}
            />
          </div>
        </div>
      ) : (
        <TemplatePreview
          template={currentTemplate}
          context={workspaceContext}
        />
      )}

      {/* Auto-save indicator */}
      {autoSave && isSaving && (
        <div className="mt-4 text-xs text-gray-500 text-center">
          Saving...
        </div>
      )}
    </div>
  );
}

export default FormTemplate;
