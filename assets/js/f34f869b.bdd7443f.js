"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[44198],{70961:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const r={id:"tracking-additional-data",title:"Tracking additional data"},s=void 0,o={id:"php/filters/block/form/tracking-additional-data",title:"Tracking additional data",description:"This filter allows you to set additional data that is going to be sent in the dataLayer on certain events. This filter works great in combination with the Tracking event name filter.",source:"@site/forms/php/filters/block/form/tracking-additional-data.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/tracking-additional-data",permalink:"/forms/php/filters/block/form/tracking-additional-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tracking-additional-data",title:"Tracking additional data"},sidebar:"forms",previous:{title:"Tracking event name",permalink:"/forms/php/filters/block/form/tracking-event-name"},next:{title:"Data type selector",permalink:"/forms/php/filters/block/form/data-type-selector"}},l={},c=[];function d(t){const e={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["This filter allows you to set additional data that is going to be sent in the dataLayer on certain events. This filter works great in combination with the ",(0,a.jsx)(e.a,{href:"/forms/php/filters/block/form/tracking-event-name",children:"Tracking event name"})," filter."]}),"\n",(0,a.jsx)(e.p,{children:"You can add as many key/value pairs as you want. The data is sent as an array of arrays. The first value is the key and the second value is the value."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"We support three different keys:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"general - this data is sent on all events."}),"\n",(0,a.jsx)(e.li,{children:"success - this data is sent only on success event."}),"\n",(0,a.jsx)(e.li,{children:"error - this data is sent only on error event."}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-php",children:"add_filter('es_forms_block_form_tracking_additional_data', function(string $formType, string $formId): string {\n\treturn [\n\t\t'general' => [\n\t\t\t[\n\t\t\t\t'customKey',\n\t\t\t\t'customValue',\n\t\t\t],\n\t\t\t[\n\t\t\t\t'additionalKey',\n\t\t\t\t'additionalValue',\n\t\t\t],\n\t\t],\n\t\t'success' => [\n\t\t\t[\n\t\t\t\t'successKey',\n\t\t\t\t'successValue',\n\t\t\t],\n\t\t\t[\n\t\t\t\t'successAdditionalKey',\n\t\t\t\t'successAdditionalValue',\n\t\t\t],\n\t\t],\n\t\t'error' => [\n\t\t\t[\n\t\t\t\t'errorKey',\n\t\t\t\t'errorValue',\n\t\t\t],\n\t\t\t[\n\t\t\t\t'errorAdditionalKey',\n\t\t\t\t'errorAdditionalValue',\n\t\t\t],\n\t\t],\n\t];\n}, 10, 2);\n"})})]})}function f(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);