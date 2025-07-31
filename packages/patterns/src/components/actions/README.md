# Action Components

This document outlines the architecture and usage of the action components in the design system.

## Components

### ButtonGroup

The `ButtonGroup` component is used to group related actions. It supports workspace-specific actions, permission-based visibility, and bulk actions.

### ActionMenu

The `ActionMenu` component is used to display a list of actions in a dropdown menu. It supports workspace-specific menu items, role-based action filtering, contextual action suggestions, and action history.

### Toolbar

The `Toolbar` component is used to display a set of tools. It supports workspace-specific tool sets, customizable layouts, tool state persistence, responsive behavior, and tool group management.

## Architecture

The action components are built on top of the atomic components from the `ui` package. They are designed to be context-aware and permission-based, allowing for a high degree of customization and control over the user experience.

## Usage

To use the action components, import them from `@wheel/patterns/components/actions` and provide the required props.

### Props

#### ButtonGroup

-   `actions`: An array of `ActionItem` objects.
-   `context`: The workspace context.
-   `orientation`: The orientation of the button group.
-   `size`: The size of the buttons.
-   `variant`: The variant of the buttons.
-   `onActionClick`: A callback function that is called when an action is clicked.
-   `permissions`: An array of permissions that the user has.
-   `maxVisible`: The maximum number of actions to display before showing an overflow menu.
-   `showOverflow`: Whether to show an overflow menu when the number of actions exceeds `maxVisible`.
-   `hasBulkActions`: Whether to show checkboxes for bulk actions.
-   `responsive`: Whether the button group should wrap on smaller screens.

#### ActionMenu

-   `actions`: An array of `ActionItem` objects.
-   `context`: The workspace context.
-   `trigger`: The element that triggers the menu.
-   `align`: The alignment of the menu.
-   `onActionClick`: A callback function that is called when an action is clicked.
-   `onMenuOpen`: A callback function that is called when the menu is opened.
-   `onMenuClose`: A callback function that is called when the menu is closed.
-   `permissions`: An array of permissions that the user has.
-   `showSuggestions`: Whether to show suggested actions.
-   `searchable`: Whether the menu should be searchable.
-   `actionHistory`: An array of recently used actions.

#### Toolbar

-   `tools`: An array of `ToolItem` objects.
-   `context`: The workspace context.
-   `layout`: The layout of the toolbar.
-   `customizable`: Whether the layout of the toolbar can be changed by the user.
-   `onToolClick`: A callback function that is called when a tool is clicked.
-   `onLayoutChange`: A callback function that is called when the layout of the toolbar is changed.
-   `permissions`: An array of permissions that the user has.
-   `persistent`: Whether the layout of the toolbar should be persisted in local storage.
-   `responsive`: Whether the toolbar should wrap on smaller screens.
