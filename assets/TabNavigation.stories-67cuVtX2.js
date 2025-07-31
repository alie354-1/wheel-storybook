import{j as e}from"./jsx-runtime-BdivIsZm.js";import{r as i,R as H}from"./vendor-CIaSNbmr.js";import{c as o}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import{C as Ge,U as ze,B as Le,a as Je}from"./users-C9yZEvey.js";import{X as Ke}from"./x-DZ2Nmj4W.js";import{C as Qe}from"./chevron-right-DCSbz_2P.js";import{H as Ae,F as ke,S as De}from"./settings-D7npsBbE.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CFfAzFt4.js";const Ye={consultant:{active:"border-blue-500 text-blue-600",inactive:"text-gray-500 hover:text-blue-600 hover:border-blue-300",background:"bg-blue-50"},client:{active:"border-green-500 text-green-600",inactive:"text-gray-500 hover:text-green-600 hover:border-green-300",background:"bg-green-50"},admin:{active:"border-red-500 text-red-600",inactive:"text-gray-500 hover:text-red-600 hover:border-red-300",background:"bg-red-50"},expert:{active:"border-purple-500 text-purple-600",inactive:"text-gray-500 hover:text-purple-600 hover:border-purple-300",background:"bg-purple-50"},"tool-creator":{active:"border-orange-500 text-orange-600",inactive:"text-gray-500 hover:text-orange-600 hover:border-orange-300",background:"bg-orange-50"},founder:{active:"border-amber-500 text-amber-600",inactive:"text-gray-500 hover:text-amber-600 hover:border-amber-300",background:"bg-amber-50"},neutral:{active:"border-gray-500 text-gray-900",inactive:"text-gray-500 hover:text-gray-700 hover:border-gray-300",background:"bg-gray-50"}},I={line:{tabList:"border-b border-gray-200",tab:"border-b-2 border-transparent px-4 py-2",activeTab:"border-b-2"},card:{tabList:"bg-gray-100 p-1 rounded-lg",tab:"px-3 py-1.5 rounded-md",activeTab:"bg-white shadow-sm"},pill:{tabList:"space-x-1",tab:"px-3 py-1.5 rounded-full",activeTab:"shadow-sm"}},Ze={sm:"text-xs",md:"text-sm",lg:"text-base"},r=({context:s="neutral",tabs:k,activeTab:P,onTabChange:D,onTabClose:B,variant:g="line",size:Re="md",scrollable:h=!0,responsive:Ee=!0,lazy:p=!1,permissions:V=[],className:Ie,tabListClassName:Pe,tabPanelClassName:Ve,showContent:We=!0,...Oe})=>{var $;const[W,Ue]=i.useState(P||(($=k[0])==null?void 0:$.id)),[u,Fe]=i.useState(!1),[O,Me]=i.useState(!1),[U,$e]=i.useState(!1),l=i.useRef(null),[v,F]=i.useState(new Set([W])),c=P||W,R=H.useMemo(()=>k.filter(a=>a.permission?V.includes(a.permission):!0),[k,V]),m=H.useCallback(()=>{if(!l.current||!h)return;const{scrollLeft:a,scrollWidth:t,clientWidth:n}=l.current;Me(a>0),$e(a<t-n-1),Fe(t>n)},[h]);i.useEffect(()=>{m();const a=()=>m();return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[m,R]),i.useEffect(()=>{p&&c&&!v.has(c)&&F(a=>new Set([...a,c]))},[c,p,v]);const He=a=>{if(a.disabled)return;const t=a.id;Ue(t),D==null||D(a),p&&!v.has(t)&&F(n=>new Set([...n,t]))},_e=(a,t)=>{t.stopPropagation(),B==null||B(a)},M=a=>{if(!l.current)return;const t=200,n=a==="left"?l.current.scrollLeft-t:l.current.scrollLeft+t;l.current.scrollTo({left:n,behavior:"smooth"}),setTimeout(m,300)},Xe=(a,t)=>{const n=o("inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer","focus:outline-none focus:ring-2 focus:ring-offset-2",Ze[Re],I[g].tab);if(a.disabled)return o(n,"opacity-50 cursor-not-allowed text-gray-400");const E=Ye[a.workspaceContext||s];return t?o(n,I[g].activeTab,E.active,g==="card"||g==="pill"?E.background:""):o(n,E.inactive)},qe=a=>a?e.jsx("span",{className:o("inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-xs font-medium","bg-red-100 text-red-800 min-w-[1.25rem] h-5"),children:a>99?"99+":a}):null,d=R.find(a=>a.id===c);return e.jsxs("div",{className:o("w-full",Ie),...Oe,children:[e.jsxs("div",{className:"relative",children:[u&&O&&e.jsx("button",{onClick:()=>M("left"),className:o("absolute left-0 top-0 z-10 h-full px-2 bg-white shadow-md","flex items-center justify-center hover:bg-gray-50","border-r border-gray-200"),"aria-label":"Scroll tabs left",children:e.jsx(Ge,{className:"h-4 w-4"})}),e.jsx("div",{ref:l,className:o("flex overflow-x-auto scrollbar-hide",I[g].tabList,h&&u&&O&&"pl-10",h&&u&&U&&"pr-10",Pe),role:"tablist",onScroll:m,children:R.map(a=>{const t=a.id===c;return e.jsxs("button",{role:"tab","aria-selected":t,"aria-controls":`tabpanel-${a.id}`,tabIndex:t?0:-1,className:Xe(a,t),onClick:()=>He(a),disabled:a.disabled,children:[a.icon&&e.jsx("span",{className:"h-4 w-4 flex-shrink-0","aria-hidden":"true",children:a.icon}),e.jsx("span",{className:Ee?"truncate max-w-[120px] sm:max-w-none":"",children:a.label}),a.badge&&qe(a.badge),a.closable&&e.jsx("button",{onClick:n=>_e(a,n),className:o("ml-1 p-0.5 rounded hover:bg-gray-200 transition-colors","focus:outline-none focus:ring-1 focus:ring-gray-400"),"aria-label":`Close ${a.label} tab`,children:e.jsx(Ke,{className:"h-3 w-3"})})]},a.id)})}),u&&U&&e.jsx("button",{onClick:()=>M("right"),className:o("absolute right-0 top-0 z-10 h-full px-2 bg-white shadow-md","flex items-center justify-center hover:bg-gray-50","border-l border-gray-200"),"aria-label":"Scroll tabs right",children:e.jsx(Qe,{className:"h-4 w-4"})})]}),We&&d&&e.jsx("div",{role:"tabpanel",id:`tabpanel-${d.id}`,"aria-labelledby":`tab-${d.id}`,className:o("mt-4",Ve),children:p?v.has(d.id)&&d.content:d.content})]})},ga={title:"Layouts/TabNavigation",component:r,parameters:{layout:"padded",docs:{description:{component:"A flexible tab navigation component with workspace context support, scrolling, lazy loading, and permission-based filtering."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for theming"},variant:{control:"select",options:["line","card","pill"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Size of the tabs"},scrollable:{control:"boolean",description:"Enable horizontal scrolling for overflow tabs"},responsive:{control:"boolean",description:"Enable responsive behavior"},lazy:{control:"boolean",description:"Enable lazy loading of tab content"},showContent:{control:"boolean",description:"Show tab panel content"}}},b=[{id:"overview",label:"Overview",icon:e.jsx(Ae,{className:"h-4 w-4"}),content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Overview content goes here..."})},{id:"documents",label:"Documents",icon:e.jsx(ke,{className:"h-4 w-4"}),badge:3,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Documents content with 3 new items..."})},{id:"team",label:"Team",icon:e.jsx(ze,{className:"h-4 w-4"}),content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Team management content..."})},{id:"analytics",label:"Analytics",icon:e.jsx(Le,{className:"h-4 w-4"}),content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Analytics dashboard content..."})},{id:"settings",label:"Settings",icon:e.jsx(De,{className:"h-4 w-4"}),content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Settings configuration..."})}],Be=[...b,{id:"notifications",label:"Notifications",icon:e.jsx(Je,{className:"h-4 w-4"}),badge:12,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Notifications content..."})},{id:"billing",label:"Billing",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Billing information..."})},{id:"integrations",label:"Integrations",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Third-party integrations..."})},{id:"security",label:"Security",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Security settings..."})},{id:"api",label:"API Access",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"API configuration..."})}],ea=[{id:"dashboard",label:"Dashboard",icon:e.jsx(Ae,{className:"h-4 w-4"}),content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Dashboard content..."})},{id:"users",label:"User Management",icon:e.jsx(ze,{className:"h-4 w-4"}),permission:"admin",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"User management (admin only)..."})},{id:"reports",label:"Reports",icon:e.jsx(Le,{className:"h-4 w-4"}),permission:"reports",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Reports content..."})},{id:"settings",label:"Settings",icon:e.jsx(De,{className:"h-4 w-4"}),permission:"admin",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Settings (admin only)..."})}],aa=[{id:"file1",label:"Document.pdf",icon:e.jsx(ke,{className:"h-4 w-4"}),closable:!0,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Document.pdf content..."})},{id:"file2",label:"Spreadsheet.xlsx",closable:!0,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Spreadsheet.xlsx content..."})},{id:"file3",label:"Presentation.pptx",closable:!0,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Presentation.pptx content..."})}],x={args:{tabs:b,onTabChange:s=>console.log("Tab changed:",s),showContent:!0}},y={args:{tabs:b,onTabChange:s=>console.log("Tab changed:",s),showContent:!0},render:s=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Consultant Context"}),e.jsx(r,{...s,context:"consultant"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Client Context"}),e.jsx(r,{...s,context:"client"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Admin Context"}),e.jsx(r,{...s,context:"admin"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Expert Context"}),e.jsx(r,{...s,context:"expert"})]})]})},f={args:{tabs:b,onTabChange:s=>console.log("Tab changed:",s),showContent:!1},render:s=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Line Variant (Default)"}),e.jsx(r,{...s,variant:"line"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Card Variant"}),e.jsx(r,{...s,variant:"card"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Pill Variant"}),e.jsx(r,{...s,variant:"pill"})]})]})},T={args:{tabs:b,onTabChange:s=>console.log("Tab changed:",s),showContent:!1},render:s=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small Size"}),e.jsx(r,{...s,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium Size (Default)"}),e.jsx(r,{...s,size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large Size"}),e.jsx(r,{...s,size:"lg"})]})]})},N={args:{tabs:Be,onTabChange:s=>console.log("Tab changed:",s),scrollable:!0,showContent:!0},parameters:{docs:{description:{story:"When there are many tabs, horizontal scrolling is enabled with navigation buttons."}}}},w={args:{tabs:ea,permissions:["admin","reports"],onTabChange:s=>console.log("Tab changed:",s),showContent:!0},parameters:{docs:{description:{story:"Tabs can be filtered based on user permissions. Only tabs with matching permissions are shown."}}}},j={args:{tabs:aa,onTabChange:s=>console.log("Tab changed:",s),onTabClose:s=>console.log("Tab closed:",s),showContent:!0},parameters:{docs:{description:{story:"Tabs can be made closable with close buttons. Useful for document editors or dynamic content."}}}},C={args:{tabs:[{id:"instant",label:"Instant Load",content:e.jsx("div",{className:"p-4 bg-green-50 rounded-lg",children:"This content loads immediately"})},{id:"lazy1",label:"Lazy Tab 1",lazy:!0,content:e.jsx("div",{className:"p-4 bg-blue-50 rounded-lg",children:"This content loads only when tab is first activated"})},{id:"lazy2",label:"Lazy Tab 2",lazy:!0,content:e.jsx("div",{className:"p-4 bg-purple-50 rounded-lg",children:"This content also loads lazily"})}],lazy:!0,onTabChange:s=>console.log("Tab changed:",s),showContent:!0},parameters:{docs:{description:{story:"Tab content can be loaded lazily to improve initial performance. Content is only rendered when the tab is first activated."}}}},S={args:{tabs:[{id:"inbox",label:"Inbox",badge:5,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Inbox with 5 unread messages"})},{id:"notifications",label:"Notifications",badge:23,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"23 new notifications"})},{id:"alerts",label:"Alerts",badge:150,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"150+ alerts (shows as 99+)"})},{id:"archive",label:"Archive",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Archived items"})}],onTabChange:s=>console.log("Tab changed:",s),showContent:!0},parameters:{docs:{description:{story:'Tabs can display badges to show counts or status. Badges over 99 are displayed as "99+".'}}}},z={args:{tabs:[{id:"available",label:"Available",content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"This tab is available"})},{id:"disabled",label:"Disabled",disabled:!0,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"This content won't show"})},{id:"coming-soon",label:"Coming Soon",disabled:!0,content:e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:"Feature coming soon"})}],onTabChange:s=>console.log("Tab changed:",s),showContent:!0},parameters:{docs:{description:{story:"Tabs can be disabled to prevent interaction while maintaining visual presence."}}}},L={args:{tabs:Be,responsive:!0,onTabChange:s=>console.log("Tab changed:",s),showContent:!0},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On smaller screens, tab labels are truncated and scrolling is enabled for better mobile experience."}}}},A={args:{tabs:b,onTabChange:s=>console.log("Tab changed:",s),showContent:!0,className:"border border-gray-200 rounded-lg p-4",tabListClassName:"bg-gray-50 rounded-md p-1",tabPanelClassName:"bg-white border border-gray-200 rounded-md p-6 mt-4"},parameters:{docs:{description:{story:"Tab navigation can be customized with additional CSS classes for container, tab list, and tab panels."}}}};var _,X,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  }
}`,...(q=(X=x.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Consultant Context</h3>
        <TabNavigation {...args} context="consultant" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Client Context</h3>
        <TabNavigation {...args} context="client" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Context</h3>
        <TabNavigation {...args} context="admin" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Expert Context</h3>
        <TabNavigation {...args} context="expert" />
      </div>
    </div>
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: false
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Line Variant (Default)</h3>
        <TabNavigation {...args} variant="line" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Variant</h3>
        <TabNavigation {...args} variant="card" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Pill Variant</h3>
        <TabNavigation {...args} variant="pill" />
      </div>
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: false
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Size</h3>
        <TabNavigation {...args} size="sm" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Size (Default)</h3>
        <TabNavigation {...args} size="md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size</h3>
        <TabNavigation {...args} size="lg" />
      </div>
    </div>
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,oe;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    scrollable: true,
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When there are many tabs, horizontal scrolling is enabled with navigation buttons.'
      }
    }
  }
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,le;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    tabs: permissionTabs,
    permissions: ['admin', 'reports'],
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be filtered based on user permissions. Only tabs with matching permissions are shown.'
      }
    }
  }
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,be;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    tabs: closableTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    onTabClose: tab => console.log('Tab closed:', tab),
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be made closable with close buttons. Useful for document editors or dynamic content.'
      }
    }
  }
}`,...(be=(de=j.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ge,me,he;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'instant',
      label: 'Instant Load',
      content: <div className="p-4 bg-green-50 rounded-lg">This content loads immediately</div>
    }, {
      id: 'lazy1',
      label: 'Lazy Tab 1',
      lazy: true,
      content: <div className="p-4 bg-blue-50 rounded-lg">This content loads only when tab is first activated</div>
    }, {
      id: 'lazy2',
      label: 'Lazy Tab 2',
      lazy: true,
      content: <div className="p-4 bg-purple-50 rounded-lg">This content also loads lazily</div>
    }],
    lazy: true,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab content can be loaded lazily to improve initial performance. Content is only rendered when the tab is first activated.'
      }
    }
  }
}`,...(he=(me=C.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ue,ve;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'inbox',
      label: 'Inbox',
      badge: 5,
      content: <div className="p-4 bg-gray-50 rounded-lg">Inbox with 5 unread messages</div>
    }, {
      id: 'notifications',
      label: 'Notifications',
      badge: 23,
      content: <div className="p-4 bg-gray-50 rounded-lg">23 new notifications</div>
    }, {
      id: 'alerts',
      label: 'Alerts',
      badge: 150,
      content: <div className="p-4 bg-gray-50 rounded-lg">150+ alerts (shows as 99+)</div>
    }, {
      id: 'archive',
      label: 'Archive',
      content: <div className="p-4 bg-gray-50 rounded-lg">Archived items</div>
    }],
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can display badges to show counts or status. Badges over 99 are displayed as "99+".'
      }
    }
  }
}`,...(ve=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var xe,ye,fe;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'available',
      label: 'Available',
      content: <div className="p-4 bg-gray-50 rounded-lg">This tab is available</div>
    }, {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: <div className="p-4 bg-gray-50 rounded-lg">This content won't show</div>
    }, {
      id: 'coming-soon',
      label: 'Coming Soon',
      disabled: true,
      content: <div className="p-4 bg-gray-50 rounded-lg">Feature coming soon</div>
    }],
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be disabled to prevent interaction while maintaining visual presence.'
      }
    }
  }
}`,...(fe=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Te,Ne,we;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    responsive: true,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On smaller screens, tab labels are truncated and scrolling is enabled for better mobile experience.'
      }
    }
  }
}`,...(we=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var je,Ce,Se;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    tabs: basicTabs,
    onTabChange: tab => console.log('Tab changed:', tab),
    showContent: true,
    className: 'border border-gray-200 rounded-lg p-4',
    tabListClassName: 'bg-gray-50 rounded-md p-1',
    tabPanelClassName: 'bg-white border border-gray-200 rounded-md p-6 mt-4'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab navigation can be customized with additional CSS classes for container, tab list, and tab panels.'
      }
    }
  }
}`,...(Se=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};const ma=["Default","WorkspaceContexts","Variants","Sizes","ScrollableTabs","PermissionBasedTabs","ClosableTabs","LazyLoading","WithBadges","DisabledTabs","ResponsiveBehavior","CustomStyling"];export{j as ClosableTabs,A as CustomStyling,x as Default,z as DisabledTabs,C as LazyLoading,w as PermissionBasedTabs,L as ResponsiveBehavior,N as ScrollableTabs,T as Sizes,f as Variants,S as WithBadges,y as WorkspaceContexts,ma as __namedExportsOrder,ga as default};
