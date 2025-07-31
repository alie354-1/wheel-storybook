import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./index-DUolvyrz.js";import{r as o}from"./index-B2-qRKKC.js";import{T as S}from"./bootstrap-BZvWbWhX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./toConsumableArray-BIhBLUu1.js";import"./index-CFX93qP1.js";const a=o.forwardRef(({context:v="neutral",values:g=[25,75],onChange:l,min:f=0,max:i=100,step:r=1,label:h,disabled:C=!1,name:J,id:F,withTooltip:x=!1},z)=>{const[t,P]=o.useState(g[0]),[n,L]=o.useState(g[1]),O=o.useCallback(b=>{const s=Math.min(Number(b.target.value),n-r);P(s),l&&l([s,n])},[n,r,l]),B=o.useCallback(b=>{const s=Math.max(Number(b.target.value),t+r);L(s),l&&l([t,s])},[t,r,l]),y=()=>{switch(v){case"consultant":return"accent-blue-600";case"client":return"accent-green-600";case"admin":return"accent-gray-600";case"expert":return"accent-purple-600";case"toolCreator":return"accent-indigo-600";case"founder":return"accent-orange-600";default:return"accent-slate-600"}},j=F||`dual-range-slider-${Math.random().toString(36).substr(2,9)}`,G=`${j}-min`,H=`${j}-max`;return e.jsxs("div",{ref:z,children:[h&&e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:h}),e.jsxs("div",{className:"relative h-10",children:[e.jsx(S,{placement:"top",overlay:e.jsx("span",{children:t}),visible:x,children:e.jsx("input",{id:G,type:"range",min:f,max:i,step:r,value:t,onChange:O,className:`absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-10 ${y()}`,disabled:C})}),e.jsx(S,{placement:"top",overlay:e.jsx("span",{children:n}),visible:x,children:e.jsx("input",{id:H,type:"range",min:f,max:i,step:r,value:n,onChange:B,className:"absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-10",disabled:C})}),e.jsxs("div",{className:"relative h-2",children:[e.jsx("div",{className:"absolute w-full h-2 bg-gray-200 rounded-lg"}),e.jsx("div",{className:`absolute h-2 rounded-lg ${y().replace("accent","bg")}`,style:{left:`${t/i*100}%`,right:`${100-n/i*100}%`}})]})]}),!x&&e.jsxs("div",{className:"flex justify-between text-sm text-slate-500 mt-1",children:[e.jsx("span",{children:t}),e.jsx("span",{children:n})]})]})});a.displayName="DualRangeSlider";try{a.displayName="DualRangeSlider",a.__docgenInfo={description:"",displayName:"DualRangeSlider",props:{context:{defaultValue:{value:"neutral"},description:"Workspace context for styling",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"founder"'},{value:'"neutral"'},{value:'"toolCreator"'}]}},values:{defaultValue:{value:"[25, 75]"},description:"The current values of the slider",name:"values",required:!1,type:{name:"[number, number]"}},onChange:{defaultValue:null,description:"Callback when the values change",name:"onChange",required:!1,type:{name:"(values: [number, number]) => void"}},min:{defaultValue:{value:"0"},description:"The minimum value of the slider",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"The maximum value of the slider",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"The step value of the slider",name:"step",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Label for the slider",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the slider is disabled",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"ID attribute",name:"id",required:!1,type:{name:"string"}},withTooltip:{defaultValue:{value:"false"},description:"Show tooltips with current values",name:"withTooltip",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Form/DualRangeSlider",component:a,parameters:{layout:"centered",docs:{description:{component:"A range input component for selecting a minimum and maximum value with workspace context support."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},values:{control:"object"},min:{control:"number"},max:{control:"number"},step:{control:"number"},label:{control:"text"},disabled:{control:"boolean"}}},u={args:{label:"Price Range",values:[25,75],min:0,max:100}},c={args:{label:"Age Range",values:[30,60],min:18,max:100,step:1}},d={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(a,{label:"Consultant Context",context:"consultant",values:[20,80]}),e.jsx(a,{label:"Client Context",context:"client",values:[30,70]}),e.jsx(a,{label:"Admin Context",context:"admin",values:[40,60]}),e.jsx(a,{label:"Expert Context",context:"expert",values:[10,90]}),e.jsx(a,{label:"Tool Creator Context",context:"toolCreator",values:[25,75]}),e.jsx(a,{label:"Founder Context",context:"founder",values:[35,65]})]})},m={args:{label:"Disabled Dual Range Slider",values:[25,75],disabled:!0}},p={args:{label:"Dual Range Slider with Tooltip",values:[30,70],withTooltip:!0}};var D,R,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Price Range',
    values: [25, 75],
    min: 0,
    max: 100
  }
}`,...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var N,T,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Age Range',
    values: [30, 60],
    min: 18,
    max: 100,
    step: 1
  }
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,_,k;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">
      <DualRangeSlider label="Consultant Context" context="consultant" values={[20, 80]} />
      <DualRangeSlider label="Client Context" context="client" values={[30, 70]} />
      <DualRangeSlider label="Admin Context" context="admin" values={[40, 60]} />
      <DualRangeSlider label="Expert Context" context="expert" values={[10, 90]} />
      <DualRangeSlider label="Tool Creator Context" context="toolCreator" values={[25, 75]} />
      <DualRangeSlider label="Founder Context" context="founder" values={[35, 65]} />
    </div>
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var I,M,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Dual Range Slider',
    values: [25, 75],
    disabled: true
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var $,A,E;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Dual Range Slider with Tooltip',
    values: [30, 70],
    withTooltip: true
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const te=["Default","Stepped","WorkspaceContexts","Disabled","WithTooltip"];export{u as Default,m as Disabled,c as Stepped,p as WithTooltip,d as WorkspaceContexts,te as __namedExportsOrder,ae as default};
