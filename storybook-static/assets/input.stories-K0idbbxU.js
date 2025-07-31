import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{I as a}from"./input-C_PKqGnl.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ms={title:"UI/Input",component:a,tags:["autodocs"],argTypes:{context:{control:{type:"select"},options:["consultant","client","admin","expert","toolCreator","founder","neutral"]},validationState:{control:{type:"select"},options:["error","warning","success","none"]},inputSize:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},required:{control:"boolean"},fullWidth:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},loadingText:{control:"text"},description:{control:"text"},placeholder:{control:"text"}}},r={args:{name:"default-input",placeholder:"Enter text here..."}},t={args:{name:"labeled-input",label:"Email Address",placeholder:"example@email.com"}},n={args:{name:"required-input",label:"Required Field",placeholder:"This field is required",required:!0}},o={args:{name:"helper-input",label:"Username",placeholder:"Enter your username",helperText:"Must be 3-20 characters long"}},l={args:{name:"description-input",label:"API Key",placeholder:"Enter your API key",description:"You can find your API key in your account settings"}},i={args:{name:"error-input",label:"Email",placeholder:"Enter your email",validationState:"error",errorMessage:"Please enter a valid email address"}},c={args:{name:"warning-input",label:"Password",placeholder:"Enter your password",validationState:"warning",warningMessage:"Password should be at least 8 characters"}},d={args:{name:"success-input",label:"Username",placeholder:"Enter your username",validationState:"success",successMessage:"Username is available"}},m={args:{name:"legacy-input",label:"Legacy Error Support",placeholder:"This uses the old hasError prop",hasError:!0,errorMessage:"This field has an error"}},u={args:{name:"size-input",label:"Input Sizes",placeholder:"Size example"},render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Extra Small (xs)"}),e.jsx(a,{...s,name:"xs-input",inputSize:"xs"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small (sm)"}),e.jsx(a,{...s,name:"sm-input",inputSize:"sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium (md) - Default"}),e.jsx(a,{...s,name:"md-input",inputSize:"md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large (lg)"}),e.jsx(a,{...s,name:"lg-input",inputSize:"lg"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Extra Large (xl)"}),e.jsx(a,{...s,name:"xl-input",inputSize:"xl"})]})]})},p={args:{name:"consultant-input",label:"Consultant Input",placeholder:"Consultant workspace styling",context:"consultant"}},g={args:{name:"client-input",label:"Client Input",placeholder:"Client workspace styling",context:"client"}},h={args:{name:"admin-input",label:"Admin Input",placeholder:"Admin workspace styling",context:"admin"}},x={args:{name:"expert-input",label:"Expert Input",placeholder:"Expert workspace styling",context:"expert"}},b={args:{name:"toolCreator-input",label:"Tool Creator Input",placeholder:"Tool Creator workspace styling",context:"toolCreator"}},v={args:{name:"founder-input",label:"Founder Input",placeholder:"Founder workspace styling",context:"founder"}},S={args:{name:"loading-input",label:"Loading Input",placeholder:"Processing...",loading:!0}},j={args:{name:"loading-custom-input",label:"Saving Changes",placeholder:"Enter data to save",loading:!0,loadingText:"Saving your changes..."}},f={args:{name:"left-icon-input",label:"Search",placeholder:"Search for items...",leftIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},y={args:{name:"right-icon-input",label:"Password",placeholder:"Enter your password",type:"password",rightIcon:e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}},w={args:{name:"both-icons-input",label:"Amount",placeholder:"0.00",leftIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})}),rightIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4"})})}},N={args:{name:"full-width-input",label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0}},k={args:{name:"disabled-input",label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},I={args:{name:"context-matrix-input",placeholder:"Context example"},render:s=>e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Consultant Context"}),e.jsx(a,{...s,name:"consultant-normal",context:"consultant",label:"Normal"}),e.jsx(a,{...s,name:"consultant-error",context:"consultant",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"consultant-success",context:"consultant",label:"Success",validationState:"success",successMessage:"Success message"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Client Context"}),e.jsx(a,{...s,name:"client-normal",context:"client",label:"Normal"}),e.jsx(a,{...s,name:"client-error",context:"client",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"client-success",context:"client",label:"Success",validationState:"success",successMessage:"Success message"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Admin Context"}),e.jsx(a,{...s,name:"admin-normal",context:"admin",label:"Normal"}),e.jsx(a,{...s,name:"admin-error",context:"admin",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"admin-success",context:"admin",label:"Success",validationState:"success",successMessage:"Success message"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Expert Context"}),e.jsx(a,{...s,name:"expert-normal",context:"expert",label:"Normal"}),e.jsx(a,{...s,name:"expert-error",context:"expert",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"expert-success",context:"expert",label:"Success",validationState:"success",successMessage:"Success message"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Tool Creator Context"}),e.jsx(a,{...s,name:"toolCreator-normal",context:"toolCreator",label:"Normal"}),e.jsx(a,{...s,name:"toolCreator-error",context:"toolCreator",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"toolCreator-success",context:"toolCreator",label:"Success",validationState:"success",successMessage:"Success message"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Founder Context"}),e.jsx(a,{...s,name:"founder-normal",context:"founder",label:"Normal"}),e.jsx(a,{...s,name:"founder-error",context:"founder",label:"Error",validationState:"error",errorMessage:"Error message"}),e.jsx(a,{...s,name:"founder-success",context:"founder",label:"Success",validationState:"success",successMessage:"Success message"})]})]})},M={args:{name:"validation-input",label:"Validation Example",placeholder:"Enter text to see validation"},render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Normal State"}),e.jsx(a,{...s,name:"normal-state",helperText:"This is helper text"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Error State"}),e.jsx(a,{...s,name:"error-state",validationState:"error",errorMessage:"This field has an error"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Warning State"}),e.jsx(a,{...s,name:"warning-state",validationState:"warning",warningMessage:"This field has a warning"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Success State"}),e.jsx(a,{...s,name:"success-state",validationState:"success",successMessage:"This field is valid"})]})]})},C={args:{name:"priority-input",label:"Message Priority Demo",placeholder:"All message types provided",helperText:"Helper text (lowest priority)",successMessage:"Success message (medium priority)",warningMessage:"Warning message (high priority)",errorMessage:"Error message (highest priority)",validationState:"error"},render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Error Priority (Highest)"}),e.jsx(a,{...s,name:"error-priority",validationState:"error"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Shows error message, hides others"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Warning Priority"}),e.jsx(a,{...s,name:"warning-priority",validationState:"warning",errorMessage:""}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Shows warning message when no error"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Success Priority"}),e.jsx(a,{...s,name:"success-priority",validationState:"success",errorMessage:"",warningMessage:""}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Shows success message when no error or warning"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Helper Text Priority (Lowest)"}),e.jsx(a,{...s,name:"helper-priority",validationState:"none",errorMessage:"",warningMessage:"",successMessage:""}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Shows helper text when no other messages"})]})]})},E={args:{name:"accessibility-input",label:"Accessible Input",placeholder:"Enter your name",description:"This input demonstrates proper accessibility features",helperText:"Please enter your full name",required:!0,"aria-label":"User full name input field"},render:s=>e.jsxs("div",{children:[e.jsx(a,{...s}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"This input includes proper ARIA attributes, labels, and descriptions for screen readers"})]})},L={args:{name:"all-states-input",label:"All States Demo",placeholder:"Example input"},render:s=>e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Basic States"}),e.jsx(a,{...s,name:"normal-basic",label:"Normal"}),e.jsx(a,{...s,name:"disabled-basic",label:"Disabled",disabled:!0}),e.jsx(a,{...s,name:"loading-basic",label:"Loading",loading:!0}),e.jsx(a,{...s,name:"required-basic",label:"Required",required:!0})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"With Icons"}),e.jsx(a,{...s,name:"left-icon-basic",label:"Left Icon",leftIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsx(a,{...s,name:"right-icon-basic",label:"Right Icon",rightIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx(a,{...s,name:"both-icons-basic",label:"Both Icons",leftIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),rightIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx(a,{...s,name:"loading-icon-basic",label:"Loading with Icon",loading:!0,rightIcon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})]})]})};var W,T,z;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'default-input',
    placeholder: 'Enter text here...'
  }
}`,...(z=(T=r.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,P,B;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'labeled-input',
    label: 'Email Address',
    placeholder: 'example@email.com'
  }
}`,...(B=(P=t.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var q,D,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'required-input',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,V,U;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'helper-input',
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Must be 3-20 characters long'
  }
}`,...(U=(V=o.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var H,K,Y;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: 'description-input',
    label: 'API Key',
    placeholder: 'Enter your API key',
    description: 'You can find your API key in your account settings'
  }
}`,...(Y=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,O,G;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'error-input',
    label: 'Email',
    placeholder: 'Enter your email',
    validationState: 'error',
    errorMessage: 'Please enter a valid email address'
  }
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,Q,X;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: 'warning-input',
    label: 'Password',
    placeholder: 'Enter your password',
    validationState: 'warning',
    warningMessage: 'Password should be at least 8 characters'
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    name: 'success-input',
    label: 'Username',
    placeholder: 'Enter your username',
    validationState: 'success',
    successMessage: 'Username is available'
  }
}`,...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ae,re;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    name: 'legacy-input',
    label: 'Legacy Error Support',
    placeholder: 'This uses the old hasError prop',
    hasError: true,
    errorMessage: 'This field has an error'
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    name: 'size-input',
    label: 'Input Sizes',
    placeholder: 'Size example'
  },
  render: args => <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Extra Small (xs)</label>
        <Input {...args} name="xs-input" inputSize="xs" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Small (sm)</label>
        <Input {...args} name="sm-input" inputSize="sm" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium (md) - Default</label>
        <Input {...args} name="md-input" inputSize="md" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large (lg)</label>
        <Input {...args} name="lg-input" inputSize="lg" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Extra Large (xl)</label>
        <Input {...args} name="xl-input" inputSize="xl" />
      </div>
    </div>
}`,...(oe=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ie,ce;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    name: 'consultant-input',
    label: 'Consultant Input',
    placeholder: 'Consultant workspace styling',
    context: 'consultant'
  }
}`,...(ce=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,ue;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    name: 'client-input',
    label: 'Client Input',
    placeholder: 'Client workspace styling',
    context: 'client'
  }
}`,...(ue=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,he;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    name: 'admin-input',
    label: 'Admin Input',
    placeholder: 'Admin workspace styling',
    context: 'admin'
  }
}`,...(he=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var xe,be,ve;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    name: 'expert-input',
    label: 'Expert Input',
    placeholder: 'Expert workspace styling',
    context: 'expert'
  }
}`,...(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Se,je,fe;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    name: 'toolCreator-input',
    label: 'Tool Creator Input',
    placeholder: 'Tool Creator workspace styling',
    context: 'toolCreator'
  }
}`,...(fe=(je=b.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ye,we,Ne;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    name: 'founder-input',
    label: 'Founder Input',
    placeholder: 'Founder workspace styling',
    context: 'founder'
  }
}`,...(Ne=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var ke,Ie,Me;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    name: 'loading-input',
    label: 'Loading Input',
    placeholder: 'Processing...',
    loading: true
  }
}`,...(Me=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var Ce,Ee,Le;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    name: 'loading-custom-input',
    label: 'Saving Changes',
    placeholder: 'Enter data to save',
    loading: true,
    loadingText: 'Saving your changes...'
  }
}`,...(Le=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var We,Te,ze;f.parameters={...f.parameters,docs:{...(We=f.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    name: 'left-icon-input',
    label: 'Search',
    placeholder: 'Search for items...',
    leftIcon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...(ze=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Ae,Pe,Be;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    name: 'right-icon-input',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    rightIcon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
  }
}`,...(Be=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var qe,De,Fe;w.parameters={...w.parameters,docs:{...(qe=w.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    name: 'both-icons-input',
    label: 'Amount',
    placeholder: '0.00',
    leftIcon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>,
    rightIcon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
  }
}`,...(Fe=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Re,Ve,Ue;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    name: 'full-width-input',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  }
}`,...(Ue=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var He,Ke,Ye;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    name: 'disabled-input',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(Ye=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var _e,Oe,Ge;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    name: 'context-matrix-input',
    placeholder: 'Context example'
  },
  render: args => <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Consultant Context</h3>
        <Input {...args} name="consultant-normal" context="consultant" label="Normal" />
        <Input {...args} name="consultant-error" context="consultant" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="consultant-success" context="consultant" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Client Context</h3>
        <Input {...args} name="client-normal" context="client" label="Normal" />
        <Input {...args} name="client-error" context="client" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="client-success" context="client" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Admin Context</h3>
        <Input {...args} name="admin-normal" context="admin" label="Normal" />
        <Input {...args} name="admin-error" context="admin" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="admin-success" context="admin" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Expert Context</h3>
        <Input {...args} name="expert-normal" context="expert" label="Normal" />
        <Input {...args} name="expert-error" context="expert" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="expert-success" context="expert" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Tool Creator Context</h3>
        <Input {...args} name="toolCreator-normal" context="toolCreator" label="Normal" />
        <Input {...args} name="toolCreator-error" context="toolCreator" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="toolCreator-success" context="toolCreator" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Founder Context</h3>
        <Input {...args} name="founder-normal" context="founder" label="Normal" />
        <Input {...args} name="founder-error" context="founder" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="founder-success" context="founder" label="Success" validationState="success" successMessage="Success message" />
      </div>
    </div>
}`,...(Ge=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var Je,Qe,Xe;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    name: 'validation-input',
    label: 'Validation Example',
    placeholder: 'Enter text to see validation'
  },
  render: args => <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Normal State</h3>
        <Input {...args} name="normal-state" helperText="This is helper text" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Error State</h3>
        <Input {...args} name="error-state" validationState="error" errorMessage="This field has an error" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Warning State</h3>
        <Input {...args} name="warning-state" validationState="warning" warningMessage="This field has a warning" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Success State</h3>
        <Input {...args} name="success-state" validationState="success" successMessage="This field is valid" />
      </div>
    </div>
}`,...(Xe=(Qe=M.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,$e,es;C.parameters={...C.parameters,docs:{...(Ze=C.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    name: 'priority-input',
    label: 'Message Priority Demo',
    placeholder: 'All message types provided',
    helperText: 'Helper text (lowest priority)',
    successMessage: 'Success message (medium priority)',
    warningMessage: 'Warning message (high priority)',
    errorMessage: 'Error message (highest priority)',
    validationState: 'error'
  },
  render: args => <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Error Priority (Highest)</h3>
        <Input {...args} name="error-priority" validationState="error" />
        <p className="text-sm text-gray-600 mt-1">Shows error message, hides others</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Warning Priority</h3>
        <Input {...args} name="warning-priority" validationState="warning" errorMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows warning message when no error</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Success Priority</h3>
        <Input {...args} name="success-priority" validationState="success" errorMessage="" warningMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows success message when no error or warning</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Helper Text Priority (Lowest)</h3>
        <Input {...args} name="helper-priority" validationState="none" errorMessage="" warningMessage="" successMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows helper text when no other messages</p>
      </div>
    </div>
}`,...(es=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:es.source}}};var ss,as,rs;E.parameters={...E.parameters,docs:{...(ss=E.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  args: {
    name: 'accessibility-input',
    label: 'Accessible Input',
    placeholder: 'Enter your name',
    description: 'This input demonstrates proper accessibility features',
    helperText: 'Please enter your full name',
    required: true,
    'aria-label': 'User full name input field'
  },
  render: args => <div>
      <Input {...args} />
      <p className="text-sm text-gray-600 mt-2">
        This input includes proper ARIA attributes, labels, and descriptions for screen readers
      </p>
    </div>
}`,...(rs=(as=E.parameters)==null?void 0:as.docs)==null?void 0:rs.source}}};var ts,ns,os;L.parameters={...L.parameters,docs:{...(ts=L.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    name: 'all-states-input',
    label: 'All States Demo',
    placeholder: 'Example input'
  },
  render: args => <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Basic States</h3>
        <Input {...args} name="normal-basic" label="Normal" />
        <Input {...args} name="disabled-basic" label="Disabled" disabled />
        <Input {...args} name="loading-basic" label="Loading" loading />
        <Input {...args} name="required-basic" label="Required" required />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">With Icons</h3>
        <Input {...args} name="left-icon-basic" label="Left Icon" leftIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>} />
        <Input {...args} name="right-icon-basic" label="Right Icon" rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>} />
        <Input {...args} name="both-icons-basic" label="Both Icons" leftIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>} rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>} />
        <Input {...args} name="loading-icon-basic" label="Loading with Icon" loading rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>} />
      </div>
    </div>
}`,...(os=(ns=L.parameters)==null?void 0:ns.docs)==null?void 0:os.source}}};const us=["Default","WithLabel","Required","WithHelperText","WithDescription","ValidationError","ValidationWarning","ValidationSuccess","LegacyError","Sizes","ConsultantContext","ClientContext","AdminContext","ExpertContext","ToolCreatorContext","FounderContext","Loading","LoadingWithCustomText","WithLeftIcon","WithRightIcon","WithBothIcons","FullWidth","Disabled","WorkspaceContextMatrix","ValidationStates","MessagePriority","AccessibilityExample","AllStates"];export{E as AccessibilityExample,h as AdminContext,L as AllStates,g as ClientContext,p as ConsultantContext,r as Default,k as Disabled,x as ExpertContext,v as FounderContext,N as FullWidth,m as LegacyError,S as Loading,j as LoadingWithCustomText,C as MessagePriority,n as Required,u as Sizes,b as ToolCreatorContext,i as ValidationError,M as ValidationStates,d as ValidationSuccess,c as ValidationWarning,w as WithBothIcons,l as WithDescription,o as WithHelperText,t as WithLabel,f as WithLeftIcon,y as WithRightIcon,I as WorkspaceContextMatrix,us as __namedExportsOrder,ms as default};
