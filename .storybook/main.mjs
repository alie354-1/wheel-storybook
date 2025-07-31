import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/*/src/**/*.docs.mdx'
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    defaultName: 'Documentation'
  },
  staticDirs: ['../branding', './public'],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  viteFinal: async (config) => {
    // Import the React plugin here
    const { default: react } = await import('@vitejs/plugin-react');

    // Add React plugin to Vite config
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(react());

    // ✨ STATIC DEPLOYMENT FIX ✨
    // Fix base path for static deployment
    config.base = './';

    // Custom Vite configuration for monorepo
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@wheel/ui': join(__dirname, '../packages/ui/src'),
        '@wheel/themes': join(__dirname, '../packages/themes/src'),
        '@wheel/workspace': join(__dirname, '../packages/workspace/src'),
        '@wheel/shared': join(__dirname, '../packages/shared/src'),
        '@wheel/layouts': join(__dirname, '../packages/layouts/src'),
        '@wheel/patterns': join(__dirname, '../packages/patterns/src'),
      };
    }

    // Configure CSS modules
    config.css = {
      ...config.css,
      modules: {
        localsConvention: 'camelCase',
      },
    };

    // Configure file watching to ignore NX cache files to prevent constant reloads
    config.server = {
      ...config.server,
      watch: {
        ignored: [
          '**/node_modules/**',
          '**/.nx/cache/**',
          '**/dist/**',
          '**/coverage/**',
        ],
      },
    };

    // Configure environment variables for Storybook
    config.define = {
      ...config.define,
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://mock-supabase-url.com'),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('mock-supabase-anon-key'),
      'import.meta.env.STORYBOOK': JSON.stringify('true'),
    };

    // Performance optimizations with static deployment fixes
    if (config.build) {
      config.build.assetsDir = 'assets';
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            storybook: ['@storybook/react'],
          },
          // ✨ STATIC DEPLOYMENT ASSET FIXES ✨
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      };
    }

    // Optimize for monorepo - include React and ensure it's available
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        ...config.optimizeDeps?.include || [],
        '@wheel/ui',
        '@wheel/themes',
        '@wheel/workspace',
        '@wheel/shared',
        '@wheel/layouts',
        '@wheel/patterns',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@emotion/react',
        '@emotion/styled',
      ],
      exclude: [
        ...config.optimizeDeps?.exclude || [],
      ]
    };

    // Ensure single instance of @emotion/react
    config.resolve.dedupe = [
      ...config.resolve.dedupe || [],
      '@emotion/react',
      '@emotion/styled',
      'react',
      'react-dom',
    ];

    return config;
  },
};

export default config;

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(join(value, "package.json"))));
}
