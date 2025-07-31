import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{B as e}from"./badge-CYGCTGQ7.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const V={title:"Components/Feedback/Badge",component:e,parameters:{layout:"centered",docs:{description:{component:"A component for displaying status, counts, or other small bits of information."}}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info"]},size:{control:"radio",options:["sm","md","lg"]},dot:{control:"boolean"},count:{control:"number"},maxCount:{control:"number"},showZero:{control:"boolean"}}},a={args:{children:"Default Badge"}},s={render:()=>r.jsxs("div",{className:"flex space-x-2",children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"warning",children:"Warning"}),r.jsx(e,{variant:"error",children:"Error"}),r.jsx(e,{variant:"info",children:"Info"})]})},n={render:()=>r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})},o={args:{count:5}},t={args:{count:120,maxCount:99}},c={args:{dot:!0}},i={args:{dot:!0,children:"Online"}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Default Badge'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,B,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(h=(B=n.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 5
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,y,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    count: 120,
    maxCount: 99
  }
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var C,D,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    dot: true
  }
}`,...(b=(D=c.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var W,w,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    dot: true,
    children: 'Online'
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const _=["Default","Variants","Sizes","WithCount","MaxCount","Dot","DotWithText"];export{a as Default,c as Dot,i as DotWithText,t as MaxCount,n as Sizes,s as Variants,o as WithCount,_ as __namedExportsOrder,V as default};
