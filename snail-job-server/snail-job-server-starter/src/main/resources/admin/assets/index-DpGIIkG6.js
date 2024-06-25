import{a as E,b as Q,u as J,N as X,c as Y,d as Z}from"./search-form.vue_vue_type_script_setup_true_lang-xYfW9G7N.js";import{aA as T,o as R,b as I,e as ee,d as x,Q as B,R as z,c as C,w as r,f as n,h as a,$ as l,g as p,t as g,a9 as A,bm as P,P as U,a8 as ae,C as te,z as le,ad as ne,aG as oe,B as D,av as re,i as se,ae as w,ag as ie,O as de}from"./index-D3rICic-.js";import{e as ue}from"./group-frwXGSCG.js";import{_ as ce}from"./select-group.vue_vue_type_script_setup_true_lang-Bk3YnuuX.js";import{_ as me}from"./select-scene.vue_vue_type_script_setup_true_lang-DxzzLcAX.js";import{_ as pe}from"./datetime-range.vue_vue_type_script_setup_true_lang-LaVXNa0e.js";import{_ as ge,a as fe}from"./DescriptionsItem-LhWljJnV.js";import{_ as _e}from"./Grid-CRDcRyPk.js";function ye(s){return T({url:"/retry-dead-letter/list",method:"get",params:s})}function be(s,f){return T({url:`/retry-dead-letter/${s}?groupName=${f}`,method:"get"})}function $(s){return T({url:"/retry-dead-letter/batch/rollback",method:"post",data:s})}function S(s){return T({url:"/retry-dead-letter/batch",method:"delete",data:s})}const he={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ke=ee("path",{fill:"currentColor",d:"M20.93 14A7 7 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"},null,-1),Ne=[ke];function ve(s,f){return R(),I("svg",he,[...Ne])}const De={name:"tdesign-rollback",render:ve},we=x({name:"RetryDeadLetterSearch",__name:"dead-letter-search",props:{model:{required:!0},modelModifiers:{}},emits:B(["reset","search"],["update:model"]),setup(s,{emit:f}){const i=f,d=z(s,"model");function u(){i("reset")}function v(){i("search")}return(h,c)=>{const e=E,y=Q;return R(),C(y,{model:d.value,onSearch:v,onReset:u},{default:r(()=>[n(e,{span:"24 s:12 m:6",label:a(l)("page.retryLog.groupName"),path:"groupName",class:"pr-24px"},{default:r(()=>[n(ce,{value:d.value.groupName,"onUpdate:value":c[0]||(c[0]=b=>d.value.groupName=b),clearable:""},null,8,["value"])]),_:1},8,["label"]),n(e,{span:"24 s:12 m:6",label:a(l)("page.retryLog.sceneName"),path:"sceneName",class:"pr-24px"},{default:r(()=>[n(me,{value:d.value.sceneName,"onUpdate:value":c[1]||(c[1]=b=>d.value.sceneName=b),"group-name":d.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),n(e,{span:"24 s:24 m:15 l:12 xl:9",label:a(l)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:r(()=>[n(pe,{value:d.value.datetimeRange,"onUpdate:value":c[2]||(c[2]=b=>d.value.datetimeRange=b)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),Te=x({name:"RetryDeadLetterDetailDrawer",__name:"retry-letter-detail-drawer",props:B({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(s){const f=z(s,"visible");return(i,d)=>{const u=ge,v=U,h=fe,c=ae;return R(),C(c,{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=e=>f.value=e),title:a(l)("page.retryDeadLetter.detail")},{default:r(()=>[n(h,{"label-placement":"top",bordered:"",column:3},{default:r(()=>[n(u,{label:a(l)("page.retryTask.uniqueId"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.uniqueId),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.groupName"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.groupName),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.sceneName"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.sceneName),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.taskType"),span:1},{default:r(()=>{var e;return[n(v,{type:a(A)((e=i.rowData)==null?void 0:e.taskType)},{default:r(()=>{var y;return[p(g(a(l)(a(P)[(y=i.rowData)==null?void 0:y.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.bizNo"),span:2},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.bizNo),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.idempotentId"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.idempotentId),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.executorName"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.executorName),1)]}),_:1},8,["label"]),n(u,{label:a(l)("page.retryTask.argsStr"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.argsStr),1)]}),_:1},8,["label"]),n(u,{label:a(l)("common.createDt"),span:3},{default:r(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),Re={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function L(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!ie(s)}const Ae=x({name:"retry_dead-letter",__name:"index",setup(s){const f=te(),i=le(),{bool:d,setTrue:u}=ne(!1),{columns:v,columnChecks:h,data:c,getData:e,loading:y,mobilePagination:b,searchParams:k,resetSearchParams:V}=J({apiFn:ye,apiParams:{page:1,size:10,groupName:null,sceneName:null,datetimeRange:oe()},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:l("common.index"),align:"center",width:64},{key:"uniqueId",title:l("page.retryDeadLetter.uniqueId"),align:"left",minWidth:120,render:o=>{async function t(){await G(o),u()}return n(D,{text:!0,tag:"a",type:"primary",onClick:t,class:"ws-normal"},{default:()=>[o.uniqueId]})}},{key:"groupName",title:l("page.retryDeadLetter.groupName"),align:"left",minWidth:120},{key:"sceneName",title:l("page.retryDeadLetter.sceneName"),align:"left",minWidth:120},{key:"idempotentId",title:l("page.retryDeadLetter.idempotentId"),align:"left",minWidth:120},{key:"bizNo",title:l("page.retryDeadLetter.bizNo"),align:"left",minWidth:120},{key:"taskType",title:l("page.retryDeadLetter.taskType"),align:"left",minWidth:120,render:o=>{if(o.taskType===null)return null;const t=l(P[o.taskType]);return n(U,{type:A(o.taskType)},L(t)?t:{default:()=>[t]})}},{key:"createDt",title:l("page.retryDeadLetter.createDt"),align:"left",minWidth:120},{key:"operate",title:l("common.operate"),align:"center",width:130,render:o=>{let t;return n("div",{class:"flex-center gap-8px"},[n(D,{type:"primary",text:!0,ghost:!0,size:"small",onClick:()=>H(o)},L(t=l("common.rollback"))?t:{default:()=>[t]}),n(re,{vertical:!0},null),n(X,{onPositiveClick:()=>W(o)},{default:()=>l("common.confirmDelete"),trigger:()=>{let m;return n(D,{type:"error",text:!0,ghost:!0,size:"small"},L(m=l("common.delete"))?m:{default:()=>[m]})}})])}}]}),{handleAdd:q,checkedRowKeys:N}=Y(c,e);async function M(){var t;const{error:o}=await S({ids:N.value,groupName:k.groupName});o||((t=window.$message)==null||t.success(l("common.deleteSuccess")),e())}async function O(){var t;const{error:o}=await $({ids:N.value,groupName:k.groupName});o||((t=window.$message)==null||t.success(l("common.rollbackSuccess")),e())}async function W(o){var m;const{error:t}=await S({ids:[o.id],groupName:o.groupName});t||((m=window.$message)==null||m.success(l("common.deleteSuccess")),e())}async function G(o){const t=await be(o.id,o.groupName);i.value=t.data||null}async function H(o){var m;const{error:t}=await $({ids:[o.id],groupName:o.groupName});t||((m=window.$message)==null||m.success(l("common.rollbackSuccess")),e())}return se(async()=>{const{error:o,data:t}=await ue();!o&&t.length>0&&(k.groupName=t[0],e())}),(o,t)=>{const m=De,j=Z,F=_e,K=de;return R(),I("div",Re,[n(we,{model:a(k),"onUpdate:model":t[0]||(t[0]=_=>w(k)?k.value=_:null),onReset:a(V),onSearch:a(e)},null,8,["model","onReset","onSearch"]),n(K,{title:a(l)("page.retryDeadLetter.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":r(()=>[n(j,{columns:a(h),"onUpdate:columns":t[1]||(t[1]=_=>w(h)?h.value=_:null),"disabled-delete":a(N).length===0,loading:a(y),"show-add":!1,onAdd:a(q),onDelete:M,onRefresh:a(e)},{addAfter:r(()=>[n(a(D),{size:"small",ghost:"",type:"primary",onClick:O},{icon:r(()=>[n(m,{class:"text-icon"})]),default:r(()=>[p(" "+g(a(l)("common.batchRollback")),1)]),_:1})]),_:1},8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:r(()=>[n(F,{"checked-row-keys":a(N),"onUpdate:checkedRowKeys":t[2]||(t[2]=_=>w(N)?N.value=_:null),columns:a(v),data:a(c),"flex-height":!a(f).isMobile,"scroll-x":962,loading:a(y),remote:"","row-key":_=>_.id,pagination:a(b),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),n(Te,{visible:a(d),"onUpdate:visible":t[3]||(t[3]=_=>w(d)?d.value=_:null),"row-data":i.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{Ae as default};
