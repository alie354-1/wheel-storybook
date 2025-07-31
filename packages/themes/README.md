# @wheel/themes

This package contains the theming system for THE WHEEL design system. It includes the theme provider, context, CSS variable management, and logic for switching between themes.

## Installation

To install the themes package, you can use npm or yarn:

```bash
npm install @wheel/themes
```

```bash
yarn add @wheel/themes
```

## Usage

To use the theming system, wrap your application with the `ThemeProvider`:

```jsx
import { ThemeProvider } from '@wheel/themes';

const App = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);
```

## API Documentation

For detailed information on the theme provider and available theme options, please refer to our Storybook documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to this package, please follow our contributing guidelines.
