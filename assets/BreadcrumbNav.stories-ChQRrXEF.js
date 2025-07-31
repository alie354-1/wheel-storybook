import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as E}from"./index-B2-qRKKC.js";import{c as m}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import{H as De,F as Re,S as Te}from"./settings-oq6Li1sM.js";import{C as Ve}from"./chevron-right-Cglc0ypw.js";import{F as Me}from"./folder-DFbRz8A7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-mz0sz0u3.js";const H={consultant:"text-blue-600 hover:text-blue-700 border-blue-200",client:"text-green-600 hover:text-green-700 border-green-200",admin:"text-red-600 hover:text-red-700 border-red-200",expert:"text-purple-600 hover:text-purple-700 border-purple-200","tool-creator":"text-orange-600 hover:text-orange-700 border-orange-200",founder:"text-amber-600 hover:text-amber-700 border-amber-200",neutral:"text-gray-600 hover:text-gray-700 border-gray-200"},s=({context:l="neutral",items:o,maxItems:B=5,separator:A,onItemClick:c,responsive:S=!0,generateFromPath:Oe=!1,workspaceScoped:qe=!1,className:Ae,showHome:Fe=!0,...We})=>{const P=E.useMemo(()=>{if(o.length<=B)return o;const t=o[0],i=o.slice(-(B-2));return[t,{id:"ellipsis",label:"...",disabled:!0},...i]},[o,B]),Ee=t=>{t.disabled||t.id==="ellipsis"||c==null||c(t)},F=()=>A||e.jsx(Ve,{className:"h-4 w-4 text-gray-400"}),W=(t,i)=>{const a="inline-flex items-center gap-1 text-sm transition-colors";if(t.disabled||t.id==="ellipsis")return m(a,"text-gray-400 cursor-default");if(i)return m(a,"text-gray-900 font-medium cursor-default");const He=H[t.workspaceContext||l];return m(a,"hover:underline cursor-pointer",He)};return e.jsx("nav",{className:m("flex items-center space-x-1 text-sm",S&&"flex-wrap",Ae),"aria-label":"Breadcrumb",...We,children:e.jsxs("ol",{className:"flex items-center space-x-1",children:[Fe&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>c==null?void 0:c({id:"home",label:"Home",path:"/"}),className:m("inline-flex items-center text-sm transition-colors hover:underline",H[l]),"aria-label":"Home",children:e.jsx(De,{className:"h-4 w-4"})})}),P.length>0&&e.jsx("li",{className:"flex items-center",children:F()})]}),P.map((t,i)=>{const a=i===P.length-1;return e.jsxs(E.Fragment,{children:[e.jsx("li",{children:t.path&&!t.disabled&&!a?e.jsxs("button",{onClick:()=>Ee(t),className:W(t,a),"aria-current":a?"page":void 0,children:[t.icon&&e.jsx("span",{className:"h-4 w-4","aria-hidden":"true",children:t.icon}),e.jsx("span",{className:S?"truncate max-w-[120px] sm:max-w-none":"",children:t.label})]}):e.jsxs("span",{className:W(t,a),"aria-current":a?"page":void 0,children:[t.icon&&e.jsx("span",{className:"h-4 w-4","aria-hidden":"true",children:t.icon}),e.jsx("span",{className:S?"truncate max-w-[120px] sm:max-w-none":"",children:t.label})]})}),!a&&e.jsx("li",{className:"flex items-center","aria-hidden":"true",children:F()})]},t.id)})]})})},n=l=>(...o)=>{console.log(`Action: ${l}`,o)},Ze={title:"Layouts/BreadcrumbNav",component:s,parameters:{layout:"padded",docs:{description:{component:"A workspace-aware breadcrumb navigation component that provides hierarchical navigation with context-specific styling and responsive behavior."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context that affects styling and behavior"},maxItems:{control:{type:"number",min:3,max:10},description:"Maximum number of breadcrumb items to display before truncation"},responsive:{control:"boolean",description:"Enable responsive behavior for mobile devices"},showHome:{control:"boolean",description:"Show home icon at the beginning of breadcrumbs"},generateFromPath:{control:"boolean",description:"Generate breadcrumbs from current path (future feature)"},workspaceScoped:{control:"boolean",description:"Scope breadcrumbs to current workspace context"}},args:{context:"neutral",maxItems:5,responsive:!0,showHome:!0,generateFromPath:!1,workspaceScoped:!1,onItemClick:n("breadcrumb-clicked")}},r=[{id:"workspace",label:"Workspace",path:"/workspace"},{id:"projects",label:"Projects",path:"/workspace/projects",icon:e.jsx(Me,{className:"h-4 w-4"})},{id:"project-alpha",label:"Project Alpha",path:"/workspace/projects/alpha"},{id:"documents",label:"Documents",path:"/workspace/projects/alpha/documents",icon:e.jsx(Re,{className:"h-4 w-4"})},{id:"current-doc",label:"Current Document.pdf",path:"/workspace/projects/alpha/documents/current-doc.pdf"}],Le=[{id:"workspace",label:"Workspace",path:"/workspace"},{id:"settings",label:"Settings",path:"/workspace/settings",icon:e.jsx(Te,{className:"h-4 w-4"})}],Pe=[{id:"workspace",label:"Workspace",path:"/workspace"},{id:"clients",label:"Clients",path:"/workspace/clients"},{id:"client-acme",label:"ACME Corporation",path:"/workspace/clients/acme"},{id:"projects",label:"Projects",path:"/workspace/clients/acme/projects"},{id:"project-beta",label:"Project Beta - Q4 Initiative",path:"/workspace/clients/acme/projects/beta"},{id:"deliverables",label:"Deliverables",path:"/workspace/clients/acme/projects/beta/deliverables"},{id:"reports",label:"Reports",path:"/workspace/clients/acme/projects/beta/deliverables/reports"},{id:"final-report",label:"Final Report - December 2024.pdf",path:"/workspace/clients/acme/projects/beta/deliverables/reports/final-report.pdf"}],d={args:{items:r}},p={args:{context:"consultant",items:r},parameters:{docs:{description:{story:"Breadcrumb navigation with consultant workspace context styling."}}}},u={args:{context:"client",items:r},parameters:{docs:{description:{story:"Breadcrumb navigation with client workspace context styling."}}}},x={args:{context:"expert",items:r},parameters:{docs:{description:{story:"Breadcrumb navigation with expert workspace context styling."}}}},h={args:{context:"founder",items:r},parameters:{docs:{description:{story:"Breadcrumb navigation with founder workspace context styling."}}}},b={args:{items:Le},parameters:{docs:{description:{story:"Breadcrumb navigation with a short path that doesn't require truncation."}}}},g={args:{items:Pe,maxItems:4},parameters:{docs:{description:{story:"Breadcrumb navigation with a long path that gets truncated with ellipsis."}}}},v={args:{items:r,showHome:!1},parameters:{docs:{description:{story:"Breadcrumb navigation without the home icon."}}}},w={args:{items:r,separator:e.jsx("span",{className:"text-gray-400 mx-1",children:"→"})},parameters:{docs:{description:{story:"Breadcrumb navigation with a custom separator."}}}},k={args:{items:r,responsive:!1},parameters:{docs:{description:{story:"Breadcrumb navigation with responsive behavior disabled."}}}},f={args:{items:[{id:"workspace",label:"Workspace",path:"/workspace"},{id:"archived",label:"Archived Projects",disabled:!0},{id:"project-old",label:"Old Project",path:"/workspace/archived/old-project"}]},parameters:{docs:{description:{story:"Breadcrumb navigation with some disabled items."}}}},y={args:{context:"consultant",items:[{id:"workspace",label:"Workspace",path:"/workspace",workspaceContext:"consultant"},{id:"shared",label:"Shared Area",path:"/shared",workspaceContext:"neutral"},{id:"client-area",label:"Client Portal",path:"/shared/client",workspaceContext:"client"}]},parameters:{docs:{description:{story:"Breadcrumb navigation with items having different workspace contexts."}}}},j={args:{items:Pe,maxItems:3},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Breadcrumb navigation optimized for mobile viewport with truncated labels."}}}},C={args:{items:r},parameters:{viewport:{defaultViewport:"tablet"},docs:{description:{story:"Breadcrumb navigation on tablet viewport."}}}},I={args:{items:r,context:"consultant"},parameters:{docs:{description:{story:"Interactive breadcrumb navigation. Click on any breadcrumb item to see the action in the Actions panel."}}}},N={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Consultant Context"}),e.jsx(s,{context:"consultant",items:r,onItemClick:n("consultant-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Client Context"}),e.jsx(s,{context:"client",items:r,onItemClick:n("client-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Admin Context"}),e.jsx(s,{context:"admin",items:r,onItemClick:n("admin-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Expert Context"}),e.jsx(s,{context:"expert",items:r,onItemClick:n("expert-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Tool Creator Context"}),e.jsx(s,{context:"tool-creator",items:r,onItemClick:n("tool-creator-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Founder Context"}),e.jsx(s,{context:"founder",items:r,onItemClick:n("founder-click")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Neutral Context"}),e.jsx(s,{context:"neutral",items:r,onItemClick:n("neutral-click")})]})]}),parameters:{docs:{description:{story:"Comparison of breadcrumb navigation across all workspace contexts."}}}};var D,R,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,M,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    context: 'consultant',
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with consultant workspace context styling.'
      }
    }
  }
}`,...(L=(M=p.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,q,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    context: 'client',
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with client workspace context styling.'
      }
    }
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var _,G,Q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    context: 'expert',
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with expert workspace context styling.'
      }
    }
  }
}`,...(Q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var $,J,K;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    context: 'founder',
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with founder workspace context styling.'
      }
    }
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: shortItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a short path that doesn\\'t require truncation.'
      }
    }
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a long path that gets truncated with ellipsis.'
      }
    }
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    showHome: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation without the home icon.'
      }
    }
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,oe,ce;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    separator: <span className="text-gray-400 mx-1">→</span>
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with a custom separator.'
      }
    }
  }
}`,...(ce=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,me,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    responsive: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with responsive behavior disabled.'
      }
    }
  }
}`,...(le=(me=k.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var de,pe,ue;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'workspace',
      label: 'Workspace',
      path: '/workspace'
    }, {
      id: 'archived',
      label: 'Archived Projects',
      disabled: true
    }, {
      id: 'project-old',
      label: 'Old Project',
      path: '/workspace/archived/old-project'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with some disabled items.'
      }
    }
  }
}`,...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,he,be;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    context: 'consultant',
    items: [{
      id: 'workspace',
      label: 'Workspace',
      path: '/workspace',
      workspaceContext: 'consultant'
    }, {
      id: 'shared',
      label: 'Shared Area',
      path: '/shared',
      workspaceContext: 'neutral'
    }, {
      id: 'client-area',
      label: 'Client Portal',
      path: '/shared/client',
      workspaceContext: 'client'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb navigation with items having different workspace contexts.'
      }
    }
  }
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,ve,we;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 3
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Breadcrumb navigation optimized for mobile viewport with truncated labels.'
      }
    }
  }
}`,...(we=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ke,fe,ye;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'Breadcrumb navigation on tablet viewport.'
      }
    }
  }
}`,...(ye=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var je,Ce,Ie;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    context: 'consultant'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb navigation. Click on any breadcrumb item to see the action in the Actions panel.'
      }
    }
  }
}`,...(Ie=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Ne,Be,Se;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Consultant Context</h3>
        <BreadcrumbNav context="consultant" items={sampleItems} onItemClick={action('consultant-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Client Context</h3>
        <BreadcrumbNav context="client" items={sampleItems} onItemClick={action('client-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Admin Context</h3>
        <BreadcrumbNav context="admin" items={sampleItems} onItemClick={action('admin-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Expert Context</h3>
        <BreadcrumbNav context="expert" items={sampleItems} onItemClick={action('expert-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Tool Creator Context</h3>
        <BreadcrumbNav context="tool-creator" items={sampleItems} onItemClick={action('tool-creator-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Founder Context</h3>
        <BreadcrumbNav context="founder" items={sampleItems} onItemClick={action('founder-click')} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Neutral Context</h3>
        <BreadcrumbNav context="neutral" items={sampleItems} onItemClick={action('neutral-click')} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison of breadcrumb navigation across all workspace contexts.'
      }
    }
  }
}`,...(Se=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};const et=["Default","ConsultantContext","ClientContext","ExpertContext","FounderContext","ShortPath","LongPathTruncated","WithoutHome","CustomSeparator","NonResponsive","WithDisabledItems","MixedContextItems","MobileView","TabletView","InteractiveExample","AllContexts"];export{N as AllContexts,u as ClientContext,p as ConsultantContext,w as CustomSeparator,d as Default,x as ExpertContext,h as FounderContext,I as InteractiveExample,g as LongPathTruncated,y as MixedContextItems,j as MobileView,k as NonResponsive,b as ShortPath,C as TabletView,f as WithDisabledItems,v as WithoutHome,et as __namedExportsOrder,Ze as default};
