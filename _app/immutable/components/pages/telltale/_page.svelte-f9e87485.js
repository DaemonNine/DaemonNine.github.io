import{S as H,i as $,s as q,k as b,q as I,a as R,l as y,m as w,r as E,h,c as T,n as g,b as p,G as v,t as N,d as C,f as P,K as F,a1 as L,a2 as U,a3 as W,g as z,B as K,a4 as x,u as S,N as J,R as D,a5 as Q,e as Y,a6 as X,P as ee}from"../../../chunks/index-3301377a.js";import{w as te}from"../../../chunks/index-22b79fa9.js";var Z;const le=(Z=window.localStorage.getItem("story_id"))!=null?Z:"1",O=te(le);O.subscribe(r=>{window.localStorage.setItem("story_id",r),console.log(r)});let se=[{id:"1",message:"The story begins with Ewol and Rosa, Ewol invites Rosa home while he is with one of his best friends Otis. Otis and YOU (daddy) are in the basement smoking ZAZA. Your son Ewol is alone with Rosa inside of his room and he loses all senses of rationality and sexually assaults her. Otis walks up to Ewol\u2019s room to witness what had occurred. The next day at school everyone is looking at your son weird. He is called to the principal\u2019s office and you have to speak as a witness. ",img:"theZA.jpg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"\u{1F923}\u{1F923}\u{1F923}\u{1F923}\u{1F923}",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function ie(r){const e=r-1;return e*e*e+1}function j(r,{delay:e=0,duration:s=400,easing:i=ie,x:a=0,y:n=0,opacity:f=0}={}){const l=getComputedStyle(r),t=+l.opacity,c=l.transform==="none"?"":l.transform,m=t*(1-f);return{delay:e,duration:s,easing:i,css:(u,o)=>`
			transform: ${c} translate(${(1-u)*a}px, ${(1-u)*n}px);
			opacity: ${t-m*o}`}}function A(r,e,s){const i=r.slice();return i[4]=e[s],i}function ae(r){let e,s,i,a;return{c(){e=b("p"),s=I("STORY FOR ID "),i=I(r[0]),a=I(" MISSING")},l(n){e=y(n,"P",{});var f=w(e);s=E(f,"STORY FOR ID "),i=E(f,r[0]),a=E(f," MISSING"),f.forEach(h)},m(n,f){p(n,e,f),v(e,s),v(e,i),v(e,a)},p(n,f){f&1&&S(i,n[0])},d(n){n&&h(e)}}}function oe(r){let e,s,i,a=r[1].message+"",n,f,l,t=r[1].img&&B(r),c=r[1].html&&G(r),m=r[1].choices,u=[];for(let o=0;o<m.length;o+=1)u[o]=M(A(r,m,o));return{c(){t&&t.c(),e=R(),c&&c.c(),s=R(),i=b("p"),n=I(a),f=R(),l=b("div");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){t&&t.l(o),e=T(o),c&&c.l(o),s=T(o),i=y(o,"P",{});var d=w(i);n=E(d,a),d.forEach(h),f=T(o),l=y(o,"DIV",{class:!0});var _=w(l);for(let k=0;k<u.length;k+=1)u[k].l(_);_.forEach(h),this.h()},h(){g(l,"class","row svelte-wulxbe")},m(o,d){t&&t.m(o,d),p(o,e,d),c&&c.m(o,d),p(o,s,d),p(o,i,d),v(i,n),p(o,f,d),p(o,l,d);for(let _=0;_<u.length;_+=1)u[_].m(l,null)},p(o,d){if(o[1].img?t?t.p(o,d):(t=B(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),o[1].html?c?c.p(o,d):(c=G(o),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),d&2&&a!==(a=o[1].message+"")&&S(n,a),d&6){m=o[1].choices;let _;for(_=0;_<m.length;_+=1){const k=A(o,m,_);u[_]?u[_].p(k,d):(u[_]=M(k),u[_].c(),u[_].m(l,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=m.length}},d(o){t&&t.d(o),o&&h(e),c&&c.d(o),o&&h(s),o&&h(i),o&&h(f),o&&h(l),J(u,o)}}}function B(r){let e,s,i;return{c(){e=b("img"),this.h()},l(a){e=y(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){D(e.src,s=r[1].img)||g(e,"src",s),g(e,"alt",i=r[1].message),g(e,"class","svelte-wulxbe")},m(a,n){p(a,e,n)},p(a,n){n&2&&!D(e.src,s=a[1].img)&&g(e,"src",s),n&2&&i!==(i=a[1].message)&&g(e,"alt",i)},d(a){a&&h(e)}}}function G(r){let e,s=r[1].html+"",i;return{c(){e=new Q(!1),i=Y(),this.h()},l(a){e=X(a,!1),i=Y(),this.h()},h(){e.a=i},m(a,n){e.m(s,a,n),p(a,i,n)},p(a,n){n&2&&s!==(s=a[1].html+"")&&e.p(s)},d(a){a&&h(i),a&&e.d()}}}function M(r){let e,s=r[4].text+"",i,a,n;function f(){return r[3](r[4])}return{c(){e=b("button"),i=I(s)},l(l){e=y(l,"BUTTON",{});var t=w(e);i=E(t,s),t.forEach(h)},m(l,t){p(l,e,t),v(e,i),a||(n=ee(e,"click",f),a=!0)},p(l,t){r=l,t&2&&s!==(s=r[4].text+"")&&S(i,s)},d(l){l&&h(e),a=!1,n()}}}function V(r){let e,s,i,a;function n(t,c){return t[1]?oe:ae}let f=n(r),l=f(r);return{c(){e=b("div"),l.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var c=w(e);l.l(c),c.forEach(h),this.h()},h(){g(e,"class","container svelte-wulxbe")},m(t,c){p(t,e,c),l.m(e,null),a=!0},p(t,c){f===(f=n(t))&&l?l.p(t,c):(l.d(1),l=f(t),l&&(l.c(),l.m(e,null)))},i(t){a||(t&&L(()=>{i&&i.end(1),s=U(e,j,{x:800,duration:750}),s.start()}),a=!0)},o(t){s&&s.invalidate(),t&&(i=W(e,j,{x:-800,duration:750})),a=!1},d(t){t&&h(e),l.d(),t&&i&&i.end()}}}function re(r){let e,s,i,a,n,f=r[0],l=V(r);return{c(){e=b("main"),s=b("div"),i=b("title"),a=I("Telltale"),n=R(),l.c(),this.h()},l(t){e=y(t,"MAIN",{class:!0});var c=w(e);s=y(c,"DIV",{class:!0});var m=w(s);i=y(m,"TITLE",{});var u=w(i);a=E(u,"Telltale"),u.forEach(h),n=T(m),l.l(m),m.forEach(h),c.forEach(h),this.h()},h(){g(s,"class","grid svelte-wulxbe"),g(e,"class","svelte-wulxbe")},m(t,c){p(t,e,c),v(e,s),v(s,i),v(i,a),v(s,n),l.m(s,null)},p(t,[c]){c&1&&q(f,f=t[0])?(z(),N(l,1,1,K),C(),l=V(t),l.c(),P(l,1),l.m(s,null)):l.p(t,c)},i(t){P(l)},o(t){N(l)},d(t){t&&h(e),l.d(t)}}}function ne(r,e,s){let i,a,n;F(r,O,l=>s(2,n=l));const f=l=>{x(O,n=l.id,n)};return r.$$.update=()=>{r.$$.dirty&4&&s(0,i=n),r.$$.dirty&1&&s(1,a=se.find(l=>l.id==i))},[i,a,n,f]}class ue extends H{constructor(e){super(),$(this,e,ne,re,q,{})}}export{ue as default};