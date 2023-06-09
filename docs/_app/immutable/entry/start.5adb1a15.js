import{o as je,t as _e}from"../chunks/index.ced777c7.js";import{S as Ke,a as ze,I as q,g as Ne,f as qe,b as we,c as le,s as F,d as Z,i as ye,e as z,P as Me,h as Ye}from"../chunks/singletons.fc754821.js";import{R as Ve,H as ee}from"../chunks/control.f5b05b5f.js";import{u as Xe}from"../chunks/parse.bee59afc.js";function Qe(a,s){return a==="/"||s==="ignore"?a:s==="never"?a.endsWith("/")?a.slice(0,-1):a:s==="always"&&!a.endsWith("/")?a+"/":a}function Ze(a){return a.split("%25").map(decodeURI).join("%25")}function et(a){for(const s in a)a[s]=decodeURIComponent(a[s]);return a}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(a,s){const l=new URL(a);for(const c of tt)Object.defineProperty(l,c,{get(){return s(),a[c]},enumerable:!0,configurable:!0});return at(l),l}function at(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(a){return a.replace(/\/$/,"")+rt}function Je(a){try{return JSON.parse(sessionStorage[a])}catch{}}function Fe(a,s){const l=JSON.stringify(s);try{sessionStorage[a]=l}catch{}}function it(...a){let s=5381;for(const l of a)if(typeof l=="string"){let c=l.length;for(;c;)s=s*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let g=c.length;for(;g;)s=s*33^c[--g]}else throw new TypeError("value must be a string or TypedArray");return(s>>>0).toString(36)}const fe=window.fetch;window.fetch=(a,s)=>((a instanceof Request?a.method:(s==null?void 0:s.method)||"GET")!=="GET"&&te.delete(Ee(a)),fe(a,s));const te=new Map;function st(a,s){const l=Ee(a,s),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:g,..._}=JSON.parse(c.textContent),E=c.getAttribute("data-ttl");return E&&te.set(l,{body:g,init:_,ttl:1e3*Number(E)}),Promise.resolve(new Response(g,_))}return fe(a,s)}function ct(a,s,l){if(te.size>0){const c=Ee(a,l),g=te.get(c);if(g){if(performance.now()<g.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(g.body,g.init);te.delete(c)}}return fe(s,l)}function Ee(a,s){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(s!=null&&s.headers||s!=null&&s.body){const g=[];s.headers&&g.push([...new Headers(s.headers)].join(",")),s.body&&(typeof s.body=="string"||ArrayBuffer.isView(s.body))&&g.push(s.body),c+=`[data-hash="${it(...g)}"]`}return c}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(a){const s=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${dt(a).map(c=>{const g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(g)return s.push({name:g[1],matcher:g[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(_)return s.push({name:_[1],matcher:_[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const E=c.split(/\[(.+?)\](?!\])/);return"/"+E.map((b,S)=>{if(S%2){if(b.startsWith("x+"))return ve(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return ve(String.fromCharCode(...b.slice(2).split("-").map(P=>parseInt(P,16))));const m=lt.exec(b);if(!m)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,T,C,O]=m;return s.push({name:C,matcher:O,optional:!!N,rest:!!T,chained:T?S===1&&E[0]==="":!1}),T?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(b)}).join("")}).join("")}/?$`),params:s}}function ut(a){return!/^\([^)]+\)$/.test(a)}function dt(a){return a.slice(1).split("/").filter(ut)}function pt(a,s,l){const c={},g=a.slice(1);let _=0;for(let E=0;E<s.length;E+=1){const w=s[E],b=g[E-_];if(w.chained&&w.rest&&_){c[w.name]=g.slice(E-_,E+1).filter(S=>S).join("/"),_=0;continue}if(b===void 0){w.rest&&(c[w.name]="");continue}if(!w.matcher||l[w.matcher](b)){c[w.name]=b;const S=s[E+1],m=g[E+1];S&&!S.rest&&S.optional&&m&&(_=0);continue}if(w.optional&&w.chained){_++;continue}return}if(!_)return c}function ve(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:a,server_loads:s,dictionary:l,matchers:c}){const g=new Set(s);return Object.entries(l).map(([w,[b,S,m]])=>{const{pattern:N,params:T}=ft(w),C={id:w,exec:O=>{const P=N.exec(O);if(P)return pt(P,T,c)},errors:[1,...m||[]].map(O=>a[O]),layouts:[0,...S||[]].map(E),leaf:_(b)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function _(w){const b=w<0;return b&&(w=~w),[b,a[w]]}function E(w){return w===void 0?w:[g.has(w),a[w]]}}async function mt(a){var s;for(const l in a)if(typeof((s=a[l])==null?void 0:s.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([c,g])=>[c,await g])));return a}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const gt=new Set([...Be,"actions"]);[...gt];function _t(a){return a.filter(s=>s!=null)}const wt="x-sveltekit-invalidated",J=Je(Ke)??{},Q=Je(ze)??{};function be(a){J[a]=Z()}function yt(a,s){var Ce;const l=ht(a),c=a.nodes[0],g=a.nodes[1];c(),g();const _=document.documentElement,E=[],w=[];let b=null;const S={before_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},N=!1,T=!1,C=!0,O=!1,P=!1,B=!1,H=!1,M,I=(Ce=history.state)==null?void 0:Ce[q];I||(I=Date.now(),history.replaceState({...history.state,[q]:I},"",location.href));const ue=J[I];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ne,ae;async function Re(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),t=Y(e,!0);b=null;const r=ne={},n=t&&await he(t);if(r===ne&&n){if(n.type==="redirect")return re(new URL(n.location,e).href,{},[e.pathname],r);n.props.page!==void 0&&(V=n.props.page),M.$set(n.props)}}function xe(e){w.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=w.map(t=>{var r;return(r=t==null?void 0:t.snapshot)==null?void 0:r.capture()}))}function ke(e){var t;(t=Q[e])==null||t.forEach((r,n)=>{var o,i;(i=(o=w[n])==null?void 0:o.snapshot)==null||i.restore(r)})}function Le(){be(I),Fe(Ke,J),xe(I),Fe(ze,Q)}async function re(e,{noScroll:t=!1,replaceState:r=!1,keepFocus:n=!1,state:o={},invalidateAll:i=!1},u,d){return typeof e=="string"&&(e=new URL(e,Ne(document))),ce({url:e,scroll:t?Z():null,keepfocus:n,redirect_chain:u,details:{state:o,replaceState:r},nav_token:d,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ae(e){return b={id:e.id,promise:he(e).then(t=>(t.type==="loaded"&&t.state.error&&(b=null),t))},b.promise}async function oe(...e){const r=l.filter(n=>e.some(o=>n.exec(o))).map(n=>Promise.all([...n.layouts,n.leaf].map(o=>o==null?void 0:o[1]())));await Promise.all(r)}function Pe(e){var n;m=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),V=e.props.page,M=new a.root({target:s,props:{...e.props,stores:F,components:w},hydrate:!0}),ke(I);const r={from:null,to:{params:m.params,route:{id:((n=m.route)==null?void 0:n.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};S.after_navigate.forEach(o=>o(r)),T=!0}async function W({url:e,params:t,branch:r,status:n,error:o,route:i,form:u}){let d="never";for(const h of r)(h==null?void 0:h.slash)!==void 0&&(d=h.slash);e.pathname=Qe(e.pathname,d),e.search=e.search;const y={type:"loaded",state:{url:e,params:t,branch:r,error:o,route:i},props:{constructors:_t(r).map(h=>h.node.component)}};u!==void 0&&(y.props.form=u);let p={},R=!V,x=0;for(let h=0;h<Math.max(r.length,m.branch.length);h+=1){const f=r[h],U=m.branch[h];(f==null?void 0:f.data)!==(U==null?void 0:U.data)&&(R=!0),f&&(p={...p,...f.data},R&&(y.props[`data_${x}`]=p),x+=1)}return(!m.url||e.href!==m.url.href||m.error!==o||u!==void 0&&u!==V.form||R)&&(y.props.page={error:o,params:t,route:{id:(i==null?void 0:i.id)??null},status:n,url:new URL(e),form:u??null,data:R?p:V.data}),y}async function de({loader:e,parent:t,url:r,params:n,route:o,server_data_node:i}){var p,R,x;let u=null;const d={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await e();if((p=y.universal)!=null&&p.load){let A=function(...f){for(const U of f){const{href:$}=new URL(U,r);d.dependencies.add($)}};const h={route:{get id(){return d.route=!0,o.id}},params:new Proxy(n,{get:(f,U)=>(d.params.add(U),f[U])}),data:(i==null?void 0:i.data)??null,url:nt(r,()=>{d.url=!0}),async fetch(f,U){let $;f instanceof Request?($=f.url,U={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...U}):$=f;const j=new URL($,r);return A(j.href),j.origin===r.origin&&($=j.href.slice(r.origin.length)),T?ct($,j.href,U):st($,U)},setHeaders:()=>{},depends:A,parent(){return d.parent=!0,t()}};u=await y.universal.load.call(null,h)??null,u=u?await mt(u):null}return{node:y,loader:e,server:i,universal:(R=y.universal)!=null&&R.load?{type:"data",data:u,uses:d}:null,data:u??(i==null?void 0:i.data)??null,slash:((x=y.universal)==null?void 0:x.trailingSlash)??(i==null?void 0:i.slash)}}function Ue(e,t,r,n,o){if(H)return!0;if(!n)return!1;if(n.parent&&e||n.route&&t||n.url&&r)return!0;for(const i of n.params)if(o[i]!==m.params[i])return!0;for(const i of n.dependencies)if(E.some(u=>u(new URL(i))))return!0;return!1}function pe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}async function he({id:e,invalidating:t,url:r,params:n,route:o}){if((b==null?void 0:b.id)===e)return b.promise;const{errors:i,layouts:u,leaf:d}=o,y=[...u,d];i.forEach(v=>v==null?void 0:v().catch(()=>{})),y.forEach(v=>v==null?void 0:v[1]().catch(()=>{}));let p=null;const R=m.url?e!==m.url.pathname+m.url.search:!1,x=m.route?o.id!==m.route.id:!1;let A=!1;const h=y.map((v,L)=>{var K;const k=m.branch[L],D=!!(v!=null&&v[0])&&((k==null?void 0:k.loader)!==v[1]||Ue(A,x,R,(K=k.server)==null?void 0:K.uses,n));return D&&(A=!0),D});if(h.some(Boolean)){try{p=await He(r,h)}catch(v){return ie({status:v instanceof ee?v.status:500,error:await X(v,{url:r,params:n,route:{id:o.id}}),url:r,route:o})}if(p.type==="redirect")return p}const f=p==null?void 0:p.nodes;let U=!1;const $=y.map(async(v,L)=>{var me;if(!v)return;const k=m.branch[L],D=f==null?void 0:f[L];if((!D||D.type==="skip")&&v[1]===(k==null?void 0:k.loader)&&!Ue(U,x,R,(me=k.universal)==null?void 0:me.uses,n))return k;if(U=!0,(D==null?void 0:D.type)==="error")throw D;return de({loader:v[1],url:r,params:n,route:o,parent:async()=>{var Te;const De={};for(let ge=0;ge<L;ge+=1)Object.assign(De,(Te=await $[ge])==null?void 0:Te.data);return De},server_data_node:pe(D===void 0&&v[0]?{type:"skip"}:D??null,v[0]?k==null?void 0:k.server:void 0)})});for(const v of $)v.catch(()=>{});const j=[];for(let v=0;v<y.length;v+=1)if(y[v])try{j.push(await $[v])}catch(L){if(L instanceof Ve)return{type:"redirect",location:L.location};let k=500,D;if(f!=null&&f.includes(L))k=L.status??k,D=L.error;else if(L instanceof ee)k=L.status,D=L.body;else{if(await F.updated.check())return await G(r);D=await X(L,{params:n,url:r,route:{id:o.id}})}const K=await Oe(v,j,i);return K?await W({url:r,params:n,branch:j.slice(0,K.idx).concat(K.node),status:k,error:D,route:o}):await Ie(r,{id:o.id},D,k)}else j.push(void 0);return await W({url:r,params:n,branch:j,status:200,error:null,route:o,form:t?void 0:null})}async function Oe(e,t,r){for(;e--;)if(r[e]){let n=e;for(;!t[n];)n-=1;try{return{idx:n+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:t,url:r,route:n}){const o={};let i=null;if(a.server_loads[0]===0)try{const p=await He(r,[!0]);if(p.type!=="data"||p.nodes[0]&&p.nodes[0].type!=="data")throw 0;i=p.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||N)&&await G(r)}const d=await de({loader:c,url:r,params:o,route:n,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),y={node:await g(),loader:g,universal:null,server:null,data:null};return await W({url:r,params:o,branch:[d,y],status:e,error:t,route:null})}function Y(e,t){if(ye(e,z))return;const r=se(e);for(const n of l){const o=n.exec(r);if(o)return{id:e.pathname+e.search,invalidating:t,route:n,params:et(o),url:e}}}function se(e){return Ze(e.pathname.slice(z.length)||"/")}function $e({url:e,type:t,intent:r,delta:n}){var d,y;let o=!1;const i={from:{params:m.params,route:{id:((d=m.route)==null?void 0:d.id)??null},url:m.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:e},willUnload:!r,type:t};n!==void 0&&(i.delta=n);const u={...i,cancel:()=>{o=!0}};return P||S.before_navigate.forEach(p=>p(u)),o?null:i}async function ce({url:e,scroll:t,keepfocus:r,redirect_chain:n,details:o,type:i,delta:u,nav_token:d={},accepted:y,blocked:p}){var $,j,v;const R=Y(e,!1),x=$e({url:e,type:i,delta:u,intent:R});if(!x){p();return}const A=I;y(),P=!0,T&&F.navigating.set(x),ne=d;let h=R&&await he(R);if(!h){if(ye(e,z))return await G(e);h=await Ie(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==d)return!1;if(h.type==="redirect")if(n.length>10||n.includes(e.pathname))h=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(h.location,e).href,{},[...n,e.pathname],d),!1;else(($=h.props.page)==null?void 0:$.status)>=400&&await F.updated.check()&&await G(e);if(E.length=0,H=!1,O=!0,be(A),xe(A),(j=h.props.page)!=null&&j.url&&h.props.page.url.pathname!==e.pathname&&(e.pathname=(v=h.props.page)==null?void 0:v.url.pathname),o){const L=o.replaceState?0:1;if(o.state[q]=I+=L,history[o.replaceState?"replaceState":"pushState"](o.state,"",e),!o.replaceState){let k=I+1;for(;Q[k]||J[k];)delete Q[k],delete J[k],k+=1}}b=null,T?(m=h.state,h.props.page&&(h.props.page.url=e),M.$set(h.props)):Pe(h);const{activeElement:f}=document;if(await _e(),C){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));t?scrollTo(t.x,t.y):L?L.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==f&&document.activeElement!==document.body;!r&&!U&&Se(),C=!0,h.props.page&&(V=h.props.page),P=!1,i==="popstate"&&ke(I),S.after_navigate.forEach(L=>L(x)),F.navigating.set(null),O=!1}async function Ie(e,t,r,n){return e.origin===location.origin&&e.pathname===location.pathname&&!N?await ie({status:n,error:r,url:e,route:t}):await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function We(){let e;_.addEventListener("mousemove",i=>{const u=i.target;clearTimeout(e),e=setTimeout(()=>{n(u,2)},20)});function t(i){n(i.composedPath()[0],1)}_.addEventListener("mousedown",t),_.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver(i=>{for(const u of i)u.isIntersecting&&(oe(se(new URL(u.target.href))),r.unobserve(u.target))},{threshold:0});function n(i,u){const d=qe(i,_);if(!d)return;const{url:y,external:p,download:R}=we(d,z);if(p||R)return;const x=le(d);if(!x.reload)if(u<=x.preload_data){const A=Y(y,!1);A&&Ae(A)}else u<=x.preload_code&&oe(se(y))}function o(){r.disconnect();for(const i of _.querySelectorAll("a")){const{url:u,external:d,download:y}=we(i,z);if(d||y)continue;const p=le(i);p.reload||(p.preload_code===Me.viewport&&r.observe(i),p.preload_code===Me.eager&&oe(se(u)))}}S.after_navigate.push(o),o()}function X(e,t){return e instanceof ee?e.body:a.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{je(()=>(S.after_navigate.push(e),()=>{const t=S.after_navigate.indexOf(e);S.after_navigate.splice(t,1)}))},before_navigate:e=>{je(()=>(S.before_navigate.push(e),()=>{const t=S.before_navigate.indexOf(e);S.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(O||!T)&&(C=!1)},goto:(e,t={})=>re(e,t,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:t}=new URL(e,location.href);E.push(r=>r.href===t)}return Re()},invalidate_all:()=>(H=!0,Re()),preload_data:async e=>{const t=new URL(e,Ne(document)),r=Y(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Ae(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:r,route:n}=m;if(!n)return;const o=await Oe(m.branch.length,r,n.errors);if(o){const i=await W({url:t,params:m.params,branch:r.slice(0,o.idx).concat(o.node),status:e.status??500,error:e.error,route:n});m=i.state,M.$set(i.props),_e().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(M.$set({form:null,page:{...V,form:e.data,status:e.status}}),await _e(),M.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var n;let r=!1;if(Le(),!P){const o={from:{params:m.params,route:{id:((n=m.route)==null?void 0:n.id)??null},url:m.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};S.before_navigate.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(e=navigator.connection)!=null&&e.saveData||We(),_.addEventListener("click",t=>{var x;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=qe(t.composedPath()[0],_);if(!r)return;const{url:n,external:o,target:i,download:u}=we(r,z);if(!n)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const d=le(r);if(!(r instanceof SVGAElement)&&n.protocol!==location.protocol&&!(n.protocol==="https:"||n.protocol==="http:")||u)return;if(o||d.reload){$e({url:n,type:"link"})?P=!0:t.preventDefault();return}const[p,R]=n.href.split("#");if(R!==void 0&&p===location.href.split("#")[0]){if(m.url.hash===n.hash){t.preventDefault(),(x=r.ownerDocument.getElementById(R))==null||x.scrollIntoView();return}if(B=!0,be(I),m.url=n,F.page.set({...V,url:n}),F.page.notify(),!d.replace_state)return;B=!1,t.preventDefault()}ce({url:n,scroll:d.noscroll?Z():null,keepfocus:d.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:d.replace_state??n.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),_.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),n=t.submitter;if(((n==null?void 0:n.formMethod)||r.method)!=="get")return;const i=new URL((n==null?void 0:n.hasAttribute("formaction"))&&(n==null?void 0:n.formAction)||r.action);if(ye(i,z))return;const u=t.target,{keep_focus:d,noscroll:y,reload:p,replace_state:R}=le(u);if(p)return;t.preventDefault(),t.stopPropagation();const x=new FormData(u),A=n==null?void 0:n.getAttribute("name");A&&x.append(A,(n==null?void 0:n.getAttribute("value"))??""),i.search=new URLSearchParams(x).toString(),ce({url:i,scroll:y?Z():null,keepfocus:d??!1,redirect_chain:[],details:{state:{},replaceState:R??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[q]){if(t.state[q]===I)return;const n=J[t.state[q]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){J[I]=Z(),I=t.state[q],scrollTo(n.x,n.y);return}const o=t.state[q]-I;await ce({url:new URL(location.href),scroll:n,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=t.state[q]},blocked:()=>{history.go(-o)},type:"popstate",delta:o})}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++I},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:r,params:n,route:o,data:i,form:u})=>{N=!0;const d=new URL(location.href);({params:n={},route:o={id:null}}=Y(d,!1)||{});let y;try{const p=r.map(async(A,h)=>{const f=i[h];return f!=null&&f.uses&&(f.uses=Ge(f.uses)),de({loader:a.nodes[A],url:d,params:n,route:o,parent:async()=>{const U={};for(let $=0;$<h;$+=1)Object.assign(U,(await p[$]).data);return U},server_data_node:pe(f)})}),R=await Promise.all(p),x=l.find(({id:A})=>A===o.id);if(x){const A=x.layouts;for(let h=0;h<A.length;h++)A[h]||R.splice(h,0,void 0)}y=await W({url:d,params:n,branch:R,status:e,error:t,form:u,route:x??null})}catch(p){if(p instanceof Ve){await G(new URL(p.location,location.href));return}y=await ie({status:p instanceof ee?p.status:500,error:await X(p,{url:d,params:n,route:o}),url:d,route:o})}Pe(y)}}}async function He(a,s){const l=new URL(a);l.pathname=ot(a.pathname),l.searchParams.append(wt,s.map(g=>g?"1":"0").join(""));const c=await fe(l.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async g=>{var m;const _=new Map,E=c.body.getReader(),w=new TextDecoder;function b(N){return Xe(N,{Promise:T=>new Promise((C,O)=>{_.set(T,{fulfil:C,reject:O})})})}let S="";for(;;){const{done:N,value:T}=await E.read();if(N&&!S)break;for(S+=!T&&S?`
`:w.decode(T);;){const C=S.indexOf(`
`);if(C===-1)break;const O=JSON.parse(S.slice(0,C));if(S=S.slice(C+1),O.type==="redirect")return g(O);if(O.type==="data")(m=O.nodes)==null||m.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Ge(P.uses),P.data=b(P.data))}),g(O);else if(O.type==="chunk"){const{id:P,data:B,error:H}=O,M=_.get(P);_.delete(P),H?M.reject(b(H)):M.fulfil(b(B))}}}})}function Ge(a){return{dependencies:new Set((a==null?void 0:a.dependencies)??[]),params:new Set((a==null?void 0:a.params)??[]),parent:!!(a!=null&&a.parent),route:!!(a!=null&&a.route),url:!!(a!=null&&a.url)}}function Se(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const s=document.body,l=s.getAttribute("tabindex");s.tabIndex=-1,s.focus({preventScroll:!0,focusVisible:!1}),l!==null?s.setAttribute("tabindex",l):s.removeAttribute("tabindex");const c=getSelection();if(c&&c.type!=="None"){const g=[];for(let _=0;_<c.rangeCount;_+=1)g.push(c.getRangeAt(_));setTimeout(()=>{if(c.rangeCount===g.length){for(let _=0;_<c.rangeCount;_+=1){const E=g[_],w=c.getRangeAt(_);if(E.commonAncestorContainer!==w.commonAncestorContainer||E.startContainer!==w.startContainer||E.endContainer!==w.endContainer||E.startOffset!==w.startOffset||E.endOffset!==w.endOffset)return}c.removeAllRanges()}})}}}async function Rt(a,s,l){const c=yt(a,s);Ye({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Rt as start};
