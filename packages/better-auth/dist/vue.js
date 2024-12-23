var j=Object.defineProperty;var n=(e,t)=>j(e,"name",{value:t,configurable:!0});import{getCurrentInstance as V,getCurrentScope as q,onScopeDispose as H,readonly as M,shallowRef as W}from"vue";function G(e){let t=V();if(t&&t.proxy){let r=t.proxy;("_nanostores"in r?r._nanostores:r._nanostores=[]).push(e)}}n(G,"registerStore");function E(e){let t=W(),r=e.subscribe(a=>{t.value=a});return q()&&H(r),process.env.NODE_ENV!=="production"?(G(e),M(t)):t}n(E,"useStore");import{createFetch as se}from"@better-fetch/fetch";var T=Object.create(null),m=n(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?T:globalThis),"_getEnv"),y=new Proxy(T,{get(e,t){return m()[t]??T[t]},has(e,t){let r=m();return t in r||t in T},set(e,t,r){let a=m(!0);return a[t]=r,!0},deleteProperty(e,t){if(!t)return!1;let r=m(!0);return delete r[t],!0},ownKeys(){let e=m(!0);return Object.keys(e)}});function J(e){return e?e!=="false":!1}n(J,"toBoolean");var z=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var pe=z==="test"||J(y.TEST);var b=class extends Error{static{n(this,"BetterAuthError")}constructor(t,r){super(t),this.name="BetterAuthError",this.message=t,this.cause=r,this.stack=""}};function X(e){try{return new URL(e).pathname!=="/"}catch{throw new b(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}n(X,"checkHasPath");function w(e,t="/api/auth"){return X(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}n(w,"withPath");function U(e,t){if(e)return w(e,t);let r=y.BETTER_AUTH_URL||y.NEXT_PUBLIC_BETTER_AUTH_URL||y.PUBLIC_BETTER_AUTH_URL||y.NUXT_PUBLIC_BETTER_AUTH_URL||y.NUXT_PUBLIC_AUTH_URL||(y.BASE_URL!=="/"?y.BASE_URL:void 0);if(r)return w(r,t);if(typeof window<"u"&&window.location)return w(window.location.origin,t)}n(U,"getBaseURL");import"nanostores";import"@better-fetch/fetch";var x={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},I={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};import{atom as Y}from"nanostores";import"@better-fetch/fetch";import{atom as K,onMount as Q}from"nanostores";var L=n((e,t,r,a)=>{let s=K({data:null,error:null,isPending:!0,isRefetching:!1}),g=n(()=>{let f=typeof a=="function"?a({data:s.get().data,error:s.get().error,isPending:s.get().isPending}):a;return r(t,{...f,async onSuccess(p){typeof window<"u"&&s.set({data:p.data,error:null,isPending:!1,isRefetching:!1}),await f?.onSuccess?.(p)},async onError(p){s.set({error:p.error,data:null,isPending:!1,isRefetching:!1}),await f?.onError?.(p)},async onRequest(p){let c=s.get();s.set({isPending:c.data===null,data:c.data,error:null,isRefetching:!0}),await f?.onRequest?.(p)}})},"fn");e=Array.isArray(e)?e:[e];let l=!1;for(let f of e)f.subscribe(()=>{l?g():Q(s,()=>(g(),l=!0,()=>{s.off(),f.off()}))});return s},"useAuthQuery");function v(e){let t=Y(!1);return{session:L(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}n(v,"getSessionAtom");var Z={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},ee=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,B={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},te=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function ne(e){return e instanceof Date&&!isNaN(e.getTime())}n(ne,"isValidDate");function re(e){let t=te.exec(e);if(!t)return null;let[,r,a,s,g,l,f,p,c,u,i]=t,d=new Date(Date.UTC(parseInt(r,10),parseInt(a,10)-1,parseInt(s,10),parseInt(g,10),parseInt(l,10),parseInt(f,10),p?parseInt(p.padEnd(3,"0"),10):0));if(c){let o=(parseInt(u,10)*60+parseInt(i,10))*(c==="+"?-1:1);d.setUTCMinutes(d.getUTCMinutes()+o)}return ne(d)?d:null}n(re,"parseISODate");function oe(e,t={}){let{strict:r=!1,warnings:a=!1,reviver:s,parseDates:g=!0}=t;if(typeof e!="string")return e;let l=e.trim();if(l[0]==='"'&&l.endsWith('"')&&!l.slice(1,-1).includes('"'))return l.slice(1,-1);let f=l.toLowerCase();if(f.length<=9&&f in B)return B[f];if(!ee.test(l)){if(r)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(Z).some(([c,u])=>{let i=u.test(l);return i&&a&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${c} pattern`),i})&&r)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(l,n((u,i)=>{if(u==="__proto__"||u==="constructor"&&i&&typeof i=="object"&&"prototype"in i){a&&console.warn(`[better-json] Dropping "${u}" key to prevent prototype pollution`);return}if(g&&typeof i=="string"){let d=re(i);if(d)return d}return s?s(u,i):i},"secureReviver"))}catch(c){if(r)throw c;return e}}n(oe,"betterJSONParse");function C(e,t={strict:!0}){return oe(e,t)}n(C,"parseJSON");var F=n(e=>{let t="credentials"in Request.prototype,r=U(e?.baseURL),a=e?.plugins?.flatMap(o=>o.fetchPlugins).filter(o=>o!==void 0)||[],s=se({baseURL:r,...t?{credentials:"include"}:{},method:"GET",jsonParser(o){return C(o,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...a]:[x,I,...e?.fetchOptions?.plugins||[],...a]}),{$sessionSignal:g,session:l}=v(s),f=e?.plugins||[],p={},c={$sessionSignal:g,session:l},u={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},i=[{signal:"$sessionSignal",matcher(o){return o==="/sign-out"||o==="/update-user"||o.startsWith("/sign-in")||o.startsWith("/sign-up")}}];for(let o of f)o.getAtoms&&Object.assign(c,o.getAtoms?.(s)),o.pathMethods&&Object.assign(u,o.pathMethods),o.atomListeners&&i.push(...o.atomListeners);let d={notify:n(o=>{c[o].set(!c[o].get())},"notify"),listen:n((o,h)=>{c[o].subscribe(h)},"listen"),atoms:c};for(let o of f)o.getActions&&Object.assign(p,o.getActions?.(s,d));return{pluginsActions:p,pluginsAtoms:c,pluginPathMethods:u,atomListeners:i,$fetch:s,$store:d}},"getClientConfig");function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}n(N,"capitalizeFirstLetter");function ie(e,t,r){let a=t[e],{fetchOptions:s,query:g,...l}=r||{};return a||(s?.method?s.method:l&&Object.keys(l).length>0?"POST":"GET")}n(ie,"getMethod");function $(e,t,r,a,s){function g(l=[]){return new Proxy(function(){},{get(f,p){let c=[...l,p],u=e;for(let i of c)if(u&&typeof u=="object"&&i in u)u=u[i];else{u=void 0;break}return typeof u=="function"?u:g(c)},apply:n(async(f,p,c)=>{let u="/"+l.map(O=>O.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`)).join("/"),i=c[0]||{},d=c[1]||{},{query:o,fetchOptions:h,...R}=i,P={...d,...h},_=ie(u,r,i);return await t(u,{...P,body:_==="GET"?void 0:{...R,...P?.body||{}},query:o||P?.query,method:_,async onSuccess(O){await P?.onSuccess?.(O);let S=s?.find(k=>k.matcher(u));if(!S)return;let A=a[S.signal];if(!A)return;let D=A.get();setTimeout(()=>{A.set(!D)},10)}})},"apply")})}return n(g,"createProxy"),g()}n($,"createDynamicPathProxy");function ae(e){return`use${N(e)}`}n(ae,"getAtomKey");function Ke(e){let{pluginPathMethods:t,pluginsActions:r,pluginsAtoms:a,$fetch:s,$store:g,atomListeners:l}=F(e),f={};for(let[i,d]of Object.entries(a))f[ae(i)]=()=>E(d);function p(i){if(i){let d=E(a.$sessionSignal),o=e?.fetchOptions?.baseURL||e?.baseURL,h=o?new URL(o).pathname:"/api/auth";return i(`${h}/get-session`,{ref:d}).then(R=>({data:R.data,isPending:!1,error:R.error}))}return f.useSession()}n(p,"useSession");let c={...r,...f,useSession:p,$fetch:s,$store:g};return $(c,s,t,a,l)}n(Ke,"createAuthClient");export{Ke as createAuthClient};
