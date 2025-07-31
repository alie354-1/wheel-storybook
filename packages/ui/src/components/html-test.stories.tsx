export default {
  title: 'Debug/HTML Test',
};

export const PlainHTML = {
  render: () => {
    return (
      <div>
        <h1 style={{ color: 'red' }}>This is plain HTML</h1>
      </div>
    );
  },
};

export const StringHTML = () => (
  <h2 style={{ color: 'blue' }}>This is string HTML</h2>
);
