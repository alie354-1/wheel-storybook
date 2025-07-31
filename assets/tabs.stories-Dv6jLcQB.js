import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{B as t}from"./button-ZqfPLS5u.js";import{C as n,a as o,b as d,c,d as l,e as i}from"./card-M3SK2Azw.js";import{I as a}from"./input-BtB_vA0w.js";import{L as r}from"./label-Bc71zScC.js";import{T as x,a as w,b as m,c as u}from"./tabs-CYGLg6Rb.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./index-BACk8Kjg.js";import"./index-CFX93qP1.js";import"./index-C0-VfTUy.js";import"./index-BAk7S-tT.js";import"./index-DVrBHfCr.js";import"./index-D8c-22H5.js";import"./index-ciuW_uyV.js";import"./index-CvtFoTXF.js";const E={title:"UI/Tabs",component:x,tags:["autodocs"]},s={render:j=>e.jsxs(x,{defaultValue:"account",className:"w-[400px]",...j,children:[e.jsxs(w,{className:"grid w-full grid-cols-2",children:[e.jsx(m,{value:"account",children:"Account"}),e.jsx(m,{value:"password",children:"Password"})]}),e.jsx(u,{value:"account",children:e.jsxs(n,{children:[e.jsxs(o,{children:[e.jsx(d,{children:"Account"}),e.jsx(c,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"name",children:"Name"}),e.jsx(a,{id:"name",name:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"username",children:"Username"}),e.jsx(a,{id:"username",name:"username",defaultValue:"@peduarte"})]})]}),e.jsx(i,{children:e.jsx(t,{children:"Save changes"})})]})}),e.jsx(u,{value:"password",children:e.jsxs(n,{children:[e.jsxs(o,{children:[e.jsx(d,{children:"Password"}),e.jsx(c,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"current",children:"Current password"}),e.jsx(a,{id:"current",name:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"new",children:"New password"}),e.jsx(a,{id:"new",name:"new",type:"password"})]})]}),e.jsx(i,{children:e.jsx(t,{children:"Save password"})})]})})]}),args:{}};var p,h,C;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,E as default};
