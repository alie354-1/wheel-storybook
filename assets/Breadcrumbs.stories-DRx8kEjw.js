import{j as r}from"./jsx-runtime-BdivIsZm.js";import{B as o,a as e}from"./Breadcrumbs-CD8-NpFW.js";import{M as b}from"./chunk-QMGIS6GS-DcNV08QD.js";import"./vendor-CIaSNbmr.js";const C={title:"UI/Breadcrumbs",component:o,tags:["autodocs"],decorators:[a=>r.jsx(b,{children:r.jsx(a,{})})],argTypes:{separator:{control:"text"},maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"}}},s={render:a=>r.jsxs(o,{...a,children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/category",children:"Category"}),r.jsx(e,{current:!0,children:"Current Page"})]}),args:{}},t={...s,args:{separator:">"}},m={render:a=>r.jsxs(o,{...a,children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/1",children:"Page 1"}),r.jsx(e,{href:"/2",children:"Page 2"}),r.jsx(e,{href:"/3",children:"Page 3"}),r.jsx(e,{href:"/4",children:"Page 4"}),r.jsx(e,{current:!0,children:"Current Page"})]}),args:{maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:1}};var c,n,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/category">Category</BreadcrumbItem>
      <BreadcrumbItem current>Current Page</BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    separator: ">"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,g,B;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/1">Page 1</BreadcrumbItem>
      <BreadcrumbItem href="/2">Page 2</BreadcrumbItem>
      <BreadcrumbItem href="/3">Page 3</BreadcrumbItem>
      <BreadcrumbItem href="/4">Page 4</BreadcrumbItem>
      <BreadcrumbItem current>Current Page</BreadcrumbItem>
    </Breadcrumbs>,
  args: {
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1
  }
}`,...(B=(g=m.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const j=["Default","WithCustomSeparator","Collapsed"];export{m as Collapsed,s as Default,t as WithCustomSeparator,j as __namedExportsOrder,C as default};
