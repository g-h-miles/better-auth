"use strict";var d=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var a=(e,r)=>d(e,"name",{value:r,configurable:!0});var H=(e,r)=>{for(var t in r)d(e,t,{get:r[t],enumerable:!0})},h=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of p(r))!f.call(e,n)&&n!==t&&d(e,n,{get:()=>r[n],enumerable:!(o=i(r,n))||o.enumerable});return e};var l=e=>h(d({},"__esModule",{value:!0}),e);var u={};H(u,{fromNodeHeaders:()=>c,toNodeHandler:()=>m});module.exports=l(u);var s=require("better-call");var m=a(e=>"handler"in e?(0,s.toNodeHandler)(e.handler):(0,s.toNodeHandler)(e),"toNodeHandler");function c(e){let r=new Headers;for(let[t,o]of Object.entries(e))o!==void 0&&(Array.isArray(o)?o.forEach(n=>r.append(t,n)):r.set(t,o));return r}a(c,"fromNodeHeaders");0&&(module.exports={fromNodeHeaders,toNodeHandler});