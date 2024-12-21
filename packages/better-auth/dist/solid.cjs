"use strict";var E=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var z=(e,t)=>{for(var n in t)E(e,n,{get:t[n],enumerable:!0})},X=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of G(t))!J.call(e,r)&&r!==n&&E(e,r,{get:()=>t[r],enumerable:!(s=W(t,r))||s.enumerable});return e};var K=e=>X(E({},"__esModule",{value:!0}),e);var ue={};z(ue,{createAuthClient:()=>ce});module.exports=K(ue);var k=require("@better-fetch/fetch");var P=Object.create(null),m=e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?P:globalThis),g=new Proxy(P,{get(e,t){return m()[t]??P[t]},has(e,t){let n=m();return t in n||t in P},set(e,t,n){let s=m(!0);return s[t]=n,!0},deleteProperty(e,t){if(!t)return!1;let n=m(!0);return delete n[t],!0},ownKeys(){let e=m(!0);return Object.keys(e)}});function Q(e){return e?e!=="false":!1}var Y=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var fe=Y==="test"||Q(g.TEST);var S=class extends Error{constructor(t,n){super(t),this.name="BetterAuthError",this.message=t,this.cause=n,this.stack=""}};function Z(e){try{return new URL(e).pathname!=="/"}catch{throw new S(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}function w(e,t="/api/auth"){return Z(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}function U(e,t){if(e)return w(e,t);let n=g.BETTER_AUTH_URL||g.NEXT_PUBLIC_BETTER_AUTH_URL||g.PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_AUTH_URL||(g.BASE_URL!=="/"?g.BASE_URL:void 0);if(n)return w(n,t);if(typeof window<"u"&&window.location)return w(window.location.origin,t)}var we=require("nanostores");var he=require("@better-fetch/fetch"),I={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},x={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};var B=require("nanostores");var Se=require("@better-fetch/fetch"),T=require("nanostores"),v=(e,t,n,s)=>{let r=(0,T.atom)({data:null,error:null,isPending:!0,isRefetching:!1}),p=()=>{let l=typeof s=="function"?s({data:r.get().data,error:r.get().error,isPending:r.get().isPending}):s;return n(t,{...l,async onSuccess(f){typeof window<"u"&&r.set({data:f.data,error:null,isPending:!1,isRefetching:!1}),await l?.onSuccess?.(f)},async onError(f){r.set({error:f.error,data:null,isPending:!1,isRefetching:!1}),await l?.onError?.(f)},async onRequest(f){let a=r.get();r.set({isPending:a.data===null,data:a.data,error:null,isRefetching:!0}),await l?.onRequest?.(f)}})};e=Array.isArray(e)?e:[e];let c=!1;for(let l of e)l.subscribe(()=>{c?p():(0,T.onMount)(r,()=>(p(),c=!0,()=>{r.off(),l.off()}))});return r};function L(e){let t=(0,B.atom)(!1);return{session:v(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}var ee={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},te=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,C={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},ne=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function re(e){return e instanceof Date&&!isNaN(e.getTime())}function oe(e){let t=ne.exec(e);if(!t)return null;let[,n,s,r,p,c,l,f,a,i,u]=t,d=new Date(Date.UTC(parseInt(n,10),parseInt(s,10)-1,parseInt(r,10),parseInt(p,10),parseInt(c,10),parseInt(l,10),f?parseInt(f.padEnd(3,"0"),10):0));if(a){let o=(parseInt(i,10)*60+parseInt(u,10))*(a==="+"?-1:1);d.setUTCMinutes(d.getUTCMinutes()+o)}return re(d)?d:null}function se(e,t={}){let{strict:n=!1,warnings:s=!1,reviver:r,parseDates:p=!0}=t;if(typeof e!="string")return e;let c=e.trim();if(c[0]==='"'&&c.endsWith('"')&&!c.slice(1,-1).includes('"'))return c.slice(1,-1);let l=c.toLowerCase();if(l.length<=9&&l in C)return C[l];if(!te.test(c)){if(n)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(ee).some(([a,i])=>{let u=i.test(c);return u&&s&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${a} pattern`),u})&&n)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(c,(i,u)=>{if(i==="__proto__"||i==="constructor"&&u&&typeof u=="object"&&"prototype"in u){s&&console.warn(`[better-json] Dropping "${i}" key to prevent prototype pollution`);return}if(p&&typeof u=="string"){let d=oe(u);if(d)return d}return r?r(i,u):u})}catch(a){if(n)throw a;return e}}function F(e,t={strict:!0}){return se(e,t)}var N=e=>{let t="credentials"in Request.prototype,n=U(e?.baseURL),s=e?.plugins?.flatMap(o=>o.fetchPlugins).filter(o=>o!==void 0)||[],r=(0,k.createFetch)({baseURL:n,...t?{credentials:"include"}:{},method:"GET",jsonParser(o){return F(o,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...s]:[I,x,...e?.fetchOptions?.plugins||[],...s]}),{$sessionSignal:p,session:c}=L(r),l=e?.plugins||[],f={},a={$sessionSignal:p,session:c},i={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},u=[{signal:"$sessionSignal",matcher(o){return o==="/sign-out"||o==="/update-user"||o.startsWith("/sign-in")||o.startsWith("/sign-up")}}];for(let o of l)o.getAtoms&&Object.assign(a,o.getAtoms?.(r)),o.pathMethods&&Object.assign(i,o.pathMethods),o.atomListeners&&u.push(...o.atomListeners);let d={notify:o=>{a[o].set(!a[o].get())},listen:(o,O)=>{a[o].subscribe(O)},atoms:a};for(let o of l)o.getActions&&Object.assign(f,o.getActions?.(r,d));return{pluginsActions:f,pluginsAtoms:a,pluginPathMethods:i,atomListeners:u,$fetch:r,$store:d}};function ie(e,t,n){let s=t[e],{fetchOptions:r,query:p,...c}=n||{};return s||(r?.method?r.method:c&&Object.keys(c).length>0?"POST":"GET")}function $(e,t,n,s,r){function p(c=[]){return new Proxy(function(){},{get(l,f){let a=[...c,f],i=e;for(let u of a)if(i&&typeof i=="object"&&u in i)i=i[u];else{i=void 0;break}return typeof i=="function"?i:p(a)},apply:async(l,f,a)=>{let i="/"+c.map(b=>b.replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`)).join("/"),u=a[0]||{},d=a[1]||{},{query:o,fetchOptions:O,...q}=u,y={...d,...O},_=ie(i,n,u);return await t(i,{...y,body:_==="GET"?void 0:{...q,...y?.body||{}},query:o||y?.query,method:_,async onSuccess(b){await y?.onSuccess?.(b);let h=r?.find(M=>M.matcher(i));if(!h)return;let A=s[h.signal];if(!A)return;let H=A.get();setTimeout(()=>{A.set(!H)},10)}})}})}return p()}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}var R=require("solid-js/store"),D=require("solid-js");function V(e){let t=e.listen(()=>{}),[n,s]=(0,R.createStore)({value:e.get()}),r=e.subscribe(p=>{s("value",(0,R.reconcile)(p))});return(0,D.onCleanup)(()=>r()),t(),()=>n.value}function ae(e){return`use${j(e)}`}function ce(e){let{pluginPathMethods:t,pluginsActions:n,pluginsAtoms:s,$fetch:r,atomListeners:p}=N(e),c={};for(let[a,i]of Object.entries(s))c[ae(a)]=()=>V(i);let l={...n,...c};return $(l,r,t,s,p)}0&&(module.exports={createAuthClient});
