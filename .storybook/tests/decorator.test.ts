import { describe, it, expect } from '@jest/globals';
import { globalTypes } from '../decorators/WorkspaceDecorator';
import { viewportGlobalTypes } from '../decorators/ViewportDecorator';

describe('Storybook Decorators', () => {
  describe('WorkspaceDecorator GlobalTypes', () => {
    it('should have workspace global type configured', () => {
      expect(globalTypes.workspace).toBeDefined();
      expect(globalTypes.workspace.name).toBe('Workspace Context');
      expect(globalTypes.workspace.defaultValue).toBe('consultant');
    });

    it('should have all workspace context options', () => {
      const expectedOptions = [
        'consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder'
      ];
      const actualOptions = globalTypes.workspace.toolbar.items.map((item: any) => item.value);
      
      expectedOptions.forEach(option => {
        expect(actualOptions).toContain(option);
      });
    });

    it('should have theme global type configured', () => {
      expect(globalTypes.theme).toBeDefined();
      expect(globalTypes.theme.name).toBe('Theme');
      expect(globalTypes.theme.defaultValue).toBe('light');
    });

    it('should have userRole global type configured', () => {
      expect(globalTypes.userRole).toBeDefined();
      expect(globalTypes.userRole.name).toBe('User Role');
      expect(globalTypes.userRole.defaultValue).toBe('admin');
    });
  });

  describe('ViewportDecorator GlobalTypes', () => {
    it('should have viewport global type configured', () => {
      expect(viewportGlobalTypes.viewport).toBeDefined();
      expect(viewportGlobalTypes.viewport.name).toBe('Viewport');
      expect(viewportGlobalTypes.viewport.defaultValue).toBe('desktop');
    });

    it('should have all viewport options', () => {
      const expectedViewports = ['mobile', 'tablet', 'desktop', 'wide'];
      const actualViewports = viewportGlobalTypes.viewport.toolbar.items.map((item: any) => item.value);
      
      expectedViewports.forEach(viewport => {
        expect(actualViewports).toContain(viewport);
      });
    });
  });
});
