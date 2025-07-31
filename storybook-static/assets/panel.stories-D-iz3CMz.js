import{j as d}from"./jsx-runtime-BdivIsZm.js";import{B as u}from"./button-BioF9M8P.js";import{P as h}from"./panel-B-9ixgye.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./chevron-down-DDkHMo_x.js";import"./createLucideIcon-CFfAzFt4.js";const z={title:"Layout/Panel",component:h,parameters:{layout:"centered",docs:{description:{component:"A collapsible and resizable panel for displaying content."}}},argTypes:{variant:{control:"select",options:["elevated","outlined","filled"]},collapsible:{control:"boolean"},defaultCollapsed:{control:"boolean"},resizable:{control:"boolean"}}},e={args:{header:d.jsx("h3",{children:"Panel Header"}),children:"This is the content of the panel.",className:"w-96"}},a={args:{...e.args,collapsible:!0}},o={args:{...e.args,actions:d.jsx(u,{size:"sm",children:"View All"})}};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    header: <h3>Panel Header</h3>,
    children: 'This is the content of the panel.',
    className: 'w-96'
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,l,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <Button size="sm">View All</Button>
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const B=["Default","Collapsible","WithActions"];export{a as Collapsible,e as Default,o as WithActions,B as __namedExportsOrder,z as default};
