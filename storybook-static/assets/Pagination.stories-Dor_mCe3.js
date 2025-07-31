import{P as z}from"./Pagination-CUQxdS5l.js";import"./jsx-runtime-DF2Pcvd1.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-ZqfPLS5u.js";const y={title:"UI/Pagination",component:z,tags:["autodocs"],argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},onPageChange:{action:"pageChanged"},siblingCount:{control:"number"},showFirstLast:{control:"boolean"},size:{control:{type:"select",options:["sm","md","lg"]}}}},a={args:{currentPage:1,totalPages:10,siblingCount:1,showFirstLast:!0,size:"md"}},s={args:{...a.args,size:"sm"}},r={args:{...a.args,size:"lg"}},e={args:{...a.args,showFirstLast:!1}},t={args:{...a.args,totalPages:100,currentPage:50}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    size: "md"
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var g,i,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "sm"
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "lg"
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,P,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFirstLast: false
  }
}`,...(f=(P=e.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var L,b,h;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    totalPages: 100,
    currentPage: 50
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const x=["Default","Small","Large","NoFirstLast","ManyPages"];export{a as Default,r as Large,t as ManyPages,e as NoFirstLast,s as Small,x as __namedExportsOrder,y as default};
