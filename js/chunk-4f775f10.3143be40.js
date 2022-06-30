(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f775f10"],{3302:function(t,e,a){"use strict";a("37aa")},"37aa":function(t,e,a){},"57f0":function(t,e,a){},"6f1d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"local-storage"},[a("typing-title",{attrs:{title:t.$route.meta.title}}),t._m(0),t._l(t.cells.rules,(function(e,n){return a("div",{key:"rules_"+n,staticClass:"rule"},[a("h6",{staticClass:"text-h5"},[t._v(t._s(e.name))]),t._l(e.intrs,(function(e,n){return a("p",{key:"intr_"+n,staticClass:"ma-0 pa-0 py-2"},[t._v(t._s(e.text))])})),a("h5",{staticClass:"fw-black"},[t._v("参数")]),t._l(e.params,(function(e,n){return a("p",{key:"param_"+n,staticClass:"ma-0 pa-0 py-2"},[t._v(t._s(e.text))])}))],2)}))],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-12"},[a("p",{staticClass:"text-black"},[t._v("导入")]),a("pre",[a("code",{staticClass:"language-javascript"},[t._v("import { localStorage } from 'vue-rocket'")])])])}],l=a("c197"),r=a.n(l),c=(a("57f0"),a("d3be")),i=[{name:"set(key, value)",intrs:[{text:"当 key 的类型为 String：存储名为 key 的一个值 value，若 key 存在更新 value;"},{text:"当 key 的类型为 Object：通过对象的形式存储多个数据."}],params:[{text:"key (*): 任意值."},{text:"value (*): 任意值."}]},{name:"get(key)",intrs:[{text:"当 key 的类型为 String：获取名称为 key 的值，若 key 不存在返回 null;"},{text:"当 key 的类型为 Array：返回数组里每个 key 对应的值，若 key 不存在返回 null."}],params:[{text:"key (*): 任意值."}]},{name:"delete(key)",intrs:[{text:"当 key 的类型为 String：删除名称为 key 的信息，这个 key 对应的 value 也会被删除;"},{text:"当 key 的类型为 Array：删除数组里每个 key 对应的信息，这个 key 对应的 value 也会被删除."}],params:[{text:"key (*): 任意值."}]},{name:"clear()",intrs:[{text:"清空 localStorage 中所有信息."}],params:[{text:"无."}]}],u={rules:i},o={name:"LocalStorage",data:function(){return{cells:u}},created:function(){for(var t={},e=0;e<100;e+=1)t[e]=e;c["a"].set(t),c["a"].set({a:{val:1,key:"A"},b:{val:2,key:"B"}})},mounted:function(){r.a.highlightAll()},methods:{onDelete:function(){for(var t=[],e=0;e<100;e+=1)t.push(e);c["a"].delete(t)},onGet:function(){console.log(c["a"].get(["a","b","c"]))}}},k=o,y=(a("3302"),a("2877")),f=Object(y["a"])(k,n,s,!1,null,"3dd6d9f0",null),p=f.exports;e["default"]=p}}]);
//# sourceMappingURL=chunk-4f775f10.3143be40.js.map