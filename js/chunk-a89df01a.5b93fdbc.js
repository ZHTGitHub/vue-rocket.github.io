(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a89df01a"],{"1d02":function(e,a,l){},"77e6":function(e,a,l){"use strict";l.r(a),l.d(a,"DemoExamples",(function(){return c}));var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"form-examples"},[l("h4",{staticClass:"mb-8 text-h4"},[e._v(e._s(e.$route.meta.title))]),l("v-row",{attrs:{justify:"center"}},[l("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[l("v-card",[l("v-card-text",[e._l(e.cells.fields,(function(a,t){return["text"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field"},[l("z-text-field",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,validation:a.validation,defaultValue:a.defaultValue}})],1):e._e(),"select"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field"},[l("z-select",{attrs:{formId:e.formId,formKey:a.formKey,clearable:"",label:a.label,validation:a.validation,options:a.options,defaultValue:a.defaultValue}})],1):e._e(),"date"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field"},[l("z-date-picker",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,validation:a.validation,defaultValue:a.defaultValue}})],1):e._e(),"radios"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field"},[l("z-radios",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,validation:a.validation,options:a.options,defaultValue:a.defaultValue}})],1):e._e(),"checkboxs"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field",attrs:{cols:"12"}},[l("z-checkboxs",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,validation:a.validation,options:a.options,defaultValue:a.defaultValue}})],1):e._e(),"textarea"===a.inputType?l("div",{key:"InfoFormTextarea_"+t,staticClass:"field",attrs:{cols:"12"}},[l("z-textarea",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,validation:a.validation,defaultValue:a.defaultValue}})],1):e._e(),"btnToggle"===a.inputType?l("div",{key:"InfoFormBtnToggle_"+t,staticClass:"field"},[l("z-btn-toggle",{attrs:{formId:e.formId,formKey:a.formKey,color:"primary",flip:"",label:a.label,validation:a.validation,options:a.options,defaultValue:a.defaultValue}})],1):e._e(),"switch"===a.inputType?l("div",{key:"InfoFormInput_"+t,staticClass:"field"},[l("z-switch",{attrs:{formId:e.formId,formKey:a.formKey,label:a.label,defaultValue:a.defaultValue}})],1):e._e()]}))],2),l("v-card-actions",[l("v-spacer"),l("z-btn",{attrs:{formId:e.formId,color:"primary",btnType:"validate"},on:{click:e.onSubmit}},[l("v-icon",[e._v("mdi-send")]),e._v(" 提交")],1),l("z-btn",{staticClass:"mx-2",attrs:{formId:e.formId,color:"warning",btnType:"reset"},on:{click:e.onReset}},[l("v-icon",[e._v("mdi-reload")]),e._v(" 重置")],1),l("z-btn",{attrs:{formId:e.formId,color:"error",btnType:"clear"},on:{click:e.onClear}},[l("v-icon",[e._v("mdi-broom")]),e._v(" 清空")],1)],1)],1)],1)],1)],1)},o=[],i=l("5530"),r=l("2f62"),d=[{inputType:"text",formKey:"name",label:"姓名",validation:[{rule:"required",message:"姓名为必填项."}],defaultValue:void 0},{inputType:"text",formKey:"phone",label:"手机",validation:[{rule:"required",message:"手机为必填项."},{regex:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,message:"手机格式不正确."}],defaultValue:void 0},{inputType:"select",formKey:"area",label:"居住城市",options:[{label:"广州",value:1},{label:"深圳",value:2},{label:"珠海",value:3}],validation:[{rule:"required",message:"居住城市为必选项."}],defaultValue:void 0},{inputType:"date",formKey:"date",label:"生日",validation:[{rule:"required",message:"生日为必选项."}],defaultValue:"2021-09-20"},{inputType:"radios",formKey:"gender",label:"性别",options:[{label:"男性",value:1},{label:"女性",value:2}],validation:[{rule:"required",message:"请选择性别."}],defaultValue:void 0},{inputType:"checkboxs",formKey:"hobby",label:"兴趣",options:[{label:"游泳",value:1},{label:"乒乓球",value:2},{label:"羽毛球",value:3}],validation:[{rule:"required",message:"请选择兴趣."}],defaultValue:[2]},{inputType:"btnToggle",formKey:"sexual",label:"性取向",options:[{label:"异性恋",value:1,icon:"mdi-heart-outline"},{label:"同性恋",value:2,icon:"mdi-heart-multiple-outline "},{label:"双性恋",value:3,icon:"mdi-heart-half-full"},{label:"无性",value:4}],validation:[{rule:"required",message:"性取向为必选项."}],defaultValue:1},{inputType:"switch",formKey:"active",label:"激活",validation:[{rule:"required",message:"请勾选激活."}],defaultValue:void 0}],n={fields:d},s={name:"FormExamples",data:function(){return{formId:"examples",cells:n}},methods:{onSubmit:function(){console.log(this.forms[this.formId])},onReset:function(){console.log(this.forms[this.formId])},onClear:function(){console.log(this.forms[this.formId])}},computed:Object(i["a"])({},Object(r["b"])(["forms"]))},u=s,f=(l("c0f3"),l("2877")),m=Object(f["a"])(u,t,o,!1,null,"53276cf6",null),c=m.exports;a["default"]=c},c0f3:function(e,a,l){"use strict";l("1d02")}}]);
//# sourceMappingURL=chunk-a89df01a.5b93fdbc.js.map