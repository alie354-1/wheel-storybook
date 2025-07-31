import type { Meta, StoryObj } from '@storybook/react';

// Test with raw CSS to see if any styles are loading
const CSSTest = () => {
  return (
    <div>
      <style>{`
        .raw-css-test {
          background-color: yellow;
          padding: 20px;
          border: 2px solid red;
          color: blue;
          font-size: 24px;
        }
      `}</style>
      <div className="raw-css-test">
        Raw CSS Test - Should have yellow bg, red border, blue text
      </div>
      <div className="bg-blue-500 text-white p-4 mt-4">
        Tailwind Test - Should have blue bg and white text
      </div>
      <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px' }}>
        Inline Style Test - Should have green bg
      </div>
    </div>
  );
};

const meta = {
  title: 'Tests/CSS Test',
  component: CSSTest,
} satisfies Meta<typeof CSSTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    console.log('CSS Test Story rendering');
    return <CSSTest />;
  },
};
