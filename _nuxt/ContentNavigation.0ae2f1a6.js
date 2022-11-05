import{_ as r,f as d,j as m,D as b,a as V,E as B,k as c,F as j,G as y,u as N,H as k,q as v,p as P,I as $,J as T,K as O,L as S,M as C,e as x,d as n,t as M,N as w,h as z,O as q}from"./entry.f2b0a195.js";import{u as H}from"./asyncData.d6595fcf.js";import{h as L,j as F}from"./query.d26720c3.js";import{w as U,s as G,u as W,a as J}from"./utils.6bdef4f0.js";import"./ContentDoc.86c4545d.js";import"./ContentList.f7d0491f.js";import"./ContentQuery.94030935.js";import"./ContentRenderer.712d17d2.js";import"./ContentRendererMarkdown.ee172cb2.js";import"./ContentSlot.93498f31.js";import"./DocumentDrivenEmpty.8fc67204.js";import"./DocumentDrivenNotFound.ca72e036.js";import"./Markdown.8afe7f71.js";import"./ProseCode.95bfc845.js";import"./_commonjsHelpers.f8a6f4fc.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=U(e?`/navigation/${L(e)}.json`:"/navigation");if(G())return(await r(()=>import("./client-db.38fba099.js"),["./client-db.38fba099.js","./entry.f2b0a195.js","./entry.95e870db.css","./utils.6bdef4f0.js","./query.d26720c3.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(a=>a.generateNavigation))(e||{});const i=await $fetch(o,{method:"GET",responseType:"json",params:{_params:F(e||{}),previewToken:W("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const A={},Y=d({props:{name:String},async setup(t,e){const o=await A[t.name]().then(i=>i.default||i);return()=>m(o,{},e.slots)}}),Q=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=b("_route"),i=o===V()?B():o,u=c(()=>{var a,l;return(l=(a=N(t.name))!=null?a:i.meta.layout)!=null?l:"default"});return()=>{var s;const a=u.value&&u.value in A,l=(s=i.meta.layoutTransition)!=null?s:j;return y(k,a&&l,{default:()=>y(Y,a&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=v(null),u=P();return $(a=>{if(!u.isHydrating)return o("error",a),i.value=a,!1}),()=>{var a,l;return i.value?(a=e.error)==null?void 0:a.call(e,{error:i}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=v(!1);return T(()=>{o.value=!0}),i=>{var s;if(o.value)return(s=e.default)==null?void 0:s.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=i.fallback||i.placeholder||"",l=i.fallbackTag||i.placeholderTag||"span";return O(l,null,a)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u;if(o.mounted$){const a=t.render(o,...i);return a.children===null||typeof a.children=="string"?S(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):m(a)}else return m("div",(u=o.$attrs)!=null?u:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var a;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,o,i))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?S(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",i.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),it=d({name:"DevOnly",setup(t,e){return()=>null}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),at=d({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=_t({duration:t.duration,throttle:t.throttle}),i=P();return i.hook("page:start",o.start),i.hook("page:finish",o.finish),C(()=>o.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),o=v(!1),i=c(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,o.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function I(R){e.value=Math.min(100,e.value+R)}function D(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:l,finish:s,clear:_}}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,i)=>(x(()=>t({...st(o),...i.attrs},i)),()=>{var u,a;return e?(a=(u=i.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{script:[o]}})}),pt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{noscript:[o]}})}),ft=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ht=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),vt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var i,u,a;return{title:((a=(u=(i=e.default)==null?void 0:i.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),gt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ct=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const o={...t},i=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return i&&(o.children=i),{style:[o]}})}),Et=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,i;return(i=(o=e.slots).default)==null?void 0:i.call(o)}}),yt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),St=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,Script:mt,NoScript:pt,Link:ft,Base:ht,Title:vt,Meta:gt,Style:ct,Head:Et,Html:yt,Body:St},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./AppTable.459c17f8.js"),["./AppTable.459c17f8.js","./AppTable.vue_vue_type_script_setup_true_lang.77369be3.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./IconWikipedia.f7003b32.js"),["./IconWikipedia.f7003b32.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentDoc.86c4545d.js"),["./ContentDoc.86c4545d.js","./entry.f2b0a195.js","./entry.95e870db.css","./ContentRenderer.712d17d2.js","./ContentRendererMarkdown.ee172cb2.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.94030935.js","./asyncData.d6595fcf.js","./query.d26720c3.js","./utils.6bdef4f0.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.f7d0491f.js"),["./ContentList.f7d0491f.js","./ContentQuery.94030935.js","./entry.f2b0a195.js","./entry.95e870db.css","./asyncData.d6595fcf.js","./query.d26720c3.js","./utils.6bdef4f0.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>Tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.94030935.js"),["./ContentQuery.94030935.js","./entry.f2b0a195.js","./entry.95e870db.css","./asyncData.d6595fcf.js","./query.d26720c3.js","./utils.6bdef4f0.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.712d17d2.js"),["./ContentRenderer.712d17d2.js","./ContentRendererMarkdown.ee172cb2.js","./entry.f2b0a195.js","./entry.95e870db.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.ee172cb2.js"),["./ContentRendererMarkdown.ee172cb2.js","./entry.f2b0a195.js","./entry.95e870db.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.93498f31.js"),["./ContentSlot.93498f31.js","./utils.6bdef4f0.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.8fc67204.js"),["./DocumentDrivenEmpty.8fc67204.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.ca72e036.js"),["./DocumentDrivenNotFound.ca72e036.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.8afe7f71.js"),["./Markdown.8afe7f71.js","./ContentSlot.93498f31.js","./utils.6bdef4f0.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.ce515389.js"),["./ProseA.ce515389.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.ffc9cd31.js"),["./ProseBlockquote.ffc9cd31.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.95bfc845.js"),["./ProseCode.95bfc845.js","./entry.f2b0a195.js","./entry.95e870db.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.a848d199.js"),["./ProseCodeInline.a848d199.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.258a308d.js"),["./ProseEm.258a308d.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.120732c1.js"),["./ProseH1.120732c1.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.4fb5326c.js"),["./ProseH2.4fb5326c.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.50429253.js"),["./ProseH3.50429253.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.131b6be5.js"),["./ProseH4.131b6be5.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.436d06e5.js"),["./ProseH5.436d06e5.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.39983daa.js"),["./ProseH6.39983daa.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.782b2282.js"),["./ProseHr.782b2282.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.10c9b071.js"),["./ProseImg.10c9b071.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.eca65343.js"),["./ProseLi.eca65343.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.0c8b8ca0.js"),["./ProseOl.0c8b8ca0.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.901d5b39.js"),["./ProseP.901d5b39.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.7cca69cf.js"),["./ProseStrong.7cca69cf.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.ea7157c4.js"),["./ProseTable.ea7157c4.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.9584cbd4.js"),["./ProseTbody.9584cbd4.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.5b625e10.js"),["./ProseTd.5b625e10.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.d7da1117.js"),["./ProseTh.d7da1117.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.158015a9.js"),["./ProseThead.158015a9.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.ddbefccd.js"),["./ProseTr.ddbefccd.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.139e8ba2.js"),["./ProseUl.139e8ba2.js","./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.46f4aea9.js"),["./welcome.46f4aea9.js","./entry.f2b0a195.js","./entry.95e870db.css","./asyncData.d6595fcf.js","./query.d26720c3.js","./utils.6bdef4f0.js","./ContentDoc.86c4545d.js","./ContentRenderer.712d17d2.js","./ContentRendererMarkdown.ee172cb2.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.94030935.js","./ContentList.f7d0491f.js","./ContentSlot.93498f31.js","./DocumentDrivenEmpty.8fc67204.js","./DocumentDrivenNotFound.ca72e036.js","./Markdown.8afe7f71.js","./ProseCode.95bfc845.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.f2b0a195.js").then(t=>t.a6),["./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.f2b0a195.js").then(t=>t.a7),["./entry.f2b0a195.js","./entry.95e870db.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Script));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Pt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),o=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&w("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:i}=await H(`content-navigation-${L(o.value)}`,()=>K(o.value));return{navigation:i}},render(t){const e=z(),{navigation:o}=t,i=l=>m(q,{to:l._path},()=>l.title),u=(l,s)=>m("ul",s?{"data-level":s}:null,l.map(_=>_.children?m("li",null,[i(_),u(_.children,s+1)]):m("li",null,i(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{Pt as default};