import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./addressinput-CNH7vJB0.js";import"./alert-BhGMCdzy.js";import"./Avatar-FRCDbBKZ.js";import"./badge-CP7oh9kV.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import{B as X}from"./button-Cqm7tkEM.js";import"./card-M3SK2Azw.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-DL67fCAe.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-DaYnNXmZ.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import"./icon-DEu4D-T-.js";import"./image-BkzfWbNq.js";import"./input-7rc8uvfk.js";import"./label-Bc71zScC.js";import"./loadingoverlay-epOQCsNk.js";import"./Logo-BCeQuN96.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-DtokpCiZ.js";import"./phoneinput-DnhyWeTn.js";import"./progress-DFy8PWGV.js";import"./progressindicator-CPvhbYMc.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-uaNC3sqX.js";import"./select-oq9sW1QX.js";import"./separator-fURmX4DE.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-DUmiO_og.js";import"./spinner-C4_lq1M4.js";import"./StatusDot-I44fDEUy.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-BtDtwm2h.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-DG-PATwk.js";import"./timerangeinput-D-eCRmyp.js";import"./toast-Byd1oQcU.js";import"./verticalslider-DXRhhGVf.js";import"./workspaceicon-B8JYiyw8.js";import"./container-BV66bbjT.js";import"./flex-B2tn7VQA.js";import"./grid-Dukaz8Hf.js";import"./panel-DJq8D5Bo.js";import"./stack-6K505iai.js";import{r as s}from"./index-B2-qRKKC.js";import"./supabase-_6SMTDjj.js";import{g as sa,c as ia,v as la,h as ca,d as ma,a as Z,b as da}from"./utils-Ch6HnI2j.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";function O({context:d="neutral",schema:i,initialData:x={},onSubmit:J,onChange:S,onValidationChange:j,template:ua,workspaceId:G,autoSave:b=!1,autoSaveInterval:U=2e3,collaborative:Ke=!1,readonly:l=!1,permissions:N=[],className:Qe="",loading:Xe=!1,disabled:m=!1}){var K,Q;const[a,y]=s.useState({data:{...x},errors:{},touched:{},isValid:!0,isSubmitting:!1,isDirty:!1,lastSaved:void 0}),[M,v]=s.useState("idle"),D=s.useRef({...x});s.useRef();const g=s.useMemo(()=>sa(i.fields,a.data,N,d),[i.fields,a.data,N,d]),z=s.useMemo(()=>ia(g,a.data,N,d),[g,a.data,N,d]),w=s.useCallback(t=>{const r=la(g,t,d),c=Object.keys(r).length===0;return{errors:r,isValid:c}},[g,d]),Y=s.useCallback((t,r)=>{l||m||y(c=>{const n={...c.data,[t]:r},{errors:u,isValid:p}=w(n),C=ca(n,D.current),oa={...c,data:n,errors:u,isValid:p,isDirty:C,touched:{...c.touched,[t]:!0}};return S==null||S(n),j==null||j(u),oa})},[l,m,w,S,j]),H=s.useMemo(()=>ma(async t=>{if(!(!b||l))try{v("saving"),await new Promise(r=>setTimeout(r,500)),D.current=Z(t),y(r=>({...r,lastSaved:new Date,isDirty:!1})),v("saved"),setTimeout(()=>v("idle"),2e3)}catch(r){console.error("Auto-save failed:",r),v("error"),setTimeout(()=>v("idle"),3e3)}},U),[b,U,l]);s.useEffect(()=>{b&&a.isDirty&&!a.isSubmitting&&H(a.data)},[b,a.isDirty,a.isSubmitting,a.data,H]);const Ze=s.useCallback(async t=>{if(t.preventDefault(),l||m||a.isSubmitting)return;const{errors:r,isValid:c}=w(a.data);if(y(n=>({...n,errors:r,isValid:c,isSubmitting:!0,touched:g.reduce((u,p)=>({...u,[p.name]:!0}),{})})),c&&J)try{await J(a.data),D.current=Z(a.data),y(n=>({...n,isDirty:!1,lastSaved:new Date}))}catch(n){console.error("Form submission failed:",n)}y(n=>({...n,isSubmitting:!1}))},[l,m,a.isSubmitting,a.data,w,g,J]),ea=s.useCallback(()=>{l||m||(y({data:{...x},errors:{},touched:{},isValid:!0,isSubmitting:!1,isDirty:!1,lastSaved:void 0}),D.current={...x})},[l,m,x]),aa=s.useCallback(t=>{const r=da(t.name,G),c=a.data[t.name]||"",n=a.errors[t.name],u=a.touched[t.name];return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{htmlFor:r,className:"block text-sm font-medium text-gray-700",children:[t.label,t.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:r,name:t.name,type:t.type||"text",placeholder:t.placeholder,value:c,disabled:m||l,onChange:p=>Y(t.name,p.target.value),className:`
            w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${u&&n?"border-red-500":"border-gray-300"}
            ${m||l?"bg-gray-50 cursor-not-allowed":"bg-white"}
          `,...t.props}),u&&n&&e.jsx("p",{className:"text-sm text-red-600",children:n})]},t.name)},[a.data,a.errors,a.touched,m,l,G,Y]),ta=()=>{if(!b)return null;const t={idle:"",saving:"Saving...",saved:"Saved",error:"Save failed"},r={idle:"text-gray-500",saving:"text-blue-500",saved:"text-green-500",error:"text-red-500"};return e.jsxs("div",{className:`text-sm ${r[M]} transition-colors duration-200`,children:[t[M],a.lastSaved&&M==="idle"&&e.jsxs("span",{className:"text-gray-400 ml-2",children:["Last saved: ",a.lastSaved.toLocaleTimeString()]})]})},ra=()=>{var u,p,C;const t=((u=i.layout)==null?void 0:u.type)||"single-column",r=((p=i.layout)==null?void 0:p.spacing)||"normal",c={compact:"space-y-3",normal:"space-y-4",relaxed:"space-y-6"},n={"single-column":"grid grid-cols-1","two-column":"grid grid-cols-1 md:grid-cols-2 gap-x-6",grid:`grid grid-cols-1 md:grid-cols-${((C=i.layout)==null?void 0:C.columns)||2} gap-x-6`,tabs:"space-y-4",accordion:"space-y-2"};return e.jsx("div",{className:`${n[t]} ${c[r]}`,children:g.map(aa)})},na=()=>`bg-white border border-gray-200 rounded-lg shadow-sm ${{consultant:"border-blue-200 focus-within:border-blue-500",client:"border-green-200 focus-within:border-green-500",admin:"border-purple-200 focus-within:border-purple-500",expert:"border-orange-200 focus-within:border-orange-500","tool-creator":"border-indigo-200 focus-within:border-indigo-500",founder:"border-red-200 focus-within:border-red-500",neutral:"border-gray-200 focus-within:border-gray-500"}[d]}`;return e.jsxs("div",{className:`form-builder ${Qe}`,children:[(((K=i.metadata)==null?void 0:K.title)||z<100||b)&&e.jsxs("div",{className:"mb-6",children:[((Q=i.metadata)==null?void 0:Q.title)&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:i.metadata.title}),i.metadata.description&&e.jsx("p",{className:"text-gray-600 mt-1",children:i.metadata.description})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Progress: ",z,"%"]}),e.jsx("div",{className:"w-32 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${z}%`}})})]}),ta()]})]}),e.jsxs("form",{onSubmit:Ze,className:na(),children:[e.jsx("div",{className:"p-6",children:Xe?e.jsxs("div",{className:"flex items-center justify-center py-12",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),e.jsx("span",{className:"ml-3 text-gray-600",children:"Loading form..."})]}):ra()}),!l&&e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center space-x-3",children:a.isDirty&&e.jsx("span",{className:"text-sm text-orange-600",children:"You have unsaved changes"})}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(X,{type:"button",variant:"secondary",onClick:ea,disabled:m||a.isSubmitting||!a.isDirty,children:"Reset"}),e.jsx(X,{type:"submit",variant:"primary",disabled:m||a.isSubmitting||!a.isValid,isLoading:a.isSubmitting,children:a.isSubmitting?"Submitting...":"Submit"})]})]})})]}),Ke&&e.jsx("div",{className:"mt-4 text-sm text-gray-500",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{children:"Collaborative editing enabled"})]})})]})}try{O.displayName="FormBuilder",O.__docgenInfo={description:"FormBuilder - Dynamic form generation with workspace context",displayName:"FormBuilder",props:{context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"tool-creator"'},{value:'"founder"'},{value:'"neutral"'}]}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"FormSchema"}},initialData:{defaultValue:{value:"{}"},description:"",name:"initialData",required:!1,type:{name:"Record<string, any>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(data: Record<string, any>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(data: Record<string, any>) => void"}},onValidationChange:{defaultValue:null,description:"",name:"onValidationChange",required:!1,type:{name:"(errors: Record<string, string>) => void"}},template:{defaultValue:null,description:"",name:"template",required:!1,type:{name:"string"}},workspaceId:{defaultValue:null,description:"",name:"workspaceId",required:!1,type:{name:"string"}},autoSave:{defaultValue:{value:"false"},description:"",name:"autoSave",required:!1,type:{name:"boolean"}},autoSaveInterval:{defaultValue:{value:"2000"},description:"",name:"autoSaveInterval",required:!1,type:{name:"number"}},collaborative:{defaultValue:{value:"false"},description:"",name:"collaborative",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},permissions:{defaultValue:{value:"[]"},description:"",name:"permissions",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const h=d=>(...i)=>{console.log(`${d}:`,...i)},Ot={title:"Layouts/Forms/FormBuilder",component:O,parameters:{layout:"padded",docs:{description:{component:"Advanced form builder organism with workspace context, auto-save, and collaborative editing capabilities."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for styling and behavior"},autoSave:{control:"boolean",description:"Enable auto-save functionality"},autoSaveInterval:{control:"number",description:"Auto-save interval in milliseconds"},collaborative:{control:"boolean",description:"Enable collaborative editing indicators"},readonly:{control:"boolean",description:"Make form read-only"},disabled:{control:"boolean",description:"Disable form interactions"},loading:{control:"boolean",description:"Show loading state"}}},f={metadata:{title:"Basic Contact Form",description:"A simple contact form with basic validation"},fields:[{name:"firstName",label:"First Name",type:"text",required:!0,placeholder:"Enter your first name"},{name:"lastName",label:"Last Name",type:"text",required:!0,placeholder:"Enter your last name"},{name:"email",label:"Email Address",type:"email",required:!0,placeholder:"Enter your email address"},{name:"phone",label:"Phone Number",type:"tel",placeholder:"Enter your phone number"},{name:"message",label:"Message",type:"text",placeholder:"Enter your message"}],layout:{type:"single-column",spacing:"normal"}},Ye={metadata:{title:"Project Setup Form",description:"Advanced form for setting up a new project with multiple field types"},fields:[{name:"projectName",label:"Project Name",type:"text",required:!0,placeholder:"Enter project name"},{name:"projectType",label:"Project Type",type:"text",required:!0,placeholder:"Select project type"},{name:"budget",label:"Budget",type:"number",placeholder:"Enter budget amount"},{name:"startDate",label:"Start Date",type:"date",required:!0},{name:"endDate",label:"End Date",type:"date"},{name:"description",label:"Project Description",type:"text",placeholder:"Describe your project"}],layout:{type:"two-column",spacing:"normal"}},He={metadata:{title:"Workspace Configuration",description:"Configure your workspace settings and preferences"},fields:[{name:"workspaceName",label:"Workspace Name",type:"text",required:!0,placeholder:"Enter workspace name"},{name:"industry",label:"Industry",type:"text",placeholder:"Select your industry"},{name:"teamSize",label:"Team Size",type:"number",placeholder:"Number of team members"},{name:"timezone",label:"Timezone",type:"text",placeholder:"Select timezone"},{name:"notifications",label:"Enable Notifications",type:"checkbox"},{name:"publicProfile",label:"Public Profile",type:"checkbox"}],layout:{type:"grid",columns:2,spacing:"relaxed"}},o={args:{context:"neutral",schema:f,initialData:{},onSubmit:h("form-submitted"),onChange:h("form-changed"),onValidationChange:h("validation-changed")}},F={args:{...o.args,context:"consultant",schema:{...f,metadata:{title:"Consultant Contact Form",description:"Contact form styled for consultant workspace"}}}},q={args:{...o.args,context:"client",schema:{...f,metadata:{title:"Client Information Form",description:"Client information form with client workspace styling"}}}},k={args:{...o.args,context:"admin",schema:He}},E={args:{...o.args,schema:Ye}},V={args:{...o.args,schema:He}},P={args:{...o.args,autoSave:!0,autoSaveInterval:1e3,schema:{...f,metadata:{title:"Auto-Save Form",description:"Form with auto-save functionality enabled"}}}},A={args:{...o.args,collaborative:!0,autoSave:!0,schema:{...Ye,metadata:{title:"Collaborative Project Form",description:"Form with collaborative editing indicators"}}}},L={args:{...o.args,initialData:{firstName:"John",lastName:"Doe",email:"john.doe@example.com",phone:"+1 (555) 123-4567"}}},I={args:{...o.args,readonly:!0,initialData:{firstName:"John",lastName:"Doe",email:"john.doe@example.com",phone:"+1 (555) 123-4567",message:"This is a read-only form example."}}},T={args:{...o.args,disabled:!0,initialData:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"}}},R={args:{...o.args,loading:!0}},$={args:{context:"founder",schema:{metadata:{title:"Complete Project Setup",description:"Comprehensive form with all features enabled"},fields:[{name:"projectName",label:"Project Name",type:"text",required:!0,placeholder:"Enter project name"},{name:"clientName",label:"Client Name",type:"text",required:!0,placeholder:"Enter client name"},{name:"projectType",label:"Project Type",type:"text",required:!0,placeholder:"Select project type"},{name:"priority",label:"Priority Level",type:"text",placeholder:"Select priority"},{name:"budget",label:"Budget ($)",type:"number",placeholder:"Enter budget amount"},{name:"currency",label:"Currency",type:"text",placeholder:"Select currency"},{name:"startDate",label:"Start Date",type:"date",required:!0},{name:"endDate",label:"End Date",type:"date"},{name:"description",label:"Project Description",type:"text",placeholder:"Describe your project in detail"},{name:"requirements",label:"Special Requirements",type:"text",placeholder:"Any special requirements or notes"}],layout:{type:"grid",columns:2,spacing:"normal"}},initialData:{projectName:"New Website Design",clientName:"Acme Corporation"},autoSave:!0,autoSaveInterval:2e3,collaborative:!0,workspaceId:"workspace-123",onSubmit:h("complex-form-submitted"),onChange:h("complex-form-changed"),onValidationChange:h("complex-validation-changed")}},W={args:{...o.args,initialData:{firstName:"",lastName:"",email:"invalid-email"}}},B={args:{...o.args,schema:{...f,layout:{type:"single-column",spacing:"compact"}}}},_={args:{...o.args,schema:{...f,layout:{type:"single-column",spacing:"relaxed"}}}};var ee,ae,te;o.parameters={...o.parameters,docs:{...(ee=o.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    context: 'neutral',
    schema: basicSchema,
    initialData: {},
    onSubmit: action('form-submitted'),
    onChange: action('form-changed'),
    onValidationChange: action('validation-changed')
  }
}`,...(te=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,oe;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'consultant',
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Consultant Contact Form',
        description: 'Contact form styled for consultant workspace'
      }
    }
  }
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,le;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'client',
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Client Information Form',
        description: 'Client information form with client workspace styling'
      }
    }
  }
}`,...(le=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,me,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'admin',
    schema: workspaceSchema
  }
}`,...(de=(me=k.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,pe,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    schema: advancedSchema
  }
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,ye,he;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    schema: workspaceSchema
  }
}`,...(he=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,xe,ve;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSave: true,
    autoSaveInterval: 1000,
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Auto-Save Form',
        description: 'Form with auto-save functionality enabled'
      }
    }
  }
}`,...(ve=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Se,je,Ne;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collaborative: true,
    autoSave: true,
    schema: {
      ...advancedSchema,
      metadata: {
        title: 'Collaborative Project Form',
        description: 'Form with collaborative editing indicators'
      }
    }
  }
}`,...(Ne=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var De,we,Ce;L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567'
    }
  }
}`,...(Ce=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Fe,qe,ke;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readonly: true,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      message: 'This is a read-only form example.'
    }
  }
}`,...(ke=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};var Ee,Ve,Pe;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    }
  }
}`,...(Pe=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var Ae,Le,Ie;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(Ie=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Te,Re,$e;$.parameters={...$.parameters,docs:{...(Te=$.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    context: 'founder',
    schema: {
      metadata: {
        title: 'Complete Project Setup',
        description: 'Comprehensive form with all features enabled'
      },
      fields: [{
        name: 'projectName',
        label: 'Project Name',
        type: 'text',
        required: true,
        placeholder: 'Enter project name'
      }, {
        name: 'clientName',
        label: 'Client Name',
        type: 'text',
        required: true,
        placeholder: 'Enter client name'
      }, {
        name: 'projectType',
        label: 'Project Type',
        type: 'text',
        required: true,
        placeholder: 'Select project type'
      }, {
        name: 'priority',
        label: 'Priority Level',
        type: 'text',
        placeholder: 'Select priority'
      }, {
        name: 'budget',
        label: 'Budget ($)',
        type: 'number',
        placeholder: 'Enter budget amount'
      }, {
        name: 'currency',
        label: 'Currency',
        type: 'text',
        placeholder: 'Select currency'
      }, {
        name: 'startDate',
        label: 'Start Date',
        type: 'date',
        required: true
      }, {
        name: 'endDate',
        label: 'End Date',
        type: 'date'
      }, {
        name: 'description',
        label: 'Project Description',
        type: 'text',
        placeholder: 'Describe your project in detail'
      }, {
        name: 'requirements',
        label: 'Special Requirements',
        type: 'text',
        placeholder: 'Any special requirements or notes'
      }],
      layout: {
        type: 'grid',
        columns: 2,
        spacing: 'normal'
      }
    },
    initialData: {
      projectName: 'New Website Design',
      clientName: 'Acme Corporation'
    },
    autoSave: true,
    autoSaveInterval: 2000,
    collaborative: true,
    workspaceId: 'workspace-123',
    onSubmit: action('complex-form-submitted'),
    onChange: action('complex-form-changed'),
    onValidationChange: action('complex-validation-changed')
  }
}`,...($e=(Re=$.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var We,Be,_e;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialData: {
      firstName: '',
      lastName: '',
      email: 'invalid-email'
    }
  }
}`,...(_e=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var Je,Me,ze;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    schema: {
      ...basicSchema,
      layout: {
        type: 'single-column',
        spacing: 'compact'
      }
    }
  }
}`,...(ze=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:ze.source}}};var Oe,Ge,Ue;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    schema: {
      ...basicSchema,
      layout: {
        type: 'single-column',
        spacing: 'relaxed'
      }
    }
  }
}`,...(Ue=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};const Gt=["Default","ConsultantContext","ClientContext","AdminContext","TwoColumnLayout","GridLayout","WithAutoSave","CollaborativeForm","WithInitialData","ReadOnlyForm","DisabledForm","LoadingForm","ComplexForm","WithValidationErrors","CompactLayout","RelaxedLayout"];export{k as AdminContext,q as ClientContext,A as CollaborativeForm,B as CompactLayout,$ as ComplexForm,F as ConsultantContext,o as Default,T as DisabledForm,V as GridLayout,R as LoadingForm,I as ReadOnlyForm,_ as RelaxedLayout,E as TwoColumnLayout,P as WithAutoSave,L as WithInitialData,W as WithValidationErrors,Gt as __namedExportsOrder,Ot as default};
