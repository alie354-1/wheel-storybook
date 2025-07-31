# Workspace-Specific Interactive Components

This document outlines the architecture and usage of the workspace-specific interactive components in the design system.

## Components

### WorkspaceSwitcher

The `WorkspaceSwitcher` component allows users to switch between different workspaces. It supports search, recent workspaces, and workspace creation.

### ClientSelector

The `ClientSelector` component allows users to select a client from a list. It supports search, recent clients, filtering, and client creation.

### TimeTracker

The `TimeTracker` component provides a way to track time spent on projects and tasks. It supports validation, history, and export.

### BillingControls

The `BillingControls` component provides a set of tools for managing billing, including invoice generation, payment processing, and reporting.

## Architecture

These components are built on top of the atomic components from the `ui` package and are designed to be used within the context of a workspace.

## Usage

To use these components, import them from `@wheel/patterns/components/workspace` and provide the required props.

### Props

#### WorkspaceSwitcher

-   `workspaces`: An array of `Workspace` objects.
-   `currentWorkspace`: The currently selected workspace.
-   `onWorkspaceChange`: A callback function that is called when the workspace is changed.
-   `onWorkspaceCreate`: A callback function that is called when the create workspace button is clicked.
-   `showSearch`: Whether to show the search input.
-   `showRecent`: Whether to show recent workspaces.
-   `maxRecent`: The maximum number of recent workspaces to show.

#### ClientSelector

-   `clients`: An array of `Client` objects.
-   `selectedClient`: The currently selected client.
-   `onClientSelect`: A callback function that is called when a client is selected.
-   `onClientCreate`: A callback function that is called when the create client button is clicked.
-   `showSearch`: Whether to show the search input.
-   `showRecent`: Whether to show recent clients.
-   `maxRecent`: The maximum number of recent clients to show.
-   `showFilters`: Whether to show the filters.
-   `filters`: An array of `ClientFilter` objects.
-   `onFilterChange`: A callback function that is called when a filter is changed.
-   `permissions`: An array of permissions that the user has.

#### TimeTracker

-   `currentSession`: The current time tracking session.
-   `onSessionStart`: A callback function that is called when a session is started.
-   `onSessionStop`: A callback function that is called when a session is stopped.
-   `onSessionPause`: A callback function that is called when a session is paused.
-   `onTimeEntry`: A callback function that is called when a time entry is created.
-   `projects`: An array of `Project` objects.
-   `tasks`: An array of `Task` objects.
-   `showTimer`: Whether to show the timer.
-   `showHistory`: Whether to show the time entry history.
-   `autoSave`: Whether to automatically save time entries.

#### BillingControls

-   `workspace`: The current workspace.
-   `billing`: The billing information for the workspace.
-   `onInvoiceGenerate`: A callback function that is called when an invoice is generated.
-   `onPaymentProcess`: A callback function that is called when a payment is processed.
-   `onReportGenerate`: A callback function that is called when a report is generated.
-   `showInvoicing`: Whether to show the invoicing controls.
-   `showPayments`: Whether to show the payment controls.
-   `showReports`: Whether to show the reporting controls.
-   `permissions`: An array of permissions that the user has.
-   `showAnalytics`: Whether to show the analytics section.
