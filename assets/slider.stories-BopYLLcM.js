import{j as e}from"./jsx-runtime-BdivIsZm.js";import{S as t}from"./slider-3m5Aqiuu.js";import"./vendor-CIaSNbmr.js";import"./index-Cgc55meF.js";import"./bootstrap-L77bMaJk.js";import"./toConsumableArray-BIhBLUu1.js";const W={title:"Components/Form/Slider",component:t,parameters:{layout:"centered",docs:{description:{component:"A range input component for numeric input with workspace context support."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},label:{control:"text"},disabled:{control:"boolean"}}},o={args:{label:"Volume",value:50,min:0,max:100}},r={args:{label:"Donation Amount",value:25,min:0,max:100,step:5}},n={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(t,{label:"Consultant Context",context:"consultant",value:25}),e.jsx(t,{label:"Client Context",context:"client",value:50}),e.jsx(t,{label:"Admin Context",context:"admin",value:75}),e.jsx(t,{label:"Expert Context",context:"expert",value:33}),e.jsx(t,{label:"Tool Creator Context",context:"toolCreator",value:66}),e.jsx(t,{label:"Founder Context",context:"founder",value:99})]})},a={args:{label:"Disabled Slider",value:50,disabled:!0}},l={args:{label:"Slider with Tooltip",value:75,withTooltip:!0}};var s,c,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Donation Amount',
    value: 25,
    min: 0,
    max: 100,
    step: 5
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,x,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">
      <Slider label="Consultant Context" context="consultant" value={25} />
      <Slider label="Client Context" context="client" value={50} />
      <Slider label="Admin Context" context="admin" value={75} />
      <Slider label="Expert Context" context="expert" value={33} />
      <Slider label="Tool Creator Context" context="toolCreator" value={66} />
      <Slider label="Founder Context" context="founder" value={99} />
    </div>
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,C,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Slider',
    value: 50,
    disabled: true
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var g,f,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Slider with Tooltip',
    value: 75,
    withTooltip: true
  }
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const k=["Default","Stepped","WorkspaceContexts","Disabled","WithTooltip"];export{o as Default,a as Disabled,r as Stepped,l as WithTooltip,n as WorkspaceContexts,k as __namedExportsOrder,W as default};
