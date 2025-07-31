const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:6006', 'http://localhost:6008'],
    credentials: true
  }
});

// Load environment variables
require('dotenv').config({ path: '.env.development' });

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:6006', 'http://localhost:6008'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock workspace data
const workspaceContexts = {
  consultant: {
    id: 'consultant',
    name: 'Consultant Workspace',
    theme: 'professional',
    permissions: ['read', 'write', 'collaborate', 'analyze'],
    features: ['time-tracking', 'client-management', 'analytics', 'billing']
  },
  client: {
    id: 'client',
    name: 'Client Portal',
    theme: 'accessible',
    permissions: ['read', 'comment', 'approve'],
    features: ['progress-tracking', 'communication', 'document-review']
  },
  admin: {
    id: 'admin',
    name: 'Admin Dashboard',
    theme: 'comprehensive',
    permissions: ['read', 'write', 'delete', 'admin', 'manage-users'],
    features: ['user-management', 'system-settings', 'analytics', 'billing-management']
  },
  expert: {
    id: 'expert',
    name: 'Expert Marketplace',
    theme: 'marketplace',
    permissions: ['read', 'write', 'publish', 'monetize'],
    features: ['content-creation', 'marketplace', 'earnings', 'expertise-sharing']
  },
  toolCreator: {
    id: 'toolCreator',
    name: 'Tool Creator Studio',
    theme: 'development',
    permissions: ['read', 'write', 'publish', 'debug'],
    features: ['tool-development', 'api-access', 'testing', 'marketplace-integration']
  },
  founder: {
    id: 'founder',
    name: 'Founder Command Center',
    theme: 'executive',
    permissions: ['read', 'write', 'admin', 'financial', 'strategic'],
    features: ['business-analytics', 'financial-oversight', 'strategic-planning', 'team-management']
  }
};

const themes = {
  light: {
    name: 'Light Theme',
    colors: {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      background: '#FFFFFF',
      surface: '#F8FAFC',
      text: '#1F2937'
    }
  },
  dark: {
    name: 'Dark Theme',
    colors: {
      primary: '#A78BFA',
      secondary: '#FBBF24',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB'
    }
  },
  gradient: {
    name: 'Gradient Theme',
    colors: {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: '#FFFFFF',
      text: '#1F2937'
    }
  }
};

// Helper functions
function getPermissionsForRole(role) {
  const rolePermissions = {
    admin: ['read', 'write', 'delete', 'admin', 'manage-users'],
    user: ['read', 'write', 'comment'],
    viewer: ['read', 'comment'],
    contributor: ['read', 'write', 'collaborate'],
    owner: ['read', 'write', 'delete', 'admin', 'manage-users', 'financial']
  };
  return rolePermissions[role] || rolePermissions.user;
}

function getThemeForContext(context) {
  return workspaceContexts[context]?.theme || 'light';
}

// Workspace context middleware
app.use((req, res, next) => {
  const workspaceContext = req.headers['x-workspace-context'] || 'consultant';
  const userRole = req.headers['x-user-role'] || 'admin';
  const themePreference = req.headers['x-theme'] || 'light';
  
  req.workspace = {
    context: workspaceContext,
    contextData: workspaceContexts[workspaceContext],
    user: {
      role: userRole,
      permissions: getPermissionsForRole(userRole),
      id: `user-${Date.now()}`,
      name: `${userRole.charAt(0).toUpperCase() + userRole.slice(1)} User`
    },
    theme: themes[themePreference] || themes.light,
    timestamp: new Date().toISOString()
  };
  
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    services: {
      database: 'connected',
      redis: 'connected',
      websocket: 'active'
    }
  });
});

// API Routes
app.get('/api/workspace/contexts', (req, res) => {
  res.json({
    contexts: Object.values(workspaceContexts),
    current: req.workspace.context,
    user: req.workspace.user
  });
});

app.get('/api/workspace/context/:contextId', (req, res) => {
  const contextId = req.params.contextId;
  const context = workspaceContexts[contextId];
  
  if (!context) {
    return res.status(404).json({ error: 'Context not found' });
  }
  
  res.json({
    context,
    permissions: req.workspace.user.permissions,
    theme: req.workspace.theme
  });
});

app.get('/api/themes', (req, res) => {
  res.json({
    themes: Object.keys(themes).map(key => ({
      id: key,
      ...themes[key]
    })),
    current: req.workspace.theme
  });
});

app.get('/api/theme/:themeId', (req, res) => {
  const themeId = req.params.themeId;
  const theme = themes[themeId];
  
  if (!theme) {
    return res.status(404).json({ error: 'Theme not found' });
  }
  
  res.json({
    id: themeId,
    ...theme
  });
});

// Mock data endpoints
app.get('/api/mock/workspace-data', (req, res) => {
  res.json({
    workspaces: Object.values(workspaceContexts),
    users: [
      { id: 1, name: 'Alex Cohen', role: 'admin', context: 'founder' },
      { id: 2, name: 'John Smith', role: 'user', context: 'consultant' },
      { id: 3, name: 'Jane Doe', role: 'viewer', context: 'client' }
    ],
    projects: [
      { id: 1, name: 'Project Alpha', status: 'active', context: 'consultant' },
      { id: 2, name: 'Project Beta', status: 'pending', context: 'expert' }
    ]
  });
});

// Static file serving
app.use('/assets', express.static('packages/themes/src'));
app.use('/fonts', express.static('packages/ui/src/fonts'));
app.use('/branding', express.static('branding'));

// WebSocket for real-time features
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('join-workspace', (workspaceId) => {
    socket.join(workspaceId);
    socket.emit('workspace-joined', { workspaceId, timestamp: new Date().toISOString() });
  });
  
  socket.on('theme-change', (data) => {
    socket.to(data.workspaceId).emit('theme-updated', { 
      theme: data.theme, 
      timestamp: new Date().toISOString() 
    });
  });
  
  socket.on('collaboration-event', (data) => {
    socket.to(data.workspaceId).emit('collaboration-update', {
      ...data,
      timestamp: new Date().toISOString()
    });
  });
  
  socket.on('workspace-context-change', (data) => {
    socket.to(data.workspaceId).emit('context-updated', {
      context: data.context,
      user: data.user,
      timestamp: new Date().toISOString()
    });
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`,
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 3001;
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT || 3002;

httpServer.listen(PORT, () => {
  console.log(`🚀 Development server running on http://localhost:${PORT}`);
  console.log(`🔗 WebSocket server ready for connections`);
  console.log(`📚 Storybook available at http://localhost:${process.env.STORYBOOK_PORT || 3000}`);
  console.log(`🎨 THE WHEEL Design System - Development Environment`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
});
