import{j as h}from"./jsx-runtime-BdivIsZm.js";import{I as x}from"./image-Cvhw9Q6R.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";const R={title:"Components/Media/Image",component:x,parameters:{layout:"centered",docs:{description:{component:"An enhanced image component with support for lazy loading, placeholders, and error fallbacks."}}},argTypes:{fit:{control:"radio",options:["cover","contain","fill"]},lazy:{control:"boolean"},aspectRatio:{control:"text"}}},a={args:{src:"https://images.unsplash.com/photo-1554629947-334ff61d85dc",alt:"A beautiful landscape",className:"w-96"}},e={args:{...a.args,src:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?delay=2000",placeholder:h.jsx("div",{className:"w-full h-full bg-gray-300 animate-pulse"})}},r={args:{...a.args,src:"https://invalid-url.com/image.jpg",error:h.jsx("div",{className:"w-full h-full bg-red-100 flex items-center justify-center text-red-600",children:"Image failed to load"})}},s={args:{...a.args,aspectRatio:"1 / 1",className:"w-64"}};var t,o,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc',
    alt: 'A beautiful landscape',
    className: 'w-96'
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,p,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?delay=2000',
    placeholder: <div className="w-full h-full bg-gray-300 animate-pulse" />
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,n,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://invalid-url.com/image.jpg',
    error: <div className="w-full h-full bg-red-100 flex items-center justify-center text-red-600">Image failed to load</div>
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: '1 / 1',
    className: 'w-64'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const A=["Default","WithPlaceholder","WithErrorFallback","AspectRatio"];export{s as AspectRatio,a as Default,r as WithErrorFallback,e as WithPlaceholder,A as __namedExportsOrder,R as default};
