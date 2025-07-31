import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import"./addressinput-CNH7vJB0.js";import"./alert-Cwr_B149.js";import{A as tr}from"./Avatar-9FBF7p-C.js";import{B as G}from"./badge-CYGCTGQ7.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import{B}from"./button-ZqfPLS5u.js";import"./card-M3SK2Azw.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-CfcKtpIj.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-BpDPG3bv.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import{I as h}from"./icon-j196pyXy.js";import"./image-CvqG4bp1.js";import"./input-BtB_vA0w.js";import"./label-Bc71zScC.js";import"./loadingoverlay-DHD7ZDEg.js";import"./Logo-gj5UbaLS.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-CUQxdS5l.js";import"./phoneinput-CoqQOG2e.js";import"./progress-DFy8PWGV.js";import"./progressindicator-4hkvR5i4.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-DGqRKp5y.js";import"./select-nq-v_0mm.js";import"./separator-BF9ukUOu.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-_l9xUKUP.js";import"./spinner-OCtiqGzF.js";import"./StatusDot-BcOjilU9.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-CMtdNDcp.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-CCDZtbJ9.js";import"./timerangeinput-CcPmfdqH.js";import"./toast-gujmqJee.js";import"./verticalslider-Czd28A1k.js";import"./workspaceicon-B8JYiyw8.js";import"./container-Dmz3l48d.js";import{F as g}from"./flex-B2tn7VQA.js";import"./grid-BkDwxDkj.js";import"./panel-BTHHcn-E.js";import{S as H}from"./stack-6K505iai.js";import{R as x,r as b}from"./index-B2-qRKKC.js";import"./supabase-_6SMTDjj.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";const J=({children:e,size:a="md",className:n="",...o})=>{const c={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl"};return r.jsx("p",{className:`${c[a]} ${n}`,...o,children:e})},mr=({children:e,level:a=1,className:n="",...o})=>{const c=`h${a}`,t={1:"text-3xl font-bold",2:"text-2xl font-bold",3:"text-xl font-semibold",4:"text-lg font-semibold",5:"text-base font-medium",6:"text-sm font-medium"};return r.jsx(c,{className:`${t[a]} ${n}`,...o,children:e})},pr=()=>({hasPermission:e=>!0}),ur=x.forwardRef(({context:e="neutral",children:a,className:n},o)=>{const c="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden",t={consultant:"border-consultant-primary/20",client:"border-client-primary/20",admin:"border-admin-primary/20",expert:"border-expert-primary/20","tool-creator":"border-tool-creator-primary/20",founder:"border-founder-primary/20",neutral:"border-gray-200/20"};return r.jsx("div",{ref:o,className:`${c} ${t[e]} ${n||""}`,children:a})}),gr=x.forwardRef(({participants:e,context:a="neutral",children:n},o)=>{const c=()=>{const t=e.length;return t===1?"grid-cols-1":t===2?"grid-cols-2":t<=4?"grid-cols-2 grid-rows-2":t<=6?"grid-cols-3 grid-rows-2":"grid-cols-4 grid-rows-3"};return r.jsx("div",{ref:o,className:`grid gap-2 p-4 h-full ${c()}`,children:n})}),br=x.forwardRef(({participant:e,context:a="neutral",isCurrentUser:n=!1,onAction:o},c)=>{const t=b.useRef(null),s={consultant:"border-consultant-primary/30",client:"border-client-primary/30",admin:"border-admin-primary/30",expert:"border-expert-primary/30","tool-creator":"border-tool-creator-primary/30",founder:"border-founder-primary/30",neutral:"border-gray-300/30"};return r.jsxs("div",{ref:c,className:`relative bg-gray-800 rounded-lg overflow-hidden border-2 ${s[a]} ${n?"ring-2 ring-blue-500":""}`,children:[e.videoEnabled?r.jsx("video",{ref:t,className:"w-full h-full object-cover",autoPlay:!0,muted:n,playsInline:!0}):r.jsx(g,{align:"center",justify:"center",className:"w-full h-full bg-gray-700",children:r.jsx(tr,{src:e.avatar,alt:e.name,fallback:e.name.charAt(0).toUpperCase(),size:"lg"})}),r.jsx("div",{className:"absolute bottom-2 left-2 right-2",children:r.jsxs(g,{align:"center",justify:"between",className:"bg-black/50 rounded px-2 py-1",children:[r.jsxs(g,{align:"center",gap:"sm",children:[r.jsxs(J,{size:"sm",className:"text-white font-medium",children:[e.name,n&&" (You)"]}),e.role==="host"&&r.jsx(G,{variant:"primary",size:"sm",children:"Host"})]}),r.jsxs(g,{align:"center",gap:"sm",children:[!e.audioEnabled&&r.jsx(h,{name:"MicOff",size:"sm",className:"text-red-400"}),e.screenSharing&&r.jsx(h,{name:"Monitor",size:"sm",className:"text-green-400"}),r.jsx("div",{className:`w-2 h-2 rounded-full ${e.status==="connected"?"bg-green-400":e.status==="connecting"?"bg-yellow-400":"bg-red-400"}`})]})]})}),e.screenSharing&&r.jsx("div",{className:"absolute top-2 left-2",children:r.jsxs(G,{variant:"success",size:"sm",children:[r.jsx(h,{name:"Monitor",size:"sm",className:"mr-1"}),"Sharing Screen"]})})]})}),fr=x.forwardRef(({session:e,currentUser:a,context:n="neutral",onAction:o},c)=>{const{hasPermission:t}=pr(),s=b.useMemo(()=>[{id:"mute",type:a.audioEnabled?"mute":"unmute",label:a.audioEnabled?"Mute":"Unmute",icon:a.audioEnabled?"Mic":"MicOff",enabled:!0,visible:!0},{id:"video",type:a.videoEnabled?"video-off":"video-on",label:a.videoEnabled?"Turn Off Video":"Turn On Video",icon:a.videoEnabled?"Video":"VideoOff",enabled:!0,visible:!0},{id:"screen-share",type:"screen-share",label:a.screenSharing?"Stop Sharing":"Share Screen",icon:"Monitor",enabled:e.settings.allowScreenShare,visible:e.settings.allowScreenShare},{id:"record",type:"record",label:e.status==="recording"?"Stop Recording":"Start Recording",icon:"Circle",enabled:e.settings.allowRecording&&t("video:record"),visible:e.settings.allowRecording&&t("video:record")},{id:"invite",type:"invite",label:"Invite Participants",icon:"UserPlus",enabled:t("video:invite"),visible:t("video:invite")},{id:"end-call",type:"end-call",label:"End Call",icon:"PhoneOff",enabled:a.role==="host"||t("video:end"),visible:!0}],[a,e,t]),p={consultant:"bg-consultant-primary/10 border-consultant-primary/20",client:"bg-client-primary/10 border-client-primary/20",admin:"bg-admin-primary/10 border-admin-primary/20",expert:"bg-expert-primary/10 border-expert-primary/20","tool-creator":"bg-tool-creator-primary/10 border-tool-creator-primary/20",founder:"bg-founder-primary/10 border-founder-primary/20",neutral:"bg-gray-800/50 border-gray-600/20"};return r.jsx("div",{ref:c,className:`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${p[n]} backdrop-blur-sm border rounded-lg p-2`,children:r.jsx(g,{align:"center",gap:"sm",children:s.filter(l=>l.visible).map(l=>r.jsx(B,{variant:l.type==="end-call"||l.type==="record"&&e.status==="recording"?"danger":a.screenSharing&&l.type==="screen-share"?"primary":!a.audioEnabled&&l.type==="unmute"?"danger":!a.videoEnabled&&l.type==="video-on"?"secondary":"ghost",size:"sm",disabled:!l.enabled,onClick:()=>o==null?void 0:o(l),className:`${l.type==="end-call"?"bg-red-600 hover:bg-red-700":""} text-white`,children:r.jsx(h,{name:l.icon,size:"sm"})},l.id))})})}),hr=x.forwardRef(({participants:e,currentUser:a,context:n="neutral",onParticipantAction:o},c)=>{const t={consultant:"bg-consultant-primary/5 border-consultant-primary/20",client:"bg-client-primary/5 border-client-primary/20",admin:"bg-admin-primary/5 border-admin-primary/20",expert:"bg-expert-primary/5 border-expert-primary/20","tool-creator":"bg-tool-creator-primary/5 border-tool-creator-primary/20",founder:"bg-founder-primary/5 border-founder-primary/20",neutral:"bg-gray-800/30 border-gray-600/20"};return r.jsxs("div",{ref:c,className:`absolute top-4 right-4 w-64 ${t[n]} backdrop-blur-sm border rounded-lg p-3`,children:[r.jsxs(mr,{level:4,className:"text-white mb-3",children:["Participants (",e.length,")"]}),r.jsx(H,{spacing:"sm",children:e.map(s=>r.jsxs(g,{align:"center",justify:"between",className:"p-2 rounded bg-black/20",children:[r.jsxs(g,{align:"center",gap:"sm",children:[r.jsx(tr,{src:s.avatar,alt:s.name,fallback:s.name.charAt(0).toUpperCase(),size:"sm"}),r.jsxs(H,{spacing:"sm",children:[r.jsxs(J,{size:"sm",className:"text-white font-medium",children:[s.name,s.id===a.id&&" (You)"]}),r.jsxs(g,{align:"center",gap:"sm",children:[s.role==="host"&&r.jsx(G,{variant:"primary",size:"sm",children:"Host"}),r.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${s.status==="connected"?"bg-green-400":s.status==="connecting"?"bg-yellow-400":"bg-red-400"}`})]})]})]}),r.jsxs(g,{align:"center",gap:"sm",children:[r.jsx(h,{name:s.audioEnabled?"Mic":"MicOff",size:"sm",className:s.audioEnabled?"text-green-400":"text-red-400"}),r.jsx(h,{name:s.videoEnabled?"Video":"VideoOff",size:"sm",className:s.videoEnabled?"text-green-400":"text-red-400"}),s.id!==a.id&&r.jsx(B,{variant:"ghost",size:"xs",onClick:()=>o==null?void 0:o(s.id,"remove"),className:"text-red-400 hover:text-red-300",children:r.jsx(h,{name:"X",size:"sm"})})]})]},s.id))})]})}),xr=x.forwardRef(({session:e,context:a="neutral"},n)=>{const[o,c]=b.useState(0);b.useEffect(()=>{if(e.status==="active"){const p=setInterval(()=>{const l=Math.floor((Date.now()-e.startTime.getTime())/1e3);c(l)},1e3);return()=>clearInterval(p)}},[e.status,e.startTime]);const t=p=>{const l=Math.floor(p/3600),A=Math.floor(p%3600/60),y=p%60;return l>0?`${l}:${A.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`:`${A}:${y.toString().padStart(2,"0")}`},s={consultant:"bg-consultant-primary/10 border-consultant-primary/20",client:"bg-client-primary/10 border-client-primary/20",admin:"bg-admin-primary/10 border-admin-primary/20",expert:"bg-expert-primary/10 border-expert-primary/20","tool-creator":"bg-tool-creator-primary/10 border-tool-creator-primary/20",founder:"bg-founder-primary/10 border-founder-primary/20",neutral:"bg-gray-800/50 border-gray-600/20"};return r.jsx("div",{ref:n,className:`absolute top-4 left-4 ${s[a]} backdrop-blur-sm border rounded-lg p-3`,children:r.jsxs(H,{spacing:"sm",children:[r.jsx(J,{size:"sm",className:"text-white font-medium",children:e.title}),r.jsxs(g,{align:"center",gap:"sm",children:[r.jsx("div",{className:`w-2 h-2 rounded-full ${e.status==="active"?"bg-green-400":e.status==="waiting"?"bg-yellow-400":e.status==="recording"?"bg-red-400":"bg-gray-400"}`}),r.jsx(J,{size:"xs",className:"text-gray-300",children:e.status==="active"?t(o):e.status==="waiting"?"Waiting to start":e.status==="recording"?`Recording • ${t(o)}`:"Call ended"})]})]})})}),sr=x.forwardRef(({session:e,currentUser:a,context:n="neutral",onParticipantAction:o,onCallAction:c,onScreenShare:t,onRecordingToggle:s,onParticipantInvite:p,onCallEnd:l,onSettingsChange:A,showControls:y=!0,showParticipants:or=!0,showChat:yr=!1,permissions:vr=[],className:ir},lr)=>{const[cr,K]=b.useState(!1),q=b.useRef(null),dr=b.useCallback(()=>{var m;document.fullscreenElement?(document.exitFullscreen(),K(!1)):((m=q.current)==null||m.requestFullscreen(),K(!0))},[]),w=b.useCallback(m=>{switch(m.type){case"mute":case"unmute":break;case"video-on":case"video-off":break;case"screen-share":t==null||t(!a.screenSharing);break;case"record":s==null||s(e.status!=="recording");break;case"invite":p==null||p();break;case"end-call":l==null||l();break}c==null||c(m)},[a.screenSharing,e.status,t,s,p,l,c]);return b.useEffect(()=>{const m=f=>{if(f.ctrlKey||f.metaKey)switch(f.key){case"m":f.preventDefault(),w({id:"mute",type:a.audioEnabled?"mute":"unmute",label:"",icon:"",enabled:!0,visible:!0});break;case"e":f.preventDefault(),w({id:"video",type:a.videoEnabled?"video-off":"video-on",label:"",icon:"",enabled:!0,visible:!0});break;case"s":f.preventDefault(),w({id:"screen-share",type:"screen-share",label:"",icon:"",enabled:!0,visible:!0});break}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a.audioEnabled,a.videoEnabled,w]),r.jsx(ur,{ref:lr,context:n,className:ir,children:r.jsxs("div",{ref:q,className:"relative w-full h-full",children:[r.jsx(xr,{session:e,context:n}),or&&r.jsx(hr,{participants:e.participants,currentUser:a,context:n,onParticipantAction:o}),r.jsx(gr,{participants:e.participants,context:n,children:e.participants.map(m=>r.jsx(br,{participant:m,context:n,isCurrentUser:m.id===a.id,onAction:f=>o==null?void 0:o(m.id,f)},m.id))}),y&&r.jsx(fr,{session:e,currentUser:a,context:n,onAction:w}),r.jsx(B,{variant:"ghost",size:"sm",onClick:dr,className:"absolute top-4 right-80 text-white hover:bg-white/10",children:r.jsx(h,{name:cr?"Minimize":"Maximize",size:"sm"})})]})})});sr.displayName="VideoCallInterface";const Ua={title:"Layouts/Communication/VideoCallInterface",component:sr,parameters:{layout:"fullscreen",docs:{description:{component:"Advanced video call interface organism with participant management, call controls, screen sharing, recording, and workspace context integration."}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for styling and behavior"},showControls:{control:"boolean",description:"Show call control buttons"},showParticipants:{control:"boolean",description:"Show participants list"},showChat:{control:"boolean",description:"Show chat interface"}}},d=[{id:"1",name:"Sarah Johnson",avatar:"https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150",role:"host",status:"connected",videoEnabled:!0,audioEnabled:!0,screenSharing:!1,joinedAt:new Date(Date.now()-3e5),permissions:["video:moderate","video:record","video:invite"]},{id:"2",name:"Michael Chen",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",role:"participant",status:"connected",videoEnabled:!0,audioEnabled:!1,screenSharing:!1,joinedAt:new Date(Date.now()-24e4),permissions:[]},{id:"3",name:"Emily Rodriguez",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",role:"participant",status:"connected",videoEnabled:!1,audioEnabled:!0,screenSharing:!1,joinedAt:new Date(Date.now()-18e4),permissions:[]},{id:"4",name:"David Kim",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",role:"observer",status:"connecting",videoEnabled:!1,audioEnabled:!1,screenSharing:!1,joinedAt:new Date(Date.now()-6e4),permissions:[]}],wr={allowScreenShare:!0,allowRecording:!0,allowChat:!0,requirePermissionToJoin:!1,muteParticipantsOnJoin:!1,enableWaitingRoom:!1,maxDuration:3600,quality:"high"},u={id:"call-123",title:"Project Strategy Meeting",type:"meeting",status:"active",startTime:new Date(Date.now()-9e5),participants:d,maxParticipants:10,recordingEnabled:!1,workspace:"acme-corp",settings:wr},nr=d[0],i={args:{session:u,currentUser:nr,context:"neutral",showControls:!0,showParticipants:!0,showChat:!1}},v={args:{...i.args,context:"consultant"}},S={args:{...i.args,context:"client"}},j={args:{...i.args,context:"admin"}},C={args:{...i.args,context:"expert"}},D={args:{...i.args,context:"tool-creator"}},E={args:{...i.args,context:"founder"}},k={args:{...i.args,session:{...u,participants:d.map((e,a)=>a===1?{...e,screenSharing:!0}:e)}}},N={args:{...i.args,session:{...u,status:"recording",recordingEnabled:!0}}},P={args:{...i.args,session:{...u,status:"waiting",participants:[nr]}}},M={args:{...i.args,session:{...u,participants:[...d,{id:"5",name:"Alex Thompson",role:"participant",status:"connected",videoEnabled:!0,audioEnabled:!0,screenSharing:!1,joinedAt:new Date(Date.now()-12e4),permissions:[]},{id:"6",name:"Lisa Wang",role:"participant",status:"connected",videoEnabled:!1,audioEnabled:!0,screenSharing:!1,joinedAt:new Date(Date.now()-9e4),permissions:[]},{id:"7",name:"James Wilson",role:"participant",status:"connected",videoEnabled:!0,audioEnabled:!1,screenSharing:!1,joinedAt:new Date(Date.now()-45e3),permissions:[]},{id:"8",name:"Maria Garcia",role:"participant",status:"connected",videoEnabled:!0,audioEnabled:!0,screenSharing:!1,joinedAt:new Date(Date.now()-3e4),permissions:[]}]}}},z={args:{...i.args,currentUser:d[1],session:{...u,participants:d}}},$={args:{...i.args,currentUser:d[3],session:{...u,participants:d}}},R={args:{...i.args,showControls:!1}},V={args:{...i.args,showParticipants:!1}},T={args:{...i.args,showControls:!1,showParticipants:!1,showChat:!1}},W={args:{...i.args,context:"consultant",session:{...u,title:"Client Consultation",type:"consultation",participants:[{...d[0],name:"Dr. Sarah Johnson",role:"host"},{...d[1],name:"John Smith",role:"participant"}]}}},I={args:{...i.args,context:"admin",session:{...u,title:"Technical Interview",type:"interview",participants:[{...d[0],name:"HR Manager",role:"host"},{...d[1],name:"Candidate",role:"participant"},{...d[2],name:"Tech Lead",role:"participant"}]}}},L={args:{...i.args,context:"expert",session:{...u,title:"Product Demo",type:"presentation",participants:[{...d[0],name:"Presenter",role:"host",screenSharing:!0},...d.slice(1).map(e=>({...e,role:"observer",videoEnabled:!1,audioEnabled:!1}))]}}},O={args:{...i.args,session:{...u,status:"ended",endTime:new Date,duration:1800}}},F={args:{...i.args},play:async({canvasElement:e})=>{console.log("Video call interface loaded")}};var Y,_,X;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    session: mockSession,
    currentUser,
    context: 'neutral',
    showControls: true,
    showParticipants: true,
    showChat: false
  }
}`,...(X=(_=i.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var Q,Z,U;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'consultant'
  }
}`,...(U=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var ee,re,ae;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'client'
  }
}`,...(ae=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'admin'
  }
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ie,le;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'expert'
  }
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,me;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'tool-creator'
  }
}`,...(me=(de=D.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ge;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'founder'
  }
}`,...(ge=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,fe,he;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      participants: mockParticipants.map((p, i) => i === 1 ? {
        ...p,
        screenSharing: true
      } : p)
    }
  }
}`,...(he=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,we,ye;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'recording',
      recordingEnabled: true
    }
  }
}`,...(ye=(we=N.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ve,Se,je;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'waiting',
      participants: [currentUser]
    }
  }
}`,...(je=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ce,De,Ee;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      participants: [...mockParticipants, {
        id: '5',
        name: 'Alex Thompson',
        role: 'participant',
        status: 'connected',
        videoEnabled: true,
        audioEnabled: true,
        screenSharing: false,
        joinedAt: new Date(Date.now() - 120000),
        permissions: []
      }, {
        id: '6',
        name: 'Lisa Wang',
        role: 'participant',
        status: 'connected',
        videoEnabled: false,
        audioEnabled: true,
        screenSharing: false,
        joinedAt: new Date(Date.now() - 90000),
        permissions: []
      }, {
        id: '7',
        name: 'James Wilson',
        role: 'participant',
        status: 'connected',
        videoEnabled: true,
        audioEnabled: false,
        screenSharing: false,
        joinedAt: new Date(Date.now() - 45000),
        permissions: []
      }, {
        id: '8',
        name: 'Maria Garcia',
        role: 'participant',
        status: 'connected',
        videoEnabled: true,
        audioEnabled: true,
        screenSharing: false,
        joinedAt: new Date(Date.now() - 30000),
        permissions: []
      }]
    }
  }
}`,...(Ee=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var ke,Ne,Pe;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    currentUser: mockParticipants[1],
    session: {
      ...mockSession,
      participants: mockParticipants
    }
  }
}`,...(Pe=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Me,ze,$e;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    currentUser: mockParticipants[3],
    session: {
      ...mockSession,
      participants: mockParticipants
    }
  }
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Re,Ve,Te;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showControls: false
  }
}`,...(Te=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var We,Ie,Le;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showParticipants: false
  }
}`,...(Le=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Oe,Fe,Je;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showControls: false,
    showParticipants: false,
    showChat: false
  }
}`,...(Je=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Je.source}}};var Ae,Ge,He;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'consultant',
    session: {
      ...mockSession,
      title: 'Client Consultation',
      type: 'consultation',
      participants: [{
        ...mockParticipants[0],
        name: 'Dr. Sarah Johnson',
        role: 'host'
      }, {
        ...mockParticipants[1],
        name: 'John Smith',
        role: 'participant'
      }]
    }
  }
}`,...(He=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Be,Ke,qe;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'admin',
    session: {
      ...mockSession,
      title: 'Technical Interview',
      type: 'interview',
      participants: [{
        ...mockParticipants[0],
        name: 'HR Manager',
        role: 'host'
      }, {
        ...mockParticipants[1],
        name: 'Candidate',
        role: 'participant'
      }, {
        ...mockParticipants[2],
        name: 'Tech Lead',
        role: 'participant'
      }]
    }
  }
}`,...(qe=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Ye,_e,Xe;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    context: 'expert',
    session: {
      ...mockSession,
      title: 'Product Demo',
      type: 'presentation',
      participants: [{
        ...mockParticipants[0],
        name: 'Presenter',
        role: 'host',
        screenSharing: true
      }, ...mockParticipants.slice(1).map(p => ({
        ...p,
        role: 'observer' as const,
        videoEnabled: false,
        audioEnabled: false
      }))]
    }
  }
}`,...(Xe=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source}}};var Qe,Ze,Ue;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    session: {
      ...mockSession,
      status: 'ended',
      endTime: new Date(),
      duration: 1800
    }
  }
}`,...(Ue=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:Ue.source}}};var er,rr,ar;F.parameters={...F.parameters,docs:{...(er=F.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    // This story can be used for interaction testing
    console.log('Video call interface loaded');
  }
}`,...(ar=(rr=F.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};const et=["Default","ConsultantContext","ClientContext","AdminContext","ExpertContext","ToolCreatorContext","FounderContext","WithScreenSharing","WithRecording","WaitingToStart","LargeGroup","ParticipantView","ObserverView","NoControls","NoParticipantsList","MinimalInterface","ConsultationCall","InterviewCall","PresentationMode","CallEnded","WithInteractions"];export{j as AdminContext,O as CallEnded,S as ClientContext,v as ConsultantContext,W as ConsultationCall,i as Default,C as ExpertContext,E as FounderContext,I as InterviewCall,M as LargeGroup,T as MinimalInterface,R as NoControls,V as NoParticipantsList,$ as ObserverView,z as ParticipantView,L as PresentationMode,D as ToolCreatorContext,P as WaitingToStart,F as WithInteractions,N as WithRecording,k as WithScreenSharing,et as __namedExportsOrder,Ua as default};
