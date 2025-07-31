import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as o}from"./index-B2-qRKKC.js";import{c}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const S=({consultant:s,clients:j,activeWorkspaces:m,onClientSelect:A,onWorkspaceSelect:W,onNavigate:N,permissions:de=[],responsive:me=!0,analytics:l,className:pe})=>{const[ue,ge]=o.useState("dashboard"),[M,he]=o.useState(new Set(["clients"])),T=o.useCallback((t,n)=>{ge(n),N&&N(t)},[N]),ve=o.useCallback(t=>{he(n=>{const p=new Set(n);return p.has(t)?p.delete(t):p.add(t),p})},[]),be=o.useCallback(t=>{switch(t){case"active":return"bg-green-500";case"busy":return"bg-red-500";case"away":return"bg-yellow-500";case"offline":return"bg-gray-400";default:return"bg-gray-400"}},[]),xe=o.useCallback(t=>{switch(t){case"urgent":return"text-red-600 bg-red-100";case"high":return"text-orange-600 bg-orange-100";case"medium":return"text-yellow-600 bg-yellow-100";case"low":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},[]),ye=[{id:"main",title:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"dashboard",path:"/dashboard",description:"Overview and key metrics"},{id:"calendar",label:"Calendar",icon:"calendar",path:"/calendar",description:"Schedule and appointments",badge:3},{id:"tasks",label:"Tasks",icon:"check-square",path:"/tasks",description:"Action items and to-dos",badge:8}]},{id:"clients",title:"Client Management",expandable:!0,items:[{id:"clients-overview",label:"All Clients",icon:"users",path:"/clients",description:"Manage client relationships",badge:j.length},{id:"active-projects",label:"Active Projects",icon:"folder",path:"/projects/active",description:"Current project work",badge:m.length},{id:"proposals",label:"Proposals",icon:"file-text",path:"/proposals",description:"Pending and sent proposals",permission:"proposals"},{id:"contracts",label:"Contracts",icon:"file-signature",path:"/contracts",description:"Client agreements",permission:"contracts"}]},{id:"business",title:"Business Operations",expandable:!0,items:[{id:"billing",label:"Billing & Invoices",icon:"credit-card",path:"/billing",description:"Financial management",permission:"billing",badge:2},{id:"time-tracking",label:"Time Tracking",icon:"clock",path:"/time",description:"Log and manage time",permission:"time-tracking"},{id:"analytics",label:"Analytics",icon:"chart",path:"/analytics",description:"Performance insights",permission:"analytics"},{id:"reports",label:"Reports",icon:"bar-chart",path:"/reports",description:"Business reports",permission:"reports"}]},{id:"tools",title:"Tools & Resources",expandable:!0,items:[{id:"knowledge-base",label:"Knowledge Base",icon:"book",path:"/knowledge",description:"Resources and documentation"},{id:"templates",label:"Templates",icon:"layout",path:"/templates",description:"Reusable templates"},{id:"integrations",label:"Integrations",icon:"link",path:"/integrations",description:"Connected services",permission:"integrations"}]}].map(t=>({...t,items:t.items.filter(n=>!n.permission||de.includes(n.permission))})).filter(t=>t.items.length>0);return e.jsxs("nav",{className:c("flex flex-col h-full bg-blue-50 border-r border-blue-200 text-blue-900",me&&"lg:w-80","w-80",pe),"aria-label":"Consultant navigation",children:[e.jsx("div",{className:"p-6 border-b border-blue-200",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"relative",children:[s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,className:"w-12 h-12 rounded-full border-2 border-blue-300"}):e.jsx("div",{className:"w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center border-2 border-blue-300",children:e.jsx("span",{className:"text-lg font-semibold text-blue-700",children:s.name.charAt(0).toUpperCase()})}),e.jsx("div",{className:c("absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",be(s.status))})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-lg font-semibold text-blue-900 truncate",children:s.name}),e.jsx("p",{className:"text-sm text-blue-700 truncate",children:s.title}),e.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[s.specialties.slice(0,2).map(t=>e.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800",children:t},t)),s.specialties.length>2&&e.jsxs("span",{className:"text-xs text-blue-600",children:["+",s.specialties.length-2," more"]})]})]})]})}),l&&e.jsxs("div",{className:"p-4 border-b border-blue-200",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800 mb-3",children:"Quick Stats"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-white p-3 rounded-md border border-blue-200",children:[e.jsx("p",{className:"text-xs text-blue-600",children:"Active Clients"}),e.jsx("p",{className:"text-lg font-semibold text-blue-900",children:l.activeClients})]}),e.jsxs("div",{className:"bg-white p-3 rounded-md border border-blue-200",children:[e.jsx("p",{className:"text-xs text-blue-600",children:"This Month"}),e.jsxs("p",{className:"text-lg font-semibold text-blue-900",children:[l.hoursThisMonth,"h"]})]}),e.jsxs("div",{className:"bg-white p-3 rounded-md border border-blue-200",children:[e.jsx("p",{className:"text-xs text-blue-600",children:"Revenue"}),e.jsxs("p",{className:"text-lg font-semibold text-blue-900",children:["$",l.totalRevenue.toLocaleString()]})]}),e.jsxs("div",{className:"bg-white p-3 rounded-md border border-blue-200",children:[e.jsx("p",{className:"text-xs text-blue-600",children:"Satisfaction"}),e.jsxs("p",{className:"text-lg font-semibold text-blue-900",children:[l.clientSatisfaction,"%"]})]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-6",children:ye.map(t=>e.jsxs("div",{children:[t.expandable?e.jsxs("button",{onClick:()=>ve(t.id),className:"w-full flex items-center justify-between mb-3 text-sm font-medium text-blue-800 hover:text-blue-900",children:[e.jsx("span",{children:t.title}),e.jsx("span",{className:c("w-4 h-4 transition-transform duration-200",M.has(t.id)&&"transform rotate-90"),children:e.jsx("div",{className:"w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent"})})]}):e.jsx("h3",{className:"text-sm font-medium text-blue-800 mb-3",children:t.title}),(!t.expandable||M.has(t.id))&&e.jsx("div",{className:"space-y-1",children:t.items.map(n=>e.jsxs("button",{onClick:()=>T(n.path,n.id),className:c("w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200","hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",ue===n.id?"bg-blue-200 text-blue-900 font-medium":"text-blue-800 hover:text-blue-900"),"aria-label":n.label,children:[e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"flex-shrink-0 w-5 h-5 mt-0.5",children:e.jsx("div",{className:"w-5 h-5 bg-current opacity-60 rounded-sm"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium truncate",children:n.label}),e.jsx("p",{className:"text-xs opacity-75 truncate",children:n.description})]})]}),n.badge&&n.badge>0&&e.jsx("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ml-2",children:n.badge>99?"99+":n.badge})]},n.id))})]},t.id))}),j.length>0&&e.jsxs("div",{className:"border-t border-blue-200 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Recent Clients"}),e.jsx("button",{onClick:()=>T("/clients","clients-overview"),className:"text-xs text-blue-600 hover:text-blue-800",children:"View all"})]}),e.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:j.slice(0,4).map(t=>e.jsxs("button",{onClick:()=>A&&A(t),className:"w-full flex items-center space-x-3 p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200",children:[t.avatar?e.jsx("img",{src:t.avatar,alt:t.name,className:"w-8 h-8 rounded-full"}):e.jsx("div",{className:"w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-semibold text-blue-700",children:t.name.charAt(0).toUpperCase()})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-blue-900 truncate",children:t.name}),e.jsx("p",{className:"text-xs text-blue-600 truncate",children:t.company})]}),e.jsx("span",{className:c("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",xe(t.priority)),children:t.priority})]},t.id))})]}),m.length>0&&e.jsxs("div",{className:"border-t border-blue-200 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Active Workspaces"}),e.jsxs("span",{className:"text-xs text-blue-600",children:[m.length," active"]})]}),e.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:m.slice(0,3).map(t=>e.jsxs("button",{onClick:()=>W&&W(t),className:"w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-blue-100 transition-colors duration-200",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-blue-900 truncate",children:t.name}),e.jsxs("p",{className:"text-xs text-blue-600",children:[t.hoursLogged,"h logged"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"text-xs font-medium text-blue-900",children:["$",t.revenue.toLocaleString()]}),e.jsx("div",{className:c("w-2 h-2 rounded-full",t.status==="active"?"bg-green-500":t.status==="paused"?"bg-yellow-500":"bg-gray-400")})]})]},t.id))})]})]})};try{S.displayName="ConsultantNav",S.__docgenInfo={description:`ConsultantNav Component

A comprehensive navigation component designed specifically for consultant workspaces.
Features advanced functionality including client management, billing integration,
analytics, and time tracking with sophisticated permission-based access control.`,displayName:"ConsultantNav",props:{}}}catch{}const a={id:"consultant-1",name:"Dr. Sarah Wilson",email:"sarah.wilson@consultingfirm.com",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",title:"Senior Strategy Consultant",specialties:["Digital Transformation","Process Optimization","Change Management","Data Analytics"],status:"active"},i=[{id:"client-1",name:"John Smith",company:"Acme Corporation",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",status:"active",priority:"high",lastActivity:"2025-07-14T08:30:00Z"},{id:"client-2",name:"Emily Chen",company:"TechStart Inc.",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",status:"active",priority:"urgent",lastActivity:"2025-07-14T09:15:00Z"},{id:"client-3",name:"Michael Rodriguez",company:"Global Enterprises",status:"active",priority:"medium",lastActivity:"2025-07-13T16:45:00Z"},{id:"client-4",name:"Lisa Thompson",company:"Innovation Labs",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",status:"pending",priority:"low",lastActivity:"2025-07-12T14:20:00Z"},{id:"client-5",name:"David Park",company:"Future Systems",status:"active",priority:"high",lastActivity:"2025-07-14T07:00:00Z"}],r=[{id:"workspace-1",name:"Digital Transformation - Acme Corp",type:"Strategy Consulting",clientId:"client-1",status:"active",revenue:125e3,hoursLogged:240},{id:"workspace-2",name:"Process Optimization - TechStart",type:"Operations Consulting",clientId:"client-2",status:"active",revenue:85e3,hoursLogged:180},{id:"workspace-3",name:"Change Management - Global Ent.",type:"Organizational Development",clientId:"client-3",status:"paused",revenue:95e3,hoursLogged:160},{id:"workspace-4",name:"Data Analytics Setup - Innovation",type:"Technical Consulting",clientId:"client-4",status:"active",revenue:65e3,hoursLogged:120}],d={totalRevenue:37e4,activeClients:8,completedProjects:12,hoursThisMonth:156,revenueGrowth:23.5,clientSatisfaction:94},Ae={title:"Layouts/ConsultantNav",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`
The ConsultantNav component provides a comprehensive navigation experience designed specifically for consultant workspaces.
It features advanced functionality including client management, billing integration, analytics, and time tracking with sophisticated permission-based access control.

## Features

- **Advanced Client Management**: Comprehensive client relationship management with priority indicators
- **Business Analytics**: Real-time performance metrics and revenue tracking
- **Permission-Based Access**: Sophisticated role-based navigation with granular permissions
- **Workspace Management**: Active project tracking with revenue and time logging
- **Expandable Sections**: Organized navigation with collapsible sections for better organization
- **Quick Stats Dashboard**: At-a-glance business performance indicators
- **Recent Activity**: Quick access to recent clients and active workspaces

## Consultant Experience

The ConsultantNav is designed to provide consultants with:
- Comprehensive business overview and analytics
- Efficient client and project management
- Advanced billing and time tracking capabilities
- Performance insights and reporting tools
- Professional tools and resource access
- Streamlined workflow management

## Design Principles

- **Professional**: Clean, sophisticated interface that reflects consultant expertise
- **Comprehensive**: Full-featured navigation covering all business aspects
- **Efficient**: Quick access to frequently used features and information
- **Scalable**: Handles multiple clients and projects with ease
- **Data-Driven**: Emphasizes metrics and performance indicators
        `}}},argTypes:{responsive:{control:"boolean",description:"Whether the navigation should be responsive"},permissions:{control:"object",description:"Array of permissions for the consultant user"}},decorators:[s=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(s,{}),e.jsxs("div",{className:"flex-1 p-8 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Consultant Dashboard"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Welcome to your consultant workspace. Manage your clients, track performance, and access all your business tools from the navigation panel."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Client Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage relationships, track project progress, and maintain client communications."})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Business Analytics"}),e.jsx("p",{className:"text-gray-600",children:"Monitor performance metrics, revenue tracking, and business growth indicators."})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Project Workspaces"}),e.jsx("p",{className:"text-gray-600",children:"Access active projects, track time, and manage deliverables across all clients."})]})]})]})]})]},u={args:{consultant:a,clients:i,activeWorkspaces:r,permissions:["billing","analytics","reports","time-tracking","proposals","contracts","integrations"],responsive:!0,analytics:d}},g={args:{consultant:a,clients:i,activeWorkspaces:r,permissions:["billing","analytics","reports","time-tracking","proposals","contracts","integrations"],responsive:!0,analytics:d,onNavigate:s=>{console.log("Navigate to:",s),alert(`Navigating to: ${s}`)},onClientSelect:s=>{console.log("Client selected:",s),alert(`Selected client: ${s.name} from ${s.company}`)},onWorkspaceSelect:s=>{console.log("Workspace selected:",s),alert(`Selected workspace: ${s.name}`)}},parameters:{docs:{description:{story:"Full-featured consultant navigation with all permissions and interactive callbacks. Click on navigation items, clients, or workspaces to see the interactions."}}}},h={args:{consultant:{...a,status:"busy",name:"Dr. Michael Chen",title:"Lead Business Consultant"},clients:i.slice(0,3),activeWorkspaces:r.slice(0,2),permissions:["billing","analytics","time-tracking"],responsive:!0,analytics:{...d,hoursThisMonth:180,activeClients:6}},parameters:{docs:{description:{story:"Consultant with busy status, showing high activity levels and focused permissions."}}}},v={args:{consultant:{...a,name:"Jennifer Adams",title:"Junior Consultant",specialties:["Research","Analysis"]},clients:i.slice(0,2),activeWorkspaces:r.slice(0,1),permissions:["time-tracking"],responsive:!0,analytics:{totalRevenue:45e3,activeClients:2,completedProjects:3,hoursThisMonth:120,revenueGrowth:15.2,clientSatisfaction:88}},parameters:{docs:{description:{story:"Junior consultant with limited permissions, showing restricted navigation access."}}}},b={args:{consultant:{...a,name:"Alexandra Rodriguez",title:"Principal Consultant",specialties:["Strategic Planning","Executive Coaching","M&A Advisory","Digital Innovation"]},clients:i,activeWorkspaces:r,permissions:["billing","analytics","reports","time-tracking","proposals","contracts","integrations"],responsive:!0,analytics:{totalRevenue:85e4,activeClients:12,completedProjects:28,hoursThisMonth:165,revenueGrowth:45.8,clientSatisfaction:98}},parameters:{docs:{description:{story:"High-performing principal consultant with exceptional metrics and full access."}}}},x={args:{consultant:{...a,status:"away",name:"Robert Kim",title:"Senior Consultant"},clients:i.slice(0,3),activeWorkspaces:r.slice(0,2),permissions:["billing","analytics","time-tracking"],responsive:!0,analytics:d},parameters:{docs:{description:{story:"Consultant with away status, indicating temporary unavailability."}}}},y={args:{consultant:a,clients:i,activeWorkspaces:r,permissions:["billing","time-tracking"],responsive:!0},parameters:{docs:{description:{story:"Consultant navigation without analytics data, showing simplified interface."}}}},f={args:{consultant:{...a,name:"Maria Gonzalez",title:"Specialized Consultant",specialties:["Industry Expert"]},clients:[i[0]],activeWorkspaces:[r[0]],permissions:["billing","analytics","time-tracking"],responsive:!0,analytics:{totalRevenue:125e3,activeClients:1,completedProjects:2,hoursThisMonth:140,revenueGrowth:12.3,clientSatisfaction:96}},parameters:{docs:{description:{story:"Consultant working with a single client, showing focused workspace management."}}}},k={args:{consultant:{...a,status:"offline",name:"Thomas Wilson",title:"Consultant"},clients:i.slice(0,2),activeWorkspaces:r.slice(0,1),permissions:["time-tracking"],responsive:!0,analytics:{totalRevenue:18e4,activeClients:3,completedProjects:8,hoursThisMonth:95,revenueGrowth:8.7,clientSatisfaction:91}},parameters:{docs:{description:{story:"Consultant with offline status, showing reduced activity state."}}}},w={args:{consultant:{...a,name:"Dr. Patricia Lee",title:"Managing Consultant",specialties:["Portfolio Management","Team Leadership","Strategic Consulting"]},clients:[...i,{id:"client-6",name:"James Wilson",company:"Enterprise Solutions",status:"active",priority:"medium",lastActivity:"2025-07-14T06:30:00Z"},{id:"client-7",name:"Anna Martinez",company:"Growth Ventures",status:"active",priority:"high",lastActivity:"2025-07-13T18:45:00Z"}],activeWorkspaces:[...r,{id:"workspace-5",name:"Strategic Planning - Enterprise",type:"Strategy Consulting",clientId:"client-6",status:"active",revenue:11e4,hoursLogged:200}],permissions:["billing","analytics","reports","time-tracking","proposals","contracts"],responsive:!0,analytics:{totalRevenue:65e4,activeClients:15,completedProjects:35,hoursThisMonth:175,revenueGrowth:32.1,clientSatisfaction:95}},parameters:{docs:{description:{story:"Managing consultant with high client volume and multiple active workspaces."}}}},C={args:{consultant:a,clients:i.slice(0,3),activeWorkspaces:r.slice(0,2),permissions:["billing","analytics","time-tracking"],responsive:!0,analytics:d},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Consultant navigation optimized for mobile devices, showing responsive behavior."}}}};var P,R,D;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: mockAnalytics
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,E,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: mockAnalytics,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(\`Navigating to: \${path}\`);
    },
    onClientSelect: (client: Client) => {
      console.log('Client selected:', client);
      alert(\`Selected client: \${client.name} from \${client.company}\`);
    },
    onWorkspaceSelect: (workspace: Workspace) => {
      console.log('Workspace selected:', workspace);
      alert(\`Selected workspace: \${workspace.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured consultant navigation with all permissions and interactive callbacks. Click on navigation items, clients, or workspaces to see the interactions.'
      }
    }
  }
}`,...(z=(E=g.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var G,I,B;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      status: 'busy',
      name: 'Dr. Michael Chen',
      title: 'Lead Business Consultant'
    },
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: {
      ...mockAnalytics,
      hoursThisMonth: 180,
      activeClients: 6
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with busy status, showing high activity levels and focused permissions.'
      }
    }
  }
}`,...(B=(I=h.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,O,V;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Jennifer Adams',
      title: 'Junior Consultant',
      specialties: ['Research', 'Analysis']
    },
    clients: mockClients.slice(0, 2),
    activeWorkspaces: mockWorkspaces.slice(0, 1),
    permissions: ['time-tracking'],
    // Very limited permissions
    responsive: true,
    analytics: {
      totalRevenue: 45000,
      activeClients: 2,
      completedProjects: 3,
      hoursThisMonth: 120,
      revenueGrowth: 15.2,
      clientSatisfaction: 88
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Junior consultant with limited permissions, showing restricted navigation access.'
      }
    }
  }
}`,...(V=(O=v.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,$,J;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Alexandra Rodriguez',
      title: 'Principal Consultant',
      specialties: ['Strategic Planning', 'Executive Coaching', 'M&A Advisory', 'Digital Innovation']
    },
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts', 'integrations'],
    responsive: true,
    analytics: {
      totalRevenue: 850000,
      activeClients: 12,
      completedProjects: 28,
      hoursThisMonth: 165,
      revenueGrowth: 45.8,
      clientSatisfaction: 98
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'High-performing principal consultant with exceptional metrics and full access.'
      }
    }
  }
}`,...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Z,H,Q;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      status: 'away',
      name: 'Robert Kim',
      title: 'Senior Consultant'
    },
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: mockAnalytics
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with away status, indicating temporary unavailability.'
      }
    }
  }
}`,...(Q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var K,q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    consultant: mockConsultant,
    clients: mockClients,
    activeWorkspaces: mockWorkspaces,
    permissions: ['billing', 'time-tracking'],
    responsive: true
    // No analytics prop
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant navigation without analytics data, showing simplified interface.'
      }
    }
  }
}`,...(U=(q=y.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var X,Y,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Maria Gonzalez',
      title: 'Specialized Consultant',
      specialties: ['Industry Expert']
    },
    clients: [mockClients[0]],
    activeWorkspaces: [mockWorkspaces[0]],
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: {
      totalRevenue: 125000,
      activeClients: 1,
      completedProjects: 2,
      hoursThisMonth: 140,
      revenueGrowth: 12.3,
      clientSatisfaction: 96
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant working with a single client, showing focused workspace management.'
      }
    }
  }
}`,...(ee=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,se,ne;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      status: 'offline',
      name: 'Thomas Wilson',
      title: 'Consultant'
    },
    clients: mockClients.slice(0, 2),
    activeWorkspaces: mockWorkspaces.slice(0, 1),
    permissions: ['time-tracking'],
    responsive: true,
    analytics: {
      totalRevenue: 180000,
      activeClients: 3,
      completedProjects: 8,
      hoursThisMonth: 95,
      revenueGrowth: 8.7,
      clientSatisfaction: 91
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Consultant with offline status, showing reduced activity state.'
      }
    }
  }
}`,...(ne=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,ie,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    consultant: {
      ...mockConsultant,
      name: 'Dr. Patricia Lee',
      title: 'Managing Consultant',
      specialties: ['Portfolio Management', 'Team Leadership', 'Strategic Consulting']
    },
    clients: [...mockClients, {
      id: 'client-6',
      name: 'James Wilson',
      company: 'Enterprise Solutions',
      status: 'active',
      priority: 'medium',
      lastActivity: '2025-07-14T06:30:00Z'
    }, {
      id: 'client-7',
      name: 'Anna Martinez',
      company: 'Growth Ventures',
      status: 'active',
      priority: 'high',
      lastActivity: '2025-07-13T18:45:00Z'
    }],
    activeWorkspaces: [...mockWorkspaces, {
      id: 'workspace-5',
      name: 'Strategic Planning - Enterprise',
      type: 'Strategy Consulting',
      clientId: 'client-6',
      status: 'active',
      revenue: 110000,
      hoursLogged: 200
    }],
    permissions: ['billing', 'analytics', 'reports', 'time-tracking', 'proposals', 'contracts'],
    responsive: true,
    analytics: {
      totalRevenue: 650000,
      activeClients: 15,
      completedProjects: 35,
      hoursThisMonth: 175,
      revenueGrowth: 32.1,
      clientSatisfaction: 95
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Managing consultant with high client volume and multiple active workspaces.'
      }
    }
  }
}`,...(re=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,ce,le;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    consultant: mockConsultant,
    clients: mockClients.slice(0, 3),
    activeWorkspaces: mockWorkspaces.slice(0, 2),
    permissions: ['billing', 'analytics', 'time-tracking'],
    responsive: true,
    analytics: mockAnalytics
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Consultant navigation optimized for mobile devices, showing responsive behavior.'
      }
    }
  }
}`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const We=["Default","FullFeatured","BusyConsultant","LimitedPermissions","HighPerformer","AwayConsultant","WithoutAnalytics","SingleClient","OfflineConsultant","HighVolume","MobileView"];export{x as AwayConsultant,h as BusyConsultant,u as Default,g as FullFeatured,b as HighPerformer,w as HighVolume,v as LimitedPermissions,C as MobileView,k as OfflineConsultant,f as SingleClient,y as WithoutAnalytics,We as __namedExportsOrder,Ae as default};
