import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{P as o}from"./phoneinput-DnhyWeTn.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";const w={title:"Components/Form/PhoneInput",component:o,parameters:{layout:"centered",docs:{description:{component:"A specialized input component for international phone numbers with workspace context awareness."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},validationState:{control:"select",options:["none","error","warning","success"],description:"Validation state of the input"},disabled:{control:"boolean",description:"Whether the input is disabled"},required:{control:"boolean",description:"Whether the field is required"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},value:{control:"text"},defaultCountry:{control:"text"}}},t={args:{label:"Phone Number",helperText:"Enter your phone number with the country code."}},r={args:{label:"Phone Number (UK)",defaultCountry:"GB",value:"+447911123456"}},a={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{label:"Error State",validationState:"error",errorMessage:"This phone number is not valid.",value:"+11234567890"}),e.jsx(o,{label:"Warning State",validationState:"warning",warningMessage:"Please verify your phone number.",value:"+12025550102"}),e.jsx(o,{label:"Success State",validationState:"success",successMessage:"Phone number is valid.",value:"+12025550199"})]})},n={args:{label:"Disabled Phone Input",value:"+12025550199",disabled:!0}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    helperText: 'Enter your phone number with the country code.'
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number (UK)',
    defaultCountry: 'GB',
    value: '+447911123456'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <PhoneInput label="Error State" validationState="error" errorMessage="This phone number is not valid." value="+11234567890" />
      <PhoneInput label="Warning State" validationState="warning" warningMessage="Please verify your phone number." value="+12025550102" />
      <PhoneInput label="Success State" validationState="success" successMessage="Phone number is valid." value="+12025550199" />
    </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,g,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Phone Input',
    value: '+12025550199',
    disabled: true
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const M=["Default","UnitedKingdom","ValidationStates","Disabled"];export{t as Default,n as Disabled,r as UnitedKingdom,a as ValidationStates,M as __namedExportsOrder,w as default};
