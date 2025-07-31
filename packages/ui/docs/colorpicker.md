# ColorPicker

## Overview
The ColorPicker component provides a user-friendly way to select a color from a predefined palette or a custom color using the native browser color picker.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { ColorPicker } from '@wheel/ui';

<ColorPicker 
  value="#FF6B6B" 
  onChange={(color) => console.log(color)} 
/>
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| value | string | '#000000' | The current color value in hex format. |
| onChange | (color: string) => void | - | Callback function that fires when the color is changed. |
| disabled | boolean | false | If true, the color picker will be disabled. |
| className | string | - | Additional CSS classes to apply to the component. |

## States
- **Default**: The color picker is enabled and displays the selected color. The color selection panel is closed.
- **Open**: The color selection panel is open, allowing the user to choose a new color from the palette or the native color picker.
- **Disabled**: The color picker is visible but not interactive.

## Accessibility
The ColorPicker is designed with accessibility in mind. The component is keyboard navigable and the color selection panel is implemented as a dialog with appropriate ARIA roles (`role="dialog"`, `aria-modal="true"`) to ensure it is properly handled by screen readers.

## Best Practices
- Use the `ColorPicker` for scenarios where users need to select a color, such as customizing themes, text, or backgrounds.
- The default color palette can be customized to match your brand's colors.
