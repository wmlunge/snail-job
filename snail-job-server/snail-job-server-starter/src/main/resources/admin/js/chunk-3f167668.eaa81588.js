(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f167668","chunk-9422a7a0"],{"0564":function(t,e,a){"use strict";a.r(e);a("b0c0");var r=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[t.showSearch?e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"组名称"}},[e("a-select",{attrs:{placeholder:"请输入组名称",allowClear:""},on:{change:function(e){return t.handleChange(e)}},model:{value:t.queryParam.groupName,callback:function(e){t.$set(t.queryParam,"groupName",e)},expression:"queryParam.groupName"}},t._l(t.groupNameList,(function(a){return e("a-select-option",{key:a,attrs:{value:a}},[t._v(t._s(a))])})),1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"场景名称"}},[e("a-select",{attrs:{placeholder:"请选择场景名称",allowClear:""},model:{value:t.queryParam.sceneName,callback:function(e){t.$set(t.queryParam,"sceneName",e)},expression:"queryParam.sceneName"}},t._l(t.sceneList,(function(a){return e("a-select-option",{key:a.sceneName,attrs:{value:a.sceneName}},[t._v(" "+t._s(a.sceneName))])})),1)],1)],1),t.advanced?[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"业务编号"}},[e("a-input",{attrs:{placeholder:"请输入业务编号",allowClear:""},model:{value:t.queryParam.bizNo,callback:function(e){t.$set(t.queryParam,"bizNo",e)},expression:"queryParam.bizNo"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"幂等id"}},[e("a-input",{attrs:{placeholder:"请输入幂等id",allowClear:""},model:{value:t.queryParam.idempotentId,callback:function(e){t.$set(t.queryParam,"idempotentId",e)},expression:"queryParam.idempotentId"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"UniqueId"}},[e("a-input",{attrs:{placeholder:"请输入唯一id",allowClear:""},model:{value:t.queryParam.uniqueId,callback:function(e){t.$set(t.queryParam,"uniqueId",e)},expression:"queryParam.uniqueId"}})],1)],1)]:t._e(),e("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.resetFiled}},[t._v("重置")]),e("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),e("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1):t._e()],1),e("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:t.columns,data:t.loadData,scroll:{x:2e3}},scopedSlots:t._u([{key:"uniqueId",fn:function(a,r){return e("span",{},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.handlerOpenDrawer(r)}}},[t._v(" "+t._s(a))])])}},{key:"taskType",fn:function(a){return e("span",{},[e("a-tag",{attrs:{color:t.taskType[a].color}},[t._v(" "+t._s(t.taskType[a].name)+" ")])],1)}},{key:"retryStatus",fn:function(a){return e("span",{},[e("a-tag",{attrs:{color:t.retryStatus[a].color}},[t._v(" "+t._s(t.retryStatus[a].name)+" ")])],1)}},{key:"action",fn:function(a,r){return e("span",{},[[e("a",{on:{click:function(e){return t.handleInfo(r)}}},[t._v("详情")])]],2)}}])}),e("Drawer",{attrs:{title:"重试日志详情",placement:"right",width:800,visibleAmplify:!0,visible:t.openDrawer},on:{closeDrawer:t.onClose,handlerAmplify:t.handleInfo}},[e("retry-log-info",{ref:"retryLogInfoRef",attrs:{showHeader:!1,column:1}})],1)],1)},n=[],o=a("261e"),s=a("27e3"),i=a("0fea"),l=a("2af9"),c=a("c1df"),d=a.n(c),u=a("5fe2"),f={name:"RetryTaskLog",components:{RetryLogInfo:u["default"],Drawer:l["c"],AInput:s["a"],ATextarea:o["a"],STable:l["i"]},props:{showSearch:{type:Boolean,default:!0}},data:function(){var t=this;return{record:"",mdl:{},advanced:!1,queryParam:{},retryStatus:{0:{name:"处理中",color:"#9c1f1f"},1:{name:"处理成功",color:"#f5a22d"},2:{name:"最大次数",color:"#68a5d0"},3:{name:"暂停",color:"#f52d8e"}},taskType:{1:{name:"重试数据",color:"#d06892"},2:{name:"回调数据",color:"#f5522d"}},columns:[{title:"UniqueId",dataIndex:"uniqueId",width:"10%",scopedSlots:{customRender:"uniqueId"}},{title:"组名称",dataIndex:"groupName",ellipsis:!0,width:"10%"},{title:"场景名称",dataIndex:"sceneName",ellipsis:!0,width:"10%"},{title:"重试状态",dataIndex:"retryStatus",scopedSlots:{customRender:"retryStatus"},width:"5%"},{title:"任务类型",dataIndex:"taskType",scopedSlots:{customRender:"taskType"},width:"5%"},{title:"幂等id",dataIndex:"idempotentId",width:"15%"},{title:"业务编号",dataIndex:"bizNo",ellipsis:!0,width:"15%"},{title:"创建时间",dataIndex:"createDt",sorter:!0,customRender:function(t){return d()(t).format("YYYY-MM-DD HH:mm:ss")},ellipsis:!0},{title:"操作",dataIndex:"action",fixed:"right",width:"150px",scopedSlots:{customRender:"action"}}],loadData:function(e){return""!==t.groupName&&""!==t.uniqueId&&(e["groupName"]=t.groupName,e["uniqueId"]=t.uniqueId),Object(i["x"])(Object.assign(e,t.queryParam)).then((function(t){return t}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){t.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,groupNameList:[],sceneList:[],groupName:"",uniqueId:"",sceneName:"",currentShowRecord:null,openDrawer:!1}},created:function(){var t=this;Object(i["j"])().then((function(e){t.groupNameList=e.data}))},methods:{resetFiled:function(){this.queryParam={},this.sceneList=[]},handleNew:function(){this.$router.push("/form/basic-config")},refreshTable:function(t){this.groupName=t.groupName,this.uniqueId=t.uniqueId,this.$refs.table.refresh(!0)},handleChange:function(t){var e=this;t?Object(i["z"])({groupName:t}).then((function(t){e.sceneList=t.data})):this.sceneList=[]},toggleAdvanced:function(){this.advanced=!this.advanced},handleInfo:function(t){t=t||this.currentShowRecord,this.$router.push({path:"/retry/log/info",query:{id:t.id}})},handlerOpenDrawer:function(t){var e=this;this.currentShowRecord=t,this.openDrawer=!0,setTimeout((function(){e.$refs.retryLogInfoRef.getRetryTaskLogById(t.id)}),1e3)},onClose:function(){this.openDrawer=!1,this.currentShowRecord=null}}},m=f,p=a("2877"),h=Object(p["a"])(m,r,n,!1,null,null,null);e["default"]=h.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("6b75");function n(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||o(t)||Object(s["a"])(t)||i()}},"5acd":function(t,e,a){"use strict";a("87dd")},"5fe2":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("5319"),a("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",[t.showHeader?e("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return t.$router.replace("/retry/log/list")}}},[e("div")]):t._e(),e("a-card",{attrs:{bordered:!1,loading:t.loading}},[e("a-descriptions",{attrs:{title:"",column:t.column,bordered:""}},[e("a-descriptions-item",{attrs:{label:"组名称"}},[t._v(" "+t._s(t.retryInfo.groupName)+" ")]),e("a-descriptions-item",{attrs:{label:"场景名称"}},[t._v(" "+t._s(t.retryInfo.sceneName)+" ")]),e("a-descriptions-item",{attrs:{label:"唯一id"}},[t._v(" "+t._s(t.retryInfo.uniqueId)+" ")]),e("a-descriptions-item",{attrs:{label:"幂等id",span:2}},[t._v(" "+t._s(t.retryInfo.idempotentId)+" ")]),e("a-descriptions-item",{attrs:{label:"业务编号"}},[t._v(" "+t._s(t.retryInfo.bizNo)+" ")]),e("a-descriptions-item",{attrs:{label:"当前重试状态 | 数据类型"}},[t.retryInfo.taskType?e("a-tag",{attrs:{color:"red"}},[t._v(" "+t._s(t.retryStatus[t.retryInfo.retryStatus])+" ")]):t._e(),e("a-divider",{attrs:{type:"vertical"}}),t.retryInfo.taskType?e("a-tag",{attrs:{color:t.taskType[t.retryInfo.taskType].color}},[t._v(" "+t._s(t.taskType[t.retryInfo.taskType].name)+" ")]):t._e()],1),e("a-descriptions-item",{attrs:{label:"创建时间"}},[t._v(" "+t._s(t.retryInfo.createDt)+" ")]),e("a-descriptions-item",{attrs:{label:"执行器名称",span:3}},[t._v(" "+t._s(t.retryInfo.executorName)+" ")]),e("a-descriptions-item",{attrs:{label:"参数",span:3}},[t._v(" "+t._s(t.retryInfo.argsStr)+" ")]),e("a-descriptions-item",{attrs:{label:"扩展参数",span:3}},[t._v(" "+t._s(t.retryInfo.extAttrs)+" ")])],1)],1),e("RetryTaskLogMessage",{attrs:{value:t.retryInfo}})],1)},n=[],o=(a("a9e3"),a("d3b7"),a("0fea")),s=a("2af9"),i=a("eed0"),l={name:"RetryLogInfo",components:{RetryTaskLogMessage:i["a"],STable:s["i"]},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:3}},data:function(){return{loading:!0,retryInfo:{},retryStatus:{0:"处理中",1:"处理成功",2:"最大次数"},taskType:{1:{name:"重试数据",color:"#d06892"},2:{name:"回调数据",color:"#f5a22d"}}}},created:function(){var t=this.$route.query.id;t&&this.getRetryTaskLogById(t)},methods:{getRetryTaskLogById:function(t){var e=this;Object(o["v"])(t).then((function(t){e.retryInfo=t.data,e.queryParam={groupName:t.data.groupName,uniqueId:t.data.uniqueId}})).finally((function(){e.loading=!1}))}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,"65538b41",null);e["default"]=u.exports},"714d":function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"log"},[e("table",{staticClass:"scroller"},[e("tbody",t._l(t.logList,(function(a,r){return e("tr",{key:r},[e("td",{staticClass:"index"},[t._v(" "+t._s(r+1)+" ")]),e("td",[e("div",{staticClass:"content"},[e("div",{staticClass:"line"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"text",staticStyle:{color:"#2db7f5"}},[t._v(t._s(t.timestampToDate(a.time_stamp)))]),e("div",{staticClass:"text",style:{color:t.LevelEnum[a.level].color}},[t._v(" "+t._s(4===a.level.length?a.level+" ":a.level)+" ")]),a.host?e("div",{staticClass:"text",staticStyle:{color:"#00a3a3"}},[t._v(" [ "+t._s(a.host)+" "),a.port?[t._v(":"+t._s(a.port))]:t._e(),t._v(" ] ")],2):t._e(),e("div",{staticClass:"text",staticStyle:{color:"#00a3a3"}},[t._v("["+t._s(a.thread)+"]")]),e("div",{staticClass:"text",staticStyle:{color:"#a771bf","font-weight":"500"}},[t._v(t._s(a.location))]),e("div",{staticClass:"text"},[t._v(":")])]),e("div",{staticClass:"text",staticStyle:{"font-size":"16px"}},[t._v(t._s(a.message))]),e("div",{staticClass:"text",staticStyle:{"font-size":"16px"}},[t._v(t._s(a.throwable))])])])])])})),0)])])},n=[],o=(a("25eb"),a("a9e3"),a("d3b7"),a("25f0"),a("99af"),{name:"Log",components:{},props:{value:{type:Array,default:function(){return[]}}},watch:{value:{deep:!0,immediate:!0,handler:function(t){this.logList=t}}},data:function(){var t=this.$createElement;return{logList:[],indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px; color: '#d9d9d9'"}),LevelEnum:{DEBUG:{name:"DEBUG",color:"#2647cc"},INFO:{name:"INFO",color:"#5c962c"},WARN:{name:"WARN",color:"#da9816"},ERROR:{name:"ERROR",color:"#dc3f41"}}}},methods:{timestampToDate:function(t){var e=new Date(Number.parseInt(t.toString())),a=e.getFullYear(),r=1===(e.getMonth()+1).toString().length?"0"+(e.getMonth()+1):(e.getMonth()+1).toString(),n=e.getDate(),o=e.getHours(),s=1===e.getMinutes().toString().length?"0"+e.getMinutes():e.getMinutes().toString(),i=1===e.getSeconds().toString().length?"0"+e.getSeconds():e.getSeconds().toString();return"".concat(a,"-").concat(r,"-").concat(n," ").concat(o,":").concat(s,":").concat(i,".").concat(e.getMilliseconds())}}}),s=o,i=(a("5acd"),a("2877")),l=Object(i["a"])(s,r,n,!1,null,"048c7c04",null);e["a"]=l.exports},"87dd":function(t,e,a){},eed0:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[e("span",{staticStyle:{"padding-left":"18px"}},[t._v("调用日志详情")]),e("span",{staticStyle:{"padding-left":"18px"}},[e("a-icon",{attrs:{type:"sync"},on:{click:t.getLogData}})],1)]),e("a-card",[e("log",{attrs:{value:t.logList}})],1)],1)},n=[],o=a("2909"),s=(a("4e82"),a("0fea")),i=a("714d"),l={name:"RetryTaskLogMessage",components:{Log:i["a"]},props:{value:{type:Object,default:function(){}}},watch:{value:{deep:!0,immediate:!0,handler:function(){this.getLogData()}}},data:function(){return{startId:0,fromIndex:0,finished:!1,logList:[],interval:null,controller:new AbortController}},mounted:function(){this.getLogData()},beforeDestroy:function(){this.stopLog()},methods:{stopLog:function(){this.finished=!0,this.controller.abort(),clearTimeout(this.interval),this.interval=void 0},getLogData:function(){var t=this;this.value&&Object(s["w"])({groupName:this.value.groupName,uniqueId:this.value.uniqueId,startId:this.startId,fromIndex:this.fromIndex}).then((function(e){var a;(t.finished=e.data.finished,t.startId=e.data.nextStartId,t.fromIndex=e.data.fromIndex,e.data.message)&&((a=t.logList).push.apply(a,Object(o["a"])(e.data.message)),t.logList.sort((function(t,e){return t.time_stamp-e.time_stamp})));t.finished||(clearTimeout(t.interval),t.interval=setTimeout(t.getLogData,1e3))})).catch((function(){t.finished=!0}))}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,"4f54d05c",null);e["a"]=u.exports}}]);