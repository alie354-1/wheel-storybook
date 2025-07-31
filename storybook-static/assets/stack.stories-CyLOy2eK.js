import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{S as b}from"./separator-fURmX4DE.js";import{S as c}from"./stack-6K505iai.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const L={title:"Layout/Stack",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"A layout component for stacking elements vertically or horizontally."}}},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]},spacing:{control:"select",options:["none","sm","md","lg","xl"]},align:{control:"select",options:["start","end","center","stretch"]}}},i=r.jsx("div",{className:"bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg",children:"Stack Item"}),t={args:{children:Array.from({length:3},(l,e)=>r.jsx("div",{children:i},e))}},a={args:{...t.args,direction:"horizontal"}},n={args:{...t.args,separator:r.jsx(b,{})}},o={args:{...t.args,align:"center"}},s={render:()=>r.jsxs("div",{className:"space-y-8",children:[r.jsx(c,{context:"consultant",children:Array.from({length:3},(l,e)=>r.jsx("div",{children:i},e))}),r.jsx(c,{context:"client",children:Array.from({length:3},(l,e)=>r.jsx("div",{children:i},e))}),r.jsx(c,{context:"admin",children:Array.from({length:3},(l,e)=>r.jsx("div",{children:i},e))})]})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 3
    }, (_, i) => <div key={i}>{content}</div>)
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: 'horizontal'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    separator: <Separator />
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,v,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'center'
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var j,A,_;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Stack context="consultant">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Stack>
      <Stack context="client">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Stack>
      <Stack context="admin">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Stack>
    </div>
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const O=["Default","Horizontal","WithSeparator","AlignCenter","WorkspaceContexts"];export{o as AlignCenter,t as Default,a as Horizontal,n as WithSeparator,s as WorkspaceContexts,O as __namedExportsOrder,L as default};
