import React from 'react';
import { useTheme } from '@wheel/themes';

export interface WorkspaceThemeProps {
  theme: any; // In a real app, this would be a defined theme object
}

/**
 * WorkspaceTheme component that applies a theme to the workspace.
 */
export const WorkspaceTheme: React.FC<WorkspaceThemeProps> = ({ theme }) => {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return null;
};

export default WorkspaceTheme;
