import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@wheel/patterns',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@wheel/shared', '@wheel/ui', '@wheel/shared/utils/cn'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@wheel/shared': 'WheelShared',
          '@wheel/ui': 'WheelUI',
          '@wheel/shared/utils/cn': 'WheelSharedUtilsCn',
        },
      },
    },
  },
});
