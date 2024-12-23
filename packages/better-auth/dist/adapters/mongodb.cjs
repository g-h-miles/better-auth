"use strict";var v=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var s=(e,a)=>v(e,"name",{value:a,configurable:!0});var V=(e,a)=>{for(var n in a)v(e,n,{get:a[n],enumerable:!0})},P=(e,a,n,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of E(a))!M.call(e,r)&&r!==n&&v(e,r,{get:()=>a[r],enumerable:!(l=L(a,r))||l.enumerable});return e};var _=e=>P(v({},"__esModule",{value:!0}),e);var ce={};V(ce,{mongodbAdapter:()=>ue});module.exports=_(ce);var x=require("mongodb");var d=require("zod"),C=require("better-call");var me=d.z.object({id:d.z.string(),providerId:d.z.string(),accountId:d.z.string(),userId:d.z.string(),accessToken:d.z.string().nullish(),refreshToken:d.z.string().nullish(),idToken:d.z.string().nullish(),accessTokenExpiresAt:d.z.date().nullish(),refreshTokenExpiresAt:d.z.date().nullish(),scope:d.z.string().nullish(),password:d.z.string().nullish(),createdAt:d.z.date().default(()=>new Date),updatedAt:d.z.date().default(()=>new Date)}),ye=d.z.object({id:d.z.string(),email:d.z.string().transform(e=>e.toLowerCase()),emailVerified:d.z.boolean().default(!1),name:d.z.string(),image:d.z.string().nullish(),createdAt:d.z.date().default(()=>new Date),updatedAt:d.z.date().default(()=>new Date)}),ge=d.z.object({id:d.z.string(),userId:d.z.string(),expiresAt:d.z.date(),createdAt:d.z.date().default(()=>new Date),updatedAt:d.z.date().default(()=>new Date),token:d.z.string(),ipAddress:d.z.string().nullish(),userAgent:d.z.string().nullish()}),Ae=d.z.object({id:d.z.string(),value:d.z.string(),createdAt:d.z.date().default(()=>new Date),updatedAt:d.z.date().default(()=>new Date),expiresAt:d.z.date(),identifier:d.z.string()});var T=Object.create(null),b=s(e=>globalThis.process?.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?T:globalThis),"_getEnv"),I=new Proxy(T,{get(e,a){return b()[a]??T[a]},has(e,a){let n=b();return a in n||a in T},set(e,a,n){let l=b(!0);return l[a]=n,!0},deleteProperty(e,a){if(!a)return!1;let n=b(!0);return delete n[a],!0},ownKeys(){let e=b(!0);return Object.keys(e)}});function $(e){return e?e!=="false":!1}s($,"toBoolean");var j=typeof process<"u"&&process.env&&process.env.NODE_ENV||"";var K=j==="test"||$(I.TEST);var W=require("@better-auth/utils/random");var ee=require("zod"),te=require("better-call");var Q=require("@better-auth/utils/hash"),X=require("@noble/ciphers/chacha"),O=require("@noble/ciphers/utils"),Y=require("@noble/ciphers/webcrypto");var J=require("@noble/hashes/scrypt"),z=require("uncrypto"),G=require("@better-auth/utils/hex");var N=require("@better-auth/utils/random"),Z=(0,N.createRandomStringGenerator)("a-z","0-9","A-Z","-_");var D=["info","success","warn","error","debug"];function re(e,a){return D.indexOf(a)<=D.indexOf(e)}s(re,"shouldPublishLog");var A={reset:"\x1B[0m",bright:"\x1B[1m",dim:"\x1B[2m",underscore:"\x1B[4m",blink:"\x1B[5m",reverse:"\x1B[7m",hidden:"\x1B[8m",fg:{black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"},bg:{black:"\x1B[40m",red:"\x1B[41m",green:"\x1B[42m",yellow:"\x1B[43m",blue:"\x1B[44m",magenta:"\x1B[45m",cyan:"\x1B[46m",white:"\x1B[47m"}},ne={info:A.fg.blue,success:A.fg.green,warn:A.fg.yellow,error:A.fg.red,debug:A.fg.magenta},se=s((e,a)=>{let n=new Date().toISOString();return`${A.dim}${n}${A.reset} ${ne[e]}${e.toUpperCase()}${A.reset} ${A.bright}Better Auth${A.reset} ${a}`},"formatMessage"),U=s(e=>{let a=e?.disabled!==!0,n=e?.level??"error",l=s((r,i,t=[])=>{if(!a||!re(n,r))return;let o=se(r,i);if(!e||typeof e.log!="function"){r==="error"?console.error(o,...t):r==="warn"?console.warn(o,...t):console.log(o,...t);return}e.log(r==="success"?"info":r,o,...t)},"LogFunc");return Object.fromEntries(D.map(r=>[r,(...[i,...t])=>l(r,i,t)]))},"createLogger"),ie=U();var w=s(e=>{let a=e.plugins?.reduce((u,f)=>{let c=f.schema;if(!c)return u;for(let[p,h]of Object.entries(c))u[p]={fields:{...u[p]?.fields,...h.fields},modelName:h.modelName||p};return u},{}),n=e.rateLimit?.storage==="database",l={rateLimit:{modelName:e.rateLimit?.modelName||"rateLimit",fields:{key:{type:"string",fieldName:e.rateLimit?.fields?.key||"key"},count:{type:"number",fieldName:e.rateLimit?.fields?.count||"count"},lastRequest:{type:"number",fieldName:e.rateLimit?.fields?.lastRequest||"lastRequest"}}}},{user:r,session:i,account:t,...o}=a||{};return{user:{modelName:e.user?.modelName||"user",fields:{name:{type:"string",required:!0,fieldName:e.user?.fields?.name||"name"},email:{type:"string",unique:!0,required:!0,fieldName:e.user?.fields?.email||"email"},emailVerified:{type:"boolean",defaultValue:s(()=>!1,"defaultValue"),required:!0,fieldName:e.user?.fields?.emailVerified||"emailVerified"},image:{type:"string",required:!1,fieldName:e.user?.fields?.image||"image"},createdAt:{type:"date",defaultValue:s(()=>new Date,"defaultValue"),required:!0,fieldName:e.user?.fields?.createdAt||"createdAt"},updatedAt:{type:"date",defaultValue:s(()=>new Date,"defaultValue"),required:!0,fieldName:e.user?.fields?.updatedAt||"updatedAt"},...r?.fields,...e.user?.additionalFields},order:1},session:{modelName:e.session?.modelName||"session",fields:{expiresAt:{type:"date",required:!0,fieldName:e.session?.fields?.expiresAt||"expiresAt"},token:{type:"string",required:!0,fieldName:e.session?.fields?.token||"token",unique:!0},createdAt:{type:"date",required:!0,fieldName:e.session?.fields?.createdAt||"createdAt"},updatedAt:{type:"date",required:!0,fieldName:e.session?.fields?.updatedAt||"updatedAt"},ipAddress:{type:"string",required:!1,fieldName:e.session?.fields?.ipAddress||"ipAddress"},userAgent:{type:"string",required:!1,fieldName:e.session?.fields?.userAgent||"userAgent"},userId:{type:"string",fieldName:e.session?.fields?.userId||"userId",references:{model:e.user?.modelName||"user",field:"id",onDelete:"cascade"},required:!0},...i?.fields,...e.session?.additionalFields},order:2},account:{modelName:e.account?.modelName||"account",fields:{accountId:{type:"string",required:!0,fieldName:e.account?.fields?.accountId||"accountId"},providerId:{type:"string",required:!0,fieldName:e.account?.fields?.providerId||"providerId"},userId:{type:"string",references:{model:e.user?.modelName||"user",field:"id",onDelete:"cascade"},required:!0,fieldName:e.account?.fields?.userId||"userId"},accessToken:{type:"string",required:!1,fieldName:e.account?.fields?.accessToken||"accessToken"},refreshToken:{type:"string",required:!1,fieldName:e.account?.fields?.refreshToken||"refreshToken"},idToken:{type:"string",required:!1,fieldName:e.account?.fields?.idToken||"idToken"},accessTokenExpiresAt:{type:"date",required:!1,fieldName:e.account?.fields?.accessTokenExpiresAt||"accessTokenExpiresAt"},refreshTokenExpiresAt:{type:"date",required:!1,fieldName:e.account?.fields?.accessTokenExpiresAt||"refreshTokenExpiresAt"},scope:{type:"string",required:!1,fieldName:e.account?.fields?.scope||"scope"},password:{type:"string",required:!1,fieldName:e.account?.fields?.password||"password"},createdAt:{type:"date",required:!0,fieldName:e.account?.fields?.createdAt||"createdAt"},updatedAt:{type:"date",required:!0,fieldName:e.account?.fields?.updatedAt||"updatedAt"},...t?.fields},order:3},verification:{modelName:e.verification?.modelName||"verification",fields:{identifier:{type:"string",required:!0,fieldName:e.verification?.fields?.identifier||"identifier"},value:{type:"string",required:!0,fieldName:e.verification?.fields?.value||"value"},expiresAt:{type:"date",required:!0,fieldName:e.verification?.fields?.expiresAt||"expiresAt"},createdAt:{type:"date",required:!1,defaultValue:s(()=>new Date,"defaultValue"),fieldName:e.verification?.fields?.createdAt||"createdAt"},updatedAt:{type:"date",required:!1,defaultValue:s(()=>new Date,"defaultValue"),fieldName:e.verification?.fields?.updatedAt||"updatedAt"}},order:4},...o,...n?l:{}}},"getAuthTables");var ae=require("zod");var q=require("kysely"),R=require("kysely");function k(e,a,n){return n==="update"?e:e==null&&a.defaultValue?typeof a.defaultValue=="function"?a.defaultValue():a.defaultValue:e}s(k,"withApplyDefault");var de=s(e=>{let a=w(e);function n(i,t,o){if(i==="id"||i==="_id"||a[o].fields[i].references?.field==="id"){if(typeof t!="string"){if(t instanceof x.ObjectId)return t;if(Array.isArray(t))return t.map(u=>{if(typeof u=="string")try{return new x.ObjectId(u)}catch{return u}if(u instanceof x.ObjectId)return u;throw new Error("Invalid id value")});throw new Error("Invalid id value")}try{return new x.ObjectId(t)}catch{return t}}return t}s(n,"serializeID");function l(i,t,o){return i==="id"||a[o].fields[i].references?.field==="id"?t instanceof x.ObjectId?t.toHexString():Array.isArray(t)?t.map(u=>u instanceof x.ObjectId?u.toHexString():u):t:t}s(l,"deserializeID");function r(i,t){return i==="id"?"_id":a[t].fields[i].fieldName||i}return s(r,"getField"),{transformInput(i,t,o){let u=o==="update"?{}:{_id:new x.ObjectId},f=a[t].fields;for(let c in f){let p=i[c];p===void 0&&(!f[c].defaultValue||o==="update")||(u[f[c].fieldName||c]=k(n(c,p,t),f[c],o))}return u},transformOutput(i,t,o=[]){let u=i.id||i._id?o.length===0||o.includes("id")?{id:i.id?i.id.toString():i._id.toString()}:{}:{},f=a[t].fields;for(let c in f){if(o.length&&!o.includes(c))continue;let p=f[c];p&&(u[c]=l(c,i[p.fieldName||c],t))}return u},convertWhereClause(i,t){if(!i.length)return{};let o=i.map(p=>{let{field:h,value:m,operator:F="eq",connector:B="AND"}=p,y,g=r(h,t);switch(F.toLowerCase()){case"eq":y={[g]:n(h,m,t)};break;case"in":y={[g]:{$in:Array.isArray(m)?n(h,m,t):[n(h,m,t)]}};break;case"gt":y={[g]:{$gt:m}};break;case"gte":y={[g]:{$gte:m}};break;case"lt":y={[g]:{$lt:m}};break;case"lte":y={[g]:{$lte:m}};break;case"ne":y={[g]:{$ne:m}};break;case"contains":y={[g]:{$regex:`.*${m}.*`}};break;case"starts_with":y={[g]:{$regex:`${m}.*`}};break;case"ends_with":y={[g]:{$regex:`.*${m}`}};break;default:throw new Error(`Unsupported operator: ${F}`)}return{condition:y,connector:B}});if(o.length===1)return o[0].condition;let u=o.filter(p=>p.connector==="AND").map(p=>p.condition),f=o.filter(p=>p.connector==="OR").map(p=>p.condition),c={};return u.length&&(c={...c,$and:u}),f.length&&(c={...c,$or:f}),c},getModelName:s(i=>a[i].modelName,"getModelName"),getField:r}},"createTransform"),ue=s(e=>a=>{let n=de(a);return{id:"mongodb-adapter",async create(l){let{model:r,data:i,select:t}=l,o=n.transformInput(i,r,"create");o.id&&delete o.id;let f=(await e.collection(n.getModelName(r)).insertOne(o)).insertedId,c={...o,id:f.toString()};return n.transformOutput(c,r,t)},async findOne(l){let{model:r,where:i,select:t}=l,o=n.convertWhereClause(i,r),u=await e.collection(n.getModelName(r)).findOne(o);return u?n.transformOutput(u,r,t):null},async findMany(l){let{model:r,where:i,limit:t,offset:o,sortBy:u}=l,f=i?n.convertWhereClause(i,r):{},c=e.collection(n.getModelName(r)).find(f);return t&&c.limit(t),o&&c.skip(o),u&&c.sort(n.getField(u.field,r),u.direction==="desc"?-1:1),(await c.toArray()).map(h=>n.transformOutput(h,r))},async update(l){let{model:r,where:i,update:t}=l,o=n.convertWhereClause(i,r),u=n.transformInput(t,r,"update"),f=await e.collection(n.getModelName(r)).findOneAndUpdate(o,{$set:u},{returnDocument:"after"});return f?n.transformOutput(f,r):null},async updateMany(l){let{model:r,where:i,update:t}=l,o=n.convertWhereClause(i,r),u=n.transformInput(t,r,"update");return(await e.collection(n.getModelName(r)).updateMany(o,{$set:u})).modifiedCount},async delete(l){let{model:r,where:i}=l,t=n.convertWhereClause(i,r),o=await e.collection(n.getModelName(r)).findOneAndDelete(t);return o?n.transformOutput(o,r):null},async deleteMany(l){let{model:r,where:i}=l,t=n.convertWhereClause(i,r);return(await e.collection(n.getModelName(r)).deleteMany(t)).deletedCount}}},"mongodbAdapter");0&&(module.exports={mongodbAdapter});