"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[69051],{53924:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=s(85893),n=s(11151);const i={id:"how-to-use",title:"How to use?"},l=void 0,r={id:"php/filters/how-to-use",title:"How to use?",description:"Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of filters that allow you to modify and extend the behavior of Forms to suit your specific needs.",source:"@site/forms/php/filters/how-to-use.md",sourceDirName:"php/filters",slug:"/php/filters/how-to-use",permalink:"/forms/php/filters/how-to-use",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"how-to-use",title:"How to use?"},sidebar:"forms",previous:{title:"WP-CLI",permalink:"/forms/php/wp-cli"},next:{title:"Custom form styles",permalink:"/forms/php/filters/block/forms/style-options"}},d={},a=[{value:"How to use filters",id:"how-to-use-filters",level:2},{value:"Testing with provided examples",id:"testing-with-provided-examples",level:3},{value:"Running all filter tests",id:"running-all-filter-tests",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of filters that allow you to modify and extend the behavior of Forms to suit your specific needs."}),"\n",(0,o.jsx)(t.p,{children:"Need to tweak form elements? No problem! Need custom validation rules? Sure! Want to add a custom action after form submission? We got you covered."}),"\n",(0,o.jsx)(t.p,{children:"Below you will find a list of filter and constants that can be set, with descriptions and examples of how to use them."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-use-filters",children:"How to use filters"}),"\n",(0,o.jsxs)(t.p,{children:["The list of all available filters can be found ",(0,o.jsx)(t.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php",children:"here"}),", along with descriptions and examples."]}),"\n",(0,o.jsx)(t.p,{children:"To use a filter, simply copy the code snippet from the example and paste it into your project, e.g."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_forms_style_options', [$this, 'getBlockFormsStyleOptions']);\n\n/**\n * Add additional style options to forms block.\n *\n * This filter will add new options to the style select dropdown in the forms block. Forms style option selector will not show unless a filter is provided. This option is shown in Block Editor.\n *\n * @return array<int, array<string, string>>\n */\npublic function getBlockFormsStyleOptions(): array\n{\n\treturn [\n\t\t[\n\t\t\t'label' => 'Default',\n\t\t\t'value' => 'default'\n\t\t],\n\t\t[\n\t\t\t'label' => 'Custom Style',\n\t\t\t'value' => 'custom-style'\n\t\t],\n\t];\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"testing-with-provided-examples",children:"Testing with provided examples"}),"\n",(0,o.jsxs)(t.p,{children:["You can test all of the filters with the examples we provide by adding the filter name as a constant in your ",(0,o.jsx)(t.code,{children:"wp-config.php"})," file."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, if you want to test the ",(0,o.jsx)(t.code,{children:"es_forms_block_forms_style_options"})," filter, you would add the following line to your ",(0,o.jsx)(t.code,{children:"wp-config.php"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"define('ES_RUN_TEST_FILTERS', 'es_forms_block_forms_style_options');\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This will automatically load the ",(0,o.jsx)(t.code,{children:"testFilters.php"})," file and run the ",(0,o.jsx)(t.code,{children:"es_forms_block_forms_style_options"})," filter defined ",(0,o.jsx)(t.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"running-all-filter-tests",children:"Running all filter tests"}),"\n",(0,o.jsxs)(t.p,{children:["The whole filter ",(0,o.jsx)(t.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php",children:"test suite"})," can be run by adding the following line to your ",(0,o.jsx)(t.code,{children:"wp-config.php"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"define('ES_RUN_TEST_FILTERS', 'all');\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Do not use on production sites!"}),"\nThe filters are used for testing and debugging purposes."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>l});var o=s(67294);const n={},i=o.createContext(n);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);