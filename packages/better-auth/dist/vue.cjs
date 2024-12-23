"use strict";var b=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var r=(e,t)=>b(e,"name",{value:t,configurable:!0});var z=(e,t)=>{for(var n in t)b(e,n,{get:t[n],enumerable:!0})},X=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of G(t))!J.call(e,o)&&o!==n&&b(e,o,{get:()=>t[o],enumerable:!(i=W(t,o))||i.enumerable});return e};var K=e=>X(b({},"__esModule",{value:!0}),e);var le={};z(le,{createAuthClient:()=>ue});module.exports=K(le);var y=require("vue");function Q(e){let t=(0,y.getCurrentInstance)();if(t&&t.proxy){let n=t.proxy;("_nanostores"in n?n._nanostores:n._nanostores=[]).push(e)}}r(Q,"registerStore");function U(e){let t=(0,y.shallowRef)(),n=e.subscribe(i=>{t.value=i});return(0,y.getCurrentScope)()&&(0,y.onScopeDispose)(n),process.env.NODE_ENV!=="production"?(Q(e),(0,y.readonly)(t)):t}r(U,"useStore");var k=require("@better-fetch/fetch");var O=Object.create(null),R=r(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?O:globalThis),"_getEnv"),h=new Proxy(O,{get(e,t){return R()[t]??O[t]},has(e,t){let n=R();return t in n||t in O},set(e,t,n){let i=R(!0);return i[t]=n,!0},deleteProperty(e,t){if(!t)return!1;let n=R(!0);return delete n[t],!0},ownKeys(){let e=R(!0);return Object.keys(e)}});function Y(e){return e?e!=="false":!1}r(Y,"toBoolean");var Z=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var ge=Z==="test"||Y(h.TEST);var A=class extends Error{static{r(this,"BetterAuthError")}constructor(t,n){super(t),this.name="BetterAuthError",this.message=t,this.cause=n,this.stack=""}};function ee(e){try{return new URL(e).pathname!=="/"}catch{throw new A(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}r(ee,"checkHasPath");function x(e,t="/api/auth"){return ee(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}r(x,"withPath");function L(e,t){if(e)return x(e,t);let n=h.BETTER_AUTH_URL||h.NEXT_PUBLIC_BETTER_AUTH_URL||h.PUBLIC_BETTER_AUTH_URL||h.NUXT_PUBLIC_BETTER_AUTH_URL||h.NUXT_PUBLIC_AUTH_URL||(h.BASE_URL!=="/"?h.BASE_URL:void 0);if(n)return x(n,t);if(typeof window<"u"&&window.location)return x(window.location.origin,t)}r(L,"getBaseURL");var Fe=require("nanostores");var Oe=require("@better-fetch/fetch"),v={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},B={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};var F=require("nanostores");var Ee=require("@better-fetch/fetch"),E=require("nanostores");var C=r((e,t,n,i)=>{let o=(0,E.atom)({data:null,error:null,isPending:!0,isRefetching:!1}),g=r(()=>{let f=typeof i=="function"?i({data:o.get().data,error:o.get().error,isPending:o.get().isPending}):i;return n(t,{...f,async onSuccess(p){typeof window<"u"&&o.set({data:p.data,error:null,isPending:!1,isRefetching:!1}),await f?.onSuccess?.(p)},async onError(p){o.set({error:p.error,data:null,isPending:!1,isRefetching:!1}),await f?.onError?.(p)},async onRequest(p){let c=o.get();o.set({isPending:c.data===null,data:c.data,error:null,isRefetching:!0}),await f?.onRequest?.(p)}})},"fn");e=Array.isArray(e)?e:[e];let l=!1;for(let f of e)f.subscribe(()=>{l?g():(0,E.onMount)(o,()=>(g(),l=!0,()=>{o.off(),f.off()}))});return o},"useAuthQuery");function N(e){let t=(0,F.atom)(!1);return{session:C(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}r(N,"getSessionAtom");var te={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},ne=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,$={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},re=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function oe(e){return e instanceof Date&&!isNaN(e.getTime())}r(oe,"isValidDate");function se(e){let t=re.exec(e);if(!t)return null;let[,n,i,o,g,l,f,p,c,u,a]=t,d=new Date(Date.UTC(parseInt(n,10),parseInt(i,10)-1,parseInt(o,10),parseInt(g,10),parseInt(l,10),parseInt(f,10),p?parseInt(p.padEnd(3,"0"),10):0));if(c){let s=(parseInt(u,10)*60+parseInt(a,10))*(c==="+"?-1:1);d.setUTCMinutes(d.getUTCMinutes()+s)}return oe(d)?d:null}r(se,"parseISODate");function ie(e,t={}){let{strict:n=!1,warnings:i=!1,reviver:o,parseDates:g=!0}=t;if(typeof e!="string")return e;let l=e.trim();if(l[0]==='"'&&l.endsWith('"')&&!l.slice(1,-1).includes('"'))return l.slice(1,-1);let f=l.toLowerCase();if(f.length<=9&&f in $)return $[f];if(!ne.test(l)){if(n)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(te).some(([c,u])=>{let a=u.test(l);return a&&i&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${c} pattern`),a})&&n)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(l,r((u,a)=>{if(u==="__proto__"||u==="constructor"&&a&&typeof a=="object"&&"prototype"in a){i&&console.warn(`[better-json] Dropping "${u}" key to prevent prototype pollution`);return}if(g&&typeof a=="string"){let d=se(a);if(d)return d}return o?o(u,a):a},"secureReviver"))}catch(c){if(n)throw c;return e}}r(ie,"betterJSONParse");function D(e,t={strict:!0}){return ie(e,t)}r(D,"parseJSON");var j=r(e=>{let t="credentials"in Request.prototype,n=L(e?.baseURL),i=e?.plugins?.flatMap(s=>s.fetchPlugins).filter(s=>s!==void 0)||[],o=(0,k.createFetch)({baseURL:n,...t?{credentials:"include"}:{},method:"GET",jsonParser(s){return D(s,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...i]:[v,B,...e?.fetchOptions?.plugins||[],...i]}),{$sessionSignal:g,session:l}=N(o),f=e?.plugins||[],p={},c={$sessionSignal:g,session:l},u={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},a=[{signal:"$sessionSignal",matcher(s){return s==="/sign-out"||s==="/update-user"||s.startsWith("/sign-in")||s.startsWith("/sign-up")}}];for(let s of f)s.getAtoms&&Object.assign(c,s.getAtoms?.(o)),s.pathMethods&&Object.assign(u,s.pathMethods),s.atomListeners&&a.push(...s.atomListeners);let d={notify:r(s=>{c[s].set(!c[s].get())},"notify"),listen:r((s,m)=>{c[s].subscribe(m)},"listen"),atoms:c};for(let s of f)s.getActions&&Object.assign(p,s.getActions?.(o,d));return{pluginsActions:p,pluginsAtoms:c,pluginPathMethods:u,atomListeners:a,$fetch:o,$store:d}},"getClientConfig");function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}r(V,"capitalizeFirstLetter");function ae(e,t,n){let i=t[e],{fetchOptions:o,query:g,...l}=n||{};return i||(o?.method?o.method:l&&Object.keys(l).length>0?"POST":"GET")}r(ae,"getMethod");function q(e,t,n,i,o){function g(l=[]){return new Proxy(function(){},{get(f,p){let c=[...l,p],u=e;for(let a of c)if(u&&typeof u=="object"&&a in u)u=u[a];else{u=void 0;break}return typeof u=="function"?u:g(c)},apply:r(async(f,p,c)=>{let u="/"+l.map(w=>w.replace(/[A-Z]/g,T=>`-${T.toLowerCase()}`)).join("/"),a=c[0]||{},d=c[1]||{},{query:s,fetchOptions:m,...P}=a,S={...d,...m},I=ae(u,n,a);return await t(u,{...S,body:I==="GET"?void 0:{...P,...S?.body||{}},query:s||S?.query,method:I,async onSuccess(w){await S?.onSuccess?.(w);let T=o?.find(M=>M.matcher(u));if(!T)return;let _=i[T.signal];if(!_)return;let H=_.get();setTimeout(()=>{_.set(!H)},10)}})},"apply")})}return r(g,"createProxy"),g()}r(q,"createDynamicPathProxy");function ce(e){return`use${V(e)}`}r(ce,"getAtomKey");function ue(e){let{pluginPathMethods:t,pluginsActions:n,pluginsAtoms:i,$fetch:o,$store:g,atomListeners:l}=j(e),f={};for(let[a,d]of Object.entries(i))f[ce(a)]=()=>U(d);function p(a){if(a){let d=U(i.$sessionSignal),s=e?.fetchOptions?.baseURL||e?.baseURL,m=s?new URL(s).pathname:"/api/auth";return a(`${m}/get-session`,{ref:d}).then(P=>({data:P.data,isPending:!1,error:P.error}))}return f.useSession()}r(p,"useSession");let c={...n,...f,useSession:p,$fetch:o,$store:g};return q(c,o,t,i,l)}r(ue,"createAuthClient");0&&(module.exports={createAuthClient});