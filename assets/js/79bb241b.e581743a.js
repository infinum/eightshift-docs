"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[37168],{75728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var l=n(85893),r=n(11151);const s={id:"set-locale",title:"Set locale"},o=void 0,i={id:"php/filters/general/set-locale",title:"Set locale",description:"This filter can be used to change the value of current locale. By default, WordPress sets the locale in the admin to en_US. With this filter it can be changed to any locale (e.g. when using a multilingual plugin).",source:"@site/forms/php/filters/general/set-locale.md",sourceDirName:"php/filters/general",slug:"/php/filters/general/set-locale",permalink:"/forms/php/filters/general/set-locale",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"set-locale",title:"Set locale"},sidebar:"forms",previous:{title:"HTTP request timeout",permalink:"/forms/php/filters/general/http-request-timeout"},next:{title:"Scripts dependency",permalink:"/forms/php/filters/general/scripts-dependency"}},a={},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["This filter can be used to change the value of current locale. By default, WordPress sets the locale in the admin to ",(0,l.jsx)(t.code,{children:"en_US"}),". With this filter it can be changed to any locale (e.g. when using a multilingual plugin)."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"add_filter('es_forms_general_set_locale', function(string $locale): string {\n\t// Get the custom locale (e.g. from the WPML plugin).\n\treturn $locale;\n})\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var l=n(67294);const r={},s=l.createContext(r);function o(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);