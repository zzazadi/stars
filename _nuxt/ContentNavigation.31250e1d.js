import{_ as r,e as d,i as m,p as V,I as b,h as c,J as B,K as y,L as j,u as N,M as k,r as v,B as S,N as $,O as T,a as O,s as P,P as x,x as C,d as i,z as M,Q as w,f as z,R as q}from"./entry.1d7e920c.js";import{u as H}from"./asyncData.7cfeab54.js";import{h as L,j as F}from"./query.b67bc76d.js";import{w as U,s as W,a as G,b as J}from"./utils.637f9a8e.js";import"./ContentSlot.d12fdec3.js";/* empty css                                                                        */import"./ContentRenderer.441dfffb.js";/* empty css                                                    */import"./ContentDoc.3b06922c.js";import"./ContentList.b536d541.js";import"./ContentQuery.5ee18d80.js";import"./ContentRendererMarkdown.a2ead6a2.js";import"./DocumentDrivenEmpty.5c56369f.js";import"./DocumentDrivenNotFound.7448122e.js";import"./Markdown.251ac5f2.js";import"./ProseCode.dd0eb94c.js";import"./_commonjsHelpers.f8a6f4fc.js";import"./_plugin-vue_export-helper.a1a6add7.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=U(e?`/navigation/${L(e)}.json`:"/navigation");if(W())return(await r(()=>import("./client-db.ffad203d.js"),["./client-db.ffad203d.js","./entry.1d7e920c.js","./entry.7522e9be.css","./utils.637f9a8e.js","./query.b67bc76d.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(a=>a.generateNavigation))(e||{});const n=await $fetch(o,{method:"GET",responseType:"json",params:{_params:F(e||{}),previewToken:G("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};const A={},Q=d({props:{name:String},async setup(t,e){const o=await A[t.name]().then(n=>n.default||n);return()=>m(o,{},e.slots)}}),Y=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=j("_route"),n=o===V()?b():o,u=c(()=>{var a,l;return(l=(a=N(t.name))!=null?a:n.meta.layout)!=null?l:"default"});return()=>{var s;const a=u.value&&u.value in A,l=(s=n.meta.layoutTransition)!=null?s:B;return y(k,a&&l,{default:()=>y(Q,a&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=v(null),u=S();return $(a=>{if(!u.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,l;return n.value?(a=e.error)==null?void 0:a.call(e,{error:n}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=v(!1);return T(()=>{o.value=!0}),n=>{var s;if(o.value)return(s=e.default)==null?void 0:s.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=n.fallback||n.placeholder||"",l=n.fallbackTag||n.placeholderTag||"span";return O(l,null,a)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...n)=>{var u;if(o.mounted$){const a=t.render(o,...n);return a.children===null||typeof a.children=="string"?P(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):m(a)}else return m("div",(u=o.$attrs)!=null?u:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,n)=>{var a;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,o,n))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",n.attrs)})},g.set(t,e),e}const it=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),nt=d({name:"DevOnly",setup(t,e){return()=>null}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),at=d({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=_t({duration:t.duration,throttle:t.throttle}),n=S();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),x(()=>o.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),o=v(!1),n=c(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,o.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function I(R){e.value=Math.min(100,e.value+R)}function D(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(n.value)},100)}return{progress:e,isLoading:o,start:l,finish:s,clear:_}}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,n)=>(C(()=>t({...st(o),...n.attrs},n)),()=>{var u,a;return e?(a=(u=n.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{script:[o]}})}),pt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},n=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),ft=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ht=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),vt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var n,u,a;return{title:((a=(u=(n=e.default)==null?void 0:n.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),gt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ct=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const o={...t},n=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return n&&(o.children=n),{style:[o]}})}),Et=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,n;return(n=(o=e.slots).default)==null?void 0:n.call(o)}}),yt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Pt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,Script:mt,NoScript:pt,Link:ft,Base:ht,Title:vt,Meta:gt,Style:ct,Head:Et,Html:yt,Body:Pt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./ProseBlockquote.9203c919.js"),["./ProseBlockquote.9203c919.js","./ContentSlot.d12fdec3.js","./utils.637f9a8e.js","./entry.1d7e920c.js","./entry.7522e9be.css","./_plugin-vue_export-helper.a1a6add7.js","./ProseBlockquote.0e6ec581.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.d547d88d.js"),["./ProseH5.d547d88d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.17f45e60.js"),["./ProseHr.17f45e60.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./RefBox.1b8b44fb.js"),["./RefBox.1b8b44fb.js","./ContentSlot.d12fdec3.js","./utils.637f9a8e.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./AppTable.7ffc568f.js"),["./AppTable.7ffc568f.js","./AppTable.vue_vue_type_script_setup_true_lang.bdd2e50e.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DetailsPage.8e243bab.js"),["./DetailsPage.8e243bab.js","./DetailsPage.vue_vue_type_script_setup_true_lang.87bf1b02.js","./entry.1d7e920c.js","./entry.7522e9be.css","./IconWikipedia.e6926f38.js","./_plugin-vue_export-helper.a1a6add7.js","./ContentRenderer.441dfffb.js","./ContentRendererMarkdown.a2ead6a2.js","./_commonjsHelpers.f8a6f4fc.js","./useURL.974db5b4.js","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js","./DetailsPage.2a223fe0.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./IconWikipedia.e6926f38.js"),["./IconWikipedia.e6926f38.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ListPage.16d2d00d.js"),["./ListPage.16d2d00d.js","./ListPage.vue_vue_type_script_setup_true_lang.93481148.js","./entry.1d7e920c.js","./entry.7522e9be.css","./IconWikipedia.e6926f38.js","./_plugin-vue_export-helper.a1a6add7.js","./AppTable.vue_vue_type_script_setup_true_lang.bdd2e50e.js","./useURL.974db5b4.js","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.3b06922c.js"),["./ContentDoc.3b06922c.js","./entry.1d7e920c.js","./entry.7522e9be.css","./ContentRenderer.441dfffb.js","./ContentRendererMarkdown.a2ead6a2.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.5ee18d80.js","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.b536d541.js"),["./ContentList.b536d541.js","./ContentQuery.5ee18d80.js","./entry.1d7e920c.js","./entry.7522e9be.css","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Tt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.5ee18d80.js"),["./ContentQuery.5ee18d80.js","./entry.1d7e920c.js","./entry.7522e9be.css","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.441dfffb.js"),["./ContentRenderer.441dfffb.js","./ContentRendererMarkdown.a2ead6a2.js","./entry.1d7e920c.js","./entry.7522e9be.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.a2ead6a2.js"),["./ContentRendererMarkdown.a2ead6a2.js","./entry.1d7e920c.js","./entry.7522e9be.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.d12fdec3.js"),["./ContentSlot.d12fdec3.js","./utils.637f9a8e.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.5c56369f.js"),["./DocumentDrivenEmpty.5c56369f.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.7448122e.js"),["./DocumentDrivenNotFound.7448122e.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.251ac5f2.js"),["./Markdown.251ac5f2.js","./ContentSlot.d12fdec3.js","./utils.637f9a8e.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.d1b564e9.js"),["./ProseA.d1b564e9.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.dd0eb94c.js"),["./ProseCode.dd0eb94c.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.5484b89a.js"),["./ProseCodeInline.5484b89a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.0ab5ea23.js"),["./ProseEm.0ab5ea23.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.8c9ea9de.js"),["./ProseH1.8c9ea9de.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.eabff4e0.js"),["./ProseH2.eabff4e0.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.5040d92c.js"),["./ProseH3.5040d92c.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.86dc553a.js"),["./ProseH4.86dc553a.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.c6bdab66.js"),["./ProseH6.c6bdab66.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.9fefd0b5.js"),["./ProseImg.9fefd0b5.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.859e7a68.js"),["./ProseLi.859e7a68.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.068353e2.js"),["./ProseOl.068353e2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.5a55198b.js"),["./ProseP.5a55198b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.c056576a.js"),["./ProseStrong.c056576a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.ab587fcd.js"),["./ProseTable.ab587fcd.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.4de15af9.js"),["./ProseTbody.4de15af9.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.36280ab8.js"),["./ProseTd.36280ab8.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.96e51d51.js"),["./ProseTh.96e51d51.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.0dabe694.js"),["./ProseThead.0dabe694.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.459d13c3.js"),["./ProseTr.459d13c3.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.c45de593.js"),["./ProseUl.c45de593.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.1ada51a4.js"),["./welcome.1ada51a4.js","./entry.1d7e920c.js","./entry.7522e9be.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.7cfeab54.js","./query.b67bc76d.js","./utils.637f9a8e.js","./ContentSlot.d12fdec3.js","./ContentRenderer.441dfffb.js","./ContentRendererMarkdown.a2ead6a2.js","./_commonjsHelpers.f8a6f4fc.js","./ContentDoc.3b06922c.js","./ContentQuery.5ee18d80.js","./ContentList.b536d541.js","./DocumentDrivenEmpty.5c56369f.js","./DocumentDrivenNotFound.7448122e.js","./Markdown.251ac5f2.js","./ProseCode.dd0eb94c.js","./ProseCode.e63e49c6.css","./ProseBlockquote.0e6ec581.css","./DetailsPage.2a223fe0.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.1d7e920c.js").then(t=>t.a8),["./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.1d7e920c.js").then(t=>t.a9),["./entry.1d7e920c.js","./entry.7522e9be.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const St=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),o=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&w("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:n}=await H(`content-navigation-${L(o.value)}`,()=>K(o.value));return{navigation:n}},render(t){const e=z(),{navigation:o}=t,n=l=>m(q,{to:l._path},()=>l.title),u=(l,s)=>m("ul",s?{"data-level":s}:null,l.map(_=>_.children?m("li",null,[n(_),u(_.children,s+1)]):m("li",null,n(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};