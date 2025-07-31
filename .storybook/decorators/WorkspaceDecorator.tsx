import React from 'react';
import type { Decorator } from '@storybook/react';

// Mock data for different workspace types
const getWorkspaceConfig = (workspaceType: string) => {
  const configs: Record<string, any> = {
    consultant: {
      type: 'consultant',
      name: 'Alexandra Cohen Consulting',
      theme: 'light',
      features: {
        clientManagement: true,
        timeTracking: true,
        billing: true,
        documents: true,
        collaboration: true,
        reporting: true,
      },
      permissions: {
        canManageClients: true,
        canCreateProjects: true,
        canInviteUsers: true,
        canExportData: true,
        canAccessReports: true,
      },
    },
    client: {
      type: 'client',
      name: 'Acme Corp',
      theme: 'light',
      features: {
        projectView: true,
        documentAccess: true,
        communication: true,
        billing: false,
        timeTracking: false,
        reporting: false,
      },
      permissions: {
        canManageClients: false,
        canCreateProjects: false,
        canInviteUsers: false,
        canExportData: false,
        canAccessReports: false,
      },
    },
    admin: {
      type: 'admin',
      name: 'THE WHEEL Platform',
      theme: 'dark',
      features: {
        userManagement: true,
        systemSettings: true,
        analytics: true,
        billing: true,
        support: true,
        monitoring: true,
      },
      permissions: {
        canManageClients: true,
        canCreateProjects: true,
        canInviteUsers: true,
        canExportData: true,
        canAccessReports: true,
        canManageSystem: true,
      },
    },
    expert: {
      type: 'expert',
      name: 'Expert Network',
      theme: 'light',
      features: {
        expertiseSharing: true,
        mentorship: true,
        knowledgeBase: true,
        consultation: true,
        ratings: true,
        scheduling: true,
      },
      permissions: {
        canManageClients: false,
        canCreateProjects: true,
        canInviteUsers: false,
        canExportData: false,
        canAccessReports: true,
      },
    },
    toolCreator: {
      type: 'toolCreator',
      name: 'Tool Creator Studio',
      theme: 'dark',
      features: {
        toolDevelopment: true,
        marketplace: true,
        analytics: true,
        monetization: true,
        support: true,
        integration: true,
      },
      permissions: {
        canManageClients: false,
        canCreateProjects: true,
        canInviteUsers: true,
        canExportData: true,
        canAccessReports: true,
      },
    },
    founder: {
      type: 'founder',
      name: 'Startup Journey',
      theme: 'gradient',
      features: {
        journeyTracking: true,
        milestones: true,
        aiGuidance: true,
        communityAccess: true,
        resourceLibrary: true,
        mentorship: true,
      },
      permissions: {
        canManageClients: false,
        canCreateProjects: true,
        canInviteUsers: false,
        canExportData: true,
        canAccessReports: true,
      },
    },
  };

  return configs[workspaceType] || configs.consultant;
};

const getUserForRole = (userRole: string) => {
  const users: Record<string, any> = {
    admin: {
      id: '1',
      name: 'Admin User',
      email: 'admin@thewheel.com',
      role: 'admin',
      avatar: '/avatars/admin.png',
    },
    consultant: {
      id: '2',
      name: 'Alexandra Cohen',
      email: 'alex@alexcohen.com',
      role: 'consultant',
      avatar: '/avatars/consultant.png',
    },
    client: {
      id: '3',
      name: 'John Client',
      email: 'john@acmecorp.com',
      role: 'client',
      avatar: '/avatars/client.png',
    },
    expert: {
      id: '4',
      name: 'Expert Advisor',
      email: 'expert@thewheel.com',
      role: 'expert',
      avatar: '/avatars/expert.png',
    },
    toolCreator: {
      id: '5',
      name: 'Tool Creator',
      email: 'creator@thewheel.com',
      role: 'toolCreator',
      avatar: '/avatars/creator.png',
    },
    founder: {
      id: '6',
      name: 'Startup Founder',
      email: 'founder@startup.com',
      role: 'founder',
      avatar: '/avatars/founder.png',
    },
  };

  return users[userRole] || users.consultant;
};

// Real providers for Storybook - now connects to actual theme system
const BrandedWorkspaceProvider: React.FC<{ workspace: any; children: React.ReactNode }> = ({ 
  workspace, 
  children 
}) => {
  return (
    <div 
      data-workspace-type={workspace.type} 
      data-workspace-theme={workspace.theme}
      style={{
        '--workspace-primary': `var(--primary-${workspace.type === 'founder' ? '500' : '600'})`,
        '--workspace-accent': `var(--secondary-${workspace.type === 'client' ? '400' : '500'})`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const BrandedThemeProvider: React.FC<{ theme: string; children: React.ReactNode }> = ({ 
  theme, 
  children 
}) => {
  return (
    <div 
      data-theme={theme} 
      className={theme}
      style={{
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

export const WorkspaceDecorator: Decorator = (Story, context) => {
  const { globals } = context;
  const workspaceType = globals.workspace || 'consultant';
  const theme = globals.theme || 'light';
  const userRole = globals.userRole || 'admin';
  
  const workspaceConfig = getWorkspaceConfig(workspaceType);
  const user = getUserForRole(userRole);
  
  // Override theme if workspace has specific theme
  const finalTheme = workspaceConfig.theme || theme;
  
  const fullWorkspaceConfig = {
    ...workspaceConfig,
    theme: finalTheme,
    user: user,
  };
  
  return (
    <BrandedWorkspaceProvider workspace={fullWorkspaceConfig}>
      <BrandedThemeProvider theme={finalTheme}>
        <Story />
      </BrandedThemeProvider>
    </BrandedWorkspaceProvider>
  );
};

// Global types for Storybook toolbar
export const globalTypes = {
  workspace: {
    name: 'Workspace Context',
    description: 'Select workspace context',
    defaultValue: 'consultant',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'consultant', title: 'Consultant' },
        { value: 'client', title: 'Client' },
        { value: 'admin', title: 'Admin' },
        { value: 'expert', title: 'Expert' },
        { value: 'toolCreator', title: 'Tool Creator' },
        { value: 'founder', title: 'Founder' },
      ],
      showName: true,
    },
  },
  theme: {
    name: 'Theme',
    description: 'Select theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'gradient', title: 'Gradient' },
      ],
      showName: true,
    },
  },
  userRole: {
    name: 'User Role',
    description: 'Select user role for simulation',
    defaultValue: 'admin',
    toolbar: {
      icon: 'user',
      items: [
        { value: 'admin', title: 'Admin' },
        { value: 'consultant', title: 'Consultant' },
        { value: 'client', title: 'Client' },
        { value: 'expert', title: 'Expert' },
        { value: 'toolCreator', title: 'Tool Creator' },
        { value: 'founder', title: 'Founder' },
      ],
      showName: true,
    },
  },
};
