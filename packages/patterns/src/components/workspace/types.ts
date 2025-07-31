export interface Workspace {
  id: string;
  name: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
}

export interface Task {
  id: string;
  name: string;
}

export interface TimeSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  project: Project;
  task?: Task;
}

export interface TimeEntry {
  id: string;
  startTime: Date;
  endTime: Date;
  project: Project;
  task?: Task;
}

export interface BillingInfo {
  id: string;
  rate: number;
  currency: string;
}

export interface InvoiceData {
  id: string;
  amount: number;
  currency: string;
  dueDate: Date;
}

export interface PaymentData {
  id: string;
  amount: number;
  currency: string;
  date: Date;
}

export type ReportType = 'billing' | 'time';
