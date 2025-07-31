import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./addressinput-CNH7vJB0.js";import"./alert-Cwr_B149.js";import"./Avatar-9FBF7p-C.js";import"./badge-BkMF42HX.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import{B as y}from"./button-ZqfPLS5u.js";import"./card-M3SK2Azw.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-CfcKtpIj.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-BpDPG3bv.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import"./icon-J7yhjHa8.js";import"./image-CvqG4bp1.js";import"./input-BtB_vA0w.js";import"./label-Bc71zScC.js";import"./loadingoverlay-DHD7ZDEg.js";import"./Logo-gj5UbaLS.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-CUQxdS5l.js";import"./phoneinput-CoqQOG2e.js";import"./progress-DFy8PWGV.js";import"./progressindicator-4hkvR5i4.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-DGqRKp5y.js";import"./select-nq-v_0mm.js";import"./separator-BF9ukUOu.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-_l9xUKUP.js";import"./spinner-OCtiqGzF.js";import"./StatusDot-BcOjilU9.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-CMtdNDcp.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-CCDZtbJ9.js";import"./timerangeinput-CcPmfdqH.js";import"./toast-gujmqJee.js";import"./verticalslider-Czd28A1k.js";import"./workspaceicon-B8JYiyw8.js";import"./container-Dmz3l48d.js";import"./flex-B2tn7VQA.js";import"./grid-BkDwxDkj.js";import"./panel-BTHHcn-E.js";import"./stack-6K505iai.js";import{r as i}from"./index-B2-qRKKC.js";import"./supabase-_6SMTDjj.js";import{d as Ue,g as We}from"./utils-Ch6HnI2j.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";function Be(a,n={}){const[l,r]=i.useState(a),[s,c]=i.useState(!1),[t,m]=i.useState(!1),[f,g]=i.useState(!1),[$,T]=i.useState(null),v=i.useMemo(()=>n.autoSave?Ue(j=>{g(!0),setTimeout(()=>{g(!1),T(new Date),m(!1)},500)},n.autoSaveInterval||2e3):null,[n.autoSave,n.autoSaveInterval]),d=i.useCallback(j=>{if(!l)return;const p={...l,...j};r(p),m(!0),n.onTemplateChange&&n.onTemplateChange(p),v&&v(p)},[l,n,v]),b=i.useCallback(async()=>{if(!(!l||!t)){g(!0);try{n.onTemplateSave&&n.onTemplateSave(l),T(new Date),m(!1)}finally{g(!1)}}},[l,t,n]),x=i.useCallback(()=>{c(!0)},[]),o=i.useCallback(()=>{c(!1)},[]),u=i.useCallback(()=>{r(a),c(!1),m(!1)},[a]);return{currentTemplate:l,isEditing:s,isDirty:t,isSaving:f,lastSaved:$,updateTemplate:d,saveTemplate:b,startEditing:x,stopEditing:o,cancelEditing:u}}function He({metadata:a,onMetadataChange:n,context:l,disabled:r=!1}){var c;const s=(t,m)=>{n({...a,[t]:m})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Template Name *"}),e.jsx("input",{type:"text",value:a.name,onChange:t=>s("name",t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter template name",disabled:r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Category"}),e.jsxs("select",{value:a.category,onChange:t=>s("category",t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:r,children:[e.jsx("option",{value:"general",children:"General"}),e.jsx("option",{value:"onboarding",children:"Onboarding"}),e.jsx("option",{value:"survey",children:"Survey"}),e.jsx("option",{value:"application",children:"Application"}),e.jsx("option",{value:"feedback",children:"Feedback"}),e.jsx("option",{value:"registration",children:"Registration"}),e.jsx("option",{value:"contact",children:"Contact"}),e.jsx("option",{value:"custom",children:"Custom"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description"}),e.jsx("textarea",{value:a.description||"",onChange:t=>s("description",t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Describe what this template is for",rows:3,disabled:r})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Version"}),e.jsx("input",{type:"text",value:a.version,onChange:t=>s("version",t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"1.0.0",disabled:r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Author"}),e.jsx("input",{type:"text",value:a.author||"",onChange:t=>s("author",t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Template author",disabled:r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Estimated Time (minutes)"}),e.jsx("input",{type:"number",value:a.estimatedTime||"",onChange:t=>s("estimatedTime",parseInt(t.target.value)||void 0),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"5",min:"1",disabled:r})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tags"}),e.jsx("input",{type:"text",value:((c=a.tags)==null?void 0:c.join(", "))||"",onChange:t=>s("tags",t.target.value.split(",").map(m=>m.trim()).filter(Boolean)),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"tag1, tag2, tag3",disabled:r}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Separate tags with commas"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:a.isPublic||!1,onChange:t=>s("isPublic",t.target.checked),className:"mr-2",disabled:r}),e.jsx("span",{className:"text-sm text-gray-700",children:"Make template public"})]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:a.isShared||!1,onChange:t=>s("isShared",t.target.checked),className:"mr-2",disabled:r}),e.jsx("span",{className:"text-sm text-gray-700",children:"Allow sharing"})]})]})]})}function B({template:a,context:n}){const l=i.useMemo(()=>We(a.fields,{},[],n),[a.fields,n]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:a.metadata.name}),a.metadata.description&&e.jsx("p",{className:"text-gray-600 mt-1",children:a.metadata.description}),e.jsxs("div",{className:"flex items-center space-x-4 mt-2 text-sm text-gray-500",children:[e.jsxs("span",{children:["Category: ",a.metadata.category]}),e.jsxs("span",{children:["Version: ",a.metadata.version]}),a.metadata.estimatedTime&&e.jsxs("span",{children:["Est. time: ",a.metadata.estimatedTime," min"]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"font-medium text-gray-900",children:["Form Fields (",l.length,")"]}),e.jsx("div",{className:"grid grid-cols-1 gap-4",children:l.map((r,s)=>e.jsxs("div",{className:"border border-gray-200 rounded-md p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("span",{className:"font-medium text-sm text-gray-900",children:[r.label,r.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("span",{className:"text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded",children:r.type})]}),r.placeholder&&e.jsxs("p",{className:"text-xs text-gray-500",children:["Placeholder: ",r.placeholder]}),r.validation&&e.jsxs("p",{className:"text-xs text-gray-500",children:["Validation: ",JSON.stringify(r.validation)]})]},r.name))})]}),a.metadata.tags&&a.metadata.tags.length>0&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Tags"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.metadata.tags.map((r,s)=>e.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:r},s))})]})]})}function _({context:a="neutral",template:n,mode:l="view",onTemplateChange:r,onTemplateSave:s,onTemplateUse:c,onTemplateShare:t,onTemplateDelete:m,autoSave:f=!1,autoSaveInterval:g=2e3,permissions:$=[],className:T="",loading:v=!1,disabled:d=!1}){const b={type:"neutral"},x=a||(b==null?void 0:b.type),{currentTemplate:o,isEditing:u,isDirty:j,isSaving:p,lastSaved:U,updateTemplate:W,saveTemplate:Pe,startEditing:Ie,cancelEditing:Ve}=Be(n||null,{autoSave:f,autoSaveInterval:g,onTemplateChange:r,onTemplateSave:s,context:x,permissions:$}),Le=i.useCallback(Oe=>{W({metadata:Oe})},[W]),$e=i.useCallback(()=>{o&&c&&c(o)},[o,c]),Me=i.useCallback(()=>{o&&t&&t(o)},[o,t]),_e=i.useCallback(()=>{o&&m&&m(o)},[o,m]),M=`
    bg-white rounded-lg shadow-sm border border-gray-200 p-6
    ${T}
  `;return v?e.jsx("div",{className:M,children:e.jsxs("div",{className:"animate-pulse space-y-6",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})}):o?e.jsxs("div",{className:M,children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l==="edit"||u?"Edit Template":"Template"}),U&&e.jsxs("p",{className:"text-sm text-gray-500",children:["Last saved: ",U.toLocaleTimeString()]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[l==="view"&&!u&&e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"secondary",onClick:$e,disabled:d,children:"Use Template"}),o.metadata.isShared&&e.jsx(y,{variant:"ghost",onClick:Me,disabled:d,children:"Share"}),e.jsx(y,{variant:"ghost",onClick:Ie,disabled:d,children:"Edit"})]}),(l==="edit"||u)&&e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"ghost",onClick:Ve,disabled:d||p,children:"Cancel"}),e.jsx(y,{variant:"primary",onClick:Pe,disabled:d||!j||p,isLoading:p,children:"Save"})]}),l==="view"&&!u&&m&&e.jsx(y,{variant:"ghost",onClick:_e,disabled:d,className:"text-red-600 hover:text-red-700",children:"Delete"})]})]}),l==="edit"||u?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Template Information"}),e.jsx(He,{metadata:o.metadata,onMetadataChange:Le,context:x,disabled:d||p})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Form Preview"}),e.jsx(B,{template:o,context:x})]})]}):e.jsx(B,{template:o,context:x}),f&&p&&e.jsx("div",{className:"mt-4 text-xs text-gray-500 text-center",children:"Saving..."})]}):e.jsx("div",{className:M,children:e.jsx("div",{className:"text-center py-8",children:e.jsx("div",{className:"text-gray-500",children:"No template selected"})})})}try{_.displayName="FormTemplate",_.__docgenInfo={description:"Main FormTemplate component",displayName:"FormTemplate",props:{context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"founder"'},{value:'"neutral"'},{value:'"tool-creator"'}]}},template:{defaultValue:null,description:"",name:"template",required:!1,type:{name:"FormTemplate"}},mode:{defaultValue:{value:"view"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"view"'},{value:'"edit"'}]}},onTemplateChange:{defaultValue:null,description:"",name:"onTemplateChange",required:!1,type:{name:"(template: FormTemplate) => void"}},onTemplateSave:{defaultValue:null,description:"",name:"onTemplateSave",required:!1,type:{name:"(template: FormTemplate) => void"}},onTemplateUse:{defaultValue:null,description:"",name:"onTemplateUse",required:!1,type:{name:"(template: FormTemplate) => void"}},onTemplateShare:{defaultValue:null,description:"",name:"onTemplateShare",required:!1,type:{name:"(template: FormTemplate) => void"}},onTemplateDelete:{defaultValue:null,description:"",name:"onTemplateDelete",required:!1,type:{name:"(template: FormTemplate) => void"}},autoSave:{defaultValue:{value:"false"},description:"",name:"autoSave",required:!1,type:{name:"boolean"}},autoSaveInterval:{defaultValue:{value:"2000"},description:"",name:"autoSaveInterval",required:!1,type:{name:"number"}},permissions:{defaultValue:{value:"[]"},description:"",name:"permissions",required:!1,type:{name:"string[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const St={title:"Layouts/Forms/FormTemplate",component:_,parameters:{layout:"padded",docs:{description:{component:"A reusable form template organism for managing and sharing form configurations with workspace context support."}}},argTypes:{context:{control:"select",options:["neutral","consultant","client","admin","expert","tool-creator","founder"],description:"Workspace context for styling and behavior"},mode:{control:"select",options:["view","edit"],description:"Template display mode"},autoSave:{control:"boolean",description:"Enable automatic saving of template changes"},loading:{control:"boolean",description:"Show loading state"},disabled:{control:"boolean",description:"Disable the entire template"}}},h={id:"basic-contact",metadata:{name:"Basic Contact Form",description:"A simple contact form template for general inquiries.",category:"contact",version:"1.0.0",author:"Design System Team",tags:["contact","basic","inquiry"],estimatedTime:3,isPublic:!0,isShared:!0,createdAt:new Date("2025-01-01"),updatedAt:new Date("2025-01-14")},fields:[{name:"firstName",type:"text",label:"First Name",placeholder:"Enter your first name",required:!0},{name:"lastName",type:"text",label:"Last Name",placeholder:"Enter your last name",required:!0},{name:"email",type:"email",label:"Email Address",placeholder:"Enter your email address",required:!0,validation:[{type:"email",message:"Please enter a valid email address"}]},{name:"phone",type:"tel",label:"Phone Number",placeholder:"Enter your phone number",required:!1},{name:"message",type:"textarea",label:"Message",placeholder:"Enter your message",required:!0}]},O={id:"client-onboarding",metadata:{name:"Client Onboarding Form",description:"Comprehensive client onboarding template for new business relationships.",category:"onboarding",version:"2.1.0",author:"Business Development Team",tags:["onboarding","client","business","comprehensive"],estimatedTime:15,isPublic:!1,isShared:!0,createdAt:new Date("2024-12-01"),updatedAt:new Date("2025-01-10")},fields:[{name:"companyName",type:"text",label:"Company Name",placeholder:"Enter company name",required:!0},{name:"industry",type:"select",label:"Industry",required:!0,options:[{value:"technology",label:"Technology"},{value:"healthcare",label:"Healthcare"},{value:"finance",label:"Finance"},{value:"retail",label:"Retail"},{value:"manufacturing",label:"Manufacturing"},{value:"other",label:"Other"}]},{name:"companySize",type:"select",label:"Company Size",required:!0,options:[{value:"1-10",label:"1-10 employees"},{value:"11-50",label:"11-50 employees"},{value:"51-200",label:"51-200 employees"},{value:"201-1000",label:"201-1000 employees"},{value:"1000+",label:"1000+ employees"}]},{name:"primaryContact",type:"text",label:"Primary Contact Name",placeholder:"Enter primary contact name",required:!0},{name:"contactEmail",type:"email",label:"Contact Email",placeholder:"Enter contact email",required:!0},{name:"projectDescription",type:"textarea",label:"Project Description",placeholder:"Describe your project requirements",required:!0},{name:"budget",type:"select",label:"Budget Range",required:!1,options:[{value:"under-10k",label:"Under $10,000"},{value:"10k-50k",label:"$10,000 - $50,000"},{value:"50k-100k",label:"$50,000 - $100,000"},{value:"100k-500k",label:"$100,000 - $500,000"},{value:"over-500k",label:"Over $500,000"}]},{name:"timeline",type:"select",label:"Project Timeline",required:!1,options:[{value:"asap",label:"ASAP"},{value:"1-3-months",label:"1-3 months"},{value:"3-6-months",label:"3-6 months"},{value:"6-12-months",label:"6-12 months"},{value:"flexible",label:"Flexible"}]}]},Fe={id:"feedback-survey",metadata:{name:"Customer Feedback Survey",description:"Collect valuable feedback from customers about their experience.",category:"survey",version:"1.5.0",author:"Customer Success Team",tags:["feedback","survey","customer","experience"],estimatedTime:5,isPublic:!0,isShared:!1,createdAt:new Date("2024-11-15"),updatedAt:new Date("2025-01-05")},fields:[{name:"overallSatisfaction",type:"select",label:"Overall Satisfaction",required:!0,options:[{value:"5",label:"Very Satisfied"},{value:"4",label:"Satisfied"},{value:"3",label:"Neutral"},{value:"2",label:"Dissatisfied"},{value:"1",label:"Very Dissatisfied"}]},{name:"recommendationLikelihood",type:"number",label:"How likely are you to recommend us? (0-10)",required:!0,validation:[{type:"number",message:"Please enter a number between 0 and 10"}]},{name:"favoriteFeatures",type:"textarea",label:"What features do you like most?",placeholder:"Tell us about your favorite features",required:!1},{name:"improvementSuggestions",type:"textarea",label:"What could we improve?",placeholder:"Share your suggestions for improvement",required:!1},{name:"additionalComments",type:"textarea",label:"Additional Comments",placeholder:"Any other feedback you'd like to share",required:!1}]},S={args:{template:h,context:"neutral",mode:"view"}},N={args:{template:h,context:"neutral",mode:"edit"}},E={args:{template:O,context:"neutral",mode:"view"}},q={args:{template:Fe,context:"neutral",mode:"view"}},w={args:{template:h,context:"client",mode:"view"}},C={args:{template:O,context:"consultant",mode:"view"}},k={args:{template:Fe,context:"admin",mode:"edit"}},D={args:{template:h,context:"neutral",mode:"edit",autoSave:!0,autoSaveInterval:1e3}},A={args:{template:h,context:"neutral",loading:!0}},F={args:{template:h,context:"neutral",mode:"edit",disabled:!0}},P={args:{template:null,context:"neutral",mode:"view"}},I={args:{template:{id:"empty-template",metadata:{name:"Empty Template",description:"A template with no fields",category:"general",version:"1.0.0",tags:["empty","template"],estimatedTime:1,isPublic:!1,isShared:!1},fields:[]},context:"neutral",mode:"view"}},V={args:{template:O,context:"neutral",mode:"view",autoSave:!0,onTemplateChange:a=>{console.log("Template changed:",a)},onTemplateSave:a=>{console.log("Template saved:",a),alert("Template saved successfully!")},onTemplateUse:a=>{console.log("Template used:",a),alert(`Using template: ${a.metadata.name}`)},onTemplateShare:a=>{console.log("Template shared:",a),alert(`Sharing template: ${a.metadata.name}`)},onTemplateDelete:a=>{console.log("Template deleted:",a),confirm(`Are you sure you want to delete "${a.metadata.name}"?`)&&alert("Template deleted!")}}},L={args:{template:{id:"comprehensive-application",metadata:{name:"Comprehensive Job Application",description:"A detailed job application form with multiple sections and field types.",category:"application",version:"3.0.0",author:"HR Department",tags:["application","job","comprehensive","detailed"],estimatedTime:25,isPublic:!0,isShared:!0,createdAt:new Date("2024-10-01"),updatedAt:new Date("2025-01-12")},fields:[{name:"personalInfo",type:"section",label:"Personal Information",required:!1},{name:"firstName",type:"text",label:"First Name",placeholder:"Enter your first name",required:!0},{name:"lastName",type:"text",label:"Last Name",placeholder:"Enter your last name",required:!0},{name:"email",type:"email",label:"Email Address",placeholder:"Enter your email address",required:!0},{name:"phone",type:"tel",label:"Phone Number",placeholder:"Enter your phone number",required:!0},{name:"address",type:"textarea",label:"Address",placeholder:"Enter your full address",required:!0},{name:"experience",type:"section",label:"Work Experience",required:!1},{name:"currentPosition",type:"text",label:"Current Position",placeholder:"Enter your current job title",required:!1},{name:"yearsExperience",type:"number",label:"Years of Experience",placeholder:"Enter years of experience",required:!0},{name:"previousEmployer",type:"text",label:"Previous Employer",placeholder:"Enter previous employer name",required:!1},{name:"skills",type:"textarea",label:"Key Skills",placeholder:"List your key skills and competencies",required:!0},{name:"education",type:"section",label:"Education",required:!1},{name:"degree",type:"select",label:"Highest Degree",required:!0,options:[{value:"high-school",label:"High School"},{value:"associate",label:"Associate Degree"},{value:"bachelor",label:"Bachelor's Degree"},{value:"master",label:"Master's Degree"},{value:"doctorate",label:"Doctorate"}]},{name:"university",type:"text",label:"University/Institution",placeholder:"Enter university or institution name",required:!1},{name:"graduationYear",type:"number",label:"Graduation Year",placeholder:"Enter graduation year",required:!1},{name:"additional",type:"section",label:"Additional Information",required:!1},{name:"coverLetter",type:"textarea",label:"Cover Letter",placeholder:"Write a brief cover letter",required:!1},{name:"availability",type:"select",label:"Availability",required:!0,options:[{value:"immediate",label:"Immediate"},{value:"2-weeks",label:"2 weeks notice"},{value:"1-month",label:"1 month notice"},{value:"flexible",label:"Flexible"}]},{name:"salaryExpectation",type:"text",label:"Salary Expectation",placeholder:"Enter expected salary range",required:!1}]},context:"neutral",mode:"view"}};var H,R,Y;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'view'
  }
}`,...(Y=(R=S.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var G,J,z;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit'
  }
}`,...(z=(J=N.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    template: onboardingTemplate,
    context: 'neutral',
    mode: 'view'
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    template: surveyTemplate,
    context: 'neutral',
    mode: 'view'
  }
}`,...(ae=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'client',
    mode: 'view'
  }
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,se,oe;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    template: onboardingTemplate,
    context: 'consultant',
    mode: 'view'
  }
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,me,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    template: surveyTemplate,
    context: 'admin',
    mode: 'edit'
  }
}`,...(ce=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,pe,ue;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit',
    autoSave: true,
    autoSaveInterval: 1000
  }
}`,...(ue=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,xe,ye;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'neutral',
    loading: true
  }
}`,...(ye=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var he,ve,be;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit',
    disabled: true
  }
}`,...(be=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Te,je;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    template: null,
    context: 'neutral',
    mode: 'view'
  }
}`,...(je=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var Se,Ne,Ee;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    template: {
      id: 'empty-template',
      metadata: {
        name: 'Empty Template',
        description: 'A template with no fields',
        category: 'general',
        version: '1.0.0',
        tags: ['empty', 'template'],
        estimatedTime: 1,
        isPublic: false,
        isShared: false
      },
      fields: []
    },
    context: 'neutral',
    mode: 'view'
  }
}`,...(Ee=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var qe,we,Ce;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    template: onboardingTemplate,
    context: 'neutral',
    mode: 'view',
    autoSave: true,
    onTemplateChange: (template: FormTemplateType) => {
      console.log('Template changed:', template);
    },
    onTemplateSave: (template: FormTemplateType) => {
      console.log('Template saved:', template);
      alert('Template saved successfully!');
    },
    onTemplateUse: (template: FormTemplateType) => {
      console.log('Template used:', template);
      alert(\`Using template: \${template.metadata.name}\`);
    },
    onTemplateShare: (template: FormTemplateType) => {
      console.log('Template shared:', template);
      alert(\`Sharing template: \${template.metadata.name}\`);
    },
    onTemplateDelete: (template: FormTemplateType) => {
      console.log('Template deleted:', template);
      if (confirm(\`Are you sure you want to delete "\${template.metadata.name}"?\`)) {
        alert('Template deleted!');
      }
    }
  }
}`,...(Ce=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var ke,De,Ae;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    template: {
      id: 'comprehensive-application',
      metadata: {
        name: 'Comprehensive Job Application',
        description: 'A detailed job application form with multiple sections and field types.',
        category: 'application',
        version: '3.0.0',
        author: 'HR Department',
        tags: ['application', 'job', 'comprehensive', 'detailed'],
        estimatedTime: 25,
        isPublic: true,
        isShared: true,
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2025-01-12')
      },
      fields: [{
        name: 'personalInfo',
        type: 'section',
        label: 'Personal Information',
        required: false
      }, {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        required: true
      }, {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        required: true
      }, {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true
      }, {
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        required: true
      }, {
        name: 'address',
        type: 'textarea',
        label: 'Address',
        placeholder: 'Enter your full address',
        required: true
      }, {
        name: 'experience',
        type: 'section',
        label: 'Work Experience',
        required: false
      }, {
        name: 'currentPosition',
        type: 'text',
        label: 'Current Position',
        placeholder: 'Enter your current job title',
        required: false
      }, {
        name: 'yearsExperience',
        type: 'number',
        label: 'Years of Experience',
        placeholder: 'Enter years of experience',
        required: true
      }, {
        name: 'previousEmployer',
        type: 'text',
        label: 'Previous Employer',
        placeholder: 'Enter previous employer name',
        required: false
      }, {
        name: 'skills',
        type: 'textarea',
        label: 'Key Skills',
        placeholder: 'List your key skills and competencies',
        required: true
      }, {
        name: 'education',
        type: 'section',
        label: 'Education',
        required: false
      }, {
        name: 'degree',
        type: 'select',
        label: 'Highest Degree',
        required: true,
        options: [{
          value: 'high-school',
          label: 'High School'
        }, {
          value: 'associate',
          label: 'Associate Degree'
        }, {
          value: 'bachelor',
          label: 'Bachelor\\'s Degree'
        }, {
          value: 'master',
          label: 'Master\\'s Degree'
        }, {
          value: 'doctorate',
          label: 'Doctorate'
        }]
      }, {
        name: 'university',
        type: 'text',
        label: 'University/Institution',
        placeholder: 'Enter university or institution name',
        required: false
      }, {
        name: 'graduationYear',
        type: 'number',
        label: 'Graduation Year',
        placeholder: 'Enter graduation year',
        required: false
      }, {
        name: 'additional',
        type: 'section',
        label: 'Additional Information',
        required: false
      }, {
        name: 'coverLetter',
        type: 'textarea',
        label: 'Cover Letter',
        placeholder: 'Write a brief cover letter',
        required: false
      }, {
        name: 'availability',
        type: 'select',
        label: 'Availability',
        required: true,
        options: [{
          value: 'immediate',
          label: 'Immediate'
        }, {
          value: '2-weeks',
          label: '2 weeks notice'
        }, {
          value: '1-month',
          label: '1 month notice'
        }, {
          value: 'flexible',
          label: 'Flexible'
        }]
      }, {
        name: 'salaryExpectation',
        type: 'text',
        label: 'Salary Expectation',
        placeholder: 'Enter expected salary range',
        required: false
      }]
    },
    context: 'neutral',
    mode: 'view'
  }
}`,...(Ae=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};const Nt=["Default","EditMode","OnboardingTemplate","SurveyTemplate","ClientContext","ConsultantContext","AdminContext","WithAutoSave","Loading","Disabled","NoTemplate","EmptyTemplate","Interactive","LongTemplate"];export{k as AdminContext,w as ClientContext,C as ConsultantContext,S as Default,F as Disabled,N as EditMode,I as EmptyTemplate,V as Interactive,A as Loading,L as LongTemplate,P as NoTemplate,E as OnboardingTemplate,q as SurveyTemplate,D as WithAutoSave,Nt as __namedExportsOrder,St as default};
