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
    // Import the React plugin here - CRITICAL for static deployment
    const { default: react } = await import('@vitejs/plugin-react');

    // CRITICAL: Replace plugins array, don't just push (solution from developer notes)
    config.plugins = [
      react(),
      ...config.plugins || [],
    ];

    // Static deployment fixes
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

    // Configure file watching for local development
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
