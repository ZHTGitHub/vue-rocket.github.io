(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e8df840"],{"4dc0":function(e,t,a){},"77e6":function(e,t,a){"use strict";a.r(t),a.d(t,"DemoExamples",(function(){return m}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-examples"},[a("h4",{staticClass:"mb-8 text-h4"},[e._v(e._s(e.$route.meta.title))]),a("div",{staticClass:"filters"},[a("v-row",[a("z-btn",{staticClass:"mb-2",attrs:{formId:e.searchFormId,color:"primary",outlined:"",small:"",lockedTime:0},on:{click:e.onToggle}},[e._v(" TOGGLE ")])],1),e.show?a("v-row",{staticClass:"z-flex align-center"},[a("v-col",{attrs:{cols:"2"}},[a("z-text-field",{attrs:{formId:e.searchFormId,formKey:"name",label:"姓名",validation:[{rule:"required",message:"姓名为必填项."}]}})],1),a("z-btn",{staticClass:"mb-2",attrs:{formId:e.searchFormId,btnType:"validate",color:"primary",lockedTime:"0"},on:{click:e.onSearch}},[e._v(" 搜索 ")])],1):e._e()],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("v-card",[a("v-card-text",[e._l(e.cells.fields,(function(t,l){return["text"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field"},[a("z-text-field",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,validation:t.validation,defaultValue:t.defaultValue}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend-outer"},slot:"prepend-outer"},[e._v(e._s(t.prependOuter))])])],1):e._e(),"select"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field"},[a("z-select",{attrs:{formId:e.formId,formKey:t.formKey,clearable:"",label:t.label,validation:t.validation,options:t.options,defaultValue:t.defaultValue}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend-outer"},slot:"prepend-outer"},[e._v(e._s(t.prependOuter))])])],1):e._e(),"date"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field"},[a("z-date-picker",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,validation:t.validation,defaultValue:t.defaultValue}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend-outer"},slot:"prepend-outer"},[e._v(e._s(t.prependOuter))])])],1):e._e(),"radios"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field"},[a("z-radios",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,validation:t.validation,options:t.options,defaultValue:t.defaultValue}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend"},slot:"prepend"},[e._v("*")])])],1):e._e(),"checkboxs"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field",attrs:{cols:"12"}},[a("z-checkboxs",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,validation:t.validation,options:t.options,defaultValue:t.defaultValue}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend"},slot:"prepend"},[e._v("*")])])],1):e._e(),"textarea"===t.inputType?a("div",{key:"InfoFormTextarea_"+l,staticClass:"field",attrs:{cols:"12"}},[a("z-textarea",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,validation:t.validation,defaultValue:t.defaultValue}})],1):e._e(),"btnToggle"===t.inputType?a("div",{key:"InfoFormBtnToggle_"+l,staticClass:"field"},[a("z-btn-toggle",{attrs:{formId:e.formId,formKey:t.formKey,color:"primary",flip:"",multiple:"",label:t.label,validation:t.validation,options:t.options,defaultValue:[1]}},[a("span",{staticClass:"error--text",attrs:{slot:"prepend"},slot:"prepend"},[e._v("*")])])],1):e._e(),"switch"===t.inputType?a("div",{key:"InfoFormInput_"+l,staticClass:"field"},[a("z-switch",{attrs:{formId:e.formId,formKey:t.formKey,label:t.label,defaultValue:t.defaultValue}})],1):e._e()]}))],2),a("v-card-actions",[a("v-spacer"),a("z-btn",{attrs:{formId:e.formId,color:"primary",btnType:"validate"},on:{click:e.onSubmit}},[a("v-icon",[e._v("mdi-send")]),e._v(" 提交")],1),a("z-btn",{staticClass:"mx-2",attrs:{formId:e.formId,color:"warning",btnType:"reset"},on:{click:e.onReset}},[a("v-icon",[e._v("mdi-reload")]),e._v(" 重置")],1),a("z-btn",{attrs:{formId:e.formId,color:"error",btnType:"clear"},on:{click:e.onClear}},[a("v-icon",[e._v("mdi-broom")]),e._v(" 清空")],1)],1)],1)],1)],1)],1)},o=[],r=a("5530"),s=a("2f62"),i=[{inputType:"text",formKey:"name",label:"姓名",prependOuter:"*",validation:[{rule:"required",message:"姓名为必填项."},{rule:"min:4",message:"字段长度不得小于4."}],defaultValue:void 0},{inputType:"text",formKey:"phone",label:"手机",validation:[{regex:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,message:"手机格式不正确."}],defaultValue:void 0},{inputType:"select",formKey:"area",label:"居住城市",prependOuter:"*",options:[{label:"广州",value:1},{label:"深圳",value:2},{label:"珠海",value:3}],validation:[{rule:"required",message:"居住城市为必选项."}],defaultValue:void 0},{inputType:"date",formKey:"date",label:"生日",prependOuter:"*",validation:[{rule:"required",message:"生日为必选项."}],defaultValue:"2021-09-20"},{inputType:"radios",formKey:"gender",label:"性别",options:[{label:"男性",value:1},{label:"女性",value:2}],prepend:"*",validation:[{rule:"required",message:"请选择性别."}],defaultValue:void 0},{inputType:"checkboxs",formKey:"hobby",label:"兴趣",options:[{label:"游泳",value:1},{label:"乒乓球",value:2},{label:"羽毛球",value:3}],prepend:"*",validation:[{rule:"required",message:"请选择兴趣."}],defaultValue:[2]},{inputType:"btnToggle",formKey:"sexual",label:"视力",options:[{label:"正常",value:1},{label:"近视",value:2},{label:"远视",value:3}],validation:[{rule:"required",message:"视力为必选项."}],defaultValue:1},{inputType:"switch",formKey:"active",label:"激活",validation:[{rule:"required",message:"请勾选激活."}],defaultValue:void 0}],n={fields:i},d={name:"FormExamples",data:function(){return{formId:"Examples",searchFormId:"ExamplesSearch",cells:n,show:!1}},methods:{onSearch:function(){console.log(this.forms[this.searchFormId])},onToggle:function(){this.show=!this.show},onSubmit:function(){console.log(this.forms[this.formId])},onReset:function(){console.log(this.forms[this.formId])},onClear:function(){console.log(this.forms[this.formId])}},computed:Object(r["a"])({},Object(s["b"])(["forms"]))},u=d,f=(a("e0f0"),a("2877")),p=Object(f["a"])(u,l,o,!1,null,"e55b7a14",null),m=p.exports;t["default"]=m},e0f0:function(e,t,a){"use strict";a("4dc0")}}]);
//# sourceMappingURL=chunk-5e8df840.19669e86.js.map