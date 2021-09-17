(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-338589e4"],{"1aeb":function(e,l,a){"use strict";a("dfbc")},"77e6":function(e,l,a){"use strict";a.r(l),a.d(l,"DemoExamples",(function(){return c}));var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"form-examples"},[a("h4",{staticClass:"mb-8 text-h4"},[e._v(e._s(e.$route.meta.title))]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("v-card",[a("v-card-text",[e._l(e.cells.fields,(function(l,t){return["text"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field"},[a("z-text-field",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,validation:l.validation,defaultValue:l.defaultValue}})],1):e._e(),"select"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field"},[a("z-select",{attrs:{formId:e.formId,formKey:l.formKey,clearable:"",label:l.label,validation:l.validation,options:l.options,defaultValue:l.defaultValue}})],1):e._e(),"date"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field"},[a("z-date-picker",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,validation:l.validation,defaultValue:l.defaultValue}})],1):e._e(),"radios"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field"},[a("z-radios",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,validation:l.validation,options:l.options,defaultValue:l.defaultValue}})],1):e._e(),"checkboxs"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field",attrs:{cols:"12"}},[a("z-checkboxs",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,validation:l.validation,options:l.options,defaultValue:l.defaultValue}})],1):e._e(),"textarea"===l.inputType?a("div",{key:"InfoFormTextarea_"+t,staticClass:"field",attrs:{cols:"12"}},[a("z-textarea",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,validation:l.validation,defaultValue:l.defaultValue}})],1):e._e(),"btnToggle"===l.inputType?a("div",{key:"InfoFormBtnToggle_"+t,staticClass:"field"},[a("z-btn-toggle",{attrs:{formId:e.formId,formKey:l.formKey,color:"primary",flip:"",label:l.label,validation:l.validation,options:l.options,defaultValue:l.defaultValue}})],1):e._e(),"switch"===l.inputType?a("div",{key:"InfoFormInput_"+t,staticClass:"field"},[a("z-switch",{attrs:{formId:e.formId,formKey:l.formKey,label:l.label,defaultValue:l.defaultValue}})],1):e._e()]}))],2),a("v-card-actions",[a("v-spacer"),a("z-btn",{attrs:{formId:e.formId,color:"primary",btnType:"validate"},on:{click:e.onSubmit}},[e._v("提交")]),a("z-btn",{staticClass:"mx-2",attrs:{formId:e.formId,color:"warning",btnType:"reset"},on:{click:e.onReset}},[e._v("重置")]),a("z-btn",{attrs:{formId:e.formId,color:"error",btnType:"clear"},on:{click:e.onClear}},[e._v("清空")])],1)],1)],1)],1)],1)},o=[],i=a("5530"),r=a("2f62"),d=[{inputType:"text",formKey:"name",label:"姓名",validation:[{rule:"required",message:"姓名为必填项."}],defaultValue:void 0},{inputType:"text",formKey:"phone",label:"手机",validation:[{rule:"required",message:"手机为必填项."},{regex:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,message:"手机格式不正确."}],defaultValue:void 0},{inputType:"select",formKey:"area",label:"居住城市",options:[{label:"广州",value:1},{label:"深圳",value:2},{label:"珠海",value:3}],validation:[{rule:"required",message:"居住城市为必选项."}],defaultValue:void 0},{inputType:"date",formKey:"date",label:"生日",validation:[{rule:"required",message:"生日为必选项."}],defaultValue:"2021-09-20"},{inputType:"radios",formKey:"gender",label:"性别",options:[{label:"男性",value:1},{label:"女性",value:2}],validation:[{rule:"required",message:"请选择性别."}],defaultValue:void 0},{inputType:"checkboxs",formKey:"hobby",label:"兴趣",options:[{label:"游泳",value:1},{label:"乒乓球",value:2},{label:"羽毛球",value:3}],validation:[{rule:"required",message:"请选择兴趣."}],defaultValue:[2]},{inputType:"btnToggle",formKey:"sexual",label:"性取向",options:[{label:"异性恋",value:1,icon:"mdi-heart-outline"},{label:"同性恋",value:2,icon:"mdi-heart-multiple-outline "},{label:"双性恋",value:3,icon:"mdi-heart-half-full"},{label:"无性",value:4}],validation:[{rule:"required",message:"性取向为必选项."}],defaultValue:1},{inputType:"switch",formKey:"active",label:"激活",defaultValue:!0}],s={fields:d},n={name:"FormExamples",data:function(){return{formId:"examples",cells:s}},methods:{onSubmit:function(){console.log(this.forms[this.formId])},onReset:function(){console.log(this.forms[this.formId])},onClear:function(){console.log(this.forms[this.formId])}},computed:Object(i["a"])({},Object(r["b"])(["forms"]))},u=n,f=(a("1aeb"),a("2877")),m=Object(f["a"])(u,t,o,!1,null,"1ef6df25",null),c=m.exports;l["default"]=c},dfbc:function(e,l,a){}}]);
//# sourceMappingURL=chunk-338589e4.77374294.js.map