import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as B}from"./index-B2-qRKKC.js";import{c as G}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const l=B.forwardRef(({level:n,size:a,weight:V="bold",color:c="primary",context:T="neutral",truncate:X=!1,align:E="left",responsive:M=!1,children:R,className:W,...k},A)=>{const D=`h${n}`,u={xs:"text-lg",sm:"text-xl",md:"text-2xl",lg:"text-3xl",xl:"text-4xl","2xl":"text-5xl","3xl":"text-6xl"},F={light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},P={primary:"text-slate-900",secondary:"text-slate-700",muted:"text-slate-500",error:"text-red-600",warning:"text-yellow-600",success:"text-green-600"},I={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},O=()=>{if(c!=="primary")return"";switch(T){case"consultant":return"text-blue-800";case"client":return"text-green-800";case"admin":return"text-gray-800";case"expert":return"text-purple-800";case"toolCreator":return"text-indigo-800";case"founder":return"text-orange-800";default:return""}},x={xs:"sm:text-lg md:text-xl",sm:"sm:text-xl md:text-2xl",md:"sm:text-2xl md:text-3xl",lg:"sm:text-3xl md:text-4xl",xl:"sm:text-4xl md:text-5xl","2xl":"sm:text-5xl md:text-6xl","3xl":"sm:text-6xl md:text-7xl"},$=G(a?u[a]:u[n===1?"3xl":n===2?"2xl":n===3?"xl":n===4?"lg":n===5?"md":"sm"],F[V],O()||P[c],I[E],{truncate:X},M?a?x[a]:x[n===1?"3xl":n===2?"2xl":n===3?"xl":n===4?"lg":n===5?"md":"sm"]:"",W);return e.jsx(D,{ref:A,className:$,...k,children:R})});l.displayName="Heading";try{l.displayName="Heading",l.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"3"},{value:"4"},{value:"1"},{value:"2"},{value:"5"},{value:"6"}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},weight:{defaultValue:{value:"bold"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"light"'},{value:'"normal"'},{value:'"semibold"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"muted"'}]}},context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"toolCreator"'},{value:'"founder"'},{value:'"neutral"'}]}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},responsive:{defaultValue:{value:"false"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Typography/Heading",component:l,parameters:{layout:"centered",docs:{description:{component:"A component for rendering headings with support for different levels, variants, and workspace contexts."}}},argTypes:{level:{control:{type:"range",min:1,max:6,step:1}},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},color:{control:"select",options:["primary","secondary","muted","error","warning","success"]},align:{control:"radio",options:["left","center","right","justify"]},truncate:{control:"boolean"},responsive:{control:"boolean"}}},r={args:{level:1,children:"This is a Level 1 Heading"}},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{level:1,children:"Heading Level 1"}),e.jsx(l,{level:2,children:"Heading Level 2"}),e.jsx(l,{level:3,children:"Heading Level 3"}),e.jsx(l,{level:4,children:"Heading Level 4"}),e.jsx(l,{level:5,children:"Heading Level 5"}),e.jsx(l,{level:6,children:"Heading Level 6"})]})},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{level:1,size:"xs",children:"X-Small Heading"}),e.jsx(l,{level:1,size:"sm",children:"Small Heading"}),e.jsx(l,{level:1,size:"md",children:"Medium Heading"}),e.jsx(l,{level:1,size:"lg",children:"Large Heading"}),e.jsx(l,{level:1,size:"xl",children:"X-Large Heading"}),e.jsx(l,{level:1,size:"2xl",children:"2X-Large Heading"}),e.jsx(l,{level:1,size:"3xl",children:"3X-Large Heading"})]})},o={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{level:2,color:"primary",children:"Primary Color"}),e.jsx(l,{level:2,color:"secondary",children:"Secondary Color"}),e.jsx(l,{level:2,color:"muted",children:"Muted Color"}),e.jsx(l,{level:2,color:"success",children:"Success Color"}),e.jsx(l,{level:2,color:"warning",children:"Warning Color"}),e.jsx(l,{level:2,color:"error",children:"Error Color"})]})},i={args:{level:1,children:"This heading is responsive.",responsive:!0}},d={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{level:2,context:"consultant",children:"Consultant Context"}),e.jsx(l,{level:2,context:"client",children:"Client Context"}),e.jsx(l,{level:2,context:"admin",children:"Admin Context"}),e.jsx(l,{level:2,context:"expert",children:"Expert Context"}),e.jsx(l,{level:2,context:"toolCreator",children:"Tool Creator Context"}),e.jsx(l,{level:2,context:"founder",children:"Founder Context"})]})};var m,g,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'This is a Level 1 Heading'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var p,H,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
}`,...(h=(H=t.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var f,y,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading level={1} size="xs">X-Small Heading</Heading>
      <Heading level={1} size="sm">Small Heading</Heading>
      <Heading level={1} size="md">Medium Heading</Heading>
      <Heading level={1} size="lg">Large Heading</Heading>
      <Heading level={1} size="xl">X-Large Heading</Heading>
      <Heading level={1} size="2xl">2X-Large Heading</Heading>
      <Heading level={1} size="3xl">3X-Large Heading</Heading>
    </div>
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,L,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Heading level={2} color="primary">Primary Color</Heading>
      <Heading level={2} color="secondary">Secondary Color</Heading>
      <Heading level={2} color="muted">Muted Color</Heading>
      <Heading level={2} color="success">Success Color</Heading>
      <Heading level={2} color="warning">Warning Color</Heading>
      <Heading level={2} color="error">Error Color</Heading>
    </div>
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var S,b,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'This heading is responsive.',
    responsive: true
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,_,q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Heading level={2} context="consultant">Consultant Context</Heading>
      <Heading level={2} context="client">Client Context</Heading>
      <Heading level={2} context="admin">Admin Context</Heading>
      <Heading level={2} context="expert">Expert Context</Heading>
      <Heading level={2} context="toolCreator">Tool Creator Context</Heading>
      <Heading level={2} context="founder">Founder Context</Heading>
    </div>
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const le=["Default","Levels","Sizes","Colors","Responsive","WorkspaceContexts"];export{o as Colors,r as Default,t as Levels,i as Responsive,s as Sizes,d as WorkspaceContexts,le as __namedExportsOrder,ee as default};
