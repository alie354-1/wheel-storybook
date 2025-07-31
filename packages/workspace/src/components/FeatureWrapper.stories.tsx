import type { Meta, StoryObj } from "@storybook/react-vite";
import React from 'react';
import { FeatureWrapper } from './FeatureWrapper';

// Mock FeatureFlagProvider for Storybook
const MockFeatureFlagProvider = ({ children, enabledFeatures = [] }: { children: React.ReactNode; enabledFeatures?: string[] }) => {
  const mockContext = {
    isEnabled: (featureName: string) => enabledFeatures.includes(featureName),
    enableFeature: () => {},
    disableFeature: () => {},
    features: enabledFeatures.reduce((acc, feature) => ({ ...acc, [feature]: true }), {})
  };

  // Mock the useFeatureFlags hook
  React.createContext(mockContext);

  return <div data-mock-provider="feature-flags">{children}</div>;
};

// Override the hook for Storybook
const originalModule = jest.requireActual('@wheel/layouts/providers/FeatureFlagProvider');
jest.mock('@wheel/layouts/providers/FeatureFlagProvider', () => ({
  ...originalModule,
  useFeatureFlags: () => ({
    isEnabled: (featureName: string) => {
      // Get enabled features from story args or default
      const enabledFeatures = (window as any).__STORYBOOK_ENABLED_FEATURES__ || [];
      return enabledFeatures.includes(featureName);
    }
  })
}));

const meta: Meta<typeof FeatureWrapper> = {
  title: 'Workspace/FeatureWrapper',
  component: FeatureWrapper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A wrapper component that conditionally renders children based on feature flag status. Useful for A/B testing and gradual feature rollouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    featureName: {
      control: 'text',
      description: 'The name of the feature flag to check'
    },
    fallback: {
      control: 'text',
      description: 'Content to show when feature is disabled'
    },
    children: {
      control: 'text',
      description: 'Content to show when feature is enabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FeatureWrapper>;

// Helper to set enabled features for stories
const withFeatureFlags = (enabledFeatures: string[]) => (Story: any) => {
  (window as any).__STORYBOOK_ENABLED_FEATURES__ = enabledFeatures;
  return Story;
};

export const FeatureEnabled: Story = {
  args: {
    featureName: 'new-dashboard',
    children: (
      <div className="p-4 bg-green-100 border border-green-300 rounded">
        <h3 className="text-green-800 font-semibold">New Dashboard Feature</h3>
        <p className="text-green-700">This is the new dashboard that's currently enabled!</p>
      </div>
    ),
    fallback: (
      <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Classic Dashboard</h3>
        <p className="text-gray-700">This is the fallback content when the feature is disabled.</p>
      </div>
    )
  },
  decorators: [withFeatureFlags(['new-dashboard'])]
};

export const FeatureDisabled: Story = {
  args: {
    featureName: 'new-dashboard',
    children: (
      <div className="p-4 bg-green-100 border border-green-300 rounded">
        <h3 className="text-green-800 font-semibold">New Dashboard Feature</h3>
        <p className="text-green-700">This is the new dashboard that's currently enabled!</p>
      </div>
    ),
    fallback: (
      <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Classic Dashboard</h3>
        <p className="text-gray-700">This is the fallback content when the feature is disabled.</p>
      </div>
    )
  },
  decorators: [withFeatureFlags([])]
};

export const NoFallback: Story = {
  args: {
    featureName: 'beta-feature',
    children: (
      <div className="p-4 bg-blue-100 border border-blue-300 rounded">
        <h3 className="text-blue-800 font-semibold">Beta Feature</h3>
        <p className="text-blue-700">This beta feature is only shown when enabled.</p>
      </div>
    )
    // No fallback provided - will show nothing when disabled
  },
  decorators: [withFeatureFlags([])]
};

export const MultipleFeatures: Story = {
  args: {
    featureName: 'advanced-analytics',
    children: (
      <div className="space-y-4">
        <div className="p-4 bg-purple-100 border border-purple-300 rounded">
          <h3 className="text-purple-800 font-semibold">Advanced Analytics</h3>
          <p className="text-purple-700">Advanced analytics dashboard with real-time data.</p>
        </div>
        <FeatureWrapper featureName="export-feature">
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Export Data
          </button>
        </FeatureWrapper>
      </div>
    ),
    fallback: (
      <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Basic Analytics</h3>
        <p className="text-gray-700">Basic analytics view with limited features.</p>
      </div>
    )
  },
  decorators: [withFeatureFlags(['advanced-analytics', 'export-feature'])]
};

export const ConditionalUI: Story = {
  args: {
    featureName: 'new-ui',
    children: (
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">New UI Design</h2>
        <p className="mb-4">Experience our redesigned interface with modern styling.</p>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    ),
    fallback: (
      <div className="p-6 bg-white border-2 border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Classic Interface</h2>
        <p className="mb-4 text-gray-600">The familiar interface you know and trust.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
          Continue
        </button>
      </div>
    )
  },
  decorators: [withFeatureFlags(['new-ui'])]
};

export const NestedFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Feature Flag Hierarchy</h2>

      <FeatureWrapper featureName="workspace-v2">
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="text-green-800 font-semibold">Workspace V2</h3>

          <FeatureWrapper
            featureName="collaboration-tools"
            fallback={<p className="text-green-700">Basic workspace features available.</p>}
          >
            <div className="mt-2 p-2 bg-green-200 rounded">
              <p className="text-green-800">Collaboration tools enabled!</p>

              <FeatureWrapper featureName="real-time-editing">
                <div className="mt-2 p-2 bg-green-300 rounded">
                  <p className="text-green-900">Real-time editing available!</p>
                </div>
              </FeatureWrapper>
            </div>
          </FeatureWrapper>
        </div>
      </FeatureWrapper>

      <FeatureWrapper
        featureName="workspace-v2"
        fallback={
          <div className="p-4 bg-gray-100 border border-gray-300 rounded">
            <h3 className="text-gray-800 font-semibold">Workspace V1</h3>
            <p className="text-gray-700">Using the classic workspace interface.</p>
          </div>
        }
      >
        {null}
      </FeatureWrapper>
    </div>
  ),
  decorators: [withFeatureFlags(['workspace-v2', 'collaboration-tools'])]
};

export const InteractiveDemo: Story = {
  render: () => {
    const [enabledFeatures, setEnabledFeatures] = React.useState<string[]>(['basic-feature']);

    const toggleFeature = (featureName: string) => {
      setEnabledFeatures(prev =>
        prev.includes(featureName)
          ? prev.filter(f => f !== featureName)
          : [...prev, featureName]
      );
      (window as any).__STORYBOOK_ENABLED_FEATURES__ = enabledFeatures;
    };

    return (
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-3">Feature Controls</h3>
          <div className="space-y-2">
            {['basic-feature', 'premium-feature', 'beta-feature'].map(feature => (
              <label key={feature} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={enabledFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="rounded"
                />
                <span className="capitalize">{feature.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <FeatureWrapper
            featureName="basic-feature"
            fallback={<div className="p-3 bg-red-100 text-red-700 rounded">Basic feature is disabled</div>}
          >
            <div className="p-3 bg-green-100 text-green-700 rounded">Basic feature is enabled</div>
          </FeatureWrapper>

          <FeatureWrapper
            featureName="premium-feature"
            fallback={<div className="p-3 bg-yellow-100 text-yellow-700 rounded">Premium feature requires upgrade</div>}
          >
            <div className="p-3 bg-blue-100 text-blue-700 rounded">Premium feature is active</div>
          </FeatureWrapper>

          <FeatureWrapper featureName="beta-feature">
            <div className="p-3 bg-purple-100 text-purple-700 rounded">Beta feature is available</div>
          </FeatureWrapper>
        </div>
      </div>
    );
  }
};
