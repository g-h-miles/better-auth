var j=Object.defineProperty;var n=(e,i)=>j(e,"name",{value:i,configurable:!0});import{betterFetch as Q}from"@better-fetch/fetch";import{APIError as X}from"better-call";import{decodeJwt as Z,decodeProtectedHeader as Y,importJWK as ee,jwtVerify as re}from"jose";var U=n((e,i="ms")=>new Date(Date.now()+(i==="sec"?e*1e3:e)),"getDate");import{createHash as M}from"@better-auth/utils/hash";import{base64Url as F}from"@better-auth/utils/base64";async function P(e){let i=await M("SHA-256").digest(e);return F.encode(new Uint8Array(i),{padding:!1})}n(P,"generateCodeChallenge");function _(e){return{tokenType:e.token_type,accessToken:e.access_token,refreshToken:e.refresh_token,accessTokenExpiresAt:e.expires_in?U(e.expires_in,"sec"):void 0,scopes:e?.scope?typeof e.scope=="string"?e.scope.split(" "):e.scope:[],idToken:e.id_token}}n(_,"getOAuth2Tokens");async function p({id:e,options:i,authorizationEndpoint:r,state:t,codeVerifier:o,scopes:a,claims:s,redirectURI:c,duration:u}){let d=new URL(r);if(d.searchParams.set("response_type","code"),d.searchParams.set("client_id",i.clientId),d.searchParams.set("state",t),d.searchParams.set("scope",a.join(" ")),d.searchParams.set("redirect_uri",i.redirectURI||c),o){let f=await P(o);d.searchParams.set("code_challenge_method","S256"),d.searchParams.set("code_challenge",f)}if(s){let f=s.reduce((g,N)=>(g[N]=null,g),{});d.searchParams.set("claims",JSON.stringify({id_token:{email:null,email_verified:null,...f}}))}return u&&d.searchParams.set("duration",u),d}n(p,"createAuthorizationURL");import{betterFetch as H}from"@better-fetch/fetch";import{jwtVerify as Be}from"jose";async function l({code:e,codeVerifier:i,redirectURI:r,options:t,tokenEndpoint:o,authentication:a}){let s=new URLSearchParams,c={"content-type":"application/x-www-form-urlencoded",accept:"application/json","user-agent":"better-auth"};if(s.set("grant_type","authorization_code"),s.set("code",e),i&&s.set("code_verifier",i),s.set("redirect_uri",r),a==="basic"){let g=btoa(`${t.clientId}:${t.clientSecret}`);c.authorization=`Basic ${g}`}else s.set("client_id",t.clientId),s.set("client_secret",t.clientSecret);let{data:u,error:d}=await H(o,{method:"POST",body:s,headers:c});if(d)throw d;return _(u)}n(l,"validateAuthorizationCode");import{z as kr}from"zod";import{APIError as Lr}from"better-call";var v=Object.create(null),y=n(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?v:globalThis),"_getEnv"),A=new Proxy(v,{get(e,i){return y()[i]??v[i]},has(e,i){let r=y();return i in r||i in v},set(e,i,r){let t=y(!0);return t[i]=r,!0},deleteProperty(e,i){if(!i)return!1;let r=y(!0);return delete r[i],!0},ownKeys(){let e=y(!0);return Object.keys(e)}});function K(e){return e?e!=="false":!1}n(K,"toBoolean");var J=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var Ge=J==="test"||K(A.TEST);var h=class extends Error{static{n(this,"BetterAuthError")}constructor(i,r){super(i),this.name="BetterAuthError",this.message=i,this.cause=r,this.stack=""}};import{createHash as lr}from"@better-auth/utils/hash";import{xchacha20poly1305 as pr}from"@noble/ciphers/chacha";import{bytesToHex as fr,hexToBytes as gr,utf8ToBytes as hr}from"@noble/ciphers/utils";import{managedNonce as yr}from"@noble/ciphers/webcrypto";import{scryptAsync as er}from"@noble/hashes/scrypt";import{getRandomValues as tr}from"uncrypto";import{hex as or}from"@better-auth/utils/hex";import{createRandomStringGenerator as q}from"@better-auth/utils/random";var W=q("a-z","0-9","A-Z","-_");var R=n(e=>{let i="https://appleid.apple.com/auth/token";return{id:"apple",name:"Apple",createAuthorizationURL({state:r,scopes:t,redirectURI:o}){let a=t||["email","name"];return e.scope&&a.push(...e.scope),new URL(`https://appleid.apple.com/auth/authorize?client_id=${e.clientId}&response_type=code&redirect_uri=${e.redirectURI||o}&scope=${a.join(" ")}&state=${r}&response_mode=form_post`)},validateAuthorizationCode:n(async({code:r,codeVerifier:t,redirectURI:o})=>l({code:r,codeVerifier:t,redirectURI:e.redirectURI||o,options:e,tokenEndpoint:i}),"validateAuthorizationCode"),async verifyIdToken(r,t){if(e.disableIdTokenSignIn)return!1;if(e.verifyIdToken)return e.verifyIdToken(r,t);let o=Y(r),{kid:a,alg:s}=o;if(!a||!s)return!1;let c=await te(a),{payload:u}=await re(r,c,{algorithms:[s],issuer:"https://appleid.apple.com",audience:e.appBundleIdentifier||e.clientId,maxTokenAge:"1h"});return["email_verified","is_private_email"].forEach(d=>{u[d]!==void 0&&(u[d]=!!u[d])}),t&&u.nonce!==t?!1:!!u},async getUserInfo(r){if(e.getUserInfo)return e.getUserInfo(r);if(!r.idToken)return null;let t=Z(r.idToken);if(!t)return null;let o=t.user?`${t.user.name.firstName} ${t.user.name.lastName}`:t.email,a=await e.mapProfileToUser?.(t);return{user:{id:t.sub,name:o,emailVerified:!1,email:t.email,...a},data:t}}}},"apple"),te=n(async e=>{let i="https://appleid.apple.com",r="/auth/keys",{data:t}=await Q(`${i}${r}`);if(!t?.keys)throw new X("BAD_REQUEST",{message:"Keys not found"});let o=t.keys.find(a=>a.kid===e);if(!o)throw new Error(`JWK with kid ${e} not found`);return await ee(o,o.alg)},"getApplePublicKey");import{betterFetch as ie}from"@better-fetch/fetch";var k=n(e=>({id:"discord",name:"Discord",createAuthorizationURL({state:i,scopes:r,redirectURI:t}){let o=r||["identify","email"];return e.scope&&o.push(...e.scope),new URL(`https://discord.com/api/oauth2/authorize?scope=${o.join("+")}&response_type=code&client_id=${e.clientId}&redirect_uri=${encodeURIComponent(e.redirectURI||t)}&state=${i}&prompt=${e.prompt||"none"}`)},validateAuthorizationCode:n(async({code:i,redirectURI:r})=>l({code:i,redirectURI:e.redirectURI||r,options:e,tokenEndpoint:"https://discord.com/api/oauth2/token"}),"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let{data:r,error:t}=await ie("https://discord.com/api/users/@me",{headers:{authorization:`Bearer ${i.accessToken}`}});if(t)return null;if(r.avatar===null){let a=r.discriminator==="0"?Number(BigInt(r.id)>>BigInt(22))%6:parseInt(r.discriminator)%5;r.image_url=`https://cdn.discordapp.com/embed/avatars/${a}.png`}else{let a=r.avatar.startsWith("a_")?"gif":"png";r.image_url=`https://cdn.discordapp.com/avatars/${r.id}/${r.avatar}.${a}`}let o=await e.mapProfileToUser?.(r);return{user:{id:r.id,name:r.display_name||r.username||"",email:r.email,emailVerified:r.verified,image:r.image_url,...o},data:r}}}),"discord");import{betterFetch as oe}from"@better-fetch/fetch";var I=n(e=>({id:"facebook",name:"Facebook",async createAuthorizationURL({state:i,scopes:r,redirectURI:t}){let o=r||["email","public_profile"];return e.scope&&o.push(...e.scope),await p({id:"facebook",options:e,authorizationEndpoint:"https://www.facebook.com/v21.0/dialog/oauth",scopes:o,state:i,redirectURI:t})},validateAuthorizationCode:n(async({code:i,redirectURI:r})=>l({code:i,redirectURI:e.redirectURI||r,options:e,tokenEndpoint:"https://graph.facebook.com/oauth/access_token"}),"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let{data:r,error:t}=await oe("https://graph.facebook.com/me?fields=id,name,email,picture",{auth:{type:"Bearer",token:i.accessToken}});if(t)return null;let o=await e.mapProfileToUser?.(r);return{user:{id:r.id,name:r.name,email:r.email,image:r.picture.data.url,emailVerified:r.email_verified,...o},data:r}}}),"facebook");import{betterFetch as L}from"@better-fetch/fetch";var T=n(e=>{let i="https://github.com/login/oauth/access_token";return{id:"github",name:"GitHub",createAuthorizationURL({state:r,scopes:t,codeVerifier:o,redirectURI:a}){let s=t||["user:email"];return e.scope&&s.push(...e.scope),p({id:"github",options:e,authorizationEndpoint:"https://github.com/login/oauth/authorize",scopes:s,state:r,redirectURI:a})},validateAuthorizationCode:n(async({code:r,redirectURI:t})=>l({code:r,redirectURI:e.redirectURI||t,options:e,tokenEndpoint:i}),"validateAuthorizationCode"),async getUserInfo(r){if(e.getUserInfo)return e.getUserInfo(r);let{data:t,error:o}=await L("https://api.github.com/user",{headers:{"User-Agent":"better-auth",authorization:`Bearer ${r.accessToken}`}});if(o)return null;let a=!1,{data:s}=await L("https://api.github.com/user/emails",{headers:{authorization:`Bearer ${r.accessToken}`,"User-Agent":"better-auth"}});s&&(t.email=(s.find(u=>u.primary)??s[0])?.email,a=s.find(u=>u.email===t.email)?.verified??!1);let c=await e.mapProfileToUser?.(t);return{user:{id:t.id.toString(),name:t.name||t.login,email:t.email,image:t.avatar_url,emailVerified:a,...c},data:t}}}},"github");var x=["info","success","warn","error","debug"];function ne(e,i){return x.indexOf(i)<=x.indexOf(e)}n(ne,"shouldPublishLog");var m={reset:"\x1B[0m",bright:"\x1B[1m",dim:"\x1B[2m",underscore:"\x1B[4m",blink:"\x1B[5m",reverse:"\x1B[7m",hidden:"\x1B[8m",fg:{black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"},bg:{black:"\x1B[40m",red:"\x1B[41m",green:"\x1B[42m",yellow:"\x1B[43m",blue:"\x1B[44m",magenta:"\x1B[45m",cyan:"\x1B[46m",white:"\x1B[47m"}},ae={info:m.fg.blue,success:m.fg.green,warn:m.fg.yellow,error:m.fg.red,debug:m.fg.magenta},se=n((e,i)=>{let r=new Date().toISOString();return`${m.dim}${r}${m.reset} ${ae[e]}${e.toUpperCase()}${m.reset} ${m.bright}Better Auth${m.reset} ${i}`},"formatMessage"),ce=n(e=>{let i=e?.disabled!==!0,r=e?.level??"error",t=n((o,a,s=[])=>{if(!i||!ne(r,o))return;let c=se(o,a);if(!e||typeof e.log!="function"){o==="error"?console.error(c,...s):o==="warn"?console.warn(c,...s):console.log(c,...s);return}e.log(o==="success"?"info":o,c,...s)},"LogFunc");return Object.fromEntries(x.map(o=>[o,(...[a,...s])=>t(o,a,s)]))},"createLogger"),b=ce();import{betterFetch as de}from"@better-fetch/fetch";import{decodeJwt as le}from"jose";var O=n(e=>({id:"google",name:"Google",async createAuthorizationURL({state:i,scopes:r,codeVerifier:t,redirectURI:o}){if(!e.clientId||!e.clientSecret)throw b.error("Client Id and Client Secret is required for Google. Make sure to provide them in the options."),new h("CLIENT_ID_AND_SECRET_REQUIRED");if(!t)throw new h("codeVerifier is required for Google");let a=r||["email","profile","openid"];e.scope&&a.push(...e.scope);let s=await p({id:"google",options:e,authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",scopes:a,state:i,codeVerifier:t,redirectURI:o});return e.accessType&&s.searchParams.set("access_type",e.accessType),e.prompt&&s.searchParams.set("prompt",e.prompt),s},validateAuthorizationCode:n(async({code:i,codeVerifier:r,redirectURI:t})=>l({code:i,codeVerifier:r,redirectURI:e.redirectURI||t,options:e,tokenEndpoint:"https://oauth2.googleapis.com/token"}),"validateAuthorizationCode"),async verifyIdToken(i,r){if(e.disableIdTokenSignIn)return!1;if(e.verifyIdToken)return e.verifyIdToken(i,r);let t=`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${i}`,{data:o}=await de(t);return o?o.aud===e.clientId&&o.iss==="https://accounts.google.com":!1},async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);if(!i.idToken)return null;let r=le(i.idToken),t=await e.mapProfileToUser?.(r);return{user:{id:r.sub,name:r.name,email:r.email,image:r.picture,emailVerified:r.email_verified,...t},data:r}}}),"google");import{betterFetch as ue}from"@better-fetch/fetch";import{decodeJwt as pe}from"jose";var z=n(e=>{let i=e.tenantId||"common",r=`https://login.microsoftonline.com/${i}/oauth2/v2.0/authorize`,t=`https://login.microsoftonline.com/${i}/oauth2/v2.0/token`;return{id:"microsoft",name:"Microsoft EntraID",createAuthorizationURL(o){let a=o.scopes||["openid","profile","email","User.Read"];return e.scope&&a.push(...e.scope),p({id:"microsoft",options:e,authorizationEndpoint:r,state:o.state,codeVerifier:o.codeVerifier,scopes:a,redirectURI:o.redirectURI})},validateAuthorizationCode({code:o,codeVerifier:a,redirectURI:s}){return l({code:o,codeVerifier:a,redirectURI:e.redirectURI||s,options:e,tokenEndpoint:t})},async getUserInfo(o){if(e.getUserInfo)return e.getUserInfo(o);if(!o.idToken)return null;let a=pe(o.idToken),s=e.profilePhotoSize||48;await ue(`https://graph.microsoft.com/v1.0/me/photos/${s}x${s}/$value`,{headers:{Authorization:`Bearer ${o.accessToken}`},async onResponse(u){if(!(e.disableProfilePhoto||!u.response.ok))try{let f=await u.response.clone().arrayBuffer(),g=Buffer.from(f).toString("base64");a.picture=`data:image/jpeg;base64, ${g}`}catch(d){b.error(d&&typeof d=="object"&&"name"in d?d.name:"",d)}}});let c=await e.mapProfileToUser?.(a);return{user:{id:a.sub,name:a.name,email:a.email,image:a.picture,emailVerified:!0,...c},data:a}}}},"microsoft");import{betterFetch as me}from"@better-fetch/fetch";var E=n(e=>({id:"spotify",name:"Spotify",createAuthorizationURL({state:i,scopes:r,codeVerifier:t,redirectURI:o}){let a=r||["user-read-email"];return e.scope&&a.push(...e.scope),p({id:"spotify",options:e,authorizationEndpoint:"https://accounts.spotify.com/authorize",scopes:a,state:i,codeVerifier:t,redirectURI:o})},validateAuthorizationCode:n(async({code:i,codeVerifier:r,redirectURI:t})=>l({code:i,codeVerifier:r,redirectURI:e.redirectURI||t,options:e,tokenEndpoint:"https://accounts.spotify.com/api/token"}),"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let{data:r,error:t}=await me("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:`Bearer ${i.accessToken}`}});if(t)return null;let o=await e.mapProfileToUser?.(r);return{user:{id:r.id,name:r.display_name,email:r.email,image:r.images[0]?.url,emailVerified:!1,...o},data:r}}}),"spotify");import{createRandomStringGenerator as kt}from"@better-auth/utils/random";import{decodeJwt as fe}from"jose";var S=n(e=>({id:"twitch",name:"Twitch",createAuthorizationURL({state:i,scopes:r,redirectURI:t}){let o=r||["user:read:email","openid"];return e.scope&&o.push(...e.scope),p({id:"twitch",redirectURI:t,options:e,authorizationEndpoint:"https://id.twitch.tv/oauth2/authorize",scopes:o,state:i,claims:e.claims||["email","email_verified","preferred_username","picture"]})},validateAuthorizationCode:n(async({code:i,redirectURI:r})=>l({code:i,redirectURI:e.redirectURI||r,options:e,tokenEndpoint:"https://id.twitch.tv/oauth2/token"}),"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let r=i.idToken;if(!r)return b.error("No idToken found in token"),null;let t=fe(r),o=await e.mapProfileToUser?.(t);return{user:{id:t.sub,name:t.preferred_username,email:t.email,image:t.picture,emailVerified:!1,...o},data:t}}}),"twitch");import{betterFetch as ge}from"@better-fetch/fetch";var $=n(e=>({id:"twitter",name:"Twitter",createAuthorizationURL(i){let r=i.scopes||["users.read","tweet.read","offline.access"];return e.scope&&r.push(...e.scope),p({id:"twitter",options:e,authorizationEndpoint:"https://x.com/i/oauth2/authorize",scopes:r,state:i.state,codeVerifier:i.codeVerifier,redirectURI:i.redirectURI})},validateAuthorizationCode:n(async({code:i,codeVerifier:r,redirectURI:t})=>l({code:i,codeVerifier:r,authentication:"basic",redirectURI:e.redirectURI||t,options:e,tokenEndpoint:"https://api.x.com/2/oauth2/token"}),"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let{data:r,error:t}=await ge("https://api.x.com/2/users/me?user.fields=profile_image_url",{method:"GET",headers:{Authorization:`Bearer ${i.accessToken}`}});if(t)return null;let o=await e.mapProfileToUser?.(r);return{user:{id:r.data.id,name:r.data.name,email:r.data.username||null,image:r.data.profile_image_url,emailVerified:r.data.verified||!1,...o},data:r}}}),"twitter");import{betterFetch as he}from"@better-fetch/fetch";var C=n(e=>{let i="https://api.dropboxapi.com/oauth2/token";return{id:"dropbox",name:"Dropbox",createAuthorizationURL:n(async({state:r,scopes:t,codeVerifier:o,redirectURI:a})=>{let s=t||["account_info.read"];return e.scope&&s.push(...e.scope),await p({id:"dropbox",options:e,authorizationEndpoint:"https://www.dropbox.com/oauth2/authorize",scopes:s,state:r,redirectURI:a,codeVerifier:o})},"createAuthorizationURL"),validateAuthorizationCode:n(async({code:r,codeVerifier:t,redirectURI:o})=>await l({code:r,codeVerifier:t,redirectURI:e.redirectURI||o,options:e,tokenEndpoint:i}),"validateAuthorizationCode"),async getUserInfo(r){if(e.getUserInfo)return e.getUserInfo(r);let{data:t,error:o}=await he("https://api.dropboxapi.com/2/users/get_current_account",{method:"POST",headers:{Authorization:`Bearer ${r.accessToken}`}});if(o)return null;let a=await e.mapProfileToUser?.(t);return{user:{id:t.account_id,name:t.name?.display_name,email:t.email,emailVerified:t.email_verified||!1,image:t.profile_photo_url,...a},data:t}}}},"dropbox");import{betterFetch as be}from"@better-fetch/fetch";var B=n(e=>{let i="https://www.linkedin.com/oauth/v2/authorization",r="https://www.linkedin.com/oauth/v2/accessToken";return{id:"linkedin",name:"Linkedin",createAuthorizationURL:n(async({state:t,scopes:o,redirectURI:a})=>{let s=o||["profile","email","openid"];return e.scope&&s.push(...e.scope),await p({id:"linkedin",options:e,authorizationEndpoint:i,scopes:s,state:t,redirectURI:a})},"createAuthorizationURL"),validateAuthorizationCode:n(async({code:t,redirectURI:o})=>await l({code:t,redirectURI:e.redirectURI||o,options:e,tokenEndpoint:r}),"validateAuthorizationCode"),async getUserInfo(t){let{data:o,error:a}=await be("https://api.linkedin.com/v2/userinfo",{method:"GET",headers:{Authorization:`Bearer ${t.accessToken}`}});if(a)return null;let s=await e.mapProfileToUser?.(o);return{user:{id:o.sub,name:o.name,email:o.email,emailVerified:o.email_verified||!1,image:o.picture,...s},data:o}}}},"linkedin");import{betterFetch as ye}from"@better-fetch/fetch";var w=n((e="")=>e.split("://").map(i=>i.replace(/\/{2,}/g,"/")).join("://"),"cleanDoubleSlashes"),_e=n(e=>{let i=e||"https://gitlab.com";return{authorizationEndpoint:w(`${i}/oauth/authorize`),tokenEndpoint:w(`${i}/oauth/token`),userinfoEndpoint:w(`${i}/api/v4/user`)}},"issuerToEndpoints"),D=n(e=>{let{authorizationEndpoint:i,tokenEndpoint:r,userinfoEndpoint:t}=_e(e.issuer),o="gitlab";return{id:o,name:"Gitlab",createAuthorizationURL:n(async({state:s,scopes:c,codeVerifier:u,redirectURI:d})=>{let f=c||["read_user"];return e.scope&&f.push(...e.scope),await p({id:o,options:e,authorizationEndpoint:i,scopes:f,state:s,redirectURI:d,codeVerifier:u})},"createAuthorizationURL"),validateAuthorizationCode:n(async({code:s,redirectURI:c,codeVerifier:u})=>l({code:s,redirectURI:e.redirectURI||c,options:e,codeVerifier:u,tokenEndpoint:r}),"validateAuthorizationCode"),async getUserInfo(s){if(e.getUserInfo)return e.getUserInfo(s);let{data:c,error:u}=await ye(t,{headers:{authorization:`Bearer ${s.accessToken}`}});if(u||c.state!=="active"||c.locked)return null;let d=await e.mapProfileToUser?.(c);return{user:{id:c.id.toString(),name:c.name??c.username,email:c.email,image:c.avatar_url,emailVerified:!0,...d},data:c}}}},"gitlab");import{betterFetch as V}from"@better-fetch/fetch";var G=n(e=>({id:"reddit",name:"Reddit",createAuthorizationURL({state:i,scopes:r,redirectURI:t}){let o=r||["identity"];return e.scope&&o.push(...e.scope),p({id:"reddit",options:e,authorizationEndpoint:"https://www.reddit.com/api/v1/authorize",scopes:o,state:i,redirectURI:t,duration:e.duration})},validateAuthorizationCode:n(async({code:i,redirectURI:r})=>{let t=new URLSearchParams({grant_type:"authorization_code",code:i,redirect_uri:e.redirectURI||r}),o={"content-type":"application/x-www-form-urlencoded",accept:"text/plain","user-agent":"better-auth",Authorization:`Basic ${Buffer.from(`${e.clientId}:${e.clientSecret}`).toString("base64")}`},{data:a,error:s}=await V("https://www.reddit.com/api/v1/access_token",{method:"POST",headers:o,body:t.toString()});if(s)throw s;return _(a)},"validateAuthorizationCode"),async getUserInfo(i){if(e.getUserInfo)return e.getUserInfo(i);let{data:r,error:t}=await V("https://oauth.reddit.com/api/v1/me",{headers:{Authorization:`Bearer ${i.accessToken}`,"User-Agent":"better-auth"}});if(t)return null;let o=await e.mapProfileToUser?.(r);return{user:{id:r.id,name:r.name,email:r.oauth_client_id,emailVerified:r.has_verified_email,image:r.icon_img?.split("?")[0],...o},data:r}}}),"reddit");import{z as ve}from"zod";var xe={apple:R,discord:k,facebook:I,github:T,microsoft:z,google:O,spotify:E,twitch:S,twitter:$,dropbox:C,linkedin:B,gitlab:D,reddit:G},we=Object.keys(xe),Ui=ve.enum(we,{description:"OAuth2 provider to use"});export{Ui as SocialProviderListEnum,R as apple,k as discord,C as dropbox,I as facebook,te as getApplePublicKey,T as github,D as gitlab,O as google,B as linkedin,z as microsoft,G as reddit,we as socialProviderList,xe as socialProviders,E as spotify,S as twitch,$ as twitter};