# Workspace Context Usage Documentation

## Overview
The workspace context system in THE WHEEL design system provides comprehensive context switching capabilities for testing components across different workspace environments.

## Workspace Context Types

### 1. Consultant Context
**Purpose**: Consulting professionals managing client projects
**Features**:
- Full project management capabilities
- Client collaboration tools
- Time tracking and billing
- Resource allocation

**Usage**:
```typescript
// In stories
export const ConsultantExample = {
  parameters: {
    globals: {
      workspace: 'consultant'
    }
  }
};
```

### 2. Client Context
**Purpose**: Client users accessing project information
**Features**:
- Read-only project visibility
- Communication tools
- Progress tracking
- Document access

### 3. Admin Context
**Purpose**: System administrators managing platform
**Features**:
- Full system access
- User management
- Configuration controls
- Analytics and reporting

### 4. Expert Context
**Purpose**: Subject matter experts providing specialized knowledge
**Features**:
- Expert consultation tools
- Knowledge base access
- Specialized reporting
- Mentoring capabilities

### 5. Tool Creator Context
**Purpose**: Users creating custom tools and workflows
**Features**:
- Tool development environment
- Custom workflow creation
- Integration capabilities
- Publishing tools

### 6. Founder Context
**Purpose**: Founder-level access to all platform features
**Features**:
- Complete platform control
- Strategic analytics
- Organization management
- Platform configuration

## Context Switching

### Toolbar Controls
Access workspace context switching via the Storybook toolbar:

1. **Workspace Selector**: Globe icon in toolbar
2. **Available Options**: All 6 workspace contexts
3. **Real-time Switching**: Instant context changes
4. **Persistence**: Selection persists across stories

### Programmatic Control
```typescript
// In decorators
const workspaceConfig = {
  type: 'consultant',
  theme: 'light',
  user: {
    role: 'admin',
    permissions: ['read', 'write', 'delete']
  },
  features: {
    billing: true,
    timeTracking: true,
    clientManagement: true
  }
};
```

## Context Configuration

### User Roles
Each workspace context supports multiple user roles:
- **Admin**: Full access within context
- **User**: Standard access
- **Viewer**: Read-only access
- **Guest**: Limited access

### Permissions System
```typescript
const permissions = {
  read: boolean,
  write: boolean,
  delete: boolean,
  admin: boolean,
  billing: boolean,
  export: boolean
};
```

### Feature Toggles
```typescript
const features = {
  billing: boolean,
  timeTracking: boolean,
  clientManagement: boolean,
  reporting: boolean,
  integrations: boolean,
  customization: boolean
};
```

## Context-Aware Components

### Building Context-Aware Stories
```typescript
export const ContextAwareButton = {
  render: (args, context) => {
    const { globals } = context;
    const workspaceType = globals.workspace;
    
    return (
      <Button 
        {...args}
        variant={workspaceType === 'client' ? 'secondary' : 'primary'}
      />
    );
  }
};
```

### Conditional Rendering
```typescript
export const ConditionalFeature = {
  render: (args, context) => {
    const { globals } = context;
    const isAdmin = globals.userRole === 'admin';
    
    return (
      <div>
        <Component {...args} />
        {isAdmin && <AdminOnlyFeature />}
      </div>
    );
  }
};
```

## Mock Data Integration

### Workspace-Specific Data
```typescript
const mockDataByWorkspace = {
  consultant: {
    projects: consultantProjects,
    clients: consultantClients,
    billing: consultantBilling
  },
  client: {
    projects: clientProjects,
    communications: clientComms,
    documents: clientDocs
  },
  admin: {
    users: allUsers,
    analytics: systemAnalytics,
    configuration: systemConfig
  }
};
```

### Dynamic Data Loading
```typescript
const getMockData = (workspace, userRole) => {
  const baseData = mockDataByWorkspace[workspace];
  return filterByPermissions(baseData, userRole);
};
```

## Testing Scenarios

### Context-Specific Testing
1. **Consultant Scenarios**:
   - Project management workflows
   - Client communication
   - Time tracking validation
   - Billing calculations

2. **Client Scenarios**:
   - Project visibility
   - Communication tools
   - Document access
   - Progress tracking

3. **Admin Scenarios**:
   - User management
   - System configuration
   - Analytics dashboards
   - Platform monitoring

### Cross-Context Testing
```typescript
export const CrossContextTest = {
  render: (args, context) => {
    const { globals } = context;
    const allContexts = ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder'];
    
    return (
      <div>
        {allContexts.map(ctx => (
          <div key={ctx}>
            <h3>{ctx}</h3>
            <Component {...args} workspace={ctx} />
          </div>
        ))}
      </div>
    );
  }
};
```

## Troubleshooting

### Common Issues

**Context not switching**:
- Check global types configuration
- Verify decorator is applied
- Restart Storybook dev server

**Permissions not working**:
- Verify permission configuration
- Check user role mapping
- Validate feature toggle logic

**Mock data not loading**:
- Check data structure
- Verify workspace mapping
- Validate data filtering logic

### Best Practices

1. **Always provide fallbacks** for missing context data
2. **Use TypeScript** for context type safety
3. **Document context-specific behavior** in stories
4. **Test all context combinations** for critical components
5. **Validate permissions** at component level

### Performance Considerations

- **Lazy load** context-specific data
- **Cache** frequently accessed context configurations
- **Minimize** context switching overhead
- **Optimize** decorator implementations

## Advanced Usage

### Custom Context Providers
```typescript
export const CustomContextProvider = (Story, context) => {
  const { globals } = context;
  const customConfig = getCustomConfig(globals.workspace);
  
  return (
    <CustomContext.Provider value={customConfig}>
      <Story />
    </CustomContext.Provider>
  );
};
```

### Context Validation
```typescript
const validateContext = (workspace, userRole) => {
  const validWorkspaces = ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder'];
  const validRoles = ['admin', 'user', 'viewer', 'guest'];
  
  if (!validWorkspaces.includes(workspace)) {
    throw new Error(`Invalid workspace: ${workspace}`);
  }
  
  if (!validRoles.includes(userRole)) {
    throw new Error(`Invalid user role: ${userRole}`);
  }
};
```

## Integration with Existing Systems

### Theme Integration
The workspace context system integrates seamlessly with the theme system:
- Each workspace can have specific theme preferences
- Context switching updates theme variables
- Brand consistency maintained across contexts

### Component Integration
- All THE WHEEL components support workspace context
- Context-aware styling and behavior
- Automatic permission validation

### Data Integration
- Context-specific data loading
- Permission-based data filtering
- Workspace-aware API calls
