import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{F as c}from"./flex-B2tn7VQA.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const J={title:"Layout/Flex",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"A layout component for creating flexbox-based layouts."}}},argTypes:{direction:{control:"select",options:["row","column","row-reverse","column-reverse"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},justify:{control:"select",options:["start","end","center","between","around","evenly"]},align:{control:"select",options:["start","end","center","stretch","baseline"]},gap:{control:"select",options:["none","sm","md","lg","xl"]}}},l=e.jsx("div",{className:"bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg",children:"Flex Item"}),n={args:{children:Array.from({length:3},(i,r)=>e.jsx("div",{children:l},r))}},t={args:{...n.args,direction:"column"}},o={args:{...n.args,justify:"center"}},s={args:{...n.args,align:"end",className:"h-48"}},a={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(c,{context:"consultant",children:Array.from({length:3},(i,r)=>e.jsx("div",{children:l},r))}),e.jsx(c,{context:"client",children:Array.from({length:3},(i,r)=>e.jsx("div",{children:l},r))}),e.jsx(c,{context:"admin",children:Array.from({length:3},(i,r)=>e.jsx("div",{children:l},r))})]})};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 3
    }, (_, i) => <div key={i}>{content}</div>)
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: 'column'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    justify: 'center'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,j,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'end',
    className: 'h-48'
  }
}`,...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var b,F,_;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Flex context="consultant">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Flex>
      <Flex context="client">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Flex>
      <Flex context="admin">{Array.from({
        length: 3
      }, (_, i) => <div key={i}>{content}</div>)}</Flex>
    </div>
}`,...(_=(F=a.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const W=["Default","Column","JustifyCenter","AlignEnd","WorkspaceContexts"];export{s as AlignEnd,t as Column,n as Default,o as JustifyCenter,a as WorkspaceContexts,W as __namedExportsOrder,J as default};
