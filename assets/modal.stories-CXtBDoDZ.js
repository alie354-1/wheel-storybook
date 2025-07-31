import{j as e}from"./jsx-runtime-BdivIsZm.js";import{B as r}from"./button-CVrJYqSg.js";import{I as s}from"./input-Dghz61Zk.js";import{L as i}from"./label-M8x0GrR1.js";import{D as m,a as c,b as d,c as g,d as p,e as u,f as h}from"./modal-D4RiM4xB.js";import"./vendor-CIaSNbmr.js";import"./index-Xt719Idm.js";import"./clsx-B-dksMZM.js";import"./cn-Bi5Kq-9L.js";import"./supabase-_6SMTDjj.js";import"./index-DmaVp8Gi.js";import"./index-DZjeVAfm.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-YRhHAZgY.js";import"./x-DZ2Nmj4W.js";import"./createLucideIcon-CFfAzFt4.js";const P={title:"UI/Dialog",component:m,tags:["autodocs"]},a={render:n=>e.jsxs(m,{...n,children:[e.jsx(c,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(d,{className:"sm:max-w-[425px]",children:[e.jsxs(g,{children:[e.jsx(p,{children:"Edit profile"}),e.jsx(u,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",name:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",name:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(h,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]}),args:{}};var o,t,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" name="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>,
  args: {}
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,P as default};
