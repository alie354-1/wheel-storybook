/**
 * Form Organisms Utilities
 * Helper functions for form validation, state management, and data processing
 */

import { ConditionalRule, FormField, FormState, ValidationRule, WorkspaceContext } from './types';

/**
 * Validates a single field value against its validation rules
 */
export function validateField(
  field: FormField,
  value: any,
  allData: Record<string, any> = {},
  context?: WorkspaceContext
): string | null {
  if (!field.validation) return null;

  for (const rule of field.validation) {
    // Skip validation if workspace context doesn't match
    if (rule.workspaceContext && context && rule.workspaceContext !== context) {
      continue;
    }

    const error = validateRule(rule, value, field, allData);
    if (error) return error;
  }

  return null;
}

/**
 * Validates a single validation rule
 */
function validateRule(
  rule: ValidationRule,
  value: any,
  field: FormField,
  allData: Record<string, any>
): string | null {
  switch (rule.type) {
    case 'required':
      if (value === undefined || value === null || value === '') {
        return rule.message || `${field.label} is required`;
      }
      break;

    case 'minLength':
      if (typeof value === 'string' && value.length < rule.value) {
        return rule.message || `${field.label} must be at least ${rule.value} characters`;
      }
      break;

    case 'maxLength':
      if (typeof value === 'string' && value.length > rule.value) {
        return rule.message || `${field.label} must be no more than ${rule.value} characters`;
      }
      break;

    case 'pattern':
      if (typeof value === 'string' && !new RegExp(rule.value).test(value)) {
        return rule.message || `${field.label} format is invalid`;
      }
      break;

    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (typeof value === 'string' && !emailRegex.test(value)) {
        return rule.message || `${field.label} must be a valid email address`;
      }
      break;

    case 'url':
      try {
        new URL(value);
      } catch {
        return rule.message || `${field.label} must be a valid URL`;
      }
      break;

    case 'number':
      if (isNaN(Number(value))) {
        return rule.message || `${field.label} must be a valid number`;
      }
      break;

    case 'custom':
      if (typeof rule.value === 'function') {
        const result = rule.value(value, allData, field);
        if (result !== true) {
          return typeof result === 'string' ? result : rule.message;
        }
      }
      break;
  }

  return null;
}

/**
 * Validates all fields in a form
 */
export function validateForm(
  fields: FormField[],
  data: Record<string, any>,
  context?: WorkspaceContext
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const error = validateField(field, data[field.name], data, context);
    if (error) {
      errors[field.name] = error;
    }
  }

  return errors;
}

/**
 * Evaluates conditional rules to determine field visibility/state
 */
export function evaluateConditionalRules(
  field: FormField,
  data: Record<string, any>
): {
  visible: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
} {
  let visible = true;
  let required = field.required || false;
  let disabled = false;
  let readonly = false;

  if (!field.conditional) {
    return { visible, required, disabled, readonly };
  }

  for (const rule of field.conditional) {
    const fieldValue = data[rule.field];
    const conditionMet = evaluateCondition(rule, fieldValue);

    if (conditionMet) {
      switch (rule.action) {
        case 'show':
          visible = true;
          break;
        case 'hide':
          visible = false;
          break;
        case 'required':
          required = true;
          break;
        case 'disabled':
          disabled = true;
          break;
        case 'readonly':
          readonly = true;
          break;
      }
    }
  }

  return { visible, required, disabled, readonly };
}

/**
 * Evaluates a single conditional rule
 */
function evaluateCondition(rule: ConditionalRule, value: any): boolean {
  switch (rule.operator) {
    case 'equals':
      return value === rule.value;
    case 'not_equals':
      return value !== rule.value;
    case 'contains':
      return typeof value === 'string' && value.includes(rule.value);
    case 'greater_than':
      return Number(value) > Number(rule.value);
    case 'less_than':
      return Number(value) < Number(rule.value);
    case 'in':
      return Array.isArray(rule.value) && rule.value.includes(value);
    case 'not_in':
      return Array.isArray(rule.value) && !rule.value.includes(value);
    default:
      return false;
  }
}

/**
 * Filters fields based on permissions and workspace context
 */
export function filterFieldsByPermissions(
  fields: FormField[],
  userPermissions: string[] = [],
  context?: WorkspaceContext
): FormField[] {
  return fields.filter(field => {
    // Check workspace context
    if (field.workspaceContext && context && field.workspaceContext !== context) {
      return false;
    }

    // Check permissions
    if (field.permission && !userPermissions.includes(field.permission)) {
      return false;
    }

    return true;
  });
}

/**
 * Gets visible fields based on current form data and conditions
 */
export function getVisibleFields(
  fields: FormField[],
  data: Record<string, any>,
  userPermissions: string[] = [],
  context?: WorkspaceContext
): FormField[] {
  const filteredFields = filterFieldsByPermissions(fields, userPermissions, context);

  return filteredFields.filter(field => {
    const { visible } = evaluateConditionalRules(field, data);
    return visible;
  });
}

/**
 * Calculates form completion percentage
 */
export function calculateFormCompletion(
  fields: FormField[],
  data: Record<string, any>,
  userPermissions: string[] = [],
  context?: WorkspaceContext
): number {
  const visibleFields = getVisibleFields(fields, data, userPermissions, context);
  const requiredFields = visibleFields.filter(field => {
    const { required } = evaluateConditionalRules(field, data);
    return required;
  });

  if (requiredFields.length === 0) return 100;

  const completedFields = requiredFields.filter(field => {
    const value = data[field.name];
    return value !== undefined && value !== null && value !== '';
  });

  return Math.round((completedFields.length / requiredFields.length) * 100);
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  return obj;
}

/**
 * Merges form data with defaults
 */
export function mergeFormData(
  defaultData: Record<string, any>,
  userData: Record<string, any>
): Record<string, any> {
  return { ...defaultData, ...userData };
}

/**
 * Sanitizes form data by removing empty values
 */
export function sanitizeFormData(
  data: Record<string, any>,
  removeEmpty = true
): Record<string, any> {
  const sanitized: Record<string, any> = {};

  for (const [key, value] of Object.entries(data)) {
    if (removeEmpty && (value === '' || value === null || value === undefined)) {
      continue;
    }
    sanitized[key] = value;
  }

  return sanitized;
}

/**
 * Formats field value for display
 */
export function formatFieldValue(field: FormField, value: any): string {
  if (value === null || value === undefined) return '';

  switch (field.type) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(Number(value) || 0);

    case 'date':
      return value instanceof Date ? value.toLocaleDateString() : value;

    case 'time':
      return value instanceof Date ? value.toLocaleTimeString() : value;

    case 'phone':
      // Basic phone formatting
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
      }
      return value;

    default:
      return String(value);
  }
}

/**
 * Generates a unique form field ID
 */
export function generateFieldId(fieldName: string, formId?: string): string {
  const base = formId ? `${formId}-${fieldName}` : fieldName;
  return base.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
}

/**
 * Checks if form has unsaved changes
 */
export function hasUnsavedChanges(
  currentData: Record<string, any>,
  savedData: Record<string, any>
): boolean {
  return JSON.stringify(currentData) !== JSON.stringify(savedData);
}

/**
 * Creates a form state snapshot for undo/redo functionality
 */
export function createFormSnapshot(formState: FormState): FormState {
  return deepClone(formState);
}

/**
 * Validates file upload based on field requirements
 */
export function validateFileUpload(
  file: File,
  allowedTypes: string[] = [],
  maxSize?: number
): string | null {
  // Check file type
  if (allowedTypes.length > 0) {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const mimeType = file.type.toLowerCase();

    const isValidType = allowedTypes.some(type =>
      type.toLowerCase() === fileExtension ||
      type.toLowerCase() === mimeType ||
      mimeType.startsWith(type.toLowerCase())
    );

    if (!isValidType) {
      return `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`;
    }
  }

  // Check file size
  if (maxSize && file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return `File size too large. Maximum size: ${maxSizeMB}MB`;
  }

  return null;
}

/**
 * Generates form analytics data
 */
export function generateFormAnalytics(
  startTime: Date,
  completionTime: Date | null,
  stepTimes: Record<string, number>,
  fieldInteractions: Record<string, number>,
  validationErrors: Record<string, number>,
  abandonmentPoint?: string
) {
  return {
    startTime,
    completionTime,
    stepTimes,
    fieldInteractions,
    validationErrors,
    abandonmentPoint,
    totalTime: completionTime ? completionTime.getTime() - startTime.getTime() : null,
    completionRate: completionTime ? 100 : 0,
    errorRate: Object.values(validationErrors).reduce((sum, count) => sum + count, 0),
    interactionCount: Object.values(fieldInteractions).reduce((sum, count) => sum + count, 0)
  };
}

/**
 * Workspace-specific field type mappings
 */
export const WORKSPACE_FIELD_TYPES: Record<WorkspaceContext, string[]> = {
  consultant: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'time', 'currency', 'file'],
  client: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'file'],
  admin: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'time', 'currency', 'file', 'password', 'number'],
  expert: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'time', 'file'],
  'tool-creator': ['text', 'email', 'phone', 'textarea', 'select', 'date', 'time', 'file', 'code', 'json'],
  founder: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'time', 'currency', 'file', 'password', 'number'],
  neutral: ['text', 'email', 'phone', 'textarea', 'select', 'date', 'file']
};

/**
 * Gets allowed field types for a workspace context
 */
export function getAllowedFieldTypes(context: WorkspaceContext): string[] {
  return WORKSPACE_FIELD_TYPES[context] || WORKSPACE_FIELD_TYPES.neutral;
}

/**
 * Checks if a field type is allowed in a workspace context
 */
export function isFieldTypeAllowed(fieldType: string, context: WorkspaceContext): boolean {
  const allowedTypes = getAllowedFieldTypes(context);
  return allowedTypes.includes(fieldType);
}
