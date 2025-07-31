import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{A as e}from"./Avatar-9FBF7p-C.js";import{B as N}from"./badge-CYGCTGQ7.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./StatusDot-BcOjilU9.js";const O={title:"Components/Media/Avatar",component:e,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a user's avatar with presence indicators."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},shape:{control:"radio",options:["circle","square"]},presence:{control:"select",options:[void 0,"online","offline","busy","away","inactive"]}}},r={args:{src:"https://i.pravatar.cc/150?u=a042581f4e29026024d",alt:"User Avatar"}},s={render:()=>a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(e,{size:"xs",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{size:"sm",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{size:"md",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{size:"lg",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{size:"xl",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{size:"2xl",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"})]})},t={render:()=>a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(e,{shape:"circle",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(e,{shape:"square",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"})]})},c={args:{...r.args,presence:"online"}},o={args:{...r.args,badge:a.jsx(N,{count:3,size:"sm"})}},n={args:{alt:"John Doe"}},p={args:{alt:"Jane Doe",fallback:"JD"}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    alt: 'User Avatar'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,v;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Avatar size="xs" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="2xl" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </div>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,h,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Avatar shape="circle" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar shape="square" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </div>
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,z,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    presence: 'online'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var j,S,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badge: <Badge count={3} size="sm" />
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var b,k,J;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    alt: 'John Doe'
  }
}`,...(J=(k=n.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var y,B,F;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    alt: 'Jane Doe',
    fallback: 'JD'
  }
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const R=["Default","Sizes","Shapes","WithPresence","WithBadge","Fallback","CustomFallback"];export{p as CustomFallback,r as Default,n as Fallback,t as Shapes,s as Sizes,o as WithBadge,c as WithPresence,R as __namedExportsOrder,O as default};
