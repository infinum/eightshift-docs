"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3374],{1714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={id:"blocks-registration",title:"Registration"},l=void 0,s={unversionedId:"legacy/v4/guides/blocks-registration",id:"legacy/v4/guides/blocks-registration",title:"Registration",description:"Block registration works using magic and being able to use them a specific folder structure and naming must be followed.",source:"@site/docs/legacy/v4/guides/blocks-registration.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-registration",permalink:"/docs/legacy/v4/guides/blocks-registration",tags:[],version:"current",frontMatter:{id:"blocks-registration",title:"Registration"},sidebar:"docs",previous:{title:"Taxonomy",permalink:"/docs/legacy/v4/guides/taxonomy"},next:{title:"Blocks Structure",permalink:"/docs/legacy/v4/guides/blocks-structure"}},u={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Block registration works using magic and being able to use them a specific folder structure and naming must be followed.\nIn general, we have created all block registration in the manifest.json file. We use that file in JavaScript part of the block and Php part of the block. You can read more details here in the Block Manifest Structure section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"registerBlocks")," function loops through all block manifest and registers all blocks in the Block Editor using the native ",(0,i.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method."),(0,i.kt)("p",null,"To be able to register all block, please check this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/blocks/assets/scripts/application-blocks-editor.js"},"file"),"."),(0,i.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),g=o,d=f["".concat(l,".").concat(g)]||f[g]||p[g]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);