import{j as e}from"./jsx-runtime-BdivIsZm.js";import{r as D}from"./vendor-CIaSNbmr.js";import{c as M}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./addressinput-DR7TMhaL.js";import"./alert-CmQfHnIB.js";import{A as Ue}from"./Avatar-DpmMIMRY.js";import{B as L}from"./badge-Bfd9GCop.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as i}from"./button-BioF9M8P.js";import"./card-_h8jTILF.js";import"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import{M as Pe,S as _e,U as ze,H as Le,L as Ve,P as He,D as Ie}from"./icon-DC-Rf1Vv.js";import"./image-Cvhw9Q6R.js";import"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import{L as Be}from"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Bn8w_kAn.js";import"./phoneinput-FjD8a10x.js";import"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CM3d5xfp.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import{a as Fe}from"./users-C9yZEvey.js";import{S as V}from"./settings-D7npsBbE.js";import{C as qe}from"./chevron-down-DDkHMo_x.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const E=({context:t="neutral",workspaces:A=[],currentWorkspace:c,onWorkspaceChange:O,user:s,notifications:v=[],onNotificationClick:U,primaryActions:Ce=[],secondaryActions:$e=[],responsive:We=!0,onMobileMenuClick:P,onSearch:j,showSearch:De=!0,onSignOut:_,className:Me})=>{const[l,z]=D.useState(!1),[S,C]=D.useState(!1),[W,Ee]=D.useState(""),Te={consultant:"bg-blue-50 border-blue-200",client:"bg-green-50 border-green-200",admin:"bg-gray-50 border-gray-200",expert:"bg-purple-50 border-purple-200","tool-creator":"bg-orange-50 border-orange-200",founder:"bg-amber-50 border-amber-200",neutral:"bg-white border-gray-200"},n=v.filter(r=>!r.read).length,Ae=r=>{r.preventDefault(),j&&W.trim()&&j(W.trim())},Oe=r=>{U&&U(r),C(!1)};return e.jsxs("header",{className:M("border-b shadow-sm transition-colors duration-200",Te[t],Me),role:"banner",children:[e.jsxs("div",{className:"px-4 py-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[We&&P&&e.jsx(i,{variant:"ghost",size:"sm",onClick:P,className:"lg:hidden","aria-label":"Open mobile menu",children:e.jsx(Pe,{className:"w-5 h-5"})}),e.jsx(Be,{variant:"full",size:"sm",className:"transition-transform hover:scale-105"}),A.length>0&&c&&O&&e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg",children:c.name})})]}),De&&j&&e.jsx("div",{className:"hidden lg:flex flex-1 max-w-md mx-8",children:e.jsxs("form",{onSubmit:Ae,className:"relative w-full",children:[e.jsx(_e,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"}),e.jsx("input",{type:"text",placeholder:"Search...",value:W,onChange:r=>Ee(r.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm","aria-label":"Search"})]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[Ce.map(r=>e.jsxs(i,{variant:"ghost",size:"sm",onClick:r.onClick,disabled:r.disabled,className:"hidden md:flex","aria-label":r.label,children:[r.icon&&e.jsx(r.icon,{className:"w-4 h-4"}),e.jsx("span",{className:"ml-2",children:r.label}),r.badge&&r.badge>0&&e.jsx(L,{variant:"secondary",className:"ml-2",children:r.badge})]},r.id)),e.jsxs("div",{className:"relative",children:[e.jsxs(i,{variant:"ghost",size:"sm",onClick:()=>C(!S),className:"relative","aria-label":`Notifications ${n>0?`(${n} unread)`:""}`,children:[e.jsx(Fe,{className:"w-5 h-5"}),n>0&&e.jsx(L,{variant:"error",className:"absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0",children:n>9?"9+":n})]}),S&&e.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto",children:[e.jsx("div",{className:"p-4 border-b border-gray-200",children:e.jsx("h3",{className:"font-semibold text-gray-900",children:"Notifications"})}),v.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"No notifications"}):e.jsx("div",{className:"py-2",children:v.slice(0,10).map(r=>e.jsx("button",{onClick:()=>Oe(r),className:M("w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0",!r.read&&"bg-blue-50"),children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:M("w-2 h-2 rounded-full mt-2 flex-shrink-0",r.read?"bg-gray-300":"bg-blue-500")}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-gray-900 text-sm",children:r.title}),e.jsx("p",{className:"text-gray-600 text-sm truncate",children:r.message}),e.jsx("p",{className:"text-gray-400 text-xs mt-1",children:r.timestamp.toLocaleDateString()})]})]})},r.id))})]})]}),e.jsx(i,{variant:"ghost",size:"sm",className:"hidden md:flex","aria-label":"Settings",children:e.jsx(V,{className:"w-5 h-5"})}),s&&e.jsxs("div",{className:"relative",children:[e.jsxs(i,{variant:"ghost",onClick:()=>z(!l),className:"flex items-center gap-2 px-2","aria-label":"User menu","aria-expanded":l,children:[e.jsx(Ue,{src:s.avatar,alt:s.name,fallback:s.name.charAt(0),size:"sm"}),e.jsxs("div",{className:"text-left hidden lg:block",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"text-xs text-gray-500",children:s.role})]}),e.jsx(qe,{className:"w-4 h-4 text-gray-400"})]}),l&&e.jsxs("div",{className:"absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50",children:[e.jsxs("div",{className:"p-4 border-b border-gray-200",children:[e.jsx("p",{className:"font-medium text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"py-2",children:[e.jsxs("button",{className:"flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left",children:[e.jsx(ze,{className:"w-4 h-4"}),e.jsx("span",{children:"Profile"})]}),e.jsxs("button",{className:"flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left",children:[e.jsx(V,{className:"w-4 h-4"}),e.jsx("span",{children:"Settings"})]}),e.jsxs("button",{className:"flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left",children:[e.jsx(Le,{className:"w-4 h-4"}),e.jsx("span",{children:"Help"})]}),e.jsx("hr",{className:"my-1"}),_&&e.jsxs("button",{onClick:_,className:"flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left",children:[e.jsx(Ve,{className:"w-4 h-4"}),e.jsx("span",{children:"Sign Out"})]})]})]})]})]})]}),A.length>0&&c&&O&&e.jsx("div",{className:"md:hidden mt-3",children:e.jsx("div",{className:"px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg",children:c.name})})]}),(l||S)&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>{z(!1),C(!1)},"aria-hidden":"true"})]})};try{E.displayName="TopNavigation",E.__docgenInfo={description:`TopNavigation - Enhanced primary navigation with workspace context awareness

Features:
- Workspace switcher integration
- Context-aware theming
- Notification center
- User profile management
- Responsive design
- Accessibility compliant`,displayName:"TopNavigation",props:{}}}catch{}const kt={title:"Layouts/TopNavigation",component:E,parameters:{layout:"fullscreen",docs:{description:{component:"Enhanced primary navigation with workspace context awareness, notifications, and user management."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for theming"},responsive:{control:"boolean",description:"Enable responsive behavior"},showSearch:{control:"boolean",description:"Show search bar"}}},N={id:"1",name:"Alexandra Cohen",email:"alexandra@thewheel.com",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",role:"Senior Consultant"},o=[{id:"1",name:"Acme Corp",type:"client",permissions:["read","write"]},{id:"2",name:"Tech Startup",type:"consultant",permissions:["read","write","admin"]},{id:"3",name:"Enterprise Solutions",type:"expert",permissions:["read"]}],T=[{id:"1",title:"New project assigned",message:"You have been assigned to the Acme Corp redesign project",type:"info",timestamp:new Date(Date.now()-1e3*60*30),read:!1},{id:"2",title:"Payment received",message:"Payment of $5,000 has been received from Tech Startup",type:"success",timestamp:new Date(Date.now()-1e3*60*60*2),read:!1},{id:"3",title:"Meeting reminder",message:"Client call with Enterprise Solutions in 15 minutes",type:"warning",timestamp:new Date(Date.now()-1e3*60*60*4),read:!0}],Se=[{id:"create",label:"Create",icon:He,onClick:()=>console.log("Create clicked")},{id:"export",label:"Export",icon:Ie,onClick:()=>console.log("Export clicked"),badge:3}],a={args:{context:"neutral",user:N,workspaces:o,currentWorkspace:o[0],notifications:T,primaryActions:Se,responsive:!0,showSearch:!0,onWorkspaceChange:t=>console.log("Workspace changed:",t),onNotificationClick:t=>console.log("Notification clicked:",t),onSearch:t=>console.log("Search:",t),onMobileMenuClick:()=>console.log("Mobile menu clicked"),onSignOut:()=>console.log("Sign out clicked")}},m={args:{...a.args,context:"consultant",currentWorkspace:o[1]}},p={args:{...a.args,context:"client",currentWorkspace:o[0]}},d={args:{...a.args,context:"expert",currentWorkspace:o[2]}},g={args:{...a.args,notifications:[...T,{id:"4",title:"System update",message:"The system will be updated tonight at 2 AM EST",type:"info",timestamp:new Date(Date.now()-1e3*60*60*6),read:!1},{id:"5",title:"Invoice overdue",message:"Invoice #1234 is now 5 days overdue",type:"error",timestamp:new Date(Date.now()-1e3*60*60*8),read:!1}]}},u={args:{...a.args,notifications:[]}},x={args:{...a.args,showSearch:!1}},h={args:{context:"neutral",user:N,responsive:!0,showSearch:!1,onSignOut:()=>console.log("Sign out clicked")}},f={args:{...a.args},parameters:{viewport:{defaultViewport:"mobile1"}}},b={args:{...a.args},parameters:{viewport:{defaultViewport:"tablet"}}},w={args:{context:"neutral",workspaces:o,currentWorkspace:o[0],notifications:T,primaryActions:Se,responsive:!0,showSearch:!0,onWorkspaceChange:t=>console.log("Workspace changed:",t),onNotificationClick:t=>console.log("Notification clicked:",t),onSearch:t=>console.log("Search:",t),onMobileMenuClick:()=>console.log("Mobile menu clicked")}},y={args:{...a.args,context:"founder",user:{...N,name:"Sarah Johnson",role:"Founder & CEO"},currentWorkspace:{id:"founder-workspace",name:"THE WHEEL",type:"founder",permissions:["read","write","admin","owner"]}}},k={args:{...a.args,context:"tool-creator",user:{...N,name:"Alex Developer",role:"Tool Creator"},currentWorkspace:{id:"tool-workspace",name:"Development Tools",type:"tool-creator",permissions:["read","write","deploy"]}}};var H,I,B;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    user: mockUser,
    workspaces: mockWorkspaces,
    currentWorkspace: mockWorkspaces[0],
    notifications: mockNotifications,
    primaryActions: mockPrimaryActions,
    responsive: true,
    showSearch: true,
    onWorkspaceChange: workspace => console.log('Workspace changed:', workspace),
    onNotificationClick: notification => console.log('Notification clicked:', notification),
    onSearch: query => console.log('Search:', query),
    onMobileMenuClick: () => console.log('Mobile menu clicked'),
    onSignOut: () => console.log('Sign out clicked')
  }
}`,...(B=(I=a.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,q,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'consultant',
    currentWorkspace: mockWorkspaces[1]
  }
}`,...($=(q=m.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var J,Q,R;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'client',
    currentWorkspace: mockWorkspaces[0]
  }
}`,...(R=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Y,G,K;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'expert',
    currentWorkspace: mockWorkspaces[2]
  }
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: [...mockNotifications, {
      id: '4',
      title: 'System update',
      message: 'The system will be updated tonight at 2 AM EST',
      type: 'info' as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
      read: false
    }, {
      id: '5',
      title: 'Invoice overdue',
      message: 'Invoice #1234 is now 5 days overdue',
      type: 'error' as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
      read: false
    }]
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ae;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: []
  }
}`,...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ne;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSearch: false
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,le;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    user: mockUser,
    responsive: true,
    showSearch: false,
    onSignOut: () => console.log('Sign out clicked')
  }
}`,...(le=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,pe,de;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(de=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ge,ue,xe;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...(xe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var he,fe,be;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    workspaces: mockWorkspaces,
    currentWorkspace: mockWorkspaces[0],
    notifications: mockNotifications,
    primaryActions: mockPrimaryActions,
    responsive: true,
    showSearch: true,
    onWorkspaceChange: workspace => console.log('Workspace changed:', workspace),
    onNotificationClick: notification => console.log('Notification clicked:', notification),
    onSearch: query => console.log('Search:', query),
    onMobileMenuClick: () => console.log('Mobile menu clicked')
  }
}`,...(be=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var we,ye,ke;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'founder',
    user: {
      ...mockUser,
      name: 'Sarah Johnson',
      role: 'Founder & CEO'
    },
    currentWorkspace: {
      id: 'founder-workspace',
      name: 'THE WHEEL',
      type: 'founder' as const,
      permissions: ['read', 'write', 'admin', 'owner']
    }
  }
}`,...(ke=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Ne,ve,je;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'tool-creator',
    user: {
      ...mockUser,
      name: 'Alex Developer',
      role: 'Tool Creator'
    },
    currentWorkspace: {
      id: 'tool-workspace',
      name: 'Development Tools',
      type: 'tool-creator' as const,
      permissions: ['read', 'write', 'deploy']
    }
  }
}`,...(je=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};const Nt=["Default","ConsultantContext","ClientContext","ExpertContext","WithManyNotifications","NoNotifications","WithoutSearch","MinimalSetup","MobileView","TabletView","WithoutUser","FounderContext","ToolCreatorContext"];export{p as ClientContext,m as ConsultantContext,a as Default,d as ExpertContext,y as FounderContext,h as MinimalSetup,f as MobileView,u as NoNotifications,b as TabletView,k as ToolCreatorContext,g as WithManyNotifications,x as WithoutSearch,w as WithoutUser,Nt as __namedExportsOrder,kt as default};
