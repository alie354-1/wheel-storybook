import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{V as r}from"./verticalslider-DXRhhGVf.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V={title:"Components/Form/VerticalSlider",component:r,parameters:{layout:"centered",docs:{description:{component:"A vertical range input component for numeric input with workspace context support."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},label:{control:"text"},disabled:{control:"boolean"}}},t={args:{label:"Brightness",value:50,min:0,max:100}},a={args:{label:"Temperature",value:20,min:0,max:40,step:2}},n={render:()=>e.jsxs("div",{className:"flex space-x-8 h-48",children:[e.jsx(r,{label:"Consultant",context:"consultant",value:25}),e.jsx(r,{label:"Client",context:"client",value:50}),e.jsx(r,{label:"Admin",context:"admin",value:75}),e.jsx(r,{label:"Expert",context:"expert",value:33}),e.jsx(r,{label:"Tool Creator",context:"toolCreator",value:66}),e.jsx(r,{label:"Founder",context:"founder",value:99})]})},l={args:{label:"Disabled Slider",value:50,disabled:!0}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Brightness',
    value: 50,
    min: 0,
    max: 100
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    value: 20,
    min: 0,
    max: 40,
    step: 2
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-8 h-48">
      <VerticalSlider label="Consultant" context="consultant" value={25} />
      <VerticalSlider label="Client" context="client" value={50} />
      <VerticalSlider label="Admin" context="admin" value={75} />
      <VerticalSlider label="Expert" context="expert" value={33} />
      <VerticalSlider label="Tool Creator" context="toolCreator" value={66} />
      <VerticalSlider label="Founder" context="founder" value={99} />
    </div>
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,v,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Slider',
    value: 50,
    disabled: true
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const h=["Default","Stepped","WorkspaceContexts","Disabled"];export{t as Default,l as Disabled,a as Stepped,n as WorkspaceContexts,h as __namedExportsOrder,V as default};
