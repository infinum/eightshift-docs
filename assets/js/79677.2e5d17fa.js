"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[79677],{61460:(e,t,s)=>{s.d(t,{Z:()=>b});var n=s(67294),a=s(86010),l=s(16787),r=s(87524),i=s(39960),o=s(95999),c=s(16550),m=s(48596);function d(e){const{pathname:t}=(0,c.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(85893);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(13102);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function f(e){let{sidebar:t}=e;const s=(0,r.i)();return null!=t&&t.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:s,children:n,...r}=e,i=t&&t.items.length>0;return(0,h.jsx)(l.Z,{...r,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(f,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},30390:(e,t,s)=>{s.d(t,{Z:()=>F});s(67294);var n=s(86010),a=s(9460),l=s(44996),r=s(85893);function i(e){var t,s;let{children:n,className:i}=e;const{frontMatter:o,assets:c,metadata:{description:m}}=(0,a.C)(),{withBaseUrl:d}=(0,l.C)(),u=null!=(t=c.image)?t:o.image,h=null!=(s=o.keywords)?s:[];return(0,r.jsxs)("article",{className:i,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[m&&(0,r.jsx)("meta",{itemProp:"description",content:m}),u&&(0,r.jsx)("link",{itemProp:"image",href:d(u,{absolute:!0})}),h.length>0&&(0,r.jsx)("meta",{itemProp:"keywords",content:h.join(",")}),n]})}var o=s(39960);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,a.C)(),{permalink:i,title:m}=s,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,n.Z)(c.title,t),itemProp:"headline",children:l?m:(0,r.jsx)(o.Z,{itemProp:"url",to:i,children:m})})}var d=s(95999),u=s(88824);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.c)();return t=>{const s=Math.ceil(t);return e(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,r.jsx)(r.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,r.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,a.C)(),{date:l,formattedDate:i,readingTime:o}=s;return(0,r.jsxs)("div",{className:(0,n.Z)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:i}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(g,{readingTime:o})]})]})}function f(e){return e.href?(0,r.jsx)(o.Z,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function b(e){let{author:t,className:s}=e;const{name:a,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&"mailto:"+c||void 0;return(0,r.jsxs)("div",{className:(0,n.Z)("avatar margin-bottom--sm",s),children:[o&&(0,r.jsx)(f,{href:m,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,r.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(f,{href:m,itemProp:"url",children:(0,r.jsx)("span",{itemProp:"name",children:a})})}),l&&(0,r.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,a.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>{var s;return(0,r.jsx)("div",{className:(0,n.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(b,{author:{...e,imageURL:null!=(s=l.authorsImageUrls[t])?s:e.imageURL}})},t)}))})}function _(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(m,{}),(0,r.jsx)(j,{}),(0,r.jsx)(N,{})]})}var Z=s(18780),P=s(40591);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,a.C)();return(0,r.jsx)("div",{id:l?Z.blogPostContainerID:void 0,className:(0,n.Z)("markdown",s),itemProp:"articleBody",children:(0,r.jsx)(P.Z,{children:t})})}var C=s(84881),y=s(71526);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function w(e){const{blogPostTitle:t,...s}=e;return(0,r.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,r.jsx)(T,{})})}const I={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,r.jsxs)("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&I.blogPostFooterDetailsFull),children:[m&&(0,r.jsx)("div",{className:(0,n.Z)("col",{"col--9":c}),children:(0,r.jsx)(y.Z,{tags:s})}),t&&i&&(0,r.jsx)("div",{className:"col margin-top--sm",children:(0,r.jsx)(C.Z,{editUrl:i})}),c&&(0,r.jsx)("div",{className:(0,n.Z)("col text--right",{"col--3":m}),children:(0,r.jsx)(w,{blogPostTitle:l,to:e.permalink})})]}):null}function F(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.Z)(l,s),children:[(0,r.jsx)(_,{}),(0,r.jsx)(k,{children:t}),(0,r.jsx)(L,{})]})}},84881:(e,t,s)=>{s.d(t,{Z:()=>m});s(67294);var n=s(95999),a=s(35281),l=s(39960),r=s(86010);const i={iconEdit:"iconEdit_Z9Sw"};var o=s(85893);function c(e){let{className:t,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(i.iconEdit,t),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(l.Z,{to:t,className:a.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},40591:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(67294),a=s(11151),l=s(35742),r=s(9286),i=s(85893);var o=s(39960);var c=s(86010),m=s(72389),d=s(86043);const u={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function p(e){let{summary:t,children:s,...a}=e;const l=(0,m.Z)(),r=(0,n.useRef)(null),{collapsed:o,setCollapsed:p}=(0,d.u)({initialState:!a.open}),[x,j]=(0,n.useState)(a.open),f=n.isValidElement(t)?t:(0,i.jsx)("summary",{children:null!=t?t:"Details"});return(0,i.jsxs)("details",{...a,ref:r,open:x,"data-collapsed":o,className:(0,c.Z)(u.details,l&&u.isBrowser,a.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&g(t,r.current)&&(e.preventDefault(),o?(p(!1),j(!0)):p(!0))},children:[f,(0,i.jsx)(d.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),j(!e)},children:(0,i.jsx)("div",{className:u.collapsibleContent,children:s})})]})}const x={details:"details_b_Ee"},j="alert alert--info";function f(e){let{...t}=e;return(0,i.jsx)(p,{...t,className:(0,c.Z)(j,x.details,t.className)})}function b(e){const t=n.Children.toArray(e.children),s=t.find((e=>n.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==s))});return(0,i.jsx)(f,{...e,summary:s,children:a})}var v=s(92503);function N(e){return(0,i.jsx)(v.Z,{...e})}const _={containsTaskList:"containsTaskList_mC6p"};function Z(e){if(void 0!==e)return(0,c.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&_.containsTaskList)}const P={img:"img_ev3q"};var k=s(25943);const C={Head:l.Z,details:b,Details:b,code:function(e){return n.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,i.jsx)("code",{...e}):(0,i.jsx)(r.Z,{...e})},a:function(e){return(0,i.jsx)(o.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:Z(e.className)})},img:function(e){return(0,i.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,c.Z)(t,P.img))});var t},h1:e=>(0,i.jsx)(N,{as:"h1",...e}),h2:e=>(0,i.jsx)(N,{as:"h2",...e}),h3:e=>(0,i.jsx)(N,{as:"h3",...e}),h4:e=>(0,i.jsx)(N,{as:"h4",...e}),h5:e=>(0,i.jsx)(N,{as:"h5",...e}),h6:e=>(0,i.jsx)(N,{as:"h6",...e}),admonition:k.Z,mermaid:()=>null};function y(e){let{children:t}=e;return(0,i.jsx)(a.Z,{components:C,children:t})}},32244:(e,t,s)=>{s.d(t,{Z:()=>r});s(67294);var n=s(86010),a=s(39960),l=s(85893);function r(e){const{permalink:t,title:s,subLabel:r,isNext:i}=e;return(0,l.jsxs)(a.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}},13008:(e,t,s)=>{s.d(t,{Z:()=>i});s(67294);var n=s(86010),a=s(39960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=s(85893);function i(e){let{permalink:t,label:s,count:i}=e;return(0,r.jsxs)(a.Z,{href:t,className:(0,n.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[s,i&&(0,r.jsx)("span",{children:i})]})}},71526:(e,t,s)=>{s.d(t,{Z:()=>o});s(67294);var n=s(86010),a=s(95999),l=s(13008);const r={tags:"tags_jXut",tag:"tag_QGVx"};var i=s(85893);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,n.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.Z,{label:t,permalink:s})},s)}))})]})}},9460:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var n=s(67294),a=s(902),l=s(85893);const r=n.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,l.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,n.useContext)(r);if(null===e)throw new a.i6("BlogPostProvider");return e}},88824:(e,t,s)=>{s.d(t,{c:()=>c});var n=s(67294),a=s(52263);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error("For locale="+s.locale+", a maximum of "+s.pluralForms.length+" plural forms are expected ("+s.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);const a=s.select(t),l=s.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(s,t,e)}}}}]);