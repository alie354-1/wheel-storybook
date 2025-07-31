import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{T as t}from"./timepicker-DG-PATwk.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z={title:"Components/Form/TimePicker",component:t,parameters:{layout:"centered",docs:{description:{component:"A specialized time input component with timezone support and workspace context awareness."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},format:{control:"radio",options:["12h","24h"],description:"Time format"},validationState:{control:"select",options:["none","error","warning","success"],description:"Validation state of the input"},disabled:{control:"boolean",description:"Whether the time picker is disabled"},required:{control:"boolean",description:"Whether the field is required"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},value:{control:"text"}}},a={args:{label:"Select a time",helperText:"This is a standard time picker."}},r={args:{label:"12-Hour Format",format:"12h",value:"14:30"}},s={args:{label:"24-Hour Format",format:"24h",value:"14:30"}},o={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(t,{label:"Error State",validationState:"error",errorMessage:"Please select a valid time.",value:"10:00"}),e.jsx(t,{label:"Warning State",validationState:"warning",warningMessage:"This time is outside of business hours.",value:"18:45"}),e.jsx(t,{label:"Success State",validationState:"success",successMessage:"Time successfully selected.",value:"09:15"})]})},n={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-4xl",children:[e.jsx(t,{label:"Consultant Context",context:"consultant"}),e.jsx(t,{label:"Client Context",context:"client"}),e.jsx(t,{label:"Admin Context",context:"admin"}),e.jsx(t,{label:"Expert Context",context:"expert"}),e.jsx(t,{label:"Tool Creator Context",context:"toolCreator"}),e.jsx(t,{label:"Founder Context",context:"founder"})]})},i={args:{label:"Disabled Time Picker",value:"12:00",disabled:!0}},l={args:{label:"Meeting Time",description:"All times are in your local timezone.",value:"15:00"}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Select a time',
    helperText: 'This is a standard time picker.'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: '12-Hour Format',
    format: '12h',
    value: '14:30'
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,b,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '24-Hour Format',
    format: '24h',
    value: '14:30'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,T,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">
      <TimePicker label="Error State" validationState="error" errorMessage="Please select a valid time." value="10:00" />
      <TimePicker label="Warning State" validationState="warning" warningMessage="This time is outside of business hours." value="18:45" />
      <TimePicker label="Success State" validationState="success" successMessage="Time successfully selected." value="09:15" />
    </div>
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,f,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <TimePicker label="Consultant Context" context="consultant" />
      <TimePicker label="Client Context" context="client" />
      <TimePicker label="Admin Context" context="admin" />
      <TimePicker label="Expert Context" context="expert" />
      <TimePicker label="Tool Creator Context" context="toolCreator" />
      <TimePicker label="Founder Context" context="founder" />
    </div>
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,P,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Time Picker',
    value: '12:00',
    disabled: true
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var F,M,y;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Meeting Time',
    description: 'All times are in your local timezone.',
    value: '15:00'
  }
}`,...(y=(M=l.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};const H=["Default","Format12h","Format24h","ValidationStates","WorkspaceContexts","Disabled","WithDescription"];export{a as Default,i as Disabled,r as Format12h,s as Format24h,o as ValidationStates,l as WithDescription,n as WorkspaceContexts,H as __namedExportsOrder,z as default};
