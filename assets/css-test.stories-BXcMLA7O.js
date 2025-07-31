import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=()=>e.jsxs("div",{children:[e.jsx("style",{children:`
        .raw-css-test {
          background-color: yellow;
          padding: 20px;
          border: 2px solid red;
          color: blue;
          font-size: 24px;
        }
      `}),e.jsx("div",{className:"raw-css-test",children:"Raw CSS Test - Should have yellow bg, red border, blue text"}),e.jsx("div",{className:"bg-blue-500 text-white p-4 mt-4",children:"Tailwind Test - Should have blue bg and white text"}),e.jsx("div",{style:{backgroundColor:"green",color:"white",padding:"10px",marginTop:"10px"},children:"Inline Style Test - Should have green bg"})]}),i={title:"Tests/CSS Test",component:n},r={render:()=>(console.log("CSS Test Story rendering"),e.jsx(n,{}))};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    console.log('CSS Test Story rendering');
    return <CSSTest />;
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const c=["Default"];export{r as Default,c as __namedExportsOrder,i as default};
