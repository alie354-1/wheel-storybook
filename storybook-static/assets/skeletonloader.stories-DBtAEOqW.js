import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{S as s}from"./skeletonloader-vrkcUu0U.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const y={title:"Components/Feedback/SkeletonLoader",component:s,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a skeleton loading state."}}},argTypes:{count:{control:"number"},circle:{control:"boolean"}}},a={args:{className:"h-4 w-64"}},r={args:{count:3,className:"h-4 w-64"}},c={args:{circle:!0,className:"h-16 w-16"}},o={render:()=>e.jsxs("div",{className:"w-80 p-4 border rounded-lg",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{circle:!0,className:"h-12 w-12"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-32"}),e.jsx(s,{className:"h-4 w-24"})]})]}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-5/6"})]})]})};var n,t,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    className: 'h-4 w-64'
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var m,d,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    count: 3,
    className: 'h-4 w-64'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,N;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    circle: true,
    className: 'h-16 w-16'
  }
}`,...(N=(u=c.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var h,w,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-80 p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <SkeletonLoader circle className="h-12 w-12" />
        <div className="space-y-2">
          <SkeletonLoader className="h-4 w-32" />
          <SkeletonLoader className="h-4 w-24" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-5/6" />
      </div>
    </div>
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const b=["Default","MultipleLines","Circle","CardSkeleton"];export{o as CardSkeleton,c as Circle,a as Default,r as MultipleLines,b as __namedExportsOrder,y as default};
