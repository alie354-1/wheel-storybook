import{j as r}from"./jsx-runtime-BdivIsZm.js";import{G as i}from"./grid-DwXfsyQu.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const N={title:"Layout/Grid",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"A layout component for creating grid-based layouts."}}},argTypes:{columns:{control:"text"},rows:{control:"text"},gap:{control:"select",options:["none","sm","md","lg","xl"]}}},n=r.jsx("div",{className:"bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg text-center",children:"Grid Item"}),o={args:{children:Array.from({length:6},(t,e)=>r.jsx("div",{children:n},e))}},s={args:{columns:"repeat(auto-fit, minmax(150px, 1fr))",children:Array.from({length:8},(t,e)=>r.jsx("div",{children:n},e))}},a={render:()=>r.jsxs("div",{className:"space-y-8",children:[r.jsx(i,{gap:"sm",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))}),r.jsx(i,{gap:"md",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))}),r.jsx(i,{gap:"lg",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))}),r.jsx(i,{gap:"xl",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))})]})},d={render:()=>r.jsxs("div",{className:"space-y-8",children:[r.jsx(i,{context:"consultant",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))}),r.jsx(i,{context:"client",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))}),r.jsx(i,{context:"admin",children:Array.from({length:4},(t,e)=>r.jsx("div",{children:n},e))})]})};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 6
    }, (_, i) => <div key={i}>{content}</div>)
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    columns: 'repeat(auto-fit, minmax(150px, 1fr))',
    children: Array.from({
      length: 8
    }, (_, i) => <div key={i}>{content}</div>)
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Grid gap="sm">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="md">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="lg">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="xl">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
    </div>
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,f,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Grid context="consultant">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid context="client">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid context="admin">{Array.from({
        length: 4
      }, (_, i) => <div key={i}>{content}</div>)}</Grid>
    </div>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const D=["Default","CustomColumns","DifferentGaps","WorkspaceContexts"];export{s as CustomColumns,o as Default,a as DifferentGaps,d as WorkspaceContexts,D as __namedExportsOrder,N as default};
