import{getCurrentInstance as k,getCurrentScope as j,onScopeDispose as V,readonly as q,shallowRef as H}from"vue";function M(e){let t=k();if(t&&t.proxy){let n=t.proxy;("_nanostores"in n?n._nanostores:n._nanostores=[]).push(e)}}function A(e){let t=H(),n=e.subscribe(i=>{t.value=i});return j()&&V(n),process.env.NODE_ENV!=="production"?(M(e),q(t)):t}import{createFetch as re}from"@better-fetch/fetch";var S=Object.create(null),h=e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?S:globalThis),g=new Proxy(S,{get(e,t){return h()[t]??S[t]},has(e,t){let n=h();return t in n||t in S},set(e,t,n){let i=h(!0);return i[t]=n,!0},deleteProperty(e,t){if(!t)return!1;let n=h(!0);return delete n[t],!0},ownKeys(){let e=h(!0);return Object.keys(e)}});function W(e){return e?e!=="false":!1}var G=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var ce=G==="test"||W(g.TEST);var T=class extends Error{constructor(t,n){super(t),this.name="BetterAuthError",this.message=t,this.cause=n,this.stack=""}};function J(e){try{return new URL(e).pathname!=="/"}catch{throw new T(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}function E(e,t="/api/auth"){return J(e)?e:(t=t.startsWith("/")?t:`/${t}`,`${e}${t}`)}function _(e,t){if(e)return E(e,t);let n=g.BETTER_AUTH_URL||g.NEXT_PUBLIC_BETTER_AUTH_URL||g.PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_BETTER_AUTH_URL||g.NUXT_PUBLIC_AUTH_URL||(g.BASE_URL!=="/"?g.BASE_URL:void 0);if(n)return E(n,t);if(typeof window<"u"&&window.location)return E(window.location.origin,t)}import"nanostores";import"@better-fetch/fetch";var U={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}},x={id:"add-current-url",name:"Add current URL",hooks:{onRequest(e){if(typeof window<"u"&&window.location&&window.location)try{let t=new URL(e.url);t.searchParams.set("currentURL",window.location.href),e.url=t}catch{}return e}}};import{atom as K}from"nanostores";import"@better-fetch/fetch";import{atom as z,onMount as X}from"nanostores";var I=(e,t,n,i)=>{let o=z({data:null,error:null,isPending:!0,isRefetching:!1}),d=()=>{let l=typeof i=="function"?i({data:o.get().data,error:o.get().error,isPending:o.get().isPending}):i;return n(t,{...l,async onSuccess(f){typeof window<"u"&&o.set({data:f.data,error:null,isPending:!1,isRefetching:!1}),await l?.onSuccess?.(f)},async onError(f){o.set({error:f.error,data:null,isPending:!1,isRefetching:!1}),await l?.onError?.(f)},async onRequest(f){let a=o.get();o.set({isPending:a.data===null,data:a.data,error:null,isRefetching:!0}),await l?.onRequest?.(f)}})};e=Array.isArray(e)?e:[e];let u=!1;for(let l of e)l.subscribe(()=>{u?d():X(o,()=>(d(),u=!0,()=>{o.off(),l.off()}))});return o};function L(e){let t=K(!1);return{session:I(t,"/get-session",e,{method:"GET"}),$sessionSignal:t}}var Q={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},Y=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,v={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},Z=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function ee(e){return e instanceof Date&&!isNaN(e.getTime())}function te(e){let t=Z.exec(e);if(!t)return null;let[,n,i,o,d,u,l,f,a,c,s]=t,p=new Date(Date.UTC(parseInt(n,10),parseInt(i,10)-1,parseInt(o,10),parseInt(d,10),parseInt(u,10),parseInt(l,10),f?parseInt(f.padEnd(3,"0"),10):0));if(a){let r=(parseInt(c,10)*60+parseInt(s,10))*(a==="+"?-1:1);p.setUTCMinutes(p.getUTCMinutes()+r)}return ee(p)?p:null}function ne(e,t={}){let{strict:n=!1,warnings:i=!1,reviver:o,parseDates:d=!0}=t;if(typeof e!="string")return e;let u=e.trim();if(u[0]==='"'&&u.endsWith('"')&&!u.slice(1,-1).includes('"'))return u.slice(1,-1);let l=u.toLowerCase();if(l.length<=9&&l in v)return v[l];if(!Y.test(u)){if(n)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(Q).some(([a,c])=>{let s=c.test(u);return s&&i&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${a} pattern`),s})&&n)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(u,(c,s)=>{if(c==="__proto__"||c==="constructor"&&s&&typeof s=="object"&&"prototype"in s){i&&console.warn(`[better-json] Dropping "${c}" key to prevent prototype pollution`);return}if(d&&typeof s=="string"){let p=te(s);if(p)return p}return o?o(c,s):s})}catch(a){if(n)throw a;return e}}function B(e,t={strict:!0}){return ne(e,t)}var C=e=>{let t="credentials"in Request.prototype,n=_(e?.baseURL),i=e?.plugins?.flatMap(r=>r.fetchPlugins).filter(r=>r!==void 0)||[],o=re({baseURL:n,...t?{credentials:"include"}:{},method:"GET",jsonParser(r){return B(r,{strict:!1})},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...i]:[U,x,...e?.fetchOptions?.plugins||[],...i]}),{$sessionSignal:d,session:u}=L(o),l=e?.plugins||[],f={},a={$sessionSignal:d,session:u},c={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"},s=[{signal:"$sessionSignal",matcher(r){return r==="/sign-out"||r==="/update-user"||r.startsWith("/sign-in")||r.startsWith("/sign-up")}}];for(let r of l)r.getAtoms&&Object.assign(a,r.getAtoms?.(o)),r.pathMethods&&Object.assign(c,r.pathMethods),r.atomListeners&&s.push(...r.atomListeners);let p={notify:r=>{a[r].set(!a[r].get())},listen:(r,y)=>{a[r].subscribe(y)},atoms:a};for(let r of l)r.getActions&&Object.assign(f,r.getActions?.(o,p));return{pluginsActions:f,pluginsAtoms:a,pluginPathMethods:c,atomListeners:s,$fetch:o,$store:p}};function F(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe(e,t,n){let i=t[e],{fetchOptions:o,query:d,...u}=n||{};return i||(o?.method?o.method:u&&Object.keys(u).length>0?"POST":"GET")}function N(e,t,n,i,o){function d(u=[]){return new Proxy(function(){},{get(l,f){let a=[...u,f],c=e;for(let s of a)if(c&&typeof c=="object"&&s in c)c=c[s];else{c=void 0;break}return typeof c=="function"?c:d(a)},apply:async(l,f,a)=>{let c="/"+u.map(b=>b.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`)).join("/"),s=a[0]||{},p=a[1]||{},{query:r,fetchOptions:y,...m}=s,R={...p,...y},w=oe(c,n,s);return await t(c,{...R,body:w==="GET"?void 0:{...m,...R?.body||{}},query:r||R?.query,method:w,async onSuccess(b){await R?.onSuccess?.(b);let P=o?.find(D=>D.matcher(c));if(!P)return;let O=i[P.signal];if(!O)return;let $=O.get();setTimeout(()=>{O.set(!$)},10)}})}})}return d()}function se(e){return`use${F(e)}`}function $e(e){let{pluginPathMethods:t,pluginsActions:n,pluginsAtoms:i,$fetch:o,$store:d,atomListeners:u}=C(e),l={};for(let[s,p]of Object.entries(i))l[se(s)]=()=>A(p);function f(s){if(s){let p=A(i.$sessionSignal),r=e?.fetchOptions?.baseURL||e?.baseURL,y=r?new URL(r).pathname:"/api/auth";return s(`${y}/get-session`,{ref:p}).then(m=>({data:m.data,isPending:!1,error:m.error}))}return l.useSession()}let a={...n,...l,useSession:f,$fetch:o,$store:d};return N(a,o,t,i,u)}export{$e as createAuthClient};
