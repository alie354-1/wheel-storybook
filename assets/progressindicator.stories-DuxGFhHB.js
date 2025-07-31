import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{P as r}from"./progressindicator-4hkvR5i4.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const z={title:"Components/Feedback/ProgressIndicator",component:r,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a progress indicator."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:"radio",options:["sm","md","lg"]},context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"]}}},s={args:{value:50}},o={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(r,{size:"sm",value:30}),e.jsx(r,{size:"md",value:50}),e.jsx(r,{size:"lg",value:70})]})},t={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(r,{context:"consultant",value:25}),e.jsx(r,{context:"client",value:45}),e.jsx(r,{context:"admin",value:65}),e.jsx(r,{context:"expert",value:85}),e.jsx(r,{context:"toolCreator",value:95}),e.jsx(r,{context:"founder",value:100})]})};var a,n,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <ProgressIndicator size="sm" value={30} />
      <ProgressIndicator size="md" value={50} />
      <ProgressIndicator size="lg" value={70} />
    </div>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <ProgressIndicator context="consultant" value={25} />
      <ProgressIndicator context="client" value={45} />
      <ProgressIndicator context="admin" value={65} />
      <ProgressIndicator context="expert" value={85} />
      <ProgressIndicator context="toolCreator" value={95} />
      <ProgressIndicator context="founder" value={100} />
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","Sizes","WorkspaceContexts"];export{s as Default,o as Sizes,t as WorkspaceContexts,y as __namedExportsOrder,z as default};
