import{j as a}from"./jsx-runtime-BdivIsZm.js";import{A as r}from"./Avatar-DpmMIMRY.js";import{r as g,R as n}from"./vendor-CIaSNbmr.js";import{c as j}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./StatusDot-BnZf1aWI.js";import"./clsx-B-dksMZM.js";const t=g.forwardRef(({children:e,max:p=3,className:f,...x},h)=>{const A=n.Children.toArray(e).slice(0,p),o=n.Children.count(e)-p;return a.jsxs("div",{ref:h,className:j("flex -space-x-4",f),...x,children:[A,o>0&&a.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-semibold ring-2 ring-white",children:["+",o]})]})});t.displayName="AvatarGroup";try{t.displayName="AvatarGroup",t.__docgenInfo={description:"",displayName:"AvatarGroup",props:{max:{defaultValue:{value:"3"},description:"",name:"max",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C={title:"Components/Media/AvatarGroup",component:t,parameters:{layout:"centered",docs:{description:{component:"A component for displaying a group of avatars."}}}},s={render:()=>a.jsxs(t,{children:[a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a04258114e29026702d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026708c"})]})},c={args:{max:2},render:e=>a.jsxs(t,{...e,children:[a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a04258114e29026702d"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=a042581f4e29026708c"})]})};var i,d,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026708c" />
    </AvatarGroup>
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,v,l;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    max: 2
  },
  render: args => <AvatarGroup {...args}>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026708c" />
    </AvatarGroup>
}`,...(l=(v=c.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};const E=["Default","Max"];export{s as Default,c as Max,E as __namedExportsOrder,C as default};
