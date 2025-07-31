import type { Meta, StoryObj } from '@storybook/react';

const StyledTest = () => {
  console.log('[StyledTest] Component rendering');

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Styled Test Component</h1>

      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="text-blue-900">This should have a blue background with rounded corners</p>
      </div>

      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-900">This should have a green background with rounded corners</p>
      </div>

      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Styled Button
      </button>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-100 p-4 rounded">Red</div>
        <div className="bg-yellow-100 p-4 rounded">Yellow</div>
        <div className="bg-purple-100 p-4 rounded">Purple</div>
      </div>
    </div>
  );
};

const meta: Meta<typeof StyledTest> = {
  title: 'Test/StyledTest',
  component: StyledTest,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
