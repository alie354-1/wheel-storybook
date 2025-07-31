import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{C as t}from"./currencyinput-QYgQ-G7i.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E={title:"Components/Form/CurrencyInput",component:t,parameters:{layout:"centered",docs:{description:{component:"A specialized input component for currency values with workspace context awareness."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},validationState:{control:"select",options:["none","error","warning","success"],description:"Validation state of the input"},disabled:{control:"boolean",description:"Whether the input is disabled"},required:{control:"boolean",description:"Whether the field is required"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},prefix:{control:"text"},suffix:{control:"text"},decimalsLimit:{control:"number"},intlConfig:{control:"object"}}},r={args:{label:"Amount",helperText:"Enter the total amount.",prefix:"$",placeholder:"1,000.00"}},n={args:{label:"Price",intlConfig:{locale:"de-DE",currency:"EUR"},placeholder:"1.234,56 €"}},o={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(t,{label:"Error State",validationState:"error",errorMessage:"Amount cannot be zero.",defaultValue:0,prefix:"$"}),e.jsx(t,{label:"Warning State",validationState:"warning",warningMessage:"Please double-check the amount.",defaultValue:1e6,prefix:"$"}),e.jsx(t,{label:"Success State",validationState:"success",successMessage:"Amount is valid.",defaultValue:500,prefix:"$"})]})},a={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-4xl",children:[e.jsx(t,{label:"Consultant Context",context:"consultant",prefix:"$"}),e.jsx(t,{label:"Client Context",context:"client",prefix:"$"}),e.jsx(t,{label:"Admin Context",context:"admin",prefix:"$"}),e.jsx(t,{label:"Expert Context",context:"expert",prefix:"$"}),e.jsx(t,{label:"Tool Creator Context",context:"toolCreator",prefix:"$"}),e.jsx(t,{label:"Founder Context",context:"founder",prefix:"$"})]})},s={args:{label:"Disabled Currency Input",defaultValue:1234.56,prefix:"$",disabled:!0}};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    helperText: 'Enter the total amount.',
    prefix: '$',
    placeholder: '1,000.00'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    intlConfig: {
      locale: 'de-DE',
      currency: 'EUR'
    },
    placeholder: '1.234,56 €'
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,m,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">
      <CustomCurrencyInput label="Error State" validationState="error" errorMessage="Amount cannot be zero." defaultValue={0} prefix="$" />
      <CustomCurrencyInput label="Warning State" validationState="warning" warningMessage="Please double-check the amount." defaultValue={1000000} prefix="$" />
      <CustomCurrencyInput label="Success State" validationState="success" successMessage="Amount is valid." defaultValue={500} prefix="$" />
    </div>
}`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var f,b,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <CustomCurrencyInput label="Consultant Context" context="consultant" prefix="$" />
      <CustomCurrencyInput label="Client Context" context="client" prefix="$" />
      <CustomCurrencyInput label="Admin Context" context="admin" prefix="$" />
      <CustomCurrencyInput label="Expert Context" context="expert" prefix="$" />
      <CustomCurrencyInput label="Tool Creator Context" context="toolCreator" prefix="$" />
      <CustomCurrencyInput label="Founder Context" context="founder" prefix="$" />
    </div>
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,S,$;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Currency Input',
    defaultValue: 1234.56,
    prefix: '$',
    disabled: true
  }
}`,...($=(S=s.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const I=["Default","Euro","ValidationStates","WorkspaceContexts","Disabled"];export{r as Default,s as Disabled,n as Euro,o as ValidationStates,a as WorkspaceContexts,I as __namedExportsOrder,E as default};
