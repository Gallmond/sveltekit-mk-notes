function A(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(K)}function Q(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)a[u]=e.dirty[u]|r[u];return a}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,a){if(r){const c=R(e,n,i,a);t.p(c,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function nt(){M=!0}function it(){M=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const a=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(a.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);a.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<a.length&&c[s].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(c[s],f)}}function st(t,e){if(M){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){M&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function At(){return q(" ")}function Mt(){return q("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){ot(t);const a=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function ft(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const a=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||a.push(u.name)}a.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ot(t,e,n){return ft(t,e,n,ut)}function dt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Pt(t){return dt(t," ")}function Tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Bt(t,e){t.value=e??""}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Dt(t,e){return new t(e)}let E;function v(t){E=t}function z(){if(!E)throw new Error("Function called outside component initialization");return E}function qt(t){z().$$.on_mount.push(t)}function zt(t){z().$$.after_update.push(t)}function Ft(){const t=z();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=_t(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,a)}),!a.defaultPrevented}return!0}}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],J=[];let $=[];const B=[],W=Promise.resolve();let L=!1;function V(){L||(L=!0,W.then(X))}function It(){return V(),W}function D(t){$.push(t)}function Gt(t){B.push(t)}const T=new Set;let b=0;function X(){if(b!==0)return;const t=E;do{try{for(;b<x.length;){const e=x[b];b++,v(e),ht(e.$$)}}catch(e){throw x.length=0,b=0,e}for(v(null),x.length=0,b=0;J.length;)J.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];T.has(n)||(T.add(n),n())}$.length=0}while(x.length);for(;B.length;)B.pop()();L=!1,T.clear(),v(t)}function ht(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function mt(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const S=new Set;let g;function Jt(){g={r:0,c:[],p:g}}function Kt(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(S.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Rt(t,e,n,i,r,a,c,u,s,l,f,_){let d=t.length,m=a.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const k=[],C=new Map,O=new Map,F=[];for(h=m;h--;){const o=_(r,a,h),p=n(o);let y=c.get(p);y?i&&F.push(()=>y.p(o,e)):(y=l(p,o),y.c()),C.set(p,k[h]=y),p in j&&O.set(p,Math.abs(h-j[p]))}const H=new Set,I=new Set;function P(o){Y(o,1),o.m(u,f),c.set(o.key,o),f=o.first,m--}for(;d&&m;){const o=k[m-1],p=t[d-1],y=o.key,N=p.key;o===p?(f=o.first,d--,m--):C.has(N)?!c.has(y)||H.has(y)?P(o):I.has(N)?d--:O.get(y)>O.get(N)?(I.add(y),P(o)):(H.add(N),d--):(s(p,c),d--)}for(;d--;){const o=t[d];C.has(o.key)||s(o,c)}for(;m;)P(k[m-1]);return w(F),k}function Ut(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Wt(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||D(()=>{const c=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),a.forEach(D)}function gt(t,e){const n=t.$$;n.fragment!==null&&(mt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,a,c,u=[-1]){const s=E;v(t);const l=t.$$={fragment:null,ctx:[],props:a,update:A,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&bt(t,_)),d}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=at(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),it(),X()}v(s)}class Yt{$destroy(){gt(this,1),this.$destroy=A}$on(e,n){if(!Q(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{yt as A,gt as B,wt as C,Et as D,kt as E,vt as F,st as G,A as H,$t as I,jt as J,Ht as K,Ft as L,Q as M,St as N,Bt as O,Ut as P,Gt as Q,Rt as R,Yt as S,Qt as T,w as U,At as a,Nt as b,Pt as c,pt as d,Mt as e,Kt as f,Y as g,lt as h,Xt as i,zt as j,ut as k,Ot as l,at as m,Ct as n,qt as o,Lt as p,q,dt as r,xt as s,It as t,Tt as u,Jt as v,J as w,Dt as x,Wt as y,Vt as z};
