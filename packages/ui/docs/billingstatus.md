# BillingStatus

## Overview
The BillingStatus component displays a colored badge indicating the status of a bill.

## Installation
```bash
npm install @wheel/ui
```

## Usage
```jsx
import { BillingStatus } from '@wheel/ui';

<BillingStatus status="paid" />
```

## Props
| Prop Name | Type | Default | Description |
|---|---|---|---|
| status | 'paid' \| 'pending' \| 'overdue' \| 'draft' | - | The status of the bill. |
| className | string | - | Additional CSS classes to apply to the component. |

## States
- **Paid**: The bill has been paid.
- **Pending**: The bill is pending payment.
- **Overdue**: The bill is overdue.
- **Draft**: The bill is a draft.

## Accessibility
The BillingStatus is a `div` element with an `aria-label` to ensure it is accessible to screen readers.

## Best Practices
- Use the `BillingStatus` component to clearly indicate the status of a bill in tables, lists, and headers.
