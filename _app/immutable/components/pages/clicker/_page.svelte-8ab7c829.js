import{S as ht,i as bt,s as mt,k as r,q as _,a as c,l as o,m,r as h,h as s,c as f,n as P,b as at,G as t,M as rt,u as ot,B as ut,D as pt}from"../../../chunks/index-33bca65f.js";function dt(u){let p,n,i,d,e,B,I,R,F,A,D,G,v,H,N,L,k,E,M,q,T,g,V,j,w,z,y,J,K,O,Q,W,X,Y,Z,C,x,$,S,tt,lt;return{c(){p=r("head"),n=r("title"),i=_("Clicker!"),d=c(),e=r("main"),B=r("p"),I=_("Get free cookies!"),R=c(),F=r("div"),A=c(),D=r("br"),G=c(),v=r("button"),H=_("Cookies: "),N=_(u[0]),L=c(),k=r("form"),E=r("label"),M=_("Set cookie amount:"),q=c(),T=r("input"),g=c(),V=r("br"),j=c(),w=r("br"),z=c(),y=r("button"),J=_("Purchase Baker"),K=_(`
    Bakers = `),O=_(u[1]),Q=c(),W=r("br"),X=c(),Y=r("br"),Z=c(),C=r("button"),x=_("Purchase Factory"),$=_(`
    Factories = `),S=_(u[2]),this.h()},l(l){p=o(l,"HEAD",{});var b=m(p);n=o(b,"TITLE",{});var nt=m(n);i=h(nt,"Clicker!"),nt.forEach(s),b.forEach(s),d=f(l),e=o(l,"MAIN",{});var a=m(e);B=o(a,"P",{});var st=m(B);I=h(st,"Get free cookies!"),st.forEach(s),R=f(a),F=o(a,"DIV",{class:!0});var _t=m(F);_t.forEach(s),A=f(a),D=o(a,"BR",{}),G=f(a),v=o(a,"BUTTON",{});var et=m(v);H=h(et,"Cookies: "),N=h(et,u[0]),et.forEach(s),L=f(a),k=o(a,"FORM",{action:!0});var U=m(k);E=o(U,"LABEL",{for:!0});var it=m(E);M=h(it,"Set cookie amount:"),it.forEach(s),q=f(U),T=o(U,"INPUT",{type:!0,id:!0,name:!0}),U.forEach(s),g=f(a),V=o(a,"BR",{}),j=f(a),w=o(a,"BR",{}),z=f(a),y=o(a,"BUTTON",{});var ct=m(y);J=h(ct,"Purchase Baker"),ct.forEach(s),K=h(a,`
    Bakers = `),O=h(a,u[1]),Q=f(a),W=o(a,"BR",{}),X=f(a),Y=o(a,"BR",{}),Z=f(a),C=o(a,"BUTTON",{});var ft=m(C);x=h(ft,"Purchase Factory"),ft.forEach(s),$=h(a,`
    Factories = `),S=h(a,u[2]),a.forEach(s),this.h()},h(){P(F,"class","container"),P(E,"for","fname"),P(T,"type","text"),P(T,"id","fname"),P(T,"name","fname"),P(k,"action","/action_page.php")},m(l,b){at(l,p,b),t(p,n),t(n,i),at(l,d,b),at(l,e,b),t(e,B),t(B,I),t(e,R),t(e,F),t(e,A),t(e,D),t(e,G),t(e,v),t(v,H),t(v,N),t(e,L),t(e,k),t(k,E),t(E,M),t(k,q),t(k,T),t(e,g),t(e,V),t(e,j),t(e,w),t(e,z),t(e,y),t(y,J),t(e,K),t(e,O),t(e,Q),t(e,W),t(e,X),t(e,Y),t(e,Z),t(e,C),t(C,x),t(e,$),t(e,S),tt||(lt=[rt(v,"click",u[3]),rt(y,"click",u[4]),rt(C,"click",u[5])],tt=!0)},p(l,[b]){b&1&&ot(N,l[0]),b&2&&ot(O,l[1]),b&4&&ot(S,l[2])},i:ut,o:ut,d(l){l&&s(p),l&&s(d),l&&s(e),tt=!1,pt(lt)}}}function kt(u,p,n){var i=0;let d=0,e=0;function B(){n(0,i+=1)}function I(){i>=5&&(n(1,d+=1),n(0,i-=5))}function R(){i>=1e3&&(n(2,e+=1),n(0,i-=1e3))}return setInterval(function(){d>0&&n(0,i+=d*1)},1e3),setInterval(function(){e>0&&n(0,i+=e*100)},1e3),[i,d,e,B,I,R]}class vt extends ht{constructor(p){super(),bt(this,p,kt,dt,mt,{})}}export{vt as default};
