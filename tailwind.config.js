/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/*/src/**/*.{js,ts,jsx,tsx}",
    "./packages/*/src/**/*.stories.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Workspace Context Colors
        consultant: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        client: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        admin: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        expert: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        toolCreator: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        founder: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Brand Colors
        brand: {
          primary: '#0f0c29',
          secondary: '#24243e',
          midnight: '#0f0c29',
          amber: '#f59e0b',
          gradient: {
            from: '#0f0c29',
            via: '#312e81',
            to: '#f59e0b',
          },
        },
        // Primary color scale - THE WHEEL Midnight Blue
        primary: {
          50: '#e0e7ff',
          100: '#c7d2fe',
          200: '#a5b4fc',
          300: '#818cf8',
          400: '#6366f1',
          500: '#1e1b4b',  // Brand midnight blue
          600: '#312e81',  // Darker midnight blue
          700: '#3730a3',  // Even darker
          800: '#4338ca',  // Darkest
          900: '#0f0c29',  // Original brand midnight
        },
        // Secondary color scale - THE WHEEL Amber
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Brand amber
          600: '#d97706',  // Darker amber
          700: '#b45309',  // Even darker
          800: '#92400e',  // Darkest
          900: '#78350f',  // Original brand amber
        },
        // Accent color scale - THE WHEEL Amber (same as secondary)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Brand amber
          600: '#d97706',  // Darker amber
          700: '#b45309',  // Even darker
          800: '#92400e',  // Darkest
          900: '#78350f',  // Original brand amber
        },
        // UI Colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, #f59e0b 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #0f0c29 0%, #24243e 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      boxShadow: {
        'input': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'input-focus': '0 0 0 3px rgba(59, 130, 246, 0.1)',
      },
    },
  },
  safelist: [
    // Primary variant workspace context colors
    'bg-consultant-700', 'hover:bg-consultant-800', 'focus:ring-consultant-500', 'border-consultant-500',
    'bg-client-700', 'hover:bg-client-800', 'focus:ring-client-500', 'border-client-500',
    'bg-admin-900', 'hover:bg-admin-800', 'focus:ring-admin-500', 'border-admin-600',
    'bg-expert-700', 'hover:bg-expert-800', 'focus:ring-expert-500', 'border-expert-500',
    'bg-toolCreator-700', 'hover:bg-toolCreator-800', 'focus:ring-toolCreator-500', 'border-toolCreator-500',
    'from-founder-600', 'to-founder-700', 'hover:from-founder-700', 'hover:to-founder-800', 'focus:ring-founder-500', 'border-founder-500',

    // Secondary variant workspace context colors
    'bg-consultant-200', 'hover:bg-consultant-300', 'text-consultant-900', 'border-consultant-300',
    'bg-client-200', 'hover:bg-client-300', 'text-client-900', 'border-client-300',
    'bg-admin-200', 'hover:bg-admin-300', 'text-admin-900', 'border-admin-300',
    'bg-expert-200', 'hover:bg-expert-300', 'text-expert-900', 'border-expert-300',
    'bg-toolCreator-200', 'hover:bg-toolCreator-300', 'text-toolCreator-900', 'border-toolCreator-300',
    'from-founder-200', 'to-founder-300', 'hover:from-founder-300', 'hover:to-founder-400', 'text-founder-900', 'border-founder-300',

    // Outline variant workspace context colors
    'border-consultant-600', 'text-consultant-700', 'hover:bg-consultant-100', 'hover:text-consultant-800',
    'border-client-600', 'text-client-700', 'hover:bg-client-100', 'hover:text-client-800',
    'border-admin-600', 'text-admin-700', 'hover:bg-admin-100', 'hover:text-admin-800',
    'border-expert-600', 'text-expert-700', 'hover:bg-expert-100', 'hover:text-expert-800',
    'border-toolCreator-600', 'text-toolCreator-700', 'hover:bg-toolCreator-100', 'hover:text-toolCreator-800',
    'border-founder-600', 'text-founder-700', 'hover:bg-founder-100', 'hover:text-founder-800',

    // Ghost variant workspace context colors
    'text-consultant-600', 'hover:bg-consultant-50',
    'text-client-600', 'hover:bg-client-50',
    'text-admin-600', 'hover:bg-admin-50',
    'text-expert-600', 'hover:bg-expert-50',
    'text-toolCreator-600', 'hover:bg-toolCreator-50',
    'text-founder-600', 'hover:bg-founder-50',

    // Link variant workspace context colors
    'hover:text-consultant-700',
    'hover:text-client-700',
    'hover:text-admin-700',
    'hover:text-expert-700',
    'hover:text-toolCreator-700',
    'hover:text-founder-700',

    // Input colors (workspace context aware)
    'border-consultant-300', 'focus:border-consultant-500', 'focus:ring-consultant-500',
    'border-client-300', 'focus:border-client-500', 'focus:ring-client-500',
    'border-admin-300', 'focus:border-admin-500', 'focus:ring-admin-500',
    'border-expert-300', 'focus:border-expert-500', 'focus:ring-expert-500',
    'border-toolCreator-300', 'focus:border-toolCreator-500', 'focus:ring-toolCreator-500',
    'border-founder-300', 'focus:border-founder-500', 'focus:ring-founder-500',
    'border-red-300', 'focus:border-red-500', 'focus:ring-red-500',
    'border-slate-300', 'focus:border-slate-500', 'focus:ring-slate-500',
  ],
  plugins: [],
};
