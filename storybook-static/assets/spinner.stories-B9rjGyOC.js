import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{S as n}from"./spinner-OCtiqGzF.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const C={title:"Components/Feedback/Spinner",component:n,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a loading spinner with workspace context awareness."}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]},context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"]}}},t={args:{}},r={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{context:"consultant"}),e.jsx(n,{context:"client"}),e.jsx(n,{context:"admin"}),e.jsx(n,{context:"expert"}),e.jsx(n,{context:"toolCreator"}),e.jsx(n,{context:"founder"})]})};var o,a,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,d,l;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Spinner context="consultant" />
      <Spinner context="client" />
      <Spinner context="admin" />
      <Spinner context="expert" />
      <Spinner context="toolCreator" />
      <Spinner context="founder" />
    </div>
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const k=["Default","Sizes","WorkspaceContexts"];export{t as Default,r as Sizes,s as WorkspaceContexts,k as __namedExportsOrder,C as default};
