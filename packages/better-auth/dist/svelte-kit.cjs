"use strict";var l=Object.create;var a=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var i=(t,e)=>a(t,"name",{value:e,configurable:!0});var R=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},o=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of q(e))!m.call(t,s)&&s!==r&&a(t,s,{get:()=>e[s],enumerable:!(n=c(e,s))||n.enumerable});return t};var d=(t,e,r)=>(r=t!=null?l(f(t)):{},o(e||!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),y=t=>o(a({},"__esModule",{value:!0}),t);var L={};R(L,{isAuthPath:()=>h,svelteKitHandler:()=>A,toSvelteKitHandler:()=>g});module.exports=y(L);var g=i(t=>e=>t.handler(e.request),"toSvelteKitHandler"),A=i(async({auth:t,event:e,resolve:r})=>{let{building:n}=await import("$app/environment").catch(u=>{}).then(u=>u||{});if(n)return r(e);let{request:s,url:p}=e;return h(p.toString(),t.options)?t.handler(s):r(e)},"svelteKitHandler");function h(t,e){let r=new URL(t),n=new URL(`${e.baseURL||r.origin}${e.basePath||"/api/auth"}`);return!(r.origin!==n.origin||!r.pathname.startsWith(n.pathname.endsWith("/")?n.pathname:`${n.pathname}/`))}i(h,"isAuthPath");0&&(module.exports={isAuthPath,svelteKitHandler,toSvelteKitHandler});
