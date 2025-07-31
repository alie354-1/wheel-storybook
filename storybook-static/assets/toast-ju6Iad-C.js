import{j as h}from"./jsx-runtime-DF2Pcvd1.js";import{r as c}from"./index-B2-qRKKC.js";import{c as I}from"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";let M={data:""},F=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||M,H=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,L=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,v=(e,t)=>{let a="",s="",n="";for(let r in e){let i=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+i+";":s+=r[1]=="f"?v(i,r):r+"{"+v(i,r[1]=="k"?"":t)+"}":typeof i=="object"?s+=v(i,t?t.replace(/([^,])+/g,o=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):r):i!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=v.p?v.p(r,i):r+":"+i+";")}return a+(t&&n?t+"{"+n+"}":n)+s},y={},P=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+P(e[a]);return t}return e},R=(e,t,a,s,n)=>{let r=P(e),i=y[r]||(y[r]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(r));if(!y[i]){let l=r!==e?e:(d=>{let u,f,m=[{}];for(;u=H.exec(d.replace(L,""));)u[4]?m.shift():u[3]?(f=u[3].replace(z," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(z," ").trim();return m[0]})(e);y[i]=v(n?{["@keyframes "+i]:l}:l,a?"":"."+i)}let o=a&&y.g?y.g:null;return a&&(y.g=y[i]),((l,d,u,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[i],t,s,o),i},U=(e,t,a)=>e.reduce((s,n,r)=>{let i=t[r];if(i&&i.call){let o=i(a),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=l?"."+l:o&&typeof o=="object"?o.props?"":v(o,""):o===!1?"":o}return s+n+(i??"")},"");function D(e){let t=this||{},a=e.call?e(t.p):e;return R(a.unshift?a.raw?U(a,[].slice.call(arguments,1),t.p):a.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):a,F(t.target),t.g,t.o,t.k)}let q,T,_;D.bind({g:1});let b=D.bind({k:1});function Y(e,t,a,s){v.p=t,q=e,T=a,_=s}function x(e,t){let a=this||{};return function(){let s=arguments;function n(r,i){let o=Object.assign({},r),l=o.className||n.className;a.p=Object.assign({theme:T&&T()},o),a.o=/ *go\d+/.test(l),o.className=D.apply(a,s)+(l?" "+l:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),_&&d[0]&&_(o),q(d,o)}return t?t(n):n}}var Z=e=>typeof e=="function",C=(e,t)=>Z(e)?e(t):e,B=(()=>{let e=0;return()=>(++e).toString()})(),V=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return S(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+n}))}}},N=[],w={toasts:[],pausedAt:void 0},E=e=>{w=S(w,e),N.forEach(t=>{t(w)})},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(e={})=>{let[t,a]=c.useState(w),s=c.useRef(w);c.useEffect(()=>(s.current!==w&&a(w),N.push(a),()=>{let r=N.indexOf(a);r>-1&&N.splice(r,1)}),[]);let n=t.toasts.map(r=>{var i,o,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((i=e[r.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:r.duration||((o=e[r.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||K[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:n}},X=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||B()}),k=e=>(t,a)=>{let s=X(t,e,a);return E({type:2,toast:s}),s.id},p=(e,t)=>k("blank")(e,t);p.error=k("error");p.success=k("success");p.loading=k("loading");p.custom=k("custom");p.dismiss=e=>{E({type:3,toastId:e})};p.remove=e=>E({type:4,toastId:e});p.promise=(e,t,a)=>{let s=p.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let r=t.success?C(t.success,n):void 0;return r?p.success(r,{id:s,...a,...a==null?void 0:a.success}):p.dismiss(s),n}).catch(n=>{let r=t.error?C(t.error,n):void 0;r?p.error(r,{id:s,...a,...a==null?void 0:a.error}):p.dismiss(s)}),e};var G=(e,t)=>{E({type:1,toast:{id:e,height:t}})},Q=()=>{E({type:5,time:Date.now()})},j=new Map,ee=1e3,te=(e,t=ee)=>{if(j.has(e))return;let a=setTimeout(()=>{j.delete(e),E({type:4,toastId:e})},t);j.set(e,a)},re=e=>{let{toasts:t,pausedAt:a}=W(e);c.useEffect(()=>{if(a)return;let r=Date.now(),i=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(r-o.createdAt);if(l<0){o.visible&&p.dismiss(o.id);return}return setTimeout(()=>p.dismiss(o.id),l)});return()=>{i.forEach(o=>o&&clearTimeout(o))}},[t,a]);let s=c.useCallback(()=>{a&&E({type:6,time:Date.now()})},[a]),n=c.useCallback((r,i)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:d}=i||{},u=t.filter(g=>(g.position||d)===(r.position||d)&&g.height),f=u.findIndex(g=>g.id===r.id),m=u.filter((g,O)=>O<f&&g.visible).length;return u.filter(g=>g.visible).slice(...o?[m+1]:[0,m]).reduce((g,O)=>g+(O.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(r=>{if(r.dismissed)te(r.id,r.removeDelay);else{let i=j.get(r.id);i&&(clearTimeout(i),j.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:G,startPause:Q,endPause:s,calculateOffset:n}}},ae=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,se=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,de=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ue=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pe=x("div")`
  position: absolute;
`,me=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ye=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(ge,null,t):t:a==="blank"?null:c.createElement(me,null,c.createElement(le,{...s}),a!=="loading"&&c.createElement(pe,null,a==="error"?c.createElement(ie,{...s}):c.createElement(ue,{...s})))},be=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,he=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ve="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",we=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ee=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,je=(e,t)=>{let a=e.includes("top")?1:-1,[s,n]=V()?[ve,xe]:[be(a),he(a)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ke=c.memo(({toast:e,position:t,style:a,children:s})=>{let n=e.height?je(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(ye,{toast:e}),i=c.createElement(Ee,{...e.ariaProps},C(e.message,e));return c.createElement(we,{className:e.className,style:{...n,...a,...e.style}},typeof s=="function"?s({icon:r,message:i}):c.createElement(c.Fragment,null,r,i))});Y(c.createElement);var $e=({id:e,className:t,style:a,onHeightUpdate:s,children:n})=>{let r=c.useCallback(i=>{if(i){let o=()=>{let l=i.getBoundingClientRect().height;s(e,l)};o(),new MutationObserver(o).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:r,className:t,style:a},n)},Ne=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...n}},Ce=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,De=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:n,containerStyle:r,containerClassName:i})=>{let{toasts:o,handlers:l}=re(a);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(d=>{let u=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),m=Ne(u,f);return c.createElement($e,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ce:"",style:m},d.type==="custom"?C(d.message,d):n?n(d):c.createElement(ke,{toast:d,position:u}))}))};const Oe=(e,t)=>{if(t!=="neutral")switch(t){case"consultant":return"bg-blue-100 border-blue-500 text-blue-800";case"client":return"bg-green-100 border-green-500 text-green-800";case"admin":return"bg-gray-100 border-gray-500 text-gray-800";case"expert":return"bg-purple-100 border-purple-500 text-purple-800";case"toolCreator":return"bg-indigo-100 border-indigo-500 text-indigo-800";case"founder":return"bg-orange-100 border-orange-500 text-orange-800"}switch(e){case"success":return"bg-green-100 border-green-500 text-green-800";case"warning":return"bg-yellow-100 border-yellow-500 text-yellow-800";case"error":return"bg-red-100 border-red-500 text-red-800";case"info":return"bg-sky-100 border-sky-500 text-sky-800";default:return"bg-gray-100 border-gray-500 text-gray-800"}},A=({variant:e="info",context:t="neutral",title:a,description:s,actions:n})=>h.jsxs("div",{className:I("p-4 border-l-4",Oe(e,t)),children:[a&&h.jsx("p",{className:"font-bold",children:a}),s&&h.jsx("p",{children:s}),n&&h.jsx("div",{className:"mt-2 space-x-2",children:n.map((r,i)=>h.jsx("button",{onClick:r.onClick,className:"font-bold text-sm",children:r.label},i))})]}),Ie=()=>({show:t=>{p.custom(a=>h.jsx("div",{className:I("max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5",a.visible?"animate-enter":"animate-leave"),children:h.jsx(A,{...t})}),{duration:t.persistent?1/0:t.duration||4e3})}}),Pe=()=>h.jsx(De,{position:"bottom-right"});try{A.displayName="Toast",A.__docgenInfo={description:"",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"founder"'},{value:'"neutral"'},{value:'"toolCreator"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},persistent:{defaultValue:null,description:"",name:"persistent",required:!1,type:{name:"boolean"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ToastAction[]"}}}}}catch{}export{Pe as T,p as c,Ie as u};
