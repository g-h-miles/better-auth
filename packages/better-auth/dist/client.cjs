"use strict";var T=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var n=(e,t)=>T(e,"name",{value:t,configurable:!0});var G=(e,t)=>{for(var r in t)T(e,r,{get:t[r],enumerable:!0})},J=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of V(t))!W.call(e,o)&&o!==r&&T(e,o,{get:()=>t[o],enumerable:!(a=M(t,o))||a.enumerable});return e};var z=e=>J(T({},"__esModule",{value:!0}),e);var ae={};G(ae,{InferPlugin:()=>ie,createAuthClient:()=>se,useAuthQuery:()=>_});module.exports=z(ae);var $=require("@better-fetch/fetch");var O=Object.create(null),h=n(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?O:globalThis),"_getEnv"),m=new Proxy(O,{get(e,t){return h()[t]??O[t]},has(e,t){let r=h();return t in r||t in O},set(e,t,r){let a=h(!0);return a[t]=r,!0},deleteProperty(e,t){if(!t)return!1;let r=h(!0);return delete r[t],!0},ownKeys(){let e=h(!0);return Object.keys(e)}});function X(e){return e?e!=="false":!1}n(X,"toBoolean");var Q=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var ue=Q==="test"||X(m.TEST);var R=class extends Error{static{n(this,"BetterAuthError")}constructor(t,r){super(t),this.name="BetterAuthError",this.message=t,this.cause=r,this.stack=""}};function Y(e){try{return new URL(e).pathname!=="/"}catch{throw new R(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}n(Y,"checkHasPath");function w(e,t="/api/auth"){return Y(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}n(w,"withPath");function I(e,t){if(e)return w(e,t);let r=m.BETTER_AUTH_URL||m.NEXT_PUBLIC_BETTER_AUTH_URL||m.PUBLIC_BETTER_AUTH_URL||m.NUXT_PUBLIC_BETTER_AUTH_URL||m.NUXT_PUBLIC_AUTH_URL||(m.BASE_URL!=="/"?m.BASE_URL:void 0);if(r)return w(r,t);if(typeof window<"u"&&window.location)return w(window.location.origin,t)}n(I,"getBaseURL");var xe=require("nanostores");var Pe=require("@better-fetch/fetch"),x={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},B={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};var L=require("nanostores");var Oe=require("@better-fetch/fetch"),A=require("nanostores");var _=n((e,t,r,a)=>{let o=(0,A.atom)({data:null,error:null,isPending:!0,isRefetching:!1}),d=n(()=>{let f=typeof a=="function"?a({data:o.get().data,error:o.get().error,isPending:o.get().isPending}):a;return r(t,{...f,async onSuccess(p){typeof window<"u"&&o.set({data:p.data,error:null,isPending:!1,isRefetching:!1}),await f?.onSuccess?.(p)},async onError(p){o.set({error:p.error,data:null,isPending:!1,isRefetching:!1}),await f?.onError?.(p)},async onRequest(p){let c=o.get();o.set({isPending:c.data===null,data:c.data,error:null,isRefetching:!0}),await f?.onRequest?.(p)}})},"fn");e=Array.isArray(e)?e:[e];let u=!1;for(let f of e)f.subscribe(()=>{u?d():(0,A.onMount)(o,()=>(d(),u=!0,()=>{o.off(),f.off()}))});return o},"useAuthQuery");function C(e){let t=(0,L.atom)(!1);return{session:_(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}n(C,"getSessionAtom");var Z={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},K=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,v={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},ee=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function te(e){return e instanceof Date&&!isNaN(e.getTime())}n(te,"isValidDate");function ne(e){let t=ee.exec(e);if(!t)return null;let[,r,a,o,d,u,f,p,c,i,l]=t,g=new Date(Date.UTC(parseInt(r,10),parseInt(a,10)-1,parseInt(o,10),parseInt(d,10),parseInt(u,10),parseInt(f,10),p?parseInt(p.padEnd(3,"0"),10):0));if(c){let s=(parseInt(i,10)*60+parseInt(l,10))*(c==="+"?-1:1);g.setUTCMinutes(g.getUTCMinutes()+s)}return te(g)?g:null}n(ne,"parseISODate");function re(e,t={}){let{strict:r=!1,warnings:a=!1,reviver:o,parseDates:d=!0}=t;if(typeof e!="string")return e;let u=e.trim();if(u[0]==='"'&&u.endsWith('"')&&!u.slice(1,-1).includes('"'))return u.slice(1,-1);let f=u.toLowerCase();if(f.length<=9&&f in v)return v[f];if(!K.test(u)){if(r)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(Z).some(([c,i])=>{let l=i.test(u);return l&&a&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${c} pattern`),l})&&r)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(u,n((i,l)=>{if(i==="__proto__"||i==="constructor"&&l&&typeof l=="object"&&"prototype"in l){a&&console.warn(`[better-json] Dropping "${i}" key to prevent prototype pollution`);return}if(d&&typeof l=="string"){let g=ne(l);if(g)return g}return o?o(i,l):l},"secureReviver"))}catch(c){if(r)throw c;return e}}n(re,"betterJSONParse");function F(e,t={strict:!0}){return re(e,t)}n(F,"parseJSON");var k=n(e=>{let t="credentials"in Request.prototype,r=I(e?.baseURL),a=e?.plugins?.flatMap(s=>s.fetchPlugins).filter(s=>s!==void 0)||[],o=(0,$.createFetch)({baseURL:r,...t?{credentials:"include"}:{},method:"GET",jsonParser(s){return F(s,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...a]:[x,B,...e?.fetchOptions?.plugins||[],...a]}),{$sessionSignal:d,session:u}=C(o),f=e?.plugins||[],p={},c={$sessionSignal:d,session:u},i={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},l=[{signal:"$sessionSignal",matcher(s){return s==="/sign-out"||s==="/update-user"||s.startsWith("/sign-in")||s.startsWith("/sign-up")}}];for(let s of f)s.getAtoms&&Object.assign(c,s.getAtoms?.(o)),s.pathMethods&&Object.assign(i,s.pathMethods),s.atomListeners&&l.push(...s.atomListeners);let g={notify:n(s=>{c[s].set(!c[s].get())},"notify"),listen:n((s,b)=>{c[s].subscribe(b)},"listen"),atoms:c};for(let s of f)s.getActions&&Object.assign(p,s.getActions?.(o,g));return{pluginsActions:p,pluginsAtoms:c,pluginPathMethods:i,atomListeners:l,$fetch:o,$store:g}},"getClientConfig");function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}n(N,"capitalizeFirstLetter");function oe(e,t,r){let a=t[e],{fetchOptions:o,query:d,...u}=r||{};return a||(o?.method?o.method:u&&Object.keys(u).length>0?"POST":"GET")}n(oe,"getMethod");function D(e,t,r,a,o){function d(u=[]){return new Proxy(function(){},{get(f,p){let c=[...u,p],i=e;for(let l of c)if(i&&typeof i=="object"&&l in i)i=i[l];else{i=void 0;break}return typeof i=="function"?i:d(c)},apply:n(async(f,p,c)=>{let i="/"+u.map(S=>S.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`)).join("/"),l=c[0]||{},g=c[1]||{},{query:s,fetchOptions:b,...j}=l,y={...g,...b},U=oe(i,r,l);return await t(i,{...y,body:U==="GET"?void 0:{...j,...y?.body||{}},query:s||y?.query,method:U,async onSuccess(S){await y?.onSuccess?.(S);let P=o?.find(H=>H.matcher(i));if(!P)return;let E=a[P.signal];if(!E)return;let q=E.get();setTimeout(()=>{E.set(!q)},10)}})},"apply")})}return n(d,"createProxy"),d()}n(D,"createDynamicPathProxy");function se(e){let{pluginPathMethods:t,pluginsActions:r,pluginsAtoms:a,$fetch:o,atomListeners:d,$store:u}=k(e),f={};for(let[i,l]of Object.entries(a))f[`use${N(i)}`]=l;let p={...r,...f,$fetch:o,$store:u};return D(p,o,t,a,d)}n(se,"createAuthClient");var ie=n(()=>({id:"infer-server-plugin",$InferServerPlugin:{}}),"InferPlugin");0&&(module.exports={InferPlugin,createAuthClient,useAuthQuery});
