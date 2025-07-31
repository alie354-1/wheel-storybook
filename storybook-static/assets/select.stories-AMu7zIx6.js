import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{E as t}from"./select-Bg6t_rxL.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./toConsumableArray-BIhBLUu1.js";import"./index-CFX93qP1.js";import"./floating-ui.dom-DtF1XweH.js";const W={title:"Components/Form/Select",component:t,parameters:{layout:"centered",docs:{description:{component:"An advanced select component with support for search, groups, and multi-select."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"]},validationState:{control:"select",options:["none","error","warning","success"]},selectSize:{control:"radio",options:["sm","md","lg"]},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"}}},a=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"},{value:"caramel",label:"Caramel",disabled:!0},{value:"mint",label:"Mint"}],j=[{label:"Fruits",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"}]},{label:"Vegetables",options:[{value:"carrot",label:"Carrot"},{value:"broccoli",label:"Broccoli"}]}],o={args:{label:"Favorite Flavor",options:a,helperText:"Select your favorite ice cream flavor."}},r={args:{...o.args,label:"Search for a Flavor",isSearchable:!0}},n={args:{...o.args,label:"Select Multiple Flavors",isMulti:!0}},s={args:{label:"Select a Food",options:j}},l={render:()=>e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx(t,{label:"Error State",options:a,validationState:"error",errorMessage:"This field is required."}),e.jsx(t,{label:"Warning State",options:a,validationState:"warning",warningMessage:"Are you sure about this choice?"}),e.jsx(t,{label:"Success State",options:a,validationState:"success",successMessage:"Great choice!"})]})},c={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-4xl",children:[e.jsx(t,{label:"Consultant Context",context:"consultant",options:a}),e.jsx(t,{label:"Client Context",context:"client",options:a}),e.jsx(t,{label:"Admin Context",context:"admin",options:a}),e.jsx(t,{label:"Expert Context",context:"expert",options:a}),e.jsx(t,{label:"Tool Creator Context",context:"toolCreator",options:a}),e.jsx(t,{label:"Founder Context",context:"founder",options:a})]})};var i,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Flavor',
    options: defaultOptions,
    helperText: 'Select your favorite ice cream flavor.'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Search for a Flavor',
    isSearchable: true
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,S,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Select Multiple Flavors',
    isMulti: true
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,h,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Select a Food',
    options: groupedOptions
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,E,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-80">
      <EnhancedSelect label="Error State" options={defaultOptions} validationState="error" errorMessage="This field is required." />
      <EnhancedSelect label="Warning State" options={defaultOptions} validationState="warning" warningMessage="Are you sure about this choice?" />
      <EnhancedSelect label="Success State" options={defaultOptions} validationState="success" successMessage="Great choice!" />
    </div>
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var F,M,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <EnhancedSelect label="Consultant Context" context="consultant" options={defaultOptions} />
      <EnhancedSelect label="Client Context" context="client" options={defaultOptions} />
      <EnhancedSelect label="Admin Context" context="admin" options={defaultOptions} />
      <EnhancedSelect label="Expert Context" context="expert" options={defaultOptions} />
      <EnhancedSelect label="Tool Creator Context" context="toolCreator" options={defaultOptions} />
      <EnhancedSelect label="Founder Context" context="founder" options={defaultOptions} />
    </div>
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const k=["Default","Searchable","MultiSelect","Grouped","ValidationStates","WorkspaceContexts"];export{o as Default,s as Grouped,n as MultiSelect,r as Searchable,l as ValidationStates,c as WorkspaceContexts,k as __namedExportsOrder,W as default};
