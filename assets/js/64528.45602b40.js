"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[64528],{82907:(e,t,a)=>{a.d(t,{A:()=>P});a(96540);var s=a(34164),n=a(44096),l=a(74848);function r(e){let{children:t,className:a}=e;return(0,l.jsx)("article",{className:a,children:t})}var i=a(28774);const o={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,n.e7)(),{permalink:d,title:c}=a,u=r?"h1":"h2";return(0,l.jsx)(u,{className:(0,s.A)(o.title,t),children:r?c:(0,l.jsx)(i.A,{to:d,children:c})})}var c=a(21312),u=a(53465),m=a(36266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,c.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function x(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:r,readingTime:i}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:r,formattedDate:(d=r,o.format(new Date(d)))}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{readingTime:i})]})]});var d}var f=a(56913);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,l.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?A.imageOnlyAuthorCol:A.authorCol),children:(0,l.jsx)(f.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function b(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(j,{}),(0,l.jsx)(v,{})]})}var N=a(70440),y=a(65425);function U(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,n.e7)();return(0,l.jsx)("div",{id:r?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,l.jsx)(y.A,{children:t})})}var _=a(17559),w=a(4336),T=a(62053);function k(){return(0,l.jsx)("b",{children:(0,l.jsx)(c.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(i.A,{"aria-label":(0,c.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(k,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:r,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,m=a.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||c||d);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(T.A,{tags:a})})}),e&&(0,l.jsx)(w.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:c,lastUpdatedBy:d})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,l.jsx)(T.A,{tags:a})}),u&&(0,l.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,l.jsx)(C,{blogPostTitle:r,to:e.permalink})})]})}function P(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(r,{className:(0,s.A)(i,a),children:[(0,l.jsx)(b,{}),(0,l.jsx)(U,{children:t}),(0,l.jsx)(R,{})]})}},4336:(e,t,a)=>{a.d(t,{A:()=>x});a(96540);var s=a(34164),n=a(21312),l=a(17559),r=a(28774);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(74848);function d(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,o.jsxs)(r.A,{to:t,className:l.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(36266);function m(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:l.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(m,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:l}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(c,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",p.lastUpdated),children:(n||l)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:l})})]})}},65425:(e,t,a)=>{a.d(t,{A:()=>R});var s=a(96540),n=a(28453),l=a(5260),r=a(21432),i=a(74848);function o(e){return(0,i.jsx)("code",{...e})}var d=a(28774);var c=a(34164),u=a(63427),m=a(92303),h=a(41422);const g="details_lb9f",p="isBrowser_bmU9",x="collapsibleContent_i85q";function j(e){return!!e&&("SUMMARY"===e.tagName||j(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function A(e){let{summary:t,children:a,...n}=e;(0,u.A)().collectAnchor(n.id);const l=(0,m.A)(),r=(0,s.useRef)(null),{collapsed:o,setCollapsed:d}=(0,h.u)({initialState:!n.open}),[A,v]=(0,s.useState)(n.open),b=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...n,ref:r,open:A,"data-collapsed":o,className:(0,c.A)(g,l&&p,n.className),onMouseDown:e=>{j(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;j(t)&&f(t,r.current)&&(e.preventDefault(),o?(d(!1),v(!0)):d(!0))},children:[b,(0,i.jsx)(h.N,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),v(!e)},children:(0,i.jsx)("div",{className:x,children:a})})]})}const v="details_b_Ee";function b(e){let{...t}=e;return(0,i.jsx)(A,{...t,className:(0,c.A)("alert alert--info",v,t.className)})}function N(e){const t=s.Children.toArray(e.children),a=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),n=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==a))});return(0,i.jsx)(b,{...e,summary:a,children:n})}var y=a(51107);function U(e){return(0,i.jsx)(y.A,{...e})}const _="containsTaskList_mC6p";function w(e){if(void 0!==e)return(0,c.A)(e,e?.includes("contains-task-list")&&_)}const T="img_ev3q";var k=a(71608);const C={Head:l.A,details:N,Details:N,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(o,{...e}):(0,i.jsx)(r.A,{...e})},a:function(e){return(0,i.jsx)(d.A,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:w(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,c.A)(t,T))});var t},h1:e=>(0,i.jsx)(U,{as:"h1",...e}),h2:e=>(0,i.jsx)(U,{as:"h2",...e}),h3:e=>(0,i.jsx)(U,{as:"h3",...e}),h4:e=>(0,i.jsx)(U,{as:"h4",...e}),h5:e=>(0,i.jsx)(U,{as:"h5",...e}),h6:e=>(0,i.jsx)(U,{as:"h6",...e}),admonition:k.A,mermaid:()=>null};function R(e){let{children:t}=e;return(0,i.jsx)(n.x,{components:C,children:t})}},39022:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(34164),n=a(28774),l=a(74848);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,l.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),n=a(28774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(74848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),n=a(21312),l=a(56133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(74848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.A,{...e})},e.permalink)))})]})}},36266:(e,t,a)=>{a.d(t,{i:()=>n});var s=a(44586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);