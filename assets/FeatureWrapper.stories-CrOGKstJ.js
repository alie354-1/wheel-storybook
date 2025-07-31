import{j as e}from"./jsx-runtime-BdivIsZm.js";import{r as O,R as I}from"./vendor-CIaSNbmr.js";const P=O.createContext({isEnabled:()=>!0}),K=()=>O.useContext(P),L=K,r=({featureName:s,fallback:t=null,children:p})=>{const{isEnabled:a}=L();return a(s)?e.jsx(e.Fragment,{children:p}):e.jsx(e.Fragment,{children:t})},V=jest.requireActual("@wheel/layouts/providers/FeatureFlagProvider");jest.mock("@wheel/layouts/providers/FeatureFlagProvider",()=>({...V,useFeatureFlags:()=>({isEnabled:s=>(window.__STORYBOOK_ENABLED_FEATURES__||[]).includes(s)})}));const M={title:"Workspace/FeatureWrapper",component:r,parameters:{layout:"padded",docs:{description:{component:"A wrapper component that conditionally renders children based on feature flag status. Useful for A/B testing and gradual feature rollouts."}}},tags:["autodocs"],argTypes:{featureName:{control:"text",description:"The name of the feature flag to check"},fallback:{control:"text",description:"Content to show when feature is disabled"},children:{control:"text",description:"Content to show when feature is enabled"}}},l=s=>t=>(window.__STORYBOOK_ENABLED_FEATURES__=s,t),d={args:{featureName:"new-dashboard",children:e.jsxs("div",{className:"p-4 bg-green-100 border border-green-300 rounded",children:[e.jsx("h3",{className:"text-green-800 font-semibold",children:"New Dashboard Feature"}),e.jsx("p",{className:"text-green-700",children:"This is the new dashboard that's currently enabled!"})]}),fallback:e.jsxs("div",{className:"p-4 bg-gray-100 border border-gray-300 rounded",children:[e.jsx("h3",{className:"text-gray-800 font-semibold",children:"Classic Dashboard"}),e.jsx("p",{className:"text-gray-700",children:"This is the fallback content when the feature is disabled."})]})},decorators:[l(["new-dashboard"])]},o={args:{featureName:"new-dashboard",children:e.jsxs("div",{className:"p-4 bg-green-100 border border-green-300 rounded",children:[e.jsx("h3",{className:"text-green-800 font-semibold",children:"New Dashboard Feature"}),e.jsx("p",{className:"text-green-700",children:"This is the new dashboard that's currently enabled!"})]}),fallback:e.jsxs("div",{className:"p-4 bg-gray-100 border border-gray-300 rounded",children:[e.jsx("h3",{className:"text-gray-800 font-semibold",children:"Classic Dashboard"}),e.jsx("p",{className:"text-gray-700",children:"This is the fallback content when the feature is disabled."})]})},decorators:[l([])]},c={args:{featureName:"beta-feature",children:e.jsxs("div",{className:"p-4 bg-blue-100 border border-blue-300 rounded",children:[e.jsx("h3",{className:"text-blue-800 font-semibold",children:"Beta Feature"}),e.jsx("p",{className:"text-blue-700",children:"This beta feature is only shown when enabled."})]})},decorators:[l([])]},n={args:{featureName:"advanced-analytics",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-purple-100 border border-purple-300 rounded",children:[e.jsx("h3",{className:"text-purple-800 font-semibold",children:"Advanced Analytics"}),e.jsx("p",{className:"text-purple-700",children:"Advanced analytics dashboard with real-time data."})]}),e.jsx(r,{featureName:"export-feature",children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700",children:"Export Data"})})]}),fallback:e.jsxs("div",{className:"p-4 bg-gray-100 border border-gray-300 rounded",children:[e.jsx("h3",{className:"text-gray-800 font-semibold",children:"Basic Analytics"}),e.jsx("p",{className:"text-gray-700",children:"Basic analytics view with limited features."})]})},decorators:[l(["advanced-analytics","export-feature"])]},i={args:{featureName:"new-ui",children:e.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"New UI Design"}),e.jsx("p",{className:"mb-4",children:"Experience our redesigned interface with modern styling."}),e.jsx("button",{className:"px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100",children:"Get Started"})]}),fallback:e.jsxs("div",{className:"p-6 bg-white border-2 border-gray-300 rounded",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2 text-gray-800",children:"Classic Interface"}),e.jsx("p",{className:"mb-4 text-gray-600",children:"The familiar interface you know and trust."}),e.jsx("button",{className:"px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700",children:"Continue"})]})},decorators:[l(["new-ui"])]},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Feature Flag Hierarchy"}),e.jsx(r,{featureName:"workspace-v2",children:e.jsxs("div",{className:"p-4 bg-green-100 border border-green-300 rounded",children:[e.jsx("h3",{className:"text-green-800 font-semibold",children:"Workspace V2"}),e.jsx(r,{featureName:"collaboration-tools",fallback:e.jsx("p",{className:"text-green-700",children:"Basic workspace features available."}),children:e.jsxs("div",{className:"mt-2 p-2 bg-green-200 rounded",children:[e.jsx("p",{className:"text-green-800",children:"Collaboration tools enabled!"}),e.jsx(r,{featureName:"real-time-editing",children:e.jsx("div",{className:"mt-2 p-2 bg-green-300 rounded",children:e.jsx("p",{className:"text-green-900",children:"Real-time editing available!"})})})]})})]})}),e.jsx(r,{featureName:"workspace-v2",fallback:e.jsxs("div",{className:"p-4 bg-gray-100 border border-gray-300 rounded",children:[e.jsx("h3",{className:"text-gray-800 font-semibold",children:"Workspace V1"}),e.jsx("p",{className:"text-gray-700",children:"Using the classic workspace interface."})]}),children:null})]}),decorators:[l(["workspace-v2","collaboration-tools"])]},b={render:()=>{const[s,t]=I.useState(["basic-feature"]),p=a=>{t(m=>m.includes(a)?m.filter(U=>U!==a):[...m,a]),window.__STORYBOOK_ENABLED_FEATURES__=s};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Feature Controls"}),e.jsx("div",{className:"space-y-2",children:["basic-feature","premium-feature","beta-feature"].map(a=>e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:s.includes(a),onChange:()=>p(a),className:"rounded"}),e.jsx("span",{className:"capitalize",children:a.replace("-"," ")})]},a))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{featureName:"basic-feature",fallback:e.jsx("div",{className:"p-3 bg-red-100 text-red-700 rounded",children:"Basic feature is disabled"}),children:e.jsx("div",{className:"p-3 bg-green-100 text-green-700 rounded",children:"Basic feature is enabled"})}),e.jsx(r,{featureName:"premium-feature",fallback:e.jsx("div",{className:"p-3 bg-yellow-100 text-yellow-700 rounded",children:"Premium feature requires upgrade"}),children:e.jsx("div",{className:"p-3 bg-blue-100 text-blue-700 rounded",children:"Premium feature is active"})}),e.jsx(r,{featureName:"beta-feature",children:e.jsx("div",{className:"p-3 bg-purple-100 text-purple-700 rounded",children:"Beta feature is available"})})]})]})}};var h,g,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    featureName: 'new-dashboard',
    children: <div className="p-4 bg-green-100 border border-green-300 rounded">
        <h3 className="text-green-800 font-semibold">New Dashboard Feature</h3>
        <p className="text-green-700">This is the new dashboard that's currently enabled!</p>
      </div>,
    fallback: <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Classic Dashboard</h3>
        <p className="text-gray-700">This is the fallback content when the feature is disabled.</p>
      </div>
  },
  decorators: [withFeatureFlags(['new-dashboard'])]
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var N,f,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    featureName: 'new-dashboard',
    children: <div className="p-4 bg-green-100 border border-green-300 rounded">
        <h3 className="text-green-800 font-semibold">New Dashboard Feature</h3>
        <p className="text-green-700">This is the new dashboard that's currently enabled!</p>
      </div>,
    fallback: <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Classic Dashboard</h3>
        <p className="text-gray-700">This is the fallback content when the feature is disabled.</p>
      </div>
  },
  decorators: [withFeatureFlags([])]
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,w,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    featureName: 'beta-feature',
    children: <div className="p-4 bg-blue-100 border border-blue-300 rounded">
        <h3 className="text-blue-800 font-semibold">Beta Feature</h3>
        <p className="text-blue-700">This beta feature is only shown when enabled.</p>
      </div>
    // No fallback provided - will show nothing when disabled
  },
  decorators: [withFeatureFlags([])]
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var j,k,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    featureName: 'advanced-analytics',
    children: <div className="space-y-4">
        <div className="p-4 bg-purple-100 border border-purple-300 rounded">
          <h3 className="text-purple-800 font-semibold">Advanced Analytics</h3>
          <p className="text-purple-700">Advanced analytics dashboard with real-time data.</p>
        </div>
        <FeatureWrapper featureName="export-feature">
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Export Data
          </button>
        </FeatureWrapper>
      </div>,
    fallback: <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-gray-800 font-semibold">Basic Analytics</h3>
        <p className="text-gray-700">Basic analytics view with limited features.</p>
      </div>
  },
  decorators: [withFeatureFlags(['advanced-analytics', 'export-feature'])]
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,B,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    featureName: 'new-ui',
    children: <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">New UI Design</h2>
        <p className="mb-4">Experience our redesigned interface with modern styling.</p>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>,
    fallback: <div className="p-6 bg-white border-2 border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Classic Interface</h2>
        <p className="mb-4 text-gray-600">The familiar interface you know and trust.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
          Continue
        </button>
      </div>
  },
  decorators: [withFeatureFlags(['new-ui'])]
}`,...(W=(B=i.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var T,C,D;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h2 className="text-xl font-bold">Feature Flag Hierarchy</h2>

      <FeatureWrapper featureName="workspace-v2">
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="text-green-800 font-semibold">Workspace V2</h3>

          <FeatureWrapper featureName="collaboration-tools" fallback={<p className="text-green-700">Basic workspace features available.</p>}>
            <div className="mt-2 p-2 bg-green-200 rounded">
              <p className="text-green-800">Collaboration tools enabled!</p>

              <FeatureWrapper featureName="real-time-editing">
                <div className="mt-2 p-2 bg-green-300 rounded">
                  <p className="text-green-900">Real-time editing available!</p>
                </div>
              </FeatureWrapper>
            </div>
          </FeatureWrapper>
        </div>
      </FeatureWrapper>

      <FeatureWrapper featureName="workspace-v2" fallback={<div className="p-4 bg-gray-100 border border-gray-300 rounded">
            <h3 className="text-gray-800 font-semibold">Workspace V1</h3>
            <p className="text-gray-700">Using the classic workspace interface.</p>
          </div>}>
        {null}
      </FeatureWrapper>
    </div>,
  decorators: [withFeatureFlags(['workspace-v2', 'collaboration-tools'])]
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var A,S,R;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [enabledFeatures, setEnabledFeatures] = React.useState<string[]>(['basic-feature']);
    const toggleFeature = (featureName: string) => {
      setEnabledFeatures(prev => prev.includes(featureName) ? prev.filter(f => f !== featureName) : [...prev, featureName]);
      (window as any).__STORYBOOK_ENABLED_FEATURES__ = enabledFeatures;
    };
    return <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-3">Feature Controls</h3>
          <div className="space-y-2">
            {['basic-feature', 'premium-feature', 'beta-feature'].map(feature => <label key={feature} className="flex items-center space-x-2">
                <input type="checkbox" checked={enabledFeatures.includes(feature)} onChange={() => toggleFeature(feature)} className="rounded" />
                <span className="capitalize">{feature.replace('-', ' ')}</span>
              </label>)}
          </div>
        </div>

        <div className="space-y-4">
          <FeatureWrapper featureName="basic-feature" fallback={<div className="p-3 bg-red-100 text-red-700 rounded">Basic feature is disabled</div>}>
            <div className="p-3 bg-green-100 text-green-700 rounded">Basic feature is enabled</div>
          </FeatureWrapper>

          <FeatureWrapper featureName="premium-feature" fallback={<div className="p-3 bg-yellow-100 text-yellow-700 rounded">Premium feature requires upgrade</div>}>
            <div className="p-3 bg-blue-100 text-blue-700 rounded">Premium feature is active</div>
          </FeatureWrapper>

          <FeatureWrapper featureName="beta-feature">
            <div className="p-3 bg-purple-100 text-purple-700 rounded">Beta feature is available</div>
          </FeatureWrapper>
        </div>
      </div>;
  }
}`,...(R=(S=b.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const z=["FeatureEnabled","FeatureDisabled","NoFallback","MultipleFeatures","ConditionalUI","NestedFeatures","InteractiveDemo"];export{i as ConditionalUI,o as FeatureDisabled,d as FeatureEnabled,b as InteractiveDemo,n as MultipleFeatures,u as NestedFeatures,c as NoFallback,z as __namedExportsOrder,M as default};
