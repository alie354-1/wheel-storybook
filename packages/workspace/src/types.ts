export interface Workspace {
  type: string;
  theme: string;
  user: {
    role: string;
    permissions: string[];
  };
  features: string[];
}
