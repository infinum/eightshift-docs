"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[84570],{46107:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var r=s(74848),o=s(28453);const n={id:"routes-public",title:"Routes public"},i=void 0,c={id:"php/filters/scripts/routes-public",title:"Routes public",description:"Allows adding custom routes to the public routes list, available from the Forms global window object.",source:"@site/forms/php/filters/scripts/routes-public.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/routes-public",permalink:"/forms/php/filters/scripts/routes-public",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"routes-public",title:"Routes public"},sidebar:"forms",previous:{title:"Dependency blocks frontend",permalink:"/forms/php/filters/scripts/dependency-blocks-frontend"},next:{title:"Routes private",permalink:"/forms/php/filters/scripts/routes-private"}},l={},u=[];function p(t){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Allows adding custom routes to the public routes list, available from the Forms global window object."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_routes_public', [$this, 'getPublicRoutes']);\n\n/**\n * Adds custom routes to the public routes list, available from the Forms global window object.\n *\n * @return array<string>\n */\npublic function getPublicRoutes(): array\n{\n\treturn [\n\t\t'<route-name>' => '<route-slug>',\n\t];\n}\n"})})]})}function a(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var r=s(96540);const o={},n=r.createContext(o);function i(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);