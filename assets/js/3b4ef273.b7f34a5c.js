/*! For license information please see 3b4ef273.b7f34a5c.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[51907],{30873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(74848),o=r(28453),a=r(34842),i=r(75053);const s={},l="Color swatch",c={id:"es-ui-components/color-swatch",title:"Color swatch",description:"This components only accepts a valid CSS color value or gradient, with the exception of named colors, of which only transparent is supported.",source:"@site/ui-components/es-ui-components/color-swatch.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/color-swatch",permalink:"/components/es-ui-components/color-swatch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Gradient editor",permalink:"/components/es-ui-components/gradient-editor"},next:{title:"Container panel",permalink:"/components/es-ui-components/container-panel"}},d={},u=[{value:"Empty state",id:"empty-state",level:2},{value:"Transparent color",id:"transparent-color",level:2},{value:"Gradients",id:"gradients",level:2},{value:"Providing a custom color name",id:"providing-a-custom-color-name",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"color-swatch",children:"Color swatch"})}),"\n","\n",(0,n.jsx)(a.d,{fitWidth:!0,children:(0,n.jsx)(i.q,{color:"#0D3636"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<ColorSwatch color='#0D3636' />\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["This components only accepts a valid CSS color value or gradient, ",(0,n.jsx)(t.strong,{children:"with the exception of named colors"}),", of which only ",(0,n.jsx)(t.code,{children:"transparent"})," is supported."]})}),"\n",(0,n.jsx)(t.h2,{id:"empty-state",children:"Empty state"}),"\n",(0,n.jsx)(a.d,{fitWidth:!0,children:(0,n.jsx)(i.q,{})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<ColorSwatch />\n"})}),"\n",(0,n.jsx)(t.h2,{id:"transparent-color",children:"Transparent color"}),"\n",(0,n.jsx)(a.d,{fitWidth:!0,children:(0,n.jsx)(i.q,{color:"#4433EE80"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<ColorSwatch color='#4433EE80' />\n"})}),"\n",(0,n.jsx)(t.h2,{id:"gradients",children:"Gradients"}),"\n",(0,n.jsxs)(a.d,{fitWidth:!0,children:[(0,n.jsx)(i.q,{gradient:"linear-gradient(#0D3636, rgb(249 250 251))",colorName:"Linear gradient"}),(0,n.jsx)(i.q,{gradient:"radial-gradient(#0D3636, rgb(249 250 251))",colorName:"Radial gradient"}),(0,n.jsx)(i.q,{gradient:"conic-gradient(#0D3636, rgb(249 250 251))",colorName:"Conic gradient"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<ColorSwatch\n\tgradient='linear-gradient(#0D3636, rgb(249 250 251))'\n\tcolorName='Linear gradient'\n/>\n<ColorSwatch\n\tgradient='radial-gradient(#0D3636, rgb(249 250 251))'\n\tcolorName='Radial gradient'\n/>\n<ColorSwatch\n\tgradient='conic-gradient(#0D3636, rgb(249 250 251))'\n\tcolorName='Conic gradient'\n/>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"providing-a-custom-color-name",children:"Providing a custom color name"}),"\n",(0,n.jsxs)(t.p,{children:["For colors, the color name will be automatically generated based on the color value.\nIf you want to provide a custom color name, you can do so by passing the ",(0,n.jsx)(t.code,{children:"colorName"})," prop."]}),"\n",(0,n.jsxs)(t.p,{children:["You ",(0,n.jsx)(t.strong,{children:"should"})," provide this for gradients."]}),"\n",(0,n.jsx)(a.d,{fitWidth:!0,children:(0,n.jsx)(i.q,{color:"#0D3636",colorName:"Eightshift dark green"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<ColorSwatch\n\tcolor='#0D3636'\n\tcolorName='Eightshift dark green'\n/>\n"})})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},34842:(e,t,r)=>{r.d(t,{d:()=>l});var n=r(96540),o=r(82972),a=r(34164),i=r(78478),s=r(74848);const l=e=>{let{children:t,defaultValue:r,className:l,fitWidth:c=!1,resettable:d=!1,preContent:u}=e;const[h,g]=(0,n.useState)(r),p=(0,n.useRef)();return(0,s.jsx)(i.A,{children:()=>(0,s.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,s.jsxs)("div",{className:(0,a.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",l),children:["function"==typeof t&&t(h,g),"function"!=typeof t&&t]}),(0,s.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[u&&u(h,g,p),d&&(0,s.jsx)(o.$,{size:"small",onPress:()=>g(r),disabled:h===r,children:"Reset"})]})]})})}},14778:(e,t,r)=>{r.d(t,{$:()=>u});var n=r(4226),o=r(31360),a=r(35971),i=r(96540),s=r(2612),l=r(61528);const c=(0,i.createContext)(null);function d(e,t){[e,t]=(0,n.a)(e,t,c);let{colorSwatchProps:r,color:d}=function(e){let{color:t,colorName:r}=e,c=t||"#fff0",d=(0,i.useMemo)((()=>"string"==typeof c?(0,o.$)(c):c),[c]),{locale:u}=(0,s.$)(),h=(0,a.$)(e,{labelable:!0}),g=(0,l.$)((p=o.a)&&p.__esModule?p.default:p,"@react-aria/color");var p;let m=(0,n.e)(e.id);return r||(r=0===d.getChannelValue("alpha")?g.format("transparent"):d.getColorName(u)),{colorSwatchProps:{...h,role:"img","aria-roledescription":g.format("colorSwatch"),"aria-label":[r,e["aria-label"]||""].filter(Boolean).join(", "),"aria-labelledby":e["aria-labelledby"]?`${m} ${e["aria-labelledby"]}`:void 0,id:m,style:{backgroundColor:d.toString("css"),forcedColorAdjust:"none"}},color:d||null}}(e),u=(0,n.b)({...e,defaultClassName:"react-aria-ColorSwatch",defaultStyle:r.style,values:{color:d}});return i.createElement("div",{...r,...u,slot:e.slot||void 0,ref:t})}const u=(0,i.forwardRef)(d)},75053:(e,t,r)=>{r.d(t,{q:()=>l});var n=r(74848),o=r(14778),a=r(31360),i=r(49189),s=r(6314);const l=e=>{const{color:t,gradient:r,className:l,colorName:c}=e,d="repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 0.75rem 0.75rem";let u;if(t&&!r)try{u="transparent"===t?"rgba(0, 0, 0, 0)":(0,a.$)(t)}catch(g){u=null}const h=r?`${r}, ${d}`:`linear-gradient(${u}, ${u}), ${d}`;return(0,n.jsx)(o.$,{...e,style:{background:(u||r)&&h},className:()=>(0,i.c)("es-uic-size-6 es-uic-rounded es-uic-border es-uic-border-gray-300 es-uic-shadow-sm",!u&&!r&&"es-uic-bg-white",l),colorName:u||r?c:(0,s._)("No color","eightshift-ui-components"),color:u,children:!u&&!r&&(0,n.jsx)("div",{className:"es-uic-m-auto es-uic-h-full es-uic-w-px es-uic-rotate-45 es-uic-rounded es-uic-bg-red-500"})})}},61528:(e,t,r)=>{r.d(t,{$:()=>p,a:()=>l,b:()=>u});var n=r(2612),o=r(96540);const a=Symbol.for("react-aria.i18n.locale"),i=Symbol.for("react-aria.i18n.strings");let s;class l{getStringForLocale(e,t){let r=this.getStringsForLocale(t)[e];if(!r)throw new Error(`Could not find intl message ${e} in ${t} locale`);return r}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,r="en-US"){if(t[e])return t[e];let n=function(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}(e);if(t[n])return t[n];for(let o in t)if(o.startsWith(n+"-"))return t[o];return t[r]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[a];if(void 0===s){let e=window[i];if(!e)return null;s={};for(let r in e)s[r]=new l({[t]:e[r]},t)}let r=null==s?void 0:s[e];if(!r)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return r}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter((([,e])=>e))),this.defaultLocale=t}}const c=new Map,d=new Map;class u{format(e,t){let r=this.strings.getStringForLocale(e,this.locale);return"function"==typeof r?r(t,this):r}plural(e,t,r="cardinal"){let n=t["="+e];if(n)return"function"==typeof n?n():n;let o=this.locale+":"+r,a=c.get(o);return a||(a=new Intl.PluralRules(this.locale,{type:r}),c.set(o,a)),n=t[a.select(e)]||t.other,"function"==typeof n?n():n}number(e){let t=d.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),d.set(this.locale,t)),t.format(e)}select(e,t){let r=e[t]||e.other;return"function"==typeof r?r():r}constructor(e,t){this.locale=e,this.strings=t}}const h=new WeakMap;function g(e,t){return t&&l.getGlobalDictionaryForPackage(t)||function(e){let t=h.get(e);return t||(t=new l(e),h.set(e,t)),t}(e)}function p(e,t){let{locale:r}=(0,n.$)(),a=g(e,t);return(0,o.useMemo)((()=>new u(r,a)),[r,a])}}}]);