import '@testing-library/jest-dom/extend-expect';

jest.mock('lucide-react', () => {
  const React = require('react');
  const MockIcon = React.forwardRef((props, ref) => React.createElement('svg', { ref, ...props }));

  return new Proxy(
    {},
    {
      get: (_target, property) => {
        if (property === '__esModule') {
          return true;
        }

        if (property === 'default') {
          return {};
        }

        return MockIcon;
      },
    }
  );
});
