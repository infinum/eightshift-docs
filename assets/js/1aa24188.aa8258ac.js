"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[44029],{34676:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(74848),i=t(28453);const s={id:"fonts-custom",title:"Custom fonts"},a=void 0,c={id:"legacy/v4/guides/fonts-custom",title:"Custom fonts",description:"To add a custom font and generate @font-face rules in built CSS file we recommend using PostCSS plugin: Font Magician. Before configuring Font Magician, font files need to be included in the build process.",source:"@site/docs/legacy/v4/guides/fonts-custom.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/fonts-custom",permalink:"/docs/legacy/v4/guides/fonts-custom",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fonts-custom",title:"Custom fonts"},sidebar:"docs",previous:{title:"Login",permalink:"/docs/legacy/v4/guides/login"},next:{title:"Icon font",permalink:"/docs/legacy/v4/guides/fonts-icon"}},r={},l=[{value:"Font files setup",id:"font-files-setup",level:2},{value:"Font Magician configuration",id:"font-magician-configuration",level:2},{value:"Using the custom font",id:"using-the-custom-font",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["To add a custom font and generate ",(0,o.jsx)(e.code,{children:"@font-face"})," rules in built CSS file we recommend using PostCSS plugin: ",(0,o.jsx)(e.a,{href:"https://github.com/jonathantneal/postcss-font-magician",children:"Font Magician"}),". Before configuring Font Magician, font files need to be included in the build process."]}),"\n",(0,o.jsx)(e.h2,{id:"font-files-setup",children:"Font files setup"}),"\n",(0,o.jsxs)(e.p,{children:["Font files should be placed in ",(0,o.jsx)(e.code,{children:"theme-name/assets/fonts"}),". There are multiple web oriented font file formats. For majority of browsers only ",(0,o.jsx)(e.code,{children:".woff"})," format is enough (having it alongisde ",(0,o.jsx)(e.code,{children:".woff2"})," is even better), but if you plan to support older browsers (e.g. IE 10 and older) you must include ",(0,o.jsx)(e.code,{children:".eot"})," and ",(0,o.jsx)(e.code,{children:".svg"})," formats, as well."]}),"\n",(0,o.jsxs)(e.p,{children:["Fonts, and all of their variations, need to be included in ",(0,o.jsx)(e.code,{children:"index.js"})," file inside the ",(0,o.jsx)(e.code,{children:"/fonts"})," directory:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import './Font-Name-Variation.woff2';\nimport './Font-Name-Variation.woff';\n"})}),"\n",(0,o.jsxs)(e.p,{children:["After running the build process again, fonts will be placed in ",(0,o.jsx)(e.code,{children:"/theme-name/public"})," directory and we can configure Font Magician to load them."]}),"\n",(0,o.jsx)(e.h2,{id:"font-magician-configuration",children:"Font Magician configuration"}),"\n",(0,o.jsx)(e.p,{children:"To install Font Magician run:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"npm install postcss-font-magician --save-dev\n"})}),"\n",(0,o.jsx)(e.p,{children:"or"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"yarn add postcss-font-magician --dev\n"})}),"\n",(0,o.jsxs)(e.p,{children:["In the root of the theme there is already a ",(0,o.jsx)(e.code,{children:"postcss.config.js"})," file with ",(0,o.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",children:"Autoprefixer"})," enabled. To configure Font Magician it needs to be imported first and its configuration needs to be added to the existing one."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"...\nconst postcssFontMagician = require('postcss-font-magician');\n\nmodule.exports = {\n  plugins: [\n    ... // other postCss configs\n    postcssFontMagician({\n      foundries: ['custom'],\n      custom: {\n        FontName: { // font-family declaration\n          variants: {\n            normal: { // font-style variation\n              400: { // font-weight variation\n                url: {\n                  woff: 'Font-Name-Variation.woff',\n                  woff2: 'Font-Name-Variation.woff2',\n                },\n              },\n              ... // other font-weight variation of the same font-tyle\n            },\n            ... // other font-style variation of the same font-family\n          },\n        },\n        ... // other font-family declarations\n      },\n    }),\n  ],\n};\n"})}),"\n",(0,o.jsxs)(e.p,{children:["There are other configuration options for including custom fonts using Font Magician and you can check them in the ",(0,o.jsx)(e.a,{href:"https://github.com/jonathantneal/postcss-font-magician#options",children:"font magician documentation"})]}),"\n",(0,o.jsxs)(e.p,{children:["Restart the build process to generate ",(0,o.jsx)(e.code,{children:"@font-face"})," rules."]}),"\n",(0,o.jsx)(e.h2,{id:"using-the-custom-font",children:"Using the custom font"}),"\n",(0,o.jsxs)(e.p,{children:["To use the custom font in a theme, simply declare a new ",(0,o.jsx)(e.code,{children:"font-family"})," rule and assign it to the ",(0,o.jsx)(e.strong,{children:"font name"})," from the Font Magician configuration. A better approach would be to save the specific ",(0,o.jsx)(e.code,{children:"font-family"})," values to variables that can be reused:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-scss",children:"// Variable declared in a global variables .scss file.\n$base-font-family: `FontName`, sans-serif,\n\n// Using the variable in .scss partial\nbody {\n  font-family: $base-font-family;\n  ...\n}\n"})})]})}function f(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var o=t(96540);const i={},s=o.createContext(i);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);