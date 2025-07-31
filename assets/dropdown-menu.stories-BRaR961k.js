import{j as n}from"./jsx-runtime-BdivIsZm.js";import{B as w}from"./button-CVrJYqSg.js";import{D as s,a as M,b as c,c as D,d as e,e as l,f as o,g as r,h as v,i as B,j as T,k as P,l as a,m as R,n as i}from"./dropdown-menu-B74Grn0N.js";import"./vendor-CIaSNbmr.js";import"./index-DmaVp8Gi.js";import"./index-Xt719Idm.js";import"./index-ClffgVbT.js";import"./Combination-CfN0ooRb.js";import"./index-Bhr8f8jx.js";import"./index-DZjeVAfm.js";import"./floating-ui.dom-DtF1XweH.js";import"./index-Cnb6cu69.js";import"./index-YRhHAZgY.js";import"./index-C_M4-wMA.js";import"./cn-Bi5Kq-9L.js";import"./clsx-B-dksMZM.js";import"./supabase-_6SMTDjj.js";import"./chevron-right-DCSbz_2P.js";import"./createLucideIcon-CFfAzFt4.js";import"./check-BgTDyPES.js";import"./circle-CCrQh0AO.js";const Y={title:"UI/DropdownMenu",component:s,tags:["autodocs"]},d={render:t=>n.jsxs(s,{...t,children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open"})}),n.jsxs(c,{className:"w-56",children:[n.jsx(D,{children:"My Account"}),n.jsx(e,{}),n.jsxs(l,{children:[n.jsxs(o,{children:["Profile",n.jsx(r,{children:"⇧⌘P"})]}),n.jsxs(o,{children:["Billing",n.jsx(r,{children:"⌘B"})]}),n.jsxs(o,{children:["Settings",n.jsx(r,{children:"⌘S"})]}),n.jsxs(o,{children:["Keyboard shortcuts",n.jsx(r,{children:"⌘K"})]})]}),n.jsx(e,{}),n.jsxs(l,{children:[n.jsx(o,{children:"Team"}),n.jsxs(v,{children:[n.jsx(B,{children:"Invite users"}),n.jsx(T,{children:n.jsxs(P,{children:[n.jsx(o,{children:"Email"}),n.jsx(o,{children:"Message"}),n.jsx(e,{}),n.jsx(o,{children:"More..."})]})})]}),n.jsxs(o,{children:["New Team",n.jsx(r,{children:"⌘+T"})]})]}),n.jsx(e,{}),n.jsx(o,{children:"GitHub"}),n.jsx(o,{children:"Support"}),n.jsx(o,{disabled:!0,children:"API"}),n.jsx(e,{}),n.jsxs(o,{children:["Log out",n.jsx(r,{children:"⇧⌘Q"})]})]})]}),args:{}},u={render:t=>n.jsxs(s,{...t,children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open"})}),n.jsxs(c,{className:"w-56",children:[n.jsx(D,{children:"Appearance"}),n.jsx(e,{}),n.jsx(a,{checked:!0,children:"Show Status Bar"}),n.jsx(a,{children:"Show Activity Bar"}),n.jsx(a,{disabled:!0,children:"Show Panel"})]})]}),args:{}},p={render:t=>n.jsxs(s,{...t,children:[n.jsx(M,{asChild:!0,children:n.jsx(w,{variant:"outline",children:"Open"})}),n.jsxs(c,{className:"w-56",children:[n.jsx(D,{children:"Panel Position"}),n.jsx(e,{}),n.jsxs(R,{value:"bottom",children:[n.jsx(i,{value:"top",children:"Top"}),n.jsx(i,{value:"bottom",children:"Bottom"}),n.jsx(i,{value:"right",children:"Right"})]})]})]}),args:{}};var m,h,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  args: {}
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show Activity Bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem disabled>
          Show Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  args: {}
}`,...(S=(g=u.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var I,b,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>,
  args: {}
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Z=["Default","WithCheckboxes","WithRadioGroup"];export{d as Default,u as WithCheckboxes,p as WithRadioGroup,Z as __namedExportsOrder,Y as default};
