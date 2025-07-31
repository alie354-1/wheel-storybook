/**
 * Form Organisms Types
 * Comprehensive type definitions for form organisms in THE WHEEL design system
 */

import { ReactNode } from 'react';

// Base workspace context type
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

// Form field types
export interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  conditional?: ConditionalRule[];
  workspaceContext?: WorkspaceContext;
  permission?: string;
  props?: Record<string, any>;
  description?: string;
  helpText?: string;
  options?: Array<{ value: string; label: string }>;
}

// Validation rules
export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom' | 'email' | 'url' | 'number';
  value?: any;
  message: string;
  workspaceContext?: WorkspaceContext;
}

// Conditional rules for dynamic forms
export interface ConditionalRule {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'in' | 'not_in';
  value: any;
  action: 'show' | 'hide' | 'required' | 'disabled' | 'readonly';
}

// Form schema definition
export interface FormSchema {
  fields: FormField[];
  validation?: ValidationRule[];
  conditional?: ConditionalRule[];
  layout?: FormLayout;
  workspaceContext?: WorkspaceContext;
  permissions?: string[];
  metadata?: FormMetadata;
}

// Form layout configuration
export interface FormLayout {
  type: 'single-column' | 'two-column' | 'grid' | 'tabs' | 'accordion';
  columns?: number;
  spacing?: 'compact' | 'normal' | 'relaxed';
  sections?: FormSection[];
}

// Form sections for organization
export interface FormSection {
  id: string;
  title: string;
  description?: string;
  fields: string[];
  collapsible?: boolean;
  defaultExpanded?: boolean;
  permissions?: string[];
}

// Form metadata
export interface FormMetadata {
  title?: string;
  description?: string;
  version?: string;
  author?: string;
  tags?: string[];
  category?: string;
}

// Form Builder Props
export interface FormBuilderProps {
  context?: WorkspaceContext;
  schema: FormSchema;
  initialData?: Record<string, any>;
  onSubmit?: (data: Record<string, any>) => void;
  onChange?: (data: Record<string, any>) => void;
  onValidationChange?: (errors: Record<string, string>) => void;
  template?: string;
  workspaceId?: string;
  autoSave?: boolean;
  autoSaveInterval?: number;
  collaborative?: boolean;
  readonly?: boolean;
  permissions?: string[];
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

// Form Wizard Step
export interface FormWizardStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: ValidationRule[];
  conditional?: ConditionalRule[];
  optional?: boolean;
  permissions?: string[];
  icon?: ReactNode;
  estimatedTime?: number;
}

// Form Wizard Props
export interface FormWizardProps {
  context?: WorkspaceContext;
  steps: FormWizardStep[];
  initialData?: Record<string, any>;
  currentStep?: number;
  onStepChange?: (step: number, data: Record<string, any>) => void;
  onComplete?: (data: Record<string, any>) => void;
  onCancel?: () => void;
  template?: string;
  workspaceId?: string;
  autoSave?: boolean;
  autoSaveInterval?: number;
  showProgress?: boolean;
  allowStepSkip?: boolean;
  allowStepBack?: boolean;
  permissions?: string[];
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

// Form state management
export interface FormState {
  data: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  lastSaved?: Date;
  currentStep?: number;
}

// Auto-save configuration
export interface AutoSaveConfig {
  enabled: boolean;
  interval: number;
  onSave?: (data: Record<string, any>) => Promise<void>;
  onError?: (error: Error) => void;
  debounce?: number;
}

// Collaborative editing
export interface CollaborativeConfig {
  enabled: boolean;
  userId: string;
  onUserJoin?: (user: CollaborativeUser) => void;
  onUserLeave?: (userId: string) => void;
  onFieldLock?: (field: string, userId: string) => void;
  onFieldUnlock?: (field: string) => void;
}

export interface CollaborativeUser {
  id: string;
  name: string;
  avatar?: string;
  color: string;
  cursor?: { field: string; position: number };
}

// Form analytics
export interface FormAnalytics {
  startTime: Date;
  completionTime?: Date;
  stepTimes: Record<string, number>;
  fieldInteractions: Record<string, number>;
  validationErrors: Record<string, number>;
  abandonmentPoint?: string;
}

// Document requirements for file uploads
export interface DocumentRequirement {
  id: string;
  title: string;
  description?: string;
  required: boolean;
  types: string[];
  maxSize?: number;
  maxFiles?: number;
  validation?: (file: File) => boolean | string;
}

// Client onboarding specific types
export interface Client {
  id: string;
  companyName: string;
  industry: string;
  size: string;
  primaryContact: string;
  email: string;
  phone: string;
  address?: Address;
  documents?: UploadedDocument[];
  status: 'pending' | 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface OnboardingStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: ValidationRule[];
  documents?: DocumentRequirement[];
  optional?: boolean;
  permissions?: string[];
  estimatedTime?: number;
}

export interface ClientOnboardingProps {
  client?: Partial<Client>;
  onComplete?: (client: Client) => void;
  onCancel?: () => void;
  workspaceId: string;
  template?: string;
  steps?: OnboardingStep[];
  autoSave?: boolean;
  autoSaveInterval?: number;
  collaborative?: boolean;
  permissions?: string[];
  className?: string;
}

// Workspace setup specific types
export interface Workspace {
  id: string;
  name: string;
  type: WorkspaceContext;
  description?: string;
  settings: WorkspaceSettings;
  branding?: WorkspaceBranding;
  integrations?: Integration[];
  members?: WorkspaceMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkspaceSettings {
  timezone: string;
  currency: string;
  language: string;
  dateFormat: string;
  timeFormat: string;
  permissions: Record<string, string[]>;
}

export interface WorkspaceBranding {
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily?: string;
  customCss?: string;
}

export interface Integration {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  config: Record<string, any>;
}

export interface WorkspaceMember {
  id: string;
  email: string;
  role: string;
  permissions: string[];
  invitedAt: Date;
  joinedAt?: Date;
  status: 'pending' | 'active' | 'inactive';
}

export interface SetupStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: ValidationRule[];
  integrations?: Integration[];
  optional?: boolean;
  permissions?: string[];
  estimatedTime?: number;
}

export interface WorkspaceSetupProps {
  workspace?: Partial<Workspace>;
  onComplete?: (workspace: Workspace) => void;
  onCancel?: () => void;
  currentUser: User;
  template?: string;
  steps?: SetupStep[];
  autoSave?: boolean;
  autoSaveInterval?: number;
  integrations?: Integration[];
  permissions?: string[];
  className?: string;
}

// Billing setup specific types
export interface BillingInfo {
  plan: string;
  paymentMethod: PaymentMethod;
  billingAddress: Address;
  taxInfo?: TaxInfo;
  preferences: BillingPreferences;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'paypal';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface TaxInfo {
  taxId?: string;
  vatNumber?: string;
  taxExempt: boolean;
}

export interface BillingPreferences {
  currency: string;
  invoiceEmail: string;
  autoRenew: boolean;
  notifications: boolean;
}

export interface BillingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  features: string[];
  limits: Record<string, number>;
  popular?: boolean;
  recommended?: boolean;
}

export interface BillingStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: ValidationRule[];
  paymentRequired?: boolean;
  optional?: boolean;
  permissions?: string[];
  estimatedTime?: number;
}

export interface BillingSetupProps {
  workspace: Workspace;
  currentBilling?: Partial<BillingInfo>;
  onComplete?: (billing: BillingInfo) => void;
  onCancel?: () => void;
  plans?: BillingPlan[];
  paymentMethods?: PaymentMethod[];
  steps?: BillingStep[];
  autoSave?: boolean;
  autoSaveInterval?: number;
  permissions?: string[];
  className?: string;
}

// Common types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  permissions: string[];
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: Date;
}

// Form events
export interface FormEvent {
  type: 'field_change' | 'validation_error' | 'step_change' | 'submit' | 'save' | 'cancel';
  field?: string;
  value?: any;
  error?: string;
  step?: number;
  timestamp: Date;
}

// Form hooks return types
export interface UseFormReturn {
  formState: FormState;
  setValue: (field: string, value: any) => void;
  setError: (field: string, error: string) => void;
  clearError: (field: string) => void;
  validate: () => boolean;
  reset: () => void;
  submit: () => void;
}

export interface UseFormWizardReturn extends UseFormReturn {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

// Form Template Types
export type FormTemplateCategory =
  | 'general'
  | 'onboarding'
  | 'survey'
  | 'application'
  | 'feedback'
  | 'registration'
  | 'contact'
  | 'custom';

export interface FormTemplateMetadata {
  name: string;
  description?: string;
  category: FormTemplateCategory;
  version: string;
  author?: string;
  tags?: string[];
  estimatedTime?: number;
  isPublic?: boolean;
  isShared?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FormTemplate {
  id: string;
  metadata: FormTemplateMetadata;
  fields: FormField[];
  validation?: ValidationRule[];
  conditional?: ConditionalRule[];
  layout?: FormLayout;
  workspaceContext?: WorkspaceContext;
  permissions?: string[];
}

export interface FormTemplateProps {
  context?: WorkspaceContext;
  template?: FormTemplate | null;
  mode?: 'view' | 'edit';
  onTemplateChange?: (template: FormTemplate) => void;
  onTemplateSave?: (template: FormTemplate) => void;
  onTemplateUse?: (template: FormTemplate) => void;
  onTemplateShare?: (template: FormTemplate) => void;
  onTemplateDelete?: (template: FormTemplate) => void;
  autoSave?: boolean;
  autoSaveInterval?: number;
  permissions?: string[];
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface UseFormTemplateReturn {
  currentTemplate: FormTemplate | null;
  isEditing: boolean;
  isDirty: boolean;
  isSaving: boolean;
  lastSaved: Date | null;
  updateTemplate: (updates: Partial<FormTemplate>) => void;
  saveTemplate: () => Promise<void>;
  startEditing: () => void;
  stopEditing: () => void;
  cancelEditing: () => void;
}
