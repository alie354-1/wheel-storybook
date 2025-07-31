import{j as h}from"./jsx-runtime-BdivIsZm.js";import{B as y}from"./button-BioF9M8P.js";import{E as x}from"./EmptyState-DN3TLLmB.js";import{I}from"./icon-DC-Rf1Vv.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./createLucideIcon-CFfAzFt4.js";import"./users-C9yZEvey.js";import"./check-BgTDyPES.js";import"./chevron-down-DDkHMo_x.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./x-DZ2Nmj4W.js";const O={title:"Components/Feedback/EmptyState",component:x,parameters:{layout:"centered",docs:{description:{component:"A component for displaying an empty state with a message and optional actions."}}}},r={args:{title:"No results found",description:"Try adjusting your search or filter to find what you're looking for."}},t={args:{...r.args,icon:h.jsx(I,{name:"Search",size:"xl",color:"muted"})}},o={args:{...t.args,actions:h.jsx(y,{variant:"primary",children:"Create New Item"})}},e={args:{title:"No items",className:"p-4"}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <Icon name="Search" size="xl" color="muted" />
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    actions: <Button variant="primary">Create New Item</Button>
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,g,f;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'No items',
    className: 'p-4'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const R=["Default","WithIcon","WithActions","Compact"];export{e as Compact,r as Default,o as WithActions,t as WithIcon,R as __namedExportsOrder,O as default};
