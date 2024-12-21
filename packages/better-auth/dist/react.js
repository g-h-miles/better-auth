import{createFetch as Q}from"@better-fetch/fetch";var S=Object.create(null),y=e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?S:globalThis),g=new Proxy(S,{get(e,t){return y()[t]??S[t]},has(e,t){let n=y();return t in n||t in S},set(e,t,n){let s=y(!0);return s[t]=n,!0},deleteProperty(e,t){if(!t)return!1;let n=y(!0);return delete n[t],!0},ownKeys(){let e=y(!0);return Object.keys(e)}});function D(e){return e?e!=="false":!1}var j=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var se=j==="test"||D(g.TEST);var P=class extends Error{constructor(t,n){super(t),this.name="BetterAuthError",this.message=t,this.cause=n,this.stack=""}};function V(e){try{return new URL(e).pathname!=="/"}catch{throw new P(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}function b(e,t="/api/auth"){return V(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}function E(e,t){if(e)return b(e,t);let n=g.BETTER_AUTH_URL||g.NEXT_PUBLIC_BETTER_AUTH_URL||g.PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_AUTH_URL||(g.BASE_URL!=="/"?g.BASE_URL:void 0);if(n)return b(n,t);if(typeof window<"u"&&window.location)return b(window.location.origin,t)}import"nanostores";import"@better-fetch/fetch";var w={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},_={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};import{atom as M}from"nanostores";import"@better-fetch/fetch";import{atom as q,onMount as H}from"nanostores";var U=(e,t,n,s)=>{let r=q({data:null,error:null,isPending:!0,isRefetching:!1}),p=()=>{let l=typeof s=="function"?s({data:r.get().data,error:r.get().error,isPending:r.get().isPending}):s;return n(t,{...l,async onSuccess(f){typeof window<"u"&&r.set({data:f.data,error:null,isPending:!1,isRefetching:!1}),await l?.onSuccess?.(f)},async onError(f){r.set({error:f.error,data:null,isPending:!1,isRefetching:!1}),await l?.onError?.(f)},async onRequest(f){let c=r.get();r.set({isPending:c.data===null,data:c.data,error:null,isRefetching:!0}),await l?.onRequest?.(f)}})};e=Array.isArray(e)?e:[e];let i=!1;for(let l of e)l.subscribe(()=>{i?p():H(r,()=>(p(),i=!0,()=>{r.off(),l.off()}))});return r};function I(e){let t=M(!1);return{session:U(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}var W={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},G=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,x={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},K=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function J(e){return e instanceof Date&&!isNaN(e.getTime())}function X(e){let t=K.exec(e);if(!t)return null;let[,n,s,r,p,i,l,f,c,a,u]=t,d=new Date(Date.UTC(parseInt(n,10),parseInt(s,10)-1,parseInt(r,10),parseInt(p,10),parseInt(i,10),parseInt(l,10),f?parseInt(f.padEnd(3,"0"),10):0));if(c){let o=(parseInt(a,10)*60+parseInt(u,10))*(c==="+"?-1:1);d.setUTCMinutes(d.getUTCMinutes()+o)}return J(d)?d:null}function z(e,t={}){let{strict:n=!1,warnings:s=!1,reviver:r,parseDates:p=!0}=t;if(typeof e!="string")return e;let i=e.trim();if(i[0]==='"'&&i.endsWith('"')&&!i.slice(1,-1).includes('"'))return i.slice(1,-1);let l=i.toLowerCase();if(l.length<=9&&l in x)return x[l];if(!G.test(i)){if(n)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(W).some(([c,a])=>{let u=a.test(i);return u&&s&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${c} pattern`),u})&&n)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(i,(a,u)=>{if(a==="__proto__"||a==="constructor"&&u&&typeof u=="object"&&"prototype"in u){s&&console.warn(`[better-json] Dropping "${a}" key to prevent prototype pollution`);return}if(p&&typeof u=="string"){let d=X(u);if(d)return d}return r?r(a,u):u})}catch(c){if(n)throw c;return e}}function L(e,t={strict:!0}){return z(e,t)}var B=e=>{let t="credentials"in Request.prototype,n=E(e?.baseURL),s=e?.plugins?.flatMap(o=>o.fetchPlugins).filter(o=>o!==void 0)||[],r=Q({baseURL:n,...t?{credentials:"include"}:{},method:"GET",jsonParser(o){return L(o,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...s]:[w,_,...e?.fetchOptions?.plugins||[],...s]}),{$sessionSignal:p,session:i}=I(r),l=e?.plugins||[],f={},c={$sessionSignal:p,session:i},a={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},u=[{signal:"$sessionSignal",matcher(o){return o==="/sign-out"||o==="/update-user"||o.startsWith("/sign-in")||o.startsWith("/sign-up")}}];for(let o of l)o.getAtoms&&Object.assign(c,o.getAtoms?.(r)),o.pathMethods&&Object.assign(a,o.pathMethods),o.atomListeners&&u.push(...o.atomListeners);let d={notify:o=>{c[o].set(!c[o].get())},listen:(o,T)=>{c[o].subscribe(T)},atoms:c};for(let o of l)o.getActions&&Object.assign(f,o.getActions?.(r,d));return{pluginsActions:f,pluginsAtoms:c,pluginPathMethods:a,atomListeners:u,$fetch:r,$store:d}};function Y(e,t,n){let s=t[e],{fetchOptions:r,query:p,...i}=n||{};return s||(r?.method?r.method:i&&Object.keys(i).length>0?"POST":"GET")}function v(e,t,n,s,r){function p(i=[]){return new Proxy(function(){},{get(l,f){let c=[...i,f],a=e;for(let u of c)if(a&&typeof a=="object"&&u in a)a=a[u];else{a=void 0;break}return typeof a=="function"?a:p(c)},apply:async(l,f,c)=>{let a="/"+i.map(O=>O.replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`)).join("/"),u=c[0]||{},d=c[1]||{},{query:o,fetchOptions:T,...k}=u,m={...d,...T},A=Y(a,n,u);return await t(a,{...m,body:A==="GET"?void 0:{...k,...m?.body||{}},query:o||m?.query,method:A,async onSuccess(O){await m?.onSuccess?.(O);let h=r?.find(N=>N.matcher(a));if(!h)return;let R=s[h.signal];if(!R)return;let $=R.get();setTimeout(()=>{R.set(!$)},10)}})}})}return p()}import{listenKeys as Z}from"nanostores";import{useCallback as ee,useRef as te,useSyncExternalStore as ne}from"react";var C=(e,t)=>n=>{e.current=n,t()};function F(e,{keys:t,deps:n=[e,t]}={}){let s=te();s.current=e.get();let r=ee(i=>(t?.length||0)>0?Z(e,t,C(s,i)):e.listen(C(s,i)),n),p=()=>s.current;return ne(r,p,p)}function re(e){return`use${oe(e)}`}function oe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fe(e){let{pluginPathMethods:t,pluginsActions:n,pluginsAtoms:s,$fetch:r,$store:p,atomListeners:i}=B(e),l={};for(let[a,u]of Object.entries(s))l[re(a)]=()=>F(u);let f={...n,...l,$fetch:r,$store:p};return v(f,r,t,s,i)}export{oe as capitalizeFirstLetter,Fe as createAuthClient};
