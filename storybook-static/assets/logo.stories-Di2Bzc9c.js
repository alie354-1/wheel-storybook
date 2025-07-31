import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{L as o}from"./Logo-BCeQuN96.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const h={title:"Components/Media/Logo",component:o,parameters:{layout:"centered",docs:{description:{component:"A component for displaying workspace-specific logos."}}},argTypes:{variant:{control:"select",options:["full","mark","wordmark"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"]},theme:{control:"radio",options:["light","dark"]}}},s={args:{context:"neutral",variant:"full",size:"md"}},r={render:()=>e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(o,{variant:"full"}),e.jsx(o,{variant:"mark"}),e.jsx(o,{variant:"wordmark"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(o,{size:"xs"}),e.jsx(o,{size:"sm"}),e.jsx(o,{size:"md"}),e.jsx(o,{size:"lg"}),e.jsx(o,{size:"xl"})]})},n={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-8",children:[e.jsx(o,{context:"consultant"}),e.jsx(o,{context:"client"}),e.jsx(o,{context:"admin"}),e.jsx(o,{context:"expert"}),e.jsx(o,{context:"toolCreator"}),e.jsx(o,{context:"founder"})]})};var a,c,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    variant: 'full',
    size: 'md'
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-8">
      <Logo variant="full" />
      <Logo variant="mark" />
      <Logo variant="wordmark" />
    </div>
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var x,p,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-8">
      <Logo size="xs" />
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,f,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-8">
      <Logo context="consultant" />
      <Logo context="client" />
      <Logo context="admin" />
      <Logo context="expert" />
      <Logo context="toolCreator" />
      <Logo context="founder" />
    </div>
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const w=["Default","Variants","Sizes","WorkspaceContexts"];export{s as Default,t as Sizes,r as Variants,n as WorkspaceContexts,w as __namedExportsOrder,h as default};
