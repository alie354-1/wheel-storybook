export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  status?: 'online' | 'offline' | 'away';
  role?: string;
}

export interface Stat {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'stable';
    period: string;
  };
  comparison?: {
    value: number;
    label: string;
    type: 'previous' | 'target' | 'average';
  };
}

export interface Status {
  id: string;
  name: string;
  color: string;
}

export interface Progress {
  id: string;
  name: string;
  value: number;
  target: number;
  milestones?: Milestone[];
}

export interface Milestone {
  id: string;
  name: string;
  value: number;
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  timestamp: Date;
  user: User;
}

export interface ActivityFilter {
  id: string;
  name: string;
  type: 'user' | 'type';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
}

export interface Client {
  id: string;
  name: string;
  avatarUrl: string;
  projects?: Project[];
  metrics?: Stat[];
}

export interface Workspace {
  id: string;
  name: string;
  members?: User[];
  activity?: Activity[];
  metrics?: Stat[];
}

export interface Project {
  id: string;
  name: string;
  progress?: Progress;
  team?: User[];
}

export interface BillingInfo {
  id: string;
  name: string;
  paymentHistory?: Payment[];
  invoices?: Invoice[];
  metrics?: Stat[];
}

export interface Payment {
  id: string;
  amount: number;
  date: Date;
}

export interface Invoice {
  id: string;
  amount: number;
  dueDate: Date;
}

export interface Media {
  id: string;
  src: string;
  type: 'video' | 'audio' | 'presentation';
  title?: string;
  description?: string;
  slides?: string[];
}

export interface ChartData {
  name: string;
  value: number;
}
