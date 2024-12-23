"use strict";var d=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var e=(t,n)=>d(t,"name",{value:n,configurable:!0});var I=(t,n)=>{for(var i in n)d(t,i,{get:n[i],enumerable:!0})},_=(t,n,i,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of E(n))!k.call(t,r)&&r!==i&&d(t,r,{get:()=>n[r],enumerable:!(a=v(n,r))||a.enumerable});return t};var U=t=>_(d({},"__esModule",{value:!0}),t);var se={};I(se,{InferServerPlugin:()=>A,adminClient:()=>K,anonymousClient:()=>H,customSessionClient:()=>ne,emailOTPClient:()=>Z,genericOAuthClient:()=>Q,getPasskeyActions:()=>C,inferAdditionalFields:()=>J,jwtClient:()=>Y,magicLinkClient:()=>W,multiSessionClient:()=>X,oidcClient:()=>oe,oneTapClient:()=>ee,organizationClient:()=>G,passkeyClient:()=>j,phoneNumberClient:()=>V,ssoClient:()=>re,twoFactorClient:()=>q,usernameClient:()=>M});module.exports=U(se);var h=require("nanostores");function S(t){let n=t;return{newRole(i){return F(i)}}}e(S,"createAccessControl");function F(t){return{statements:t,authorize(n,i){for(let[a,r]of Object.entries(n)){let s=t[a];return s?(i==="OR"?r.some(o=>s.includes(o)):r.every(o=>s.includes(o)))?{success:!0}:{success:!1,error:`Unauthorized to access resource "${a}"`}:{success:!1,error:`You are not allowed to access resource: ${a}`}}return{success:!1,error:"Not authorized"}}}}e(F,"role");var $={organization:["update","delete"],member:["create","update","delete"],invitation:["create","cancel"]},P=S($),T=P.newRole({organization:["update"],invitation:["create","cancel"],member:["create","update","delete"]}),R=P.newRole({organization:["update","delete"],member:["create","update","delete"],invitation:["create","cancel"]}),b=P.newRole({organization:[],member:[],invitation:[]});var D=require("@better-fetch/fetch");var g=Object.create(null),f=e(t=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(t?g:globalThis),"_getEnv"),x=new Proxy(g,{get(t,n){return f()[n]??g[n]},has(t,n){let i=f();return n in i||n in g},set(t,n,i){let a=f(!0);return a[n]=i,!0},deleteProperty(t,n){if(!n)return!1;let i=f(!0);return delete i[n],!0},ownKeys(){let t=f(!0);return Object.keys(t)}});function L(t){return t?t!=="false":!1}e(L,"toBoolean");var z=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var ge=z==="test"||L(x.TEST);var je=require("nanostores");var xe=require("@better-fetch/fetch");var N=require("nanostores");var Ce=require("@better-fetch/fetch"),y=require("nanostores");var l=e((t,n,i,a)=>{let r=(0,y.atom)({data:null,error:null,isPending:!0,isRefetching:!1}),s=e(()=>{let o=typeof a=="function"?a({data:r.get().data,error:r.get().error,isPending:r.get().isPending}):a;return i(n,{...o,async onSuccess(c){typeof window<"u"&&r.set({data:c.data,error:null,isPending:!1,isRefetching:!1}),await o?.onSuccess?.(c)},async onError(c){r.set({error:c.error,data:null,isPending:!1,isRefetching:!1}),await o?.onError?.(c)},async onRequest(c){let m=r.get();r.set({isPending:m.data===null,data:m.data,error:null,isRefetching:!0}),await o?.onRequest?.(c)}})},"fn");t=Array.isArray(t)?t:[t];let u=!1;for(let o of t)o.subscribe(()=>{u?s():(0,y.onMount)(r,()=>(s(),u=!0,()=>{r.off(),o.off()}))});return r},"useAuthQuery");var Ue={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY};var G=e(t=>{let n=(0,h.atom)(!1),i=(0,h.atom)(!1),a=(0,h.atom)(!1),r={admin:T,member:b,owner:R,...t?.roles};return{id:"organization",$InferServerPlugin:{},getActions:e(s=>({$Infer:{ActiveOrganization:{},Organization:{},Invitation:{},Member:{}},organization:{checkRolePermission:e(u=>{let o=r[u.role];return o?(o?.authorize(u.permission)).success:!1},"checkRolePermission")}}),"getActions"),getAtoms:e(s=>{let u=l(n,"/organization/list",s,{method:"GET"}),o=l([i],"/organization/get-full-organization",s,()=>({method:"GET"})),c=l([a],"/organization/get-active-member",s,{method:"GET"});return{$listOrg:n,$activeOrgSignal:i,$activeMemberSignal:a,activeOrganization:o,listOrganizations:u,activeMember:c}},"getAtoms"),pathMethods:{"/organization/get-full-organization":"GET"},atomListeners:[{matcher(s){return s==="/organization/create"||s==="/organization/delete"},signal:"$listOrg"},{matcher(s){return s.startsWith("/organization")},signal:"$activeOrgSignal"},{matcher(s){return s.includes("/organization/update-member-role")},signal:"$activeMemberSignal"}]}},"organizationClient");var M=e(()=>({id:"username",$InferServerPlugin:{}}),"usernameClient");var p=require("@simplewebauthn/browser");var w=require("nanostores");var C=e((t,{$listPasskeys:n})=>({signIn:{passkey:e(async(r,s)=>{let u=await t("/passkey/generate-authenticate-options",{method:"POST",body:{email:r?.email}});if(!u.data)return u;try{let o=await(0,p.startAuthentication)(u.data,r?.autoFill||!1),c=await t("/passkey/verify-authentication",{body:{response:o},...r?.fetchOptions,...s,method:"POST"});if(!c.data)return c}catch{return{data:null,error:{message:"auth cancelled",status:400,statusText:"BAD_REQUEST"}}}},"signInPasskey")},passkey:{addPasskey:e(async(r,s)=>{let u=await t("/passkey/generate-register-options",{method:"GET"});if(!u.data)return u;try{let o=await(0,p.startRegistration)(u.data),c=await t("/passkey/verify-registration",{...r?.fetchOptions,...s,body:{response:o,name:r?.name},method:"POST"});if(!c.data)return c;n.set(Math.random())}catch(o){return o instanceof p.WebAuthnError?o.code==="ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED"?{data:null,error:{message:"previously registered",status:400,statusText:"BAD_REQUEST"}}:o.code==="ERROR_CEREMONY_ABORTED"?{data:null,error:{message:"registration cancelled",status:400,statusText:"BAD_REQUEST"}}:{data:null,error:{message:o.message,status:400,statusText:"BAD_REQUEST"}}:{data:null,error:{message:o instanceof Error?o.message:"unknown error",status:500,statusText:"INTERNAL_SERVER_ERROR"}}}},"registerPasskey")},$Infer:{}}),"getPasskeyActions"),j=e(()=>{let t=(0,w.atom)();return{id:"passkey",$InferServerPlugin:{},getActions:e(n=>C(n,{$listPasskeys:t}),"getActions"),getAtoms(n){return{listPasskeys:l(t,"/passkey/list-user-passkeys",n,{method:"GET"}),$listPasskeys:t}},pathMethods:{"/passkey/register":"POST","/passkey/authenticate":"POST"},atomListeners:[{matcher(n){return n==="/passkey/verify-registration"||n==="/passkey/delete-passkey"||n==="/passkey/update-passkey"},signal:"_listPasskeys"}]}},"passkeyClient");var q=e(t=>({id:"two-factor",$InferServerPlugin:{},atomListeners:[{matcher:e(n=>n.startsWith("/two-factor/"),"matcher"),signal:"$sessionSignal"}],pathMethods:{"/two-factor/disable":"POST","/two-factor/enable":"POST","/two-factor/send-otp":"POST","/two-factor/generate-backup-codes":"POST"},fetchPlugins:[{id:"two-factor",name:"two-factor",hooks:{async onSuccess(n){n.data?.twoFactorRedirect&&t?.onTwoFactorRedirect&&await t.onTwoFactorRedirect()}}}]}),"twoFactorClient");var W=e(()=>({id:"magic-link",$InferServerPlugin:{}}),"magicLinkClient");var V=e(()=>({id:"phoneNumber",$InferServerPlugin:{},atomListeners:[{matcher(t){return t==="/phone-number/update"||t==="/phone-number/verify"},signal:"$sessionSignal"}]}),"phoneNumberClient");var H=e(()=>({id:"anonymous",$InferServerPlugin:{},pathMethods:{"/sign-in/anonymous":"POST"}}),"anonymousClient");var J=e(t=>({id:"additional-fields-client",$InferServerPlugin:{}}),"inferAdditionalFields");var K=e(()=>({id:"better-auth-client",$InferServerPlugin:{},pathMethods:{"/admin/list-users":"GET","/admin/stop-impersonating":"POST"}}),"adminClient");var Q=e(()=>({id:"generic-oauth-client",$InferServerPlugin:{}}),"genericOAuthClient");var Y=e(()=>({id:"better-auth-client",$InferServerPlugin:{}}),"jwtClient");var X=e(()=>({id:"multi-session",$InferServerPlugin:{},atomListeners:[{matcher(t){return t==="/multi-session/set-active"},signal:"$sessionSignal"}]}),"multiSessionClient");var Z=e(()=>({id:"email-otp",$InferServerPlugin:{}}),"emailOTPClient");var O=!1,ee=e(t=>({id:"one-tap",getActions:e((n,i)=>({oneTap:e(async(a,r)=>{if(O){console.warn("A Google One Tap request is already in progress. Please wait.");return}O=!0;try{if(typeof window>"u"||!window.document){console.warn("Google One Tap is only available in browser environments");return}let{autoSelect:s,cancelOnTapOutside:u,context:o}=a??{},c=o??t.context??"signin";await te(),await new Promise(m=>{window.google?.accounts.id.initialize({client_id:t.clientId,callback:e(async B=>{await n("/one-tap/callback",{method:"POST",body:{idToken:B.credential},...a?.fetchOptions,...r}),(!a?.fetchOptions&&!r||a?.callbackURL)&&(window.location.href=a?.callbackURL??"/"),m()},"callback"),auto_select:s,cancel_on_tap_outside:u,context:c}),window.google?.accounts.id.prompt()})}catch(s){throw console.error("Error during Google One Tap flow:",s),s}finally{O=!1}},"oneTap")}),"getActions"),getAtoms(n){return{}}}),"oneTapClient"),te=e(()=>new Promise(t=>{if(window.googleScriptInitialized){t();return}let n=document.createElement("script");n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n.onload=()=>{window.googleScriptInitialized=!0,t()},document.head.appendChild(n)}),"loadGoogleScript");var ne=e(()=>A(),"customSessionClient");var A=e(()=>({id:"infer-server-plugin",$InferServerPlugin:{}}),"InferServerPlugin");var re=e(()=>({id:"sso-client",$InferServerPlugin:{}}),"ssoClient");var oe=e(()=>({id:"oidc-client",$InferServerPlugin:{}}),"oidcClient");0&&(module.exports={InferServerPlugin,adminClient,anonymousClient,customSessionClient,emailOTPClient,genericOAuthClient,getPasskeyActions,inferAdditionalFields,jwtClient,magicLinkClient,multiSessionClient,oidcClient,oneTapClient,organizationClient,passkeyClient,phoneNumberClient,ssoClient,twoFactorClient,usernameClient});
