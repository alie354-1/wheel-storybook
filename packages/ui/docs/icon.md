# Icon

## Overview
The Icon component is a versatile tool for displaying icons from the `lucide-react` library or custom SVG icons. It is designed with workspace context awareness, allowing for automatic color adjustments based on the current workspace.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { Icon } from '@wheel/ui';

// To display a lucide-react icon
<Icon name="Home" />

// To display a custom SVG icon
const CustomIcon = () => (
  <svg>
    // ...
  </svg>
);

<Icon as={CustomIcon} />
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| `name` | `keyof typeof icons` | | The name of the icon to display from the `lucide-react` library. |
| `as` | `ElementType` | | A custom SVG component to display as the icon. |
| `size` | `'xs' | 'sm' | 'md' | 'lg' | 'xl'` | `'md'` | The size of the icon. |
| `color` | `'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success'` | `'primary'` | The color of the icon. |
| `context` | `'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral'` | `'neutral'` | The workspace context, which determines the color of the icon when `color` is set to `'primary'`. |
| `rotation` | `0 | 90 | 180 | 270` | `0` | The rotation of the icon in degrees. |
| `title` | `string` | | A title for the icon, which is useful for accessibility. |
| `className` | `string` | | Additional CSS classes to apply to the icon. |

## States
- **Default**: The icon is displayed with the default size (`md`) and color (`primary`).
- **Custom Icon**: The icon is displayed using a custom SVG component.

## Accessibility
The `Icon` component is accessible by default. The `title` prop can be used to provide a descriptive title for screen readers.

## Best Practices
- Use the `name` prop to display icons from the `lucide-react` library.
- Use the `as` prop to display custom SVG icons.
- Use the `context` prop to automatically adjust the color of the icon based on the current workspace.
