# Migration Guide

This guide documents the migration from the previous project structure to the new monorepo architecture.

## Component Migration

The following table shows where components have been moved from the old `src/components` directory to the new packages:

| Old Path                   | New Package         |
| -------------------------- | ------------------- |
| `src/components/ui/`       | `@wheel/ui`         |
| `src/components/common/`   | `@wheel/patterns`   |
| `src/components/layout/`   | `@wheel/layouts`    |

## Import Path Changes

All relative import paths have been updated to use package-based imports. For example:

**Old:**
```javascript
import Button from '../ui/Button';
```

**New:**
```javascript
import { Button } from '@wheel/ui';
```

## Development Setup

The development setup has been updated to use Nx workspaces. Please refer to the main `README.md` for updated instructions on how to build, test, and run the project.
