"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5885],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92424:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"blocks-registration",title:"Registration"},c=void 0,l={unversionedId:"legacy/v8/basics/blocks-registration",id:"legacy/v8/basics/blocks-registration",title:"Registration",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-registration.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-registration",permalink:"/docs/legacy/v8/basics/blocks-registration",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-registration",title:"Registration"},sidebar:"docs",previous:{title:"Faq",permalink:"/docs/legacy/v8/basics/blocks-faq"},next:{title:"Structure",permalink:"/docs/legacy/v8/basics/blocks-structure"}},u={},p=[],f={toc:p},d="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"Our setup works if you follow our naming convention and strict folder structure for all blocks, components, variations, patterns, and wrapper."),(0,i.kt)("p",null,"By following our structure, we can find all files using the ",(0,i.kt)("inlineCode",{parentName:"p"},"require.context")," regular expression inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blocks")," folder. Alongside some JavaScript magic, we have been able to leave out all those unnecessary steps when creating new blocks like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"providing style files;"),(0,i.kt)("li",{parentName:"ul"},"writing register method;"),(0,i.kt)("li",{parentName:"ul"},"setting PHP method for registering dynamic blocks; and"),(0,i.kt)("li",{parentName:"ul"},"including files when adding new components.")),(0,i.kt)("p",null,"You can check out how this works inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/assets/scripts/application-blocks-editor.js")," file."),(0,i.kt)("p",null,"Please follow our ",(0,i.kt)("a",{parentName:"p",href:"blocks-structure"},"blocks structure folder")," to see the naming standard and how blocks are set."))}g.isMDXComponent=!0}}]);