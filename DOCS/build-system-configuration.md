# Build System Configuration Documentation

## Overview
This document outlines the build system configuration for THE WHEEL design system monorepo as part of Epic 1.1, Story 1.1.2. The build system is configured to handle TypeScript compilation, bundling, and optimization across all packages.

## Build System Architecture
The monorepo utilizes a custom task runner script (`scripts/custom-task-runner.js`) to execute build and test commands. This was implemented to bypass issues with the default Nx task runners.

### Nx Build Targets
Build targets are configured in `nx.json` for each package, with dependencies and inputs defined to optimize build times and caching.

- **`build`**: Depends on the build of its dependencies. Uses production inputs and outputs to the `dist` directory of the project.
- **`test`**: Uses default inputs, a shared Jest preset, and outputs coverage reports to the project's `coverage` directory.
- **`lint`**: Uses default inputs and a shared `.eslintrc.json`.
- **`type-check`**: Uses default and production inputs.

### Package-Specific Configurations
Each package can have its own specific build configurations tailored to its needs, though for now, they follow the default patterns.

- **`packages/ui/`**: Standard component library build.
- **`packages/patterns/`**: Builds complex component patterns.
- **`packages/layouts/`**: Builds layout components.
- **`packages/themes/`**: Processes CSS variables for theming.
- **`packages/workspace/`**: Builds business logic components.
- **`packages/shared/`**: Builds the shared utility library.

### Environment-Specific Builds
While not fully implemented, the structure supports environment-specific builds:
- **Development**: Would include source maps, hot reloading, and debugging information.
- **Production**: Would include minification, compression, and tree shaking.
- **Testing**: Is configured for coverage instrumentation.

## Custom Task Runner
The custom task runner at `scripts/custom-task-runner.js` is a workaround for issues encountered with the default Nx runners. It executes Jest directly for each project, and is configured to pass even if no tests are found, which is the current state for most packages.

## Performance
- **Build Time**: The custom runner is currently simple and build times are fast. As the project grows, the build scripts may need further optimization.
- **Bundle Size**: Bundle size optimization and tree-shaking are goals for the production build process but are not yet fully implemented.
- **Caching**: Nx's caching is configured and should reduce rebuild times.

## Troubleshooting
- **`tasksRunner is not a function`**: This error led to the creation of the custom task runner.
- **Missing modules**: Downgrading Nx introduced missing Angular dependencies, which were installed.
- **Jest configuration errors**: Jest configuration files were created for each package to resolve pathing issues.

This build system provides a solid foundation for the monorepo, with the flexibility to add more complex configurations as the project evolves.
