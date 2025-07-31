import{j as e}from"./jsx-runtime-BdivIsZm.js";import{B as t}from"./button-BioF9M8P.js";import{C as n,a as d,b as o,c,d as l,e as i}from"./card-_h8jTILF.js";import{I as a}from"./input-Dghz61Zk.js";import{L as s}from"./label-M8x0GrR1.js";import{T as x,a as w,b as u,c as m}from"./tabs-BpPu-ig0.js";import"./vendor-CIaSNbmr.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./index-Xt719Idm.js";import"./index-DmaVp8Gi.js";import"./index-C_M4-wMA.js";import"./index-ClffgVbT.js";import"./index-DZjeVAfm.js";import"./index-Bhr8f8jx.js";import"./index-YRhHAZgY.js";const k={title:"UI/Tabs",component:x,tags:["autodocs"]},r={render:j=>e.jsxs(x,{defaultValue:"account",className:"w-[400px]",...j,children:[e.jsxs(w,{className:"grid w-full grid-cols-2",children:[e.jsx(u,{value:"account",children:"Account"}),e.jsx(u,{value:"password",children:"Password"})]}),e.jsx(m,{value:"account",children:e.jsxs(n,{children:[e.jsxs(d,{children:[e.jsx(o,{children:"Account"}),e.jsx(c,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"name",children:"Name"}),e.jsx(a,{id:"name",name:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"username",children:"Username"}),e.jsx(a,{id:"username",name:"username",defaultValue:"@peduarte"})]})]}),e.jsx(i,{children:e.jsx(t,{children:"Save changes"})})]})}),e.jsx(m,{value:"password",children:e.jsxs(n,{children:[e.jsxs(d,{children:[e.jsx(o,{children:"Password"}),e.jsx(c,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"current",children:"Current password"}),e.jsx(a,{id:"current",name:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"new",children:"New password"}),e.jsx(a,{id:"new",name:"new",type:"password"})]})]}),e.jsx(i,{children:e.jsx(t,{children:"Save password"})})]})})]}),args:{}};var p,h,C;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" name="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" name="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>,
  args: {}
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,k as default};
