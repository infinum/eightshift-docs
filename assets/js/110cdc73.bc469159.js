"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[90393],{36177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(85893),s=t(11151);const i={id:"dependency-theme",title:"Dependency theme"},c=void 0,o={id:"php/filters/scripts/dependency-theme",title:"Dependency theme",description:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).",source:"@site/forms/php/filters/scripts/dependency-theme.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/dependency-theme",permalink:"/forms/php/filters/scripts/dependency-theme",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependency-theme",title:"Dependency theme"},sidebar:"forms",previous:{title:"Dependency admin",permalink:"/forms/php/filters/scripts/dependency-admin"},next:{title:"Dependency blocks editor",permalink:"/forms/php/filters/scripts/dependency-blocks-editor"}},d={},p=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_dependency_theme', [$this, 'getScriptsDependency']);\n\n/**\n * Load add-on scripts before Forms scripts.\n *\n * @return array<int, string>\n */\npublic function getScriptsDependency(): array\n{\n\treturn [\n\t\t'<script-handle-name>',\n\t];\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);