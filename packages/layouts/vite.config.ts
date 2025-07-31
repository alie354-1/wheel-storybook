import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@wheel/layouts',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@wheel/ui', '@wheel/ui/lib/utils', '@wheel/shared', '@wheel/themes'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@wheel/ui': 'WheelUI',
          '@wheel/shared': 'WheelShared',
          '@wheel/themes': 'WheelThemes',
        },
      },
    },
  },
});
