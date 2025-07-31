import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{B as w}from"./button-Cqm7tkEM.js";import{C as c}from"./card-M3SK2Azw.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const _={title:"Layout/Card",component:c,parameters:{layout:"centered",docs:{description:{component:"A versatile card component for displaying content in a structured way."}}},argTypes:{variant:{control:"select",options:["elevated","outlined","filled"]},elevation:{control:{type:"range",min:0,max:5,step:1}},padding:{control:"select",options:["none","sm","md","lg","xl"]},radius:{control:"select",options:["none","sm","md","lg","xl"]},interactive:{control:"boolean"}}},e={args:{children:"This is the content of the card.",className:"w-80"}},a={args:{...e.args,header:r.jsx("h3",{children:"Card Header"}),footer:r.jsx(w,{children:"Learn More"})}},t={args:{...e.args,variant:"outlined"}},n={args:{...e.args,variant:"filled"}},o={args:{...e.args,interactive:!0}},s={render:()=>{var i,d,l;return r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsx(c,{context:"consultant",variant:"outlined",children:(i=e.args)==null?void 0:i.children}),r.jsx(c,{context:"client",variant:"outlined",children:(d=e.args)==null?void 0:d.children}),r.jsx(c,{context:"admin",variant:"outlined",children:(l=e.args)==null?void 0:l.children})]})}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is the content of the card.',
    className: 'w-80'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: <h3>Card Header</h3>,
    footer: <Button>Learn More</Button>
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,x,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,j,y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'filled'
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,B,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    interactive: true
  }
}`,...(F=(B=o.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,N,W;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <Card context="consultant" variant="outlined">{Default.args?.children}</Card>
      <Card context="client" variant="outlined">{Default.args?.children}</Card>
      <Card context="admin" variant="outlined">{Default.args?.children}</Card>
    </div>
}`,...(W=(N=s.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const b=["Default","WithHeaderAndFooter","Outlined","Filled","Interactive","WorkspaceContexts"];export{e as Default,n as Filled,o as Interactive,t as Outlined,a as WithHeaderAndFooter,s as WorkspaceContexts,b as __namedExportsOrder,_ as default};
