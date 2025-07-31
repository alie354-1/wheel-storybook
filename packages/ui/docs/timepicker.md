# TimePicker

## Overview
The TimePicker component allows users to select a time from a user-friendly interface. It can be configured to show hours, minutes, and optionally, seconds.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { TimePicker } from '@wheel/ui';

<TimePicker 
  value="14:30:00" 
  onChange={(time) => console.log(time)} 
/>
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| value | string | '00:00:00' | The current time value in "HH:mm:ss" format. |
| onChange | (time: string) => void | - | Callback function that fires when the time is changed. |
| disabled | boolean | false | If true, the time picker will be disabled. |
| showSeconds | boolean | false | If true, the seconds selector will be shown. |
| className | string | - | Additional CSS classes to apply to the component. |

## States
- **Default**: The time picker is enabled and displays the selected time. The time selection panel is closed.
- **Open**: The time selection panel is open, allowing the user to choose a new time.
- **Disabled**: The time picker is visible but not interactive.

## Accessibility
The TimePicker is designed with accessibility in mind. The input field has an `aria-label` and the selection panel is implemented as a dialog with appropriate ARIA roles (`role="dialog"`, `aria-modal="true"`) to ensure it is properly handled by screen readers.

## Best Practices
- Use the `TimePicker` for scenarios where users need to select a specific time, such as setting appointments or scheduling events.
- When `showSeconds` is not required, keep it disabled to simplify the user interface.
- Provide a default time value to avoid confusion.
