# @wheel/workspace

This package contains workspace-specific components, context providers, and UI elements for THE WHEEL design system. These components are tailored for different workspace contexts, such as consultant, client, admin, and marketplace.

## Installation

To install the workspace package, you can use npm or yarn:

```bash
npm install @wheel/workspace
```

```bash
yarn add @wheel/workspace
```

## Usage

You can import and use the workspace components in your application as follows:

```jsx
import { WorkspaceProvider } from '@wheel/workspace';

const App = ({ children }) => (
  <WorkspaceProvider>
    {children}
  </WorkspaceProvider>
);
```

## API Documentation

For detailed information on each workspace component's props and usage, please refer to our Storybook documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to this package, please follow our contributing guidelines.
