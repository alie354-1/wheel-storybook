import{j as t}from"./jsx-runtime-BdivIsZm.js";import"./addressinput-DR7TMhaL.js";import"./alert-CmQfHnIB.js";import{A as Ve}from"./Avatar-DpmMIMRY.js";import"./badge-Bfd9GCop.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as p}from"./button-BioF9M8P.js";import"./card-_h8jTILF.js";import"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import{E as Ye}from"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import"./icon-DC-Rf1Vv.js";import"./image-Cvhw9Q6R.js";import"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Bn8w_kAn.js";import"./phoneinput-FjD8a10x.js";import"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import{S as qe}from"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CM3d5xfp.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import{r as m,R as Ke}from"./vendor-CIaSNbmr.js";import"./supabase-_6SMTDjj.js";import{g as Qe}from"./utils-DZQNfFwp.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./users-C9yZEvey.js";import"./chevron-down-DDkHMo_x.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const Xe=({activities:l,loading:F=!1,context:$="neutral",permissions:Me=[],grouped:_=!1,onActivityClick:d,onUserClick:g,realTimeUpdates:U=!1,onNewActivity:E,userFilters:L=[],typeFilters:O=[],onFilterChange:h,infiniteScroll:Fe=!1,onLoadMore:_e,hasMore:Ue=!1,maxHeight:J,showAvatars:Le=!0,showTimestamps:Oe=!0,className:$e="",style:Ee})=>{const[a,Je]=m.useState({}),We=Qe($),f=m.useMemo(()=>{let e=l;return a.users&&a.users.length>0&&(e=e.filter(s=>a.users.includes(s.user.id))),a.types&&a.types.length>0&&(e=e.filter(s=>a.types.includes(s.type))),a.dateRange&&(e=e.filter(s=>{const r=new Date(s.timestamp);return r>=a.dateRange.start&&r<=a.dateRange.end})),a.unreadOnly&&(e=e.filter(s=>!s.read)),e},[l,a]),Re=m.useMemo(()=>{if(!_)return{"All Activities":f};const e={};return f.forEach(s=>{const r=new Date(s.timestamp),c=new Date,i=new Date(c);i.setDate(i.getDate()-1);let o;r.toDateString()===c.toDateString()?o="Today":r.toDateString()===i.toDateString()?o="Yesterday":o=r.toLocaleDateString(),e[o]||(e[o]=[]),e[o].push(s)}),Object.keys(e).forEach(s=>{e[s].sort((r,c)=>new Date(c.timestamp).getTime()-new Date(r.timestamp).getTime())}),e},[f,_]),u=m.useCallback(e=>{Je(e),h==null||h(e)},[h]),ze=m.useCallback(e=>{d==null||d(e)},[d]),Pe=m.useCallback(e=>{g==null||g(e)},[g]);Ke.useEffect(()=>{if(U&&E)return()=>{}},[U,E]);const He=e=>{const s={create:"➕",update:"✏️",delete:"🗑️",comment:"💬",like:"👍",share:"🔗",view:"👁️",download:"⬇️",upload:"⬆️",login:"🔑",logout:"🚪",error:"❌",warning:"⚠️",success:"✅",info:"ℹ️"},r={create:"bg-green-500",update:"bg-blue-500",delete:"bg-red-500",comment:"bg-purple-500",like:"bg-pink-500",share:"bg-indigo-500",view:"bg-gray-500",download:"bg-teal-500",upload:"bg-orange-500",login:"bg-emerald-500",logout:"bg-slate-500",error:"bg-red-500",warning:"bg-yellow-500",success:"bg-green-500",info:"bg-blue-500"};return t.jsx("div",{className:`
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${r[e.type]||We.primary}
        `,children:s[e.type]||"•"})},Ie=e=>{const s=new Date(e),c=new Date().getTime()-s.getTime(),i=Math.floor(c/6e4),o=Math.floor(i/60),W=Math.floor(o/24);return i<1?"Just now":i<60?`${i}m ago`:o<24?`${o}h ago`:W<7?`${W}d ago`:s.toLocaleDateString()},Be=e=>!e.workspaceContext||e.workspaceContext===$||Me.includes("view_all_activities")?t.jsxs("div",{className:`
          flex gap-3 p-3 rounded-lg transition-colors
          ${d?"cursor-pointer hover:bg-gray-50":""}
          ${e.read?"":"bg-blue-50 border-l-4 border-blue-500"}
        `,onClick:()=>ze(e),children:[t.jsx("div",{className:"flex-shrink-0",children:He(e)}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-start justify-between gap-2",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"text-gray-900 text-sm font-medium",children:e.title}),e.description&&t.jsx("p",{className:"text-sm text-gray-600 mt-1",children:e.description}),t.jsxs("div",{className:"flex items-center gap-3 mt-2 text-xs text-gray-500",children:[Oe&&t.jsx("span",{children:Ie(e.timestamp)}),Le&&e.user&&t.jsxs("div",{className:"flex items-center gap-1 cursor-pointer hover:text-gray-700",onClick:r=>{r.stopPropagation(),Pe(e.user)},children:[e.user.avatar&&t.jsx(Ve,{src:e.user.avatar,alt:e.user.name,size:"xs"}),t.jsx("span",{children:e.user.name}),e.user.role&&t.jsxs("span",{className:"text-gray-400",children:["(",e.user.role,")"]})]}),t.jsx("span",{className:"capitalize",children:e.type.replace(/_/g," ")}),e.target&&t.jsxs("span",{children:["→ ",e.target.name]})]})]}),!e.read&&t.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"})]}),e.metadata&&Object.keys(e.metadata).length>0&&t.jsx("div",{className:"mt-2 pt-2 border-t border-gray-100",children:t.jsx("div",{className:"grid grid-cols-2 gap-2 text-xs",children:Object.entries(e.metadata).slice(0,4).map(([r,c])=>t.jsxs("div",{children:[t.jsxs("span",{className:"font-medium text-gray-600",children:[r.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),":"]}),t.jsx("span",{className:"ml-1 text-gray-900",children:typeof c=="object"?JSON.stringify(c):String(c)})]},r))})})]})]},e.id):null,Ge=(e,s)=>t.jsxs("div",{className:"mb-4",children:[_&&t.jsxs("div",{className:"flex items-center justify-between mb-3 px-3",children:[t.jsx("h3",{className:"font-semibold text-gray-900 text-sm",children:e}),t.jsxs("span",{className:"text-xs text-gray-500",children:[s.length," activit",s.length!==1?"ies":"y"]})]}),t.jsx("div",{className:"space-y-1",children:s.map(r=>Be(r))})]},e);return F?t.jsxs("div",{className:"flex items-center justify-center p-8",children:[t.jsx(qe,{size:"lg"}),t.jsx("span",{className:"ml-2 text-gray-600",children:"Loading activities..."})]}):f.length===0?t.jsx(Ye,{title:"No activities found",description:Object.keys(a).length>0?"No activities match your current filters.":"There are no activities to display.",actions:Object.keys(a).length>0?t.jsx(p,{onClick:()=>u({}),children:"Clear filters"}):void 0}):t.jsxs("div",{className:`${$e}`,style:Ee,children:[(L.length>0||O.length>0)&&t.jsxs("div",{className:"mb-4 p-3 bg-gray-50 rounded-lg",children:[t.jsx("h4",{className:"font-medium text-gray-900 mb-2 text-sm",children:"Filters"}),t.jsxs("div",{className:"space-y-2",children:[L.length>0&&t.jsxs("div",{children:[t.jsx("span",{className:"text-xs text-gray-600 mb-1 block",children:"Users:"}),t.jsx("div",{className:"flex flex-wrap gap-1",children:L.map(e=>{var s;return t.jsx(p,{variant:(s=a.users)!=null&&s.includes(e.id)?"primary":"outline",size:"sm",onClick:()=>{const r=a.users||[],i=r.includes(e.id)?r.filter(o=>o!==e.id):[...r,e.id];u({...a,users:i.length>0?i:void 0})},children:e.name},e.id)})})]}),O.length>0&&t.jsxs("div",{children:[t.jsx("span",{className:"text-xs text-gray-600 mb-1 block",children:"Types:"}),t.jsx("div",{className:"flex flex-wrap gap-1",children:O.map(e=>{var s;return t.jsx(p,{variant:(s=a.types)!=null&&s.includes(e)?"primary":"outline",size:"sm",onClick:()=>{const r=a.types||[],i=r.includes(e)?r.filter(o=>o!==e):[...r,e];u({...a,types:i.length>0?i:void 0})},children:e.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase())},e)})})]}),t.jsx("div",{children:t.jsx(p,{variant:a.unreadOnly?"primary":"outline",size:"sm",onClick:()=>{u({...a,unreadOnly:!a.unreadOnly})},children:"Unread only"})})]}),Object.keys(a).length>0&&t.jsx("div",{className:"mt-2 pt-2 border-t border-gray-200",children:t.jsx(p,{variant:"ghost",size:"sm",onClick:()=>u({}),children:"Clear all filters"})})]}),t.jsxs("div",{className:`
          bg-white border border-gray-200 rounded-lg
          ${J?"overflow-y-auto":""}
        `,style:{maxHeight:J},children:[Object.entries(Re).map(([e,s])=>Ge(e,s)),Fe&&Ue&&t.jsx("div",{className:"p-4 text-center",children:t.jsx(p,{variant:"outline",onClick:_e,disabled:F,children:F?"Loading...":"Load more"})})]}),U&&t.jsxs("div",{className:"mt-3 flex items-center justify-center text-xs text-gray-500",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"}),"Live updates enabled"]})]})},Cs={title:"Layouts/Data Display/ActivityFeed",component:Xe,parameters:{layout:"padded",docs:{description:{component:"An activity feed component for displaying user activities with filtering and real-time updates."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for theming and permissions"},grouped:{control:"boolean",description:"Group activities by date"},realTimeUpdates:{control:"boolean",description:"Enable real-time updates indicator"},showAvatars:{control:"boolean",description:"Show user avatars"},showTimestamps:{control:"boolean",description:"Show activity timestamps"},infiniteScroll:{control:"boolean",description:"Enable infinite scroll"}}},n=[{id:"1",type:"create",title:"Created new project",description:"Started working on the website redesign project",timestamp:new Date(Date.now()-1e3*60*15),user:{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",role:"Project Manager"},target:{id:"proj1",type:"project",name:"Website Redesign"},read:!1,metadata:{budget:"$50,000",deadline:"2024-03-15"}},{id:"2",type:"update",title:"Updated task status",description:"Marked design mockups as completed",timestamp:new Date(Date.now()-1e3*60*45),user:{id:"user2",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",role:"Designer"},target:{id:"task1",type:"task",name:"Design Mockups"},read:!0,workspaceContext:"consultant"},{id:"3",type:"comment",title:"Added a comment",description:"Provided feedback on the initial wireframes",timestamp:new Date(Date.now()-1e3*60*60*2),user:{id:"user3",name:"Mike Johnson",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",role:"Client"},target:{id:"wireframe1",type:"document",name:"Homepage Wireframe"},read:!0,workspaceContext:"client"},{id:"4",type:"upload",title:"Uploaded files",description:"Added new design assets to the project",timestamp:new Date(Date.now()-1e3*60*60*4),user:{id:"user2",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",role:"Designer"},target:{id:"assets1",type:"folder",name:"Design Assets"},read:!1,metadata:{file_count:12,total_size:"24.5 MB"}},{id:"5",type:"like",title:"Liked a design",description:"Approved the new color scheme proposal",timestamp:new Date(Date.now()-1e3*60*60*6),user:{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",role:"Project Manager"},target:{id:"design1",type:"design",name:"Color Scheme v2"},read:!0},{id:"6",type:"share",title:"Shared project link",description:"Shared the project with stakeholders",timestamp:new Date(Date.now()-1e3*60*60*24),user:{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",role:"Project Manager"},target:{id:"proj1",type:"project",name:"Website Redesign"},read:!0},{id:"7",type:"login",title:"Logged in",description:"Started a new work session",timestamp:new Date(Date.now()-1e3*60*60*24*2),user:{id:"user3",name:"Mike Johnson",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",role:"Client"},read:!0,metadata:{ip_address:"192.168.1.100",device:"MacBook Pro"}}],Ne=[{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",role:"Project Manager"},{id:"user2",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",role:"Designer"},{id:"user3",name:"Mike Johnson",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",role:"Client"}],Ce=["create","update","comment","upload","like","share","login"],x={args:{activities:n,loading:!1,context:"neutral",permissions:[],grouped:!1,showAvatars:!0,showTimestamps:!0,infiniteScroll:!1}},v={args:{activities:[],loading:!0,context:"neutral"}},w={args:{activities:[],loading:!1,context:"neutral"}},b={args:{activities:n,loading:!1,context:"neutral",grouped:!0,showAvatars:!0,showTimestamps:!0}},j={args:{activities:n,loading:!1,context:"consultant",userFilters:Ne,typeFilters:Ce,grouped:!1,showAvatars:!0,showTimestamps:!0}},y={args:{activities:n,loading:!1,context:"neutral",realTimeUpdates:!0,grouped:!0,showAvatars:!0,showTimestamps:!0}},A={args:{activities:n,loading:!1,context:"neutral",infiniteScroll:!0,hasMore:!0,grouped:!1,showAvatars:!0,showTimestamps:!0,onLoadMore:()=>{console.log("Loading more activities...")}}},k={args:{activities:n,loading:!1,context:"consultant",permissions:["view_all_activities"],grouped:!0,showAvatars:!0,showTimestamps:!0}},D={args:{activities:n,loading:!1,context:"client",permissions:[],grouped:!0,showAvatars:!0,showTimestamps:!0}},T={args:{activities:n,loading:!1,context:"neutral",grouped:!1,showAvatars:!1,showTimestamps:!1,maxHeight:"400px"}},S={args:{activities:[...n,...n,...n],loading:!1,context:"neutral",grouped:!0,maxHeight:"500px",showAvatars:!0,showTimestamps:!0}},N={args:{activities:n,loading:!1,context:"neutral",userFilters:Ne,typeFilters:Ce,grouped:!0,showAvatars:!0,showTimestamps:!0,onActivityClick:l=>{console.log("Activity clicked:",l),alert(`Clicked on: ${l.title}`)},onUserClick:l=>{console.log("User clicked:",l),alert(`Clicked on user: ${l.name}`)},onFilterChange:l=>{console.log("Filters changed:",l)}}},C={args:{activities:n,loading:!1,context:"neutral",grouped:!0,showAvatars:!0,showTimestamps:!0,onFilterChange:l=>{console.log("Filters changed:",l)}}},M={args:{activities:n,loading:!1,context:"admin",permissions:["view_all_activities"],grouped:!0,showAvatars:!0,showTimestamps:!0}};var R,z,P;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    permissions: [],
    grouped: false,
    showAvatars: true,
    showTimestamps: true,
    infiniteScroll: false
  }
}`,...(P=(z=x.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var H,I,B;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    activities: [],
    loading: true,
    context: 'neutral'
  }
}`,...(B=(I=v.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var G,V,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    activities: [],
    loading: false,
    context: 'neutral'
  }
}`,...(Y=(V=w.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,K,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: true,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'consultant',
    userFilters: sampleUserFilters,
    typeFilters: sampleTypeFilters,
    grouped: false,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    realTimeUpdates: true,
    grouped: true,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,ie,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    infiniteScroll: true,
    hasMore: true,
    grouped: false,
    showAvatars: true,
    showTimestamps: true,
    onLoadMore: () => {
      console.log('Loading more activities...');
    }
  }
}`,...(oe=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,le,ce;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'consultant',
    permissions: ['view_all_activities'],
    grouped: true,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,me,de;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'client',
    permissions: [],
    grouped: true,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(de=(me=D.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,ge,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: false,
    showAvatars: false,
    showTimestamps: false,
    maxHeight: '400px'
  }
}`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,xe,ve;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    activities: [...sampleActivities, ...sampleActivities, ...sampleActivities],
    // Triple the activities
    loading: false,
    context: 'neutral',
    grouped: true,
    maxHeight: '500px',
    showAvatars: true,
    showTimestamps: true
  }
}`,...(ve=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var we,be,je;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    userFilters: sampleUserFilters,
    typeFilters: sampleTypeFilters,
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
    onActivityClick: activity => {
      console.log('Activity clicked:', activity);
      alert(\`Clicked on: \${activity.title}\`);
    },
    onUserClick: user => {
      console.log('User clicked:', user);
      alert(\`Clicked on user: \${user.name}\`);
    },
    onFilterChange: filters => {
      console.log('Filters changed:', filters);
    }
  }
}`,...(je=(be=N.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var ye,Ae,ke;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'neutral',
    grouped: true,
    showAvatars: true,
    showTimestamps: true,
    // Pre-filter to show only unread activities
    onFilterChange: filters => {
      console.log('Filters changed:', filters);
    }
  }
}`,...(ke=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var De,Te,Se;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    activities: sampleActivities,
    loading: false,
    context: 'admin',
    permissions: ['view_all_activities'],
    grouped: true,
    showAvatars: true,
    showTimestamps: true
  }
}`,...(Se=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};const Ms=["Default","Loading","Empty","Grouped","WithFilters","RealTimeUpdates","InfiniteScroll","ConsultantContext","ClientContext","Compact","WithMaxHeight","Interactive","UnreadOnly","MixedWorkspaceContexts"];export{D as ClientContext,T as Compact,k as ConsultantContext,x as Default,w as Empty,b as Grouped,A as InfiniteScroll,N as Interactive,v as Loading,M as MixedWorkspaceContexts,y as RealTimeUpdates,C as UnreadOnly,j as WithFilters,S as WithMaxHeight,Ms as __namedExportsOrder,Cs as default};
