var D=Object.defineProperty;var n=(e,t)=>D(e,"name",{value:t,configurable:!0});import{createFetch as Z}from"@better-fetch/fetch";var T=Object.create(null),h=n(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?T:globalThis),"_getEnv"),m=new Proxy(T,{get(e,t){return h()[t]??T[t]},has(e,t){let r=h();return t in r||t in T},set(e,t,r){let l=h(!0);return l[t]=r,!0},deleteProperty(e,t){if(!t)return!1;let r=h(!0);return delete r[t],!0},ownKeys(){let e=h(!0);return Object.keys(e)}});function j(e){return e?e!=="false":!1}n(j,"toBoolean");var q=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var te=q==="test"||j(m.TEST);var O=class extends Error{static{n(this,"BetterAuthError")}constructor(t,r){super(t),this.name="BetterAuthError",this.message=t,this.cause=r,this.stack=""}};function H(e){try{return new URL(e).pathname!=="/"}catch{throw new O(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}n(H,"checkHasPath");function S(e,t="/api/auth"){return H(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}n(S,"withPath");function w(e,t){if(e)return S(e,t);let r=m.BETTER_AUTH_URL||m.NEXT_PUBLIC_BETTER_AUTH_URL||m.PUBLIC_BETTER_AUTH_URL||m.NUXT_PUBLIC_BETTER_AUTH_URL||m.NUXT_PUBLIC_AUTH_URL||(m.BASE_URL!=="/"?m.BASE_URL:void 0);if(r)return S(r,t);if(typeof window<"u"&&window.location)return S(window.location.origin,t)}n(w,"getBaseURL");import"nanostores";import"@better-fetch/fetch";var _={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},U={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};import{atom as W}from"nanostores";import"@better-fetch/fetch";import{atom as M,onMount as V}from"nanostores";var I=n((e,t,r,l)=>{let s=M({data:null,error:null,isPending:!0,isRefetching:!1}),d=n(()=>{let f=typeof l=="function"?l({data:s.get().data,error:s.get().error,isPending:s.get().isPending}):l;return r(t,{...f,async onSuccess(p){typeof window<"u"&&s.set({data:p.data,error:null,isPending:!1,isRefetching:!1}),await f?.onSuccess?.(p)},async onError(p){s.set({error:p.error,data:null,isPending:!1,isRefetching:!1}),await f?.onError?.(p)},async onRequest(p){let a=s.get();s.set({isPending:a.data===null,data:a.data,error:null,isRefetching:!0}),await f?.onRequest?.(p)}})},"fn");e=Array.isArray(e)?e:[e];let c=!1;for(let f of e)f.subscribe(()=>{c?d():V(s,()=>(d(),c=!0,()=>{s.off(),f.off()}))});return s},"useAuthQuery");function x(e){let t=W(!1);return{session:I(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}n(x,"getSessionAtom");var G={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},J=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,B={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},z=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function X(e){return e instanceof Date&&!isNaN(e.getTime())}n(X,"isValidDate");function Q(e){let t=z.exec(e);if(!t)return null;let[,r,l,s,d,c,f,p,a,i,u]=t,g=new Date(Date.UTC(parseInt(r,10),parseInt(l,10)-1,parseInt(s,10),parseInt(d,10),parseInt(c,10),parseInt(f,10),p?parseInt(p.padEnd(3,"0"),10):0));if(a){let o=(parseInt(i,10)*60+parseInt(u,10))*(a==="+"?-1:1);g.setUTCMinutes(g.getUTCMinutes()+o)}return X(g)?g:null}n(Q,"parseISODate");function Y(e,t={}){let{strict:r=!1,warnings:l=!1,reviver:s,parseDates:d=!0}=t;if(typeof e!="string")return e;let c=e.trim();if(c[0]==='"'&&c.endsWith('"')&&!c.slice(1,-1).includes('"'))return c.slice(1,-1);let f=c.toLowerCase();if(f.length<=9&&f in B)return B[f];if(!J.test(c)){if(r)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(G).some(([a,i])=>{let u=i.test(c);return u&&l&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${a} pattern`),u})&&r)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(c,n((i,u)=>{if(i==="__proto__"||i==="constructor"&&u&&typeof u=="object"&&"prototype"in u){l&&console.warn(`[better-json] Dropping "${i}" key to prevent prototype pollution`);return}if(d&&typeof u=="string"){let g=Q(u);if(g)return g}return s?s(i,u):u},"secureReviver"))}catch(a){if(r)throw a;return e}}n(Y,"betterJSONParse");function L(e,t={strict:!0}){return Y(e,t)}n(L,"parseJSON");var C=n(e=>{let t="credentials"in Request.prototype,r=w(e?.baseURL),l=e?.plugins?.flatMap(o=>o.fetchPlugins).filter(o=>o!==void 0)||[],s=Z({baseURL:r,...t?{credentials:"include"}:{},method:"GET",jsonParser(o){return L(o,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...l]:[_,U,...e?.fetchOptions?.plugins||[],...l]}),{$sessionSignal:d,session:c}=x(s),f=e?.plugins||[],p={},a={$sessionSignal:d,session:c},i={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},u=[{signal:"$sessionSignal",matcher(o){return o==="/sign-out"||o==="/update-user"||o.startsWith("/sign-in")||o.startsWith("/sign-up")}}];for(let o of f)o.getAtoms&&Object.assign(a,o.getAtoms?.(s)),o.pathMethods&&Object.assign(i,o.pathMethods),o.atomListeners&&u.push(...o.atomListeners);let g={notify:n(o=>{a[o].set(!a[o].get())},"notify"),listen:n((o,R)=>{a[o].subscribe(R)},"listen"),atoms:a};for(let o of f)o.getActions&&Object.assign(p,o.getActions?.(s,g));return{pluginsActions:p,pluginsAtoms:a,pluginPathMethods:i,atomListeners:u,$fetch:s,$store:g}},"getClientConfig");function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}n(v,"capitalizeFirstLetter");function K(e,t,r){let l=t[e],{fetchOptions:s,query:d,...c}=r||{};return l||(s?.method?s.method:c&&Object.keys(c).length>0?"POST":"GET")}n(K,"getMethod");function F(e,t,r,l,s){function d(c=[]){return new Proxy(function(){},{get(f,p){let a=[...c,p],i=e;for(let u of a)if(i&&typeof i=="object"&&u in i)i=i[u];else{i=void 0;break}return typeof i=="function"?i:d(a)},apply:n(async(f,p,a)=>{let i="/"+c.map(A=>A.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`)).join("/"),u=a[0]||{},g=a[1]||{},{query:o,fetchOptions:R,...$}=u,y={...g,...R},E=K(i,r,u);return await t(i,{...y,body:E==="GET"?void 0:{...$,...y?.body||{}},query:o||y?.query,method:E,async onSuccess(A){await y?.onSuccess?.(A);let P=s?.find(N=>N.matcher(i));if(!P)return;let b=l[P.signal];if(!b)return;let k=b.get();setTimeout(()=>{b.set(!k)},10)}})},"apply")})}return n(d,"createProxy"),d()}n(F,"createDynamicPathProxy");function Ne(e){let{pluginPathMethods:t,pluginsActions:r,pluginsAtoms:l,$fetch:s,atomListeners:d,$store:c}=C(e),f={};for(let[i,u]of Object.entries(l))f[`use${v(i)}`]=u;let p={...r,...f,$fetch:s,$store:c};return F(p,s,t,l,d)}n(Ne,"createAuthClient");var qe=n(()=>({id:"infer-server-plugin",$InferServerPlugin:{}}),"InferPlugin");export{qe as InferPlugin,Ne as createAuthClient,I as useAuthQuery};
