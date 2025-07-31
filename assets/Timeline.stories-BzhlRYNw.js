import{j as t}from"./jsx-runtime-BdivIsZm.js";import"./addressinput-DR7TMhaL.js";import"./alert-CmQfHnIB.js";import{A as Je}from"./Avatar-DpmMIMRY.js";import{B as Re}from"./badge-CCDj6nE-.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as h}from"./button-CVrJYqSg.js";import"./card-CiIM_3zT.js";import"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import{E as We}from"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import"./icon-n7_CnhNS.js";import"./image-Cvhw9Q6R.js";import"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Cml1MfcN.js";import"./phoneinput-FjD8a10x.js";import"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import{S as He}from"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CZkKCT_E.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import{r as c,R as Le}from"./vendor-CIaSNbmr.js";import"./supabase-_6SMTDjj.js";import{g as Me}from"./utils-DZQNfFwp.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./users-C9yZEvey.js";import"./chevron-down-DDkHMo_x.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const Oe=({events:i,loading:je=!1,context:_="neutral",permissions:Ne=[],groupBy:p="date",filtering:D=[],onEventClick:m,onFilterChange:d,realTimeUpdates:C=!1,onNewEvent:$,responsive:Te=!0,maxHeight:G,showTime:Ue=!0,showUser:ke=!0,className:Ee="",style:Se})=>{const[n,De]=c.useState(D),[B,Ce]=c.useState(new Set),A=Me(_),u=c.useMemo(()=>n.length===0?i:i.filter(e=>n.every(s=>{var r;switch(s.type){case"user":return((r=e.user)==null?void 0:r.id)===s.value;case"type":return e.type===s.value;case"status":return e.status===s.value;case"date":const o=new Date(e.timestamp),l=new Date(s.value);return o.toDateString()===l.toDateString();default:return!0}})),[i,n]),Be=c.useMemo(()=>{if(p==="none")return{"All Events":u};const e={};return u.forEach(s=>{var o;let r;switch(p){case"date":r=new Date(s.timestamp).toDateString();break;case"type":r=s.type;break;case"user":r=((o=s.user)==null?void 0:o.name)||"Unknown User";break;default:r="All Events"}e[r]||(e[r]=[]),e[r].push(s)}),Object.keys(e).forEach(s=>{e[s].sort((r,o)=>new Date(o.timestamp).getTime()-new Date(r.timestamp).getTime())}),e},[u,p]),g=c.useCallback(e=>{De(e),d==null||d(e)},[d]),_e=c.useCallback(e=>{m==null||m(e)},[m]),$e=c.useCallback(e=>{const s=new Set(B);s.has(e)?s.delete(e):s.add(e),Ce(s)},[B]);Le.useEffect(()=>{if(C&&$)return()=>{}},[C,$]);const Ge=e=>{if(e.icon)return t.jsx("div",{className:`
            w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
            ${e.color?"":A.primary}
          `,style:{backgroundColor:e.color},children:e.icon});const s={pending:"bg-yellow-500",completed:"bg-green-500",failed:"bg-red-500",cancelled:"bg-gray-500"},r={pending:"⏳",completed:"✓",failed:"✗",cancelled:"⊘"};return t.jsx("div",{className:`
          w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
          ${e.status?s[e.status]:A.primary}
        `,children:e.status?r[e.status]:"•"})},Ae=(e,s)=>!e.workspaceContext||e.workspaceContext===_||Ne.includes("view_all_events")?t.jsxs("div",{className:"relative flex gap-4 pb-6",children:[!s&&t.jsx("div",{className:"absolute left-4 top-8 w-0.5 h-full bg-gray-200"}),t.jsx("div",{className:"relative z-10",children:Ge(e)}),t.jsx("div",{className:"flex-1 min-w-0",children:t.jsxs("div",{className:`
              bg-white border border-gray-200 rounded-lg p-4 shadow-sm
              ${m?"cursor-pointer hover:shadow-md transition-shadow":""}
            `,onClick:()=>_e(e),children:[t.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h4",{className:"font-medium text-gray-900 truncate",children:e.title}),e.description&&t.jsx("p",{className:"text-sm text-gray-600 mt-1",children:e.description})]}),e.status&&t.jsx(Re,{variant:e.status==="completed"?"success":e.status==="failed"?"error":e.status==="cancelled"?"secondary":"warning",size:"sm",children:e.status})]}),t.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-500",children:[Ue&&t.jsx("span",{children:new Date(e.timestamp).toLocaleString()}),ke&&e.user&&t.jsxs("div",{className:"flex items-center gap-2",children:[e.user.avatar&&t.jsx(Je,{src:e.user.avatar,alt:e.user.name,size:"xs"}),t.jsx("span",{children:e.user.name})]}),t.jsx("span",{className:"capitalize",children:e.type})]}),e.metadata&&Object.keys(e.metadata).length>0&&t.jsx("div",{className:"mt-3 pt-3 border-t border-gray-100",children:t.jsx("div",{className:"grid grid-cols-2 gap-2 text-xs",children:Object.entries(e.metadata).map(([o,l])=>t.jsxs("div",{children:[t.jsxs("span",{className:"font-medium text-gray-600",children:[o.replace(/_/g," ").replace(/\b\w/g,Fe=>Fe.toUpperCase()),":"]}),t.jsx("span",{className:"ml-1 text-gray-900",children:typeof l=="object"?JSON.stringify(l):String(l)})]},o))})})]})})]},e.id):null,ze=(e,s)=>{const r=B.has(e)||p==="none";return t.jsxs("div",{className:"mb-6",children:[p!=="none"&&t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:e}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("span",{className:"text-sm text-gray-500",children:[s.length," event",s.length!==1?"s":""]}),t.jsx(h,{variant:"ghost",size:"sm",onClick:()=>$e(e),children:r?"▲":"▼"})]})]}),r&&t.jsx("div",{className:"space-y-0",children:s.map((o,l)=>Ae(o,l===s.length-1))})]},e)};return je?t.jsxs("div",{className:"flex items-center justify-center p-8",children:[t.jsx(He,{size:"lg"}),t.jsx("span",{className:"ml-2 text-gray-600",children:"Loading timeline..."})]}):u.length===0?t.jsx(We,{title:"No events found",description:n.length>0?"No events match your current filters.":"There are no events to display.",actions:n.length>0?t.jsx(h,{onClick:()=>g([]),children:"Clear filters"}):void 0}):t.jsxs("div",{className:`${Ee}`,style:Se,children:[D.length>0&&t.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[t.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Filters"}),t.jsx("div",{className:"flex flex-wrap gap-2",children:D.map(e=>t.jsx(h,{variant:n.some(s=>s.type===e.type&&s.value===e.value)?"primary":"outline",size:"sm",onClick:()=>{const s=n.some(r=>r.type===e.type&&r.value===e.value);g(s?n.filter(r=>!(r.type===e.type&&r.value===e.value)):[...n,e])},children:e.label},`${e.type}-${e.value}`))}),n.length>0&&t.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:t.jsx(h,{variant:"ghost",size:"sm",onClick:()=>g([]),children:"Clear all filters"})})]}),t.jsx("div",{className:`
          ${Te?"w-full":""}
          ${G?"overflow-y-auto":""}
        `,style:{maxHeight:G},children:Object.entries(Be).map(([e,s])=>ze(e,s))}),C&&t.jsxs("div",{className:"mt-4 flex items-center justify-center text-sm text-gray-500",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"}),"Live updates enabled"]})]})},bs={title:"Layouts/Data Display/Timeline",component:Oe,parameters:{layout:"padded",docs:{description:{component:"A timeline component for displaying chronological events with filtering and grouping capabilities."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for theming and permissions"},groupBy:{control:"select",options:["date","type","user","none"],description:"How to group timeline events"},realTimeUpdates:{control:"boolean",description:"Enable real-time updates indicator"},showTime:{control:"boolean",description:"Show timestamps for events"},showUser:{control:"boolean",description:"Show user information for events"},responsive:{control:"boolean",description:"Enable responsive behavior"}}},a=[{id:"1",type:"create",title:"Project Created",description:'New project "Website Redesign" was created',timestamp:new Date(Date.now()-1e3*60*30),user:{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"},status:"completed",metadata:{project_id:"proj_123",budget:"$50,000"}},{id:"2",type:"update",title:"Task Updated",description:"Design mockups task was updated with new requirements",timestamp:new Date(Date.now()-1e3*60*60*2),user:{id:"user2",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"},status:"pending",workspaceContext:"consultant"},{id:"3",type:"comment",title:"Comment Added",description:"Added feedback on the initial wireframes",timestamp:new Date(Date.now()-1e3*60*60*4),user:{id:"user3",name:"Mike Johnson",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"},status:"completed",workspaceContext:"client"},{id:"4",type:"delete",title:"File Deleted",description:"Removed outdated design file",timestamp:new Date(Date.now()-1e3*60*60*24),user:{id:"user1",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"},status:"failed",icon:"🗑️",color:"#ef4444"},{id:"5",type:"milestone",title:"Milestone Reached",description:"Phase 1 of the project has been completed",timestamp:new Date(Date.now()-1e3*60*60*24*2),user:{id:"user2",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"},status:"completed",icon:"🎯",color:"#10b981"}],be=[{key:"user1",label:"John Doe",value:"user1",type:"user"},{key:"user2",label:"Jane Smith",value:"user2",type:"user"},{key:"create",label:"Created",value:"create",type:"type"},{key:"update",label:"Updated",value:"update",type:"type"},{key:"completed",label:"Completed",value:"completed",type:"status"},{key:"pending",label:"Pending",value:"pending",type:"status"}],x={args:{events:a,loading:!1,context:"neutral",permissions:[],groupBy:"date",showTime:!0,showUser:!0,responsive:!0}},f={args:{events:[],loading:!0,context:"neutral"}},w={args:{events:[],loading:!1,context:"neutral"}},y={args:{events:a,loading:!1,context:"consultant",filtering:be,groupBy:"date",showTime:!0,showUser:!0}},v={args:{events:a,loading:!1,context:"neutral",groupBy:"type",showTime:!0,showUser:!0}},b={args:{events:a,loading:!1,context:"neutral",groupBy:"user",showTime:!0,showUser:!0}},j={args:{events:a,loading:!1,context:"neutral",groupBy:"none",showTime:!0,showUser:!0}},N={args:{events:a,loading:!1,context:"neutral",realTimeUpdates:!0,groupBy:"date",showTime:!0,showUser:!0}},T={args:{events:a,loading:!1,context:"consultant",permissions:["view_all_events"],groupBy:"date",showTime:!0,showUser:!0}},U={args:{events:a,loading:!1,context:"client",permissions:[],groupBy:"date",showTime:!0,showUser:!0}},k={args:{events:a,loading:!1,context:"neutral",groupBy:"date",showTime:!1,showUser:!1,maxHeight:"400px"}},E={args:{events:[...a,...a,...a],loading:!1,context:"neutral",groupBy:"date",maxHeight:"500px",showTime:!0,showUser:!0}},S={args:{events:a,loading:!1,context:"neutral",groupBy:"date",filtering:be,showTime:!0,showUser:!0,onEventClick:i=>{console.log("Event clicked:",i),alert(`Clicked on: ${i.title}`)},onFilterChange:i=>{console.log("Filters changed:",i)}}};var z,F,J;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    permissions: [],
    groupBy: 'date',
    showTime: true,
    showUser: true,
    responsive: true
  }
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var R,W,H;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    events: [],
    loading: true,
    context: 'neutral'
  }
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var L,M,O;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    events: [],
    loading: false,
    context: 'neutral'
  }
}`,...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var I,P,V;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'consultant',
    filtering: sampleFilters,
    groupBy: 'date',
    showTime: true,
    showUser: true
  }
}`,...(V=(P=y.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,Q,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'type',
    showTime: true,
    showUser: true
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,K;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'user',
    showTime: true,
    showUser: true
  }
}`,...(K=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var ee,te,se;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'none',
    showTime: true,
    showUser: true
  }
}`,...(se=(te=j.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ae,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    realTimeUpdates: true,
    groupBy: 'date',
    showTime: true,
    showUser: true
  }
}`,...(oe=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,ie,le;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'consultant',
    permissions: ['view_all_events'],
    groupBy: 'date',
    showTime: true,
    showUser: true
  }
}`,...(le=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,me;U.parameters={...U.parameters,docs:{...(ce=U.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'client',
    permissions: [],
    groupBy: 'date',
    showTime: true,
    showUser: true
  }
}`,...(me=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ue,ge;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    showTime: false,
    showUser: false,
    maxHeight: '400px'
  }
}`,...(ge=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,xe,fe;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    events: [...sampleEvents, ...sampleEvents, ...sampleEvents],
    // Triple the events
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    maxHeight: '500px',
    showTime: true,
    showUser: true
  }
}`,...(fe=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var we,ye,ve;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    loading: false,
    context: 'neutral',
    groupBy: 'date',
    filtering: sampleFilters,
    showTime: true,
    showUser: true,
    onEventClick: event => {
      console.log('Event clicked:', event);
      alert(\`Clicked on: \${event.title}\`);
    },
    onFilterChange: filters => {
      console.log('Filters changed:', filters);
    }
  }
}`,...(ve=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const js=["Default","Loading","Empty","WithFilters","GroupedByType","GroupedByUser","NoGrouping","RealTimeUpdates","ConsultantContext","ClientContext","Compact","WithMaxHeight","Interactive"];export{U as ClientContext,k as Compact,T as ConsultantContext,x as Default,w as Empty,v as GroupedByType,b as GroupedByUser,S as Interactive,f as Loading,j as NoGrouping,N as RealTimeUpdates,y as WithFilters,E as WithMaxHeight,js as __namedExportsOrder,bs as default};
