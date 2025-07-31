import { describe, it, expect, vi } from 'vitest';
import config from '../main';

describe('Storybook Configuration', () => {
  it('should have correct stories configuration', () => {
    expect(config.stories).toEqual([
      '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      '../packages/*/src/**/*.docs.mdx'
    ]);
  });

  it('should have essential addons configured', () => {
    expect(config.addons).toContain('@storybook/addon-a11y');
    expect(config.addons).toContain('@storybook/addon-docs');
    expect(config.addons).toContain('@storybook/addon-themes');
  });

  it('should have correct framework configuration', () => {
    expect(config.framework?.name).toBe('@storybook/react-vite');
  });

  it('should have typescript configuration', () => {
    expect(config.typescript).toBeDefined();
    expect(config.typescript?.check).toBe(false);
    expect(config.typescript?.reactDocgen).toBe('react-docgen-typescript');
  });

  it('should have static directories configured', () => {
    expect(config.staticDirs).toEqual(['../branding', './public']);
  });

  it('should have core configuration', () => {
    expect(config.core?.disableTelemetry).toBe(true);
  });
});

describe('Storybook Vite Configuration', () => {
  it('should configure aliases correctly', async () => {
    const mockConfig = {
      resolve: {
        alias: {}
      },
      build: {
        rollupOptions: {}
      },
      optimizeDeps: {
        include: []
      }
    };

    const result = await config.viteFinal?.(mockConfig);
    
    expect(result?.resolve?.alias).toHaveProperty('@wheel/ui');
    expect(result?.resolve?.alias).toHaveProperty('@wheel/themes');
    expect(result?.resolve?.alias).toHaveProperty('@wheel/workspace');
  });
});
