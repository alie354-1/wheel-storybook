import{j as e}from"./jsx-runtime-BdivIsZm.js";import{r as o}from"./vendor-CIaSNbmr.js";import{c as z}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./addressinput-DR7TMhaL.js";import{A as re}from"./alert-CmQfHnIB.js";import"./Avatar-DpmMIMRY.js";import{B as N}from"./badge-CCDj6nE-.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as l}from"./button-CVrJYqSg.js";import{C as u}from"./card-CiIM_3zT.js";import"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import{I as n}from"./icon-n7_CnhNS.js";import"./image-Cvhw9Q6R.js";import{I as rr}from"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Cml1MfcN.js";import"./phoneinput-FjD8a10x.js";import{P as sr}from"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CZkKCT_E.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./users-C9yZEvey.js";import"./chevron-down-DDkHMo_x.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const se=a=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(a),ae=a=>{const c=["B","KB","MB","GB","TB"];let h=a,x=0;for(;h>=1024&&x<c.length-1;)h/=1024,x++;return`${h.toFixed(1)} ${c[x]}`},ar=({workspace:a,archives:c,policies:h,onArchiveCreate:x,onArchiveRestore:C,onArchiveDelete:A,onPolicyUpdate:q,context:P="neutral",showPolicies:K=!0,showCompliance:X=!0,permissions:M=[],className:Oe=""})=>{const[w,G]=o.useState("archives"),[v,f]=o.useState(null),[qe,b]=o.useState(!1),[H,Q]=o.useState(!1),[j,Ge]=o.useState("all"),[g,Qe]=o.useState(""),[U,Ue]=o.useState("date"),[S,Ke]=o.useState("desc"),J=M.includes("archive:create")||P==="admin",Xe=M.includes("archive:restore")||P==="admin",He=M.includes("archive:delete")||P==="admin",Y=M.includes("archive:manage_policies")||P==="admin",Z=o.useMemo(()=>{let r=c.filter(t=>!(j!=="all"&&t.status!==j||g&&!t.name.toLowerCase().includes(g.toLowerCase())&&!t.description.toLowerCase().includes(g.toLowerCase())));return r.sort((t,d)=>{let i=0;switch(U){case"name":i=t.name.localeCompare(d.name);break;case"date":i=new Date(t.createdAt).getTime()-new Date(d.createdAt).getTime();break;case"size":i=t.size-d.size;break}return S==="asc"?i:-i}),r},[c,j,g,U,S]),Je=r=>{switch(r){case"active":return{variant:"success",label:"Active"};case"archived":return{variant:"secondary",label:"Archived"};case"deleted":return{variant:"error",label:"Deleted"};default:return{variant:"secondary",label:r}}},Ye=r=>{switch(r){case"full":return{variant:"primary",label:"Full Backup"};case"incremental":return{variant:"secondary",label:"Incremental"};default:return{variant:"secondary",label:r}}},y=o.useMemo(()=>{const r=c.length,t=c.filter(d=>{const i=h.find(ee=>ee.id===d.retentionPolicy.id);return i?Math.floor((Date.now()-new Date(d.createdAt).getTime())/(1e3*60*60*24))<=i.retentionPeriod:!1}).length;return{total:r,compliant:t,percentage:r>0?Math.round(t/r*100):100}},[c,h]);o.useCallback(r=>{x==null||x(r),b(!1)},[x]);const Ze=o.useCallback(r=>{C==null||C(r),Q(!1),f(null)},[C]),er=o.useCallback(r=>{window.confirm(`Are you sure you want to delete archive "${r.name}"? This action cannot be undone.`)&&(A==null||A(r),f(null))},[A]);return e.jsxs("div",{className:z("workspace-archive",Oe),children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"Archive Management"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["Manage data archival and retention for ",a.name]})]}),J&&e.jsxs(l,{variant:"outline",onClick:()=>b(!0),className:"flex items-center gap-2",children:[e.jsx(n,{name:"Archive",size:"sm"}),"Create Archive"]})]}),e.jsx("div",{className:"border-b border-gray-200 mb-6",children:e.jsxs("nav",{className:"-mb-px flex space-x-8",children:[e.jsxs("button",{onClick:()=>G("archives"),className:z("py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2",w==="archives"?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:[e.jsx(n,{name:"Archive",size:"sm"}),"Archives (",c.length,")"]}),K&&e.jsxs("button",{onClick:()=>G("policies"),className:z("py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2",w==="policies"?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:[e.jsx(n,{name:"FileText",size:"sm"}),"Policies (",h.length,")"]}),X&&e.jsxs("button",{onClick:()=>G("compliance"),className:z("py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2",w==="compliance"?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:[e.jsx(n,{name:"ShieldCheck",size:"sm"}),"Compliance (",y.percentage,"%)"]})]})}),w==="archives"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 flex-1",children:[e.jsx(rr,{name:"search",placeholder:"Search archives...",value:g,onChange:r=>Qe(r.target.value),className:"sm:max-w-xs"}),e.jsxs("select",{value:j,onChange:r=>Ge(r.target.value),className:"px-3 py-2 border border-gray-300 rounded-md text-sm",children:[e.jsx("option",{value:"all",children:"All Archives"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"archived",children:"Archived"}),e.jsx("option",{value:"deleted",children:"Deleted"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("select",{value:U,onChange:r=>Ue(r.target.value),className:"px-3 py-2 border border-gray-300 rounded-md text-sm",children:[e.jsx("option",{value:"date",children:"Sort by Date"}),e.jsx("option",{value:"name",children:"Sort by Name"}),e.jsx("option",{value:"size",children:"Sort by Size"})]}),e.jsx(l,{variant:"ghost",size:"sm",onClick:()=>Ke(S==="asc"?"desc":"asc"),children:e.jsx(n,{name:S==="asc"?"ArrowUp":"ArrowDown",size:"sm"})})]})]}),e.jsx("div",{className:"grid gap-4",children:Z.length===0?e.jsxs(u,{className:"p-8 text-center",children:[e.jsx(n,{name:"Archive",size:"lg",className:"mx-auto mb-4 text-gray-400"}),e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No archives found"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:g||j!=="all"?"Try adjusting your search or filters":"Create your first archive to get started"}),J&&!g&&j==="all"&&e.jsx(l,{variant:"outline",onClick:()=>b(!0),children:"Create Archive"})]}):Z.map(r=>{const t=Je(r.status),d=Ye(r.type),i=h.find(k=>k.id===r.retentionPolicy.id);return e.jsx(u,{className:"p-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:r.name}),e.jsx(N,{variant:t.variant,children:t.label}),e.jsx(N,{variant:d.variant,children:d.label}),r.encryption&&e.jsxs(N,{variant:"info",children:[e.jsx(n,{name:"Lock",size:"xs"}),"Encrypted"]})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:r.description}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Created:"}),e.jsx("div",{className:"font-medium",children:se(r.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Size:"}),e.jsx("div",{className:"font-medium",children:ae(r.size)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Policy:"}),e.jsx("div",{className:"font-medium",children:(i==null?void 0:i.name)||"Unknown"})]}),r.expiresAt&&e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Expires:"}),e.jsx("div",{className:"font-medium",children:se(r.expiresAt)})]})]})]}),e.jsxs("div",{className:"flex gap-2 ml-4",children:[e.jsxs(l,{variant:"ghost",size:"sm",onClick:()=>f(r),children:[e.jsx(n,{name:"Eye",size:"sm"}),"View"]}),Xe&&r.status==="archived"&&e.jsxs(l,{variant:"outline",size:"sm",onClick:()=>{f(r),Q(!0)},children:[e.jsx(n,{name:"RefreshCw",size:"sm"}),"Restore"]}),He&&r.status!=="deleted"&&e.jsxs(l,{variant:"ghost",size:"sm",onClick:()=>er(r),className:"text-red-600 hover:text-red-700",children:[e.jsx(n,{name:"Trash2",size:"sm"}),"Delete"]})]})]})},r.id)})})]}),w==="policies"&&K&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Retention Policies"}),Y&&e.jsxs(l,{variant:"outline",size:"sm",children:[e.jsx(n,{name:"Plus",size:"sm"}),"Add Policy"]})]}),e.jsx("div",{className:"grid gap-4",children:h.map(r=>e.jsx(u,{className:"p-6",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:r.name}),e.jsx(N,{variant:"secondary",children:r.category})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:r.description}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Retention:"}),e.jsxs("div",{className:"font-medium",children:[r.retentionPeriod," days"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Auto Delete:"}),e.jsx("div",{className:"font-medium",children:r.autoDelete?"Enabled":"Disabled"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Compression:"}),e.jsx("div",{className:"font-medium",children:r.compressionEnabled?"Enabled":"Disabled"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Encryption:"}),e.jsx("div",{className:"font-medium",children:r.encryptionRequired?"Required":"Optional"})]})]})]}),Y&&e.jsx("div",{className:"flex gap-2 ml-4",children:e.jsxs(l,{variant:"ghost",size:"sm",onClick:()=>q==null?void 0:q(r),children:[e.jsx(n,{name:"Edit",size:"sm"}),"Edit"]})})]})},r.id))})]}),w==="compliance"&&X&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"Compliance Overview"}),e.jsxs(u,{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Overall Compliance Score"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[y.compliant," of ",y.total," archives compliant"]})]}),e.jsx("div",{className:"text-right",children:e.jsxs("div",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:[y.percentage,"%"]})})]}),e.jsx(sr,{value:y.percentage,className:"mb-4"}),y.percentage<100&&e.jsxs(re,{variant:"warning",children:[e.jsx(n,{name:"AlertTriangle",size:"sm"}),"Some archives may not be compliant with retention policies. Review and update as needed."]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"Policy Compliance Breakdown"}),e.jsx("div",{className:"grid gap-4",children:h.map(r=>{const t=c.filter(k=>k.retentionPolicy.id===r.id),d=t.filter(k=>Math.floor((Date.now()-new Date(k.createdAt).getTime())/864e5)<=r.retentionPeriod).length,i=t.length>0?Math.round(d/t.length*100):100;return e.jsx(u,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-900 dark:text-white",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[d," of ",t.length," archives compliant"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:[i,"%"]}),e.jsx(N,{variant:i>=90?"success":i>=70?"warning":"error",children:i>=90?"Compliant":i>=70?"Warning":"Non-compliant"})]})]})},r.id)})})]})]}),qe&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs(u,{className:"p-6 max-w-md w-full mx-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Create Archive"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Archive creation modal would go here."}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(l,{variant:"ghost",onClick:()=>b(!1),children:"Cancel"}),e.jsx(l,{onClick:()=>b(!1),children:"Create"})]})]})}),H&&v&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs(u,{className:"p-6 max-w-md w-full mx-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Restore Archive"}),e.jsxs(re,{variant:"warning",className:"mb-4",children:[e.jsx(n,{name:"AlertTriangle",size:"sm"}),"Restoring an archive will overwrite current workspace data. This action cannot be undone."]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(l,{variant:"ghost",onClick:()=>{Q(!1),f(null)},children:"Cancel"}),e.jsx(l,{onClick:()=>Ze(v),children:"Restore Archive"})]})]})}),v&&!H&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs(u,{className:"p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Archive Details"}),e.jsx(l,{variant:"ghost",size:"sm",onClick:()=>f(null),children:e.jsx(n,{name:"X",size:"sm"})})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 dark:text-white mb-2",children:"Basic Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500",children:"Name:"}),e.jsx("div",{className:"font-medium",children:v.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500",children:"Type:"}),e.jsx("div",{className:"font-medium",children:v.type})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500",children:"Status:"}),e.jsx("div",{className:"font-medium",children:v.status})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-500",children:"Size:"}),e.jsx("div",{className:"font-medium",children:ae(v.size)})]})]})]})})]})})]})},s=[{id:"policy-1",name:"Standard Business",description:"Standard retention policy for business workspaces",retentionPeriod:365,autoDelete:!0,compressionEnabled:!0,encryptionRequired:!1,workspaceTypes:["business","client"],category:"business"},{id:"policy-2",name:"Legal Compliance",description:"Extended retention for legal compliance requirements",retentionPeriod:2555,autoDelete:!1,compressionEnabled:!0,encryptionRequired:!0,workspaceTypes:["legal","compliance"],category:"legal"},{id:"policy-3",name:"Technical Archive",description:"Short-term retention for technical workspaces",retentionPeriod:90,autoDelete:!0,compressionEnabled:!1,encryptionRequired:!1,workspaceTypes:["development","testing"],category:"technical"}],p=[{id:"archive-1",name:"Q4 2024 Client Projects",description:"Complete archive of all client projects from Q4 2024",createdAt:new Date("2024-12-31"),size:2147483648,type:"full",status:"active",retentionPolicy:s[0],encryption:!0,workspaceId:"workspace-1",createdBy:"admin@example.com",expiresAt:new Date("2025-12-31")},{id:"archive-2",name:"Legal Documents Backup",description:"Archived legal documents and contracts",createdAt:new Date("2024-11-15"),size:524288e3,type:"incremental",status:"archived",retentionPolicy:s[1],encryption:!0,workspaceId:"workspace-1",createdBy:"legal@example.com",expiresAt:new Date("2031-11-15")},{id:"archive-3",name:"Development Snapshots",description:"Weekly development environment snapshots",createdAt:new Date("2024-10-01"),size:1073741824,type:"incremental",status:"deleted",retentionPolicy:s[2],encryption:!1,workspaceId:"workspace-1",createdBy:"dev@example.com"},{id:"archive-4",name:"Client Communications",description:"Archived client emails and messages",createdAt:new Date("2024-09-15"),size:314572800,type:"full",status:"active",retentionPolicy:s[0],encryption:!0,workspaceId:"workspace-1",createdBy:"support@example.com",expiresAt:new Date("2025-09-15")}],m={id:"workspace-1",name:"Acme Corporation",type:"business"},Ts={title:"Workspace/WorkspaceArchive",component:ar,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive archive management component for workspace data retention, compliance, and recovery operations."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","neutral"],description:"Workspace context that affects permissions and styling"},showPolicies:{control:"boolean",description:"Whether to show the retention policies tab"},showCompliance:{control:"boolean",description:"Whether to show the compliance monitoring tab"},permissions:{control:"object",description:"Array of permission strings for the current user"}}},D={args:{workspace:m,archives:p,policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]}},B={args:{workspace:m,archives:p,policies:s,context:"admin",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete","archive:manage_policies"]}},T={args:{workspace:m,archives:p,policies:s,context:"client",showPolicies:!1,showCompliance:!1,permissions:["archive:create"]}},R={args:{workspace:m,archives:p,policies:s,context:"consultant",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore"]}},W={args:{workspace:m,archives:[],policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]}},$={args:{workspace:m,archives:[p[0]],policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]}},E={args:{workspace:m,archives:p,policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:[]}},L={args:{workspace:{...m,name:"Legal Firm LLC",type:"legal"},archives:p,policies:s,context:"admin",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete","archive:manage_policies"]}},I={args:{workspace:m,archives:p,policies:s,context:"admin",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete","archive:manage_policies"],onArchiveCreate:a=>{console.log("Creating archive:",a),alert(`Archive "${a.name}" would be created`)},onArchiveRestore:a=>{console.log("Restoring archive:",a),alert(`Archive "${a.name}" would be restored`)},onArchiveDelete:a=>{console.log("Deleting archive:",a),alert(`Archive "${a.name}" would be deleted`)},onPolicyUpdate:a=>{console.log("Updating policy:",a),alert(`Policy "${a.name}" would be updated`)}}},V={args:{workspace:m,archives:p,policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]},parameters:{viewport:{defaultViewport:"mobile1"}}},_={args:{workspace:m,archives:p,policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]},parameters:{viewport:{defaultViewport:"tablet"}}},F={args:{workspace:m,archives:p,policies:s,context:"neutral",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete"]},parameters:{backgrounds:{default:"dark"}}},O={args:{workspace:m,archives:[...p,...Array.from({length:20},(a,c)=>({id:`archive-${c+5}`,name:`Archive ${c+5}`,description:`Generated archive ${c+5} for testing`,createdAt:new Date(2024,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),size:Math.floor(Math.random()*5e9),type:Math.random()>.5?"full":"incremental",status:["active","archived","deleted"][Math.floor(Math.random()*3)],retentionPolicy:s[Math.floor(Math.random()*s.length)],encryption:Math.random()>.5,workspaceId:"workspace-1",createdBy:`user${c}@example.com`,expiresAt:Math.random()>.3?new Date(2025,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1):void 0}))],policies:s,context:"admin",showPolicies:!0,showCompliance:!0,permissions:["archive:create","archive:restore","archive:delete","archive:manage_policies"]}};var te,ie,ce;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
}`,...(ce=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ne,oe,le;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete', 'archive:manage_policies']
  }
}`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var me,de,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'client',
    showPolicies: false,
    showCompliance: false,
    permissions: ['archive:create']
  }
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,xe,ue;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'consultant',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore']
  }
}`,...(ue=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var ve,ge,we;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: [],
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
}`,...(we=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var fe,je,ye;$.parameters={...$.parameters,docs:{...(fe=$.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: [mockArchives[0]],
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  }
}`,...(ye=(je=$.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var ke,be,Ne;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: []
  }
}`,...(Ne=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var Ce,Ae,Pe;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    workspace: {
      ...mockWorkspace,
      name: 'Legal Firm LLC',
      type: 'legal'
    },
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete', 'archive:manage_policies']
  }
}`,...(Pe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Me,Se,ze;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete', 'archive:manage_policies'],
    onArchiveCreate: (data: ArchiveData) => {
      console.log('Creating archive:', data);
      alert(\`Archive "\${data.name}" would be created\`);
    },
    onArchiveRestore: (archive: Archive) => {
      console.log('Restoring archive:', archive);
      alert(\`Archive "\${archive.name}" would be restored\`);
    },
    onArchiveDelete: (archive: Archive) => {
      console.log('Deleting archive:', archive);
      alert(\`Archive "\${archive.name}" would be deleted\`);
    },
    onPolicyUpdate: (policy: RetentionPolicy) => {
      console.log('Updating policy:', policy);
      alert(\`Policy "\${policy.name}" would be updated\`);
    }
  }
}`,...(ze=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:ze.source}}};var De,Be,Te;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(Te=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Re,We,$e;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...($e=(We=_.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Ee,Le,Ie;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: mockArchives,
    policies: mockPolicies,
    context: 'neutral',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Ie=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Ve,_e,Fe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    workspace: mockWorkspace,
    archives: [...mockArchives, ...Array.from({
      length: 20
    }, (_, i) => ({
      id: \`archive-\${i + 5}\`,
      name: \`Archive \${i + 5}\`,
      description: \`Generated archive \${i + 5} for testing\`,
      createdAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
      size: Math.floor(Math.random() * 5000000000),
      // Random size up to 5GB
      type: (Math.random() > 0.5 ? 'full' : 'incremental') as 'full' | 'incremental',
      status: ['active', 'archived', 'deleted'][Math.floor(Math.random() * 3)] as 'active' | 'archived' | 'deleted',
      retentionPolicy: mockPolicies[Math.floor(Math.random() * mockPolicies.length)],
      encryption: Math.random() > 0.5,
      workspaceId: 'workspace-1',
      createdBy: \`user\${i}@example.com\`,
      expiresAt: Math.random() > 0.3 ? new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1) : undefined
    }))],
    policies: mockPolicies,
    context: 'admin',
    showPolicies: true,
    showCompliance: true,
    permissions: ['archive:create', 'archive:restore', 'archive:delete', 'archive:manage_policies']
  }
}`,...(Fe=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};const Rs=["Default","AdminView","ClientView","ConsultantView","EmptyState","LimitedArchives","ReadOnlyView","ComplianceFocused","Interactive","Mobile","Tablet","DarkMode","LargeDataset"];export{B as AdminView,T as ClientView,L as ComplianceFocused,R as ConsultantView,F as DarkMode,D as Default,W as EmptyState,I as Interactive,O as LargeDataset,$ as LimitedArchives,V as Mobile,E as ReadOnlyView,_ as Tablet,Rs as __namedExportsOrder,Ts as default};
