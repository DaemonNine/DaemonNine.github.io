import{_ as i}from"./preload-helper-41c905a7.js";const s=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function a({params:o}){const e=await s(Object.assign({"../../../lib/posts/EgenPost.svx":()=>i(()=>import("./EgenPost-d4dd5bcb.js"),["./EgenPost-d4dd5bcb.js","./index-f5745ca0.js"],import.meta.url),"../../../lib/posts/boom.svx":()=>i(()=>import("./boom-d192328e.js"),["./boom-d192328e.js","./index-f5745ca0.js"],import.meta.url)}),`../../../lib/posts/${o.path}.svx`),{title:t,date:r}=e.metadata;return{content:e.default,title:t,date:r}}const l=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{l as _,a as l};
