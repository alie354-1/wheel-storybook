import{j as n}from"./jsx-runtime-BdivIsZm.js";import{r as d}from"./vendor-CIaSNbmr.js";import{c as u}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./clsx-B-dksMZM.js";const A=({workspace:a,context:p="neutral",user:l,permissions:j=[],features:pe=[],onNavigate:N,onWorkspaceChange:ye,responsive:me=!0,collapsed:r=!1,className:ue})=>{var P,$;const[S,ge]=d.useState(new Set),m=d.useCallback(e=>e.filter(s=>!(s.permission&&!j.includes(s.permission)||s.workspaceContext&&s.workspaceContext!==p&&s.workspaceContext!=="neutral"||s.disabled)).map(s=>({...s,children:s.children?m(s.children):void 0})),[j,p]),he=d.useCallback(()=>{const e="transition-colors duration-200";switch(p){case"consultant":return`${e} bg-blue-50 border-blue-200 text-blue-900`;case"client":return`${e} bg-green-50 border-green-200 text-green-900`;case"admin":return`${e} bg-gray-50 border-gray-200 text-gray-900`;case"expert":return`${e} bg-purple-50 border-purple-200 text-purple-900`;case"tool-creator":return`${e} bg-orange-50 border-orange-200 text-orange-900`;case"founder":return`${e} bg-amber-50 border-amber-200 text-amber-900`;default:return`${e} bg-white border-gray-200 text-gray-900`}},[p]),E=d.useCallback(e=>{ge(s=>{const c=new Set(s);return c.has(e)?c.delete(e):c.add(e),c})},[]),F=d.useCallback(e=>{e.children&&e.children.length>0?E(e.id):e.path&&N&&N(e.path)},[N,E]),T=d.useCallback((e,s=0)=>{const c=e.children&&e.children.length>0,W=S.has(e.id),xe=c?m(e.children):[];return n.jsxs("div",{className:"w-full",children:[n.jsxs("button",{onClick:()=>F(e),className:u("w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200","hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2",s>0&&"ml-4 text-xs",e.active&&"bg-opacity-100 font-semibold",!e.active&&"hover:bg-gray-100",r&&s===0&&"justify-center px-2"),style:{paddingLeft:r?void 0:`${.75+s*1}rem`},"aria-expanded":c?W:void 0,"aria-label":e.label,children:[n.jsxs("div",{className:"flex items-center space-x-2",children:[e.icon&&n.jsx("span",{className:"flex-shrink-0 w-4 h-4","aria-hidden":"true",children:n.jsx("div",{className:"w-4 h-4 bg-current opacity-60 rounded-sm"})}),!r&&n.jsx("span",{className:"truncate",children:e.label})]}),!r&&n.jsxs("div",{className:"flex items-center space-x-1",children:[e.badge&&e.badge>0&&n.jsx("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full",children:e.badge>99?"99+":e.badge}),c&&n.jsx("span",{className:u("flex-shrink-0 w-4 h-4 transition-transform duration-200",W&&"transform rotate-90"),children:n.jsx("div",{className:"w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent"})})]})]}),c&&W&&!r&&n.jsx("div",{className:"mt-1 space-y-1",children:xe.map(fe=>T(fe,s+1))})]},e.id)},[S,m,F,r]),be=m(a.navigation),M=pe.filter(e=>e.enabled&&(!e.permission||j.includes(e.permission))&&(!e.workspaceContext||e.workspaceContext===p||e.workspaceContext==="neutral"));return n.jsxs("nav",{className:u("flex flex-col h-full border-r",he(),me&&"lg:w-64",r?"w-16":"w-64",ue),"aria-label":`${a.name} navigation`,children:[n.jsxs("div",{className:u("flex items-center justify-between p-4 border-b border-current border-opacity-20",r&&"justify-center px-2"),children:[!r&&n.jsxs("div",{className:"flex items-center space-x-3",children:[((P=a.branding)==null?void 0:P.logo)&&n.jsx("img",{src:a.branding.logo,alt:`${a.name} logo`,className:"w-8 h-8 rounded"}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("h2",{className:"text-sm font-semibold truncate",children:a.name}),n.jsx("p",{className:"text-xs opacity-75 capitalize",children:a.type})]})]}),(($=a.branding)==null?void 0:$.logo)&&r&&n.jsx("img",{src:a.branding.logo,alt:`${a.name} logo`,className:"w-8 h-8 rounded"})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:be.map(e=>T(e))}),M.length>0&&!r&&n.jsxs("div",{className:"border-t border-current border-opacity-20 p-2",children:[n.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide opacity-75 mb-2",children:"Features"}),n.jsx("div",{className:"space-y-1",children:M.map(e=>n.jsxs("div",{className:"flex items-center justify-between px-3 py-1 text-xs",children:[n.jsx("span",{className:"truncate",children:e.name}),n.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]},e.id))})]}),!r&&n.jsx("div",{className:"border-t border-current border-opacity-20 p-4",children:n.jsxs("div",{className:"flex items-center space-x-3",children:[l.avatar?n.jsx("img",{src:l.avatar,alt:l.name,className:"w-8 h-8 rounded-full"}):n.jsx("div",{className:"w-8 h-8 bg-current bg-opacity-20 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-xs font-semibold",children:l.name.charAt(0).toUpperCase()})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("p",{className:"text-sm font-medium truncate",children:l.name}),n.jsx("p",{className:"text-xs opacity-75 truncate",children:l.role})]})]})})]})};try{A.displayName="WorkspaceNav",A.__docgenInfo={description:`WorkspaceNav Component

A sophisticated navigation component that adapts to different workspace contexts,
providing context-aware navigation items, permission-based filtering, and
workspace-specific features.`,displayName:"WorkspaceNav",props:{}}}catch{}const o={id:"1",name:"Alexandra Cohen",email:"alexandra@thewheel.com",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",role:"Senior Consultant",permissions:["read","write","admin","billing","analytics","client-management"]},t=[{id:"analytics",name:"Advanced Analytics",enabled:!0,permission:"analytics",workspaceContext:"consultant"},{id:"billing",name:"Billing Management",enabled:!0,permission:"billing"},{id:"ai-assistant",name:"AI Assistant",enabled:!0},{id:"collaboration",name:"Team Collaboration",enabled:!0,workspaceContext:"neutral"}],ve=[{id:"dashboard",label:"Dashboard",icon:"dashboard",path:"/dashboard",active:!0},{id:"clients",label:"Clients",icon:"users",path:"/clients",badge:3,children:[{id:"active-clients",label:"Active Clients",path:"/clients/active",badge:12},{id:"pending-clients",label:"Pending Approval",path:"/clients/pending",badge:3},{id:"archived-clients",label:"Archived",path:"/clients/archived"}]},{id:"projects",label:"Projects",icon:"folder",path:"/projects",badge:8,children:[{id:"active-projects",label:"Active Projects",path:"/projects/active",badge:5},{id:"completed-projects",label:"Completed",path:"/projects/completed",badge:3}]},{id:"billing",label:"Billing & Invoices",icon:"credit-card",path:"/billing",permission:"billing",workspaceContext:"consultant"},{id:"analytics",label:"Analytics",icon:"chart",path:"/analytics",permission:"analytics",workspaceContext:"consultant"},{id:"settings",label:"Settings",icon:"settings",path:"/settings",children:[{id:"profile",label:"Profile",path:"/settings/profile"},{id:"workspace",label:"Workspace",path:"/settings/workspace",permission:"admin"},{id:"integrations",label:"Integrations",path:"/settings/integrations"}]}],we=[{id:"overview",label:"Project Overview",icon:"home",path:"/overview",active:!0},{id:"documents",label:"Documents",icon:"file",path:"/documents",badge:2},{id:"communications",label:"Messages",icon:"message",path:"/messages",badge:5},{id:"timeline",label:"Project Timeline",icon:"calendar",path:"/timeline"},{id:"billing",label:"Billing",icon:"credit-card",path:"/billing",workspaceContext:"client"}],ke=[{id:"system",label:"System Overview",icon:"monitor",path:"/system",active:!0},{id:"users",label:"User Management",icon:"users",path:"/users",permission:"admin",children:[{id:"consultants",label:"Consultants",path:"/users/consultants",badge:25},{id:"clients",label:"Clients",path:"/users/clients",badge:150},{id:"admins",label:"Administrators",path:"/users/admins",badge:5}]},{id:"workspaces",label:"Workspaces",icon:"building",path:"/workspaces",permission:"admin"},{id:"analytics",label:"System Analytics",icon:"chart",path:"/analytics",permission:"admin"},{id:"settings",label:"System Settings",icon:"settings",path:"/settings",permission:"admin"}],i={consultant:{id:"ws-consultant",name:"Consultant Workspace",type:"consultant",permissions:["read","write","billing","analytics","client-management"],features:t,branding:{primaryColor:"#3B82F6",secondaryColor:"#1E40AF",logo:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop",theme:"light"},navigation:ve},client:{id:"ws-client",name:"Client Portal",type:"client",permissions:["read"],features:t.filter(a=>!a.workspaceContext||a.workspaceContext==="client"||a.workspaceContext==="neutral"),branding:{primaryColor:"#10B981",secondaryColor:"#047857",logo:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop",theme:"light"},navigation:we},admin:{id:"ws-admin",name:"Admin Dashboard",type:"admin",permissions:["read","write","admin"],features:t,branding:{primaryColor:"#6B7280",secondaryColor:"#374151",logo:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop",theme:"light"},navigation:ke}},Se={title:"Layouts/WorkspaceNav",component:A,parameters:{layout:"fullscreen",docs:{description:{component:`
The WorkspaceNav component provides sophisticated navigation that adapts to different workspace contexts.
It supports permission-based filtering, workspace-specific theming, and hierarchical navigation structures.

## Features

- **Workspace Context Awareness**: Adapts styling and navigation items based on workspace type
- **Permission-Based Filtering**: Shows/hides navigation items based on user permissions
- **Hierarchical Navigation**: Supports nested navigation items with expand/collapse functionality
- **Feature Toggles**: Displays enabled features for the current workspace
- **Responsive Design**: Adapts to different screen sizes and supports collapsed state
- **Accessibility**: Full keyboard navigation and screen reader support

## Workspace Types

- **Consultant**: Blue theme with advanced features like billing and analytics
- **Client**: Green theme with simplified navigation focused on project communication
- **Admin**: Gray theme with system management and user administration features
- **Expert**: Purple theme with specialized tools and expert features
- **Tool Creator**: Orange theme with development and creation tools
- **Founder**: Amber theme with executive dashboard and high-level insights
        `}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"The workspace context that determines theming and available features"},collapsed:{control:"boolean",description:"Whether the navigation is in collapsed state"},responsive:{control:"boolean",description:"Whether the navigation should be responsive"}},decorators:[a=>n.jsxs("div",{className:"h-screen flex",children:[n.jsx(a,{}),n.jsxs("div",{className:"flex-1 p-8 bg-gray-50",children:[n.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Main Content Area"}),n.jsx("p",{className:"text-gray-600",children:"This is the main content area. The WorkspaceNav component is displayed on the left side. Try different workspace contexts to see how the navigation adapts."})]})]})]},g={args:{workspace:i.consultant,context:"consultant",user:o,permissions:["read","write","billing","analytics","client-management"],features:t,collapsed:!1,responsive:!0}},h={args:{workspace:i.consultant,context:"consultant",user:o,permissions:["read","write","billing","analytics","client-management"],features:t,collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Consultant workspace with blue theming and advanced features like billing and analytics."}}}},b={args:{workspace:i.client,context:"client",user:{...o,name:"John Client",role:"Project Manager",permissions:["read"]},permissions:["read"],features:t.filter(a=>!a.workspaceContext||a.workspaceContext==="client"||a.workspaceContext==="neutral"),collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Client workspace with green theming and simplified navigation focused on project communication."}}}},x={args:{workspace:i.admin,context:"admin",user:{...o,name:"Sarah Admin",role:"System Administrator",permissions:["read","write","admin"]},permissions:["read","write","admin"],features:t,collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Admin workspace with gray theming and system management features."}}}},f={args:{workspace:i.consultant,context:"consultant",user:o,permissions:["read","write","billing","analytics","client-management"],features:t,collapsed:!0,responsive:!0},parameters:{docs:{description:{story:"Navigation in collapsed state, showing only icons and essential information."}}}},v={args:{workspace:i.consultant,context:"consultant",user:{...o,name:"Junior Consultant",role:"Junior Consultant",permissions:["read"]},permissions:["read"],features:t.filter(a=>!a.permission),collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Navigation with limited permissions, showing how items are filtered based on user access."}}}},w={args:{workspace:{...i.consultant,name:"Expert Hub",type:"expert",navigation:[{id:"expertise",label:"My Expertise",icon:"star",path:"/expertise",active:!0},{id:"consultations",label:"Consultations",icon:"users",path:"/consultations",badge:5},{id:"knowledge-base",label:"Knowledge Base",icon:"book",path:"/knowledge"},{id:"earnings",label:"Earnings",icon:"credit-card",path:"/earnings"}]},context:"expert",user:{...o,name:"Dr. Expert",role:"Subject Matter Expert"},permissions:["read","write","expert"],features:t,collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Expert workspace with purple theming and specialized tools for subject matter experts."}}}},k={args:{workspace:{...i.consultant,name:"Creator Studio",type:"tool-creator",navigation:[{id:"tools",label:"My Tools",icon:"wrench",path:"/tools",active:!0,badge:12},{id:"marketplace",label:"Marketplace",icon:"store",path:"/marketplace"},{id:"analytics",label:"Tool Analytics",icon:"chart",path:"/analytics"},{id:"revenue",label:"Revenue",icon:"credit-card",path:"/revenue"}]},context:"tool-creator",user:{...o,name:"Alex Creator",role:"Tool Developer"},permissions:["read","write","create"],features:t,collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Tool Creator workspace with orange theming and development tools for creating marketplace tools."}}}},y={args:{workspace:{...i.consultant,name:"Executive Dashboard",type:"founder",navigation:[{id:"overview",label:"Executive Overview",icon:"dashboard",path:"/overview",active:!0},{id:"metrics",label:"Key Metrics",icon:"chart",path:"/metrics"},{id:"growth",label:"Growth Analytics",icon:"trending-up",path:"/growth"},{id:"strategy",label:"Strategic Planning",icon:"target",path:"/strategy"}]},context:"founder",user:{...o,name:"CEO Founder",role:"Chief Executive Officer"},permissions:["read","write","admin","founder"],features:t,collapsed:!1,responsive:!0},parameters:{docs:{description:{story:"Founder workspace with amber theming and executive dashboard for high-level insights."}}}},C={args:{workspace:i.consultant,context:"consultant",user:o,permissions:["read","write","billing","analytics","client-management"],features:t,collapsed:!1,responsive:!0,onNavigate:a=>{console.log("Navigate to:",a),alert(`Navigating to: ${a}`)},onWorkspaceChange:a=>{console.log("Workspace changed:",a),alert(`Workspace changed to: ${a.name}`)}},parameters:{docs:{description:{story:"Interactive navigation with callback functions. Click navigation items to see the callbacks in action."}}}};var D,U,I;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  }
}`,...(I=(U=g.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var B,O,_;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant workspace with blue theming and advanced features like billing and analytics.'
      }
    }
  }
}`,...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var J,z,G;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.client,
    context: 'client',
    user: {
      ...mockUser,
      name: 'John Client',
      role: 'Project Manager',
      permissions: ['read']
    },
    permissions: ['read'],
    features: mockFeatures.filter(f => !f.workspaceContext || f.workspaceContext === 'client' || f.workspaceContext === 'neutral'),
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Client workspace with green theming and simplified navigation focused on project communication.'
      }
    }
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,L,R;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.admin,
    context: 'admin',
    user: {
      ...mockUser,
      name: 'Sarah Admin',
      role: 'System Administrator',
      permissions: ['read', 'write', 'admin']
    },
    permissions: ['read', 'write', 'admin'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Admin workspace with gray theming and system management features.'
      }
    }
  }
}`,...(R=(L=x.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,q,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: true,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation in collapsed state, showing only icons and essential information.'
      }
    }
  }
}`,...(Q=(q=f.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var V,X,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: {
      ...mockUser,
      name: 'Junior Consultant',
      role: 'Junior Consultant',
      permissions: ['read']
    },
    permissions: ['read'],
    features: mockFeatures.filter(f => !f.permission),
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with limited permissions, showing how items are filtered based on user access.'
      }
    }
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Expert Hub',
      type: 'expert',
      navigation: [{
        id: 'expertise',
        label: 'My Expertise',
        icon: 'star',
        path: '/expertise',
        active: true
      }, {
        id: 'consultations',
        label: 'Consultations',
        icon: 'users',
        path: '/consultations',
        badge: 5
      }, {
        id: 'knowledge-base',
        label: 'Knowledge Base',
        icon: 'book',
        path: '/knowledge'
      }, {
        id: 'earnings',
        label: 'Earnings',
        icon: 'credit-card',
        path: '/earnings'
      }]
    },
    context: 'expert',
    user: {
      ...mockUser,
      name: 'Dr. Expert',
      role: 'Subject Matter Expert'
    },
    permissions: ['read', 'write', 'expert'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Expert workspace with purple theming and specialized tools for subject matter experts.'
      }
    }
  }
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,se,te;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Creator Studio',
      type: 'tool-creator',
      navigation: [{
        id: 'tools',
        label: 'My Tools',
        icon: 'wrench',
        path: '/tools',
        active: true,
        badge: 12
      }, {
        id: 'marketplace',
        label: 'Marketplace',
        icon: 'store',
        path: '/marketplace'
      }, {
        id: 'analytics',
        label: 'Tool Analytics',
        icon: 'chart',
        path: '/analytics'
      }, {
        id: 'revenue',
        label: 'Revenue',
        icon: 'credit-card',
        path: '/revenue'
      }]
    },
    context: 'tool-creator',
    user: {
      ...mockUser,
      name: 'Alex Creator',
      role: 'Tool Developer'
    },
    permissions: ['read', 'write', 'create'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tool Creator workspace with orange theming and development tools for creating marketplace tools.'
      }
    }
  }
}`,...(te=(se=k.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,oe,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockWorkspaces.consultant,
      name: 'Executive Dashboard',
      type: 'founder',
      navigation: [{
        id: 'overview',
        label: 'Executive Overview',
        icon: 'dashboard',
        path: '/overview',
        active: true
      }, {
        id: 'metrics',
        label: 'Key Metrics',
        icon: 'chart',
        path: '/metrics'
      }, {
        id: 'growth',
        label: 'Growth Analytics',
        icon: 'trending-up',
        path: '/growth'
      }, {
        id: 'strategy',
        label: 'Strategic Planning',
        icon: 'target',
        path: '/strategy'
      }]
    },
    context: 'founder',
    user: {
      ...mockUser,
      name: 'CEO Founder',
      role: 'Chief Executive Officer'
    },
    permissions: ['read', 'write', 'admin', 'founder'],
    features: mockFeatures,
    collapsed: false,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Founder workspace with amber theming and executive dashboard for high-level insights.'
      }
    }
  }
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,de;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspaces.consultant,
    context: 'consultant',
    user: mockUser,
    permissions: ['read', 'write', 'billing', 'analytics', 'client-management'],
    features: mockFeatures,
    collapsed: false,
    responsive: true,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(\`Navigating to: \${path}\`);
    },
    onWorkspaceChange: (workspace: Workspace) => {
      console.log('Workspace changed:', workspace);
      alert(\`Workspace changed to: \${workspace.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive navigation with callback functions. Click navigation items to see the callbacks in action.'
      }
    }
  }
}`,...(de=(le=C.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Ee=["Default","ConsultantWorkspace","ClientWorkspace","AdminWorkspace","CollapsedNavigation","LimitedPermissions","ExpertWorkspace","ToolCreatorWorkspace","FounderWorkspace","InteractiveNavigation"];export{x as AdminWorkspace,b as ClientWorkspace,f as CollapsedNavigation,h as ConsultantWorkspace,g as Default,w as ExpertWorkspace,y as FounderWorkspace,C as InteractiveNavigation,v as LimitedPermissions,k as ToolCreatorWorkspace,Ee as __namedExportsOrder,Se as default};
