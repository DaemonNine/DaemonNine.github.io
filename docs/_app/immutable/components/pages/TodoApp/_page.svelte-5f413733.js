import{S as H,i as J,s as M,k as T,q as U,a as I,l as z,m as N,r as B,h as g,c as L,n as O,b as C,D as a,U as R,I as q,B as S,L as V,J as D,V as Y,u as j}from"../../../chunks/index-73231da7.js";function w(l,e,i){const o=l.slice();return o[6]=e[i],o[7]=e,o[8]=i,o}function A(l){let e,i=l[8]+1+"",o,c,h=l[6].task+"",v,p,d,m,_,f,y,k,s,t,u;function n(){return l[4](l[6],l[7],l[8])}function E(){return l[5](l[6],l[8])}return{c(){e=T("li"),o=U(i),c=U(": "),v=U(h),p=I(),d=T("button"),m=U("Finished task \u2713"),_=I(),f=T("button"),y=U("Remove"),k=I(),this.h()},l(b){e=z(b,"LI",{class:!0});var r=N(e);o=B(r,i),c=B(r,": "),v=B(r,h),p=L(r),d=z(r,"BUTTON",{class:!0});var F=N(d);m=B(F,"Finished task \u2713"),F.forEach(g),_=L(r),f=z(r,"BUTTON",{class:!0});var P=N(f);y=B(P,"Remove"),P.forEach(g),k=L(r),r.forEach(g),this.h()},h(){O(d,"class","button svelte-xzrazm"),O(f,"class","removeButton svelte-xzrazm"),O(e,"class",s=Y(l[6].done?"done":void 0)+" svelte-xzrazm")},m(b,r){C(b,e,r),a(e,o),a(e,c),a(e,v),a(e,p),a(e,d),a(d,m),a(e,_),a(e,f),a(f,y),a(e,k),t||(u=[q(d,"click",n),q(f,"click",E)],t=!0)},p(b,r){l=b,r&2&&h!==(h=l[6].task+"")&&j(v,h),r&2&&s!==(s=Y(l[6].done?"done":void 0)+" svelte-xzrazm")&&O(e,"class",s)},d(b){b&&g(e),t=!1,D(u)}}}function G(l){let e,i,o,c,h,v,p,d,m,_,f,y,k=l[1],s=[];for(let t=0;t<k.length;t+=1)s[t]=A(w(l,k,t));return{c(){e=T("main"),i=T("h2"),o=U("Todo's"),c=I(),h=T("input"),v=I(),p=T("button"),d=U("+"),m=I(),_=T("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=z(t,"MAIN",{});var u=N(e);i=z(u,"H2",{});var n=N(i);o=B(n,"Todo's"),n.forEach(g),c=L(u),h=z(u,"INPUT",{}),v=L(u),p=z(u,"BUTTON",{});var E=N(p);d=B(E,"+"),E.forEach(g),m=L(u),_=z(u,"UL",{class:!0});var b=N(_);for(let r=0;r<s.length;r+=1)s[r].l(b);b.forEach(g),u.forEach(g),this.h()},h(){O(_,"class","svelte-xzrazm")},m(t,u){C(t,e,u),a(e,i),a(i,o),a(e,c),a(e,h),R(h,l[0]),a(e,v),a(e,p),a(p,d),a(e,m),a(e,_);for(let n=0;n<s.length;n+=1)s[n].m(_,null);f||(y=[q(h,"input",l[3]),q(p,"click",l[2])],f=!0)},p(t,[u]){if(u&1&&h.value!==t[0]&&R(h,t[0]),u&2){k=t[1];let n;for(n=0;n<k.length;n+=1){const E=w(t,k,n);s[n]?s[n].p(E,u):(s[n]=A(E),s[n].c(),s[n].m(_,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=k.length}},i:S,o:S,d(t){t&&g(e),V(s,t),f=!1,D(y)}}}function K(l,e,i){let o="",c=[];function h(){o===""?alert("You have to type something"):(c.push({task:o,done:!1}),i(1,c))}function v(){o=this.value,i(0,o)}return[o,c,h,v,(m,_,f)=>{i(1,_[f].done=!m.done,c),i(1,c)},(m,_)=>{m.done?(c.splice(_,1),i(1,c)):alert("You haven't finished the task!")}]}class W extends H{constructor(e){super(),J(this,e,K,G,M,{})}}export{W as default};