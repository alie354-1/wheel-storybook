import{j as t}from"./jsx-runtime-BdivIsZm.js";import"./addressinput-DR7TMhaL.js";import"./alert-CmQfHnIB.js";import{A as et}from"./Avatar-DpmMIMRY.js";import{B as tt}from"./badge-Bfd9GCop.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as U}from"./button-BioF9M8P.js";import"./card-_h8jTILF.js";import"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import{I as z}from"./icon-DC-Rf1Vv.js";import"./image-Cvhw9Q6R.js";import"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Bn8w_kAn.js";import"./phoneinput-FjD8a10x.js";import"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CM3d5xfp.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import{r as g}from"./vendor-CIaSNbmr.js";import"./supabase-_6SMTDjj.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./users-C9yZEvey.js";import"./chevron-down-DDkHMo_x.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const rt={system:"System",chat:"Chat",comment:"Comments",task:"Tasks",billing:"Billing",general:"General"},at={info:{icon:"Info",color:"blue"},success:{icon:"CheckCircle",color:"green"},warning:{icon:"AlertTriangle",color:"yellow"},error:{icon:"AlertCircle",color:"red"},mention:{icon:"AtSign",color:"purple"},update:{icon:"RefreshCw",color:"blue"}},st=e=>{const i=new Date().getTime()-e.getTime(),l=Math.floor(i/6e4),o=Math.floor(i/36e5),m=Math.floor(i/864e5);return l<1?"Just now":l<60?`${l}m ago`:o<24?`${o}h ago`:m<7?`${m}d ago`:e.toLocaleDateString()},ot=e=>{const a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=new Date(i.getTime()-864e5),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return o.getTime()===i.getTime()?"Today":o.getTime()===l.getTime()?"Yesterday":e.toLocaleDateString()},it=({children:e,context:a})=>t.jsx("div",{className:`
    notification-center
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-700
    rounded-lg shadow-lg
    w-96 max-h-96 overflow-hidden
    ${a==="consultant"?"border-blue-200 dark:border-blue-800":""}
    ${a==="client"?"border-green-200 dark:border-green-800":""}
    ${a==="admin"?"border-purple-200 dark:border-purple-800":""}
    ${a==="expert"?"border-orange-200 dark:border-orange-800":""}
    ${a==="tool_creator"?"border-pink-200 dark:border-pink-800":""}
    ${a==="founder"?"border-yellow-200 dark:border-yellow-800":""}
  `,children:e}),nt=({children:e})=>t.jsx("div",{className:"notification-header p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between",children:e}),ct=({children:e})=>t.jsx("div",{className:"header-actions flex items-center gap-2",children:e}),lt=({children:e})=>t.jsx("div",{className:"notification-filters p-2 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-1",children:e}),P=({children:e,active:a,onClick:i})=>t.jsx("button",{onClick:i,className:`
      filter-button px-3 py-1 rounded-full text-sm font-medium transition-colors
      ${a?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"}
    `,children:e}),mt=({children:e})=>t.jsx("div",{className:"notification-list max-h-80 overflow-y-auto",children:e}),dt=({children:e})=>t.jsx("div",{className:"notification-group",children:e}),pt=({children:e})=>t.jsx("div",{className:"date-header px-4 py-2 bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 sticky top-0",children:e}),gt=({notification:e,onClick:a,onMarkAsRead:i,context:l})=>{const o=at[e.type];return t.jsx("div",{className:`
        notification-item p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer
        hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
        ${e.read?"":"bg-blue-50 dark:bg-blue-950"}
      `,onClick:a,children:t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("div",{className:`
          notification-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${o.color==="blue"?"bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400":""}
          ${o.color==="green"?"bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400":""}
          ${o.color==="yellow"?"bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400":""}
          ${o.color==="red"?"bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400":""}
          ${o.color==="purple"?"bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400":""}
        `,children:t.jsx(z,{name:o.icon,size:"sm"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate",children:e.title}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:e.message})]}),t.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[t.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:st(e.timestamp)}),!e.read&&t.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]})]}),e.sender&&t.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[t.jsx(et,{src:e.sender.avatar,alt:e.sender.name,size:"xs",fallback:e.sender.name.charAt(0)}),t.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:e.sender.name})]}),e.actions&&e.actions.length>0&&t.jsx("div",{className:"flex gap-2 mt-3",children:e.actions.map(m=>t.jsx(U,{variant:m.type==="primary"?"primary":"secondary",size:"sm",onClick:u=>{u.stopPropagation()},children:m.label},m.id))})]})]})})},ut=({message:e,context:a})=>t.jsxs("div",{className:"empty-state p-8 text-center",children:[t.jsx(z,{name:"Bell",size:"lg",className:"mx-auto mb-4 text-gray-400"}),t.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:e})]}),ft=({notifications:e,currentUser:a,context:i="neutral",onNotificationClick:l,onMarkAsRead:o,onMarkAllAsRead:m,onClearAll:u,showFilters:Le=!0,showSettings:He=!0,permissions:Ve=[]})=>{const[p,E]=g.useState("all"),[ht,Je]=g.useState(!1),We=r=>Ve.includes(r),B=g.useMemo(()=>{let r=e;return p==="unread"?r=r.filter(c=>!c.read):p!=="all"&&(r=r.filter(c=>c.category===p)),r.sort((c,n)=>n.timestamp.getTime()-c.timestamp.getTime())},[e,p]),R=g.useMemo(()=>B.reduce((r,c)=>{const n=ot(c.timestamp);return r[n]||(r[n]=[]),r[n].push(c),r},{}),[B]),Ke=g.useCallback(r=>{!r.read&&o&&o(r.id),l&&l(r)},[o,l]),qe=g.useCallback(r=>{o&&o(r)},[o]),Qe=g.useCallback(()=>{m&&m()},[m]),Xe=g.useCallback(()=>{u&&u()},[u]),f=e.filter(r=>!r.read).length;return t.jsxs(it,{context:i,children:[t.jsxs(nt,{children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Notifications"}),f>0&&t.jsx(tt,{variant:"primary",size:"sm",children:f})]}),t.jsxs(ct,{children:[f>0&&t.jsx(U,{variant:"ghost",size:"sm",onClick:Qe,children:"Mark all as read"}),e.length>0&&We("notification:clear")&&t.jsx(U,{variant:"ghost",size:"sm",onClick:Xe,children:"Clear all"}),He&&t.jsx(U,{variant:"ghost",size:"sm",onClick:()=>Je(!0),children:t.jsx(z,{name:"Settings",size:"sm"})})]})]}),Le&&t.jsxs(lt,{children:[t.jsx(P,{active:p==="all",onClick:()=>E("all"),children:"All"}),t.jsxs(P,{active:p==="unread",onClick:()=>E("unread"),children:["Unread ",f>0&&`(${f})`]}),Object.entries(rt).map(([r,c])=>{const n=e.filter(Ze=>Ze.category===r).length;return n>0?t.jsxs(P,{active:p===r,onClick:()=>E(r),children:[c," (",n,")"]},r):null})]}),t.jsx(mt,{children:Object.keys(R).length===0?t.jsx(ut,{message:p==="unread"?"No unread notifications":"No notifications",context:i}):Object.entries(R).map(([r,c])=>t.jsxs(dt,{children:[t.jsx(pt,{children:r}),c.map(n=>t.jsx(gt,{notification:n,onClick:()=>Ke(n),onMarkAsRead:()=>qe(n.id),context:i},n.id))]},r))})]})},yt={id:"1",name:"John Doe",email:"john@example.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",role:"consultant"},O={id:"2",name:"Jane Smith",email:"jane@example.com",avatar:"https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=32&h=32&fit=crop&crop=face",role:"client"},d=[{id:"1",type:"info",category:"system",title:"System Update",message:"The system will be updated tonight at 2 AM EST.",timestamp:new Date(Date.now()-1e3*60*30),read:!1,workspace:"main",priority:"medium",metadata:{version:"2.1.0"}},{id:"2",type:"mention",category:"chat",title:"You were mentioned",message:"Jane mentioned you in the project discussion.",timestamp:new Date(Date.now()-1e3*60*60*2),read:!1,workspace:"main",sender:O,priority:"high",actions:[{id:"view",label:"View Message",type:"primary",action:"navigate",url:"/chat/123"},{id:"reply",label:"Reply",type:"secondary",action:"reply"}]},{id:"3",type:"success",category:"task",title:"Task Completed",message:'Your task "Review client proposal" has been completed.',timestamp:new Date(Date.now()-1e3*60*60*4),read:!0,workspace:"main",priority:"low"},{id:"4",type:"warning",category:"billing",title:"Payment Due",message:"Your invoice #INV-001 is due in 3 days.",timestamp:new Date(Date.now()-1e3*60*60*24),read:!1,workspace:"main",priority:"urgent",actions:[{id:"pay",label:"Pay Now",type:"primary",action:"payment",url:"/billing/pay/INV-001"}]},{id:"5",type:"error",category:"system",title:"Sync Failed",message:"Failed to sync data with external service. Please try again.",timestamp:new Date(Date.now()-1e3*60*60*24*2),read:!0,workspace:"main",priority:"high",actions:[{id:"retry",label:"Retry Sync",type:"primary",action:"retry"}]},{id:"6",type:"update",category:"comment",title:"New Comment",message:"Someone commented on your document.",timestamp:new Date(Date.now()-1e3*60*60*24*3),read:!0,workspace:"main",sender:O,priority:"medium"}],Jr={title:"Layouts/Communication/NotificationCenter",component:ft,parameters:{layout:"centered",docs:{description:{component:"A comprehensive notification center component that displays notifications with filtering, grouping, and action capabilities."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool_creator","founder","neutral"],description:"The context determines the visual styling and behavior"},showFilters:{control:"boolean",description:"Whether to show notification filters"},showSettings:{control:"boolean",description:"Whether to show the settings button"},permissions:{control:"object",description:"Array of permission strings for the current user"}}},s={args:{notifications:d,currentUser:yt,context:"neutral",showFilters:!0,showSettings:!0,permissions:["notification:clear"]}},y={args:{...s.args,context:"consultant"}},h={args:{...s.args,context:"client"}},x={args:{...s.args,context:"admin"}},b={args:{...s.args,notifications:[]}},k={args:{...s.args,notifications:d.filter(e=>!e.read)}},w={args:{...s.args,showFilters:!1}},N={args:{...s.args,showSettings:!1}},j={args:{...s.args,permissions:[]}},D={args:{...s.args,notifications:d.filter(e=>e.category==="system")}},S={args:{...s.args,notifications:d.filter(e=>e.category==="chat")}},v={args:{...s.args,notifications:d.filter(e=>e.category==="billing")}},C={args:{...s.args,notifications:d.filter(e=>e.priority==="urgent")}},T={args:{...s.args,notifications:d.filter(e=>e.priority==="high")}},$={args:{...s.args,notifications:d.filter(e=>e.actions&&e.actions.length>0),onNotificationClick:e=>{console.log("Notification clicked:",e)},onMarkAsRead:e=>{console.log("Mark as read:",e)},onMarkAllAsRead:()=>{console.log("Mark all as read")},onClearAll:()=>{console.log("Clear all notifications")}}},A={args:{...s.args,notifications:[...d,...Array.from({length:20},(e,a)=>({id:`generated-${a}`,type:["info","success","warning","error","mention","update"][a%6],category:["system","chat","comment","task","billing","general"][a%6],title:`Generated Notification ${a+1}`,message:`This is a generated notification message ${a+1} for testing purposes.`,timestamp:new Date(Date.now()-1e3*60*60*(a+1)),read:a%3===0,workspace:"main",priority:["low","medium","high","urgent"][a%4],...a%4===0&&{sender:O}}))]}},M={args:{...s.args},parameters:{viewport:{defaultViewport:"mobile1"}}},F={args:{...s.args},parameters:{backgrounds:{default:"dark"}}},I={args:{...s.args},play:async({canvasElement:e})=>{console.log("Simulating real-time notification updates...")}};var _,Y,G;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    notifications: mockNotifications,
    currentUser: mockUser,
    context: 'neutral',
    showFilters: true,
    showSettings: true,
    permissions: ['notification:clear']
  }
}`,...(G=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var L,H,V;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'consultant'
  }
}`,...(V=(H=y.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var J,W,K;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'client'
  }
}`,...(K=(W=h.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,Q,X;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'admin'
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: []
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => !n.read)
  }
}`,...(se=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,ne;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFilters: false
  }
}`,...(ne=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ce,le,me;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSettings: false
  }
}`,...(me=(le=N.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,pe,ge;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    permissions: []
  }
}`,...(ge=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,fe,ye;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'system')
  }
}`,...(ye=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,xe,be;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'chat')
  }
}`,...(be=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ke,we,Ne;v.parameters={...v.parameters,docs:{...(ke=v.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.category === 'billing')
  }
}`,...(Ne=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var je,De,Se;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.priority === 'urgent')
  }
}`,...(Se=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var ve,Ce,Te;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.priority === 'high')
  }
}`,...(Te=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var $e,Ae,Me;$.parameters={...$.parameters,docs:{...($e=$.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: mockNotifications.filter(n => n.actions && n.actions.length > 0),
    onNotificationClick: notification => {
      console.log('Notification clicked:', notification);
    },
    onMarkAsRead: id => {
      console.log('Mark as read:', id);
    },
    onMarkAllAsRead: () => {
      console.log('Mark all as read');
    },
    onClearAll: () => {
      console.log('Clear all notifications');
    }
  }
}`,...(Me=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var Fe,Ie,Ue;A.parameters={...A.parameters,docs:{...(Fe=A.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notifications: [...mockNotifications, ...Array.from({
      length: 20
    }, (_, i) => ({
      id: \`generated-\${i}\`,
      type: ['info', 'success', 'warning', 'error', 'mention', 'update'][i % 6] as any,
      category: ['system', 'chat', 'comment', 'task', 'billing', 'general'][i % 6] as any,
      title: \`Generated Notification \${i + 1}\`,
      message: \`This is a generated notification message \${i + 1} for testing purposes.\`,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * (i + 1)),
      read: i % 3 === 0,
      workspace: 'main',
      priority: ['low', 'medium', 'high', 'urgent'][i % 4] as any,
      ...(i % 4 === 0 && {
        sender: mockSender
      })
    }))]
  }
}`,...(Ue=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source}}};var Ee,Pe,Oe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(Oe=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var ze,Be,Re;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Re=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var _e,Ye,Ge;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    // This would simulate real-time updates in a real application
    console.log('Simulating real-time notification updates...');
  }
}`,...(Ge=(Ye=I.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};const Wr=["Default","ConsultantContext","ClientContext","AdminContext","EmptyState","UnreadOnly","NoFilters","NoSettings","LimitedPermissions","SystemNotifications","ChatNotifications","BillingNotifications","UrgentNotifications","HighPriorityNotifications","WithActions","ManyNotifications","Mobile","DarkMode","RealTimeUpdates"];export{x as AdminContext,v as BillingNotifications,S as ChatNotifications,h as ClientContext,y as ConsultantContext,F as DarkMode,s as Default,b as EmptyState,T as HighPriorityNotifications,j as LimitedPermissions,A as ManyNotifications,M as Mobile,w as NoFilters,N as NoSettings,I as RealTimeUpdates,D as SystemNotifications,k as UnreadOnly,C as UrgentNotifications,$ as WithActions,Wr as __namedExportsOrder,Jr as default};
