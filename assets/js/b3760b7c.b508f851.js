"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[40730],{36870:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(85893),n=r(11151);const a={id:"data-type-selector",title:"Data type selector"},i=void 0,s={id:"php/filters/block/form/data-type-selector",title:"Data type selector",description:"This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend.",source:"@site/forms/php/filters/block/form/data-type-selector.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/data-type-selector",permalink:"/forms/php/filters/block/form/data-type-selector",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"data-type-selector",title:"Data type selector"},sidebar:"forms",previous:{title:"Tracking additional data",permalink:"/forms/php/filters/block/form/tracking-additional-data"},next:{title:"Phone sync",permalink:"/forms/php/filters/block/form/phone-sync"}},l={},c=[];function d(t){const e={code:"code",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend."}),"\n",(0,o.jsxs)(e.p,{children:["In other words, you can use this filter to change the value of the ",(0,o.jsx)(e.code,{children:"formDataTypeSelector"})," attribute during a form render.\nThe attribute is used to output a ",(0,o.jsx)(e.code,{children:"data-type-selector"})," HTML attribute of the form element."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_data_type_selector', [$this 'getFormDataTypeSelector'], 10, 2);\n\n/**\n * Changing the form type selector on render\n * This filter will override the attribute-provided type selector for a Form component.\n * Passes form component attributes to the callback function as well, so you can check all sorts of conditions when filtering.\n *\n * In other words, you can use this filter to change the value of the `formDataTypeSelector` attribute during a form render.\n * The attribute is used to output a `data-type-selector` HTML attribute of the form element.\n *\n * @param string $selector The data type selector to filter.\n * @param array<mixed> $attr Form component attributes.\n *\n * @return string Filtered value.\n */\npublic function getFormDataTypeSelector(string $selector, array $attr): string\n{\n\tif (($attr['formType'] ?? '') === 'mailchimp') {\n\t\treturn '';\n\t}\n\n\treturn 'my-new-selector';\n}\n"})})]})}function p(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var o=r(67294);const n={},a=o.createContext(n);function i(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);