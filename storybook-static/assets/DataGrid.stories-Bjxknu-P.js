import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./addressinput-CNH7vJB0.js";import"./alert-B5XaLlhU.js";import{A as Va}from"./Avatar-FRCDbBKZ.js";import{B as ma}from"./badge-B5L8fRVo.js";import"./billingstatus-Cfmsa9I5.js";import"./Breadcrumbs-DjVWW3u6.js";import"./button-C_OMcIil.js";import{C as pa}from"./card-C_YySC7Y.js";import"./checkbox-ifqmoBLn.js";import"./clientbadge-FMKPWyE6.js";import"./collaboratoravatar-CiXANbWh.js";import"./colorpicker-B6l8j5w8.js";import"./consenttoggle-BxfFTX-x.js";import"./currencyinput-QYgQ-G7i.js";import"./datepicker-DO7zfnYw.js";import"./documenttype-DODrRpWN.js";import"./dropdown-menu-C6s4BPQY.js";import{E as La}from"./EmptyState-BxGYtNwh.js";import"./expertisetag-cuJKChjS.js";import"./icon-BEoQwoSy.js";import"./image-CPrvrfgb.js";import"./input-C_PKqGnl.js";import"./label-Bc71zScC.js";import"./loadingoverlay-epOQCsNk.js";import"./Logo-BCeQuN96.js";import"./modal-TYDdxiCO.js";import"./OnboardingWizard-W-ek0PPT.js";import"./Pagination-7bMG1qci.js";import"./phoneinput-C5CtNr0n.js";import"./progress-DFy8PWGV.js";import"./progressindicator-CPvhbYMc.js";import"./projectphase-HexdRD8G.js";import"./richtexteditor-uaNC3sqX.js";import"./select-Bg6t_rxL.js";import"./separator-fURmX4DE.js";import"./skeletonloader-vrkcUu0U.js";import"./slider-DUmiO_og.js";import{S as oe}from"./spinner-C4_lq1M4.js";import"./StatusDot-I44fDEUy.js";import"./switch-REYDQGjT.js";import"./tabs-CYGLg6Rb.js";import"./textarea-DUuIy5cK.js";import"./timeindicator-B9W9zojc.js";import"./timepicker-qaQY4XKS.js";import"./timerangeinput-Cf2bu7dY.js";import"./toast-ju6Iad-C.js";import"./verticalslider-DXRhhGVf.js";import"./workspaceicon-B8JYiyw8.js";import"./container-BV66bbjT.js";import"./flex-B2tn7VQA.js";import"./grid-Dukaz8Hf.js";import"./panel-DJq8D5Bo.js";import"./stack-6K505iai.js";import{r as d,R as $a}from"./index-B2-qRKKC.js";import"./supabase-_6SMTDjj.js";import{d as Ma,f as Ia,p as Ra,c as qa,t as za,a as ce,g as Ga}from"./utils-DZQNfFwp.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-CTSIWqPJ.js";import"./createLucideIcon-mz0sz0u3.js";import"./chunk-QMGIS6GS-t_DnlxpT.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C0-VfTUy.js";import"./index-_AbP6Uzr.js";import"./index-J7qzKPKh.js";import"./index-CvtFoTXF.js";import"./check-DuvhxqeR.js";import"./index-DVrBHfCr.js";import"./Combination-DM4kBwHz.js";import"./index-ciuW_uyV.js";import"./index-D8c-22H5.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-BAk7S-tT.js";import"./chevron-right-Cglc0ypw.js";import"./circle-B6IJyZRp.js";import"./users-DsC9MV1W.js";import"./chevron-down-4p6LAh_V.js";import"./settings-oq6Li1sM.js";import"./folder-DFbRz8A7.js";import"./index-DUolvyrz.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-BZvWbWhX.js";const Q=({data:a,loading:n=!1,context:u="neutral",permissions:f=[],columns:x="auto",gap:g="md",itemHeight:y="auto",cardComponent:ha,pagination:p,filtering:i,selection:o,virtualScrolling:s,onItemClick:j,onItemDoubleClick:N,infiniteScroll:C=!1,onLoadMore:B,hasMore:H=!1,responsive:Z=!0,className:fa="",style:xa})=>{const[v,ee]=d.useState(""),[w,ba]=d.useState((o==null?void 0:o.selectedKeys)||[]),[h,J]=d.useState((p==null?void 0:p.page)||1),[D,Ea]=d.useState((p==null?void 0:p.pageSize)||12),[ae,ya]=d.useState(0),O=d.useRef(null),X=d.useRef(null),Y=d.useRef(null),Ca=Ga(u),ja=d.useCallback(Ma(t=>{ee(t),J(1),i!=null&&i.onSearch&&i.onSearch(t)},300),[i]),m=d.useMemo(()=>{let t=[...a];if((i==null?void 0:i.enabled)!==!1&&v&&(t=Ia(t,{},v)),(p==null?void 0:p.enabled)!==!1&&!(s!=null&&s.enabled)&&!C){const r=Ra(t,h,D);return{data:r.data,total:r.total,totalPages:r.totalPages,filteredTotal:t.length}}return{data:t,total:t.length,totalPages:1,filteredTotal:t.length}},[a,v,h,D,i,p,s,C]),te=d.useMemo(()=>{if(!(s!=null&&s.enabled)||!O.current||y==="auto")return null;const t=O.current.clientHeight,r=typeof y=="number"?y:200;return qa(m.data.length,r,t,ae,s.overscan)},[s,m.data.length,ae,y]),se=d.useMemo(()=>{if(typeof x=="number")return{columns:`repeat(${x}, 1fr)`,autoFit:!1};const t=280,r=g==="sm"?8:g==="md"?16:g==="lg"?24:typeof g=="number"?g:16;return{columns:`repeat(auto-fit, minmax(${t}px, 1fr))`,autoFit:!0,gap:r}},[x,g]),va=d.useCallback(t=>{if(!(o!=null&&o.enabled))return;const r=za(w,t,o.type);if(ba(r),o.onSelectionChange){const b=m.data.filter(S=>r.includes(ce(S,o.getRowKey)));o.onSelectionChange(r,b)}},[w,o,m.data]),wa=d.useCallback((t,r)=>{j==null||j(t,r)},[j]),Sa=d.useCallback((t,r)=>{N==null||N(t,r)},[N]),Na=d.useCallback(t=>{s!=null&&s.enabled&&(ya(t.currentTarget.scrollTop),s.onScroll&&s.onScroll(t.currentTarget.scrollTop))},[s]);$a.useEffect(()=>{if(!C||!Y.current||!H)return;const t=new IntersectionObserver(r=>{r[0].isIntersecting&&B&&B()},{threshold:.1});return t.observe(Y.current),X.current=t,()=>{X.current&&X.current.disconnect()}},[C,H,B]);const re=typeof g=="string"?{sm:"gap-2",md:"gap-4",lg:"gap-6"}[g]:"",ne=(t,r)=>{const b=ce(t,o==null?void 0:o.getRowKey),S=w.includes(b);return e.jsx("div",{className:`
          ${Z?"w-full":""}
          ${j?"cursor-pointer":""}
          transition-transform duration-150 hover:scale-[1.02]
        `,onClick:()=>wa(t,r),onDoubleClick:()=>Sa(t,r),style:{height:y==="auto"?"auto":y},children:e.jsx(ha,{item:t,context:u,selected:S,onSelect:o!=null&&o.enabled?()=>va(b):void 0})},b)},Da=()=>{if(!te)return null;const{start:t,end:r,totalHeight:b,offsetY:S}=te,Ua=m.data.slice(t,r+1);return e.jsx("div",{style:{height:b,position:"relative"},children:e.jsx("div",{style:{transform:`translateY(${S}px)`},children:e.jsx("div",{className:`grid ${re}`,style:{gridTemplateColumns:se.columns,gap:typeof g=="number"?`${g}px`:void 0},children:Ua.map((ka,Ta)=>ne(ka,t+Ta))})})})},Pa=()=>e.jsx("div",{className:`grid ${re}`,style:{gridTemplateColumns:se.columns,gap:typeof g=="number"?`${g}px`:void 0},children:m.data.map((t,r)=>ne(t,r))});return n?e.jsxs("div",{className:"flex items-center justify-center p-8",children:[e.jsx(oe,{size:"lg"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"Loading..."})]}):m.data.length===0?e.jsx(La,{title:"No items found",description:v?"No results found for your search.":"There are no items to display.",actions:v?e.jsx("button",{onClick:()=>ee(""),className:`px-4 py-2 rounded-md ${Ca.primary} hover:opacity-90 transition-opacity`,children:"Clear search"}):void 0}):e.jsxs("div",{className:`${fa}`,style:xa,children:[(i==null?void 0:i.enabled)!==!1&&e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex-1 max-w-md",children:e.jsx("input",{type:"text",placeholder:(i==null?void 0:i.searchPlaceholder)||"Search items...",onChange:t=>ja(t.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})}),w.length>0&&e.jsxs("div",{className:"text-sm text-gray-600",children:[w.length," selected"]})]})}),e.jsxs("div",{ref:O,className:`
          ${s!=null&&s.enabled?"overflow-auto":""}
          ${Z?"w-full":""}
        `,style:{maxHeight:s!=null&&s.enabled?600:void 0},onScroll:Na,children:[s!=null&&s.enabled?Da():Pa(),C&&H&&e.jsx("div",{ref:Y,className:"flex justify-center py-4",children:e.jsx(oe,{size:"md"})})]}),(p==null?void 0:p.enabled)!==!1&&!(s!=null&&s.enabled)&&!C&&m.totalPages>1&&e.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",(h-1)*D+1," to ",Math.min(h*D,m.filteredTotal)," of ",m.filteredTotal," results"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>J(Math.max(1,h-1)),disabled:h===1,className:`
                px-3 py-1 text-sm border rounded-md
                ${h===1?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,children:"Previous"}),e.jsxs("span",{className:"text-sm text-gray-700 px-3",children:["Page ",h," of ",m.totalPages]}),e.jsx("button",{onClick:()=>J(Math.min(m.totalPages,h+1)),disabled:h===m.totalPages,className:`
                px-3 py-1 text-sm border rounded-md
                ${h===m.totalPages?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border-gray-300"}
              `,children:"Next"})]})]})]})};try{Q.displayName="DataGrid",Q.__docgenInfo={description:"",displayName:"DataGrid",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"tool-creator"'},{value:'"founder"'},{value:'"neutral"'}]}},permissions:{defaultValue:{value:"[]"},description:"",name:"permissions",required:!1,type:{name:"string[]"}},columns:{defaultValue:{value:"auto"},description:"",name:"columns",required:!1,type:{name:'number | "auto"'}},gap:{defaultValue:{value:"md"},description:"",name:"gap",required:!1,type:{name:'number | "sm" | "md" | "lg"'}},itemHeight:{defaultValue:{value:"auto"},description:"",name:"itemHeight",required:!1,type:{name:'number | "auto"'}},cardComponent:{defaultValue:null,description:"",name:"cardComponent",required:!0,type:{name:"ComponentType<{ item: T; context?: WorkspaceContext; selected?: boolean; onSelect?: (selected: boolean) => void; }>"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"PaginationConfig"}},filtering:{defaultValue:null,description:"",name:"filtering",required:!1,type:{name:"FilteringConfig"}},selection:{defaultValue:null,description:"",name:"selection",required:!1,type:{name:"SelectionConfig<T>"}},virtualScrolling:{defaultValue:null,description:"",name:"virtualScrolling",required:!1,type:{name:"VirtualScrollConfig"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"(item: T, index: number) => void"}},onItemDoubleClick:{defaultValue:null,description:"",name:"onItemDoubleClick",required:!1,type:{name:"(item: T, index: number) => void"}},infiniteScroll:{defaultValue:{value:"false"},description:"",name:"infiniteScroll",required:!1,type:{name:"boolean"}},onLoadMore:{defaultValue:null,description:"",name:"onLoadMore",required:!1,type:{name:"() => void"}},hasMore:{defaultValue:{value:"false"},description:"",name:"hasMore",required:!1,type:{name:"boolean"}},responsive:{defaultValue:{value:"true"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const c=[{id:"1",name:"John Doe",email:"john@example.com",role:"Senior Developer",status:"active",lastLogin:new Date("2024-01-15"),projects:3,revenue:125e3,avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Project Manager",status:"active",lastLogin:new Date("2024-01-14"),projects:5,revenue:18e4,avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Designer",status:"inactive",lastLogin:new Date("2024-01-10"),projects:2,revenue:95e3,avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"},{id:"4",name:"Alice Brown",email:"alice@example.com",role:"Developer",status:"pending",lastLogin:new Date("2024-01-12"),projects:1,revenue:75e3,avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"},{id:"5",name:"Charlie Wilson",email:"charlie@example.com",role:"Consultant",status:"active",lastLogin:new Date("2024-01-16"),projects:4,revenue:2e5,avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"},{id:"6",name:"Diana Prince",email:"diana@example.com",role:"UX Designer",status:"active",lastLogin:new Date("2024-01-17"),projects:3,revenue:14e4,avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face"}],ua=[{id:"1",name:"Website Redesign",client:"Acme Corp",status:"active",progress:75,startDate:new Date("2024-01-01"),endDate:new Date("2024-03-01"),budget:5e4,team:["John Doe","Jane Smith"],description:"Complete redesign of the corporate website with modern UI/UX principles."},{id:"2",name:"Mobile App Development",client:"Tech Startup",status:"planning",progress:25,startDate:new Date("2024-02-01"),endDate:new Date("2024-06-01"),budget:12e4,team:["Bob Johnson","Alice Brown"],description:"Native mobile application for iOS and Android platforms."},{id:"3",name:"E-commerce Platform",client:"Retail Giant",status:"completed",progress:100,startDate:new Date("2023-10-01"),endDate:new Date("2024-01-01"),budget:2e5,team:["Charlie Wilson","John Doe","Jane Smith"],description:"Full-featured e-commerce platform with payment integration."},{id:"4",name:"Data Analytics Dashboard",client:"Finance Corp",status:"active",progress:60,startDate:new Date("2024-01-15"),endDate:new Date("2024-04-15"),budget:8e4,team:["Diana Prince","Charlie Wilson"],description:"Real-time analytics dashboard for financial data visualization."}],Wa=({item:a,context:n,selected:u,onSelect:f})=>e.jsxs(pa,{className:`p-4 h-full ${u?"ring-2 ring-blue-500":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(Va,{src:a.avatar,alt:a.name,size:"md",fallback:a.name.split(" ").map(x=>x[0]).join("")}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:a.name}),e.jsx("p",{className:"text-sm text-gray-600",children:a.role})]})]}),f&&e.jsx("input",{type:"checkbox",checked:u,onChange:x=>f(x.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"})]}),e.jsxs("div",{className:"space-y-2 mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Status"}),e.jsx(ma,{variant:a.status==="active"?"success":a.status==="inactive"?"error":"warning",children:a.status})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Projects"}),e.jsx("span",{className:"text-sm font-medium",children:a.projects})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Revenue"}),e.jsxs("span",{className:"text-sm font-medium",children:["$",a.revenue.toLocaleString()]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["Last login: ",a.lastLogin.toLocaleDateString()]})]}),Aa=({item:a,context:n,selected:u,onSelect:f})=>e.jsxs(pa,{className:`p-4 h-full ${u?"ring-2 ring-blue-500":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:a.name}),e.jsx("p",{className:"text-sm text-gray-600",children:a.client})]}),f&&e.jsx("input",{type:"checkbox",checked:u,onChange:x=>f(x.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"})]}),e.jsx("p",{className:"text-sm text-gray-700 mb-4 line-clamp-2",children:a.description}),e.jsxs("div",{className:"space-y-3 mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Status"}),e.jsx(ma,{variant:a.status==="completed"?"success":a.status==="active"?"primary":a.status==="planning"?"warning":"secondary",children:a.status})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Progress"}),e.jsxs("span",{className:"text-sm font-medium",children:[a.progress,"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${a.progress}%`}})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Budget"}),e.jsxs("span",{className:"text-sm font-medium",children:["$",a.budget.toLocaleString()]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Team"}),e.jsxs("span",{className:"text-sm font-medium",children:[a.team.length," members"]})]})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[a.startDate.toLocaleDateString()," - ",a.endDate.toLocaleDateString()]})]}),l=({item:a,context:n,selected:u,onSelect:f})=>e.jsx(Wa,{item:a,context:n,selected:u,onSelect:f}),ga=({item:a,context:n,selected:u,onSelect:f})=>e.jsx(Aa,{item:a,context:n,selected:u,onSelect:f}),vs={title:"Layouts/Data Display/DataGrid",component:Q,parameters:{layout:"padded",docs:{description:{component:`
A flexible data grid component for displaying data in card-based layouts with advanced features:

- **Responsive Grid**: Auto-fit columns based on container width
- **Virtual Scrolling**: Performance optimization for large datasets
- **Infinite Scroll**: Load more data as user scrolls
- **Selection**: Single or multi-item selection with bulk actions
- **Filtering & Search**: Built-in search and filtering capabilities
- **Workspace Context**: Adaptive styling based on user role
- **Custom Cards**: Flexible card component system
- **Pagination**: Traditional pagination support

Perfect for dashboards, user directories, project galleries, and any card-based data display.
        `}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for adaptive styling"},columns:{control:{type:"range",min:1,max:6,step:1},description:'Number of columns (or "auto" for responsive)'},gap:{control:"select",options:["sm","md","lg"],description:"Gap between grid items"},loading:{control:"boolean",description:"Loading state"},responsive:{control:"boolean",description:"Enable responsive behavior"},infiniteScroll:{control:"boolean",description:"Enable infinite scrolling"}}},P={args:{data:c,cardComponent:l,context:"neutral",columns:"auto",gap:"md"}},U={args:{data:c,cardComponent:l,context:"consultant",columns:"auto",gap:"md"}},k={args:{data:ua,cardComponent:ga,context:"client",columns:"auto",gap:"md"}},T={args:{data:c,cardComponent:l,columns:2,gap:"md"}},V={args:{data:c,cardComponent:l,columns:3,gap:"md"}},L={args:{data:c,cardComponent:l,columns:4,gap:"sm"}},$={args:{data:c,cardComponent:l,gap:"sm"}},M={args:{data:c,cardComponent:l,gap:"lg"}},I={args:{data:c,cardComponent:l,selection:{enabled:!0,type:"checkbox",selectedKeys:["1","3"]},onItemClick:a=>console.log("Item clicked:",a)}},R={args:{data:c,cardComponent:l,filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search users..."}}},q={args:{data:[...c,...c,...c],cardComponent:l,pagination:{enabled:!0,page:1,pageSize:4,total:18,showSizeChanger:!0,showTotal:!0}}},z={args:{data:[],cardComponent:l,loading:!0}},G={args:{data:[],cardComponent:l,loading:!1}},W={args:{data:ua,cardComponent:ga,context:"admin",columns:"auto",gap:"md",filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search projects..."}}},A={args:{data:Array.from({length:1e3},(a,n)=>({id:`${n+1}`,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:["Developer","Designer","Manager"][n%3],status:["active","inactive","pending"][n%3],lastLogin:new Date(2024,0,n%30+1),projects:Math.floor(Math.random()*10),revenue:Math.floor(Math.random()*2e5)})),cardComponent:l,virtualScrolling:{enabled:!0,itemHeight:200,overscan:5},columns:"auto",gap:"md"}},E={args:{data:c,cardComponent:l,infiniteScroll:!0,hasMore:!0,onLoadMore:()=>{console.log("Loading more items...")},filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search users..."}}},F={args:{data:c,cardComponent:l,context:"admin",columns:"auto",gap:"md",selection:{enabled:!0,type:"checkbox",onSelectionChange:(a,n)=>{console.log("Selection changed:",a,n)}},filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search users...",onSearch:a=>console.log("Search:",a)},pagination:{enabled:!0,page:1,pageSize:4,total:c.length,showSizeChanger:!0,showTotal:!0,onPageChange:(a,n)=>{console.log("Page changed:",a,n)}},onItemClick:a=>console.log("Item clicked:",a),onItemDoubleClick:a=>console.log("Item double-clicked:",a),responsive:!0}},_={args:{data:c,cardComponent:l,itemHeight:250,columns:3,gap:"md"}},K={args:{data:c,cardComponent:l,responsive:!0,columns:"auto",gap:"md"},parameters:{viewport:{defaultViewport:"mobile1"}}};var le,de,ie;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'neutral',
    columns: 'auto',
    gap: 'md'
  }
}`,...(ie=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var me,pe,ue;U.parameters={...U.parameters,docs:{...(me=U.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'consultant',
    columns: 'auto',
    gap: 'md'
  }
}`,...(ue=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,fe;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    data: sampleProjects,
    cardComponent: ProjectCard,
    context: 'client',
    columns: 'auto',
    gap: 'md'
  }
}`,...(fe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var xe,be,ye;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 2,
    gap: 'md'
  }
}`,...(ye=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Ce,je,ve;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 3,
    gap: 'md'
  }
}`,...(ve=(je=V.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var we,Se,Ne;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    columns: 4,
    gap: 'sm'
  }
}`,...(Ne=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var De,Pe,Ue;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    gap: 'sm'
  }
}`,...(Ue=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var ke,Te,Ve;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    gap: 'lg'
  }
}`,...(Ve=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var Le,$e,Me;I.parameters={...I.parameters,docs:{...(Le=I.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    selection: {
      enabled: true,
      type: 'checkbox',
      selectedKeys: ['1', '3']
    },
    onItemClick: item => console.log('Item clicked:', item)
  }
}`,...(Me=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};var Ie,Re,qe;R.parameters={...R.parameters,docs:{...(Ie=R.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...'
    }
  }
}`,...(qe=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var ze,Ge,We;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    // Duplicate data for pagination demo
    cardComponent: UserCard,
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 4,
      total: 18,
      showSizeChanger: true,
      showTotal: true
    }
  }
}`,...(We=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Ae,Ee,Fe;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    data: [],
    cardComponent: UserCard,
    loading: true
  }
}`,...(Fe=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var _e,Ke,Be;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    data: [],
    cardComponent: UserCard,
    loading: false
  }
}`,...(Be=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:Be.source}}};var He,Je,Oe;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    data: sampleProjects,
    cardComponent: ProjectCard,
    context: 'admin',
    columns: 'auto',
    gap: 'md',
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search projects...'
    }
  }
}`,...(Oe=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Oe.source}}};var Xe,Ye,Qe;A.parameters={...A.parameters,docs:{...(Xe=A.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 1000
    }, (_, i) => ({
      id: \`\${i + 1}\`,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['Developer', 'Designer', 'Manager'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
      lastLogin: new Date(2024, 0, i % 30 + 1),
      projects: Math.floor(Math.random() * 10),
      revenue: Math.floor(Math.random() * 200000)
    })),
    cardComponent: UserCard,
    virtualScrolling: {
      enabled: true,
      itemHeight: 200,
      overscan: 5
    },
    columns: 'auto',
    gap: 'md'
  }
}`,...(Qe=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Ze,ea,aa;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    infiniteScroll: true,
    hasMore: true,
    onLoadMore: () => {
      console.log('Loading more items...');
      // In a real app, this would load more data
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...'
    }
  }
}`,...(aa=(ea=E.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,sa,ra;F.parameters={...F.parameters,docs:{...(ta=F.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    context: 'admin',
    columns: 'auto',
    gap: 'md',
    selection: {
      enabled: true,
      type: 'checkbox',
      onSelectionChange: (keys, items) => {
        console.log('Selection changed:', keys, items);
      }
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...',
      onSearch: term => console.log('Search:', term)
    },
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 4,
      total: sampleUsers.length,
      showSizeChanger: true,
      showTotal: true,
      onPageChange: (page, pageSize) => {
        console.log('Page changed:', page, pageSize);
      }
    },
    onItemClick: item => console.log('Item clicked:', item),
    onItemDoubleClick: item => console.log('Item double-clicked:', item),
    responsive: true
  }
}`,...(ra=(sa=F.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var na,oa,ca;_.parameters={..._.parameters,docs:{...(na=_.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    itemHeight: 250,
    columns: 3,
    gap: 'md'
  }
}`,...(ca=(oa=_.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};var la,da,ia;K.parameters={...K.parameters,docs:{...(la=K.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    cardComponent: UserCard,
    responsive: true,
    columns: 'auto',
    gap: 'md'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(ia=(da=K.parameters)==null?void 0:da.docs)==null?void 0:ia.source}}};const ws=["Default","ConsultantContext","ClientContext","TwoColumns","ThreeColumns","FourColumns","SmallGap","LargeGap","WithSelection","WithFiltering","WithPagination","Loading","Empty","ProjectGrid","VirtualScrolling","InfiniteScroll","ComplexExample","FixedHeight","ResponsiveGrid"];export{k as ClientContext,F as ComplexExample,U as ConsultantContext,P as Default,G as Empty,_ as FixedHeight,L as FourColumns,E as InfiniteScroll,M as LargeGap,z as Loading,W as ProjectGrid,K as ResponsiveGrid,$ as SmallGap,V as ThreeColumns,T as TwoColumns,A as VirtualScrolling,R as WithFiltering,q as WithPagination,I as WithSelection,ws as __namedExportsOrder,vs as default};
