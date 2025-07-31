# Development Environment Setup Guide

## Overview

This guide walks you through setting up THE WHEEL Design System development environment from scratch. The development environment includes Docker containers, development servers, workspace context simulation, and comprehensive tooling for efficient development.

## Prerequisites

### Required Software

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Docker** >= 20.10.0 (optional, for containerized development)
- **Git** >= 2.30.0
- **VS Code** (recommended IDE)

### System Requirements

- **Memory**: 8GB RAM minimum, 16GB recommended
- **Storage**: 5GB free space minimum
- **OS**: macOS 10.15+, Windows 10+, or Linux Ubuntu 18.04+

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd Design-System
npm install
```

### 2. Environment Setup

Run the automated setup script:

```bash
npm run env:setup
```

This will:
- Create environment configuration files
- Set up VS Code workspace
- Configure lint-staged and Husky
- Create development utilities

### 3. Health Check

Verify your environment:

```bash
npm run health-check
```

### 4. Start Development Environment

```bash
npm run dev:full
```

This starts:
- **Development Server**: `http://localhost:3001`
- **Storybook**: `http://localhost:6008`
- **WebSocket Server**: `ws://localhost:3002`

## Development Environment Components

### Core Services

| Service | Port | Purpose |
|---------|------|---------|
| Development Server | 3001 | API endpoints, workspace context simulation |
| Storybook | 6008 | Component documentation and testing |
| WebSocket Server | 3002 | Real-time collaboration features |

### Development Tools

| Tool | Purpose | Configuration |
|------|---------|---------------|
| ESLint | Code linting | `.eslintrc.js` |
| Prettier | Code formatting | `.prettierrc.js` |
| Husky | Git hooks | `.husky/pre-commit` |
| TypeScript | Type checking | `tsconfig.base.json` |
| Jest | Testing framework | `jest.config.cjs` |

## Environment Configuration

### Environment Variables

The development environment uses `.env.development` for configuration:

```bash
# Application
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL=postgresql://wheel_dev:local_dev_password@localhost:5432/wheel_design_system

# Redis
REDIS_URL=redis://localhost:6379

# WebSocket
WEBSOCKET_PORT=3002
WEBSOCKET_URL=ws://localhost:3002

# Workspace Contexts
ENABLE_CONSULTANT=true
ENABLE_CLIENT=true
ENABLE_ADMIN=true
ENABLE_EXPERT=true
ENABLE_TOOL_CREATOR=true
ENABLE_FOUNDER=true

# Development Features
HOT_RELOAD=true
SOURCE_MAPS=true
MOCK_DATA=true
DEBUG_MODE=true
```

### Workspace Context System

THE WHEEL Design System supports 6 workspace contexts:

1. **Consultant** - Professional workspace for consultants
2. **Client** - Client portal interface
3. **Admin** - Administrative dashboard
4. **Expert** - Expert marketplace interface
5. **Tool Creator** - Development tools interface
6. **Founder** - Executive command center

Each context has specific permissions, themes, and features configured in the development server.

## Docker Development Environment

### Using Docker Compose

For containerized development with PostgreSQL and Redis:

```bash
# Start all services
npm run docker:up

# View logs
npm run docker:logs

# Stop services
npm run docker:down

# Rebuild containers
npm run docker:build
```

### Services Included

- **Design System**: Main application container
- **PostgreSQL**: Database for theme storage and user contexts
- **Redis**: Caching and session storage

## Development Scripts

### Available Commands

```bash
# Development
npm run dev:full          # Start complete development environment
npm run dev:server        # Start development server only
npm run dev:storybook     # Start Storybook only
npm run dev:packages      # Start package development

# Building
npm run build            # Build all packages
npm run build-storybook  # Build Storybook static files

# Testing
npm run test             # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript checks

# Environment
npm run health-check     # Check environment health
npm run env:setup        # Set up development environment
npm run validate         # Run full validation suite
```

## VS Code Configuration

### Recommended Extensions

The workspace includes recommended extensions for:
- ESLint and Prettier integration
- TypeScript support
- React development
- Tailwind CSS
- Docker support
- Git integration

### Workspace Settings

Automatic configuration includes:
- Format on save
- ESLint auto-fix
- TypeScript strict mode
- THE WHEEL brand colors in VS Code theme

## Troubleshooting

### Common Issues

#### Port Already in Use

If you encounter port conflicts:

```bash
# Find processes using ports
lsof -i :3001
lsof -i :6008
lsof -i :3002

# Kill processes
kill -9 <PID>
```

#### Node Version Issues

Ensure you're using Node.js 18+:

```bash
node --version
npm --version
```

Use nvm to manage Node.js versions:

```bash
nvm install 18
nvm use 18
```

#### Docker Issues

If Docker containers fail to start:

```bash
# Check Docker status
docker --version
docker-compose --version

# Clean Docker cache
docker system prune -a
```

#### Memory Issues

For memory-related errors:

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=8192"

# Or set in package.json scripts
"dev": "NODE_OPTIONS='--max-old-space-size=8192' npm run dev:full"
```

### Environment Validation

Run the health check script to validate your setup:

```bash
npm run health-check
```

This checks:
- Node.js and npm versions
- Package workspace configuration
- Required files and directories
- VS Code configuration
- Storybook setup
- Development server configuration

## Performance Optimization

### Development Server Performance

The development environment is optimized for:
- **Server startup**: Under 30 seconds
- **Hot reload**: Under 2 seconds
- **Theme switching**: Under 1 second
- **WebSocket connections**: Under 5 seconds
- **Memory usage**: Under 2GB for full environment

### Build Performance

For faster builds:

```bash
# Use parallel processing
npm run build --parallel

# Skip type checking in development
npm run dev:packages --skipTypeCheck
```

## Integration with Existing Systems

### Storybook Integration

The development server integrates with Storybook:
- Shared workspace context system
- Consistent theme system
- Real-time collaboration features
- Brand integration

### CI/CD Integration

Environment configuration supports:
- GitHub Actions
- Docker deployment
- Automated testing
- Code quality checks

## Next Steps

After completing the development environment setup:

1. **Component Development**: Start creating or updating components
2. **Storybook Stories**: Create stories for existing components
3. **Testing**: Set up comprehensive test coverage
4. **Documentation**: Update component documentation

## Support

For additional help:
- Review the health check output for specific issues
- Check the troubleshooting section above
- Consult the project documentation in `/DOCS`
- Review Epic 1.3 documentation for detailed requirements

---

**Version**: 1.0
**Last Updated**: July 11, 2025
**Part of**: Epic 1.3 - Development Environment Setup
