import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as $}from"./index-B2-qRKKC.js";import{c as ee}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const t=$.forwardRef(({as:d="p",variant:te="body",size:u="md",weight:k="normal",color:x="primary",context:B="neutral",truncate:D=!1,align:F="left",responsive:P=!1,children:I,className:O,...G},H)=>{const J={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl"},K={light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},Q={primary:"text-slate-900",secondary:"text-slate-700",muted:"text-slate-500",error:"text-red-600",warning:"text-yellow-600",success:"text-green-600"},U={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},X=()=>{if(x!=="primary")return"";switch(B){case"consultant":return"text-blue-800";case"client":return"text-green-800";case"admin":return"text-gray-800";case"expert":return"text-purple-800";case"toolCreator":return"text-indigo-800";case"founder":return"text-orange-800";default:return""}},Y={xs:"sm:text-sm md:text-base",sm:"sm:text-base md:text-lg",md:"sm:text-lg md:text-xl",lg:"sm:text-xl md:text-2xl",xl:"sm:text-2xl md:text-3xl"},Z=ee(J[u],K[k],X()||Q[x],U[F],{truncate:D},P?Y[u]:"",O);return e.jsx(d,{ref:H,className:Z,...G,children:I})});t.displayName="Text";try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:"ElementType"}},variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"caption"'},{value:'"overline"'},{value:'"subtitle1"'},{value:'"subtitle2"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"light"'},{value:'"normal"'},{value:'"semibold"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"muted"'}]}},context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"toolCreator"'},{value:'"founder"'},{value:'"neutral"'}]}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},responsive:{defaultValue:{value:"false"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Typography/Text",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile text component with support for different semantic elements, variants, and workspace contexts."}}},argTypes:{as:{control:"select",options:["p","span","div","label","caption"]},variant:{control:"select",options:["body","caption","overline","subtitle1","subtitle2"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},color:{control:"select",options:["primary","secondary","muted","error","warning","success"]},align:{control:"radio",options:["left","center","right","justify"]},truncate:{control:"boolean"},responsive:{control:"boolean"}}},r={args:{children:"This is a default body text."}},s={args:{as:"span",children:"This text is rendered as a span.",size:"lg",weight:"bold",color:"primary"}},a={args:{children:"This is a very long text that will be truncated if it exceeds the container width.",truncate:!0,className:"w-64"}},n={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{color:"primary",children:"Primary Color"}),e.jsx(t,{color:"secondary",children:"Secondary Color"}),e.jsx(t,{color:"muted",children:"Muted Color"}),e.jsx(t,{color:"success",children:"Success Color"}),e.jsx(t,{color:"warning",children:"Warning Color"}),e.jsx(t,{color:"error",children:"Error Color"})]})},o={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{size:"xs",children:"Extra Small (xs)"}),e.jsx(t,{size:"sm",children:"Small (sm)"}),e.jsx(t,{size:"md",children:"Medium (md)"}),e.jsx(t,{size:"lg",children:"Large (lg)"}),e.jsx(t,{size:"xl",children:"Extra Large (xl)"})]})},l={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{weight:"light",children:"Light"}),e.jsx(t,{weight:"normal",children:"Normal"}),e.jsx(t,{weight:"medium",children:"Medium"}),e.jsx(t,{weight:"semibold",children:"Semibold"}),e.jsx(t,{weight:"bold",children:"Bold"})]})},i={args:{children:"This text is responsive.",responsive:!0}},c={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{context:"consultant",children:"Consultant Context"}),e.jsx(t,{context:"client",children:"Client Context"}),e.jsx(t,{context:"admin",children:"Admin Context"}),e.jsx(t,{context:"expert",children:"Expert Context"}),e.jsx(t,{context:"toolCreator",children:"Tool Creator Context"}),e.jsx(t,{context:"founder",children:"Founder Context"})]})};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a default body text.'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,v,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    as: 'span',
    children: 'This text is rendered as a span.',
    size: 'lg',
    weight: 'bold',
    color: 'primary'
  }
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,y,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long text that will be truncated if it exceeds the container width.',
    truncate: true,
    className: 'w-64'
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,j,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text color="primary">Primary Color</Text>
      <Text color="secondary">Secondary Color</Text>
      <Text color="muted">Muted Color</Text>
      <Text color="success">Success Color</Text>
      <Text color="warning">Warning Color</Text>
      <Text color="error">Error Color</Text>
    </div>
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,N,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="md">Medium (md)</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
    </div>
}`,...(z=(N=o.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var E,q,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text weight="light">Light</Text>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="bold">Bold</Text>
    </div>
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,L,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'This text is responsive.',
    responsive: true
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,A,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text context="consultant">Consultant Context</Text>
      <Text context="client">Client Context</Text>
      <Text context="admin">Admin Context</Text>
      <Text context="expert">Expert Context</Text>
      <Text context="toolCreator">Tool Creator Context</Text>
      <Text context="founder">Founder Context</Text>
    </div>
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const ce=["Default","AsSpan","Truncated","Colors","Sizes","Weights","Responsive","WorkspaceContexts"];export{s as AsSpan,n as Colors,r as Default,i as Responsive,o as Sizes,a as Truncated,l as Weights,c as WorkspaceContexts,ce as __namedExportsOrder,ie as default};
