# Logo

## Overview
The Logo component displays the brand's logo in various formats. It supports different variants, sizes, and can be inverted for dark backgrounds.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { Logo } from '@wheel/ui';

<Logo variant="primary" size="md" />
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| variant | 'primary' \| 'compact' \| 'stacked' \| 'icon' \| 'dashboard' \| 'monochrome' \| 'journey' \| 'watermark' \| 'social' | 'primary' | The variant of the logo to display. |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'custom' | 'md' | The size of the logo. |
| width | number \| string | - | Custom width for the logo. Overrides `size`. |
| height | number \| string | - | Custom height for the logo. Overrides `size`. |
| className | string | - | Additional CSS classes to apply to the component. |
| inverted | boolean | false | If true, the logo will be inverted for dark backgrounds. |
| onClick | () => void | - | Callback function that fires when the logo is clicked. Defaults to navigating to the dashboard. |

## States
- **Default**: The logo is displayed with the specified variant and size.
- **Inverted**: The logo is inverted for dark backgrounds.

## Accessibility
The Logo component is an `img` element with an `alt` attribute to ensure it is accessible to screen readers.

## Best Practices
- Use the `primary` variant for most cases.
- Use the `icon` variant for compact spaces.
- Use the `inverted` prop for dark backgrounds.
- If a custom size is needed, use the `width` and `height` props.
