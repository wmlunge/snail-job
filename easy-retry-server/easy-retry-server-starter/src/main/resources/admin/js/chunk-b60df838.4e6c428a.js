(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b60df838","chunk-2b85f358"],{"38b7":function(t,e){var o={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{2:{name:"固定时间",color:"#f5a22d"},3:{name:"CRON表达式",color:"#d06892"},99:{name:"工作流",color:"#76f52d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"},4:{name:"任务丢弃",color:"#3a2f81"},5:{name:"任务被覆盖",color:"#c2238a"},6:{name:"无可执行任务项",color:"#23c28a"},7:{name:"任务执行期间发生非预期异常",color:"#bdc223"},8:{name:"手动停止",color:"#23c28a"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}},notifyScene:{1:{name:"任务执行失败",color:"#d06892"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},3:{name:"企业微信",color:"#0082EF"},4:{name:"飞书",color:"#087da1"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},workflowStatus:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}}};t.exports=o},"3b7a":function(t,e,o){"use strict";o.d(e,"z",(function(){return n})),o.d(e,"p",(function(){return s})),o.d(e,"s",(function(){return i})),o.d(e,"b",(function(){return c})),o.d(e,"w",(function(){return l})),o.d(e,"x",(function(){return u})),o.d(e,"y",(function(){return f})),o.d(e,"r",(function(){return d})),o.d(e,"o",(function(){return b})),o.d(e,"j",(function(){return m})),o.d(e,"q",(function(){return p})),o.d(e,"a",(function(){return h})),o.d(e,"v",(function(){return w})),o.d(e,"i",(function(){return g})),o.d(e,"l",(function(){return j})),o.d(e,"h",(function(){return y})),o.d(e,"g",(function(){return k})),o.d(e,"f",(function(){return v})),o.d(e,"d",(function(){return _})),o.d(e,"c",(function(){return S})),o.d(e,"m",(function(){return x})),o.d(e,"t",(function(){return I})),o.d(e,"k",(function(){return T})),o.d(e,"e",(function(){return O})),o.d(e,"n",(function(){return N})),o.d(e,"u",(function(){return L}));var r=o("b775"),a={jobPageList:"/job/page/list",jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",triggerJob:"/job/trigger/",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",stop:"/job/batch/stop/",jobNotifyConfigPageList:"/job/notify/config/page/list",jobNotifyConfigDetail:"/job/notify/config/",saveJobNotify:"/job/notify/config/",updateJobNotify:"/job/notify/config/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list",workflowListPage:"/workflow/page/list",saveWorkflow:"/workflow",updateWorkflow:"/workflow",workflowDetail:"/workflow",workflowBatchListPage:"/workflow/batch/page/list",workflowBatchDetail:"/workflow/batch/",updateStatus:"/workflow/update/status/",delWorkflow:"/workflow/",triggerWorkflow:"/workflow/trigger/",stopWorkflowBatch:"/workflow/batch/stop/",workflowNameList:"/workflow/workflow-name/list"};function n(t){return Object(r["b"])({url:a.workflowNameList,method:"get",params:t})}function s(t){return Object(r["b"])({url:a.stopWorkflowBatch+t,method:"post"})}function i(t){return Object(r["b"])({url:a.triggerWorkflow+t,method:"post"})}function c(t){return Object(r["b"])({url:a.delWorkflow+t,method:"delete"})}function l(t){return Object(r["b"])({url:a.updateStatus+t,method:"put"})}function u(t){return Object(r["b"])({url:a.workflowBatchListPage,method:"get",params:t})}function f(t){return Object(r["b"])({url:a.workflowListPage,method:"get",params:t})}function d(t){return Object(r["b"])({url:a.triggerJob+t,method:"post"})}function b(t){return Object(r["b"])({url:a.stop+t,method:"post"})}function m(t){return Object(r["b"])({url:a.jobNameList,method:"get",params:t})}function p(t){return Object(r["b"])({url:a.timeByCron,method:"get",params:t})}function h(t){return Object(r["b"])({url:a.delJob+t,method:"delete"})}function w(t){return Object(r["b"])({url:a.updateJobStatus,method:"put",data:t})}function g(t){return Object(r["b"])({url:a.jobLogList,method:"get",params:t})}function j(t){return Object(r["b"])({url:a.jobTaskList,method:"get",params:t})}function y(t){return Object(r["b"])({url:a.jobBatchList,method:"get",params:t})}function k(t){return Object(r["b"])({url:a.jobBatchDetail+t,method:"get"})}function v(t){return Object(r["b"])({url:a.jobPageList,method:"get",params:t})}function _(t){return Object(r["b"])({url:a.jobList,method:"get",params:t})}function S(t){return Object(r["b"])({url:a.jobDetail+t,method:"get"})}function x(t){return Object(r["b"])({url:a.saveJob,method:"post",data:t})}function I(t){return Object(r["b"])({url:a.updateJob,method:"put",data:t})}function T(t){return Object(r["b"])({url:a.jobNotifyConfigPageList,method:"get",params:t})}function O(t){return Object(r["b"])({url:a.jobNotifyConfigDetail+t,method:"get"})}function N(t){return Object(r["b"])({url:a.saveJobNotify,method:"post",data:t})}function L(t){return Object(r["b"])({url:a.updateJobNotify,method:"put",data:t})}},6289:function(t,e,o){"use strict";o.r(e);o("ac1f"),o("5319"),o("b0c0"),o("a15b"),o("d81d"),o("b64b"),o("99af");var r=function(){var t=this,e=t._self._c;return e("div",[t.showHeader?e("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return t.$router.replace("/job/list")}}},[e("div")]):t._e(),null!==t.jobInfo?e("a-card",{attrs:{bordered:!1}},[e("a-descriptions",{attrs:{title:"",column:t.column,bordered:""}},[e("a-descriptions-item",{attrs:{label:"组名称"}},[t._v(" "+t._s(t.jobInfo.groupName)+" ")]),e("a-descriptions-item",{attrs:{label:"任务名称"}},[t._v(" "+t._s(t.jobInfo.jobName)+" ")]),e("a-descriptions-item",{attrs:{label:"重试状态"}},[e("a-tag",{attrs:{color:t.jobStatusEnum[t.jobInfo.jobStatus].color}},[t._v(" "+t._s(t.jobStatusEnum[t.jobInfo.jobStatus].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"路由策略"}},[e("a-tag",{attrs:{color:t.routeKey[t.jobInfo.routeKey].color}},[t._v(" "+t._s(t.routeKey[t.jobInfo.routeKey].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"阻塞策略"}},[e("a-tag",{attrs:{color:t.blockStrategy[t.jobInfo.blockStrategy].color}},[t._v(" "+t._s(t.blockStrategy[t.jobInfo.blockStrategy].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"并行数"}},[t._v(" "+t._s(t.jobInfo.parallelNum)+" ")]),e("a-descriptions-item",{attrs:{label:"最大重试次数"}},[t._v(" "+t._s(t.jobInfo.maxRetryTimes)+"次 ")]),e("a-descriptions-item",{attrs:{label:"重试间隔"}},[t._v(" "+t._s(t.jobInfo.retryInterval)+"(秒) ")]),e("a-descriptions-item",{attrs:{label:"超时时间"}},[t._v(" "+t._s(t.jobInfo.executorTimeout)+"(秒) ")]),e("a-descriptions-item",{attrs:{label:"下次触发时间"}},[t._v(" "+t._s(t.jobInfo.nextTriggerAt)+" ")]),e("a-descriptions-item",{attrs:{label:"更新时间",span:"4"}},[t._v(" "+t._s(t.jobInfo.updateDt)+" ")]),e("a-descriptions-item",{attrs:{label:"触发类型",span:"1"}},[e("a-tag",{attrs:{color:t.triggerType[t.jobInfo.triggerType].color}},[t._v(" "+t._s(t.triggerType[t.jobInfo.triggerType].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"间隔时长",span:"4"}},[t._v(" "+t._s(t.jobInfo.triggerInterval)+" ")]),e("a-descriptions-item",{attrs:{label:"执行器类型"}},[e("a-tag",{attrs:{color:t.executorType[t.jobInfo.executorType].color}},[t._v(" "+t._s(t.executorType[t.jobInfo.executorType].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"执行器名称",span:"4"}},[t._v(" "+t._s(t.jobInfo.executorInfo)+" ")]),e("a-descriptions-item",{attrs:{label:"任务类型"}},[e("a-tag",{attrs:{color:t.taskType[t.jobInfo.taskType].color}},[t._v(" "+t._s(t.taskType[t.jobInfo.taskType].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"参数",span:"4"}},[t._v(" "+t._s(3===t.jobInfo.taskType?JSON.parse(t.jobInfo.argsStr).map((function(t,e){return"分区:".concat(e,"=>").concat(t)})).join("; "):t.jobInfo.argsStr)+" ")]),e("a-descriptions-item",{attrs:{label:"描述",span:"4"}},[t._v(" "+t._s(t.jobInfo.extAttrs)+" ")])],1)],1):t._e()],1)},a=[],n=(o("a9e3"),o("3b7a")),s=o("c1df"),i=o.n(s),c=o("38b7"),l=o.n(c),u={name:"JobInfo",components:{},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:4}},data:function(){return{jobInfo:null,jobStatusEnum:l.a.jobStatusEnum,taskType:l.a.taskType,triggerType:l.a.triggerType,blockStrategy:l.a.blockStrategy,executorType:l.a.executorType,routeKey:l.a.routeKey}},created:function(){var t=this.$route.query.id,e=this.$route.query.groupName;t&&e?this.jobDetail(t):this.showHeader&&this.$router.push({path:"/404"})},methods:{parseDate:function(t){return i()(t).format("YYYY-MM-DD HH:mm:ss")},jobDetail:function(t){var e=this;Object(n["c"])(t).then((function(t){e.jobInfo=t.data}))}}},f=u,d=o("2877"),b=Object(d["a"])(f,r,a,!1,null,"0689f75f",null);e["default"]=b.exports},dfc8:function(t,e,o){"use strict";o.r(e);o("b0c0");var r=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"组名称"}},[e("a-select",{attrs:{placeholder:"请输入组名称"},on:{change:function(e){return t.handleChange(e)}},model:{value:t.queryParam.groupName,callback:function(e){t.$set(t.queryParam,"groupName",e)},expression:"queryParam.groupName"}},t._l(t.groupNameList,(function(o){return e("a-select-option",{key:o,attrs:{value:o}},[t._v(t._s(o))])})),1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"任务名称"}},[e("a-input",{attrs:{placeholder:"请输入任务名称",allowClear:""},model:{value:t.queryParam.workflowName,callback:function(e){t.$set(t.queryParam,"workflowName",e)},expression:"queryParam.workflowName"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"状态"}},[e("a-select",{attrs:{placeholder:"请选择状态",allowClear:""},model:{value:t.queryParam.workflowStatus,callback:function(e){t.$set(t.queryParam,"workflowStatus",e)},expression:"queryParam.workflowStatus"}},t._l(t.workflowStatus,(function(o,r){return e("a-select-option",{key:r,attrs:{value:r}},[t._v(" "+t._s(o.name))])})),1)],1)],1),t.advanced?void 0:t._e(),e("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")]),e("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),e("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.handleNew()}}},[t._v("新增")]),t.selectedRowKeys.length>0?e("a-dropdown",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]}):t._e()],1),e("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,scroll:{x:1600}},scopedSlots:t._u([{key:"serial",fn:function(o,r){return e("span",{},[t._v(" "+t._s(r.id)+" ")])}},{key:"workflowName",fn:function(o){return e("span",{},[t._v(" "+t._s(o)+" ")])}},{key:"workflowStatus",fn:function(o){return e("span",{},[e("a-tag",{attrs:{color:t.workflowStatus[o].color}},[t._v(" "+t._s(t.workflowStatus[o].name)+" ")])],1)}},{key:"triggerType",fn:function(o){return e("span",{},[e("a-tag",{attrs:{color:t.triggerType[o].color}},[t._v(" "+t._s(t.triggerType[o].name)+" ")])],1)}},{key:"triggerInterval",fn:function(o){return e("span",{},[e("span",[t._v(t._s(o))])])}},{key:"executorTimeout",fn:function(o){return e("span",{},[e("span",[t._v(t._s(o)+"(秒)")])])}},{key:"action",fn:function(o,r){return e("span",{},[[e("a-popconfirm",{attrs:{title:"是否运行?","ok-text":"运行","cancel-text":"取消"},on:{confirm:function(e){return t.handleTrigger(r)}}},[e("a",{attrs:{href:"javascript:;"}},[t._v("运行")])]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.handleInfo(r)}}},[t._v("详情")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.goJobBatchList(r)}}},[t._v("批次")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.handleEdit(r)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"是否关闭?","ok-text":"关闭","cancel-text":"取消"},on:{confirm:function(e){return t.handleOpenOrClose(r)}}},[1===r.workflowStatus?e("a",{attrs:{href:"javascript:;"}},[t._v("关闭")]):t._e()]),1===r.workflowStatus?e("a-divider",{attrs:{type:"vertical"}}):t._e(),e("a-popconfirm",{attrs:{title:"是否开启?","ok-text":"开启","cancel-text":"取消"},on:{confirm:function(e){return t.handleOpenOrClose(r)}}},[0===r.workflowStatus?e("a",{attrs:{href:"javascript:;"}},[t._v("开启")]):t._e()]),0===r.workflowStatus?e("a-divider",{attrs:{type:"vertical"}}):t._e(),t.$auth("job.del")?e("a-popconfirm",{attrs:{title:"是否删除工作流?","ok-text":"删除","cancel-text":"取消"},on:{confirm:function(e){return t.handleDel(r)}}},[0===r.workflowStatus?e("a",{attrs:{href:"javascript:;"}},[t._v("删除")]):t._e()]):t._e(),0===r.workflowStatus&&t.$auth("job.del")?e("a-divider",{attrs:{type:"vertical"}}):t._e(),e("a-popconfirm",{attrs:{title:"是否复制此工作流?","ok-text":"复制","cancel-text":"取消"},on:{confirm:function(e){return t.handleCopy(r)}}},[e("a",{attrs:{href:"javascript:;"}},[t._v("复制")])])]],2)}}])})],1)},a=[],n=o("261e"),s=o("27e3"),i=o("2af9"),c=o("3b7a"),l=o("0fea"),u=o("38b7"),f=o.n(u),d=o("6289"),b={name:"WorkflowList",components:{AInput:s["a"],ATextarea:n["a"],STable:i["i"],JobInfo:d["default"],Drawer:i["c"]},data:function(){var t=this;return{currentComponet:"List",record:"",mdl:{},visible:!1,advanced:!1,queryParam:{},workflowStatus:f.a.workflowStatus,triggerType:f.a.triggerType,blockStrategy:f.a.blockStrategy,executorType:f.a.executorType,columns:[{title:"ID",scopedSlots:{customRender:"serial"},fixed:"left"},{title:"工作流名称",dataIndex:"workflowName",scopedSlots:{customRender:"workflowName"}},{title:"组名称",dataIndex:"groupName",width:"15%"},{title:"触发时间",dataIndex:"nextTriggerAt",ellipsis:!0,width:"10%"},{title:"状态",dataIndex:"workflowStatus",scopedSlots:{customRender:"workflowStatus"}},{title:"触发类型",dataIndex:"triggerType",scopedSlots:{customRender:"triggerType"}},{title:"间隔时长",dataIndex:"triggerInterval",scopedSlots:{customRender:"triggerInterval"},ellipsis:!0},{title:"超时时间",dataIndex:"executorTimeout",scopedSlots:{customRender:"executorTimeout"}},{title:"更新时间",dataIndex:"updateDt",sorter:!0},{title:"操作",fixed:"right",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(e){return Object(c["y"])(Object.assign(e,t.queryParam)).then((function(t){return t}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){t.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,groupNameList:[],sceneList:[],openDrawer:!1,currentShowRecord:null}},created:function(){var t=this;Object(l["j"])().then((function(e){t.groupNameList=e.data}))},methods:{handleEdit:function(t){this.$router.push({path:"/job/workflow/edit",query:{id:t.id}})},goJobBatchList:function(t){this.$router.push({path:"/job/workflow/batch/list",query:{workflowId:t.id}})},handleNew:function(){this.$router.push({path:"/job/workflow/edit"})},handleChange:function(t){},toggleAdvanced:function(){this.advanced=!this.advanced},handleInfo:function(t){t=t||this.currentShowRecord,this.$router.push({path:"/job/workflow/detail",query:{id:t.id}})},handleOk:function(t){},handleTrigger:function(t){var e=this;Object(c["s"])(t.id).then((function(t){var o=t.status;0===o?e.$message.error("执行失败"):e.$message.success("执行成功")}))},handleOpenOrClose:function(t){var e=this;Object(c["w"])(t.id).then((function(t){var o=t.status;0===o?e.$message.error("执行失败"):(e.$refs.table.refresh(!0),e.$message.success("执行成功"))}))},handleCopy:function(t){this.$router.push({path:"/job/workflow/copy",query:{id:t.id}})},handleDel:function(t){var e=this;Object(c["b"])(t.id).then((function(t){var o=t.status;0===o?e.$message.error("删除失败"):(e.$refs.table.refresh(!0),e.$message.success("删除成功"))}))},refreshTable:function(t){this.$refs.table.refresh(!0)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},handlerOpenDrawer:function(t){var e=this;this.currentShowRecord=t,this.openDrawer=!0,setTimeout((function(){e.$refs.jobInfoRef.jobDetail(t.id)}),200)},onClose:function(){this.openDrawer=!1,this.currentShowRecord=null}}},m=b,p=o("2877"),h=Object(p["a"])(m,r,a,!1,null,null,null);e["default"]=h.exports}}]);