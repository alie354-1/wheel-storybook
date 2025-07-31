import{j as e}from"./jsx-runtime-BdivIsZm.js";import{C as t}from"./container-Z7k16UFv.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const F={title:"Layout/Container",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"A layout component for constraining the width of content and centering it."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","full"]},padding:{control:"select",options:["none","sm","md","lg","xl"]},margin:{control:"select",options:["none","sm","md","lg","xl"]},fluid:{control:"boolean"},centerContent:{control:"boolean"}}},n=e.jsx("div",{className:"bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg",children:"Container Content"}),r={args:{children:n}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{size:"xs",children:n}),e.jsx(t,{size:"sm",children:n}),e.jsx(t,{size:"md",children:n}),e.jsx(t,{size:"lg",children:n}),e.jsx(t,{size:"xl",children:n}),e.jsx(t,{size:"2xl",children:n}),e.jsx(t,{size:"full",children:n})]})},s={args:{children:n,fluid:!0}},a={args:{children:n,centerContent:!1}},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{context:"consultant",children:n}),e.jsx(t,{context:"client",children:n}),e.jsx(t,{context:"admin",children:n})]})};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: content
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Container size="xs">{content}</Container>
      <Container size="sm">{content}</Container>
      <Container size="md">{content}</Container>
      <Container size="lg">{content}</Container>
      <Container size="xl">{content}</Container>
      <Container size="2xl">{content}</Container>
      <Container size="full">{content}</Container>
    </div>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,C,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: content,
    fluid: true
  }
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var h,z,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: content,
    centerContent: false
  }
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var j,b,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Container context="consultant">{content}</Container>
      <Container context="client">{content}</Container>
      <Container context="admin">{content}</Container>
    </div>
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const W=["Default","Sizes","Fluid","NotCentered","WorkspaceContexts"];export{r as Default,s as Fluid,a as NotCentered,o as Sizes,c as WorkspaceContexts,W as __namedExportsOrder,F as default};
