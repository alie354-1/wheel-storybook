import{j as t}from"./jsx-runtime-BdivIsZm.js";import{R as e}from"./richtexteditor-BZqFfy3-.js";import"./vendor-CIaSNbmr.js";import"./immer-3uZG5tlX.js";const E={title:"Components/Form/RichTextEditor",component:e,parameters:{layout:"centered",docs:{description:{component:"A foundational rich text editor with basic formatting options."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","toolCreator","founder","neutral"],description:"Workspace context for styling"},disabled:{control:"boolean",description:"Whether the editor is disabled"},label:{control:"text"}}},o={args:{label:"Description"}},r={render:()=>t.jsxs("div",{className:"space-y-6 w-full max-w-4xl",children:[t.jsx(e,{label:"Consultant Context",context:"consultant"}),t.jsx(e,{label:"Client Context",context:"client"}),t.jsx(e,{label:"Admin Context",context:"admin"}),t.jsx(e,{label:"Expert Context",context:"expert"}),t.jsx(e,{label:"Tool Creator Context",context:"toolCreator"}),t.jsx(e,{label:"Founder Context",context:"founder"})]})},n={args:{label:"Disabled Rich Text Editor",disabled:!0}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,i,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-4xl">
      <RichTextEditor label="Consultant Context" context="consultant" />
      <RichTextEditor label="Client Context" context="client" />
      <RichTextEditor label="Admin Context" context="admin" />
      <RichTextEditor label="Expert Context" context="expert" />
      <RichTextEditor label="Tool Creator Context" context="toolCreator" />
      <RichTextEditor label="Founder Context" context="founder" />
    </div>
}`,...(x=(i=r.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Rich Text Editor',
    disabled: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["Default","WorkspaceContexts","Disabled"];export{o as Default,n as Disabled,r as WorkspaceContexts,f as __namedExportsOrder,E as default};
