import{S as L,i as M,s as O,k as d,q as v,a as B,l as m,m as g,r as b,h as u,c as H,b as E,F as p,J as j,M as x,n as k,u as y}from"../chunks/index.036febc4.js";async function z({fetch:r}){return{posts:await(await r("/api/posts")).json()}}const I=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function q(r,a,i){const s=r.slice();return s[1]=a[i],s}function w(r){let a,i,s,o=r[1].meta.title+"",c,l,e,n=r[1].meta.date+"",t,f;return{c(){a=d("li"),i=d("h2"),s=d("a"),c=v(o),e=v(`
      Published `),t=v(n),f=B(),this.h()},l(_){a=m(_,"LI",{});var h=g(a);i=m(h,"H2",{});var P=g(i);s=m(P,"A",{href:!0});var S=g(s);c=b(S,o),S.forEach(u),P.forEach(u),e=b(h,`
      Published `),t=b(h,n),f=H(h),h.forEach(u),this.h()},h(){k(s,"href",l="/blog/"+r[1].path)},m(_,h){E(_,a,h),p(a,i),p(i,s),p(s,c),p(a,e),p(a,t),p(a,f)},p(_,h){h&1&&o!==(o=_[1].meta.title+"")&&y(c,o),h&1&&l!==(l="/blog/"+_[1].path)&&k(s,"href",l),h&1&&n!==(n=_[1].meta.date+"")&&y(t,n)},d(_){_&&u(a)}}}function A(r){let a,i,s,o,c=r[0].posts,l=[];for(let e=0;e<c.length;e+=1)l[e]=w(q(r,c,e));return{c(){a=d("h1"),i=v("Blog"),s=B(),o=d("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){a=m(e,"H1",{});var n=g(a);i=b(n,"Blog"),n.forEach(u),s=H(e),o=m(e,"UL",{});var t=g(o);for(let f=0;f<l.length;f+=1)l[f].l(t);t.forEach(u)},m(e,n){E(e,a,n),p(a,i),E(e,s,n),E(e,o,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(o,null)},p(e,[n]){if(n&1){c=e[0].posts;let t;for(t=0;t<c.length;t+=1){const f=q(e,c,t);l[t]?l[t].p(f,n):(l[t]=w(f),l[t].c(),l[t].m(o,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=c.length}},i:j,o:j,d(e){e&&u(a),e&&u(s),e&&u(o),x(l,e)}}}function C(r,a,i){let{data:s}=a;return console.log(s),r.$$set=o=>{"data"in o&&i(0,s=o.data)},[s]}class J extends L{constructor(a){super(),M(this,a,C,A,O,{data:0})}}export{J as component,I as universal};
