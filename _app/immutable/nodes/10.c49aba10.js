import{_ as R}from"../chunks/preload-helper.41c905a7.js";import{S as z,i as C,s as D,x as q,k as b,q as P,a as x,y as O,l as y,m as E,r as w,h as d,c as S,z as H,b as L,F as l,A as T,u as j,d as A,f as B,g as I,B as M,v as F}from"../chunks/index.036febc4.js";const U=(r,t)=>{const a=r[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function V({params:r}){const t=await U(Object.assign({"../../../lib/posts/EgenPost.svx":()=>R(()=>import("../chunks/EgenPost.deb838d0.js"),["../chunks/EgenPost.deb838d0.js","../chunks/index.036febc4.js"],import.meta.url)}),`../../../lib/posts/${r.path}.svx`),{title:a,date:s}=t.metadata;return{content:t.default,title:a,date:s}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:V},Symbol.toStringTag,{value:"Module"}));function G(r){let t,a,s=r[0].title+"",i,v,c,h,f=r[0].date+"",p,g,e,u;var _=r[0].content;function k(n){return{}}return _&&(e=q(_,k())),{c(){t=b("article"),a=b("h1"),i=P(s),v=x(),c=b("p"),h=P("Published: "),p=P(f),g=x(),e&&O(e.$$.fragment)},l(n){t=y(n,"ARTICLE",{});var o=E(t);a=y(o,"H1",{});var m=E(a);i=w(m,s),m.forEach(d),v=S(o),c=y(o,"P",{});var $=E(c);h=w($,"Published: "),p=w($,f),$.forEach(d),g=S(o),e&&H(e.$$.fragment,o),o.forEach(d)},m(n,o){L(n,t,o),l(t,a),l(a,i),l(t,v),l(t,c),l(c,h),l(c,p),l(t,g),e&&T(e,t,null),u=!0},p(n,[o]){if((!u||o&1)&&s!==(s=n[0].title+"")&&j(i,s),(!u||o&1)&&f!==(f=n[0].date+"")&&j(p,f),o&1&&_!==(_=n[0].content)){if(e){F();const m=e;A(m.$$.fragment,1,0,()=>{M(m,1)}),B()}_?(e=q(_,k()),O(e.$$.fragment),I(e.$$.fragment,1),T(e,t,null)):e=null}},i(n){u||(e&&I(e.$$.fragment,n),u=!0)},o(n){e&&A(e.$$.fragment,n),u=!1},d(n){n&&d(t),e&&M(e)}}}function J(r,t,a){let{data:s}=t;return r.$$set=i=>{"data"in i&&a(0,s=i.data)},[s]}class W extends z{constructor(t){super(),C(this,t,J,G,D,{data:0})}}export{W as component,Q as universal};