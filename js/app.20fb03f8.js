(function(e){function t(t){for(var n,o,c=t[0],u=t[1],f=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-chart/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"25ad":function(e,t,r){},4034:function(e,t,r){"use strict";var n=r("25ad"),a=r.n(n);a.a},"47e4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("main-chart")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organization",{attrs:{datasource:e.treeStuff}})],1)},c=[],u=(r("8e6e"),r("ac6a"),r("456d"),r("75fc")),f=(r("7f7f"),r("bd86")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Vue2OrgTree",{staticClass:"tree",attrs:{data:e.datasource,renderContent:e.renderContent,props:e.props,labelWidth:e.labelWidth},on:{"on-node-click":e.clickNode}})],1)},l=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},e._l(e.worker,(function(t,n){return r("div",{key:n},["image_url"===n?r("img",{staticClass:"avatar",attrs:{src:t}}):e.isShowValue(n)?r("div",{staticClass:"title"},[e._v(e._s(t))]):e._e()])})),0)},d=[],h={name:"Card",props:{worker:Object,name:String,image_url:String,position:String},methods:{isShowValue:function(e){var t=!1;switch(e){case"name":case"position":t=!0;break}return t}}},b=h,O=(r("4034"),r("2877")),v=Object(O["a"])(b,p,d,!1,null,"79271570",null),g=v.exports;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={name:"Organization",data:function(){return{props:{worker:"worker",expand:"expand",children:"children"},labelWidth:260}},props:{datasource:Object},methods:{renderContent:function(e,t){var r=y({},t);return e(g,{props:{worker:r}})},clickNode:function(e,t){console.log("e",e,"data",t)}}},w=j,S=(r("a80b"),Object(O["a"])(w,s,l,!1,null,"4c2eea26",null)),P=S.exports,_=r("359c"),k=r.n(_);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={name:"MainChart",components:{Organization:P},data:function(){return{initStuff:null,treeStuff:null}},created:function(){this.generateStuff(),this.generateTreeStuff()},methods:{generateTreeStuff:function(){var e=this.initStuff.reduce((function(e,t){return e[t.id]=C({},t),e}),{}),t=this.initStuff.reduce((function(t,r){var n=e[r.id];return n.chiefId?(e[r.chiefId].children||(e[r.chiefId].children=[]),e[r.chiefId].children.push(n)):t.push(n),t}),[])[0];return this.treeStuff=t,console.log("tree data",JSON.stringify(t,null," ")),t},generateStuff:function(){var e=7,t=this.generateStuffSchema(e),r=t.map((function(e){return e.ids.map((function(t){return{id:t,image_url:k.a.image.avatar(),name:k.a.name.findName(),position:k.a.name.jobTitle(),chiefId:e.chiefId}}))})).flat();return this.initStuff=r,console.log("initial data",JSON.stringify(r,null," ")),r},generateStuffSchema:function(e){var t=this,r=1,n=[],a=Object(u["a"])(Array(e)).map((function(e,a){var i=Object(u["a"])(Array(a+1)).map((function(){var e=r;return r++,e})),o=t.getChiefId(n);return n=i,{ids:i,chiefId:o}}));return a},getChiefId:function(e){if(!e.length)return null;var t=e[0],r=e[e.length-1];return r===t?r:Math.floor(Math.random()*(r-t+1))+t}}},D=I,E=(r("91c2"),Object(O["a"])(D,o,c,!1,null,"64531b84",null)),M=E.exports,T={name:"app",components:{MainChart:M}},N=T,$=(r("034f"),Object(O["a"])(N,a,i,!1,null,null,null)),J=$.exports,z=r("99f6");n["a"].config.productionTip=!1,n["a"].use(z["a"]),new n["a"]({render:function(e){return e(J)}}).$mount("#app")},"64a9":function(e,t,r){},"836f":function(e,t,r){},"91c2":function(e,t,r){"use strict";var n=r("47e4"),a=r.n(n);a.a},a80b:function(e,t,r){"use strict";var n=r("836f"),a=r.n(n);a.a}});
//# sourceMappingURL=app.20fb03f8.js.map