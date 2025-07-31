import{j as e}from"./jsx-runtime-BdivIsZm.js";import{A as t}from"./alert-CmQfHnIB.js";import{B as a}from"./button-BioF9M8P.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";const W={title:"Components/Feedback/Alert",component:t,parameters:{layout:"centered",docs:{description:{component:"A component for displaying prominent messages and alerts to the user."}}},argTypes:{variant:{control:"select",options:["success","warning","error","info"]},urgency:{control:"radio",options:["low","medium","high","critical"]},dismissible:{control:"boolean"}}},i={args:{title:"Heads up!",description:"This is a default informational alert."}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"success",title:"Success",description:"Your profile has been updated."}),e.jsx(t,{variant:"warning",title:"Warning",description:"Please check your input."}),e.jsx(t,{variant:"error",title:"Error",description:"Something went wrong."}),e.jsx(t,{variant:"info",title:"Info",description:"A new update is available."})]})},s={args:{title:"Update Available",description:"A new version of the application is available. Please update to the latest version.",actions:e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{variant:"primary",children:"Update"}),e.jsx(a,{variant:"ghost",children:"Dismiss"})]})}},n={args:{title:"Dismissible Alert",description:"This alert can be closed by the user.",dismissible:!0}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{context:"consultant",title:"Consultant Info",description:"This is an informational alert for consultants."}),e.jsx(t,{context:"client",title:"Client Info",description:"This is an informational alert for clients."}),e.jsx(t,{context:"admin",title:"Admin Info",description:"This is an informational alert for admins."}),e.jsx(t,{context:"expert",title:"Expert Info",description:"This is an informational alert for experts."}),e.jsx(t,{context:"toolCreator",title:"Tool Creator Info",description:"This is an informational alert for tool creators."}),e.jsx(t,{context:"founder",title:"Founder Info",description:"This is an informational alert for founders."})]})};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Heads up!',
    description: 'This is a default informational alert.'
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="success" title="Success" description="Your profile has been updated." />
      <Alert variant="warning" title="Warning" description="Please check your input." />
      <Alert variant="error" title="Error" description="Something went wrong." />
      <Alert variant="info" title="Info" description="A new update is available." />
    </div>
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Update Available',
    description: 'A new version of the application is available. Please update to the latest version.',
    actions: <div className="space-x-2">
        <Button variant="primary">Update</Button>
        <Button variant="ghost">Dismiss</Button>
      </div>
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,g,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible Alert',
    description: 'This alert can be closed by the user.',
    dismissible: true
  }
}`,...(A=(g=n.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var b,T,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert context="consultant" title="Consultant Info" description="This is an informational alert for consultants." />
      <Alert context="client" title="Client Info" description="This is an informational alert for clients." />
      <Alert context="admin" title="Admin Info" description="This is an informational alert for admins." />
      <Alert context="expert" title="Expert Info" description="This is an informational alert for experts." />
      <Alert context="toolCreator" title="Tool Creator Info" description="This is an informational alert for tool creators." />
      <Alert context="founder" title="Founder Info" description="This is an informational alert for founders." />
    </div>
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const k=["Default","Variants","WithActions","Dismissible","WorkspaceContexts"];export{i as Default,n as Dismissible,r as Variants,s as WithActions,o as WorkspaceContexts,k as __namedExportsOrder,W as default};
