import{B as O,r as y,C as x,D as B,E as C,w as A,u as E,j as M}from"./entry.1d7e920c.js";const z=()=>null;function R(...s){var m,_,v,D,w,P,g,b;const c=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(c);let[r,f,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(m=e.server)!=null?m:!0,e.default=(_=e.default)!=null?_:z,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(D=(v=e.lazy)!=null?v:e.defer)!=null?D:!1,e.initialCache=(w=e.initialCache)!=null?w:!0,e.immediate=(P=e.immediate)!=null?P:!0;const a=O(),d=()=>(a.isHydrating||e.initialCache)&&a.payload.data[r]!==void 0;a._asyncData[r]||(a._asyncData[r]={data:y(d()?a.payload.data[r]:(b=(g=e.default)==null?void 0:g.call(e))!=null?b:null),pending:y(!d()),error:y(a.payload._errors[r]?x(a.payload._errors[r]):null)});const n={...a._asyncData[r]};n.refresh=n.execute=(i={})=>{if(a._asyncDataPromises[r]){if(i.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(i._initial&&d())return a.payload.data[r];n.pending.value=!0;const o=new Promise((t,l)=>{try{t(f(a))}catch(u){l(u)}}).then(t=>{if(o.cancelled)return a._asyncDataPromises[r];e.transform&&(t=e.transform(t)),e.pick&&(t=H(t,e.pick)),n.data.value=t,n.error.value=null}).catch(t=>{var l,u;if(o.cancelled)return a._asyncDataPromises[r];n.error.value=t,n.data.value=E((u=(l=e.default)==null?void 0:l.call(e))!=null?u:null)}).finally(()=>{o.cancelled||(n.pending.value=!1,a.payload.data[r]=n.data.value,n.error.value&&(a.payload._errors[r]=x(n.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=o,a._asyncDataPromises[r]};const p=()=>n.refresh({_initial:!0}),k=e.server!==!1&&a.payload.serverRendered;{const i=M();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const t=i._nuxtOnBeforeMountCbs;i&&(B(()=>{t.forEach(l=>{l()}),t.splice(0,t.length)}),C(()=>t.splice(0,t.length)))}k&&a.isHydrating&&r in a.payload.data?n.pending.value=!1:i&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(p):e.immediate&&p(),e.watch&&A(e.watch,()=>n.refresh());const o=a.hook("app:data:refresh",t=>{if(!t||t.includes(r))return n.refresh()});i&&C(o)}const h=Promise.resolve(a._asyncDataPromises[r]).then(()=>n);return Object.assign(h,n),h}async function I(s){const c=s?Array.isArray(s)?s:[s]:void 0;await O().hooks.callHookParallel("app:data:refresh",c)}function H(s,c){const r={};for(const f of c)r[f]=s[f];return r}export{I as r,R as u};