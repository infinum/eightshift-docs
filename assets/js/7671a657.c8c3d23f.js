/*! For license information please see 7671a657.c8c3d23f.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[16733],{16169:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>w,contentTitle:()=>I,default:()=>$,frontMatter:()=>C,metadata:()=>N,toc:()=>D});var s=i(74848),n=i(28453),a=i(34842),l=i(6314),o=i(82972),d=i(13731),c=i(96540),r=i(23338),u=i(61426);const p=(0,c.createContext)();var h=i(49189),m=i(56243);const g=e=>{const t=`item-${(0,c.useId)().replaceAll(":","")}`,{children:i,onChange:n,items:a,icon:g,label:v,subtitle:b,help:f,actions:x,hideEmptyState:j,addDefaultItem:y={},addDisabled:C,onAfterItemAdd:I,onAfterItemRemove:N,minItems:w,maxItems:D,addButton:P,className:$,emptyState:R,hidden:O}=e,F=((e,t)=>e.map(((e,i)=>({...e,id:(null==e?void 0:e.id)??`${t}-${i}`}))))(a,t),S=F.length>(w??0),E=F.length<(D??Number.MAX_SAFE_INTEGER);return O?null:(0,s.jsxs)(r.p,{icon:g,label:v,subtitle:b,help:f,actions:(0,s.jsxs)(s.Fragment,{children:[x,!P&&(0,s.jsx)(o.$,{onPress:()=>{const e={id:`${t}${F.length+1}`,...y};n([...F,e]),I&&I(e)},size:"small",icon:d.Pt.add,className:(0,h.c)("[&>svg]:es-uic-size-4",!j&&F.length<1&&"es-uic-invisible"),tooltip:(0,l._)("Add item","eightshift-ui-components"),disabled:C||!E}),P&&(0,s.jsx)("div",{className:(0,h.c)(!j&&F.length<1&&"es-uic-invisible"),children:P({addItem:(e={})=>{const i={id:`${t}${F.length+1}`,...y,...e};n([...F,i]),I&&I(i)},disabled:C})})]}),className:"es-uic-w-full",children:[(0,s.jsx)(m.L,{values:F,onChange:({oldIndex:e,newIndex:t})=>n(-1===t?(0,m.a)(F,e):(0,m.b)(F,e,t)),renderList:({children:e,props:t})=>{const{key:i,...n}=t;return(0,s.jsx)("ul",{className:(0,h.c)("es-uic-w-full es-uic-list-none",$),...n,children:e},i)},renderItem:({value:e,index:a,isDragged:l,isSelected:o,isOutOfBounds:d,props:c})=>{const{key:r,...u}=c;return(0,s.jsx)("li",{className:"es-uic-group es-uic-w-full es-uic-list-none focus:es-uic-outline-none",...u,children:(0,s.jsx)(p.Provider,{value:{...e,index:a,deleteItem:()=>{n([...F].filter((t=>t.id!==e.id))),N&&N(e)},duplicateItem:()=>{const i={...e,id:`${t}${F.length+1}`};n([...F,i]),I&&I(i)},isDragged:l,isOutOfBounds:d,isSelected:o,canDelete:S,canAdd:E},children:i({...e,updateData:t=>{const i=[...F].map((i=>i.id===e.id?{...i,...t}:i));n(i)},itemIndex:a,deleteItem:()=>{n([...F].filter((t=>t.id!==e.id))),N&&N(e)}})})},(null==e?void 0:e.id)??r)},removableByMove:!0}),(0,s.jsxs)(u.c,{visible:F.length<1,children:[R,!j&&(0,s.jsxs)("div",{className:"es-uic-flex es-uic-flex-col es-uic-items-center es-uic-gap-2 es-uic-rounded-md es-uic-border es-uic-border-dashed es-uic-border-gray-300 es-uic-p-4 es-uic-text-center es-uic-text-sm es-uic-text-gray-400",children:[!P&&(0,s.jsx)(o.$,{onPress:()=>{const e={id:`${t}${F.length+1}`,...y};n([...F,e]),I&&I(e)},size:"small",icon:d.Pt.add,className:"[&>svg]:es-uic-size-4",disabled:C,children:(0,l._)("Add item","eightshift-ui-components")}),P&&!j&&P({addItem:(e={})=>{const i={id:`${t}${F.length+1}`,...y,...e};n([...F,i]),I&&I(i)},disabled:C})]})]})]})};var v=i(56570),b=i(2480);const f=e=>{const{children:t,icon:i,label:n,subtitle:a,"aria-label":r,className:u,actions:m,textValue:g,expandDisabled:f,menuOptions:x,noMenuButton:j,...y}=e,{deleteItem:C,duplicateItem:I,isDragged:N,isOutOfBounds:w,isSelected:D,canDelete:P,canAdd:$}=(0,c.useContext)(p);return(0,s.jsx)(b.V,{icon:w?d.Pt.trash:i,label:w?(0,l._)("Release to delete","eightshift-ui-components"):n,subtitle:w?null:a,className:(0,h.c)("es-uic-transition",N&&"es-uic-border es-uic-border-gray-100 es-uic-bg-white/50 es-uic-shadow-md es-uic-backdrop-blur-lg",w&&"es-uic-border !es-uic-border-red-200 es-uic-bg-red-50 es-uic-shadow-red-500/20 [&_button]:es-uic-invisible [&_svg_path]:es-uic-stroke-red-500"),labelClassName:(0,h.c)(u,N?"es-uic-cursor-grabbing":"es-uic-cursor-grab"),headerClassName:(0,h.c)("es-uic-transition es-uic-rounded-md",D&&"es-uic-bg-teal-50 es-uic-border-teal-100","group-focus:es-uic-outline-none group-focus-visible:es-uic-ring group-focus-visible:es-uic-ring-teal-500 group-focus-visible:es-uic-ring-opacity-50"),customOpenButton:({open:e,toggleOpen:t,tooltip:i,disabled:n})=>(0,s.jsxs)("div",{className:"es-uic-flex es-uic-items-center es-uic-gap-px",children:[(0,s.jsxs)(v.W1,{hidden:j,triggerIcon:d.Pt.moreH,triggerProps:{className:"[&>svg]:es-uic-size-5 [&>svg]:es-uic-shrink-0",size:"small",type:"ghost"},tooltip:(0,l._)("More options","eightshift-ui-components"),children:[x,x&&(0,s.jsx)(v.bX,{}),(0,s.jsx)(v.Dr,{disabled:!$,icon:d.Pt.copy,onPress:()=>I(),children:(0,l._)("Duplicate","eightshift-ui-components")}),(0,s.jsx)(v.Dr,{disabled:!P,icon:d.Pt.trash,onPress:()=>C(),children:(0,l._)("Remove","eightshift-ui-components")})]}),(0,s.jsx)(o.$,{type:"ghost",icon:e?d.Pt.caretDownFill:d.Pt.caretDown,onPress:t,tooltip:i,disabled:n,className:(0,h.c)("[&>svg]:es-uic-size-5 [&>svg]:es-uic-transition-transform",e&&"[&>svg]:-es-uic-scale-y-100"),size:"small"})]}),actions:m,headerProps:{"data-movable-handle":!0},noFocusHandling:!0,...y,children:t})};var x=i(8808),j=i(4658);const y=e=>{let{data:t,setData:i,...n}=e;return(0,s.jsx)(g,{label:"Items",items:t,onChange:i,addDefaultItem:{title:`New item ${t.length+1}`},...n,children:e=>{const{title:t,toggledOption:i,updateData:n,itemIndex:a}=e;return(0,s.jsxs)(f,{label:t??`New item ${a+1}`,icon:d.Pt.magicAlt,children:[(0,s.jsx)(x.l,{icon:d.Pt.emptyCircle,label:"Toggle me",checked:i,onChange:e=>n({toggledOption:e})}),(0,s.jsx)(j.F,{label:"Title",type:"text",value:t,onChange:e=>n({title:e})})]})}})},C={},I="Repeater",N={id:"es-ui-components/repeater",title:"Repeater",description:"{(data, setData) => (",source:"@site/ui-components/es-ui-components/repeater.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/repeater",permalink:"/components/es-ui-components/repeater",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Tabs",permalink:"/components/es-ui-components/tabs"},next:{title:"Draggable list",permalink:"/components/es-ui-components/draggable-list"}},w={},D=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Set default value for newly added items",id:"set-default-value-for-newly-added-items",level:3},{value:"Prevent item deletion when below a certain count",id:"prevent-item-deletion-when-below-a-certain-count",level:3},{value:"Replace the default empty state",id:"replace-the-default-empty-state",level:3},{value:"Don&#39;t show the empty state",id:"dont-show-the-empty-state",level:3},{value:"Prevent adding items",id:"prevent-adding-items",level:3}];function P(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"repeater",children:"Repeater"})}),"\n","\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,t)=>(0,s.jsx)(y,{data:e,setData:t})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n>\n\t{(item) => {\n\t\tconst { title, toggledOption, updateData } = item;\n\n\t\treturn (\n\t\t\t<RepeaterItem\n\t\t\t\tlabel={title ?? 'New item'}\n\t\t\t\ticon={icons.magicAlt}\n\t\t\t>\n\t\t\t\t<Toggle\n\t\t\t\t\ticon={icons.emptyCircle}\n\t\t\t\t\tlabel='Toggle me'\n\t\t\t\t\tchecked={toggledOption}\n\t\t\t\t\tonChange={(value) => updateData({ toggledOption: value })}\n\t\t\t\t/>\n\n\t\t\t\t<InputField\n\t\t\t\t\tlabel='Title'\n\t\t\t\t\ttype='text'\n\t\t\t\t\tvalue={title}\n\t\t\t\t\tonChange={(value) => updateData({ title: value })}\n\t\t\t\t/>\n\t\t\t</RepeaterItem>\n\t\t);\n\t}}\n</Repeater>\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Besides the item attributes, every ",(0,s.jsx)(t.code,{children:"item"})," in the render function will also include a function for updating the current item (",(0,s.jsx)(t.code,{children:"updateData"}),"), the current item's index (",(0,s.jsx)(t.code,{children:"itemIndex"}),"), and a function for deleting the current item (",(0,s.jsx)(t.code,{children:"deleteItem"}),")."]})}),"\n",(0,s.jsx)(t.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,s.jsx)(t.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,s.jsx)(t.h3,{id:"set-default-value-for-newly-added-items",children:"Set default value for newly added items"}),"\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,t)=>(0,s.jsx)(y,{data:e,setData:t,addDefaultItem:{title:"My new item"}})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n\t// highlight-start\n\taddDefaultItem={{\n\t\ttitle: 'My new item',\n\t}}\n\t// highlight-end\n>\n\t{...}\n</Repeater>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"prevent-item-deletion-when-below-a-certain-count",children:"Prevent item deletion when below a certain count"}),"\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,t)=>(0,s.jsx)(y,{data:e,setData:t,minItems:3})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n\t// highlight-next-line\n\tminItems={3}\n>\n\t{...}\n</Repeater>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"replace-the-default-empty-state",children:"Replace the default empty state"}),"\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,i)=>(0,s.jsx)(y,{data:e,setData:i,emptyState:(0,s.jsx)(t.span,{className:"es-uic-font-mono",children:"Nothing to see here..."})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n\t// highlight-next-line\n\temptyState={<span>Nothing to see here...</span>}\n>\n\t{...}\n</Repeater>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"dont-show-the-empty-state",children:"Don't show the empty state"}),"\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,t)=>(0,s.jsx)(y,{data:e,setData:t,hideEmptyState:!0})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n\t// highlight-next-line\n\thideEmptyState\n>\n\t{...}\n</Repeater>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"prevent-adding-items",children:"Prevent adding items"}),"\n",(0,s.jsx)(a.d,{defaultValue:[],children:(e,t)=>(0,s.jsx)(y,{data:e,setData:t,addDisabled:!0})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Repeater\n\tlabel='Items'\n\titems={value}\n\tonChange={(value) => setValue(value)}\n\t// highlight-next-line\n\taddDisabled\n>\n\t{...}\n</Repeater>\n"})})]})}function $(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(P,{...e})}):P(e)}},34842:(e,t,i)=>{i.d(t,{d:()=>d});var s=i(96540),n=i(82972),a=i(34164),l=i(78478),o=i(74848);const d=e=>{let{children:t,defaultValue:i,className:d,fitWidth:c=!1,resettable:r=!1,preContent:u}=e;const[p,h]=(0,s.useState)(i),m=(0,s.useRef)();return(0,o.jsx)(l.A,{children:()=>(0,o.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,o.jsxs)("div",{className:(0,a.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",d),children:["function"==typeof t&&t(p,h),"function"!=typeof t&&t]}),(0,o.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[u&&u(p,h,m),r&&(0,o.jsx)(n.$,{size:"small",onPress:()=>h(i),disabled:p===i,children:"Reset"})]})]})})}},17220:(e,t,i)=>{i.d(t,{$:()=>s});const s=(0,i(96540).createContext)(null)},86349:(e,t,i)=>{i.d(t,{$:()=>m,a:()=>b,b:()=>h});var s=i(96540),n=i(22049),a=i(4226),l=i(35971),o=i(52043),d=i(70872),c=i(21612),r=i(56870),u=i(48480),p=i(92743);function h(e,t){let{inputElementType:i="input",isDisabled:u=!1,isRequired:p=!1,isReadOnly:h=!1,type:m="text",validationBehavior:g="aria"}=e,[v,b]=(0,n.e)(e.value,e.defaultValue||"",e.onChange),{focusableProps:f}=(0,c.$)(e,t),x=(0,r.$)({...e,value:v}),{isInvalid:j,validationErrors:y,validationDetails:C}=x.displayValidation,{labelProps:I,fieldProps:N,descriptionProps:w,errorMessageProps:D}=(0,d.a)({...e,isInvalid:j,errorMessage:e.errorMessage||y}),P=(0,l.$)(e,{labelable:!0});const $={type:m,pattern:e.pattern};return(0,o.$)(t,v,b),(0,r.a)(e,x,t),(0,s.useEffect)((()=>{if(t.current instanceof(0,n.f)(t.current).HTMLTextAreaElement){let e=t.current;Object.defineProperty(e,"defaultValue",{get:()=>e.value,set:()=>{},configurable:!0})}}),[t]),{labelProps:I,inputProps:(0,a.c)(P,"input"===i?$:void 0,{disabled:u,readOnly:h,required:p&&"native"===g,"aria-required":p&&"aria"===g||void 0,"aria-invalid":j||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:v,onChange:e=>b(e.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...f,...N}),descriptionProps:w,errorMessageProps:D,isInvalid:j,validationErrors:y,validationDetails:C}}const m=(0,s.createContext)({});let g=e=>{let{onHoverStart:t,onHoverChange:i,onHoverEnd:s,...n}=e;return n};function v(e,t){[e,t]=(0,a.a)(e,t,m);let{hoverProps:i,isHovered:l}=(0,n.$)(e),{isFocused:o,isFocusVisible:d,focusProps:c}=(0,p.$)({isTextInput:!0,autoFocus:e.autoFocus}),r=!!e["aria-invalid"]&&"false"!==e["aria-invalid"],u=(0,a.b)({...e,values:{isHovered:l,isFocused:o,isFocusVisible:d,isDisabled:e.disabled||!1,isInvalid:r},defaultClassName:"react-aria-Input"});return s.createElement("input",{...(0,a.c)(g(e),c,i),...u,ref:t,"data-focused":o||void 0,"data-disabled":e.disabled||void 0,"data-hovered":l||void 0,"data-focus-visible":d||void 0,"data-invalid":r||void 0})}const b=(0,u.$)(v)},2480:(e,t,i)=>{i.d(t,{V:()=>h});var s=i(74848),n=i(96540),a=i(54754),l=i(61426),o=i(82972),d=i(13731),c=i(49189),r=i(6314),u=i(56439),p=i(53432);const h=e=>{const{icon:t,label:i,subtitle:h,className:m,labelClassName:g,contentClassName:v,headerClassName:b,actions:f,keepActionsOnExpand:x=!1,disabled:j,noFocusHandling:y,children:C,open:I=!1,onOpenChange:N,customOpenButton:w,headerProps:D,hidden:P,...$}=e,[R,O]=n.useState(I);if(R&&j&&O(!1),P)return null;const F=(0,s.jsxs)("div",{className:(0,c.c)("es-uic-w-full es-uic-rounded-lg es-uic-border es-uic-border-gray-300 es-uic-border-opacity-0 es-uic-text-sm es-uic-transition focus:es-uic-outline-none",R&&"es-uic-border-opacity-100 es-uic-shadow-lg",m),...$,children:[(0,s.jsxs)("div",{className:(0,c.c)("es-uic-flex es-uic-h-10 es-uic-items-center es-uic-gap-1 es-uic-transition-[padding]",R&&"es-uic-py-1 es-uic-pl-2 es-uic-pr-1",b),...D,children:[(0,s.jsx)(a.b,{icon:t,label:i,subtitle:h,className:g,as:u.$,fullWidth:!0}),f&&!x&&(0,s.jsx)(l.c,{visible:!R,className:"es-uic-ml-auto es-uic-flex es-uic-gap-2",transition:"scaleFade",noInitial:!0,children:f}),f&&x&&(0,s.jsx)("div",{className:"es-uic-ml-auto es-uic-flex es-uic-gap-2",children:f}),w&&w({open:R,toggleOpen:()=>{O(!R),N&&N(!R)},tooltip:R?(0,r._)("Close","eightshift-ui-components"):(0,r._)("Open","eightshift-ui-components"),disabled:j}),!w&&(0,s.jsx)(o.$,{type:"ghost",icon:R?d.Pt.caretDownFill:d.Pt.caretDown,onPress:()=>{O(!R),N&&N(!R)},tooltip:R?(0,r._)("Close","eightshift-ui-components"):(0,r._)("Open","eightshift-ui-components"),disabled:j,className:(0,c.c)("[&>svg]:es-uic-size-5 [&>svg]:es-uic-transition-transform",R&&"[&>svg]:-es-uic-scale-y-100"),size:"small"})]}),(0,s.jsx)(l.c,{visible:R,className:(0,c.c)("es-uic-space-y-2.5 es-uic-border-t es-uic-border-t-gray-200 es-uic-p-2",v),transition:"slideFade",noInitial:!0,children:C})]});return y?F:(0,s.jsx)(p.$,{contain:R,autoFocus:R,children:F})}},4658:(e,t,i)=>{i.d(t,{F:()=>I});var s=i(74848),n=i(86349),a=i(56439),l=i(4226),o=i(96540),d=i(22049),c=i(92743),r=i(70872),u=i(17220),p=i(25133),h=i(35971),m=i(23338),g=i(49189);const v=(0,o.createContext)({});let b=e=>{let{onHoverStart:t,onHoverChange:i,onHoverEnd:s,...n}=e;return n};function f(e,t){[e,t]=(0,l.a)(e,t,v);let{hoverProps:i,isHovered:s}=(0,d.$)(e),{isFocused:n,isFocusVisible:a,focusProps:r}=(0,c.$)({isTextInput:!0,autoFocus:e.autoFocus}),u=!!e["aria-invalid"]&&"false"!==e["aria-invalid"],p=(0,l.b)({...e,values:{isHovered:s,isFocused:n,isFocusVisible:a,isDisabled:e.disabled||!1,isInvalid:u},defaultClassName:"react-aria-TextArea"});return o.createElement("textarea",{...(0,l.c)(b(e),r,i),...p,ref:t,"data-focused":n||void 0,"data-disabled":e.disabled||void 0,"data-hovered":s||void 0,"data-focus-visible":a||void 0,"data-invalid":u||void 0})}const x=(0,o.forwardRef)(f),j=(0,o.createContext)(null);function y(e,t){[e,t]=(0,l.a)(e,t,j);let{validationBehavior:i}=(0,l.$)(u.$)||{};var s,d;let c=null!==(d=null!==(s=e.validationBehavior)&&void 0!==s?s:i)&&void 0!==d?d:"native",m=(0,o.useRef)(null),[g,b]=(0,l.g)(),[f,x]=(0,o.useState)("input"),{labelProps:y,inputProps:C,descriptionProps:I,errorMessageProps:N,...w}=(0,n.b)({...(0,l.h)(e),inputElementType:f,label:b,validationBehavior:c},m),D=(0,o.useCallback)((e=>{m.current=e,e&&x(e instanceof HTMLTextAreaElement?"textarea":"input")}),[]),P=(0,l.b)({...e,values:{isDisabled:e.isDisabled||!1,isInvalid:w.isInvalid,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1},defaultClassName:"react-aria-TextField"}),$=(0,h.$)(e);return delete $.id,o.createElement("div",{...$,...P,ref:t,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":w.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},o.createElement(l.i,{values:[[a.a,{...y,ref:g}],[n.$,{...C,ref:D}],[v,{...C,ref:D}],[p.a,{slots:{description:I,errorMessage:N}}],[r.$,w]]},P.children))}const C=(0,o.forwardRef)(y),I=e=>{const{icon:t,label:i,subtitle:l,help:o,actions:d,value:c,onChange:r,type:u="text",disabled:p,readOnly:h,className:v,wrapperClassName:b,hidden:f,...j}=e;return f?null:(0,s.jsx)(C,{value:c??"",onChange:r,isDisabled:p,isReadOnly:h,className:b,...j,children:(0,s.jsxs)(m.p,{icon:t,label:i,subtitle:l,actions:d,labelAs:a.$,help:o,children:["multiline"!==u&&(0,s.jsx)(n.a,{...j,type:u,className:(0,g.c)("es-uic-min-h-10 es-uic-w-full es-uic-rounded-md es-uic-border es-uic-border-gray-300 es-uic-p-2 es-uic-text-sm es-uic-shadow-sm es-uic-transition selection:es-uic-bg-teal-500/20 selection:es-uic-text-teal-950","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",v)}),"multiline"===u&&(0,s.jsx)(x,{...j,className:(0,g.c)("es-uic-min-h-10 es-uic-w-full es-uic-rounded-md es-uic-border es-uic-border-gray-300 es-uic-p-2 es-uic-text-sm es-uic-shadow-sm es-uic-transition selection:es-uic-bg-teal-500/20 selection:es-uic-text-teal-950","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",v)})]})})}},8808:(e,t,i)=>{i.d(t,{l:()=>o});var s=i(74848),n=i(56439),a=i(14796),l=i(54754);const o=e=>{const{checked:t,onChange:i,icon:o,label:d,subtitle:c,disabled:r,className:u,labelClassName:p,isIndeterminate:h,hidden:m}=e;return m?null:(0,s.jsx)(a.d,{checked:t,onChange:i,disabled:r,className:u,isIndeterminate:h,children:(0,s.jsx)(l.b,{as:n.$,icon:o,label:d,subtitle:c,className:p,fullWidth:!0})})}},15179:(e,t,i)=>{i.d(t,{$:()=>n});var s=i(22049);function n(e={}){let{isReadOnly:t}=e,[i,n]=(0,s.e)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:i,setSelected:function(e){t||n(e)},toggle:function(){t||n(!i)}}}}}]);