import{j as s}from"./jsx-runtime-BdivIsZm.js";import{S as e}from"./StatusDot-BnZf1aWI.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const L={title:"Components/Feedback/StatusDot",component:e,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a user's or system's status with a colored dot."}}},argTypes:{status:{control:"select",options:["online","offline","busy","away","inactive"]},size:{control:"radio",options:["sm","md","lg"]},pulse:{control:"boolean"},label:{control:"text"}}},t={args:{status:"online"}},a={args:{status:"online",label:"Online"}},n={render:()=>s.jsxs("div",{className:"space-y-4",children:[s.jsx(e,{status:"online",label:"Online"}),s.jsx(e,{status:"offline",label:"Offline"}),s.jsx(e,{status:"busy",label:"Busy"}),s.jsx(e,{status:"away",label:"Away"}),s.jsx(e,{status:"inactive",label:"Inactive"})]})},l={render:()=>s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(e,{size:"sm",status:"online",label:"Small"}),s.jsx(e,{size:"md",status:"online",label:"Medium"}),s.jsx(e,{size:"lg",status:"online",label:"Large"})]})},o={args:{status:"online",pulse:!0,label:"Pulsing"}};var r,i,u;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    status: 'online'
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'online',
    label: 'Online'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <StatusDot status="online" label="Online" />
      <StatusDot status="offline" label="Offline" />
      <StatusDot status="busy" label="Busy" />
      <StatusDot status="away" label="Away" />
      <StatusDot status="inactive" label="Inactive" />
    </div>
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,x,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <StatusDot size="sm" status="online" label="Small" />
      <StatusDot size="md" status="online" label="Medium" />
      <StatusDot size="lg" status="online" label="Large" />
    </div>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,j,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'online',
    pulse: true,
    label: 'Pulsing'
  }
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const N=["Default","WithLabel","AllStatuses","Sizes","Pulsing"];export{n as AllStatuses,t as Default,o as Pulsing,l as Sizes,a as WithLabel,N as __namedExportsOrder,L as default};
