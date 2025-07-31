import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as i}from"./index-B2-qRKKC.js";import{c as g}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./addressinput-CNH7vJB0.js";import"./alert-BhGMCdzy.js";import"./Avatar-FRCDbBKZ.js";import"./badge-CP7oh9kV.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import"./button-Cqm7tkEM.js";import"./card-M3SK2Azw.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-DL67fCAe.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-DaYnNXmZ.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import{I as y}from"./icon-DEu4D-T-.js";import"./image-BkzfWbNq.js";import"./input-7rc8uvfk.js";import"./label-Bc71zScC.js";import"./loadingoverlay-epOQCsNk.js";import"./Logo-BCeQuN96.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-DtokpCiZ.js";import"./phoneinput-DnhyWeTn.js";import"./progress-DFy8PWGV.js";import"./progressindicator-CPvhbYMc.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-uaNC3sqX.js";import"./select-oq9sW1QX.js";import"./separator-fURmX4DE.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-DUmiO_og.js";import"./spinner-C4_lq1M4.js";import"./StatusDot-I44fDEUy.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-BtDtwm2h.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-DG-PATwk.js";import"./timerangeinput-D-eCRmyp.js";import"./toast-Byd1oQcU.js";import"./verticalslider-DXRhhGVf.js";import"./workspaceicon-B8JYiyw8.js";import"./container-BV66bbjT.js";import"./flex-B2tn7VQA.js";import"./grid-Dukaz8Hf.js";import"./panel-DJq8D5Bo.js";import"./stack-6K505iai.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";const z=({context:s="neutral",items:n,currentPath:x,onItemClick:p,workspaces:v=[],currentWorkspace:l,onWorkspaceChange:f,user:u,bottomSheet:Ne=!1,swipeGestures:b=!0,isOpen:N=!1,onToggle:a,className:ye})=>{const[F,ke]=i.useState(new Set),[A,_]=i.useState(!1),[U,je]=i.useState(null),[G,L]=i.useState(null),R=i.useCallback(r=>{ke(c=>{const o=new Set(c);return o.has(r)?o.delete(r):o.add(r),o})},[]),X=i.useCallback((r,c)=>{if(c.preventDefault(),!r.disabled){if(r.children&&r.children.length>0){R(r.id);return}p==null||p(r),a==null||a(!1)}},[p,R,a]),H=i.useCallback(r=>r.active?!0:x&&r.path?x===r.path||x.startsWith(r.path+"/"):!1,[x]),we=i.useCallback(r=>{f==null||f(r),_(!1)},[f]),I=50,We=i.useCallback(r=>{b&&(L(null),je(r.targetTouches[0].clientX))},[b]),Se=i.useCallback(r=>{b&&L(r.targetTouches[0].clientX)},[b]),Ce=i.useCallback(()=>{if(!b||!U||!G)return;const r=U-G,c=r>I,o=r<-I;c&&N?a==null||a(!1):o&&!N&&(a==null||a(!0))},[b,U,G,N,a,I]),Me=i.useCallback(()=>{a==null||a(!1)},[a]);i.useEffect(()=>(N?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[N]);const q=i.useCallback((r,c=0)=>{const o=H(r),D=F.has(r.id),E=r.children&&r.children.length>0;return e.jsxs("div",{className:"navigation-item",children:[e.jsxs("button",{onClick:B=>X(r,B),disabled:r.disabled,className:g("w-full flex items-center gap-4 px-4 py-3 text-left transition-colors duration-200","hover:bg-gray-100 dark:hover:bg-gray-800","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset","text-base font-medium",{"bg-blue-50 text-blue-700 border-r-4 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300":o,"text-gray-700 dark:text-gray-300":!o&&!r.disabled,"text-gray-400 dark:text-gray-600 cursor-not-allowed":r.disabled,"pl-8":c>0,"pl-12":c>1},{"border-r-blue-500":s==="consultant"&&o,"border-r-green-500":s==="client"&&o,"border-r-purple-500":s==="admin"&&o}),"aria-expanded":E?D:void 0,"aria-current":o?"page":void 0,children:[r.icon&&e.jsx(y,{name:r.icon,size:"md",className:g("flex-shrink-0",{"text-blue-700 dark:text-blue-300":o,"text-gray-500 dark:text-gray-400":!o})}),e.jsx("span",{className:"flex-1 truncate",children:r.label}),r.badge&&r.badge>0&&e.jsx("span",{className:g("inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full",{"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":o,"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200":!o}),children:r.badge>99?"99+":r.badge}),E&&e.jsx(y,{name:D?"ChevronDown":"ChevronRight",size:"sm",className:"flex-shrink-0 text-gray-400"})]}),E&&D&&e.jsx("div",{className:"border-l-2 border-gray-200 dark:border-gray-700 ml-6",children:r.children.map(B=>q(B,c+1))})]},r.id)},[F,X,H,s]);return N?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:Me,"aria-hidden":"true"}),e.jsxs("div",{className:g("fixed inset-y-0 left-0 z-50 w-80 max-w-sm bg-white dark:bg-gray-900","transform transition-transform duration-300 ease-in-out","flex flex-col shadow-xl",{"bottom-0 top-auto rounded-t-xl":Ne},{"border-r-2 border-r-blue-200 dark:border-r-blue-800":s==="consultant","border-r-2 border-r-green-200 dark:border-r-green-800":s==="client","border-r-2 border-r-purple-200 dark:border-r-purple-800":s==="admin"},ye),onTouchStart:We,onTouchMove:Se,onTouchEnd:Ce,role:"navigation","aria-label":"Mobile navigation",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:g("w-3 h-3 rounded-full",{"bg-blue-500":s==="consultant","bg-green-500":s==="client","bg-purple-500":s==="admin","bg-gray-500":s==="neutral"})}),e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-gray-100",children:(l==null?void 0:l.name)||"Navigation"})]}),e.jsx("button",{onClick:()=>a==null?void 0:a(!1),className:"p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Close navigation",children:e.jsx(y,{name:"X",size:"sm",className:"text-gray-500 dark:text-gray-400"})})]}),(u||v.length>0)&&e.jsxs("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:[u&&e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center",children:u.avatar?e.jsx("img",{src:u.avatar,alt:u.name,className:"w-8 h-8 rounded-full"}):e.jsx(y,{name:"User",size:"sm",className:"text-gray-600 dark:text-gray-300"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:u.name}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:u.role})]})]}),v.length>0&&e.jsxs("button",{onClick:()=>_(!A),className:"w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Switch Workspace"}),e.jsx(y,{name:A?"ChevronUp":"ChevronDown",size:"sm",className:"text-gray-400"})]}),A&&v.length>0&&e.jsx("div",{className:"mt-2 space-y-1",children:v.map(r=>e.jsxs("button",{onClick:()=>we(r),className:g("w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors","hover:bg-gray-100 dark:hover:bg-gray-800","focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300":(l==null?void 0:l.id)===r.id,"text-gray-700 dark:text-gray-300":(l==null?void 0:l.id)!==r.id}),children:[e.jsx("div",{className:g("w-2 h-2 rounded-full",{"bg-blue-500":r.type==="consultant","bg-green-500":r.type==="client","bg-purple-500":r.type==="admin"})}),e.jsx("span",{className:"text-sm font-medium truncate",children:r.name})]},r.id))})]}),e.jsx("div",{className:"flex-1 overflow-y-auto py-2",children:n.map(r=>q(r))}),e.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-700 p-4",children:[e.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:[s.charAt(0).toUpperCase()+s.slice(1)," Workspace"]}),b&&e.jsx("div",{className:"text-xs text-gray-400 dark:text-gray-500 text-center mt-1",children:"Swipe left to close"})]})]})]}):null},is={title:"Layouts/MobileNav",component:z,parameters:{layout:"fullscreen",docs:{description:{component:"A mobile navigation component with workspace context awareness, swipe gestures, and bottom sheet support."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","neutral"],description:"Workspace context for styling and behavior"},bottomSheet:{control:"boolean",description:"Display as bottom sheet instead of side panel"},swipeGestures:{control:"boolean",description:"Enable swipe gestures for navigation"},isOpen:{control:"boolean",description:"Whether the mobile navigation is open"},currentPath:{control:"text",description:"Current active path for highlighting navigation items"}}},d={id:"1",name:"John Doe",email:"john@example.com",role:"Senior Consultant",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"},t=[{id:"1",name:"Acme Corp",type:"consultant",permissions:["view_clients","view_billing","view_reports"]},{id:"2",name:"Tech Startup",type:"client",permissions:["view_projects"]},{id:"3",name:"Admin Panel",type:"admin",permissions:["manage_all"]}],h=[{id:"dashboard",label:"Dashboard",icon:"LayoutDashboard",path:"/dashboard"},{id:"projects",label:"Projects",icon:"FolderOpen",path:"/projects",badge:3,children:[{id:"active-projects",label:"Active Projects",icon:"Play",path:"/projects/active",badge:2},{id:"completed-projects",label:"Completed",icon:"CheckCircle",path:"/projects/completed"}]},{id:"clients",label:"Clients",icon:"Users",path:"/clients",badge:12},{id:"billing",label:"Billing",icon:"CreditCard",path:"/billing",badge:5},{id:"reports",label:"Reports",icon:"BarChart3",path:"/reports",children:[{id:"financial-reports",label:"Financial",icon:"DollarSign",path:"/reports/financial"},{id:"project-reports",label:"Project Analytics",icon:"TrendingUp",path:"/reports/projects"}]},{id:"settings",label:"Settings",icon:"Settings",path:"/settings"}],fe=[{id:"overview",label:"Overview",icon:"Home",path:"/overview"},{id:"my-projects",label:"My Projects",icon:"FolderOpen",path:"/my-projects",badge:2},{id:"documents",label:"Documents",icon:"FileText",path:"/documents",children:[{id:"contracts",label:"Contracts",icon:"FileSignature",path:"/documents/contracts"},{id:"invoices",label:"Invoices",icon:"Receipt",path:"/documents/invoices",badge:1}]},{id:"messages",label:"Messages",icon:"MessageSquare",path:"/messages",badge:3}],m=({children:s,...n})=>{const[x,p]=i.useState(n.isOpen||!1),[v,l]=i.useState(n.currentWorkspace||t[0]);return e.jsxs("div",{className:"h-screen bg-gray-50 relative",children:[e.jsx("div",{className:"p-4",children:e.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),"Open Mobile Nav"]})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Mobile Navigation Demo"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Click the button above to open the mobile navigation. The navigation supports:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"Touch-friendly interface optimized for mobile devices"}),e.jsx("li",{children:"Swipe gestures for easy navigation"}),e.jsx("li",{children:"Workspace switching capabilities"}),e.jsx("li",{children:"Hierarchical navigation with expandable sections"}),e.jsx("li",{children:"Badge indicators for notifications and counts"}),e.jsx("li",{children:"User profile integration"})]})]}),s,e.jsx(z,{...n,isOpen:x,onToggle:p,currentWorkspace:v,onWorkspaceChange:l,onItemClick:f=>{console.log("Navigation item clicked:",f),p(!1)}})]})},k={args:{context:"neutral",items:h,currentPath:"/dashboard",user:d,workspaces:t,currentWorkspace:t[0],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{})})},j={args:{context:"consultant",items:h,currentPath:"/clients",user:d,workspaces:t,currentWorkspace:t[0],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-blue-900 mb-2",children:"Consultant Workspace"}),e.jsx("p",{className:"text-blue-700",children:"Full access to client management, billing, and reporting features with blue accent colors."})]})})})},w={args:{context:"client",items:fe,currentPath:"/my-projects",user:{...d,role:"Project Manager"},workspaces:[t[1]],currentWorkspace:t[1],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-green-900 mb-2",children:"Client Workspace"}),e.jsx("p",{className:"text-green-700",children:"Simplified navigation focused on project management and communication with green accent colors."})]})})})},W={args:{context:"admin",items:h,currentPath:"/settings",user:{...d,role:"System Administrator"},workspaces:t,currentWorkspace:t[2],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-purple-900 mb-2",children:"Admin Workspace"}),e.jsx("p",{className:"text-purple-700",children:"Administrative interface with full system access and purple accent colors."})]})})})},S={args:{context:"neutral",items:h,currentPath:"/projects",user:d,workspaces:t,currentWorkspace:t[0],bottomSheet:!0,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-yellow-900 mb-2",children:"Bottom Sheet Mode"}),e.jsx("p",{className:"text-yellow-700",children:"The navigation appears as a bottom sheet with rounded top corners, perfect for thumb-friendly navigation."})]})})})},C={args:{context:"neutral",items:h,currentPath:"/billing",user:d,workspaces:t,currentWorkspace:t[0],bottomSheet:!1,swipeGestures:!1,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Swipe Gestures"}),e.jsx("p",{className:"text-gray-700",children:"Swipe gestures are disabled. Navigation can only be closed using the X button or backdrop click."})]})})})},M={args:{context:"neutral",items:h,currentPath:"/reports",workspaces:t,currentWorkspace:t[0],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-blue-900 mb-2",children:"No User Profile"}),e.jsx("p",{className:"text-blue-700",children:"Navigation without user profile information, showing only workspace switching capabilities."})]})})})},P={args:{context:"client",items:fe,currentPath:"/overview",user:d,workspaces:[t[1]],currentWorkspace:t[1],bottomSheet:!1,swipeGestures:!0,isOpen:!1},render:s=>e.jsx(m,{...s,children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-green-900 mb-2",children:"Single Workspace"}),e.jsx("p",{className:"text-green-700",children:"When only one workspace is available, the workspace switcher is not shown."})]})})})},O={args:{context:"neutral",items:h,currentPath:"/dashboard",user:d,workspaces:t,currentWorkspace:t[0],bottomSheet:!1,swipeGestures:!0,isOpen:!0},render:s=>e.jsxs("div",{className:"h-screen bg-gray-50 relative",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Always Open Mobile Nav"}),e.jsx("p",{className:"text-gray-600",children:"This story shows the mobile navigation in an always-open state for easier inspection and testing."})]}),e.jsx(z,{...s,onItemClick:n=>console.log("Navigation item clicked:",n),onWorkspaceChange:n=>console.log("Workspace changed:",n),onToggle:n=>console.log("Navigation toggled:",n)})]})};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div />
    </MobileNavWrapper>
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,Y,Z;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    context: 'consultant',
    items: sampleNavigationItems,
    currentPath: '/clients',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Consultant Workspace</h2>
          <p className="text-blue-700">
            Full access to client management, billing, and reporting features with blue accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,T,ee;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/my-projects',
    user: {
      ...sampleUser,
      role: 'Project Manager'
    },
    workspaces: [sampleWorkspaces[1]],
    currentWorkspace: sampleWorkspaces[1],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Client Workspace</h2>
          <p className="text-green-700">
            Simplified navigation focused on project management and communication with green accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(ee=(T=w.parameters)==null?void 0:T.docs)==null?void 0:ee.source}}};var re,se,te;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    context: 'admin',
    items: sampleNavigationItems,
    currentPath: '/settings',
    user: {
      ...sampleUser,
      role: 'System Administrator'
    },
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[2],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-purple-900 mb-2">Admin Workspace</h2>
          <p className="text-purple-700">
            Administrative interface with full system access and purple accent colors.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(te=(se=W.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,oe,ie;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/projects',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: true,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">Bottom Sheet Mode</h2>
          <p className="text-yellow-700">
            The navigation appears as a bottom sheet with rounded top corners, perfect for thumb-friendly navigation.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,le,ce;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/billing',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: false,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">No Swipe Gestures</h2>
          <p className="text-gray-700">
            Swipe gestures are disabled. Navigation can only be closed using the X button or backdrop click.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,de,me;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/reports',
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">No User Profile</h2>
          <p className="text-blue-700">
            Navigation without user profile information, showing only workspace switching capabilities.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(me=(de=M.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,be,ge;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/overview',
    user: sampleUser,
    workspaces: [sampleWorkspaces[1]],
    currentWorkspace: sampleWorkspaces[1],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: false
  },
  render: args => <MobileNavWrapper {...args}>
      <div className="p-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Single Workspace</h2>
          <p className="text-green-700">
            When only one workspace is available, the workspace switcher is not shown.
          </p>
        </div>
      </div>
    </MobileNavWrapper>
}`,...(ge=(be=P.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,xe,ve;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    user: sampleUser,
    workspaces: sampleWorkspaces,
    currentWorkspace: sampleWorkspaces[0],
    bottomSheet: false,
    swipeGestures: true,
    isOpen: true
  },
  render: (args: MobileNavProps) => <div className="h-screen bg-gray-50 relative">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Always Open Mobile Nav</h1>
        <p className="text-gray-600">
          This story shows the mobile navigation in an always-open state for easier inspection and testing.
        </p>
      </div>

      <MobileNav {...args} onItemClick={item => console.log('Navigation item clicked:', item)} onWorkspaceChange={workspace => console.log('Workspace changed:', workspace)} onToggle={open => console.log('Navigation toggled:', open)} />
    </div>
}`,...(ve=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const ns=["Default","ConsultantWorkspace","ClientWorkspace","AdminWorkspace","BottomSheet","WithoutSwipeGestures","WithoutUser","SingleWorkspace","AlwaysOpen"];export{W as AdminWorkspace,O as AlwaysOpen,S as BottomSheet,w as ClientWorkspace,j as ConsultantWorkspace,k as Default,P as SingleWorkspace,C as WithoutSwipeGestures,M as WithoutUser,ns as __namedExportsOrder,is as default};
