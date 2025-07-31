import type { Meta, StoryObj } from '@storybook/react';

const InlineStyleTest = () => {
  console.log('[InlineStyleTest] Component rendering');

  return (
    <div style={{ padding: '32px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
        Inline Style Test Component
      </h1>

      <div style={{ backgroundColor: '#DBEAFE', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
        <p style={{ color: '#1E3A8A' }}>This should have a blue background with rounded corners</p>
      </div>

      <div style={{ backgroundColor: '#D1FAE5', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
        <p style={{ color: '#065F46' }}>This should have a green background with rounded corners</p>
      </div>

      <button style={{
        padding: '8px 16px',
        backgroundColor: '#4F46E5',
        color: 'white',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
      }}>
        Styled Button
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ backgroundColor: '#FEE2E2', padding: '16px', borderRadius: '4px' }}>Red</div>
        <div style={{ backgroundColor: '#FEF3C7', padding: '16px', borderRadius: '4px' }}>Yellow</div>
        <div style={{ backgroundColor: '#EDE9FE', padding: '16px', borderRadius: '4px' }}>Purple</div>
      </div>
    </div>
  );
};

const meta: Meta<typeof InlineStyleTest> = {
  title: 'Test/InlineStyleTest',
  component: InlineStyleTest,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
