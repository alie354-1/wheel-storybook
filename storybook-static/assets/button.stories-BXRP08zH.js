import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{a as zr}from"./index-B2-qRKKC.js";import{B as e}from"./button-Cqm7tkEM.js";import"./_commonjsHelpers-Cpj98o6Y.js";typeof window<"u"&&!window.React&&(window.React=zr);const Fr={title:"UI/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","gradient-midnight","gradient-amber","ghost","outline","link","danger"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},context:{control:{type:"select"},options:["consultant","client","admin","expert","toolCreator","founder","neutral"]},iconPosition:{control:{type:"select"},options:["left","right"]},isLoading:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},o={args:{variant:"outline",children:"Outline Button"}},s={args:{variant:"ghost",children:"Ghost Button"}},i={args:{variant:"link",children:"Link Button"}},c={args:{variant:"danger",children:"Danger Button"}},d={args:{variant:"primary",context:"consultant",children:"Consultant Button"}},l={args:{variant:"primary",context:"client",children:"Client Button"}},u={args:{variant:"primary",context:"admin",children:"Admin Button"}},m={args:{variant:"primary",context:"expert",children:"Expert Button"}},p={args:{variant:"primary",context:"toolCreator",children:"Tool Creator Button"}},h={args:{variant:"primary",context:"founder",children:"Founder Button"}},x={args:{children:"Button"},render:t=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(e,{...t,size:"xs",children:"Extra Small"}),r.jsx(e,{...t,size:"sm",children:"Small"}),r.jsx(e,{...t,size:"md",children:"Medium"}),r.jsx(e,{...t,size:"lg",children:"Large"}),r.jsx(e,{...t,size:"xl",children:"Extra Large"})]})},v={args:{variant:"primary",isLoading:!0,children:"Loading..."}},g={args:{variant:"primary",isLoading:!0,loadingText:"Saving...",children:"Save Changes"}},y={args:{variant:"primary",icon:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),children:"Add Item"}},B={args:{variant:"outline",icon:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),iconPosition:"right",children:"Next"}},j={args:{children:"Button"},render:t=>r.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Consultant"}),r.jsx(e,{...t,context:"consultant",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"consultant",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"consultant",variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Client"}),r.jsx(e,{...t,context:"client",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"client",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"client",variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Admin"}),r.jsx(e,{...t,context:"admin",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"admin",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"admin",variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Expert"}),r.jsx(e,{...t,context:"expert",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"expert",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"expert",variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Tool Creator"}),r.jsx(e,{...t,context:"toolCreator",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"toolCreator",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"toolCreator",variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Founder"}),r.jsx(e,{...t,context:"founder",variant:"primary",children:"Primary"}),r.jsx(e,{...t,context:"founder",variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,context:"founder",variant:"outline",children:"Outline"})]})]})},N={args:{variant:"primary",children:"Accessible Button","aria-label":"This button performs an important action","aria-describedby":"button-description"},render:t=>r.jsxs("div",{children:[r.jsx(e,{...t}),r.jsx("p",{id:"button-description",className:"text-sm text-gray-600 mt-2",children:"This button demonstrates proper ARIA attributes for accessibility"})]})},S={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},f={args:{children:"Button"},render:t=>r.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Normal"}),r.jsx(e,{...t,variant:"primary",children:"Primary"}),r.jsx(e,{...t,variant:"secondary",children:"Secondary"}),r.jsx(e,{...t,variant:"outline",children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Loading"}),r.jsx(e,{...t,variant:"primary",isLoading:!0,children:"Primary"}),r.jsx(e,{...t,variant:"secondary",isLoading:!0,children:"Secondary"}),r.jsx(e,{...t,variant:"outline",isLoading:!0,children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"Disabled"}),r.jsx(e,{...t,variant:"primary",disabled:!0,children:"Primary"}),r.jsx(e,{...t,variant:"secondary",disabled:!0,children:"Secondary"}),r.jsx(e,{...t,variant:"outline",disabled:!0,children:"Outline"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"font-semibold",children:"With Icons"}),r.jsx(e,{...t,variant:"primary",icon:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),children:"Primary"}),r.jsx(e,{...t,variant:"secondary",icon:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"Secondary"}),r.jsx(e,{...t,variant:"outline",icon:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),iconPosition:"right",children:"Outline"})]})]})};var b,C,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var L,P,W;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(W=(P=a.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var w,O,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...(A=(O=o.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var z,T,E;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var M,I,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var R,D,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var G,_,U;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'consultant',
    children: 'Consultant Button'
  }
}`,...(U=(_=d.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var q,J,K;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'client',
    children: 'Client Button'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'admin',
    children: 'Admin Button'
  }
}`,...(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'expert',
    children: 'Expert Button'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,tr,er;p.parameters={...p.parameters,docs:{...(rr=p.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'toolCreator',
    children: 'Tool Creator Button'
  }
}`,...(er=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:er.source}}};var nr,ar,or;h.parameters={...h.parameters,docs:{...(nr=h.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    context: 'founder',
    children: 'Founder Button'
  }
}`,...(or=(ar=h.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var sr,ir,cr;x.parameters={...x.parameters,docs:{...(sr=x.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <div className="flex items-center gap-4">
      <Button {...args} size="xs">Extra Small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="xl">Extra Large</Button>
    </div>
}`,...(cr=(ir=x.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var dr,lr,ur;v.parameters={...v.parameters,docs:{...(dr=v.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Loading...'
  }
}`,...(ur=(lr=v.parameters)==null?void 0:lr.docs)==null?void 0:ur.source}}};var mr,pr,hr;g.parameters={...g.parameters,docs:{...(mr=g.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isLoading: true,
    loadingText: 'Saving...',
    children: 'Save Changes'
  }
}`,...(hr=(pr=g.parameters)==null?void 0:pr.docs)==null?void 0:hr.source}}};var xr,vr,gr;y.parameters={...y.parameters,docs:{...(xr=y.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>,
    children: 'Add Item'
  }
}`,...(gr=(vr=y.parameters)==null?void 0:vr.docs)==null?void 0:gr.source}}};var yr,Br,jr;B.parameters={...B.parameters,docs:{...(yr=B.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>,
    iconPosition: 'right',
    children: 'Next'
  }
}`,...(jr=(Br=B.parameters)==null?void 0:Br.docs)==null?void 0:jr.source}}};var Nr,Sr,fr;j.parameters={...j.parameters,docs:{...(Nr=j.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Consultant</h3>
        <Button {...args} context="consultant" variant="primary">Primary</Button>
        <Button {...args} context="consultant" variant="secondary">Secondary</Button>
        <Button {...args} context="consultant" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Client</h3>
        <Button {...args} context="client" variant="primary">Primary</Button>
        <Button {...args} context="client" variant="secondary">Secondary</Button>
        <Button {...args} context="client" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Admin</h3>
        <Button {...args} context="admin" variant="primary">Primary</Button>
        <Button {...args} context="admin" variant="secondary">Secondary</Button>
        <Button {...args} context="admin" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Expert</h3>
        <Button {...args} context="expert" variant="primary">Primary</Button>
        <Button {...args} context="expert" variant="secondary">Secondary</Button>
        <Button {...args} context="expert" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Tool Creator</h3>
        <Button {...args} context="toolCreator" variant="primary">Primary</Button>
        <Button {...args} context="toolCreator" variant="secondary">Secondary</Button>
        <Button {...args} context="toolCreator" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Founder</h3>
        <Button {...args} context="founder" variant="primary">Primary</Button>
        <Button {...args} context="founder" variant="secondary">Secondary</Button>
        <Button {...args} context="founder" variant="outline">Outline</Button>
      </div>
    </div>
}`,...(fr=(Sr=j.parameters)==null?void 0:Sr.docs)==null?void 0:fr.source}}};var br,Cr,kr;N.parameters={...N.parameters,docs:{...(br=N.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Accessible Button',
    'aria-label': 'This button performs an important action',
    'aria-describedby': 'button-description'
  },
  render: args => <div>
      <Button {...args} />
      <p id="button-description" className="text-sm text-gray-600 mt-2">
        This button demonstrates proper ARIA attributes for accessibility
      </p>
    </div>
}`,...(kr=(Cr=N.parameters)==null?void 0:Cr.docs)==null?void 0:kr.source}}};var Lr,Pr,Wr;S.parameters={...S.parameters,docs:{...(Lr=S.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...(Wr=(Pr=S.parameters)==null?void 0:Pr.docs)==null?void 0:Wr.source}}};var wr,Or,Ar;f.parameters={...f.parameters,docs:{...(wr=f.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <div className="grid grid-cols-4 gap-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Normal</h3>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Loading</h3>
        <Button {...args} variant="primary" isLoading>Primary</Button>
        <Button {...args} variant="secondary" isLoading>Secondary</Button>
        <Button {...args} variant="outline" isLoading>Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Disabled</h3>
        <Button {...args} variant="primary" disabled>Primary</Button>
        <Button {...args} variant="secondary" disabled>Secondary</Button>
        <Button {...args} variant="outline" disabled>Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">With Icons</h3>
        <Button {...args} variant="primary" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>}>Primary</Button>
        <Button {...args} variant="secondary" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}>Secondary</Button>
        <Button {...args} variant="outline" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>} iconPosition="right">Outline</Button>
      </div>
    </div>
}`,...(Ar=(Or=f.parameters)==null?void 0:Or.docs)==null?void 0:Ar.source}}};const Rr=["Primary","Secondary","Outline","Ghost","Link","Danger","ConsultantContext","ClientContext","AdminContext","ExpertContext","ToolCreatorContext","FounderContext","Sizes","Loading","LoadingWithCustomText","WithIcon","WithIconRight","WorkspaceContextMatrix","AccessibilityExample","FullWidth","AllStates"];export{N as AccessibilityExample,u as AdminContext,f as AllStates,l as ClientContext,d as ConsultantContext,c as Danger,m as ExpertContext,h as FounderContext,S as FullWidth,s as Ghost,i as Link,v as Loading,g as LoadingWithCustomText,o as Outline,n as Primary,a as Secondary,x as Sizes,p as ToolCreatorContext,y as WithIcon,B as WithIconRight,j as WorkspaceContextMatrix,Rr as __namedExportsOrder,Fr as default};
