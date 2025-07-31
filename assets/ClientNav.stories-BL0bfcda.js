import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as c}from"./index-B2-qRKKC.js";import{c as a}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const S=({client:n,projects:l,currentProject:ae,onProjectChange:C,onNavigate:P,permissions:ce=[],responsive:le=!0,notifications:d=[],className:de})=>{const[me,pe]=c.useState("overview"),k=d.filter(t=>!t.read).length,i=ae||l[0],m=c.useCallback((t,p)=>{pe(p),P&&P(t)},[P]),ge=c.useCallback(t=>{C&&C(t)},[C]),ue=c.useCallback(t=>{switch(t){case"active":return"text-green-600 bg-green-100";case"completed":return"text-blue-600 bg-blue-100";case"on-hold":return"text-yellow-600 bg-yellow-100";case"cancelled":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},[]),he=c.useCallback(t=>{switch(t){case"urgent":return"text-red-600";case"high":return"text-orange-600";case"medium":return"text-yellow-600";case"low":return"text-green-600";default:return"text-gray-600"}},[]),fe=[{id:"overview",label:"Project Overview",icon:"home",path:"/overview",description:"View project status and updates"},{id:"documents",label:"Documents",icon:"file",path:"/documents",description:"Access project files and deliverables",badge:i?Math.floor(Math.random()*10)+1:0},{id:"communications",label:"Messages",icon:"message",path:"/messages",description:"Communicate with your consultant",badge:k},{id:"timeline",label:"Timeline",icon:"calendar",path:"/timeline",description:"View project milestones and deadlines"},{id:"billing",label:"Billing",icon:"credit-card",path:"/billing",description:"View invoices and payment history",permission:"billing"},{id:"feedback",label:"Feedback",icon:"star",path:"/feedback",description:"Provide feedback and reviews"}].filter(t=>!t.permission||ce.includes(t.permission));return e.jsxs("nav",{className:a("flex flex-col h-full bg-green-50 border-r border-green-200 text-green-900",le&&"lg:w-80","w-80",de),"aria-label":"Client navigation",children:[e.jsx("div",{className:"p-6 border-b border-green-200",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[n.avatar?e.jsx("img",{src:n.avatar,alt:n.name,className:"w-12 h-12 rounded-full border-2 border-green-300"}):e.jsx("div",{className:"w-12 h-12 bg-green-200 rounded-full flex items-center justify-center border-2 border-green-300",children:e.jsx("span",{className:"text-lg font-semibold text-green-700",children:n.name.charAt(0).toUpperCase()})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-lg font-semibold text-green-900 truncate",children:n.name}),e.jsx("p",{className:"text-sm text-green-700 truncate",children:n.company}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx("div",{className:a("w-2 h-2 rounded-full mr-2",n.status==="active"?"bg-green-500":n.status==="pending"?"bg-yellow-500":"bg-gray-400")}),e.jsx("span",{className:"text-xs text-green-600 capitalize",children:n.status})]})]})]})}),l.length>0&&e.jsxs("div",{className:"p-4 border-b border-green-200",children:[e.jsx("label",{className:"block text-sm font-medium text-green-800 mb-2",children:"Current Project"}),e.jsx("select",{value:(i==null?void 0:i.id)||"",onChange:t=>{const p=l.find(je=>je.id===t.target.value);p&&ge(p)},className:"w-full px-3 py-2 text-sm border border-green-300 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",children:l.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))}),i&&e.jsxs("div",{className:"mt-3 p-3 bg-white rounded-md border border-green-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:a("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",ue(i.status)),children:i.status.replace("-"," ")}),e.jsxs("span",{className:a("text-xs font-medium",he(i.priority)),children:[i.priority," priority"]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-green-700 mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[i.progress,"%"]})]}),e.jsx("div",{className:"w-full bg-green-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-600 h-2 rounded-full transition-all duration-300",style:{width:`${i.progress}%`}})})]}),i.dueDate&&e.jsxs("p",{className:"text-xs text-green-600",children:["Due: ",new Date(i.dueDate).toLocaleDateString()]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:fe.map(t=>e.jsxs("button",{onClick:()=>m(t.path,t.id),className:a("w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200","hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",me===t.id?"bg-green-200 text-green-900 font-medium":"text-green-800 hover:text-green-900"),"aria-label":t.label,children:[e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"flex-shrink-0 w-5 h-5 mt-0.5",children:e.jsx("div",{className:"w-5 h-5 bg-current opacity-60 rounded-sm"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium truncate",children:t.label}),e.jsx("p",{className:"text-xs opacity-75 truncate",children:t.description})]})]}),t.badge&&t.badge>0&&e.jsx("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ml-2",children:t.badge>99?"99+":t.badge})]},t.id))}),e.jsxs("div",{className:"border-t border-green-200 p-4",children:[e.jsx("h3",{className:"text-sm font-medium text-green-800 mb-3",children:"Quick Actions"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>m("/support","support"),className:"w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200",children:[e.jsx("div",{className:"w-4 h-4 bg-current opacity-60 rounded-sm"}),e.jsx("span",{children:"Contact Support"})]}),e.jsxs("button",{onClick:()=>m("/help","help"),className:"w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-100 rounded-md transition-colors duration-200",children:[e.jsx("div",{className:"w-4 h-4 bg-current opacity-60 rounded-sm"}),e.jsx("span",{children:"Help Center"})]})]})]}),d.length>0&&e.jsxs("div",{className:"border-t border-green-200 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"text-sm font-medium text-green-800",children:"Recent Updates"}),k>0&&e.jsx("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full",children:k})]}),e.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:d.slice(0,3).map(t=>e.jsxs("div",{className:a("p-2 rounded-md text-xs",t.read?"bg-green-100 text-green-700":"bg-white text-green-800 border border-green-200"),children:[e.jsx("p",{className:"font-medium truncate",children:t.title}),e.jsx("p",{className:"opacity-75 truncate",children:t.message})]},t.id))}),d.length>3&&e.jsx("button",{onClick:()=>m("/notifications","notifications"),className:"w-full mt-2 text-xs text-green-600 hover:text-green-800 text-center",children:"View all notifications"})]})]})};try{S.displayName="ClientNav",S.__docgenInfo={description:`ClientNav Component

A simplified navigation component designed specifically for client workspaces.
Focuses on project communication, document access, and essential client features
with limited permission requirements.`,displayName:"ClientNav",props:{}}}catch{}const r={id:"client-1",name:"John Smith",email:"john.smith@acmecorp.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",company:"Acme Corporation",status:"active"},s=[{id:"project-1",name:"Digital Transformation Initiative",description:"Modernizing legacy systems and processes",status:"active",progress:75,dueDate:"2025-09-15",priority:"high"},{id:"project-2",name:"Marketing Automation Setup",description:"Implementing automated marketing workflows",status:"active",progress:45,dueDate:"2025-08-30",priority:"medium"},{id:"project-3",name:"Website Redesign",description:"Complete overhaul of company website",status:"completed",progress:100,dueDate:"2025-06-01",priority:"low"}],o=[{id:"notif-1",title:"New Document Available",message:"Project requirements document has been uploaded",type:"info",read:!1,timestamp:"2025-07-14T09:30:00Z"},{id:"notif-2",title:"Meeting Scheduled",message:"Weekly check-in scheduled for tomorrow at 2 PM",type:"info",read:!1,timestamp:"2025-07-14T08:15:00Z"},{id:"notif-3",title:"Invoice Generated",message:"Monthly invoice for July is now available",type:"success",read:!0,timestamp:"2025-07-13T16:45:00Z"},{id:"notif-4",title:"Milestone Completed",message:"Phase 2 of your project has been completed",type:"success",read:!1,timestamp:"2025-07-12T14:20:00Z"},{id:"notif-5",title:"Action Required",message:"Please review and approve the latest deliverables",type:"warning",read:!1,timestamp:"2025-07-11T11:30:00Z"}],Pe={title:"Layouts/ClientNav",component:S,parameters:{layout:"fullscreen",docs:{description:{component:`
The ClientNav component provides a simplified, client-focused navigation experience designed specifically for client workspaces.
It emphasizes project communication, document access, and essential client features with an intuitive, easy-to-use interface.

## Features

- **Project-Focused Design**: Centers around active projects with clear status indicators
- **Simplified Navigation**: Streamlined menu items focused on client needs
- **Communication Priority**: Emphasizes messaging and collaboration features
- **Progress Tracking**: Visual progress indicators for active projects
- **Notification Management**: Built-in notification system for important updates
- **Quick Actions**: Easy access to support and help resources
- **Permission-Aware**: Respects client permission levels and shows appropriate features

## Client Experience

The ClientNav is designed to provide clients with:
- Clear project status and progress visibility
- Easy access to project documents and communications
- Streamlined billing and invoice access
- Direct support and help channels
- Notification management for staying updated

## Design Principles

- **Simplicity**: Clean, uncluttered interface that's easy to navigate
- **Clarity**: Clear visual hierarchy and status indicators
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsiveness**: Adapts to different screen sizes while maintaining usability
        `}}},argTypes:{responsive:{control:"boolean",description:"Whether the navigation should be responsive"},permissions:{control:"object",description:"Array of permissions for the client user"}},decorators:[n=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(n,{}),e.jsxs("div",{className:"flex-1 p-8 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Client Portal"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Welcome to your project portal. Use the navigation on the left to access your project information, documents, and communicate with your consultant team."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Project Status"}),e.jsx("p",{className:"text-gray-600",children:"View real-time updates on your project progress and milestones."})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Documents"}),e.jsx("p",{className:"text-gray-600",children:"Access all project deliverables, reports, and shared documents."})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Communication"}),e.jsx("p",{className:"text-gray-600",children:"Stay connected with your consultant team through integrated messaging."})]})]})]})]})]},g={args:{client:r,projects:s,currentProject:s[0],permissions:["read"],responsive:!0,notifications:o}},u={args:{client:r,projects:s,currentProject:s[0],permissions:["read","billing"],responsive:!0,notifications:o,onNavigate:n=>{console.log("Navigate to:",n),alert(`Navigating to: ${n}`)},onProjectChange:n=>{console.log("Project changed:",n),alert(`Switched to project: ${n.name}`)}},parameters:{docs:{description:{story:"Active client with billing permissions, showing the full navigation including billing access."}}}},h={args:{client:r,projects:[s[0]],currentProject:s[0],permissions:["read"],responsive:!0,notifications:o.slice(0,2)},parameters:{docs:{description:{story:"Client with a single active project, showing simplified project selection."}}}},f={args:{client:r,projects:[s[2]],currentProject:s[2],permissions:["read","billing"],responsive:!0,notifications:[{id:"completion-notif",title:"Project Completed",message:"Your website redesign project has been successfully completed",type:"success",read:!1,timestamp:"2025-07-14T10:00:00Z"}]},parameters:{docs:{description:{story:"Client viewing a completed project with success notifications."}}}},j={args:{client:{...r,name:"Jane Pending",status:"pending",company:"Startup Inc."},projects:[{...s[0],name:"Initial Consultation",status:"on-hold",progress:25,priority:"medium"}],permissions:["read"],responsive:!0,notifications:[{id:"pending-notif",title:"Account Activation Pending",message:"Your account is being reviewed. You will receive full access soon.",type:"warning",read:!1,timestamp:"2025-07-14T09:00:00Z"}]},parameters:{docs:{description:{story:"Client with pending status, showing limited access and activation notifications."}}}},v={args:{client:r,projects:s,currentProject:s[1],permissions:["read","billing"],responsive:!0,notifications:[]},parameters:{docs:{description:{story:"Client navigation without any notifications, showing clean interface."}}}},x={args:{client:r,projects:[{id:"urgent-project",name:"Critical System Recovery",description:"Emergency system restoration and data recovery",status:"active",progress:60,dueDate:"2025-07-20",priority:"urgent"}],permissions:["read","billing"],responsive:!0,notifications:[{id:"urgent-notif",title:"Urgent: Action Required",message:"Critical system recovery requires your immediate attention",type:"error",read:!1,timestamp:"2025-07-14T09:45:00Z"},{id:"update-notif",title:"Progress Update",message:"System recovery is 60% complete, on track for deadline",type:"info",read:!1,timestamp:"2025-07-14T08:30:00Z"}]},parameters:{docs:{description:{story:"Client with an urgent priority project, showing high-priority styling and notifications."}}}},b={args:{client:{...r,name:"Sarah Manager",company:"Enterprise Solutions Ltd."},projects:s.filter(n=>n.status==="active"),currentProject:s[0],permissions:["read","billing"],responsive:!0,notifications:o},parameters:{docs:{description:{story:"Client managing multiple active projects with full notification system."}}}},y={args:{client:{...r,name:"Basic User",company:"Small Business Co."},projects:[s[0]],currentProject:s[0],permissions:[],responsive:!0,notifications:o.slice(0,2)},parameters:{docs:{description:{story:"Client with minimal permissions, showing basic navigation without billing access."}}}},w={args:{client:r,projects:s,currentProject:s[0],permissions:["read","billing"],responsive:!0,notifications:o,onNavigate:n=>{console.log("Navigate to:",n),alert(`Navigating to: ${n}`)},onProjectChange:n=>{console.log("Project changed:",n),alert(`Switched to project: ${n.name}`)}},parameters:{docs:{description:{story:"Interactive client navigation with callback functions. Click navigation items and change projects to see the callbacks in action."}}}},N={args:{client:r,projects:s,currentProject:s[0],permissions:["read","billing"],responsive:!0,notifications:o.slice(0,3)},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Client navigation optimized for mobile devices, showing responsive behavior."}}}};var A,D,T;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read'],
    responsive: true,
    notifications: mockNotifications
  }
}`,...(T=(D=g.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,M,Z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      alert(\`Navigating to: \${path}\`);
    },
    onProjectChange: (project: Project) => {
      console.log('Project changed:', project);
      alert(\`Switched to project: \${project.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Active client with billing permissions, showing the full navigation including billing access.'
      }
    }
  }
}`,...(Z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var E,U,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: [mockProjects[0]],
    currentProject: mockProjects[0],
    permissions: ['read'],
    responsive: true,
    notifications: mockNotifications.slice(0, 2)
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with a single active project, showing simplified project selection.'
      }
    }
  }
}`,...(R=(U=h.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var V,_,$;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: [mockProjects[2]],
    // Completed project
    currentProject: mockProjects[2],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: [{
      id: 'completion-notif',
      title: 'Project Completed',
      message: 'Your website redesign project has been successfully completed',
      type: 'success',
      read: false,
      timestamp: '2025-07-14T10:00:00Z'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Client viewing a completed project with success notifications.'
      }
    }
  }
}`,...($=(_=f.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var B,q,z;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    client: {
      ...mockClient,
      name: 'Jane Pending',
      status: 'pending',
      company: 'Startup Inc.'
    },
    projects: [{
      ...mockProjects[0],
      name: 'Initial Consultation',
      status: 'on-hold',
      progress: 25,
      priority: 'medium'
    }],
    permissions: ['read'],
    responsive: true,
    notifications: [{
      id: 'pending-notif',
      title: 'Account Activation Pending',
      message: 'Your account is being reviewed. You will receive full access soon.',
      type: 'warning',
      read: false,
      timestamp: '2025-07-14T09:00:00Z'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with pending status, showing limited access and activation notifications.'
      }
    }
  }
}`,...(z=(q=j.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var L,W,Y;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[1],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Client navigation without any notifications, showing clean interface.'
      }
    }
  }
}`,...(Y=(W=v.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var F,J,O;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: [{
      id: 'urgent-project',
      name: 'Critical System Recovery',
      description: 'Emergency system restoration and data recovery',
      status: 'active',
      progress: 60,
      dueDate: '2025-07-20',
      priority: 'urgent'
    }],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: [{
      id: 'urgent-notif',
      title: 'Urgent: Action Required',
      message: 'Critical system recovery requires your immediate attention',
      type: 'error',
      read: false,
      timestamp: '2025-07-14T09:45:00Z'
    }, {
      id: 'update-notif',
      title: 'Progress Update',
      message: 'System recovery is 60% complete, on track for deadline',
      type: 'info',
      read: false,
      timestamp: '2025-07-14T08:30:00Z'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with an urgent priority project, showing high-priority styling and notifications.'
      }
    }
  }
}`,...(O=(J=x.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var Q,G,H;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    client: {
      ...mockClient,
      name: 'Sarah Manager',
      company: 'Enterprise Solutions Ltd.'
    },
    projects: mockProjects.filter(p => p.status === 'active'),
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications
  },
  parameters: {
    docs: {
      description: {
        story: 'Client managing multiple active projects with full notification system.'
      }
    }
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,X,ee;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    client: {
      ...mockClient,
      name: 'Basic User',
      company: 'Small Business Co.'
    },
    projects: [mockProjects[0]],
    currentProject: mockProjects[0],
    permissions: [],
    // No special permissions
    responsive: true,
    notifications: mockNotifications.slice(0, 2)
  },
  parameters: {
    docs: {
      description: {
        story: 'Client with minimal permissions, showing basic navigation without billing access.'
      }
    }
  }
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ne,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications,
    onNavigate: (path: string) => {
      console.log('Navigate to:', path);
      // In a real app, this would handle routing
      alert(\`Navigating to: \${path}\`);
    },
    onProjectChange: (project: Project) => {
      console.log('Project changed:', project);
      alert(\`Switched to project: \${project.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive client navigation with callback functions. Click navigation items and change projects to see the callbacks in action.'
      }
    }
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,oe;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    client: mockClient,
    projects: mockProjects,
    currentProject: mockProjects[0],
    permissions: ['read', 'billing'],
    responsive: true,
    notifications: mockNotifications.slice(0, 3)
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Client navigation optimized for mobile devices, showing responsive behavior.'
      }
    }
  }
}`,...(oe=(re=N.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const ke=["Default","ActiveClientWithBilling","SingleProject","CompletedProject","PendingClient","NoNotifications","UrgentProject","MultipleActiveProjects","LimitedPermissions","InteractiveNavigation","MobileView"];export{u as ActiveClientWithBilling,f as CompletedProject,g as Default,w as InteractiveNavigation,y as LimitedPermissions,N as MobileView,b as MultipleActiveProjects,v as NoNotifications,j as PendingClient,h as SingleProject,x as UrgentProject,ke as __namedExportsOrder,Pe as default};
