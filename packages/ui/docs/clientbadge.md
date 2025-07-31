# ClientBadge

## Overview
The ClientBadge component displays a client's name and logo in a compact, inline format.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { ClientBadge } from '@wheel/ui';

<ClientBadge client={{ name: 'Acme Inc.', logo: 'acme.png' }} />
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| client | { name: string; logo?: string; } | - | The client object. If a logo is provided, it will be displayed. |
| className | string | - | Additional CSS classes to apply to the component. |

## States
- **Default**: The badge displays the client's name and logo.

## Accessibility
The ClientBadge is a `div` element with an `aria-label` to ensure it is accessible to screen readers.

## Best Practices
- Use the `ClientBadge` to identify clients in lists, tables, and headers.
