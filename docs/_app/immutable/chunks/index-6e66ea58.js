import{B as a,s as y,C as m,D as q,E as w}from"./index-f5745ca0.js";const o=[];function z(e,u){return{subscribe:A(e,u).subscribe}}function A(e,u=a){let r;const n=new Set;function f(t){if(y(e,t)&&(e=t,r)){const i=!o.length;for(const s of n)s[1](),o.push(s,e);if(i){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(t){f(t(e))}function b(t,i=a){const s=[t,i];return n.add(s),n.size===1&&(r=u(f)||a),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:f,update:l,subscribe:b}}function B(e,u,r){const n=!Array.isArray(e),f=n?[e]:e,l=u.length<2;return z(r,b=>{let t=!1;const i=[];let s=0,d=a;const g=()=>{if(s)return;d();const c=u(n?i[0]:i,b);l?b(c):d=w(c)?c:a},_=f.map((c,p)=>m(c,h=>{i[p]=h,s&=~(1<<p),t&&g()},()=>{s|=1<<p}));return t=!0,g(),function(){q(_),d(),t=!1}})}export{B as d,A as w};
