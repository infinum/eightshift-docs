"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8343],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=o,d=s["".concat(a,".").concat(g)]||s[g]||f[g]||i;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=g;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[s]="string"==typeof e?e:o,u[1]=l;for(var p=2;p<i;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],l={id:"output-log",title:"Output log"},a=void 0,p={unversionedId:"php/filters/troubleshooting/output-log",id:"php/filters/troubleshooting/output-log",title:"Output log",description:"This filter provides you with the ability to output internal debug log to an external source like Bugsnag, Sentry, or similar.",source:"@site/forms/php/filters/troubleshooting/output-log.md",sourceDirName:"php/filters/troubleshooting",slug:"/php/filters/troubleshooting/output-log",permalink:"/forms/php/filters/troubleshooting/output-log",draft:!1,tags:[],version:"current",frontMatter:{id:"output-log",title:"Output log"},sidebar:"forms",previous:{title:"WP Rocket advanced cache",permalink:"/forms/php/filters/geolocation/wp-rocket-advanced-cache"},next:{title:"Fail mimetype validation",permalink:"/forms/php/filters/validation/fail-mimetype-validation-when-file-not-on-fs"}},c={},s=[],f={toc:s},g="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This filter provides you with the ability to output internal debug log to an external source like Bugsnag, Sentry, or similar."),(0,i.kt)("p",null,"If not set, the log will be outputted to projects ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-content/debug.log")," file."),(0,i.kt)("p",null,"Make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"WP_DEBUG_LOG")," set to true in your ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-config.php")," file to be able to use this filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"add_filter('es_forms_troubleshooting_output_log', function(): bool {\n    return true;\n})\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Do not use on production sites!"),"\nThis filter is used only for testing and debugging purposes.")))}d.isMDXComponent=!0}}]);