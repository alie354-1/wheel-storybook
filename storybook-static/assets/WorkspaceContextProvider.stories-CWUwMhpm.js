import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{W as r,u as ne}from"./WorkspaceContextProvider-BjV7oCoC.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=()=>{const{workspace:s,user:k,permissions:Z,hasPermission:t,switchContext:ee}=ne(),se=async()=>{try{const w=s.settings.theme==="light"?"dark":"light",re={...s,name:s.name+" (Switched)",settings:{...s.settings,theme:w}};await ee(re)}catch(w){console.error("Failed to switch context:",w)}};return e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Workspace Information"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",s.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm",children:s.type})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Active:"})," ",e.jsx("span",{className:`px-2 py-1 rounded text-sm ${s.state.isActive?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.state.isActive?"Active":"Inactive"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Theme:"})," ",s.settings.theme]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Privacy:"})," ",s.settings.privacy]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"User Information"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",k.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",k.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Roles:"})," ",k.roles.join(", ")]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Permissions:"})," ",Z.join(", ")]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Permission Tests"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Can Read:"})," ",e.jsx("span",{className:t("read")?"text-green-600":"text-red-600",children:t("read")?"Yes":"No"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Can Write:"})," ",e.jsx("span",{className:t("write")?"text-green-600":"text-red-600",children:t("write")?"Yes":"No"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Can Admin:"})," ",e.jsx("span",{className:t("admin")?"text-green-600":"text-red-600",children:t("admin")?"Yes":"No"})]})]})]}),e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:se,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Switch Context"})})]})},ce={title:"Workspace/Management/WorkspaceContextProvider",component:r,parameters:{layout:"padded",docs:{description:{component:"Provides workspace context and state management throughout the application. Handles user authentication, permissions, workspace settings, and audit logging."}}},tags:["autodocs"]},a={id:"ws-client-001",name:"Acme Corp Workspace",type:"client",settings:{theme:"light",notifications:!0,privacy:"private",features:{analytics:!0,collaboration:!0,reporting:!1}},state:{isActive:!0,lastAccessed:new Date,sessionId:"session-123",preferences:{sidebarCollapsed:!1,defaultView:"dashboard"}}},C={id:"ws-consultant-001",name:"Consultant Dashboard",type:"consultant",settings:{theme:"dark",notifications:!0,privacy:"public",features:{analytics:!0,collaboration:!0,reporting:!0,clientManagement:!0}},state:{isActive:!0,lastAccessed:new Date,sessionId:"session-456",preferences:{sidebarCollapsed:!0,defaultView:"clients"}}},K={id:"ws-admin-001",name:"Admin Control Panel",type:"admin",settings:{theme:"light",notifications:!0,privacy:"restricted",features:{analytics:!0,collaboration:!0,reporting:!0,clientManagement:!0,systemConfig:!0,userManagement:!0}},state:{isActive:!0,lastAccessed:new Date,sessionId:"session-789",preferences:{sidebarCollapsed:!1,defaultView:"system"}}},o={id:"user-client-001",name:"John Smith",email:"john.smith@acmecorp.com",roles:["client","user"],avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"},Q={id:"user-consultant-001",name:"Sarah Johnson",email:"sarah.johnson@consulting.com",roles:["consultant","user"],avatar:"https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=32&h=32&fit=crop&crop=face"},X={id:"user-admin-001",name:"Admin User",email:"admin@system.com",roles:["admin","user"],avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"},i={args:{workspace:a,user:o,permissions:["read","write","comment"]},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},c={args:{workspace:C,user:Q,permissions:["read","write","comment","manage_clients","view_analytics"]},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},d={args:{workspace:K,user:X,permissions:["read","write","comment","manage_clients","view_analytics","admin","manage_users","system_config"]},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},m={args:{workspace:a,user:{...o,name:"Guest User",email:"guest@acmecorp.com",roles:["guest"]},permissions:["read"]},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},p={args:{workspace:{...a,name:"Suspended Workspace",state:{...a.state,isActive:!1}},user:o,permissions:["read"]},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},l={args:{workspace:{...C,settings:{...C.settings,theme:"dark"}},user:Q,permissions:["read","write","comment","manage_clients"]},render:s=>e.jsx("div",{className:"dark bg-gray-900 min-h-screen",children:e.jsx(r,{...s,children:e.jsx(n,{})})})},u={args:{workspace:a,user:o,permissions:["read","write","comment"],onContextChange:s=>{console.log("Context changed:",s)},onPermissionDenied:s=>{console.log("Permission denied:",s)}},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},g={args:{workspace:a,user:o,permissions:["read","write"],securityMode:"strict",auditEnabled:!0},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},h={args:{workspace:K,user:X,permissions:["read"],securityMode:"permissive",auditEnabled:!0},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},x={args:{workspace:a,user:o,permissions:["read","write","comment"]},render:s=>e.jsx(r,{...s,children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{}),e.jsxs("div",{className:"border rounded-lg p-4 bg-gray-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Context Usage Example"}),e.jsx("pre",{className:"bg-gray-100 p-3 rounded text-sm overflow-x-auto",children:`const { workspace, user, permissions, hasPermission, switchContext } = useWorkspace();

// Check permissions
if (hasPermission('admin')) {
  // Show admin features
}

// Switch workspace context
await switchContext(newWorkspace);`})]})]})})};var v,j,W;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var b,y,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    workspace: mockConsultantWorkspace,
    user: mockConsultantUser,
    permissions: ['read', 'write', 'comment', 'manage_clients', 'view_analytics']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,N,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    workspace: mockAdminWorkspace,
    user: mockAdminUser,
    permissions: ['read', 'write', 'comment', 'manage_clients', 'view_analytics', 'admin', 'manage_users', 'system_config']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var A,D,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    workspace: mockClientWorkspace,
    user: {
      ...mockClientUser,
      name: 'Guest User',
      email: 'guest@acmecorp.com',
      roles: ['guest']
    },
    permissions: ['read']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var _,M,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockClientWorkspace,
      name: 'Suspended Workspace',
      state: {
        ...mockClientWorkspace.state,
        isActive: false
      }
    },
    user: mockClientUser,
    permissions: ['read']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(I=(M=p.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var E,T,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockConsultantWorkspace,
      settings: {
        ...mockConsultantWorkspace.settings,
        theme: 'dark' as const
      }
    },
    user: mockConsultantUser,
    permissions: ['read', 'write', 'comment', 'manage_clients']
  },
  render: args => <div className="dark bg-gray-900 min-h-screen">
      <WorkspaceContextProvider {...args}>
        <WorkspaceDemo />
      </WorkspaceContextProvider>
    </div>
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var R,V,Y;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment'],
    onContextChange: context => {
      console.log('Context changed:', context);
    },
    onPermissionDenied: permission => {
      console.log('Permission denied:', permission);
    }
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(Y=(V=u.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var G,J,L;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write'],
    securityMode: 'strict' as const,
    auditEnabled: true
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var F,H,$;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    workspace: mockAdminWorkspace,
    user: mockAdminUser,
    permissions: ['read'],
    securityMode: 'permissive' as const,
    auditEnabled: true
  },
  render: args => <WorkspaceContextProvider {...args}>
      <WorkspaceDemo />
    </WorkspaceContextProvider>
}`,...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var q,z,B;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    workspace: mockClientWorkspace,
    user: mockClientUser,
    permissions: ['read', 'write', 'comment']
  },
  render: args => <WorkspaceContextProvider {...args}>
      <div className="space-y-6">
        <WorkspaceDemo />

        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Context Usage Example</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
          {\`const { workspace, user, permissions, hasPermission, switchContext } = useWorkspace();

// Check permissions
if (hasPermission('admin')) {
  // Show admin features
}

// Switch workspace context
await switchContext(newWorkspace);\`}
          </pre>
        </div>
      </div>
    </WorkspaceContextProvider>
}`,...(B=(z=x.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const de=["ClientWorkspace","ConsultantWorkspace","AdminWorkspace","LimitedPermissions","InactiveWorkspace","DarkTheme","WithCustomOnAudit","StrictSecurityMode","PermissiveSecurityMode","InteractiveDemo"];export{d as AdminWorkspace,i as ClientWorkspace,c as ConsultantWorkspace,l as DarkTheme,p as InactiveWorkspace,x as InteractiveDemo,m as LimitedPermissions,h as PermissiveSecurityMode,g as StrictSecurityMode,u as WithCustomOnAudit,de as __namedExportsOrder,ce as default};
