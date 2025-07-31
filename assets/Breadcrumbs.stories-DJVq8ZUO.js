import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{B as o,a as e}from"./Breadcrumbs-DjVWW3u6.js";import{M as b}from"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j={title:"UI/Breadcrumbs",component:o,tags:["autodocs"],decorators:[a=>r.jsx(b,{children:r.jsx(a,{})})],argTypes:{separator:{control:"text"},maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"}}},t={render:a=>r.jsxs(o,{...a,children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/category",children:"Category"}),r.jsx(e,{current:!0,children:"Current Page"})]}),args:{}},s={...t,args:{separator:">"}},m={render:a=>r.jsxs(o,{...a,children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/1",children:"Page 1"}),r.jsx(e,{href:"/2",children:"Page 2"}),r.jsx(e,{href:"/3",children:"Page 3"}),r.jsx(e,{href:"/4",children:"Page 4"}),r.jsx(e,{current:!0,children:"Current Page"})]}),args:{maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:1}};var c,n,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/category">Category</BreadcrumbItem>
      <BreadcrumbItem current>Current Page</BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var u,l,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    separator: ">"
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,g,B;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(B=(g=m.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const P=["Default","WithCustomSeparator","Collapsed"];export{m as Collapsed,t as Default,s as WithCustomSeparator,P as __namedExportsOrder,j as default};
