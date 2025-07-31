import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as o}from"./index-B2-qRKKC.js";import{c}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./addressinput-CNH7vJB0.js";import"./alert-B5XaLlhU.js";import"./Avatar-FRCDbBKZ.js";import"./badge-B5L8fRVo.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import"./button-C_OMcIil.js";import"./card-C_YySC7Y.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-B6l8j5w8.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-DO7zfnYw.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import{I as g}from"./icon-BEoQwoSy.js";import"./image-CPrvrfgb.js";import"./input-C_PKqGnl.js";import"./label-Bc71zScC.js";import"./loadingoverlay-epOQCsNk.js";import"./Logo-BCeQuN96.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-7bMG1qci.js";import"./phoneinput-C5CtNr0n.js";import"./progress-DFy8PWGV.js";import"./progressindicator-CPvhbYMc.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-uaNC3sqX.js";import"./select-Bg6t_rxL.js";import"./separator-fURmX4DE.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-DUmiO_og.js";import"./spinner-C4_lq1M4.js";import"./StatusDot-I44fDEUy.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-DUuIy5cK.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-qaQY4XKS.js";import"./timerangeinput-Cf2bu7dY.js";import"./toast-ju6Iad-C.js";import"./verticalslider-DXRhhGVf.js";import"./workspaceicon-B8JYiyw8.js";import"./container-BV66bbjT.js";import"./flex-B2tn7VQA.js";import"./grid-Dukaz8Hf.js";import"./panel-DJq8D5Bo.js";import"./stack-6K505iai.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";const l=({context:a="neutral",items:ne,currentPath:d,onItemClick:p,collapsible:ce=!0,defaultCollapsed:de=!1,onCollapseChange:m,permissions:C=[],responsive:P=!0,className:pe})=>{const[i,S]=o.useState(de),[A,me]=o.useState(new Set),ge=o.useCallback(()=>{const s=!i;S(s),m==null||m(s)},[i,m]),L=o.useCallback(s=>{me(r=>{const t=new Set(r);return t.has(s)?t.delete(s):t.add(s),t})},[]),W=o.useCallback(s=>s.filter(r=>!(r.permission&&!C.includes(r.permission)||r.workspaceContext&&r.workspaceContext!==a)).map(r=>({...r,children:r.children?W(r.children):void 0})),[C,a]),he=W(ne),F=o.useCallback((s,r)=>{if(r.preventDefault(),!s.disabled){if(s.children&&s.children.length>0){L(s.id);return}p==null||p(s)}},[p,L]),I=o.useCallback(s=>s.active?!0:d&&s.path?d===s.path||d.startsWith(s.path+"/"):!1,[d]),T=o.useCallback((s,r=0)=>{const t=I(s),j=A.has(s.id),k=s.children&&s.children.length>0;return e.jsxs("div",{className:"navigation-item",children:[e.jsxs("button",{onClick:_=>F(s,_),disabled:s.disabled,className:c("w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200","hover:bg-gray-100 dark:hover:bg-gray-800","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",{"bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300":t,"text-gray-700 dark:text-gray-300":!t&&!s.disabled,"text-gray-400 dark:text-gray-600 cursor-not-allowed":s.disabled,"pl-6":r>0,"pl-9":r>1},{"border-l-4 border-l-blue-500":a==="consultant"&&t,"border-l-4 border-l-green-500":a==="client"&&t,"border-l-4 border-l-purple-500":a==="admin"&&t}),"aria-expanded":k?j:void 0,"aria-current":t?"page":void 0,children:[s.icon&&!i&&e.jsx(g,{name:s.icon,size:"sm",className:c("flex-shrink-0",{"text-blue-700 dark:text-blue-300":t,"text-gray-500 dark:text-gray-400":!t})}),i&&s.icon&&e.jsx(g,{name:s.icon,size:"sm",className:c("flex-shrink-0 mx-auto",{"text-blue-700 dark:text-blue-300":t,"text-gray-500 dark:text-gray-400":!t})}),!i&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-1 truncate",children:s.label}),s.badge&&s.badge>0&&e.jsx("span",{className:c("inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full",{"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":t,"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200":!t}),children:s.badge>99?"99+":s.badge}),k&&e.jsx(g,{name:j?"ChevronDown":"ChevronRight",size:"sm",className:"flex-shrink-0 text-gray-400"})]})]}),k&&j&&!i&&e.jsx("div",{className:"ml-3 border-l border-gray-200 dark:border-gray-700",children:s.children.map(_=>T(_,r+1))})]},s.id)},[i,A,F,I,a]);return o.useEffect(()=>{if(!P)return;const s=()=>{window.innerWidth<768&&S(!0)};return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[P]),e.jsxs("nav",{className:c("flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700","transition-all duration-300 ease-in-out",{"w-64":!i,"w-16":i},{"border-r-blue-200 dark:border-r-blue-800":a==="consultant","border-r-green-200 dark:border-r-green-800":a==="client","border-r-purple-200 dark:border-r-purple-800":a==="admin"},pe),role:"navigation","aria-label":"Side navigation",children:[ce&&e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700",children:[!i&&e.jsx("h2",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",children:"Navigation"}),e.jsx("button",{onClick:ge,className:c("p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800","focus:outline-none focus:ring-2 focus:ring-blue-500",{"mx-auto":i}),"aria-label":i?"Expand navigation":"Collapse navigation",children:e.jsx(g,{name:i?"ChevronRight":"ChevronLeft",size:"sm",className:"text-gray-500 dark:text-gray-400"})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto py-2",children:he.map(s=>T(s))}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 p-3",children:i?e.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-400 mx-auto"}):e.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:[a.charAt(0).toUpperCase()+a.slice(1)," Workspace"]})})]})},Js={title:"Layouts/SideNavigation",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A collapsible side navigation component with workspace context awareness, permission-based filtering, and hierarchical navigation support."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","neutral"],description:"Workspace context for styling and behavior"},collapsible:{control:"boolean",description:"Whether the navigation can be collapsed"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state"},responsive:{control:"boolean",description:"Enable responsive behavior"},permissions:{control:"object",description:"Array of user permissions for filtering navigation items"},currentPath:{control:"text",description:"Current active path for highlighting navigation items"}}},n=[{id:"dashboard",label:"Dashboard",icon:"LayoutDashboard",path:"/dashboard"},{id:"projects",label:"Projects",icon:"FolderOpen",path:"/projects",badge:3,children:[{id:"active-projects",label:"Active Projects",icon:"Play",path:"/projects/active",badge:2},{id:"completed-projects",label:"Completed",icon:"CheckCircle",path:"/projects/completed"},{id:"archived-projects",label:"Archived",icon:"Archive",path:"/projects/archived"}]},{id:"clients",label:"Clients",icon:"Users",path:"/clients",permission:"view_clients",workspaceContext:"consultant"},{id:"billing",label:"Billing",icon:"CreditCard",path:"/billing",permission:"view_billing",badge:5},{id:"reports",label:"Reports",icon:"BarChart3",path:"/reports",permission:"view_reports",children:[{id:"financial-reports",label:"Financial",icon:"DollarSign",path:"/reports/financial",permission:"view_financial_reports"},{id:"project-reports",label:"Project Analytics",icon:"TrendingUp",path:"/reports/projects"}]},{id:"settings",label:"Settings",icon:"Settings",path:"/settings",children:[{id:"profile-settings",label:"Profile",icon:"User",path:"/settings/profile"},{id:"workspace-settings",label:"Workspace",icon:"Building",path:"/settings/workspace",permission:"manage_workspace"},{id:"integrations",label:"Integrations",icon:"Plug",path:"/settings/integrations",permission:"manage_integrations"}]},{id:"help",label:"Help & Support",icon:"HelpCircle",path:"/help"}],ve=[{id:"overview",label:"Overview",icon:"Home",path:"/overview"},{id:"my-projects",label:"My Projects",icon:"FolderOpen",path:"/my-projects",badge:2},{id:"documents",label:"Documents",icon:"FileText",path:"/documents",children:[{id:"contracts",label:"Contracts",icon:"FileSignature",path:"/documents/contracts"},{id:"invoices",label:"Invoices",icon:"Receipt",path:"/documents/invoices",badge:1}]},{id:"messages",label:"Messages",icon:"MessageSquare",path:"/messages",badge:3},{id:"profile",label:"Profile",icon:"User",path:"/profile"}],h={args:{context:"neutral",items:n,currentPath:"/dashboard",permissions:["view_clients","view_billing","view_reports"],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Main Content Area"}),e.jsx("p",{className:"text-gray-600",children:"This is the main content area. The side navigation is fully functional with collapsible sections, permission-based filtering, and workspace context awareness."}),e.jsxs("div",{className:"mt-4 p-4 bg-white rounded-lg shadow",children:[e.jsxs("h2",{className:"text-lg font-semibold mb-2",children:["Current Path: ",a.currentPath]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Click on navigation items to see the active state changes."})]})]})]})},v={args:{context:"consultant",items:n,currentPath:"/clients",permissions:["view_clients","view_billing","view_reports","view_financial_reports","manage_workspace"],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-blue-900 mb-4",children:"Consultant Workspace"}),e.jsx("p",{className:"text-gray-600",children:"Consultant workspace with full permissions and blue accent colors. Notice the workspace-specific styling and available navigation items."})]})]})},u={args:{context:"client",items:ve,currentPath:"/my-projects",permissions:[],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-green-900 mb-4",children:"Client Workspace"}),e.jsx("p",{className:"text-gray-600",children:"Client workspace with simplified navigation and green accent colors. Limited to client-relevant features and information."})]})]})},b={args:{context:"admin",items:n,currentPath:"/settings/workspace",permissions:["view_clients","view_billing","view_reports","view_financial_reports","manage_workspace","manage_integrations"],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-purple-900 mb-4",children:"Admin Workspace"}),e.jsx("p",{className:"text-gray-600",children:"Admin workspace with full permissions and purple accent colors. Access to all administrative features and settings."})]})]})},x={args:{context:"neutral",items:n,currentPath:"/projects/active",permissions:["view_clients","view_billing","view_reports"],collapsible:!0,defaultCollapsed:!0,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Collapsed Navigation"}),e.jsx("p",{className:"text-gray-600",children:"The navigation starts in collapsed mode, showing only icons. Click the chevron button to expand it."})]})]})},f={args:{context:"neutral",items:n,currentPath:"/dashboard",permissions:["view_billing"],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Limited Permissions"}),e.jsx("p",{className:"text-gray-600",children:"This example shows how navigation items are filtered based on user permissions. Only items without permission requirements or with 'view_billing' permission are shown."}),e.jsxs("div",{className:"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:[e.jsx("h3",{className:"text-sm font-semibold text-yellow-800",children:"Current Permissions:"}),e.jsx("p",{className:"text-sm text-yellow-700",children:"view_billing"})]})]})]})},N={args:{context:"neutral",items:n,currentPath:"/billing",permissions:["view_clients","view_billing","view_reports"],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Navigation with Badges"}),e.jsx("p",{className:"text-gray-600",children:"Notice the badge indicators on various navigation items showing counts for notifications, pending items, or other relevant metrics."})]})]})},w={args:{context:"neutral",items:n,currentPath:"/reports/projects",permissions:["view_clients","view_billing","view_reports"],collapsible:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Non-Collapsible Navigation"}),e.jsx("p",{className:"text-gray-600",children:"This navigation cannot be collapsed and always shows the full menu. Notice there's no collapse toggle button in the header."})]})]})},y={args:{context:"neutral",items:[{id:"level1",label:"Level 1",icon:"Folder",children:[{id:"level2a",label:"Level 2A",icon:"Folder",children:[{id:"level3a",label:"Level 3A",icon:"File",path:"/level1/level2a/level3a"},{id:"level3b",label:"Level 3B",icon:"File",path:"/level1/level2a/level3b"}]},{id:"level2b",label:"Level 2B",icon:"File",path:"/level1/level2b"}]}],currentPath:"/level1/level2a/level3a",permissions:[],collapsible:!0,defaultCollapsed:!1,responsive:!0},render:a=>e.jsxs("div",{className:"h-screen flex",children:[e.jsx(l,{...a}),e.jsxs("div",{className:"flex-1 p-6 bg-gray-50",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Deep Nesting Example"}),e.jsx("p",{className:"text-gray-600",children:"This example demonstrates how the navigation handles deeply nested menu structures with proper indentation and visual hierarchy."})]})]})};var E,D,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
        <p className="text-gray-600">
          This is the main content area. The side navigation is fully functional with collapsible sections,
          permission-based filtering, and workspace context awareness.
        </p>
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Current Path: {args.currentPath}</h2>
          <p className="text-sm text-gray-600">
            Click on navigation items to see the active state changes.
          </p>
        </div>
      </div>
    </div>
}`,...(B=(D=h.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var z,O,R;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    context: 'consultant',
    items: sampleNavigationItems,
    currentPath: '/clients',
    permissions: ['view_clients', 'view_billing', 'view_reports', 'view_financial_reports', 'manage_workspace'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Consultant Workspace</h1>
        <p className="text-gray-600">
          Consultant workspace with full permissions and blue accent colors.
          Notice the workspace-specific styling and available navigation items.
        </p>
      </div>
    </div>
}`,...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var M,U,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    context: 'client',
    items: clientNavigationItems,
    currentPath: '/my-projects',
    permissions: [],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Client Workspace</h1>
        <p className="text-gray-600">
          Client workspace with simplified navigation and green accent colors.
          Limited to client-relevant features and information.
        </p>
      </div>
    </div>
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var H,V,G;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    context: 'admin',
    items: sampleNavigationItems,
    currentPath: '/settings/workspace',
    permissions: ['view_clients', 'view_billing', 'view_reports', 'view_financial_reports', 'manage_workspace', 'manage_integrations'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">Admin Workspace</h1>
        <p className="text-gray-600">
          Admin workspace with full permissions and purple accent colors.
          Access to all administrative features and settings.
        </p>
      </div>
    </div>
}`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/projects/active',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: true,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Collapsed Navigation</h1>
        <p className="text-gray-600">
          The navigation starts in collapsed mode, showing only icons.
          Click the chevron button to expand it.
        </p>
      </div>
    </div>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/dashboard',
    permissions: ['view_billing'],
    // Very limited permissions
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Limited Permissions</h1>
        <p className="text-gray-600">
          This example shows how navigation items are filtered based on user permissions.
          Only items without permission requirements or with 'view_billing' permission are shown.
        </p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-800">Current Permissions:</h3>
          <p className="text-sm text-yellow-700">view_billing</p>
        </div>
      </div>
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/billing',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Navigation with Badges</h1>
        <p className="text-gray-600">
          Notice the badge indicators on various navigation items showing counts
          for notifications, pending items, or other relevant metrics.
        </p>
      </div>
    </div>
}`,...(se=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,te,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: sampleNavigationItems,
    currentPath: '/reports/projects',
    permissions: ['view_clients', 'view_billing', 'view_reports'],
    collapsible: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Non-Collapsible Navigation</h1>
        <p className="text-gray-600">
          This navigation cannot be collapsed and always shows the full menu.
          Notice there's no collapse toggle button in the header.
        </p>
      </div>
    </div>
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,le,oe;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    items: [{
      id: 'level1',
      label: 'Level 1',
      icon: 'Folder',
      children: [{
        id: 'level2a',
        label: 'Level 2A',
        icon: 'Folder',
        children: [{
          id: 'level3a',
          label: 'Level 3A',
          icon: 'File',
          path: '/level1/level2a/level3a'
        }, {
          id: 'level3b',
          label: 'Level 3B',
          icon: 'File',
          path: '/level1/level2a/level3b'
        }]
      }, {
        id: 'level2b',
        label: 'Level 2B',
        icon: 'File',
        path: '/level1/level2b'
      }]
    }],
    currentPath: '/level1/level2a/level3a',
    permissions: [],
    collapsible: true,
    defaultCollapsed: false,
    responsive: true
  },
  render: (args: SideNavigationProps) => <div className="h-screen flex">
      <SideNavigation {...args} />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Deep Nesting Example</h1>
        <p className="text-gray-600">
          This example demonstrates how the navigation handles deeply nested menu structures
          with proper indentation and visual hierarchy.
        </p>
      </div>
    </div>
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const Ks=["Default","ConsultantWorkspace","ClientWorkspace","AdminWorkspace","Collapsed","LimitedPermissions","WithBadges","NonCollapsible","DeepNesting"];export{b as AdminWorkspace,u as ClientWorkspace,x as Collapsed,v as ConsultantWorkspace,y as DeepNesting,h as Default,f as LimitedPermissions,w as NonCollapsible,N as WithBadges,Ks as __namedExportsOrder,Js as default};
