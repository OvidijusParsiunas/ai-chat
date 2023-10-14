"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function r(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function a(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];r(t),window.toggleNavOnScroll=r.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>a})},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);function a(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n,innerDisplay:a}=e;return r.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},r.createElement("div",{style:{display:a||"block"}},t))}},4602:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1262),a=n(7294);function o(e){return a.createElement(r.Z,null,(()=>{const t=n(5197).DeepChat;return a.createElement(t,e,e.children)}))}},4995:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{isDisplayed:t,children:n}=e;return t?r.createElement("div",null,n):r.createElement("div",null)}function o(e){let{children:t}=e;const[n,o]=r.useState(!1);return r.createElement("div",null,r.createElement("div",{className:"code-toggle",onClick:()=>o(!n)},n?"Hide":"View"," Code"),r.createElement(a,{isDisplayed:n},t))}},3898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var r=n(7462),a=(n(7294),n(3905)),o=n(8751),l=n(4602),s=n(4995),i=n(7235),u=n(1262),c=n(5162);n(4866);const d={sidebar_position:0},p="Full Screen",m={unversionedId:"examples/Layout/fullScreen",id:"examples/Layout/fullScreen",title:"Full Screen",description:"Examples to help you expand the chat component dimensions.",source:"@site/docs/examples/Layout/fullScreen.mdx",sourceDirName:"examples/Layout",slug:"/examples/Layout/fullScreen",permalink:"/examples/Layout/fullScreen",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/Layout/fullScreen.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"examples",previous:{title:"External Modules",permalink:"/examples/externalModules"},next:{title:"Sticky",permalink:"/examples/Layout/sticky"}},h={},g=[{value:"Default",id:"default",level:3},{value:"ChatGPT",id:"chatGPT",level:3},{value:"Simple",id:"simple",level:3}],f={toc:g},b="wrapper";function y(e){let{components:t,...d}=e;return(0,a.kt)(b,(0,r.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"full-screen"},"Full Screen"),(0,a.kt)("p",null,"Examples to help you expand the chat component dimensions."),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("p",null,"This example uses the default Deep Chat theme."),(0,a.kt)(u.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,a.kt)(o.Z,{mdxType:"ComponentContainer"},(0,a.kt)(l.Z,{demo:!0,initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],style:{borderRadius:"10px",width:"96vw",height:"calc(100vh - 70px)",paddingTop:"10px"},messageStyles:{default:{shared:{innerContainer:{fontSize:"1rem",width:"95%"}}}},inputAreaStyle:{fontSize:"1rem"},stream:!0,mdxType:"DeepChatBrowser"})),(0,a.kt)(s.Z,{mdxType:"CodeToggle"},(0,a.kt)(c.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  style="border-radius: 10px; width: 96vw; height: calc(100vh - 70px); padding-top: 10px"\n  messageStyles=\'{"default": {"shared": {"innerContainer": {"fontSize": "1rem", "width": "95%"}}}}\'\n  inputAreaStyle=\'{"fontSize": "1rem"}\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  demo="true"\n  stream="true"\n></deep-chat>\n')))),(0,a.kt)(i.Z,{mdxType:"LineBreak"}),(0,a.kt)("h3",{id:"chatGPT"},"ChatGPT"),(0,a.kt)("p",null,"This example uses a design similar to ",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"ChatGPT"),"."),(0,a.kt)(o.Z,{mdxType:"ComponentContainer"},(0,a.kt)(l.Z,{demo:!0,initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],style:{borderRadius:"10px",width:"96vw",height:"calc(100vh - 70px)",paddingTop:"10px"},messageStyles:{default:{shared:{innerContainer:{width:"95%"},bubble:{maxWidth:"100%",backgroundColor:"unset",marginTop:"10px",marginBottom:"10px",fontSize:"1rem"}},user:{bubble:{marginLeft:"0px",color:"black"}},ai:{outerContainer:{backgroundColor:"rgba(247,247,248)",borderTop:"1px solid rgba(0,0,0,.1)",borderBottom:"1px solid rgba(0,0,0,.1)"}}}},stream:!0,avatars:{default:{styles:{position:"left"}},ai:{src:"/img/openAIGreyLogo.svg",styles:{avatar:{filter:"brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(893%) hue-rotate(65deg) brightness(99%) contrast(89%)"}}}},submitButtonStyles:{submit:{container:{default:{backgroundColor:"#19c37d"},hover:{backgroundColor:"#0bab69"},click:{backgroundColor:"#068e56"}},svg:{content:'<?xml version="1.0" encoding="utf-8"?> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z"> </path> </svg>',styles:{default:{width:"1.3em",marginTop:"0.15em",filter:"brightness(0) saturate(100%) invert(100%) sepia(28%) saturate(2%) hue-rotate(69deg) brightness(107%) contrast(100%)"}}}},loading:{svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}}}},stop:{container:{default:{backgroundColor:"white"}},svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}}}}},inputAreaStyle:{fontSize:"1rem"},textInput:{placeholder:{text:"Send a message"}},mdxType:"DeepChatBrowser"})),(0,a.kt)(s.Z,{mdxType:"CodeToggle"},(0,a.kt)(c.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  style="border-radius: 10px; width: 96vw; height: calc(100vh - 70px); padding-top: 10px"\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "innerContainer": {"width": "95%"},\n        "bubble": {\n          "maxWidth": "100%", "backgroundColor": "unset", "marginTop": "10px", "marginBottom": "10px", "fontSize": "1rem"}},\n      "user": {\n        "bubble": {\n          "marginLeft": "0px", "color": "black"}},\n      "ai": {\n        "outerContainer": {\n          "backgroundColor": "rgba(247,247,248)", "borderTop": "1px solid rgba(0,0,0,.1)", "borderBottom": "1px solid rgba(0,0,0,.1)"\n        }\n      }\n    }\n  }\'\n  avatars=\'{\n    "default": {"styles": {"position": "left"}},\n    "ai": {"src": "path-to-icon.png"}\n  }\'\n  submitButtonStyles=\'{\n    "submit": {\n      "container": {\n        "default": {"backgroundColor": "#19c37d"},\n        "hover": {"backgroundColor": "#0bab69"},\n        "click": {"backgroundColor": "#068e56"}\n      },\n      "svg": {\n        "content": "<?xml version=\\"1.0\\" ?> <svg viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"> <g> <path d=\\"M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z\\"> </path> </g> </svg>",\n        "styles": {\n          "default": {\n            "width": "1.3em",\n            "marginTop": "0.15em",\n            "filter": "brightness(0) saturate(100%) invert(100%) sepia(28%) saturate(2%) hue-rotate(69deg) brightness(107%) contrast(100%)"\n          }\n        }\n      }\n    },\n    "loading": {\n      "svg": {\n        "styles": {\n          "default": {"filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}\n        }\n      }\n    },\n    "stop": {\n      "container": {"default": {"backgroundColor": "white"}},\n      "svg": {\n        "styles": {\n          "default": {"filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}\n        }\n      }\n    }\n  }\'\n  inputAreaStyle=\'{"fontSize": "1rem"}\'\n  textInput=\'{"placeholder": {"text": "Send a message"}}\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  demo="true"\n  stream="true"\n></deep-chat>\n')))),(0,a.kt)(i.Z,{mdxType:"LineBreak"}),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("p",null,"If you want to automatically scale the inner chat's elements relative to the font-size, you can simply add the desired ",(0,a.kt)("em",{parentName:"p"},"font-size"),"\ninside the ",(0,a.kt)("a",{parentName:"p",href:"../../docs/styles#style"},(0,a.kt)("inlineCode",{parentName:"a"},"style"))," property."),(0,a.kt)(o.Z,{mdxType:"ComponentContainer"},(0,a.kt)(l.Z,{demo:!0,initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],style:{borderRadius:"10px",width:"96vw",height:"calc(100vh - 70px)",fontSize:"1.37rem",paddingTop:"10px"},stream:!0,mdxType:"DeepChatBrowser"})),(0,a.kt)(s.Z,{mdxType:"CodeToggle"},(0,a.kt)(c.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  style="border-radius: 10px; width: 96vw; height: calc(100vh - 70px); font-size: 1.37rem; padding-top: 10px"\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  demo="true"\n  stream="true"\n></deep-chat>\n')))),(0,a.kt)(i.Z,{mdxType:"LineBreak"}))}y.isMDXComponent=!0}}]);