"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[2776],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"eightshift-libs",title:"Eightshift Libs"},l=void 0,c={unversionedId:"eightshift-libs",id:"eightshift-libs",title:"Eightshift Libs",description:"docs-source",source:"@site/docs/eightshift-libs.md",sourceDirName:".",slug:"/eightshift-libs",permalink:"/docs/eightshift-libs",draft:!1,tags:[],version:"current",frontMatter:{id:"eightshift-libs",title:"Eightshift Libs"},sidebar:"docs",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"Eightshift Frontend Libs",permalink:"/docs/eightshift-frontend-libs"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The library contains",id:"the-library-contains",level:3},{value:"How to integrate into an existing project",id:"how-to-integrate-into-an-existing-project",level:2},{value:"Who do I talk to?",id:"who-do-i-talk-to",level:2}],h={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)(d,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"This library is aimed at bringing modern back-end development tools to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate"},"Eightshift Boilerplate")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate-plugin"},"Eightshift Boilerplate Plugin"),", but you can use it on any WordPress project."),(0,o.kt)("p",null,"It uses a dependency injection container that provides a way to inject dependencies into classes to obey the single responsibility principle (SRP). Every class is responsible for registering its hooks, loaded automatically by the dependency injection container. This provides a more testable environment for your project."),(0,o.kt)("p",null,"We provide helpers, abstract classes, interfaces, and abstractions on original WordPress functionality to help you write more modern code."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In our projects, we use object-oriented PHP, design patterns, and the SOLID principle. When you work on complex projects with various third-party integrations, it makes sense to use our boilerplate. You want your code to be easily extended, testable, and future-proof."),(0,o.kt)("p",null,"If all you need is a simple website, some of these concepts might be too much for you, and you won't see many benefits in using them. This is totally valid. We need to pick our battles and decide for ourselves what is the best tool for the job."),(0,o.kt)("p",null,"If you want to try our setup, but you might not be as versed in the above concepts, don't worry. We have lots of examples and we tried to make them easy to follow."),(0,o.kt)("h3",{id:"the-library-contains"},"The library contains"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dependency injection container"),(0,o.kt)("li",{parentName:"ul"},"PSR-4 autoloader"),(0,o.kt)("li",{parentName:"ul"},"Autowiring of your service classes"),(0,o.kt)("li",{parentName:"ul"},"WP-CLI commands to get all the features in your project using a single terminal command"),(0,o.kt)("li",{parentName:"ul"},"Interfaces"),(0,o.kt)("li",{parentName:"ul"},"Abstract classes"),(0,o.kt)("li",{parentName:"ul"},"Helpers"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"how-to-integrate-into-an-existing-project"},"How to integrate into an existing project"),(0,o.kt)("p",null,"The process of integrating the libs into an existing project is not easy, because it really depends on how your theme or plugin is built. Our libs expect the usage of namespacing, and adding namespace in a non namespaced codebase can potentially cause breakage."),(0,o.kt)("p",null,"You can try to manually add the backend libs using composer and frontend using npm, but the process of connecting everything up can be a complex one. So we recommend starting from a clean slate."),(0,o.kt)("h2",{id:"who-do-i-talk-to"},"Who do I talk to?"),(0,o.kt)("p",null,"If you have any questions or problems, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/issues"},"open an issue")," on GitHub, and we will do our best to give you a timely answer."))}f.isMDXComponent=!0}}]);