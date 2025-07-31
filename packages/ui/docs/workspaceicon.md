# WorkspaceIcon

## Overview
The WorkspaceIcon component displays an icon for a workspace. It can either display a logo image or the initials of the workspace name.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { WorkspaceIcon } from '@wheel/ui';

<WorkspaceIcon size="md" workspace={{ name: 'My Workspace' }} />
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | The size of the icon. |
| className | string | - | Additional CSS classes to apply to the component. |
| workspace | { name: string; logo?: string; } | - | The workspace object. If a logo is provided, it will be displayed. Otherwise, the initials of the workspace name will be displayed. |

## States
- **Default**: The icon displays the workspace's initials.
- **With Logo**: The icon displays the workspace's logo.

## Accessibility
The WorkspaceIcon is a `div` element with a `role` of `img` and an `aria-label` to ensure it is accessible to screen readers.

## Best Practices
- Use the `sm` or `xs` size for lists and menus.
- Use the `md` or `lg` size for headers and profiles.
- If the workspace has a logo, pass it in the `workspace` prop.
