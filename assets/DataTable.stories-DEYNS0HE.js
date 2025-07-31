import{j as a}from"./jsx-runtime-BdivIsZm.js";import"./addressinput-DR7TMhaL.js";import"./alert-CmQfHnIB.js";import"./Avatar-DpmMIMRY.js";import"./badge-CCDj6nE-.js";import"./billingstatus-FUl2LzUo.js";import"./Breadcrumbs-CD8-NpFW.js";import{B as N}from"./button-CVrJYqSg.js";import"./card-CiIM_3zT.js";import{C as he}from"./checkbox-C1904Hbm.js";import"./clientbadge-B0vBhpoP.js";import"./collaboratoravatar-Cj5swjSt.js";import"./colorpicker-CP25QCKe.js";import"./consenttoggle-CWNbEheV.js";import"./currencyinput-DDECLqEx.js";import"./datepicker-CMcbHV_K.js";import"./documenttype-CE1WVI-a.js";import"./dropdown-menu-B74Grn0N.js";import{E as Ua}from"./EmptyState-DN3TLLmB.js";import"./expertisetag-DukMPJHx.js";import"./icon-n7_CnhNS.js";import"./image-Cvhw9Q6R.js";import{I as Ba}from"./input-Dghz61Zk.js";import"./label-M8x0GrR1.js";import"./loadingoverlay-DjyusYgl.js";import"./Logo-CikAc-tf.js";import"./modal-D4RiM4xB.js";import"./OnboardingWizard-rVn84COl.js";import"./Pagination-Cml1MfcN.js";import"./phoneinput-FjD8a10x.js";import"./progress-B0d5sHx6.js";import"./progressindicator-D_fPiVDx.js";import"./projectphase-BL3LsC6t.js";import"./richtexteditor-BZqFfy3-.js";import"./select-CWC_Y-a8.js";import"./separator-CCHR5v8x.js";import"./skeletonloader-D9azb5oV.js";import"./slider-3m5Aqiuu.js";import{S as Wa}from"./spinner-CPvlAmSZ.js";import"./StatusDot-BnZf1aWI.js";import"./switch-Ceff0QjZ.js";import"./tabs-BpPu-ig0.js";import"./textarea-CZkKCT_E.js";import"./timeindicator-Bsyu2Dbt.js";import"./timepicker-CHlwWyrs.js";import"./timerangeinput-BAd-BBKO.js";import"./toast-CIJrJnz7.js";import"./verticalslider-DWEhyKS6.js";import"./workspaceicon-C6jyzXCI.js";import"./container-Z7k16UFv.js";import"./flex-c2B3-bxM.js";import"./grid-DwXfsyQu.js";import"./panel-B-9ixgye.js";import"./stack-BHVBUkCW.js";import{r as l,R as Ka}from"./vendor-CIaSNbmr.js";import"./supabase-_6SMTDjj.js";import{b as _a,f as Fa,s as Ja,p as Ia,c as Ga,d as Oa,t as Ya,a as R,e as Qa,g as Xa,h as Za,i as et}from"./utils-DZQNfFwp.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";import"./chunk-QMGIS6GS-DcNV08QD.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-CKrSpwSu.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./check-BgTDyPES.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-C_M4-wMA.js";import"./chevron-right-DCSbz_2P.js";import"./circle-CCrQh0AO.js";import"./users-C9yZEvey.js";import"./chevron-down-DDkHMo_x.js";import"./settings-D7npsBbE.js";import"./folder-D3RaKPRK.js";import"./index-Cgc55meF.js";import"./immer-3uZG5tlX.js";import"./toConsumableArray-BIhBLUu1.js";import"./bootstrap-L77bMaJk.js";const oe=({data:t,columns:b,loading:ee=!1,context:ae="neutral",permissions:le=[],pagination:p,sorting:m,filtering:d,selection:r,bulkActions:E=[],virtualScrolling:o,onRowClick:T,onRowDoubleClick:te,onCellClick:z,size:S="md",variant:ha="default",responsive:at=!0,stickyHeader:xa=!1,maxHeight:ie,expandable:y,exportable:P=!1,onExport:re,ariaLabel:ba,ariaLabelledBy:ya,className:fa="",style:va})=>{const[f,wa]=l.useState(m==null?void 0:m.field),[w,Sa]=l.useState((m==null?void 0:m.direction)||"asc"),[V,de]=l.useState(""),[ce,tt]=l.useState({}),[g,me]=l.useState((r==null?void 0:r.selectedKeys)||[]),[$,ja]=l.useState((y==null?void 0:y.expandedRowKeys)||[]),[v,se]=l.useState((p==null?void 0:p.page)||1),[L,rt]=l.useState((p==null?void 0:p.pageSize)||10),[ue,Ca]=l.useState(0),ne=l.useRef(null),ka=l.useRef(null),Da=Xa(ae),C=l.useMemo(()=>_a(b,le,ae),[b,le,ae]),n=l.useMemo(()=>{let e=[...t];if((d==null?void 0:d.enabled)!==!1&&(e=Fa(e,ce,V)),f&&(m!=null&&m.onSort)?m.onSort(f,w):f&&(e=Ja(e,f,w)),(p==null?void 0:p.enabled)!==!1&&!(o!=null&&o.enabled)){const s=Ia(e,v,L);return{data:s.data,total:s.total,totalPages:s.totalPages,filteredTotal:e.length}}return{data:e,total:e.length,totalPages:1,filteredTotal:e.length}},[t,ce,V,f,w,v,L,d,m,p,o]),pe=l.useMemo(()=>{if(!(o!=null&&o.enabled)||!ne.current)return null;const e=ne.current.clientHeight,s=o.itemHeight||48;return Ga(n.data.length,s,e,ue,o.overscan)},[o,n.data.length,ue]),Na=l.useCallback(Oa(e=>{de(e),se(1),d!=null&&d.onSearch&&d.onSearch(e)},300),[d]),Ea=l.useCallback(e=>{const s=C.find(h=>String(h.key)===e);if(!(s!=null&&s.sortable))return;const i=f===e&&w==="asc"?"desc":"asc";wa(e),Sa(i),m!=null&&m.onSort&&m.onSort(e,i)},[C,f,w,m]),Ra=l.useCallback(e=>{if(!(r!=null&&r.enabled))return;const s=Ya(g,e,r.type);if(me(s),r.onSelectionChange){const i=n.data.filter(h=>s.includes(R(h,r.getRowKey)));r.onSelectionChange(s,i)}},[g,r,n.data]),Ta=l.useCallback(()=>{if(!(r!=null&&r.enabled)||r.type==="radio")return;const e=n.data.map(i=>R(i,r.getRowKey)),s=g.length===e.length?[]:e;if(me(s),r.onSelectionChange){const i=s.length>0?n.data:[];r.onSelectionChange(s,i)}},[g,r,n.data]),za=l.useCallback(e=>{const s=E.find(h=>h.id===e);if(!s)return;const i=n.data.filter(h=>g.includes(R(h,r==null?void 0:r.getRowKey)));s.confirmMessage&&!window.confirm(s.confirmMessage)||s.onClick(i)},[E,n.data,g,r]),Pa=l.useCallback(()=>{if(!P||!re)return;const e=g.length>0?n.data.filter(s=>g.includes(R(s,r==null?void 0:r.getRowKey))):n.data;re(e)},[P,re,n.data,g,r]),Va=l.useCallback(e=>{o!=null&&o.enabled&&(Ca(e.currentTarget.scrollTop),o.onScroll&&o.onScroll(e.currentTarget.scrollTop))},[o]),$a={sm:"text-xs",md:"text-sm",lg:"text-base"},k={sm:"px-2 py-1",md:"px-3 py-2",lg:"px-4 py-3"},La={default:"",striped:"[&>tbody>tr:nth-child(odd)]:bg-gray-50",bordered:"border border-gray-200"},qa=()=>a.jsx("thead",{ref:ka,className:`bg-gray-50 ${xa?"sticky top-0 z-10":""}`,children:a.jsxs("tr",{children:[(r==null?void 0:r.enabled)&&a.jsx("th",{className:`${k[S]} w-12`,children:r.type==="checkbox"&&r.selectAll!==!1&&a.jsx(he,{checked:g.length===n.data.length&&n.data.length>0,onChange:Ta,"aria-label":"Select all rows"})}),C.map(e=>a.jsx("th",{className:`
              ${k[S]}
              text-left font-medium text-gray-900
              ${e.sortable?"cursor-pointer hover:bg-gray-100":""}
              ${e.align==="center"?"text-center":""}
              ${e.align==="right"?"text-right":""}
            `,style:{width:e.width,minWidth:e.minWidth,maxWidth:e.maxWidth},onClick:()=>e.sortable&&Ea(String(e.key)),"aria-sort":Qa(String(e.key),f,w),children:a.jsxs("div",{className:"flex items-center gap-1",children:[e.headerRender?e.headerRender():e.title,e.sortable&&a.jsxs("div",{className:"flex flex-col",children:[a.jsx("span",{className:`text-xs ${f===String(e.key)&&w==="asc"?"text-blue-600":"text-gray-400"}`,children:"▲"}),a.jsx("span",{className:`text-xs -mt-1 ${f===String(e.key)&&w==="desc"?"text-blue-600":"text-gray-400"}`,children:"▼"})]}),e.filterable&&a.jsx("span",{className:"text-xs text-gray-400",children:"🔍"})]})},String(e.key))),y&&a.jsx("th",{className:`${k[S]} w-12`,children:a.jsx("span",{className:"sr-only",children:"Expand"})})]})}),ge=(e,s)=>{const i=R(e,r==null?void 0:r.getRowKey),h=g.includes(i),D=$.includes(i);return a.jsxs(Ka.Fragment,{children:[a.jsxs("tr",{className:`
            ${h?Da.secondary:"hover:bg-gray-50"}
            ${T?"cursor-pointer":""}
            transition-colors duration-150
          `,onClick:()=>T==null?void 0:T(e,s),onDoubleClick:()=>te==null?void 0:te(e,s),children:[(r==null?void 0:r.enabled)&&a.jsx("td",{className:k[S],children:a.jsx(he,{checked:h,onChange:()=>Ra(i),"aria-label":`Select row ${s+1}`})}),C.map(x=>{const j=Za(e,String(x.key));return a.jsx("td",{className:`
                  ${k[S]}
                  ${x.align==="center"?"text-center":""}
                  ${x.align==="right"?"text-right":""}
                  ${z?"cursor-pointer":""}
                `,onClick:q=>{q.stopPropagation(),z==null||z(j,e,x)},children:x.render?x.render(j,e,s):et(j,x)},String(x.key))}),y&&a.jsx("td",{className:k[S],children:a.jsx(N,{variant:"ghost",size:"sm",onClick:x=>{var q;x.stopPropagation();const j=$.includes(i)?$.filter(Ha=>Ha!==i):[...$,i];ja(j),(q=y.onExpand)==null||q.call(y,!D,e)},"aria-label":D?"Collapse row":"Expand row",children:D?a.jsx("span",{className:"text-sm",children:"▲"}):a.jsx("span",{className:"text-sm",children:"▼"})})})]}),y&&D&&a.jsx("tr",{children:a.jsx("td",{colSpan:C.length+(r!=null&&r.enabled?1:0)+1,className:"p-0",children:a.jsx("div",{className:"bg-gray-50 p-4",children:y.expandedRowRender(e)})})})]},i)},Ma=()=>{if(!pe)return null;const{start:e,end:s,totalHeight:i,offsetY:h}=pe,D=n.data.slice(e,s+1);return a.jsxs("tbody",{style:{height:i},children:[a.jsx("tr",{style:{height:h},children:a.jsx("td",{colSpan:C.length+(r!=null&&r.enabled?1:0)+(y?1:0)})}),D.map((x,j)=>ge(x,e+j))]})},Aa=()=>a.jsx("tbody",{children:n.data.map((e,s)=>ge(e,s))});return ee?a.jsxs("div",{className:"flex items-center justify-center p-8",children:[a.jsx(Wa,{size:"lg"}),a.jsx("span",{className:"ml-2 text-gray-600",children:"Loading..."})]}):n.data.length===0?a.jsx(Ua,{title:"No data available",description:V?"No results found for your search.":"There are no items to display.",actions:V?a.jsx(N,{onClick:()=>de(""),children:"Clear search"}):void 0}):a.jsxs("div",{className:`${fa}`,style:va,children:[((d==null?void 0:d.enabled)!==!1||E.length>0||P)&&a.jsxs("div",{className:"mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[a.jsx("div",{className:"flex flex-1 items-center gap-4",children:(d==null?void 0:d.searchable)!==!1&&a.jsx("div",{className:"flex-1 max-w-sm",children:a.jsx(Ba,{name:"search",placeholder:(d==null?void 0:d.searchPlaceholder)||"Search...",onChange:e=>Na(e.target.value),className:"w-full"})})}),a.jsxs("div",{className:"flex items-center gap-2",children:[g.length>0&&E.length>0&&a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("span",{className:"text-sm text-gray-600",children:[g.length," selected"]}),E.map(e=>a.jsx(N,{variant:e.variant||"secondary",size:"sm",onClick:()=>za(e.id),disabled:e.disabled,children:e.label},e.id))]}),P&&a.jsx(N,{variant:"outline",size:"sm",onClick:Pa,children:"Export"})]})]}),a.jsx("div",{ref:ne,className:`
          overflow-auto border border-gray-200 rounded-lg
          ${ie?"":"max-h-96"}
        `,style:{maxHeight:ie},onScroll:Va,children:a.jsxs("table",{className:`
            min-w-full divide-y divide-gray-200
            ${$a[S]}
            ${La[ha]}
          `,"aria-label":ba,"aria-labelledby":ya,children:[qa(),o!=null&&o.enabled?Ma():Aa()]})}),(p==null?void 0:p.enabled)!==!1&&!(o!=null&&o.enabled)&&n.totalPages>1&&a.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[a.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",(v-1)*L+1," to ",Math.min(v*L,n.filteredTotal)," of ",n.filteredTotal," results"]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(N,{variant:"outline",size:"sm",onClick:()=>se(Math.max(1,v-1)),disabled:v===1,children:"Previous"}),a.jsxs("span",{className:"text-sm text-gray-700",children:["Page ",v," of ",n.totalPages]}),a.jsx(N,{variant:"outline",size:"sm",onClick:()=>se(Math.min(n.totalPages,v+1)),disabled:v===n.totalPages,children:"Next"})]})]})]})};try{oe.displayName="DataTable",oe.__docgenInfo={description:"",displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},context:{defaultValue:{value:"neutral"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"consultant"'},{value:'"client"'},{value:'"admin"'},{value:'"expert"'},{value:'"tool-creator"'},{value:'"founder"'},{value:'"neutral"'}]}},permissions:{defaultValue:{value:"[]"},description:"",name:"permissions",required:!1,type:{name:"string[]"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"PaginationConfig"}},sorting:{defaultValue:null,description:"",name:"sorting",required:!1,type:{name:"SortingConfig"}},filtering:{defaultValue:null,description:"",name:"filtering",required:!1,type:{name:"FilteringConfig"}},selection:{defaultValue:null,description:"",name:"selection",required:!1,type:{name:"SelectionConfig<T>"}},bulkActions:{defaultValue:{value:"[]"},description:"",name:"bulkActions",required:!1,type:{name:"BulkAction[]"}},virtualScrolling:{defaultValue:null,description:"",name:"virtualScrolling",required:!1,type:{name:"VirtualScrollConfig"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T, index: number) => void"}},onRowDoubleClick:{defaultValue:null,description:"",name:"onRowDoubleClick",required:!1,type:{name:"(row: T, index: number) => void"}},onCellClick:{defaultValue:null,description:"",name:"onCellClick",required:!1,type:{name:"(value: any, row: T, column: TableColumn<T>) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"striped"'},{value:'"bordered"'}]}},responsive:{defaultValue:{value:"true"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"{ expandedRowRender: (row: T) => ReactNode; expandedRowKeys?: string[]; onExpand?: (expanded: boolean, row: T) => void; }"}},exportable:{defaultValue:{value:"false"},description:"",name:"exportable",required:!1,type:{name:"boolean"}},onExport:{defaultValue:null,description:"",name:"onExport",required:!1,type:{name:"(data: T[]) => void"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const c=[{id:"1",name:"John Doe",email:"john@example.com",role:"Senior Developer",status:"active",lastLogin:new Date("2024-01-15"),projects:3,revenue:125e3},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Project Manager",status:"active",lastLogin:new Date("2024-01-14"),projects:5,revenue:18e4},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Designer",status:"inactive",lastLogin:new Date("2024-01-10"),projects:2,revenue:95e3},{id:"4",name:"Alice Brown",email:"alice@example.com",role:"Developer",status:"pending",lastLogin:new Date("2024-01-12"),projects:1,revenue:75e3},{id:"5",name:"Charlie Wilson",email:"charlie@example.com",role:"Consultant",status:"active",lastLogin:new Date("2024-01-16"),projects:4,revenue:2e5}],pa=[{id:"1",name:"Website Redesign",client:"Acme Corp",status:"active",progress:75,startDate:new Date("2024-01-01"),endDate:new Date("2024-03-01"),budget:5e4,team:["John Doe","Jane Smith"]},{id:"2",name:"Mobile App Development",client:"Tech Startup",status:"planning",progress:25,startDate:new Date("2024-02-01"),endDate:new Date("2024-06-01"),budget:12e4,team:["Bob Johnson","Alice Brown"]},{id:"3",name:"E-commerce Platform",client:"Retail Giant",status:"completed",progress:100,startDate:new Date("2023-10-01"),endDate:new Date("2024-01-01"),budget:2e5,team:["Charlie Wilson","John Doe","Jane Smith"]}],u=[{key:"name",title:"Name",sortable:!0,filterable:!0,width:200},{key:"email",title:"Email",sortable:!0,filterable:!0,width:250},{key:"role",title:"Role",sortable:!0,filterable:!0,width:150},{key:"status",title:"Status",sortable:!0,filterable:!0,width:120,render:t=>a.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t==="active"?"bg-green-100 text-green-800":t==="inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:t})},{key:"lastLogin",title:"Last Login",sortable:!0,width:150,render:t=>t.toLocaleDateString()},{key:"projects",title:"Projects",sortable:!0,width:100,align:"center"},{key:"revenue",title:"Revenue",sortable:!0,width:120,align:"right",render:t=>`$${t.toLocaleString()}`}],ga=[{key:"name",title:"Project Name",sortable:!0,filterable:!0,width:200},{key:"client",title:"Client",sortable:!0,filterable:!0,width:150},{key:"status",title:"Status",sortable:!0,filterable:!0,width:120,render:t=>a.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t==="active"?"bg-blue-100 text-blue-800":t==="completed"?"bg-green-100 text-green-800":t==="planning"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:t})},{key:"progress",title:"Progress",sortable:!0,width:150,render:t=>a.jsxs("div",{className:"w-full bg-gray-200 rounded-full h-2",children:[a.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:`${t}%`}}),a.jsxs("span",{className:"text-xs text-gray-600 ml-2",children:[t,"%"]})]})},{key:"budget",title:"Budget",sortable:!0,width:120,align:"right",render:t=>`$${t.toLocaleString()}`},{key:"team",title:"Team Size",width:100,align:"center",render:t=>t.length}],$r={title:"Layouts/Data Display/DataTable",component:oe,parameters:{layout:"padded",docs:{description:{component:`
A comprehensive data table component with advanced features including:

- **Sorting & Filtering**: Column-based sorting and search functionality
- **Selection**: Single or multi-row selection with bulk actions
- **Pagination**: Built-in pagination with customizable page sizes
- **Virtual Scrolling**: Performance optimization for large datasets
- **Workspace Context**: Adaptive styling based on user role
- **Responsive Design**: Mobile-friendly with horizontal scrolling
- **Accessibility**: Full ARIA support and keyboard navigation
- **Export**: Data export functionality
- **Expandable Rows**: Nested content support

Perfect for displaying complex data sets in admin panels, dashboards, and data management interfaces.
        `}}},argTypes:{context:{control:"select",options:["consultant","client","admin","expert","tool-creator","founder","neutral"],description:"Workspace context for adaptive styling"},size:{control:"select",options:["sm","md","lg"],description:"Table size variant"},variant:{control:"select",options:["default","striped","bordered"],description:"Table visual variant"},loading:{control:"boolean",description:"Loading state"},responsive:{control:"boolean",description:"Enable responsive behavior"},stickyHeader:{control:"boolean",description:"Make header sticky on scroll"},exportable:{control:"boolean",description:"Enable export functionality"}}},M={args:{data:c,columns:u,context:"neutral",size:"md",variant:"default"}},A={args:{data:c,columns:u,context:"consultant",size:"md"}},H={args:{data:pa,columns:ga,context:"client",size:"md"}},U={args:{data:c,columns:u,selection:{enabled:!0,type:"checkbox",selectedKeys:["1","3"]},bulkActions:[{id:"activate",label:"Activate",variant:"primary",onClick:t=>console.log("Activate:",t)},{id:"deactivate",label:"Deactivate",variant:"secondary",onClick:t=>console.log("Deactivate:",t)},{id:"delete",label:"Delete",variant:"danger",confirmMessage:"Are you sure you want to delete selected users?",onClick:t=>console.log("Delete:",t)}]}},B={args:{data:[...c,...c,...c],columns:u,pagination:{enabled:!0,page:1,pageSize:5,total:15,showSizeChanger:!0,showTotal:!0}}},W={args:{data:c,columns:u,filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search users..."}}},K={args:{data:[],columns:u,loading:!0}},_={args:{data:[],columns:u,loading:!1}},F={args:{data:c,columns:u,variant:"striped"}},J={args:{data:c,columns:u,variant:"bordered"}},I={args:{data:c,columns:u,size:"sm"}},G={args:{data:c,columns:u,size:"lg"}},O={args:{data:[...c,...c,...c],columns:u,stickyHeader:!0,maxHeight:400}},Y={args:{data:pa,columns:ga,expandable:{expandedRowRender:t=>a.jsxs("div",{className:"p-4 bg-gray-50",children:[a.jsx("h4",{className:"font-semibold mb-2",children:"Project Details"}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Start Date:"})," ",t.startDate.toLocaleDateString()]}),a.jsxs("p",{children:[a.jsx("strong",{children:"End Date:"})," ",t.endDate.toLocaleDateString()]})]}),a.jsxs("div",{children:[a.jsx("p",{children:a.jsx("strong",{children:"Team Members:"})}),a.jsx("ul",{className:"list-disc list-inside",children:t.team.map((b,ee)=>a.jsx("li",{children:b},ee))})]})]})]})}}},Q={args:{data:c,columns:u,exportable:!0,onExport:t=>{console.log("Exporting data:",t)}}},X={args:{data:c,columns:u,context:"admin",size:"md",variant:"striped",selection:{enabled:!0,type:"checkbox"},pagination:{enabled:!0,page:1,pageSize:3,total:c.length,showSizeChanger:!0,showTotal:!0},filtering:{enabled:!0,searchable:!0,searchPlaceholder:"Search users..."},sorting:{field:"name",direction:"asc"},bulkActions:[{id:"export-selected",label:"Export Selected",variant:"secondary",onClick:t=>console.log("Export selected:",t)},{id:"bulk-edit",label:"Bulk Edit",variant:"primary",onClick:t=>console.log("Bulk edit:",t)}],exportable:!0,stickyHeader:!0,responsive:!0,onRowClick:t=>console.log("Row clicked:",t),onExport:t=>console.log("Export all:",t)}},Z={args:{data:Array.from({length:1e3},(t,b)=>({id:`${b+1}`,name:`User ${b+1}`,email:`user${b+1}@example.com`,role:["Developer","Designer","Manager"][b%3],status:["active","inactive","pending"][b%3],lastLogin:new Date(2024,0,b%30+1),projects:Math.floor(Math.random()*10),revenue:Math.floor(Math.random()*2e5)})),columns:u,virtualScrolling:{enabled:!0,itemHeight:48,overscan:5},maxHeight:400}};var xe,be,ye;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'neutral',
    size: 'md',
    variant: 'default'
  }
}`,...(ye=(be=M.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var fe,ve,we;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'consultant',
    size: 'md'
  }
}`,...(we=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Se,je,Ce;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    data: sampleProjects,
    columns: projectColumns as any,
    context: 'client',
    size: 'md'
  }
}`,...(Ce=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var ke,De,Ne;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    selection: {
      enabled: true,
      type: 'checkbox',
      selectedKeys: ['1', '3']
    },
    bulkActions: [{
      id: 'activate',
      label: 'Activate',
      variant: 'primary',
      onClick: rows => console.log('Activate:', rows)
    }, {
      id: 'deactivate',
      label: 'Deactivate',
      variant: 'secondary',
      onClick: rows => console.log('Deactivate:', rows)
    }, {
      id: 'delete',
      label: 'Delete',
      variant: 'danger',
      confirmMessage: 'Are you sure you want to delete selected users?',
      onClick: rows => console.log('Delete:', rows)
    }]
  }
}`,...(Ne=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Ee,Re,Te;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    // Duplicate data for pagination demo
    columns: userColumns as any,
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 5,
      total: 15,
      showSizeChanger: true,
      showTotal: true
    }
  }
}`,...(Te=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var ze,Pe,Ve;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...'
    }
  }
}`,...(Ve=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var $e,Le,qe;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns as any,
    loading: true
  }
}`,...(qe=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Me,Ae,He;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns as any,
    loading: false
  }
}`,...(He=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Ue,Be,We;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    variant: 'striped'
  }
}`,...(We=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Ke,_e,Fe;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    variant: 'bordered'
  }
}`,...(Fe=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Je,Ie,Ge;I.parameters={...I.parameters,docs:{...(Je=I.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    size: 'sm'
  }
}`,...(Ge=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Ge.source}}};var Oe,Ye,Qe;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    size: 'lg'
  }
}`,...(Qe=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Xe,Ze,ea;O.parameters={...O.parameters,docs:{...(Xe=O.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    columns: userColumns as any,
    stickyHeader: true,
    maxHeight: 400
  }
}`,...(ea=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,ra;Y.parameters={...Y.parameters,docs:{...(aa=Y.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    data: sampleProjects,
    columns: projectColumns as any,
    expandable: {
      expandedRowRender: (project: any) => <div className="p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">Project Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Start Date:</strong> {project.startDate.toLocaleDateString()}</p>
              <p><strong>End Date:</strong> {project.endDate.toLocaleDateString()}</p>
            </div>
            <div>
              <p><strong>Team Members:</strong></p>
              <ul className="list-disc list-inside">
                {project.team.map((member: string, index: number) => <li key={index}>{member}</li>)}
              </ul>
            </div>
          </div>
        </div>
    }
  }
}`,...(ra=(ta=Y.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var sa,na,oa;Q.parameters={...Q.parameters,docs:{...(sa=Q.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    exportable: true,
    onExport: data => {
      console.log('Exporting data:', data);
      // In a real app, this would trigger a download
    }
  }
}`,...(oa=(na=Q.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var la,ia,da;X.parameters={...X.parameters,docs:{...(la=X.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns as any,
    context: 'admin',
    size: 'md',
    variant: 'striped',
    selection: {
      enabled: true,
      type: 'checkbox'
    },
    pagination: {
      enabled: true,
      page: 1,
      pageSize: 3,
      total: sampleUsers.length,
      showSizeChanger: true,
      showTotal: true
    },
    filtering: {
      enabled: true,
      searchable: true,
      searchPlaceholder: 'Search users...'
    },
    sorting: {
      field: 'name',
      direction: 'asc'
    },
    bulkActions: [{
      id: 'export-selected',
      label: 'Export Selected',
      variant: 'secondary',
      onClick: rows => console.log('Export selected:', rows)
    }, {
      id: 'bulk-edit',
      label: 'Bulk Edit',
      variant: 'primary',
      onClick: rows => console.log('Bulk edit:', rows)
    }],
    exportable: true,
    stickyHeader: true,
    responsive: true,
    onRowClick: row => console.log('Row clicked:', row),
    onExport: data => console.log('Export all:', data)
  }
}`,...(da=(ia=X.parameters)==null?void 0:ia.docs)==null?void 0:da.source}}};var ca,ma,ua;Z.parameters={...Z.parameters,docs:{...(ca=Z.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
    columns: userColumns as any,
    virtualScrolling: {
      enabled: true,
      itemHeight: 48,
      overscan: 5
    },
    maxHeight: 400
  }
}`,...(ua=(ma=Z.parameters)==null?void 0:ma.docs)==null?void 0:ua.source}}};const Lr=["Default","ConsultantContext","ClientContext","WithSelection","WithPagination","WithFiltering","Loading","Empty","Striped","Bordered","SmallSize","LargeSize","StickyHeader","ExpandableRows","WithExport","ComplexExample","VirtualScrolling"];export{J as Bordered,H as ClientContext,X as ComplexExample,A as ConsultantContext,M as Default,_ as Empty,Y as ExpandableRows,G as LargeSize,K as Loading,I as SmallSize,O as StickyHeader,F as Striped,Z as VirtualScrolling,Q as WithExport,W as WithFiltering,B as WithPagination,U as WithSelection,Lr as __namedExportsOrder,$r as default};
