import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./addressinput-CNH7vJB0.js";import"./alert-Cwr_B149.js";import"./Avatar-9FBF7p-C.js";import"./badge-CYGCTGQ7.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import{B as q}from"./button-ZqfPLS5u.js";import"./card-M3SK2Azw.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-CfcKtpIj.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-BpDPG3bv.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import"./icon-j196pyXy.js";import"./image-CvqG4bp1.js";import"./input-BtB_vA0w.js";import"./label-Bc71zScC.js";import"./loadingoverlay-DHD7ZDEg.js";import"./Logo-gj5UbaLS.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-CUQxdS5l.js";import"./phoneinput-CoqQOG2e.js";import"./progress-DFy8PWGV.js";import"./progressindicator-4hkvR5i4.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-DGqRKp5y.js";import"./select-nq-v_0mm.js";import"./separator-BF9ukUOu.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-_l9xUKUP.js";import"./spinner-OCtiqGzF.js";import"./StatusDot-BcOjilU9.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-CMtdNDcp.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-CCDZtbJ9.js";import"./timerangeinput-CcPmfdqH.js";import"./toast-gujmqJee.js";import"./verticalslider-Czd28A1k.js";import"./workspaceicon-B8JYiyw8.js";import"./container-Dmz3l48d.js";import"./flex-B2tn7VQA.js";import"./grid-BkDwxDkj.js";import"./panel-BTHHcn-E.js";import"./stack-6K505iai.js";import{r as i}from"./index-B2-qRKKC.js";import"./supabase-_6SMTDjj.js";import{g as _e,v as ae,d as Xe,h as Ze}from"./utils-Ch6HnI2j.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";function et(c,l={},t={}){const[u,p]=i.useState(0),[n,r]=i.useState({data:l,errors:{},touched:{},isValid:!1,isSubmitting:!1,isDirty:!1,currentStep:0}),s=c.length,g=u===0,x=u===s-1,b=c[u],y=i.useMemo(()=>b?_e(b.fields,n.data,t.permissions,t.context):[],[b,n.data,t.permissions,t.context]),E=i.useCallback(()=>{if(!b)return!0;const a=ae(y,n.data,t.context);return r(o=>({...o,errors:{...o.errors,...a},isValid:Object.keys(a).length===0})),Object.keys(a).length===0},[b,y,n.data,t.context]),h=i.useMemo(()=>{if(x)return!1;const a=ae(y,n.data,t.context);return Object.keys(a).length===0},[x,y,n.data,t.context]),w=!g,N=i.useMemo(()=>t.autoSave?Xe(a=>{r(o=>({...o,lastSaved:new Date}))},t.autoSaveInterval||2e3):null,[t.autoSave,t.autoSaveInterval]),O=i.useCallback((a,o)=>{r(m=>{const k={...m.data,[a]:o},H={...m,data:k,touched:{...m.touched,[a]:!0},isDirty:Ze(k,l)};return N&&N(k),H})},[N,l]),v=i.useCallback((a,o)=>{r(m=>({...m,errors:{...m.errors,[a]:o}}))},[]),C=i.useCallback(a=>{r(o=>{const m={...o.errors};return delete m[a],{...o,errors:m}})},[]),j=i.useCallback(()=>{if(!h)return;const a=Math.min(u+1,s-1);p(a),r(o=>({...o,currentStep:a})),t.onStepChange&&t.onStepChange(a,n.data)},[h,u,s,n.data,t]),P=i.useCallback(()=>{if(!w)return;const a=Math.max(u-1,0);p(a),r(o=>({...o,currentStep:a})),t.onStepChange&&t.onStepChange(a,n.data)},[w,u,n.data,t]),d=i.useCallback(a=>{a<0||a>=s||(p(a),r(o=>({...o,currentStep:a})),t.onStepChange&&t.onStepChange(a,n.data))},[s,n.data,t]),J=i.useCallback(()=>E(),[E]),Y=i.useCallback(()=>{p(0),r({data:l,errors:{},touched:{},isValid:!1,isSubmitting:!1,isDirty:!1,currentStep:0})},[l]),B=i.useCallback(()=>{!x||!h||(r(a=>({...a,isSubmitting:!0})),t.onComplete&&t.onComplete(n.data))},[x,h,n.data,t]);return{formState:n,setValue:O,setError:v,clearError:C,validate:J,reset:Y,submit:B,currentStep:u,totalSteps:s,canGoNext:h,canGoPrevious:w,nextStep:j,previousStep:P,goToStep:d,isFirstStep:g,isLastStep:x}}function tt({steps:c,currentStep:l,completedSteps:t,context:u}){const p=r=>t.includes(r)?"completed":r===l?"current":r<l?"completed":"upcoming",n=r=>{const s=p(r),g="flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors";switch(s){case"completed":return`${g} bg-green-500 text-white`;case"current":return`${g} bg-blue-500 text-white ring-2 ring-blue-200`;case"upcoming":return`${g} bg-gray-200 text-gray-500`;default:return g}};return e.jsx("div",{className:"mb-8",children:e.jsx("div",{className:"flex items-center justify-between",children:c.map((r,s)=>e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:n(s),children:t.includes(s)?e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):e.jsx("span",{children:s+1})}),e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:r.title}),r.estimatedTime&&e.jsxs("div",{className:"text-xs text-gray-500",children:[r.estimatedTime," min"]})]})]}),s<c.length-1&&e.jsx("div",{className:"flex-1 mx-4 h-0.5 bg-gray-200",children:e.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:s<l?"100%":"0%"}})})]},r.id))})})}function at({step:c,formData:l,errors:t,onFieldChange:u,context:p,permissions:n}){const r=_e(c.fields,l,n,p);return e.jsxs("div",{className:"space-y-6",children:[c.description&&e.jsx("div",{className:"text-gray-600 mb-6",children:c.description}),e.jsx("div",{className:"grid grid-cols-1 gap-6",children:r.map(s=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[s.label,s.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{type:s.type||"text",value:l[s.name]||"",onChange:g=>u(s.name,g.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:s.placeholder,disabled:s.disabled||!1}),t[s.name]&&e.jsx("p",{className:"text-sm text-red-600",children:t[s.name]})]},s.name))})]})}function Q({context:c="neutral",steps:l,initialData:t={},currentStep:u,onStepChange:p,onComplete:n,onCancel:r,template:s,workspaceId:g,autoSave:x=!1,autoSaveInterval:b=2e3,showProgress:y=!0,allowStepSkip:E=!1,allowStepBack:h=!0,permissions:w=[],className:N="",loading:O=!1,disabled:v=!1}){const C={type:"neutral"},j=c||(C==null?void 0:C.type),P=u!==void 0,{formState:d,setValue:J,clearError:Y,validate:B,submit:a,currentStep:o,totalSteps:m,canGoNext:k,canGoPrevious:H,nextStep:Ge,previousStep:Oe,isLastStep:X}=et(l,t,{autoSave:x,autoSaveInterval:b,onStepChange:p,onComplete:n,context:j,permissions:w}),S=P?u:o,Z=P?()=>p==null?void 0:p(S+1,d.data):Ge,Je=P?()=>p==null?void 0:p(S-1,d.data):Oe,[U,Ye]=i.useState([]);i.useEffect(()=>{S>0&&!U.includes(S-1)&&Ye(F=>[...F,S-1])},[S,U]);const K=l[S];if(!K)return e.jsx("div",{className:"text-center py-8",children:e.jsx("div",{className:"text-red-600",children:"Invalid step configuration"})});const ee=Math.round((S+1)/m*100),He=(F,Qe)=>{J(F,Qe),Y(F)},Ue=()=>{B()&&Z()},Ke=()=>{B()&&a()},te=`
    bg-white rounded-lg shadow-sm border border-gray-200 p-6
    ${N}
  `;return O?e.jsx("div",{className:te,children:e.jsxs("div",{className:"animate-pulse space-y-6",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})}):e.jsxs("div",{className:te,children:[y&&e.jsx(tt,{steps:l,currentStep:S,completedSteps:U,context:j}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:K.title}),e.jsxs("div",{className:"text-sm text-gray-500",children:["Step ",S+1," of ",m," (",ee,"%)"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${ee}%`}})})]}),e.jsx(at,{step:K,formData:d.data,errors:d.errors,onFieldChange:He,context:j,permissions:w}),e.jsxs("div",{className:"flex items-center justify-between mt-8 pt-6 border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[h&&H&&e.jsx(q,{variant:"secondary",onClick:Je,disabled:v||d.isSubmitting,children:"Previous"}),r&&e.jsx(q,{variant:"ghost",onClick:r,disabled:v||d.isSubmitting,children:"Cancel"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[E&&!X&&e.jsx(q,{variant:"ghost",onClick:Z,disabled:v||d.isSubmitting,children:"Skip"}),X?e.jsx(q,{variant:"primary",onClick:Ke,disabled:v||!k||d.isSubmitting,isLoading:d.isSubmitting,children:"Complete"}):e.jsx(q,{variant:"primary",onClick:Ue,disabled:v||!k||d.isSubmitting,children:"Next"})]})]}),x&&d.lastSaved&&e.jsxs("div",{className:"mt-4 text-xs text-gray-500 text-center",children:["Last saved: ",d.lastSaved.toLocaleTimeString()]})]})}try{Q.displayName="FormWizard",Q.__docgenInfo={description:"Main FormWizard component",displayName:"FormWizard",props:{context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"founder"'},{value:'"neutral"'},{value:'"tool-creator"'}]}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"FormWizardStep[]"}},initialData:{defaultValue:{value:"{}"},description:"",name:"initialData",required:!1,type:{name:"Record<string, any>"}},currentStep:{defaultValue:null,description:"",name:"currentStep",required:!1,type:{name:"number"}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!1,type:{name:"(step: number, data: Record<string, any>) => void"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"(data: Record<string, any>) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},template:{defaultValue:null,description:"",name:"template",required:!1,type:{name:"string"}},workspaceId:{defaultValue:null,description:"",name:"workspaceId",required:!1,type:{name:"string"}},autoSave:{defaultValue:{value:"false"},description:"",name:"autoSave",required:!1,type:{name:"boolean"}},autoSaveInterval:{defaultValue:{value:"2000"},description:"",name:"autoSaveInterval",required:!1,type:{name:"number"}},showProgress:{defaultValue:{value:"true"},description:"",name:"showProgress",required:!1,type:{name:"boolean"}},allowStepSkip:{defaultValue:{value:"false"},description:"",name:"allowStepSkip",required:!1,type:{name:"boolean"}},allowStepBack:{defaultValue:{value:"true"},description:"",name:"allowStepBack",required:!1,type:{name:"boolean"}},permissions:{defaultValue:{value:"[]"},description:"",name:"permissions",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Wa={title:"Layouts/Forms/FormWizard",component:Q,parameters:{layout:"padded",docs:{description:{component:"A multi-step form wizard organism for complex data collection workflows with workspace context support."}}},argTypes:{context:{control:"select",options:["neutral","consultant","client","admin","expert","tool-creator","founder"],description:"Workspace context for styling and behavior"},autoSave:{control:"boolean",description:"Enable automatic saving of form data"},showProgress:{control:"boolean",description:"Show progress indicator"},allowStepSkip:{control:"boolean",description:"Allow users to skip steps"},allowStepBack:{control:"boolean",description:"Allow users to go back to previous steps"},loading:{control:"boolean",description:"Show loading state"},disabled:{control:"boolean",description:"Disable the entire wizard"}}},f=[{id:"personal",title:"Personal Information",description:"Please provide your basic personal information.",estimatedTime:3,fields:[{name:"firstName",label:"First Name",type:"text",required:!0,placeholder:"Enter your first name"},{name:"lastName",label:"Last Name",type:"text",required:!0,placeholder:"Enter your last name"},{name:"email",label:"Email Address",type:"email",required:!0,placeholder:"Enter your email address"}]},{id:"contact",title:"Contact Details",description:"How can we reach you?",estimatedTime:2,fields:[{name:"phone",label:"Phone Number",type:"tel",required:!1,placeholder:"Enter your phone number"},{name:"address",label:"Address",type:"text",required:!1,placeholder:"Enter your address"}]},{id:"preferences",title:"Preferences",description:"Tell us about your preferences.",estimatedTime:2,fields:[{name:"newsletter",label:"Subscribe to Newsletter",type:"checkbox",required:!1},{name:"notifications",label:"Enable Notifications",type:"checkbox",required:!1}]}],$e=[{id:"workspace-setup",title:"Workspace Setup",description:"Configure your workspace settings.",estimatedTime:5,fields:[{name:"workspaceName",label:"Workspace Name",type:"text",required:!0,placeholder:"Enter workspace name"},{name:"workspaceType",label:"Workspace Type",type:"select",required:!0,options:[{value:"personal",label:"Personal"},{value:"team",label:"Team"},{value:"enterprise",label:"Enterprise"}]}]},{id:"team-members",title:"Team Members",description:"Add team members to your workspace.",estimatedTime:3,fields:[{name:"teamSize",label:"Expected Team Size",type:"number",required:!0,placeholder:"Number of team members"},{name:"inviteEmails",label:"Invite Team Members",type:"textarea",required:!1,placeholder:"Enter email addresses, one per line"}]},{id:"billing",title:"Billing Information",description:"Set up your billing preferences.",estimatedTime:4,fields:[{name:"billingEmail",label:"Billing Email",type:"email",required:!0,placeholder:"Enter billing email"},{name:"paymentMethod",label:"Payment Method",type:"select",required:!0,options:[{value:"credit-card",label:"Credit Card"},{value:"bank-transfer",label:"Bank Transfer"},{value:"invoice",label:"Invoice"}]}]}],V={args:{steps:f,context:"neutral",showProgress:!0,allowStepBack:!0,allowStepSkip:!1,autoSave:!1}},I={args:{steps:f,context:"neutral",showProgress:!0,allowStepBack:!0,allowStepSkip:!1,autoSave:!0,autoSaveInterval:1e3}},T={args:{steps:$e,context:"neutral",showProgress:!0,allowStepBack:!0,allowStepSkip:!1,autoSave:!0}},W={args:{steps:f,context:"client",showProgress:!0,allowStepBack:!0,allowStepSkip:!1}},D={args:{steps:f,context:"consultant",showProgress:!0,allowStepBack:!0,allowStepSkip:!1}},z={args:{steps:f,context:"neutral",showProgress:!0,allowStepBack:!0,allowStepSkip:!0}},L={args:{steps:f,context:"neutral",showProgress:!1,allowStepBack:!0,allowStepSkip:!1}},M={args:{steps:f,context:"neutral",showProgress:!0,allowStepBack:!1,allowStepSkip:!1}},A={args:{steps:f,context:"neutral",loading:!0}},R={args:{steps:f,context:"neutral",disabled:!0}},_={args:{steps:f,context:"neutral",initialData:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},showProgress:!0,allowStepBack:!0}},$={args:{steps:[...f,{id:"additional",title:"Additional Information",description:"Please provide additional details.",estimatedTime:5,fields:[{name:"company",label:"Company",type:"text",required:!1,placeholder:"Enter your company name"},{name:"position",label:"Position",type:"text",required:!1,placeholder:"Enter your position"},{name:"experience",label:"Years of Experience",type:"number",required:!1,placeholder:"Enter years of experience"}]},{id:"final",title:"Review & Submit",description:"Please review your information before submitting.",estimatedTime:2,fields:[{name:"terms",label:"I agree to the terms and conditions",type:"checkbox",required:!0},{name:"marketing",label:"I agree to receive marketing communications",type:"checkbox",required:!1}]}],context:"neutral",showProgress:!0,allowStepBack:!0,autoSave:!0}},G={args:{steps:$e,context:"neutral",showProgress:!0,allowStepBack:!0,autoSave:!0,onStepChange:(c,l)=>{console.log("Step changed:",c,l)},onComplete:c=>{console.log("Form completed:",c),alert("Form submitted successfully!")},onCancel:()=>{console.log("Form cancelled"),alert("Form cancelled")}}};var re,se,ne;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: false
  }
}`,...(ne=(se=V.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: true,
    autoSaveInterval: 1000
  }
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    steps: workspaceSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: true
  }
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,me,fe;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'client',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false
  }
}`,...(fe=(me=W.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,Se,xe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'consultant',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false
  }
}`,...(xe=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var be,he,ve;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: true
  }
}`,...(ve=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,we,ke;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: false,
    allowStepBack: true,
    allowStepSkip: false
  }
}`,...(ke=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Ne,Ce,je;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: false,
    allowStepSkip: false
  }
}`,...(je=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Pe,qe,Ee;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    loading: true
  }
}`,...(Ee=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Be,Fe,Ve;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    disabled: true
  }
}`,...(Ve=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Ie,Te,We;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    context: 'neutral',
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    },
    showProgress: true,
    allowStepBack: true
  }
}`,...(We=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var De,ze,Le;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    steps: [...basicSteps, {
      id: 'additional',
      title: 'Additional Information',
      description: 'Please provide additional details.',
      estimatedTime: 5,
      fields: [{
        name: 'company',
        label: 'Company',
        type: 'text',
        required: false,
        placeholder: 'Enter your company name'
      }, {
        name: 'position',
        label: 'Position',
        type: 'text',
        required: false,
        placeholder: 'Enter your position'
      }, {
        name: 'experience',
        label: 'Years of Experience',
        type: 'number',
        required: false,
        placeholder: 'Enter years of experience'
      }]
    }, {
      id: 'final',
      title: 'Review & Submit',
      description: 'Please review your information before submitting.',
      estimatedTime: 2,
      fields: [{
        name: 'terms',
        label: 'I agree to the terms and conditions',
        type: 'checkbox',
        required: true
      }, {
        name: 'marketing',
        label: 'I agree to receive marketing communications',
        type: 'checkbox',
        required: false
      }]
    }],
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    autoSave: true
  }
}`,...(Le=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Me,Ae,Re;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    steps: workspaceSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    autoSave: true,
    onStepChange: (step: number, data: Record<string, any>) => {
      console.log('Step changed:', step, data);
    },
    onComplete: (data: Record<string, any>) => {
      console.log('Form completed:', data);
      alert('Form submitted successfully!');
    },
    onCancel: () => {
      console.log('Form cancelled');
      alert('Form cancelled');
    }
  }
}`,...(Re=(Ae=G.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};const Da=["Default","WithAutoSave","WorkspaceContext","ClientContext","ConsultantContext","WithSkipping","NoProgress","LinearFlow","Loading","Disabled","WithInitialData","LongForm","Interactive"];export{W as ClientContext,D as ConsultantContext,V as Default,R as Disabled,G as Interactive,M as LinearFlow,A as Loading,$ as LongForm,L as NoProgress,I as WithAutoSave,_ as WithInitialData,z as WithSkipping,T as WorkspaceContext,Da as __namedExportsOrder,Wa as default};
