"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(72389);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},11853:(e,t,n)=>{function o(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];o(t),window.toggleNavOnScroll=o.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function i(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>i,readdAutoNavShadowToggle:()=>r})},33184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(91262);const a={sidebar_position:0},s="Introduction",c={unversionedId:"docs/introduction",id:"docs/introduction",title:"Introduction",description:"Deep Chat is a framework agnostic chat component built to bring AI services to life",source:"@site/docs/docs/introduction.mdx",sourceDirName:"docs",slug:"/docs/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docs",next:{title:"Installation",permalink:"/docs/installation"}},l={},u=[{value:"Vision",id:"vision",level:3},{value:"Open source",id:"open-source",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"#heading-id"},"Deep Chat is a framework agnostic chat component built to bring AI services to life"),(0,r.kt)("h3",{id:"vision"},"Vision"),(0,r.kt)("p",null,"Building a custom chat component that can interact with a remote service is no easy feat. This is a challenge that we took on with full force,\nultimately releasing a web component capable of connecting to any API with minimal amount of effort required."),(0,r.kt)("p",null,"No two chat components will ever be the same. We understand that your APIs have unique requirements and your websites demand novel UX.\nThis is why Deep Chat is built to be fully customizable; from interactive features to minute styling details - everything can be changed to build\nthe component you need."),(0,r.kt)("p",null,"Developer experience is paramount to this component's success! This is why Deep Chat is shipped in a cross-framework plug-and-play package to allow you\nto get started in just a few seconds no matter what platform you use! Additionally, we carefully monitor all of your feedback to help us optimise\nyour and your users' chat experience as well as use it as a base point for helping us decide what future improvements the component will need."),(0,r.kt)("h3",{id:"open-source"},"Open source"),(0,r.kt)("p",null,"Open source is at the heart of what we do. Deep Chat is built by the community - for the community. All contributions to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OvidijusParsiunas/deep-chat"},(0,r.kt)("strong",{parentName:"a"},"project"))," are welcome!"),(0,r.kt)("p",null,"If you have any suggestions for enhancements, ideas on how to take the project further or have discovered a bug, do not hesitate to create a new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OvidijusParsiunas/deep-chat/issues/new"},(0,r.kt)("strong",{parentName:"a"},"issue ticket"))," and we will look into it as soon as possible!"),(0,r.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>n(11853).readdAutoNavShadowToggle())))}m.isMDXComponent=!0}}]);