"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7654],{64602:(e,s,t)=>{t.d(s,{Z:()=>o});var n=t(91262),a=t(67294);function o(e){return a.createElement(n.Z,null,(()=>{const s=t(62150).DeepChat;return a.createElement(s,e,e.children)}))}},92765:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var n=t(64602),a=t(92949),o=t(91262),l=t(67294);const i={response:{text:"Click the 'Configure' button below to connect to a service."}};function r(e){let{config:s}=e;const t=l.createRef(null);function r(e){let{isInitial:n}=e;if(!n){const e=t.current.children[0];s.connect?.openAI?.assistant&&function(e,s){e._activeService.rawBody.assistant_id&&("boolean"==typeof s.connect.openAI.assistant?s.connect.openAI.assistant={assistant_id:e._activeService.rawBody.assistant_id}:s.connect.openAI.assistant.assistant_id||(s.connect.openAI.assistant.assistant_id=e._activeService.rawBody.assistant_id))}(e,s);const{messages:n}=s;n.splice(0,n.length),n.push(...e.getMessages())}}function p(){s?.messages.splice(0,s.messages.length)}function y(e,s){if(e[s]){const t=e[s];return delete e[s],t}const t="key"===Object.keys(e)[0]?Object.keys(e)[1]:Object.keys(e)[0];return"object"==typeof e[t]&&y(e[t],s)}function f(e){const s="boolean"==typeof e?{}:e;return Object.assign({load:{onMessage:!0}},s)}return l.createElement(o.Z,null,(()=>{const{colorMode:e}=(0,a.I)(),{connect:o,allowImages:M,allowCamera:h,allowGifs:x,allowAudio:C,allowMicrophone:k,allowMixedFiles:S}=function(e){if(!e?.connect)return{connect:e?.connect};const s=JSON.parse(JSON.stringify(e.connect));return{connect:s,allowImages:y(s,"allowImages"),allowCamera:y(s,"allowCamera"),allowGifs:y(s,"allowGifs"),allowAudio:y(s,"allowAudio"),allowMicrophone:y(s,"allowMicrophone"),allowMixedFiles:y(s,"allowMixedFiles")}}(s);return"dark"===e?l.createElement("div",{ref:t,className:"playground-chat-component"},s?.connect?.custom?l.createElement(n.Z,{request:o.custom,images:M,camera:h,gifs:x,audio:C,microphone:k,mixedFiles:S,style:c,messageStyles:d,initialMessages:s.messages,onNewMessage:r,onClearMessages:p,textInput:g,submitButtonStyles:u,auxiliaryStyle:m,introPanelStyle:b}):s?.connect?.demo?l.createElement(n.Z,{demo:i,style:c,messageStyles:d,initialMessages:s.messages,onNewMessage:r,onClearMessages:p,textInput:g,submitButtonStyles:u,auxiliaryStyle:m,introPanelStyle:b}):s?.connect?.webModel?l.createElement(n.Z,{webModel:f(s.connect.webModel),style:c,messageStyles:d,initialMessages:s.messages,onNewMessage:r,onClearMessages:p}):l.createElement(n.Z,{directConnection:o,images:M,camera:h,gifs:x,audio:C,microphone:k,mixedFiles:S,style:c,messageStyles:d,initialMessages:s.messages,onNewMessage:r,onClearMessages:p,textInput:g,submitButtonStyles:u,auxiliaryStyle:m,introPanelStyle:b})):l.createElement("div",{ref:t,className:"playground-chat-component"},s?.connect?.custom?l.createElement(n.Z,{request:o.custom,images:M,camera:h,gifs:x,audio:C,microphone:k,mixedFiles:S,style:w,initialMessages:s.messages,onNewMessage:r,onClearMessages:p}):s?.connect?.demo?l.createElement(n.Z,{demo:i,style:w,initialMessages:s.messages,onNewMessage:r,onClearMessages:p}):s?.connect?.webModel?l.createElement(n.Z,{webModel:f(s.connect.webModel),style:w,initialMessages:s.messages,onNewMessage:r,onClearMessages:p}):l.createElement(n.Z,{directConnection:o,images:M,camera:h,gifs:x,audio:C,microphone:k,mixedFiles:S,style:w,initialMessages:s.messages,onNewMessage:r,onClearMessages:p}))}))}const c={borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",border:"1px solid #ededed",marginLeft:"10px",border:"unset",marginRight:"10px",width:"302px",backgroundColor:"#2e2e2e"},d={default:{ai:{bubble:{backgroundColor:"#545454",color:"white"}}},loading:{bubble:{backgroundColor:"#545454",color:"white"}}},g={styles:{container:{backgroundColor:"#4e4e4e",border:"unset",color:"#e8e8e8"}},placeholder:{style:{color:"#bcbcbc"}}},u={submit:{container:{default:{bottom:"0.7rem"}},svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(70%) sepia(52%) saturate(5617%) hue-rotate(185deg) brightness(101%) contrast(101%)"}}}}},m="\n  ::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: grey;\n    border-radius: 5px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: unset;\n  }",b={backgroundColor:"#4f4f4f",color:"white",border:"unset"},w={borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",border:"1px solid #ededed",marginLeft:"10px",marginRight:"10px",width:"302px"}}}]);