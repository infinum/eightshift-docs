"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7954],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),v=l,m=d["".concat(c,".").concat(v)]||d[v]||p[v]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=v;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},53568:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(87462),l=t(63366),o=(t(67294),t(3905)),a=["components"],i={id:"components-heading-level",title:"Heading Level"},c=void 0,s={unversionedId:"legacy/v4/advanced/components-heading-level",id:"legacy/v4/advanced/components-heading-level",title:"Heading Level",description:"docs-source",source:"@site/docs/legacy/v4/advanced/components-heading-level.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/components-heading-level",permalink:"/docs/legacy/v4/advanced/components-heading-level",draft:!1,tags:[],version:"current",frontMatter:{id:"components-heading-level",title:"Heading Level"},sidebar:"docs",previous:{title:"Color Palette",permalink:"/docs/legacy/v4/advanced/components-color-palette"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"minLevel",id:"minlevel",level:4},{value:"maxLevel",id:"maxlevel",level:4},{value:"selectedLevel",id:"selectedlevel",level:4},{value:"onChange",id:"onchange",level:4}],p={toc:d},v="wrapper";function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)(v,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/components/heading-level/heading-level.js"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"This is a custom React component that renders a custom heading level (",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<h6>"),"). It is used in the heading component or block."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { HeadingLevel } from 'EightshiftComponentHeadingLevel';\n\n{onChangeLevel &&\n  <HeadingLevel\n    selectedLevel={level}\n    onChange={onChangeLevel}\n  />\n}\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"minlevel"},"minLevel"),(0,o.kt)("p",null,"Defines the minimum value to show in a heading."),(0,o.kt)("p",null,"Default: 1"),(0,o.kt)("h4",{id:"maxlevel"},"maxLevel"),(0,o.kt)("p",null,"Defines the maximum value to show in a heading."),(0,o.kt)("p",null,"Default: 6"),(0,o.kt)("h4",{id:"selectedlevel"},"selectedLevel"),(0,o.kt)("p",null,"Defines the selected level value to show in a heading."),(0,o.kt)("h4",{id:"onchange"},"onChange"),(0,o.kt)("p",null,"On Change callback method for saving the attributes of the component."))}m.isMDXComponent=!0}}]);