"use strict";var S=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var W=(e,t)=>{for(var n in t)S(e,n,{get:t[n],enumerable:!0})},G=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of M(t))!V.call(e,r)&&r!==n&&S(e,r,{get:()=>t[r],enumerable:!(i=H(t,r))||i.enumerable});return e};var J=e=>G(S({},"__esModule",{value:!0}),e);var se={};W(se,{createAuthClient:()=>oe});module.exports=J(se);var F=require("@better-fetch/fetch");var P=Object.create(null),m=e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?P:globalThis),g=new Proxy(P,{get(e,t){return m()[t]??P[t]},has(e,t){let n=m();return t in n||t in P},set(e,t,n){let i=m(!0);return i[t]=n,!0},deleteProperty(e,t){if(!t)return!1;let n=m(!0);return delete n[t],!0},ownKeys(){let e=m(!0);return Object.keys(e)}});function z(e){return e?e!=="false":!1}var X=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var ae=X==="test"||z(g.TEST);var T=class extends Error{constructor(t,n){super(t),this.name="BetterAuthError",this.message=t,this.cause=n,this.stack=""}};function Q(e){try{return new URL(e).pathname!=="/"}catch{throw new T(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}function E(e,t="/api/auth"){return Q(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}function _(e,t){if(e)return E(e,t);let n=g.BETTER_AUTH_URL||g.NEXT_PUBLIC_BETTER_AUTH_URL||g.PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_AUTH_URL||(g.BASE_URL!=="/"?g.BASE_URL:void 0);if(n)return E(n,t);if(typeof window<"u"&&window.location)return E(window.location.origin,t)}var be=require("nanostores");var de=require("@better-fetch/fetch"),U={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},I={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};var B=require("nanostores");var me=require("@better-fetch/fetch"),O=require("nanostores"),x=(e,t,n,i)=>{let r=(0,O.atom)({data:null,error:null,isPending:!0,isRefetching:!1}),p=()=>{let l=typeof i=="function"?i({data:r.get().data,error:r.get().error,isPending:r.get().isPending}):i;return n(t,{...l,async onSuccess(f){typeof window<"u"&&r.set({data:f.data,error:null,isPending:!1,isRefetching:!1}),await l?.onSuccess?.(f)},async onError(f){r.set({error:f.error,data:null,isPending:!1,isRefetching:!1}),await l?.onError?.(f)},async onRequest(f){let a=r.get();r.set({isPending:a.data===null,data:a.data,error:null,isRefetching:!0}),await l?.onRequest?.(f)}})};e=Array.isArray(e)?e:[e];let c=!1;for(let l of e)l.subscribe(()=>{c?p():(0,O.onMount)(r,()=>(p(),c=!0,()=>{r.off(),l.off()}))});return r};function L(e){let t=(0,B.atom)(!1);return{session:x(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}var Y={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},Z=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,C={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},K=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function ee(e){return e instanceof Date&&!isNaN(e.getTime())}function te(e){let t=K.exec(e);if(!t)return null;let[,n,i,r,p,c,l,f,a,s,u]=t,d=new Date(Date.UTC(parseInt(n,10),parseInt(i,10)-1,parseInt(r,10),parseInt(p,10),parseInt(c,10),parseInt(l,10),f?parseInt(f.padEnd(3,"0"),10):0));if(a){let o=(parseInt(s,10)*60+parseInt(u,10))*(a==="+"?-1:1);d.setUTCMinutes(d.getUTCMinutes()+o)}return ee(d)?d:null}function ne(e,t={}){let{strict:n=!1,warnings:i=!1,reviver:r,parseDates:p=!0}=t;if(typeof e!="string")return e;let c=e.trim();if(c[0]==='"'&&c.endsWith('"')&&!c.slice(1,-1).includes('"'))return c.slice(1,-1);let l=c.toLowerCase();if(l.length<=9&&l in C)return C[l];if(!Z.test(c)){if(n)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(Y).some(([a,s])=>{let u=s.test(c);return u&&i&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${a} pattern`),u})&&n)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(c,(s,u)=>{if(s==="__proto__"||s==="constructor"&&u&&typeof u=="object"&&"prototype"in u){i&&console.warn(`[better-json] Dropping "${s}" key to prevent prototype pollution`);return}if(p&&typeof u=="string"){let d=te(u);if(d)return d}return r?r(s,u):u})}catch(a){if(n)throw a;return e}}function v(e,t={strict:!0}){return ne(e,t)}var $=e=>{let t="credentials"in Request.prototype,n=_(e?.baseURL),i=e?.plugins?.flatMap(o=>o.fetchPlugins).filter(o=>o!==void 0)||[],r=(0,F.createFetch)({baseURL:n,...t?{credentials:"include"}:{},method:"GET",jsonParser(o){return v(o,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...i]:[U,I,...e?.fetchOptions?.plugins||[],...i]}),{$sessionSignal:p,session:c}=L(r),l=e?.plugins||[],f={},a={$sessionSignal:p,session:c},s={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},u=[{signal:"$sessionSignal",matcher(o){return o==="/sign-out"||o==="/update-user"||o.startsWith("/sign-in")||o.startsWith("/sign-up")}}];for(let o of l)o.getAtoms&&Object.assign(a,o.getAtoms?.(r)),o.pathMethods&&Object.assign(s,o.pathMethods),o.atomListeners&&u.push(...o.atomListeners);let d={notify:o=>{a[o].set(!a[o].get())},listen:(o,R)=>{a[o].subscribe(R)},atoms:a};for(let o of l)o.getActions&&Object.assign(f,o.getActions?.(r,d));return{pluginsActions:f,pluginsAtoms:a,pluginPathMethods:s,atomListeners:u,$fetch:r,$store:d}};function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}function re(e,t,n){let i=t[e],{fetchOptions:r,query:p,...c}=n||{};return i||(r?.method?r.method:c&&Object.keys(c).length>0?"POST":"GET")}function N(e,t,n,i,r){function p(c=[]){return new Proxy(function(){},{get(l,f){let a=[...c,f],s=e;for(let u of a)if(s&&typeof s=="object"&&u in s)s=s[u];else{s=void 0;break}return typeof s=="function"?s:p(a)},apply:async(l,f,a)=>{let s="/"+c.map(b=>b.replace(/[A-Z]/g,y=>`-${y.toLowerCase()}`)).join("/"),u=a[0]||{},d=a[1]||{},{query:o,fetchOptions:R,...D}=u,h={...d,...R},w=re(s,n,u);return await t(s,{...h,body:w==="GET"?void 0:{...D,...h?.body||{}},query:o||h?.query,method:w,async onSuccess(b){await h?.onSuccess?.(b);let y=r?.find(q=>q.matcher(s));if(!y)return;let A=i[y.signal];if(!A)return;let j=A.get();setTimeout(()=>{A.set(!j)},10)}})}})}return p()}function oe(e){let{pluginPathMethods:t,pluginsActions:n,pluginsAtoms:i,$fetch:r,atomListeners:p,$store:c}=$(e),l={};for(let[s,u]of Object.entries(i))l[`use${k(s)}`]=()=>u;let f={...n,...l,$fetch:r,$store:c};return N(f,r,t,i,p)}0&&(module.exports={createAuthClient});
