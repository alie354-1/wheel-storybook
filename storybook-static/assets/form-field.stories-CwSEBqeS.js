import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{I as W}from"./input-BtB_vA0w.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=({label:s,id:n,required:D=!1,error:l,helperText:i,children:q,className:N="",labelClassName:E=""})=>{const I=["mb-4",N].filter(Boolean).join(" "),S=["block text-sm font-medium text-slate-700 mb-1",E].filter(Boolean).join(" ");return r.jsxs("div",{className:I,children:[r.jsxs("label",{htmlFor:n,className:S,children:[s,D&&r.jsx("span",{className:"text-red-600 ml-1",children:"*"})]}),q,l?r.jsx("p",{className:"mt-1 text-sm text-red-600",id:`${n}-error`,children:l}):i?r.jsx("p",{className:"mt-1 text-sm text-slate-600",id:`${n}-description`,children:i}):null]})},_={title:"UI/FormField",component:T,tags:["autodocs"],argTypes:{label:{control:"text"},id:{control:"text"},required:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},e={render:s=>r.jsx(T,{...s,children:r.jsx(W,{id:s.id,name:s.id})}),args:{label:"Name",id:"name"}},t={...e,args:{...e.args,helperText:"This is some helper text."}},a={...e,args:{...e.args,error:"This field is required."}},o={...e,args:{...e.args,required:!0}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <FormField {...args}>
      <Input id={args.id} name={args.id} />
    </FormField>,
  args: {
    label: "Name",
    id: "name"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    helperText: "This is some helper text."
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    error: "This field is required."
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,b,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...(F=(b=o.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const $=["Default","WithHelperText","WithError","Required"];export{e as Default,o as Required,a as WithError,t as WithHelperText,$ as __namedExportsOrder,_ as default};
