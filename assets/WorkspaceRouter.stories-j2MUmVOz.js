import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as i,R as ze}from"./index-B2-qRKKC.js";import{u as We,W as w}from"./WorkspaceContextProvider-BjV7oCoC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Se=()=>e.jsxs("div",{className:"flex items-center justify-center min-h-64",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"Loading..."})]}),Le=({error:t})=>e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-64 p-6",children:[e.jsx("div",{className:"text-red-600 mb-4",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Something went wrong"}),e.jsx("p",{className:"text-gray-600 text-center mb-4",children:t.message}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors",children:"Reload Page"})]}),Ae=({route:t,onBack:r})=>{var s;return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-64 p-6",children:[e.jsx("div",{className:"text-amber-600 mb-4",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Access Denied"}),e.jsx("p",{className:"text-gray-600 text-center mb-4",children:"You don't have permission to access this page."}),e.jsxs("div",{className:"text-sm text-gray-500 mb-4",children:["Required permissions: ",((s=t.permissions)==null?void 0:s.join(", "))||"None specified"]}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"Go Back"})]})},De=({children:t})=>e.jsx("div",{className:"workspace-route-container",children:t}),P=(t,r)=>{for(const s of t){if(s.exact&&s.path===r)return s;if(!s.exact&&r.startsWith(s.path)){if(s.children){const o=P(s.children,r);if(o)return o}return s}if(s.children){const o=P(s.children,r);if(o)return o}}return null},Te=t=>({...t,path:t.path.startsWith("/")?t.path:`/${t.path}`,permissions:t.permissions||[],roles:t.roles||[],workspaceTypes:t.workspaceTypes||[],exact:t.exact??!1}),ge=({routes:t,currentPath:r,onRouteChange:s,fallbackRoute:o="/unauthorized",loadingComponent:l=Se,errorComponent:m=Le,permissionDeniedComponent:Re=Ae})=>{const{workspace:z,hasPermission:W,user:S}=We(),[Ce,L]=i.useState(!0),[A,R]=i.useState(null),D=i.useMemo(()=>t.map(Te),[t]),a=i.useMemo(()=>{try{const n=P(D,r);return R(null),n}catch(n){return R(n instanceof Error?n:new Error("Route matching failed")),null}},[D,r]),Pe=i.useMemo(()=>{if(!a)return!1;try{return!(a.workspaceTypes&&a.workspaceTypes.length>0&&!a.workspaceTypes.includes(z.type)||a.permissions&&a.permissions.length>0&&!a.permissions.every(C=>W(C))||a.roles&&a.roles.length>0&&!a.roles.some(C=>S.roles.includes(C)))}catch(n){return R(n instanceof Error?n:new Error("Permission check failed")),!1}},[a,z.type,W,S.roles]);if(i.useEffect(()=>{a!=null&&a.redirect&&s(a.redirect)},[a,s]),i.useEffect(()=>{L(!0);const n=setTimeout(()=>{L(!1)},100);return()=>clearTimeout(n)},[r]),Ce)return e.jsx(l,{});if(A)return e.jsx(m,{error:A});if(!a)return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-64 p-6",children:[e.jsx("div",{className:"text-gray-400 mb-4",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175C5.25 12.09 5.25 11.438 5.25 10.5V7.5c0-.938 0-1.59.543-2.325C6.336 4.44 7.164 4 8.25 4h7.5c1.086 0 1.914.44 2.457 1.175.543.735.543 1.387.543 2.325v3c0 .938 0 1.59-.543 2.325-.543.735-1.371 1.175-2.457 1.175H12z"})})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Page Not Found"}),e.jsx("p",{className:"text-gray-600 text-center mb-4",children:"The page you're looking for doesn't exist."}),e.jsx("button",{onClick:()=>s("/"),className:"px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors",children:"Go Home"})]});if(!Pe)return e.jsx(Re,{route:a,onBack:()=>s(o)});const we=a.component;return e.jsx(De,{children:e.jsx(we,{})})},d=(t,r,s={})=>({path:t,component:r,...s}),Ee=(t,r,s,o={})=>({path:t,component:r,permissions:s,...o}),Me=(t,r,s,o={})=>({path:t,component:r,workspaceTypes:s,...o}),be=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Home Page"}),e.jsx("p",{className:"text-gray-600",children:"Welcome to the workspace home page."})]}),fe=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"This is the dashboard page."})]}),$e=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Admin Panel"}),e.jsx("p",{className:"text-gray-600",children:"This is the admin panel - requires admin permissions."})]}),Be=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Client Area"}),e.jsx("p",{className:"text-gray-600",children:"This is the client area - only for client workspaces."})]}),He=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Settings"}),e.jsx("p",{className:"text-gray-600",children:"Workspace settings page."})]}),ke={id:"ws-1",name:"Test Workspace",type:"client",settings:{theme:"light",notifications:!0,privacy:"private",features:{}},state:{isActive:!0,lastAccessed:new Date,sessionId:"session-123",preferences:{}}},ye={id:"user-1",name:"John Doe",email:"john@example.com",roles:["user","admin"]},Fe=["read","write","admin"],ve={...ke,type:"consultant"},je={...ye,roles:["user"]},Ne=["read"],c=[d("/",be,{exact:!0}),d("/dashboard",fe),Ee("/admin",$e,["admin"]),Me("/client",Be,["client"]),d("/settings",He)],Ye={title:"Workspace/Management/WorkspaceRouter",component:ge,parameters:{layout:"fullscreen",docs:{description:{component:`
The WorkspaceRouter component provides intelligent routing with workspace-aware permissions and access control.

## Features

- **Route Matching**: Supports exact and prefix matching with nested routes
- **Permission Control**: Route-level permission and role checking
- **Workspace Types**: Routes can be restricted to specific workspace types
- **Error Handling**: Built-in error boundaries and fallback components
- **Loading States**: Smooth transitions with loading indicators
- **Customizable**: Custom loading, error, and permission denied components

## Route Types

- **Basic Routes**: Simple path-to-component mapping
- **Protected Routes**: Require specific permissions
- **Workspace Routes**: Restricted to certain workspace types
- **Nested Routes**: Support for hierarchical routing

## Usage

\`\`\`tsx
import { WorkspaceRouter, createRoute, createProtectedRoute } from '@workspace/management';

const routes = [
  createRoute('/', HomePage),
  createProtectedRoute('/admin', AdminPage, ['admin']),
  createWorkspaceRoute('/client', ClientPage, ['client'])
];

<WorkspaceRouter
  routes={routes}
  currentPath="/dashboard"
  onRouteChange={handleRouteChange}
/>
\`\`\`
        `}}},decorators:[(t,r)=>e.jsx(w,{workspace:ke,user:ye,permissions:Fe,children:e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsx(t,{...r})})})],argTypes:{routes:{description:"Array of route configurations",control:!1},currentPath:{description:"Current active path",control:"text"},onRouteChange:{description:"Callback when route changes",action:"route-changed"},fallbackRoute:{description:"Route to redirect to when access is denied",control:"text"},loadingComponent:{description:"Custom loading component",control:!1},errorComponent:{description:"Custom error component",control:!1},permissionDeniedComponent:{description:"Custom permission denied component",control:!1}}},u={args:{routes:c,currentPath:"/",fallbackRoute:"/unauthorized"}},h={args:{routes:c,currentPath:"/dashboard",fallbackRoute:"/unauthorized"}},p={args:{routes:c,currentPath:"/admin",fallbackRoute:"/unauthorized"}},x={decorators:[t=>e.jsx(w,{workspace:ve,user:je,permissions:Ne,children:e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsx(t,{})})})],args:{routes:c,currentPath:"/admin",fallbackRoute:"/unauthorized"}},g={args:{routes:c,currentPath:"/client",fallbackRoute:"/unauthorized"}},b={decorators:[t=>e.jsx(w,{workspace:ve,user:je,permissions:Ne,children:e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsx(t,{})})})],args:{routes:c,currentPath:"/client",fallbackRoute:"/unauthorized"}},f={args:{routes:c,currentPath:"/nonexistent",fallbackRoute:"/unauthorized"}},k={render:t=>e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsxs("div",{className:"flex items-center justify-center min-h-64",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"Loading workspace..."})]})}),args:{routes:c,currentPath:"/dashboard",fallbackRoute:"/unauthorized"}},y={render:t=>e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-64 p-6",children:[e.jsx("div",{className:"text-red-600 mb-4",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Failed to load workspace"}),e.jsx("p",{className:"text-gray-600 text-center",children:"There was an error loading the workspace data."})]})}),args:{routes:c,currentPath:"/dashboard",fallbackRoute:"/unauthorized"}},qe=()=>e.jsx("div",{className:"flex items-center justify-center min-h-64",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-pulse bg-amber-200 rounded-full h-16 w-16 mx-auto mb-4"}),e.jsx("p",{className:"text-amber-600 font-medium",children:"Custom Loading..."})]})}),Ue=({error:t})=>e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-64 p-6 bg-red-50",children:[e.jsx("div",{className:"text-red-500 mb-4",children:e.jsx("svg",{className:"w-16 h-16",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"text-xl font-bold text-red-900 mb-2",children:"Custom Error Handler"}),e.jsx("p",{className:"text-red-700 text-center",children:t.message})]}),v={args:{routes:c,currentPath:"/dashboard",fallbackRoute:"/unauthorized",loadingComponent:qe,errorComponent:Ue}},Ie=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Nested Route"}),e.jsx("p",{className:"text-gray-600",children:"This is a nested route example."})]}),Ve=[d("/",be,{exact:!0}),d("/parent",fe,{children:[d("/parent/child",Ie)]})],j={args:{routes:Ve,currentPath:"/parent/child",fallbackRoute:"/unauthorized"}},N={render:t=>{const[r,s]=ze.useState("/"),o=l=>{var m;s(l),(m=t.onRouteChange)==null||m.call(t,l)};return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsxs("div",{className:"bg-white border-b border-gray-200 p-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{onClick:()=>o("/"),className:`px-3 py-2 rounded-md text-sm font-medium ${r==="/"?"bg-amber-100 text-amber-800":"text-gray-600 hover:text-gray-900"}`,children:"Home"}),e.jsx("button",{onClick:()=>o("/dashboard"),className:`px-3 py-2 rounded-md text-sm font-medium ${r==="/dashboard"?"bg-amber-100 text-amber-800":"text-gray-600 hover:text-gray-900"}`,children:"Dashboard"}),e.jsx("button",{onClick:()=>o("/admin"),className:`px-3 py-2 rounded-md text-sm font-medium ${r==="/admin"?"bg-amber-100 text-amber-800":"text-gray-600 hover:text-gray-900"}`,children:"Admin"}),e.jsx("button",{onClick:()=>o("/client"),className:`px-3 py-2 rounded-md text-sm font-medium ${r==="/client"?"bg-amber-100 text-amber-800":"text-gray-600 hover:text-gray-900"}`,children:"Client Area"}),e.jsx("button",{onClick:()=>o("/settings"),className:`px-3 py-2 rounded-md text-sm font-medium ${r==="/settings"?"bg-amber-100 text-amber-800":"text-gray-600 hover:text-gray-900"}`,children:"Settings"})]}),e.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:["Current path: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:r})]})]}),e.jsx(ge,{...t,currentPath:r,onRouteChange:o})]})},args:{routes:c,fallbackRoute:"/unauthorized"}};var T,E,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/',
    fallbackRoute: '/unauthorized'
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,B,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var F,q,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/admin',
    fallbackRoute: '/unauthorized'
  }
}`,...(U=(q=p.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var I,V,G;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [Story => <WorkspaceContextProvider workspace={mockConsultantWorkspace} user={mockConsultantUser} permissions={mockConsultantPermissions}>
        <div className="min-h-screen bg-gray-50">
          <Story />
        </div>
      </WorkspaceContextProvider>],
  args: {
    routes: sampleRoutes,
    currentPath: '/admin',
    fallbackRoute: '/unauthorized'
  }
}`,...(G=(V=x.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var _,J,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/client',
    fallbackRoute: '/unauthorized'
  }
}`,...(O=(J=g.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var Y,K,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [Story => <WorkspaceContextProvider workspace={mockConsultantWorkspace} user={mockConsultantUser} permissions={mockConsultantPermissions}>
        <div className="min-h-screen bg-gray-50">
          <Story />
        </div>
      </WorkspaceContextProvider>],
  args: {
    routes: sampleRoutes,
    currentPath: '/client',
    fallbackRoute: '/unauthorized'
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/nonexistent',
    fallbackRoute: '/unauthorized'
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
        <span className="ml-2 text-gray-600">Loading workspace...</span>
      </div>
    </div>,
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-64 p-6">
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load workspace</h3>
        <p className="text-gray-600 text-center">There was an error loading the workspace data.</p>
      </div>
    </div>,
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized'
  }
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ce,ie,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    routes: sampleRoutes,
    currentPath: '/dashboard',
    fallbackRoute: '/unauthorized',
    loadingComponent: CustomLoading,
    errorComponent: CustomError
  }
}`,...(de=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,me,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    routes: nestedRoutes,
    currentPath: '/parent/child',
    fallbackRoute: '/unauthorized'
  }
}`,...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,pe,xe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => {
    const [currentPath, setCurrentPath] = React.useState('/');
    const handleRouteChange = (path: string) => {
      setCurrentPath(path);
      args.onRouteChange?.(path);
    };
    return <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex space-x-4">
            <button onClick={() => handleRouteChange('/')} className={\`px-3 py-2 rounded-md text-sm font-medium \${currentPath === '/' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:text-gray-900'}\`}>
              Home
            </button>
            <button onClick={() => handleRouteChange('/dashboard')} className={\`px-3 py-2 rounded-md text-sm font-medium \${currentPath === '/dashboard' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:text-gray-900'}\`}>
              Dashboard
            </button>
            <button onClick={() => handleRouteChange('/admin')} className={\`px-3 py-2 rounded-md text-sm font-medium \${currentPath === '/admin' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:text-gray-900'}\`}>
              Admin
            </button>
            <button onClick={() => handleRouteChange('/client')} className={\`px-3 py-2 rounded-md text-sm font-medium \${currentPath === '/client' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:text-gray-900'}\`}>
              Client Area
            </button>
            <button onClick={() => handleRouteChange('/settings')} className={\`px-3 py-2 rounded-md text-sm font-medium \${currentPath === '/settings' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:text-gray-900'}\`}>
              Settings
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Current path: <code className="bg-gray-100 px-2 py-1 rounded">{currentPath}</code>
          </div>
        </div>

        <WorkspaceRouter {...args} currentPath={currentPath} onRouteChange={handleRouteChange} />
      </div>;
  },
  args: {
    routes: sampleRoutes,
    fallbackRoute: '/unauthorized'
  }
}`,...(xe=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};const Ke=["Default","Dashboard","AdminAccess","AdminDenied","ClientWorkspace","ClientWorkspaceDenied","NotFound","LoadingState","ErrorState","CustomComponents","NestedRoutes","Interactive"];export{p as AdminAccess,x as AdminDenied,g as ClientWorkspace,b as ClientWorkspaceDenied,v as CustomComponents,h as Dashboard,u as Default,y as ErrorState,N as Interactive,k as LoadingState,j as NestedRoutes,f as NotFound,Ke as __namedExportsOrder,Ye as default};
