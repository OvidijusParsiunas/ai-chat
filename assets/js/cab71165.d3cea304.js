"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[246,722],{8993:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(4602),n=r(8073),a=r(7294);function c(){return a.createElement("div",{id:"speech-right-panel",className:"feature-panel"},a.createElement(s.Z,{directConnection:{demo:!0},initialMessages:[{text:"What is speech to text?",role:"user"},{text:"Transcribe your voice via the microphone button.",role:"ai"},{text:"Ok, then how does text to speech work?",role:"user"},{text:"Send a message and listen to the response.",role:"ai"}],containerStyle:{borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",borderColor:"#ededed"},microphone:!0}))}function i(){return a.createElement("div",{id:"speech-left-panel",className:"feature-panel"},a.createElement("div",{id:"speech-text"},"Input your text using real time speech to text transcription and have the responses read out to you automatically using text to speech synthesis."))}function o(){return a.createElement("div",{id:"speech"},a.createElement(n.default,{beforeClass:"speech-panels-hidden",afterClass:"speech-panels-visible",timeoutMS:300},a.createElement("div",{id:"speech-sub-header",className:"feature-sub-header"},"Enhance chat with Speech"),a.createElement("div",{id:"speech-content"},a.createElement(i,null),a.createElement(c,null))))}},8073:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var s=r(7294);function n(e){let{children:t,beforeClass:r,afterClass:n,timeoutMS:a}=e;const c=s.useRef(),[i,o]=s.useState(!1);return s.useEffect((()=>{const e=new IntersectionObserver((t=>{t[0].isIntersecting&&(void 0!==a?setTimeout((()=>o(!0)),a||0):o(!0),e.unobserve(c.current))}));return e.observe(c.current),()=>e.disconnect()}),[]),s.createElement("div",{ref:c,className:i?n:r},t)}}}]);