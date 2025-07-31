import{j as e}from"./jsx-runtime-BdivIsZm.js";import{C as o}from"./colorpicker-CP25QCKe.js";import"./vendor-CIaSNbmr.js";const T={title:"Components/Form/ColorPicker",component:o,parameters:{layout:"centered",docs:{description:{component:"A component for selecting colors with support for various formats and workspace contexts."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},format:{control:"radio",options:["hex","rgb","hsl"],description:"The format of the color string"},validationState:{control:"select",options:["none","error","warning","success"],description:"Validation state of the input"},disabled:{control:"boolean",description:"Whether the color picker is disabled"},required:{control:"boolean",description:"Whether the field is required"},allowCustom:{control:"boolean",description:"Allow users to select a custom color"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},value:{control:"color"},presets:{control:"object"}}},r={args:{label:"Theme Color",helperText:"Select a color for the theme.",value:"#4F46E5"}},t={args:{label:"Brand Colors",presets:["#4F46E5","#10B981","#F59E0B","#EF4444","#8B5CF6","#3B82F6"],value:"#10B981"}},a={args:{label:"Primary Color (Presets Only)",allowCustom:!1,presets:["#DC2626","#D97706","#65A30D","#059669","#0891B2","#2563EB"],value:"#059669"}},s={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{label:"Error State",validationState:"error",errorMessage:"This color is not accessible.",value:"#777777"}),e.jsx(o,{label:"Warning State",validationState:"warning",warningMessage:"This color may clash with the background.",value:"#FBBF24"}),e.jsx(o,{label:"Success State",validationState:"success",successMessage:"Color is valid and accessible.",value:"#10B981"})]})},l={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-4xl",children:[e.jsx(o,{label:"Consultant Context",context:"consultant",value:"#3B82F6"}),e.jsx(o,{label:"Client Context",context:"client",value:"#10B981"}),e.jsx(o,{label:"Admin Context",context:"admin",value:"#6B7280"}),e.jsx(o,{label:"Expert Context",context:"expert",value:"#8B5CF6"}),e.jsx(o,{label:"Tool Creator Context",context:"toolCreator",value:"#4F46E5"}),e.jsx(o,{label:"Founder Context",context:"founder",value:"#F59E0B"})]})},n={args:{label:"Disabled Color Picker",value:"#6B7280",disabled:!0}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Theme Color',
    helperText: 'Select a color for the theme.',
    value: '#4F46E5'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Brand Colors',
    presets: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6'],
    value: '#10B981'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,C,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Primary Color (Presets Only)',
    allowCustom: false,
    presets: ['#DC2626', '#D97706', '#65A30D', '#059669', '#0891B2', '#2563EB'],
    value: '#059669'
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <ColorPicker label="Error State" validationState="error" errorMessage="This color is not accessible." value="#777777" />
      <ColorPicker label="Warning State" validationState="warning" warningMessage="This color may clash with the background." value="#FBBF24" />
      <ColorPicker label="Success State" validationState="success" successMessage="Color is valid and accessible." value="#10B981" />
    </div>
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,F,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <ColorPicker label="Consultant Context" context="consultant" value="#3B82F6" />
      <ColorPicker label="Client Context" context="client" value="#10B981" />
      <ColorPicker label="Admin Context" context="admin" value="#6B7280" />
      <ColorPicker label="Expert Context" context="expert" value="#8B5CF6" />
      <ColorPicker label="Tool Creator Context" context="toolCreator" value="#4F46E5" />
      <ColorPicker label="Founder Context" context="founder" value="#F59E0B" />
    </div>
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var f,k,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Color Picker',
    value: '#6B7280',
    disabled: true
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const D=["Default","WithPresets","NoCustomColor","ValidationStates","WorkspaceContexts","Disabled"];export{r as Default,n as Disabled,a as NoCustomColor,s as ValidationStates,t as WithPresets,l as WorkspaceContexts,D as __namedExportsOrder,T as default};
