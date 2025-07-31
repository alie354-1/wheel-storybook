import React, { createContext, useContext } from 'react';
import { Workspace } from './types';

const WorkspaceContext = createContext<Workspace | undefined>(undefined);

export const WorkspaceProvider = ({
  workspace,
  children,
}: {
  workspace: Workspace;
  children: React.ReactNode;
}) => {
  return (
    <WorkspaceContext.Provider value={workspace}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};
